# StatsStrip + AboutSection + RecruitersSection Specification

## Overview
- **Target files:** `src/components/StatsStrip.tsx`, `src/components/AboutSection.tsx`, `src/components/RecruitersSection.tsx`
- **Screenshot:** `docs/design-references/kbcp-desktop-full.png` (y ≈ 886–2427)
- **Interaction model:** all three static; About + Recruiters have WOW.js scroll-reveal.

---

# 1. StatsStrip (`.legacy_outsection`)

## DOM Structure
`<div class="container-fluid p-0">` → row → `.legacy_outsection` (full-bleed) → `.kbcp-container` → row of 4 `col-6 col-lg-3` → `.number_inoutsection` (img + h2 + p).

## Computed Styles
- `.legacy_outsection`: `background:#f1f0eb; padding:50px 75px 55px 0; max-width:100%` — measured height `267px`
- `.number_inoutsection`: `text-align:center`, width `261px` (i.e. 25% of container), height `162px`
- `img.nmbrcnt_imgdesign`: `width:80px; height:80px`
- `h2.nmbrcnt_textdesign`: `font-size:35px; line-height:56px; font-weight:700; color:#444444; text-align:center`
- `p.nmbrcnt_ptextdesign`: `font-size:13px; line-height:26px; font-weight:400; color:#393939; text-align:center`

## Content (verbatim, in order)
| icon | value | label |
|---|---|---|
| `/images/stats/celibration.png` | `5+` | `Laboratories` |
| `/images/stats/group.png` | `200` | `Seat Auditorium` |
| `/images/stats/association.png` | `95%` | `Placement Rate` |
| `/images/stats/graduation-cap.png` | `3+` | `Years Experience` |

## Responsive
- **≤767px:** 2 per row (`col-6`); `.legacy_outsection` padding becomes `15px 0 10px`; `.number_inoutsection` height ≈ `72px`, image scales down proportionally (keep 80px unless it overflows; the measured mobile card width is 174px)
- **≥992px:** 4 per row
- No other changes. Note the asymmetric desktop padding (`padding-right:75px`, `padding-left:0`) — reproduce it exactly.

---

# 2. AboutSection (`section.about.section-padding`)

## DOM Structure
```
<section class="about kbcp-section-padding">   padding: 40px 0
  <div class="kbcp-container">
    row
      left col  (41.667% @>=992px)  -> .cont  (vertically centred)
          span.sub-title      "About Us"
          h4.hiop_newtexts    "KSHUDIRAM BOSE COLLEGE OF PHARMACY"
          span.sub-title1     "Excellence in Pharmaceutical Education"
          p                   body copy
          a.butn              "Read More"
      right col (50% @>=992px, offset 8.333%)  -> .two-img collage
```

## Computed Styles

### `section.about`
- padding: `40px 0`; measured height `640px`

### `.sub-title` ("About Us")
- `font-size:17px; line-height:25.5px; letter-spacing:2px; text-transform:uppercase; margin:0 0 15px; display:inline-block`
- gradient text: use the global class `.kbcp-grad-text` (`linear-gradient(110deg,#ff5e57 0%,#409fff 100%)` clipped to text)

### `h4.hiop_newtexts`
- `font-size:27px; line-height:43.2px; font-weight:700; color:#006c93; padding:0 0 20px`
- ≤575px: `font-size:19px; line-height:30.4px`

### `.sub-title1`
- `font-size:20px; line-height:30px; letter-spacing:2px; text-transform:uppercase; margin:0 0 15px; display:inline-block`
- gradient text: global class `.kbcp-grad-text-teal` (`linear-gradient(110deg,#006c93 0%,#00acee 100%)`)

### `p`
- `font-size:14px; line-height:28px; font-weight:400; color:#8e8e99`

### `a.butn` ("Read More")
- `display:inline-block; padding:0 30px; min-height:55px; line-height:55px; margin:30px 0 0`
- `background:#f94c30; border:0.8px solid #f94c30; color:#fff; border-radius:30px; overflow:hidden; position:relative; text-align:center; font-size:16px; transition:0.4s`
- width measures `190px`
- Inner layout (theme `.butn-icon-anim`): a flex row of `[left chevron] [text] [right chevron]`. Text: `font-size:12px; font-weight:500; letter-spacing:2px; text-transform:uppercase` reading `Read More`. Chevrons are `fas fa-chevron-right` at `font-size:12px`. The left chevron is hidden until hover in the original animation — render it with `opacity:0` and reveal on hover (`transition:0.4s`), right chevron reverse. Keep it simple: both chevrons present, left `opacity-0 group-hover:opacity-100`, right `opacity-100 group-hover:opacity-0`.
- href: `https://kbcp.in/about_institution`

### `.two-img` collage
- container: `position:relative; margin:0 0 60px; height:500px` (measured 552×500)
- `.img1`: `height:500px; width:65%; margin-left:35%` → `img` `width:100%; height:100%; object-fit:cover; object-position:center`
  - ≤575px: `.img1` height `350px`
- `.img2`: `position:absolute; left:0; bottom:-60px; height:259px; width:63%` → `img` `width:100%; height:100%; object-fit:cover; object-position:center`
- `.img2::after`: `content:''; width:100px; height:100px; border:20px solid #3b3f82; border-radius:50%; position:absolute; bottom:-20px; right:-50px; z-index:-1; opacity:0.2`

## Text Content (verbatim)
- sub-title: `About Us`
- h4: `KSHUDIRAM BOSE COLLEGE OF PHARMACY`
- sub-title1: `Excellence in Pharmaceutical Education`
- p: `Kshudiram Bose College of Pharmacy (KBCP) is the best pharmacy college in Medinipur, West Bengal. Approved by the Pharmacy Council of India (PCI) (Ref: PCI-6658) and affiliated to WBSCT&VE&SD & MAKAUT, KBCP offers the Diploma in Pharmacy (D.Pharm) programme and is committed to producing skilled pharmaceutical professionals.`
- button: `Read More`

## Assets
- `.img1` → `/images/about/new-about2.jpg`
- `.img2` → `/images/about/new-about1.jpg`

## Responsive
- **≥992px:** two columns (41.667% text / 50% images with 8.333% offset)
- **≤991px:** stacks — text column full width with `margin-bottom:50px` (theme `.md-mb50`), then the collage
- **≤575px:** section padding `32px 0`; `h4` `19px/30.4px`; `.img1` height `350px`

---

# 3. RecruitersSection (`section.recuitback_mainarea`)

## DOM Structure
```
<section class="recuitback_mainarea">   background-image + dark overlay
  <div class="kbcp-container">
    row -> .inner_recuitarea (z-index:1, padding:0 15px)
      h5.rcfst_text     "After KBCP What Comes Next?"
      h1.rcuit_tagline  two lines
      row of 10 logo cells (col-lg-2 col-4), each .recuitbox_area > img.recuitsngl_img
```

## Computed Styles

### `section.recuitback_mainarea`
- `position:relative; padding:0; background-image:url(/images/background/recruit-back.jpg); background-size:cover; background-position:50% 0%; background-repeat:repeat`
- measured height `633.5px`
- **Overlay:** `::before { content:''; position:absolute; inset:0; width:100%; height:100%; background:rgba(0,0,0,0.65); }` — this is what makes the section read as flat dark grey. Content must sit above it.

### `.inner_recuitarea`
- `position:relative; z-index:1; padding:0 15px; max-width:100%`

### `h5.rcfst_text`
- `font-size:25px; line-height:37.5px; font-weight:500; letter-spacing:1px; color:#fff; text-align:center; padding:30px 0 10px`

### `h1.rcuit_tagline`
- `font-size:30px; line-height:40px; font-weight:700; letter-spacing:1px; color:#fff; text-align:center; padding:5px 0 45px`
- ≤575px: `font-size:15px; line-height:25px`

### Logo cell (`col-lg-2 col-4`)
- `padding:0 15px`; width `16.667%` @≥992px (measured 193px), `33.333%` below (measured 236px @768, 126px @390)

### `.recuitbox_area`
- `padding:0 0 50px`, measured height `111.7px`

### `img.recuitsngl_img`
- `width:100%; height:auto` (measured 163×61.7 at desktop)

## States & Behaviors
- **Reveal:** each logo cell has `.wow.fadeInLeft` with `data-wow-delay=".4s"` — all ten share the same 0.4 s delay. Use the shared `useReveal()` hook from `src/hooks/use-reveal.ts` on the row and apply `kbcp-wow kbcp-in kbcp-fade-left` classes (defined in globals.css) with `animation-delay:0.4s` once visible. Because this needs an observer, `RecruitersSection` must be `"use client"`.
- No hover states on the logos.

## Text Content (verbatim)
- h5: `After KBCP What Comes Next?`
- h1: `Your Impeccable Placement` then a `<br>` then `Opportunities With Milestone Packages`

## Assets (order matters — `alt` text is the recruiter name)
1. `/images/recruiters/sun-pharma.png` — `Sun Pharma`
2. `/images/recruiters/cipla.png` — `Cipla`
3. `/images/recruiters/dr-reddys.png` — `Dr. Reddy's`
4. `/images/recruiters/lupin.jpg` — `Lupin`
5. `/images/recruiters/zydus.jpg` — `Zydus`
6. `/images/recruiters/wockhardt.jpg` — `Wockhardt`
7. `/images/recruiters/mankind.png` — `Mankind Pharma`
8. `/images/recruiters/alkem.png` — `Alkem Laboratories`
9. `/images/recruiters/glenmark.png` — `Glenmark`
10. `/images/recruiters/zuventus.png` — `Zuventus`

## Responsive
- **≥992px:** 6 logos per row (16.667% each) → 10 logos wrap to 2 rows
- **≤991px:** 3 per row (33.333%)
- **≤575px:** headings shrink as noted above
