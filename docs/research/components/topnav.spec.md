# TopNav Specification

## Overview
- **Target files:** `src/components/TopNav.tsx`, `src/lib/nav-data.ts`
- **Screenshot:** `docs/design-references/kbcp-desktop-full.png` (top strip)
- **Interaction model:** click-driven dropdowns + scroll-driven shadow. Client component.

## DOM Structure
`<nav class="kbcp-topnav">` → `.kbcp-nav-container` (max-width 1320px, padding 0 20px) containing
1. `.kbcp-mnav-brand` (mobile-only logo + 2-line text)
2. `.kbcp-toggler` (mobile-only 3-bar hamburger)
3. `.navbar-collapse` → `ul.navbar-nav.mx-auto` of `li` (plain link OR dropdown) + a desktop-only "Apply Now" button

## Computed Styles

### nav (`.kbcp-topnav`)
- background: `#0f1d3d`; border-bottom: `0.8px solid rgba(245,158,11,0.25)`
- padding: `0`; position: `sticky`; top: `0`; z-index: `1040`; height: `60px` (desktop)
- transition: `box-shadow 0.3s`
- display: flex, align-items: center, flex-wrap: wrap (Bootstrap `.navbar`)

### `.kbcp-nav-container`
- max-width: `1320px`; padding: `0 20px`; width 100%; margin-inline auto; display flex; align-items center; flex-wrap wrap

### `.kbcp-link` (nav link)
- display: flex; align-items: center; gap: `4px`; padding: `18px 13px`
- fontSize: `13px`; fontWeight: `600`; color: `rgba(255,255,255,0.88)`; letterSpacing: `0.15px`
- position: relative; cursor: pointer; border: none; background: none; white-space: nowrap
- transition: `color 0.2s`
- `::after`: `position:absolute; bottom:0; left:13px; right:13px; height:2px; background:#f59e0b; border-radius:1px; transform:scaleX(0); transform-origin:left; transition:transform 0.25s ease`

### `.kn-arrow` (chevron, `fas fa-chevron-down`)
- fontSize: `9px`; opacity: `0.55`; transition: `transform 0.25s, opacity 0.2s`

### `.kn-drop` (dropdown panel)
- background `#fff`; border: none; borderRadius: `14px`; padding: `8px`
- boxShadow: `0 12px 48px rgba(15,29,61,0.12), 0 2px 8px rgba(15,29,61,0.05)`
- marginTop: `0`; position absolute; top 100%; left 0; z-index 1000
- animation: `kbcpDropIn 0.18s cubic-bezier(0.16,1,0.3,1) forwards` (keyframe already in globals.css)
- `.kn-mega` variant: `padding:16px; min-width:540px`; `.kn-mega-lg`: `min-width:680px`

### `.kn-di` (dropdown item)
- display flex; align-items center; gap `10px`; padding `9px 10px`; borderRadius `9px`; cursor pointer
- transition `background 0.14s`

### `.kn-icon`
- width/height `34px`; borderRadius `8px`; display flex; center; flex-shrink 0; fontSize `14px`
- background = item colour + `18` alpha suffix (e.g. `#1e40af18`); icon `color` = item colour
- Department (compact) items: icon fontSize `12px`, label fontSize `12px`

### `.kn-label` / `.kn-desc`
- label: `13px` / `600` / `#0f1d3d` / line-height 1.3, transition `color 0.14s`
- desc: `11px` / `400` / `#94a3b8` / line-height 1.3, marginTop `1px`

### `.kn-section-label`
- `10px` / `700` / letterSpacing `1.5px` / uppercase / `#94a3b8`; padding `10px 10px 4px`; display block

### `.kn-sep`
- height `1px`; background `#f1f5f9`; margin `6px 4px`

### `.kn-grid`
- display grid; gap `2px`; `.kn-grid-2` → `1fr 1fr`; `.kn-grid-3` → `1fr 1fr 1fr`

### `.kn-feat` (featured CTA card inside "Explore Us" mega menu)
- background `linear-gradient(135deg,#0f1d3d 0%,#1e40af 100%)`; borderRadius `10px`
- padding `18px 16px`; marginTop `12px`; display flex; align-items center; gap `16px`
- `h6`: `13px`/`700`/`#f59e0b`, margin `0 0 3px`, leading `fas fa-star` icon with `margin-right:4px`
- `p`: `11px`/`#94a3b8`, margin 0
- `a`: padding `8px 18px`; background `#f59e0b`; color `#0f1d3d`; `12px`/`700`; borderRadius `7px`; white-space nowrap; flex-shrink 0; transition `opacity 0.2s`; leading `fas fa-arrow-right` icon `margin-right:5px`

### Desktop Apply Now button (last child of collapse)
- `margin-left:16px`, hidden below 992px
- `display:inline-flex; align-items:center; gap:6px; padding:9px 22px; background:#f59e0b; color:#0f1d3d; font-size:12px; font-weight:800; border-radius:9px; white-space:nowrap; letter-spacing:0.3px; transition:opacity 0.2s`, icon `fas fa-arrow-right`

### `.kbcp-mnav-brand` (≤991px only)
- display flex; align-items center; gap `10px`
- `img` 40×40 object-contain (`/images/logo.png`)
- `strong` `13px`/`800`/`#fff`/lh 1.2 → "Kshudiram Bose College"
- `small` `9px`/`rgba(255,255,255,0.6)`/letterSpacing `0.3px`/lh 1.3 → "of Pharmacy, Mahishadal"

### `.kbcp-toggler` (≤991px only)
- border none; background none; padding `6px`; display flex; flex-direction column; gap `5px`
- 3 × `span`: `22px × 2.5px`, background `#fff`, borderRadius `2px`, transition `transform 0.3s, opacity 0.3s`

## States & Behaviors

### Scroll shadow
- **Trigger:** `window.scrollY > 80` (passive scroll listener) toggles `.scrolled`
- **State A:** `box-shadow: none`
- **State B:** `box-shadow: 0 4px 30px rgba(15,29,61,0.40)`
- **Transition:** `box-shadow 0.3s`

### Dropdown open
- Click on `.kbcp-link` toggles panel. Only one open at a time; clicking outside or Escape closes.
- Open state: link colour `#f59e0b`, `::after` `scaleX(1)`, chevron `rotate(180deg)` + `opacity:1`, panel plays `kbcpDropIn`.

### Hover
- `.kbcp-link`: color `rgba(255,255,255,.88)` → `#f59e0b`; `::after` `scaleX(0)` → `scaleX(1)` (`transform .25s ease`)
- `.kn-di`: background transparent → `#f8fafc` (`.14s`); `.kn-label` `#0f1d3d` → `#1e40af`
- `.kn-feat a`, Apply Now: opacity `1` → `0.88` (`.2s`)

### Mobile (≤991px)
- `.kbcp-topnav` padding `10px 0`; hamburger + `.kbcp-mnav-brand` shown; desktop Apply Now hidden
- Collapse panel: `background:#0f1d3d; border-radius:14px; margin-top:10px; padding:10px; box-shadow:0 10px 40px rgba(15,29,61,0.40); border:1px solid rgba(245,158,11,0.2)`
- `.kbcp-link`: padding `11px 14px`; borderRadius `9px`; color `rgba(255,255,255,0.92)`; `::after` hidden
- Dropdown panels become static, full width, no shadow, borderRadius `10px`, marginTop `4px`, no animation, `background:rgba(255,255,255,0.07)`, `border:1px solid rgba(255,255,255,0.12)`
- `.kn-label` → `#fff`; `.kn-desc` → `rgba(255,255,255,0.52)`; `.kn-section-label` → `#f59e0b`; `.kn-sep` → `rgba(255,255,255,0.12)`; `.kn-di:hover` → `rgba(255,255,255,0.10)` with label `#f59e0b`
- `.kn-grid-2`/`.kn-grid-3` → 1 column; `.kn-feat` → column + centered

## Nav data (verbatim — put in `src/lib/nav-data.ts`, typed with `NavItem` from `src/types/kbcp.ts`)

All hrefs below are the real target URLs (keep them absolute, `https://kbcp.in/...`).

1. **Home** → `https://kbcp.in`
2. **Explore Us** — mega, `kn-grid-2`, 9 items, plus featured card:
   - About Institution / History & overview / `/about_institution` / `fas fa-university` / `#1e40af`
   - Mission & Vision / Purpose & principles / `/mission_and_vision` / `fas fa-bullseye` / `#7c3aed`
   - Approval & Affiliation / PCI & Board affiliations / `/affilation` / `fas fa-certificate` / `#16a34a`
   - Secretary's Desk / Message from management / `/message_from_chairman` / `fas fa-quote-left` / `#f59e0b`
   - Principal's Desk / Principal's message / `/message_from_principal` / `fas fa-user-tie` / `#0891b2`
   - Mandatory Disclosure / Regulatory document / `/mandatory_disclosure` (target=_blank) / `fas fa-file-alt` / `#dc2626`
   - Governing Body / Board members / `/govorning_body` / `fas fa-users-cog` / `#9333ea`
   - Administration / Administrative staff / `/administrative` / `fas fa-building` / `#b45309`
   - College Committees / All 8 committees / `/college-committees-list` / `fas fa-sitemap` / `#1e40af`
   - Featured: title "Admission Open", lines ["D.Pharm Programme 2026-27", "PCI Approved • Quality Education"], CTA "Apply Now" → `/apply`
3. **Course** — `min-width:280px`, section label "D.Pharm Programme", 1 item:
   - Diploma in Pharmacy / 2-year PCI approved programme / `/d_pharma` / `fas fa-pills` / `#1e40af`
4. **Academic** — mega-lg. Group 1 label "Faculty & Academics", `kn-grid-2`, 7 items:
   - Advisory Committee / Expert guidance panel / `/advisory-committee` / `fas fa-users` / `#7c3aed`
   - Teaching Staff / Full-time faculty / `/faculty_members` / `fas fa-chalkboard-teacher` / `#1e40af`
   - Non-Teaching Staff / Support staff / `/non_teaching_staff` / `fas fa-user-friends` / `#16a34a`
   - Eligibility / Admission criteria / `/eligibility` / `fas fa-check-circle` / `#f59e0b`
   - Rules & Regulations / Academic conduct rules / `/rules-regulations` / `fas fa-gavel` / `#dc2626`
   - Prospectus / Download PDF / `/prospectus` / `fas fa-file-pdf` / `#0891b2`
   - Publication / Research publications / `/publication` / `fas fa-file-alt` / `#7c3aed`
   Then `.kn-sep`, label "Departments", `kn-grid-3`, 6 **compact** items (no desc):
   - Pharmaceutical Chemistry / `/pharmaceutical_chemishtry` / `fas fa-atom` / `#1e40af`
   - Pharmacology / `/pharmacology` / `fas fa-heartbeat` / `#dc2626`
   - Pharmaceutics / `/pharmaceutics` / `fas fa-pills` / `#7c3aed`
   - Pharmacognosy / `/pharmacognosy` / `fas fa-leaf` / `#16a34a`
   - Pharmaceutical Analysis / `/pharmaceutical_analysis` / `fas fa-microscope` / `#f59e0b`
   - Pharmacy Practice / `/pharmacy_practice` / `fas fa-hospital` / `#0891b2`
5. **Student Corner** — mega-lg, `kn-grid-2`, 9 items:
   - Apply / Admission / Start application / `/apply` / `fas fa-file-signature` / `#16a34a`
   - Fee Structure / Complete fee details / `/fee_structure` / `fas fa-rupee-sign` / `#1e40af`
   - Eligibility Criteria / Check eligibility / `/eligibility` / `fas fa-check-double` / `#f59e0b`
   - Documents Required / Admission documents / `/req_doc` / `fas fa-folder-open` / `#7c3aed`
   - Syllabus / D.Pharm syllabus PDFs / `/syllabus` / `fas fa-book-open` / `#0891b2`
   - Scholarship / Available schemes / `/scholarship` / `fas fa-award` / `#16a34a`
   - Career Opportunities / Pharmacy career paths / `/career` / `fas fa-briefcase` / `#b45309`
   - KBCP Calendar / Academic schedule / `/kbcp-calendar` / `fas fa-calendar-alt` / `#dc2626`
   - Institute Magazine / Annual publications / `/institute-magazine` / `fas fa-newspaper` / `#9333ea`
6. **Campus Life** — mega, `kn-grid-2`, 11 items:
   - Infrastructure / Buildings & facilities / `/infrastructer` / `fas fa-building` / `#1e40af`
   - Class Room / Smart classrooms / `/class-room` / `fas fa-chalkboard` / `#7c3aed`
   - Laboratory / 6 equipped labs / `/laboratory` / `fas fa-flask` / `#16a34a`
   - Library / 5000+ books & journals / `/library` / `fas fa-book` / `#0891b2`
   - Computer Lab / Digital learning centre / `/computer_lab` / `fas fa-desktop` / `#f59e0b`
   - Herbal Garden / Medicinal plant collection / `/herbal_garden` / `fas fa-seedling` / `#16a34a`
   - Drug Museum / Drug specimens & models / `/drug_museum` / `fas fa-vials` / `#9333ea`
   - Play Ground / Sports & outdoor activities / `/sports` / `fas fa-running` / `#dc2626`
   - Front Office / Admin & student services / `/front-office` / `fas fa-concierge-bell` / `#1e40af`
   - Hostel / Student accommodation / `/hostel` / `fas fa-home` / `#b45309`
   - Canteen / Hygienic & affordable meals / `/canteen` / `fas fa-utensils` / `#f59e0b`
7. **Gallery** → `https://kbcp.in/gallery`
8. **News & Events** — `min-width:260px`, 3 items:
   - News & Notices / Latest announcements / `/news` / `fas fa-bell` / `#dc2626`
   - Events / College events & activities / `/event` / `fas fa-calendar-day` / `#1e40af`
   - Blog / Articles & insights / `/blogs` / `fas fa-pen-nib` / `#7c3aed`
9. **FAQ** → `https://kbcp.in/faq`
10. **Contact** → `https://kbcp.in/contact_us`

## Assets
- `/images/logo.png` (mobile brand)
- Icons: Font Awesome 6.4.0 classes as listed (globally loaded)

## Responsive Behavior
- **Desktop (≥992px):** horizontal nav centred (`mx-auto`), 60px tall, hover underline, absolute dropdowns
- **Tablet (768px):** hamburger already active (breakpoint is 992px), stacked collapse panel
- **Mobile (390px):** same as tablet; brand shown at left
- **Breakpoint:** 992px
