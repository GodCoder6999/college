// Fills every image slot with a public-domain / CC0 photo from Openverse.
//
// Paths written here are the exact paths the components reference, so you can
// drop your own (AI-generated or licensed) images over them later by filename
// and no component code needs to change.
//
// Selection is deliberately strict: a result is only accepted if its title or
// tags actually mention the subject. Openverse leans heavily on museum and
// archive collections, so a bare relevance search happily returns a dingo for
// "graduation students diploma".
//
// REQUIRES AN API KEY. Openverse now returns 401 for anonymous requests, so
// register a client at https://api.openverse.org/v1/auth_tokens/register/ and
// export OPENVERSE_TOKEN before running. Without it every search 401s and the
// script writes nothing.
//
// Usage: OPENVERSE_TOKEN=xxx node scripts/fetch-photos.mjs
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const API = 'https://api.openverse.org/v1/images/';
const TOKEN = process.env.OPENVERSE_TOKEN;
const UA = {
  'User-Agent': 'muktir-siksha-site/1.0',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};
if (!TOKEN) {
  console.error('OPENVERSE_TOKEN is not set — Openverse rejects anonymous requests with 401.');
  process.exit(1);
}

/**
 * Each slot lists several queries (tried in order) and the keywords that must
 * appear in the result's title or tags for it to be accepted.
 */
const SLOTS = [
  {
    out: 'images/slider/slide-1.jpg', minW: 1000,
    queries: ['pharmacy interior', 'drugstore pharmacy', 'apothecary shop'],
    must: ['pharmacy', 'pharmacist', 'drugstore', 'apothecary', 'chemist'],
  },
  {
    out: 'images/slider/slide-2.jpg', minW: 1000,
    queries: ['chemistry laboratory', 'science laboratory', 'laboratory glassware'],
    must: ['laboratory', 'lab', 'chemistry', 'chemical', 'flask', 'beaker'],
  },
  {
    out: 'images/slider/slide-3.jpg', minW: 1000,
    queries: ['lecture hall university', 'classroom students', 'university auditorium'],
    must: ['lecture', 'classroom', 'class room', 'university', 'college', 'students', 'auditorium'],
  },
  {
    out: 'images/slider/slide-4.jpg', minW: 1000,
    queries: ['university campus building', 'college building', 'school building exterior'],
    must: ['university', 'college', 'campus', 'school', 'building'],
  },

  {
    out: 'images/gallery/classroom.jpg', minW: 700,
    queries: ['classroom desks', 'students classroom', 'school classroom'],
    must: ['classroom', 'class room', 'school', 'students', 'desks'],
  },
  {
    out: 'images/gallery/laboratory.jpg', minW: 700,
    queries: ['microscope laboratory', 'laboratory research', 'science lab'],
    must: ['laboratory', 'lab', 'microscope', 'research', 'science'],
  },
  {
    out: 'images/gallery/library.jpg', minW: 700,
    queries: ['library bookshelves', 'library reading room', 'books library'],
    must: ['library', 'books', 'bookshelf', 'bookshelves', 'reading'],
  },
  {
    out: 'images/gallery/campus-life.jpg', minW: 700,
    queries: ['university campus students', 'college campus', 'campus quad'],
    must: ['campus', 'university', 'college', 'students', 'school'],
  },

  {
    out: 'images/blog/why-dpharm.jpg', minW: 900,
    queries: ['pharmacist dispensing', 'pharmacy counter', 'pharmacist medicine'],
    must: ['pharmacy', 'pharmacist', 'drugstore', 'medicine', 'apothecary'],
  },
  {
    out: 'images/blog/lab-skills.jpg', minW: 900,
    queries: ['students laboratory experiment', 'chemistry students', 'laboratory training'],
    must: ['laboratory', 'lab', 'chemistry', 'students', 'experiment'],
  },
  {
    out: 'images/blog/admission-guide.jpg', minW: 900,
    queries: ['graduation ceremony students', 'university graduation', 'graduates diploma'],
    must: ['graduation', 'graduate', 'graduates', 'diploma', 'commencement', 'convocation'],
  },

  {
    out: 'images/testimonials/student-1.jpg', minW: 450, portrait: true,
    queries: ['portrait woman smiling', 'woman portrait face', 'young woman portrait'],
    must: ['portrait', 'woman', 'girl', 'face', 'person', 'smile'],
  },
  {
    out: 'images/testimonials/student-2.jpg', minW: 450, portrait: true,
    queries: ['portrait man face', 'young man portrait', 'man portrait person'],
    must: ['portrait', 'man', 'boy', 'face', 'person'],
  },
  {
    out: 'images/testimonials/student-3.jpg', minW: 450, portrait: true,
    queries: ['student portrait person', 'portrait young person', 'woman face portrait'],
    must: ['portrait', 'student', 'woman', 'man', 'face', 'person'],
  },

  {
    out: 'images/background/testimonials.jpg', minW: 1200,
    queries: ['pharmacy shelves bottles', 'apothecary bottles', 'medicine bottles pharmacy'],
    must: ['pharmacy', 'apothecary', 'bottles', 'medicine', 'drugstore'],
  },
];

const usedIds = new Set();

async function search(q) {
  const url = `${API}?q=${encodeURIComponent(q)}&license=cc0,pdm&page_size=40&mature=false`;
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`search ${res.status}`);
  return (await res.json()).results ?? [];
}

function relevant(r, must) {
  // Openverse returns empty `tags` for anonymous clients, so the title is the
  // only signal available. It is still a far better gate than raw relevance.
  const hay = `${r.title ?? ''} ${(r.tags ?? []).map((t) => t.name).join(' ')}`.toLowerCase();
  return must.some((k) => hay.includes(k));
}

function acceptable(r, slot) {
  if (!r.url || !r.width || !r.height) return false;
  if (usedIds.has(r.id)) return false;
  if (r.width < slot.minW) return false;
  const ratio = r.width / r.height;
  if (slot.portrait && ratio > 1.4) return false;
  if (!/\.(jpe?g|png)$/i.test(new URL(r.url).pathname)) return false;
  return relevant(r, slot.must);
}

async function download(url, dest) {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  return buf.length;
}

const manifest = [];
let ok = 0;

for (const slot of SLOTS) {
  let done = false;
  for (const q of slot.queries) {
    if (done) break;
    let results;
    try {
      results = await search(q);
    } catch (err) {
      console.log('  warn', slot.out, `query "${q}" failed:`, String(err.message ?? err));
      continue;
    }
    for (const hit of results) {
      if (!acceptable(hit, slot)) continue;
      try {
        const bytes = await download(hit.url, join('public', slot.out));
        usedIds.add(hit.id);
        manifest.push({
          path: slot.out,
          title: hit.title,
          creator: hit.creator ?? null,
          license: `${hit.license}${hit.license_version ? ' ' + hit.license_version : ''}`,
          source: hit.foreign_landing_url ?? hit.url,
          dimensions: `${hit.width}x${hit.height}`,
        });
        console.log('  ok  ', slot.out, `(${(bytes / 1024).toFixed(0)} KB, ${hit.width}x${hit.height}) — ${hit.title ?? ''}`);
        ok++;
        done = true;
        break;
      } catch {
        // try the next candidate
      }
    }
  }
  if (!done) console.log('  SKIP', slot.out, '— nothing matched');
}

await writeFile(join('public', 'images', 'CREDITS.json'), JSON.stringify(manifest, null, 2), 'utf8');
console.log(`\n${ok}/${SLOTS.length} photos fetched`);
console.log('Attribution recorded in public/images/CREDITS.json');
