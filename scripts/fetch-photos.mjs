// Fills every image slot with a public-domain / CC0 photo from Openverse.
//
// Paths written here are the exact paths the components reference, so you can
// drop your own (AI-generated or licensed) images over them later by filename
// and no component code needs to change.
//
// Selection is deliberately strict: a result is only accepted if its title
// actually mentions the subject. Openverse leans heavily on museum and archive
// collections, so a bare relevance search happily returns a dingo for
// "graduation students diploma".
//
// AUTHENTICATION — Openverse returns 401 for anonymous requests. Register once:
//
//   curl -X POST https://api.openverse.org/v1/auth_tokens/register/ //     -H "Content-Type: application/json" //     -d '{"name":"muktir-siksha-site","description":"college website images","email":"you@example.com"}'
//
// That responds with client_id and client_secret. Pass them in and this script
// exchanges them for an access token itself:
//
//   OPENVERSE_CLIENT_ID=xxx OPENVERSE_CLIENT_SECRET=yyy node scripts/fetch-photos.mjs
//
// Or pass a token you already minted:
//
//   OPENVERSE_TOKEN=zzz node scripts/fetch-photos.mjs
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const API = 'https://api.openverse.org/v1/images/';
const TOKEN_URL = 'https://api.openverse.org/v1/auth_tokens/token/';

const CLIENT_ID = process.env.OPENVERSE_CLIENT_ID;
const CLIENT_SECRET = process.env.OPENVERSE_CLIENT_SECRET;

/** Exchange client credentials for a bearer token. */
async function mintToken() {
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.access_token) {
    throw new Error(`token exchange failed (${res.status}): ${JSON.stringify(json)}`);
  }
  return json.access_token;
}

let token = process.env.OPENVERSE_TOKEN;
if (!token) {
  if (!CLIENT_ID || !CLIENT_SECRET) {
    console.error(
      [
        'Missing credentials.',
        'Set OPENVERSE_CLIENT_ID + OPENVERSE_CLIENT_SECRET (or OPENVERSE_TOKEN).',
        'Register at: https://api.openverse.org/v1/auth_tokens/register/',
      ].join('\n'),
    );
    process.exit(1);
  }
  token = await mintToken();
  console.log('  token minted from client credentials');
}

const UA = {
  'User-Agent': 'muktir-siksha-site/1.0',
  Authorization: `Bearer ${token}`,
};

/**
 * Each slot lists several queries (tried in order) and the keywords that must
 * appear in the result's title or tags for it to be accepted.
 */
const SLOTS = [
  {
    out: 'images/slider/slide-1.jpg', minW: 1000,
    queries: ['pharmacy pills medicine', 'medicine tablets pharmacy', 'pharmacy shelf medicines'],
    must: ['pharmacy', 'pharmacist', 'drugstore', 'apothecary', 'chemist'],
  },
  {
    out: 'images/slider/slide-2.jpg', minW: 1000,
    queries: ['laboratory glassware science', 'science lab equipment', 'chemistry beaker lab'],
    must: ['laboratory', 'lab', 'chemistry', 'chemical', 'flask', 'beaker'],
  },
  {
    out: 'images/slider/slide-3.jpg', minW: 1000,
    queries: ['lecture hall university', 'classroom students', 'university auditorium'],
    must: ['lecture', 'classroom', 'class room', 'university', 'college', 'students', 'auditorium'],
  },
  {
    out: 'images/slider/slide-4.jpg', minW: 1000,
    queries: ['students studying together', 'students group study', 'young people studying'],
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
    queries: ['laboratory pipette science', 'lab experiment science', 'research lab work'],
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
    queries: ['medicine pills tablets', 'pharmacy medicine shelf', 'medical supplies'],
    must: ['pharmacy', 'apothecary', 'bottles', 'medicine', 'drugstore'],
  },
];

const usedIds = new Set();

async function search(q) {
  const url = `${API}?q=${encodeURIComponent(q)}&license=cc0,pdm&source=flickr&page_size=40&mature=false`;
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`search ${res.status}`);
  return (await res.json()).results ?? [];
}

// Artwork rather than photography, or a named institution we must not imply
// an association with.
const BAD_WORDS = [
  'watercolour', 'watercolor', 'woodcut', 'engraving', 'etching', 'lithograph',
  'drawing', 'painting', 'illustration', 'sketch', 'cartoon', 'poster',
  'century', 'antique', 'vintage', 'rutgers', 'harvard', 'yale', 'oxford',
  'cambridge', 'stanford', 'university of', 'museum', 'archive',
  'ubc', 'mit', 'nasa', 'consular', 'navy', 'army',
];

function relevant(r, must) {
  // Openverse returns empty `tags` for anonymous clients, so the title is the
  // only signal available. It is still a far better gate than raw relevance.
  const hay = `${r.title ?? ''} ${(r.tags ?? []).map((t) => t.name).join(' ')}`.toLowerCase();
  if (BAD_WORDS.some((w) => hay.includes(w))) return false;
  // Public-domain photography is largely public domain *because* it is old.
  // A year in the title is a reliable tell for archival material.
  if (/1[6-9]\d{2}/.test(hay)) return false;
  return must.some((k) => hay.includes(k));
}

function acceptable(r, slot) {
  if (!r.url || !r.width || !r.height) return false;
  if (usedIds.has(r.id)) return false;
  if (r.width < slot.minW) return false;
  const ratio = r.width / r.height;
  if (slot.portrait && ratio > 1.4) return false;
  if (!slot.portrait && (ratio > 2.2 || ratio < 1.05)) return false;
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
      const msg = String(err.message ?? err);
      if (msg.includes('401') || msg.includes('403')) {
        console.error(`
Auth rejected (${msg}). Token invalid or expired — re-register.`);
        process.exit(1);
      }
      console.log('  warn', slot.out, `query "${q}" failed:`, msg);
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
