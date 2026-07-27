# RecognitionsSection + VisitCampusSection + SiteFooter Specification

## Overview
- **Target files:** `src/components/RecognitionsSection.tsx`, `src/components/VisitCampusSection.tsx`, `src/components/SiteFooter.tsx`
- **Screenshot:** `docs/design-references/kbcp-desktop-full.png` (y ≈ 5120–6656)
- **Interaction model:** all static; hover states only.

---

# 1. RecognitionsSection

## DOM Structure
```
<section style="background:#f8fafc; padding:56px 0">
  <div class="kbcp-container">
    centred head (margin-bottom 3rem)
      span eyebrow
      h2
      3px gradient rule
    row justify-content:center -> 2 cards
    centred CTA (margin-top 1rem)
```

## Computed Styles
- section: `background:#f8fafc; padding:56px 0`; measured height `577.3px`
- head wrapper: `text-align:center; margin-bottom:3rem`
  - eyebrow `<span>`: `font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#f59e0b` — text `Recognized & Affiliated`
  - `<h2>`: `color:#0f1d3d; font-size:28px; font-weight:700; margin:8px 0 0` — text `Recognitions`
  - rule `<div>`: `width:44px; height:3px; background:linear-gradient(90deg,#1e40af,#f59e0b); border-radius:2px; margin:12px auto 0`
- card column: `33.333%` @≥768px, `50%` below; `margin-bottom:1.5rem`
- card: `background:#fff; border-radius:14px; padding:28px 20px; text-align:center; box-shadow:0 2px 20px rgba(15,29,61,0.08); height:100%; border-top:4px solid #1e40af; transition:transform 0.2s`
  - hover → `transform:translateY(-4px)`
  - `<img>`: `height:110px; width:110px; object-fit:contain; margin-bottom:16px`
  - `<h6>`: `color:#0f1d3d; font-weight:700; font-size:14px; margin-bottom:6px`
  - `<p>`: `color:#64748b; font-size:12px; margin-bottom:16px`
  - `<a target="_blank">`: `display:inline-flex; align-items:center; gap:6px; padding:8px 18px; background:#1e40af; color:#fff; border-radius:6px; font-size:12px; font-weight:700`, leading icon `fas fa-file-pdf`
- CTA: `<a href="https://kbcp.in/affilation">` `display:inline-flex; align-items:center; gap:8px; padding:11px 28px; background:linear-gradient(135deg,#0f1d3d,#1e40af); color:#fff; border-radius:50px; font-size:13px; font-weight:700; box-shadow:0 4px 16px rgba(30,64,175,0.22)`
  - hover → `background:linear-gradient(135deg,#1e40af,#f59e0b)`
  - content: `fas fa-certificate` + `View All Approvals & Affiliations` + `fas fa-arrow-right`

## Content (verbatim, 2 cards)
1. `/images/affiliations/pci.png`, alt `Pharmacy Council of India, New Delhi (PCI)`
   h6 `Pharmacy Council of India, New Delhi (PCI)`
   p `Ref. No: PCI-6658`
   link label `View Approval`, href `https://kbcp.in/uploads/affiliations/pci-6658.pdf`
2. `/images/affiliations/smfwb.png`, alt `SMFWB`
   h6 `SMFWB`
   p `State Medical Faculty of West Bengal`
   link label `View Affiliation`, href `https://kbcp.in/uploads/affiliations/1781787705_AFFILIATION LETTER.pdf`

## Responsive
- **≥768px:** 2 cards each 33.333%, centred (so a gap on both sides)
- **<768px:** 50% each

---

# 2. VisitCampusSection

## DOM Structure
```
<section style="background:#0f1d3d; padding:0">
  full-bleed row, no gutters
    left col 41.667% @>=992px  -> text panel
    right col 58.333% @>=992px -> Google Maps iframe
```

## Computed Styles
- section: `background:#0f1d3d; padding:0`; measured height `399px`
- left panel: `background:#0f1d3d; padding:48px 40px; display:flex; flex-direction:column; justify-content:center`
  - eyebrow `<span>`: `font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#f59e0b; margin-bottom:10px; display:block` — text `Find Us`
  - `<h3>`: `color:#fff; font-size:24px; font-weight:700; margin-bottom:16px` — text `Visit Our Campus`
  - `<p>`: `color:#94a3b8; font-size:14px; line-height:1.8; margin-bottom:24px` — three lines separated by `<br>`:
    `Village Tajpur, P.O. Raja Rampur, P.S. Mahishadal,` / `Purba Medinipur, West Bengal` / `Near NH-116 (Garughata Bus Stop)`
  - contact list: `display:flex; flex-direction:column; gap:12px; margin-bottom:28px`; each row `display:flex; align-items:center; gap:10px; color:#e2e8f0; font-size:13px` with icon `color:#f59e0b; width:16px`
    - `fas fa-phone-alt` — `+91 74790 34180`
    - `fas fa-envelope` — `contact@kbcp.in`
  - CTA `<a href="https://kbcp.in/contact_us">`: `display:inline-flex; align-items:center; gap:8px; padding:12px 26px; background:#f59e0b; color:#0f1d3d; border-radius:8px; font-size:13px; font-weight:700; width:fit-content`, icon `fas fa-map-marker-alt`, label `Get Directions`
- right panel: `min-height:360px`; `<iframe width="100%" height="100%" style="border:0; display:block; min-height:360px" allowFullScreen loading="lazy">`
  - src (verbatim, one line):
    `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.596208950096!2d87.95149747502919!3d22.15928694799241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02ed99ff3345cb%3A0x255aa2733d5f4132!2sKshudiram%20Bose%20College%20of%20Pharmacy!5e1!3m2!1sen!2sin!4v1781380432040!5m2!1sen!2sin`
  - Give the iframe a `title` for a11y, e.g. `Kshudiram Bose College of Pharmacy location`.

## Responsive
- **≥992px:** two columns (41.667% / 58.333%), full-bleed (no container)
- **≤991px:** stacks — text panel then map, map keeps `min-height:360px`

---

# 3. SiteFooter

## DOM Structure
```
<footer class="kbcp-footer">                    background #0a1628, position relative, overflow hidden
  ::before  amber radial blob, top -120 right -120, 400x400
  ::after   blue radial blob,  bottom -80 left -80, 300x300
  .kbcp-footer-cta        amber gradient strip
  <hr class="kbcp-footer-divider">
  .kbcp-footer-body       3 columns
  .kbcp-footer-bottom     copy + links
```

## Computed Styles

### `footer.kbcp-footer`
- `background:#0a1628; position:relative; overflow:hidden`; measured height `559.6px`
- `::before`: `position:absolute; top:-120px; right:-120px; width:400px; height:400px; border-radius:50%; background:radial-gradient(circle,rgba(245,158,11,0.07) 0%,transparent 70%); pointer-events:none`
- `::after`: `position:absolute; bottom:-80px; left:-80px; width:300px; height:300px; border-radius:50%; background:radial-gradient(circle,rgba(30,64,175,0.10) 0%,transparent 70%); pointer-events:none`
- Content must sit above both blobs.

### `.kbcp-footer-cta`
- `background:linear-gradient(135deg,#f59e0b 0%,#d97706 100%); padding:20px 0`
- inner (inside `.kbcp-container`): `display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px`
- text group: `display:flex; align-items:center; gap:12px`
  - icon `fas fa-graduation-cap`: `font-size:24px; color:#0f1d3d`
  - `<h6>`: `color:#0f1d3d; font-size:16px; font-weight:800; margin:0` — text `Admissions Open 2026-27`
  - `<span>`: `color:rgba(15,29,61,0.70); font-size:13px; display:block` — text `D.Pharm Programme • PCI Approved • Limited Seats`
- button `<a href="https://kbcp.in/apply">`: `display:inline-flex; align-items:center; gap:8px; padding:10px 24px; background:#0f1d3d; color:#f59e0b; font-size:13px; font-weight:700; border-radius:9px; transition:transform 0.2s`; hover `transform:translateY(-2px)`; icon `fas fa-arrow-right`, label `Apply Now`

### `.kbcp-footer-divider`
- `height:1px; background:linear-gradient(90deg,transparent,rgba(245,158,11,0.3),transparent); margin:0; border:none`

### `.kbcp-footer-body`
- `padding:56px 0 40px`; inside `.kbcp-container`, a 3-column row with `gap:1.5rem` (`g-4`):
  col A 33.333% @≥992px / 50% @768–991px; col B same; col C 33.333% @≥992px / 100% @768–991px

### `.kbcp-ft-heading`
- `font-size:15px; font-weight:800; color:#fff; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:20px; padding-bottom:10px; border-bottom:2px solid #f59e0b; display:inline-block`
- ≤575px: `font-size:13px`

### Column A — About
- brand `<a href="https://kbcp.in">`: `display:flex; align-items:center; gap:12px; margin-bottom:16px`
  - `<img src="/images/logo.png" class="kbcp-ft-logo">`: `height:64px; width:64px; object-fit:contain; margin-bottom:16px`
  - name div: `font-size:16px; font-weight:800; color:#fff; margin-bottom:4px` — text `Kshudiram Bose College` `<br>` `of Pharmacy`
  - tagline div: `font-size:11px; color:#f59e0b; font-weight:600; letter-spacing:0.5px; margin-bottom:14px` — text `Excellence in Pharmacy Education`
- `<p>`: `font-size:13px; color:rgba(255,255,255,0.55); line-height:1.8; margin-bottom:20px` — text
  `A premier pharmacy institution in Medinipur, West Bengal — approved by the Pharmacy Council of India (PCI) and affiliated to SMFWB, committed to producing skilled pharmaceutical professionals.`
- badges row: `display:flex; flex-wrap:wrap; gap:6px; margin-bottom:22px`; each badge `font-size:10px; font-weight:700; padding:4px 10px; border-radius:20px; border:1px solid rgba(245,158,11,0.35); color:rgba(255,255,255,0.65); letter-spacing:0.5px` — labels `PCI Approved`, `Affiliated by SMFWB`, `Est. 2022`
- socials row: `display:flex; gap:8px`; each `<a target="_blank">` `width:36px; height:36px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:14px; border:1px solid rgba(255,255,255,0.12); transition:all 0.2s`
  - fb: `color:#1877f2; background:rgba(24,119,242,0.12)` → hover `background:#1877f2; color:#fff`; href `https://www.facebook.com/kshudirambosecollegeofpharmacy`; icon `fab fa-facebook-f`
  - wa: `color:#25d366; background:rgba(37,211,102,0.12)` → hover `background:#25d366; color:#fff`; href `https://wa.me/917479034180`; icon `fab fa-whatsapp`
  - yt: `color:#ff0000; background:rgba(255,0,0,0.12)` → hover `background:#ff0000; color:#fff`; href `https://www.youtube.com/@kshudiramBoseCollegeofPharmacy`; icon `fab fa-youtube`
  - ig: `color:#e1306c; background:rgba(225,48,108,0.12)` → hover `background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); color:#fff`; href `https://www.instagram.com/kshudirambosecollegeofpharmacy/`; icon `fab fa-instagram`
  - all: hover also `transform:translateY(-3px); border-color:transparent`

### Column B — Useful Links
- heading `Useful Links`
- wrapper: `display:grid; grid-template-columns:1fr 1fr; gap:0 8px`, two `<ul>`
- `li`: `margin-bottom:8px`; `a`: `display:flex; align-items:center; gap:8px; font-size:13px; color:rgba(255,255,255,0.55); transition:color 0.2s, gap 0.2s`; leading `<i class="fas fa-chevron-right">` `font-size:9px; color:#f59e0b; flex-shrink:0`
- hover: `color:#f59e0b; gap:12px`
- List 1: `About Institution` `/about_institution`; `Fee Structure` `/fee_structure`; `Faculty Members` `/faculty_members`; `Admission` `/apply`; `Eligibility` `/eligibility`; `Scholarship` `/scholarship`
- List 2: `Gallery` `/gallery`; `Contact Us` `/contact_us`; `Latest News` `/news`; `Career` `/recruitment`; `Events` `/event`; `Anti Ragging` `/anti_ragging`; `SMFWB` → `https://share.google/qLePdVbxLlwFmosbw` (target `_blank`)
  (all others are `https://kbcp.in` + path)

### Column C — Contact Us
- heading `Contact Us`
- 4 address items, each `display:flex; align-items:flex-start; gap:12px; margin-bottom:18px` (≤767px `gap:10px`)
  - icon box: `width:36px; height:36px; border-radius:9px; flex-shrink:0; background:rgba(245,158,11,0.12); border:1px solid rgba(245,158,11,0.25); display:flex; align-items:center; justify-content:center; font-size:14px; color:#f59e0b; margin-top:2px` (≤575px `width:32px; height:32px; font-size:12px`)
  - text: `font-size:13px; color:rgba(255,255,255,0.55); line-height:1.7` (≤575px `font-size:12px`); links inherit that colour, hover `#f59e0b`
  - label span: `font-size:11px; font-weight:700; color:#f59e0b; text-transform:uppercase; letter-spacing:0.8px; display:block; margin-bottom:2px`
  1. `fas fa-map-marker-alt` — label `Address` — text `Village Tajpur, P.O. Raja Rampur, P.S. Mahishadal, Dist. Purba Medinipur, West Bengal. Near NH-116 (Garughata Bus Stop).`
  2. `fas fa-envelope` — label `Email` — link `contact@kbcp.in` → `mailto:contact@kbcp.in`
  3. `fas fa-phone-alt` — label `Phone` — links `+91 7479034180` → `tel:+917479034180`, then ` / ` separator, then `+91 7479034182` → `tel:+917479034182`
  4. `fas fa-clock` — label `Office Hours` — text `Mon – Sat • 9:00 AM – 5:00 PM`

### `.kbcp-footer-bottom`
- `border-top:1px solid rgba(255,255,255,0.07); padding:18px 0`
- inner: `display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px`
- copy `<p>`: `font-size:12px; color:rgba(255,255,255,0.35)` — text `© 2026 ` + `<span style="color:#f59e0b; font-weight:600">KBCP</span>` + `. All rights reserved.  |  Kshudiram Bose College of Pharmacy`
- links row: `display:flex; flex-wrap:wrap; gap:8px 18px`; each `a` `font-size:12px; color:rgba(255,255,255,0.35)`, hover `#f59e0b`
  - `About` `/about_institution`; `Contact` `/contact_us`; `Affiliation` `/affilation`; `Terms of Use` `/terms`; `Privacy Policy` `/privacy`

## Responsive
- **≤991px:** `.kbcp-footer-body` padding `40px 0 28px`; socials `justify-content:flex-start; flex-wrap:wrap`
- **≤767px:** CTA inner becomes `flex-direction:column; align-items:flex-start; gap:14px`; body padding `36px 0 24px`; bottom bar `flex-direction:column; align-items:center; text-align:center; gap:12px` and its links `justify-content:center; gap:8px 14px`
- **≤575px:** CTA padding `16px 0`; CTA `h6` `14px`, `span` `12px`; CTA button `width:100%; justify-content:center` and its inner wrapper `align-items:stretch`; `.kbcp-ft-heading` `13px`; bottom links `gap:6px 12px` and `font-size:11px`
