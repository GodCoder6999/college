# TickerBar + MainHeader Specification

## Overview
- **Target files:** `src/components/TickerBar.tsx`, `src/components/MainHeader.tsx`
- **Screenshot:** `docs/design-references/kbcp-desktop-full.png` (topmost 115px)
- **Interaction model:** TickerBar = time-driven marquee; MainHeader = static with hover states.

---

# 1. TickerBar (`.kbcp-ticker-bar`)

## DOM Structure
`<div class="kbcp-ticker-bar">` → `<marquee class="kbcp-ticker-marquee" scrollamount="5">` with a single line of text + icons.

## Computed Styles
- wrapper: `background:#f59e0b; padding:0; overflow:hidden`; measured height `34px`
- marquee text: `color:#fff; font-size:12px; padding:6px 0; font-weight:600`
- icons inside: `color:#fff; opacity:0.85`

## Behavior
- `<marquee scrollamount="5">` scrolls right → left continuously; `onmouseover` stops, `onmouseleave` resumes.
- **Implementation:** `<marquee>` is deprecated; reproduce with CSS. Render the text content **twice** side-by-side inside a flex row and animate the row with `animation: kbcpMarquee 25s linear infinite` (keyframe already in `globals.css`: `translateX(0)` → `translateX(-50%)`). Pause with `animation-play-state: paused` on hover (`hover:[animation-play-state:paused]` on the moving element, driven by `group-hover` on the wrapper).

## Text Content (verbatim, single line; `&bull;` separators are `•` with non-breaking spaces around them)
```
[fas fa-university] Pharmacy Education, Govt. of West Bengal
 • [fas fa-phone-alt] Enquire: 7479034180
 • [fas fa-graduation-cap] Admission Open 2026-27 — D.Pharm Batch
 • [fas fa-check-circle] PCI Approved & SMFWB Affiliated
 • [fas fa-desktop] Apply Online at kbcp.in
```
Exact segment strings, in order:
1. `Pharmacy Education, Govt. of West Bengal` (icon `fas fa-university`)
2. `Enquire: 7479034180` (icon `fas fa-phone-alt`)
3. `Admission Open 2026-27 — D.Pharm Batch` (icon `fas fa-graduation-cap`)
4. `PCI Approved & SMFWB Affiliated` (icon `fas fa-check-circle`)
5. `Apply Online at kbcp.in` (icon `fas fa-desktop`)

Joined by ` • ` (bullet, spaces on both sides).

## Responsive
No breakpoint changes. Visible at all widths.

---

# 2. MainHeader (`.kbcp-mainheader`)

## DOM Structure
```
<div class="kbcp-mainheader">
  <div class="container-fluid kbcp-header-container">   max-width:1320px
    row (align-items:center)
      col (7/12 lg, 8/12 md, 9/12 xs)
        <a class="kbcp-brand-link">  logo img + h1 + p
      col (5/12 lg, 4/12 md, 3/12 xs)
        <div class="kbcp-header-right">
          <div class="kbcp-social-btns">  [4 social circles] [Notice btn] [Enquire btn]
          <div class="kbcp-accred-text">
```

## Computed Styles

### `.kbcp-mainheader`
- background: `linear-gradient(135deg,#0f1d3d 0%,#1e3a8a 100%)`
- border-bottom: `3px solid #f59e0b`; padding: `14px 0`; measured height `80.75px`

### `.kbcp-header-container`
- max-width: `1320px`; width 100%; margin-inline auto; padding-inline `12px`

### `.kbcp-brand-link`
- display: flex; align-items: center; gap: `14px`; text-decoration: none

### `.kbcp-logo-wrap`
- display: flex; align-items: center; gap: `14px`

### `.kbcp-logo-img`
- height/width `62px`; object-fit: contain; filter: `drop-shadow(0 2px 8px rgba(0,0,0,0.3))`

### `.kbcp-college-name` (an `<h1>`)
- fontSize `18px`; fontWeight `800`; color `#fff`; margin `0`; lineHeight `1.25`

### `.kbcp-college-tagline`
- fontSize `11px`; color `#93c5fd`; margin `4px 0 0`; letterSpacing `0.3px`

### `.kbcp-header-right`
- display: flex; flex-direction: column; align-items: flex-end; gap: `9px`

### `.kbcp-social-btns`
- display: flex; align-items: center; gap: `16px`

### `.kbcp-social-icons`
- display: flex; gap: `7px`
- each `a`: `width:30px; height:30px; border-radius:50%; background:rgba(255,255,255,0.12); color:#fff; border:1px solid rgba(255,255,255,0.22); display:flex; align-items:center; justify-content:center; font-size:12px; transition:background 0.2s, color 0.2s, border-color 0.2s`

### `.kbcp-header-btns`
- display: flex; gap: `8px`

### `.kbcp-btn-notice`
- `display:inline-flex; align-items:center; gap:6px; padding:7px 16px; background:transparent; color:#f59e0b; font-size:12px; font-weight:700; border-radius:8px; border:1.5px solid #f59e0b; transition:all 0.2s`

### `.kbcp-btn-enquire`
- `display:inline-flex; align-items:center; gap:6px; padding:7px 18px; background:#f59e0b; color:#0f1d3d; font-size:12px; font-weight:700; border-radius:8px; transition:opacity 0.2s`

### `.kbcp-accred-text`
- fontSize `10.5px`; color `rgba(255,255,255,0.45)`; textAlign right

## States & Behaviors — hover only
- `.kbcp-social-icons a:hover` → `background:#f59e0b; color:#0f1d3d; border-color:#f59e0b`
- `.kbcp-btn-notice:hover` → `background:#f59e0b; color:#0f1d3d`
- `.kbcp-btn-enquire:hover` → `opacity:0.88`

## Text Content (verbatim)
- Brand link href: `https://kbcp.in`
- Logo: `/images/logo.png`, alt `KBCP Logo`
- h1: `Kshudiram Bose College of Pharmacy`
- tagline: `PCI Approved • SMFWB Affiliated • Mahishadal, Purba Medinipur, WB`
- Socials (all `target="_blank"`):
  - `https://www.facebook.com/kshudirambosecollegeofpharmacy` — `fab fa-facebook-f`
  - `https://www.instagram.com/` — `fab fa-instagram`
  - `https://www.youtube.com/@kshudiramBoseCollegeofPharmacy` — `fab fa-youtube`
  - `https://wa.me/917479034180` — `fab fa-whatsapp`
- Notice button: `https://kbcp.in/news`, icon `fas fa-bell`, label `Notice`
- Enquire button: `https://kbcp.in/apply`, icon `fas fa-phone-alt`, label `Enquire`
- Accreditation line: `Approved by PCI, Govt. of India  |  Affiliated by SMFWB` (two non-breaking spaces around the pipe)

## Responsive Behavior
- **Desktop (1440px):** as above, brand col 58.33%, right col 41.67%
- **Tablet (768px):** `padding:10px 0` (measured), `.kbcp-college-name` `14px`, `.kbcp-logo-img` `44px`; `.kbcp-btn-notice` and `.kbcp-btn-enquire` `display:none`; the right column's `.kbcp-accred-text` and `.kbcp-social-icons` are `display:none` (these two hide at ≤991px)
- **Mobile (≤575px):** whole `.kbcp-mainheader` is `display:none`
- **Breakpoints:** 992px, 576px — use arbitrary variants (`max-[991px]:`, `max-[575px]:`), not Tailwind's default `lg`
