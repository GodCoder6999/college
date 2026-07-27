# HeroSlider Specification

## Overview
- **Target file:** `src/components/HeroSlider.tsx`
- **Screenshot:** `docs/design-references/kbcp-desktop-full.png` (top hero, 175–886px)
- **Interaction model:** time-driven (autoplay) + click-driven (arrows / fraction pagination). Client component.

## DOM Structure
```
<header class="slider slider-prlx o-hidden">            position:relative; overflow:hidden; height:711px
  <div class="swiper-container parallax-slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide">                        one per slide, cross-faded
        <div class="bg-img valign" data-overlay-dark="6">   background-image per slide
          <div class="container">                          .kbcp-container, z-index:2
            <div class="row justify-content-left">
              <div class="col-lg-8 col-md-10">
                <div class="caption text-left">
                  <h1>…</h1>
                  <div class="row"><div class="col-lg-10"><p>…</p></div></div>
                  <div class="mt-30">buttons</div>
    <div class="setone setwo">next / prev chevrons</div>
    <div class="swiper-pagination top botm"></div>       fraction "1 / 7"
```

## Computed Styles

### `header.slider`
- position: relative; overflow: hidden; width: 100%; height: `711px` (desktop)
- height at 768px viewport: `808.95px`; at 390px: `180px`

### `.bg-img` slide layer
- position: absolute; inset 0; width 100%; height 100%
- `background-size: cover; background-repeat: no-repeat; background-position: center`
- display: flex; align-items: center (`.valign`)
- Dark overlay `::before`: `content:''; position:absolute; inset:0; z-index:1; pointer-events:none; background:#171a2a47`
- Slide content wrapper (`.container`) sits at `position:relative; z-index:2`

### `h1` (caption)
- fontSize: `30px`; lineHeight: `48px`; fontWeight: `800`; color: `#fff`; textAlign: left
- Accent `<span>` inside is `color:#f59e0b` (note the leading space in the original markup)
- Mobile 390px: fontSize `15px`; lineHeight `24px`

### `p` (caption)
- fontSize: `16px`; lineHeight: `32px`; fontWeight: `400`; color: `#eeeeee`; margin: `15px 0 0`
- Sits inside a nested row/col that caps it at ~`col-lg-10` (83.33%) of the `col-lg-8` column

### Button row
- `margin-top: 30px` (`.mt-30`), buttons inline with `12px` gap between them (second button has `margin-left:12px`)

### Primary button (`.butn.butn-md.gr-purple-red-bg.text-light.radius-30`)
- display: inline-block; padding: `0 25px`; min-height: `50px`; lineHeight: `50px`
- width (Apply Now): `170px`; borderRadius: `30px`; overflow: hidden; position: relative
- color: `#f8f9fa`; fontSize: `16px`; textAlign: center
- background: `radial-gradient(circle at 10% 20%, #fdc168 0%, #fb8080 90%)` (globals: `.kbcp-grad-coral`)
- transition: `0.4s`

### Secondary button (inline styles on the original)
- same geometry, `background: transparent; border: 2px solid #fff; color: #fff; border-radius: 30px; margin-left: 12px`

### `.swiper-pagination.top.botm` (fraction counter)
- position: absolute; `right: 40px; bottom: 200px`; z-index: 10
- fontSize: `40px`; lineHeight: `60px`; fontWeight: `500`; color: `#fff`; textAlign: center
- Renders as `current / total` (Swiper `type:'fraction'`), e.g. `1 / 7`. Total is 7.

### Nav arrows (`.setone.setwo` → `.next-ctrl` / `.prev-ctrl`)
- Positioned bottom-left/bottom-right area of the hero, `z-index:10`, circular, white chevrons
- Icons: `fas fa-chevron-right` (next) and `fas fa-chevron-left` (prev)
- Render as ~`48px` circles with `border: 1px solid rgba(255,255,255,0.35)`, `color:#fff`, `border-radius:50%`, centred icon, `cursor:pointer`, `transition:0.4s`; on hover `background:rgba(255,255,255,0.15)`. Place them stacked at `left: 40px; bottom: 40px` and `left: 100px; bottom: 40px` respectively — visually a pair of small circles in the lower-left.

## States & Behaviors

### Autoplay / slide change
- **Trigger:** Swiper config → `effect:'fade'`, `fadeEffect:{crossFade:true}`, `speed:1200`, `autoplay:{delay:5000, disableOnInteraction:false}`, `loop:true`, `grabCursor:true`
- **Implementation:** DO NOT install Swiper. Implement with React state: `activeIndex`, `setInterval(5000)` advancing with wrap-around, cleared on unmount and restarted after manual navigation.
- Slides are stacked absolutely; the active one is `opacity:1`, the rest `opacity:0`, with `transition: opacity 1200ms ease` (cross-fade).
- Caption entrance: `h1` `transition: opacity 0.5s, visibility 0.5s`; `p` starts `opacity:0; transform:translateY(20px)` with `transition: 0.4s 1s` (1 s delay) and animates to `opacity:1; transform:none` when its slide becomes active. Reset when the slide leaves.

### Click
- Next / prev chevrons step the index (wrapping). Pagination fraction is display-only text.

### Hover
- Buttons: `transition 0.4s`; primary keeps its gradient, secondary fills to `background:#fff; color:#0f1d3d` on hover (theme `.butn-bg` hover). Arrows: see above.

## Per-Slide Content (verbatim, 7 slides, in order)

1. image `/images/slider/slide-1.jpeg` — h1 `Great Future in` + accent ` College of Pharmacy`
   p: `Welcome to Kshudiram Bose College of Pharmacy — PCI Approved & SMFWB Affiliated. Build your career in pharmaceutical sciences.`
   buttons: `Apply Now` → `https://massatech.in/kbcp/apply` (primary); `Know More` → `https://massatech.in/kbcp/about_institution` (outline)
2. image `/images/slider/slide-2.jpeg` — h1 `Excellence in` + accent ` Pharmacy Education`
   p: `State-of-the-art laboratories, expert faculty, and a vibrant campus life await you at KBCP, Mahishadal.`
   buttons: `Explore Courses` → `https://massatech.in/kbcp/admin/course` (primary); `Contact Us` → `https://massatech.in/kbcp/contact_us` (outline)
3. image `/images/slider/slide-3.jpeg` — h1 `OUR CLASSROOM`
   p: `Smart Classroom, Smarter Learning – Equipped with Modern Projector Facilities.`
   buttons: none
4. image `/images/slider/slide-4.jpeg` — h1 `OUR LAB`
   p: `State-of-the-art Pharmacy Laboratories designed to foster scientific excellence, hands-on training, research innovation, and quality pharmaceutical education.`
   buttons: `Apply Now` → `https://massatech.in/kbcp/apply` (primary); `Know More` → `https://massatech.in/kbcp/about_institution` (outline)
5. image `/images/slider/slide-5.jpeg` — h1 `WORKSHOP PROGRAMME`
   p: `Students of Kshudiram Bose College of Pharmacy actively participated in the AI in Pharma Skill Course, exploring innovative AI applications in the pharmaceutical sector.`
   buttons: none
6. image `/images/slider/slide-6.jpeg` — h1 `MACHINE ROOM`
   p: none
   buttons: none
7. image `/images/slider/slide-7.jpeg` — h1 `Student Performing in Lab`
   p: `Welcome to Kshudiram Bose College of Pharmacy — PCI Approved & SMFWB Affiliated. Build your career in pharmaceutical sciences.`
   buttons: `Apply Now` → `https://massatech.in/kbcp/apply` (primary); `Know More` → `https://massatech.in/kbcp/about_institution` (outline)

## Assets
- `/images/slider/slide-1.jpeg` … `/images/slider/slide-7.jpeg` (already downloaded to `public/`)
- Icons: `fas fa-chevron-left`, `fas fa-chevron-right` (Font Awesome, globally loaded)

## Responsive Behavior
- **Desktop (1440px):** height `711px`, h1 `30/48`, caption column `col-lg-8` (66.67%) of the 1170px container
- **Tablet (768px):** height `808.95px` — i.e. `min-height` is viewport-driven; use `height: 711px` at ≥992px, `min-height: 100vw` style behaviour is NOT needed — set `height:809px` at 768–991px, h1 stays `30/48`, caption column `col-md-10` (83.33%)
- **Mobile (390px):** height `180px`, h1 `15px/24px`, `p` hidden is NOT the case — it stays but the section is short; keep overflow hidden and let the caption sit vertically centred. Buttons remain visible.
- **Breakpoints:** 992px, 576px
