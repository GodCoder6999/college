# CourseSection + GallerySection Specification

## Overview
- **Target files:** `src/components/CourseSection.tsx`, `src/components/GallerySection.tsx`
- **Screenshot:** `docs/design-references/kbcp-desktop-full.png` (y ≈ 2427–3639)
- **Interaction model:** both static; gallery tiles have a hover overlay + WOW reveal.

---

# 1. CourseSection

## DOM Structure
```
<section class="kbcp-section-padding" style="background:#f8f9fb">
  <div class="kbcp-container">
    heading row (margin-bottom 40px), centred
      h6.sub-title  "OUR ACADEMICS"
      h2            "Course Offered"
    card row (align-items:center, padding 20px 0)
      left col  41.667% @>=992px  -> course image
      right col 50% @>=992px, offset 8.333%
        span.sub-title "Diploma"
        h2             "D.Pharm"
        meta badges row
        info rows
        button row
```

## Computed Styles

### `section`
- `background:#f8f9fb`; `padding:40px 0`; measured height `679.9px`

### `h6.sub-title` ("OUR ACADEMICS")
- `font-size:17px; line-height:25.5px; letter-spacing:2px; text-transform:uppercase; margin:0 0 15px; display:inline-block`, gradient text via global `.kbcp-grad-text`

### `h2` ("Course Offered")
- `font-weight:700`; theme `h2` size at this breakpoint is `40px / 64px`; color `#181b31`
- ≤575px: `font-size:25px`

### Heading row
- `text-align:center; margin-bottom:40px`

### Course image
- `<img src="/images/course/dpharm.jpeg" alt="D.Pharm">` with inline style `width:100%; border-radius:10px; box-shadow:0 8px 30px rgba(0,0,0,0.12)`
- ≤991px: `margin-bottom:30px` (theme `.md-mb30`)

### `span.sub-title` ("Diploma")
- same as the section eyebrow: `17px/25.5px`, `letter-spacing:2px`, uppercase, gradient text, `margin:0 0 15px`

### `h2` ("D.Pharm")
- `font-weight:700; margin-bottom:15px`; size `40px/64px`

### `.kbcp-course-meta`
- `display:flex; flex-wrap:wrap; gap:10px; margin-bottom:20px`
- `.kbcp-meta-badge`: `background:#0f1d3d; color:#fff; padding:5px 14px; border-radius:20px; font-size:13px; font-weight:500`

### `.kbcp-course-info`
- `margin-bottom:28px`
- `.kbcp-info-row`: `padding:8px 0; border-bottom:1px solid #eef0f3; font-size:14px; color:#444`
- `.kbcp-info-row i`: `color:#1e40af; margin-right:8px; width:16px`

### `.kbcp-course-btns`
- `display:flex; flex-wrap:wrap; gap:12px; align-items:center`
- `.kbcp-btn-outline`: `display:inline-flex; align-items:center; gap:8px; padding:11px 26px; border-radius:30px; border:2px solid #1e40af; color:#1e40af; font-size:14px; font-weight:600; transition:all 0.25s`; hover → `background:#1e40af; color:#fff`
- `.kbcp-btn-primary`: `display:inline-flex; align-items:center; gap:8px; padding:11px 26px; border-radius:30px; background:#f59e0b; color:#0f1d3d; font-size:14px; font-weight:700; transition:all 0.25s`; hover → `background:#d97706`

## Text Content (verbatim)
- Eyebrow: `OUR ACADEMICS`
- Title: `Course Offered`
- Card eyebrow: `Diploma`
- Card title: `D.Pharm`
- Badges: `<i class="fas fa-clock"></i> 2` and `<i class="fas fa-users"></i> 60 Seats`
- Info rows (each starts with its icon, then a `<strong>` label, then the value):
  1. `fas fa-graduation-cap` — **Eligibility:** ` H.S. (10+2) with Physics, Chemistry & Biology / Mathematics`
  2. `fas fa-university` — **Approved by:** ` PCI, DME, SMF-WB`
  3. `fas fa-briefcase` — **Avg. Package:** ` 3.6 LPA`, then `&nbsp;|&nbsp;`, then **Recruiters:** ` 100+`
  4. `fas fa-stethoscope` — **Careers:** ` Registered Pharmacist, Clinical Research, Quality Control, Drug Inspector`
- Outline button: `Read More` + `fas fa-arrow-right`, href `https://kbcp.in/course_details/4`
- Primary button: `Apply Now` + `fas fa-paper-plane`, href `https://kbcp.in/apply`

## Responsive
- **≥992px:** 2 columns as above
- **≤991px:** stacks; image full width with `margin-bottom:30px`
- **≤575px:** `h2` `25px`

---

# 2. GallerySection

## DOM Structure
```
<section class="portfolio kbcp-section-padding" style="background:#fafafb; position:relative">
  <div class="kbcp-container">
    header row (margin-bottom 20px)
      left col 41.667%  -> pill + gradient h2
      right col 58.333% -> right-aligned "View Full Gallery" button
    gallery grid: 4 tiles (col-lg-3 col-md-6)
  <div class="curve-cls bottom">  white SVG curve
```

## Computed Styles

### `section.portfolio`
- `background:#fafafb; padding:40px 0; position:relative`; measured height `508.5px`
- The bottom curve overflows the section — keep `overflow` visible on the section but ensure the curve sits at the bottom.

### `.sub-head` pill
- `display:inline-block; background:#e9eef4; padding:8px 20px; border-radius:30px; margin:0 0 20px; opacity:0.8`
- `font-size:13px; line-height:19.5px; font-weight:600; letter-spacing:4px; text-transform:uppercase`
- inner `<span>`: `font-size:12px; line-height:18px; font-weight:600; letter-spacing:2px; text-transform:uppercase` — text `Showcases`

### `h2` ("Our Gallery")
- `font-size:40px; line-height:64px; font-weight:800; display:inline-block`, gradient text via global `.kbcp-grad-text`
- ≤575px: `font-size:30px`

### "View Full Gallery" button
- right-aligned, vertically centred in its column
- `display:inline-flex; align-items:center; gap:8px; padding:10px 22px; background:#0f1d3d; color:#f59e0b; border-radius:8px; font-size:13px; font-weight:700; letter-spacing:0.5px; transition:background 0.2s`
- hover → `background:#1e40af`
- label `View Full Gallery` + `fas fa-arrow-right`; href `https://kbcp.in/gallery`

### Gallery grid
- The original uses Isotope (absolutely positioned items) — **implement as a plain responsive grid**, visually identical: 4 columns @≥992px, 2 columns @768–991px, 1 column below.
- Each tile column: `padding:0 30px; margin-top:50px`
- `.item-img`: `position:relative; overflow:hidden; width:240px; height:180px` at desktop → in practice `width:100%; aspect-ratio:4/3` reproduces the measured 240×180. Use `width:100%; height:180px`.
  - `transition:0.3s`
- `.item-img img`: `width:100%; height:100%; object-fit:cover; border-radius:5px; transition:0.5s`
- `.item-img-overlay`: `position:absolute; inset:0; width:100%; height:100%; opacity:0; visibility:hidden; transition:all 0.4s`, background = global class `.kbcp-grad-coral` (`radial-gradient(circle farthest-corner at 10% 20%,#fdc168 0%,#fb8080 90%)`), `border-radius:5px`
  - contains a centred `fas fa-arrow-right` icon, `color:#fff; font-size:20px`, absolutely centred
- `.cont`: `margin-top:30px; text-align:center`
- tile title `h6`: `font-size:16px; line-height:24px; font-weight:700; margin:0 0 5px`; the inner `<a>` is `color:#0f1d3d`, hover `color:#1e40af`

### `.curve-cls.bottom` (SVG curve)
- `position:absolute; top:208.5px; left:-71.75px; right:-71.76px; width:calc(100% + 143.5px); height:300px`
- Practical equivalent: `position:absolute; bottom:0; left:-72px; right:-72px; height:300px; pointer-events:none`, containing the SVG stretched to `width:100%; height:100%` with `preserveAspectRatio="none"`.
- Use `BottomCurveIcon` from `src/components/icons.tsx` (fill `#fff`).
- **Important:** the curve must sit *behind* the gallery content — give it a lower stacking order than the container (`z-index:0` on the curve, `position:relative; z-index:1` on the `.kbcp-container`).

## States & Behaviors
- **Hover on `.item-img`:** overlay `opacity:0 → 0.9`, `visibility:hidden → visible` (`transition:all 0.4s`); the image itself scales slightly (`transform:scale(1.06)`, `transition:0.5s`)
- **Hover on tile title link:** `#0f1d3d → #1e40af`
- **Hover on "View Full Gallery":** `background #0f1d3d → #1e40af`
- **Reveal:** each tile is `.wow.fadeInUp` with `data-wow-delay=".4s"`. Use `useReveal()` from `src/hooks/use-reveal.ts` on the grid; once shown add `kbcp-wow kbcp-in kbcp-fade-up` with inline `animation-delay:0.4s`. This makes `GallerySection` a `"use client"` component.

## Text Content + Assets (4 tiles, in order — all link to `https://kbcp.in/gallery`)
1. `/images/gallery/classroom.jpeg` — `Classroom`
2. `/images/gallery/college-programme.jpeg` — `College Programme`
3. `/images/gallery/computer-lab.jpeg` — `Computer Lab`
4. `/images/gallery/laboratory.jpeg` — `Laboratory`

All tile `<img>` alt text is `image` (verbatim from the source).

## Responsive
- **≥992px:** 4 tiles across; header row is two columns (41.667% / 58.333%) with the button right-aligned
- **768–991px:** 2 tiles across; header stacks
- **≤575px:** 1 tile across; `h2` `30px`
