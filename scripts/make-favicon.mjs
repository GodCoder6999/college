// Builds favicon / apple-touch icons from the transparent brand logo.
//
// The logo is dark navy artwork on a transparent background. That is correct
// for the site header (which sits on navy), but as a browser tab icon it
// vanishes against a dark tab bar. These icons composite it onto white so the
// mark stays legible on both light and dark browser chrome.
//
// Pure Node — no image dependencies.
// Usage: node scripts/make-favicon.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { deflateSync, inflateSync } from 'node:zlib';

const SRC = 'public/images/brand/logo.png';

/** Decode an 8-bit RGBA PNG into a flat pixel buffer. */
function decodePng(buf) {
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  if (buf[24] !== 8 || buf[25] !== 6) throw new Error('expected 8-bit RGBA PNG');

  let off = 8;
  const idat = [];
  while (off < buf.length) {
    const len = buf.readUInt32BE(off);
    const type = buf.toString('ascii', off + 4, off + 8);
    if (type === 'IDAT') idat.push(buf.slice(off + 8, off + 8 + len));
    if (type === 'IEND') break;
    off += 12 + len;
  }

  const raw = inflateSync(Buffer.concat(idat));
  const bpp = 4;
  const stride = width * bpp + 1;
  const out = Buffer.alloc(width * height * bpp);

  for (let y = 0; y < height; y++) {
    const filter = raw[y * stride];
    for (let i = 0; i < width * bpp; i++) {
      const x = raw[y * stride + 1 + i];
      const a = i >= bpp ? out[y * width * bpp + i - bpp] : 0;
      const b = y > 0 ? out[(y - 1) * width * bpp + i] : 0;
      const c = y > 0 && i >= bpp ? out[(y - 1) * width * bpp + i - bpp] : 0;
      let v;
      if (filter === 0) v = x;
      else if (filter === 1) v = x + a;
      else if (filter === 2) v = x + b;
      else if (filter === 3) v = x + ((a + b) >> 1);
      else {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        v = x + (pa <= pb && pa <= pc ? a : pb <= pc ? b : c);
      }
      out[y * width * bpp + i] = v & 0xff;
    }
  }
  return { width, height, data: out };
}

/** Box-filter downscale with alpha compositing onto white. */
function resizeOntoWhite(src, size) {
  const out = Buffer.alloc(size * size * 3);
  const sx = src.width / size;
  const sy = src.height / size;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const x0 = Math.floor(x * sx);
      const x1 = Math.min(src.width, Math.ceil((x + 1) * sx));
      const y0 = Math.floor(y * sy);
      const y1 = Math.min(src.height, Math.ceil((y + 1) * sy));

      let r = 0, g = 0, b = 0, a = 0, n = 0;
      for (let yy = y0; yy < y1; yy++) {
        for (let xx = x0; xx < x1; xx++) {
          const i = (yy * src.width + xx) * 4;
          const al = src.data[i + 3] / 255;
          // premultiply so transparent pixels do not drag colour in
          r += src.data[i] * al;
          g += src.data[i + 1] * al;
          b += src.data[i + 2] * al;
          a += al;
          n++;
        }
      }
      r /= n; g /= n; b /= n; a /= n;
      // composite premultiplied colour over white
      const o = (y * size + x) * 3;
      out[o] = Math.round(r + 255 * (1 - a));
      out[o + 1] = Math.round(g + 255 * (1 - a));
      out[o + 2] = Math.round(b + 255 * (1 - a));
    }
  }
  return out;
}

const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

/** Encode an RGB buffer as a PNG. */
function encodePng(rgb, size) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // colour type: RGB
  const stride = size * 3;
  const raw = Buffer.alloc((stride + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (stride + 1)] = 0; // filter: None
    rgb.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/**
 * Encode an RGB buffer as an RGBA PNG (fully opaque).
 * Next.js parses src/app/favicon.ico and rejects non-RGBA embedded PNGs.
 */
function encodePngRgba(rgb, size) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // colour type: RGBA
  const stride = size * 4;
  const raw = Buffer.alloc((stride + 1) * size);
  for (let y = 0; y < size; y++) {
    const base = y * (stride + 1);
    raw[base] = 0; // filter: None
    for (let x = 0; x < size; x++) {
      const s = (y * size + x) * 3;
      const d = base + 1 + x * 4;
      raw[d] = rgb[s];
      raw[d + 1] = rgb[s + 1];
      raw[d + 2] = rgb[s + 2];
      raw[d + 3] = 255;
    }
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/**
 * Pack PNGs into an .ico. Browsers prefer /favicon.ico over <link> PNG icons,
 * and Next.js serves src/app/favicon.ico automatically — so that file has to
 * carry the brand mark or it silently wins over everything else.
 */
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);

  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + dir.length;
  entries.forEach((e, i) => {
    const o = i * 16;
    dir[o] = e.size >= 256 ? 0 : e.size; // 0 means 256
    dir[o + 1] = e.size >= 256 ? 0 : e.size;
    dir[o + 2] = 0; // palette size
    dir[o + 3] = 0; // reserved
    dir.writeUInt16LE(1, o + 4); // colour planes
    dir.writeUInt16LE(32, o + 6); // bits per pixel
    dir.writeUInt32BE(0, o + 8);
    dir.writeUInt32LE(e.png.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += e.png.length;
  });

  return Buffer.concat([header, dir, ...entries.map((e) => e.png)]);
}

const src = decodePng(readFileSync(SRC));
console.log(`source: ${src.width}x${src.height} RGBA`);

for (const [path, size] of [
  ['public/seo/favicon.png', 64],
  ['public/seo/apple-touch-icon.png', 180],
]) {
  const png = encodePng(resizeOntoWhite(src, size), size);
  writeFileSync(path, png);
  console.log(`  wrote ${path} (${size}x${size}, ${(png.length / 1024).toFixed(1)} KB)`);
}

const ico = buildIco(
  [16, 32, 48].map((size) => ({ size, png: encodePngRgba(resizeOntoWhite(src, size), size) })),
);
writeFileSync('src/app/favicon.ico', ico);
console.log(`  wrote src/app/favicon.ico (16/32/48, ${(ico.length / 1024).toFixed(1)} KB)`);
