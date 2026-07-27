// Generates brand-coloured SVG placeholders for sections where the target site
// (muktirshikshacollegeofeducationandpharmacy.org) ships no photography.
// Usage: node scripts/generate-placeholders.mjs
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const NAVY = '#0f1d3d';
const NAVY_DEEP = '#0a1628';
const AMBER = '#f59e0b';
const BLUE = '#1e40af';

/**
 * A soft two-tone panel used where the target site ships no photography.
 * Deliberately text-free — every caption is rendered by the component that
 * uses the image, so baking words into the artwork would duplicate them.
 */
function panel({ w, h, from, to, label, icon }) {
  const m = Math.min(w, h);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.18" cy="0.2" r="0.9">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <g fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="${Math.max(2, m * 0.006)}">
    <circle cx="${w * 0.78}" cy="${h * 0.28}" r="${m * 0.26}"/>
    <circle cx="${w * 0.88}" cy="${h * 0.76}" r="${m * 0.14}"/>
    <circle cx="${w * 0.18}" cy="${h * 0.8}" r="${m * 0.18}"/>
    <path d="M0 ${h * 0.84} Q ${w * 0.3} ${h * 0.7} ${w * 0.55} ${h * 0.86} T ${w} ${h * 0.76}"/>
  </g>
  ${icon ? `<text x="${w * 0.5}" y="${h * 0.58}" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-size="${m * 0.3}" fill="#ffffff" fill-opacity="0.16">${icon}</text>` : ''}
</svg>`;
}

/** Circular monogram used for testimonial portraits. */
function avatar({ initials, from, to }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" role="img" aria-label="${initials}">
  <defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs>
  <rect width="200" height="200" fill="url(#a)"/>
  <circle cx="100" cy="78" r="34" fill="#ffffff" fill-opacity="0.9"/>
  <path d="M32 200c0-38 30-62 68-62s68 24 68 62z" fill="#ffffff" fill-opacity="0.9"/>
  <text x="100" y="92" text-anchor="middle" font-family="'Noto Sans', sans-serif" font-weight="700" font-size="34" fill="${from}">${initials}</text>
</svg>`;
}

const FILES = [
  // Hero slides (1920x900)
  ['images/slider/slide-1.svg', panel({ w: 1920, h: 900, from: NAVY_DEEP, to: NAVY, label: 'Pharmacy Education', icon: '⚕' })],
  ['images/slider/slide-2.svg', panel({ w: 1920, h: 900, from: NAVY, to: AMBER, label: 'Learn by Doing', icon: '⚗' })],
  ['images/slider/slide-3.svg', panel({ w: 1920, h: 900, from: '#1e3a8a', to: NAVY, label: 'Care with Confidence', icon: '✚' })],
  ['images/slider/slide-4.svg', panel({ w: 1920, h: 900, from: NAVY_DEEP, to: '#1e3a8a', label: 'A Campus That Inspires Learning', icon: '◈' })],

  // Gallery tiles (800x600)
  ['images/gallery/classroom.svg', panel({ w: 800, h: 600, from: NAVY, to: NAVY_DEEP, label: 'Classroom', icon: '▤' })],
  ['images/gallery/laboratory.svg', panel({ w: 800, h: 600, from: '#1e3a8a', to: BLUE, label: 'Laboratory', icon: '⚗' })],
  ['images/gallery/library.svg', panel({ w: 800, h: 600, from: AMBER, to: '#d97706', label: 'Library', icon: '▣' })],
  ['images/gallery/campus-life.svg', panel({ w: 800, h: 600, from: NAVY_DEEP, to: '#1e40af', label: 'Campus Life', icon: '◈' })],

  // Blog covers (1200x750)
  ['images/blog/why-dpharm.svg', panel({ w: 1200, h: 750, from: NAVY, to: NAVY_DEEP, label: 'Why D.Pharm', icon: '⚕' })],
  ['images/blog/lab-skills.svg', panel({ w: 1200, h: 750, from: '#1e3a8a', to: NAVY, label: 'Lab Skills', icon: '⚗' })],
  ['images/blog/admission-guide.svg', panel({ w: 1200, h: 750, from: AMBER, to: NAVY, label: 'Admissions', icon: '✎' })],

  // Testimonial portraits
  ['images/testimonials/student-1.svg', avatar({ initials: 'SM', from: NAVY, to: NAVY_DEEP })],
  ['images/testimonials/student-2.svg', avatar({ initials: 'AR', from: AMBER, to: '#d97706' })],
  ['images/testimonials/student-3.svg', avatar({ initials: 'PD', from: '#1e3a8a', to: BLUE })],

  // Section backgrounds
  ['images/background/pathways.svg', panel({ w: 1600, h: 700, from: NAVY_DEEP, to: '#060d1a', label: '' })],
  ['images/background/testimonials.svg', panel({ w: 1600, h: 700, from: NAVY, to: '#1e3a8a', label: '' })],
];

for (const [rel, svg] of FILES) {
  const dest = join('public', rel);
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, svg, 'utf8');
  console.log('  wrote', rel);
}
console.log(`\n${FILES.length} placeholders generated`);
