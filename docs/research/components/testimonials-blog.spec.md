# TestimonialsSection + BlogSection Specification

## Overview
- **Target files:** `src/components/TestimonialsSection.tsx`, `src/components/BlogSection.tsx`
- **Screenshot:** `docs/design-references/kbcp-desktop-full.png` (y ≈ 3639–5120)
- **Interaction model:** Testimonials = click-driven (linked carousels, no autoplay); Blog = static with hover states.

---

# 1. TestimonialsSection

## INTERACTION MODEL — read this first
The original wires **two linked Swiper instances** (Swiper's `controller.control` both ways), neither with `autoplay`:
- `.gallery-thumbs` — 3 slides per view, `centeredSlides:true`, `slideToClickedSlide:true`, `loop:true`, `spaceBetween:10`, `touchRatio:0.2`
- `.gallery-top` — the quote text, `loop:true`, `spaceBetween:10`, prev/next buttons

So: **click an avatar → the quote changes; click prev/next → both the avatar strip and the quote advance.** There is NO auto-rotation and NO scroll-driven switching. Implement with a single `activeIndex` state (3 items) — do not install Swiper.

## DOM Structure
```
<section class="testimonials bg-img parallaxie">     background image, 540px tall
  <div class="tstmonial_bckcolor">                   rgba(0,0,0,0.12) tint, padding 70px 0
    <div class="kbcp-container">
      row, justify-content:center
        col-12 -> centred eyebrow (margin-bottom 30px)
        col 66.667% @>=992px / 83.333% @>=768px:
            thumbs strip (.gallery-thumbs)  — 3 avatars, centred, active enlarged
            quote area   (.gallery-top)     — text + name
        .controls-rf -> prev/next circles
```

## Computed Styles

### `section.testimonials`
- `background-image:url(/images/background/testimonial-back.jpg); background-size:cover; background-position:center; position:relative`
- measured height `540px`
- The original applies `data-overlay-dark="7"` → the theme `::before` overlay `background:#171a2a47` (use global class `.kbcp-overlay-dark`).
- The original also has `parallaxie` (JS parallax shifting `background-position` on scroll). **Substitute `background-attachment: fixed`** — visually equivalent and dependency-free.

### `.tstmonial_bckcolor`
- `background:rgba(0,0,0,0.12); padding:70px 0`; must sit above the overlay (`position:relative; z-index:2`)

### Eyebrow `h6.intest_textdesighn`
- `font-size:20px; line-height:30px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#fff; text-align:center; margin:0 0 10px; display:inline-block`
- Wrapper div: `text-align:center; margin-bottom:30px`
- Text: `Testimonials`

### Thumbs strip (`.gallery-thumbs`)
- `position:relative; z-index:1; overflow:hidden; width:260px; max-width:260px; margin:20px auto; height:90px` (the original's `margin:20px 243px` is just auto-centring inside the 746px column — centre it)
- Each slide: `width:80px; height:90px; margin-right:10px; position:relative; transition:transform`
- `.circle`: `width:90px; height:90px; border-radius:50%; border:4px solid transparent; overflow:hidden; z-index:1`
  - the rendered box is clipped to `72px` visually by the 80px slide + border — set `width:90px; height:90px` and let `overflow:hidden` on the strip clip it, exactly as the original does
- `.circle img`: `width:82px; height:123px` (deliberately overscaled and cropped by the circle) — reproduce with `width:82px; height:123px; object-fit:cover` inside the clipped circle
- The **active** avatar is the centred one and gets a visible ring: `border-color:#fff` (the inactive ones keep `transparent`). Inactive avatars also read slightly smaller/dimmer — apply `opacity:0.6` to inactive, `opacity:1` to active.
- There is a coral gradient accent span behind each avatar (`.gr-purple-red-bg`) — a small absolutely positioned pill using global class `.kbcp-grad-coral`; keep it subtle (bottom-centred, ~24×4px, `border-radius:2px`), only shown on the active avatar.
- Clicking any avatar sets it active (`slideToClickedSlide`).

### Quote area (`.gallery-top`)
- `<p>`: `font-size:15px; line-height:30px; font-weight:400; color:#fff; text-align:center`
  - mobile 390px keeps `font-size:15px`
- Name block: `margin-top:30px` for the first item, `margin-top:20px` for items 2–3 in the original — use `margin-top:30px` uniformly
- `<h6>` name: `font-size:18px; line-height:27px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#fff; text-align:center; margin:0 0 5px`
- Slide change transition: cross-fade the quote (`transition: opacity 0.4s`).

### Controls (`.controls-rf`)
- Two circles, `position:absolute`, vertically around the quote block: prev on the left edge, next on the right edge of the column area
- Each: `width:60px; height:60px; border-radius:50%; background:rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; font-size:30px; color:#fff; z-index:10; cursor:pointer; transition:all 0.4s; margin-top:-22px`
- Measured next button: `top:200px; right:10px` (relative to the section) — mirror the prev at `left:10px`
- Icons: use `fas fa-angle-right` / `fas fa-angle-left` (the original uses the Pixeden `pe-7s-angle-right/left` glyphs; the Font Awesome angles are the closest match)
- Hover: `background:rgba(255,255,255,0.2)`

## Content (verbatim, 3 items in order)

1. avatar `/images/testimonials/student1.jpeg`, name `Isani Choudhury`
   quote: `My journey at Kshudiram Bose College of Pharmacy was a transformative one that set the stage for my successful career in the pharmaceutical field. The college provided a nurturing environment, where I gained a solid foundation of knowledge and skills`
2. avatar `/images/testimonials/student2.jpeg`, name `Subhadip Ghosh`
   quote: `Kshudiram Bose College of Pharmacy holds a special place in my heart as it provided me with the tools and opportunities to excel in my career as a pharmacist. The college's focus on innovation and research empowered me to think critically and contribute to advancements in healthcare.`
3. avatar `/images/testimonials/student4.jpeg`, name `Suvechchha Jana`
   quote: `My time at the college was nothing short of remarkable. Kshudiram Bose College of Pharmacy fostered an atmosphere of academic excellence and personal growth. The faculty members went above and beyond to provide guidance and support, helping me navigate the challenges of the pharmaceutical industry.`

## Responsive
- **≥992px:** quote column 66.667% of the 1170px container
- **768–991px:** quote column 83.333%
- **≤767px:** full width; keep the controls inside the viewport (pull them to `left:0` / `right:0`)

---

# 2. BlogSection

## DOM Structure
```
<section class="blog-grid kbcp-section-padding">      padding 40px 0
  <div class="kbcp-container">
    centred head (margin-bottom 80px):  h6 eyebrow + h4 title
    row of 3 cards (col-lg-4, margin-bottom 1.5rem)
      .item.box-shadow
        .img      -> img + .tags badge
        .cont     -> date, title, excerpt, "Continue Reading"
    row (margin-top 40px) -> centred "View All Blogs" button
```

## Computed Styles

### `section.blog-grid`
- `padding:40px 0`; measured height `941.1px`

### Head
- wrapper: `text-align:center; margin-bottom:80px`
- `h6`: `font-size:13px; line-height:19.5px; font-weight:600; letter-spacing:4px; text-transform:uppercase; margin:0 0 10px; opacity:0.8; color:#181b31` — text `From Our Blog`
- `h4`: `font-size:40px; line-height:64px; font-weight:700; color:#181b31` — text `Latest Blog Posts`
  - ≤575px: `font-size:25px`

### Card (`.item.box-shadow`)
- `background:#fff; border-radius:5px; overflow:hidden; margin-top:35px; box-shadow:0 20px 40px 0 rgba(71,67,97,0.09)`
- measured `358 × 570.1` at desktop

### `.img`
- `position:relative`
- `<img>`: `width:100%; height:250px; object-fit:cover`
- `.tags` badge: absolutely positioned near the top-left of the image, `top:22px`, offset from the left edge by the card's inner padding (`left:30px`). The badge `<a>`: `font-size:13px; line-height:19.5px; font-weight:500; color:#181b31; background:#fff; padding:4px 12px; border-radius:4px; display:inline-block` — label `Blog`

### `.cont`
- `padding:40px 30px`; measured height `320.1px`
- Date: `<span>` `font-size:11px; line-height:16.5px; font-weight:400; text-transform:uppercase; color:#181b31`, wrapper `opacity:0.7`
- Title `<h5>`: inner `<a>` `font-size:18px; line-height:30.6px; font-weight:700; color:#181b31; display:inline-block`; the `h5` clamps to 2 lines (`display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden`), `margin-top:32px` relative to the date row (measured date top 4685, title top 4717)
- Excerpt `<p>`: `display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; color:#64748b; font-size:14px; margin-top:8px`
- `Continue Reading` link (`.butn.butn-inline`): `display:inline-block; position:relative; padding:0 0 5px; margin-top:20px; opacity:0.9; overflow:hidden; text-align:center; transition:0.4s; font-size:16px; color:#181b31`; width measures `110.9px`
  - It carries an underline bar (`.underline-gr.aqua-bg`): a `2px` bar at the bottom spanning the link width, background `radial-gradient(circle farthest-corner at 10% 20%,#fdc168 0%,#fb8080 90%)` — use global class `.kbcp-grad-coral`
  - Hover: `opacity:0.9 → 1`

### "View All Blogs" button
- row `margin-top:40px`, `text-align:center`
- `<a href="https://kbcp.in/blogs">`: `display:inline-flex; align-items:center; gap:10px; padding:14px 36px; background:linear-gradient(135deg,#0f1d3d,#1e40af); color:#fff; border-radius:50px; font-size:15px; font-weight:700; letter-spacing:0.5px; box-shadow:0 6px 24px rgba(30,64,175,0.28); transition:all 0.25s`
- hover: `background:linear-gradient(135deg,#1e40af,#f59e0b); box-shadow:0 8px 30px rgba(245,158,11,0.3)`
- content: `fas fa-book-open` + `View All Blogs` + `fas fa-arrow-right`

## Content (verbatim, 3 posts in order)

1. image `/images/blog/career-prospects.png`
   date `30 Sep 2023`
   title `What are the Career Prospects after a D Pharm Course?`
   excerpt `After completing a D Pharm (Diploma in Pharmacy) course, you'll have several career prospects in the pharmaceutical and healthcare industries.`
   href `https://kbcp.in/blog_details/what-are-the-career-prospects-after-a-d-pharm-course`
2. image `/images/blog/best-pharmacy.jpg`
   date `23 Aug 2023`
   title `Best Pharmacy College in West Bengal ? KBCP`
   excerpt `Experience excellence in pharmaceutical education at the premier Pharmacy College in West Bengal. Our innovative programs and state-of-the-art facilities pave the way for a successful career in the field. Join us and embark on a journey of learning and growth in the world of pharmacy.`
   href `https://kbcp.in/blog_details/unveiling-the-best-pharmacy-college-in-west-Bengal`
3. image `/images/blog/dpharm-guide.jpg`
   date `21 Jul 2023`
   title `A Comprehensive Guide to Pursuing D.Pharm Course`
   excerpt `The D.Pharm (Diploma in Pharmacy) course is an essential step for individuals aspiring to become pharmacy professionals. This comprehensive guide will provide you with insights into the D.Pharm course, covering essential information, eligibility criteria, admission process, syllabus, career prospects, and more.`
   href `https://kbcp.in/blog_details/a-comprehensive-guide-to-pursuing-d-pharm-course`

Each card image's `alt` is the post title. The tag badge label is `Blog` for all three and links to the post href.

## Responsive
- **≥992px:** 3 cards across (33.333% each)
- **≤991px:** cards go full width (measured 684px @768) and stack
- **≤575px:** `h4` `25px`
