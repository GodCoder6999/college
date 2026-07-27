# ScrollProgress + WhatsAppFab + EnquiryPopup Specification

## Overview
- **Target files:** `src/components/ScrollProgress.tsx`, `src/components/WhatsAppFab.tsx`, `src/components/EnquiryPopup.tsx`
- **Interaction model:** ScrollProgress = scroll-driven; WhatsAppFab = static + hover; EnquiryPopup = time-driven (auto-open) + click.

---

# 1. ScrollProgress (`.progress-wrap`)

## Computed Styles
- `position:fixed; right:30px; bottom:30px; width:44px; height:44px; border-radius:50px; z-index:100; cursor:pointer`
- `box-shadow: inset 0 0 0 2px rgba(24,27,49,0.2)` (theme ring)
- Initial: `opacity:0; transform:translateY(20px); transition:0.4s linear` (visibility hidden)
- Inner `svg.progress-circle` `width:100%; height:100%; viewBox="-1 -1 102 102"` with the single arc path — use `ProgressRingIcon` from `src/components/icons.tsx`
  - path stroke: `#181b31`, `stroke-width:4`, `fill:none`, `stroke-linecap:round`
  - `stroke-dasharray: 307.919`; `stroke-dashoffset` interpolates from `307.919` (0%) to `0` (100%) with scroll progress
- Centre glyph: a `fas fa-arrow-up` at `font-size:14px; color:#181b31`, absolutely centred

## Behavior
- **Trigger:** `scrollY > 50` → `opacity:1; transform:translateY(0)`; below → hidden again. Transition `0.4s linear`.
- `stroke-dashoffset = 307.919 - (307.919 * scrollY / (scrollHeight - innerHeight))`
- Click → `window.scrollTo({ top: 0, behavior: 'smooth' })`

---

# 2. WhatsAppFab

## Computed Styles (inline on the original anchor)
- `position:fixed; bottom:28px; right:24px; z-index:9990`
- `width:54px; height:54px; border-radius:50%`
- `background:#25d366; color:#fff`
- `display:flex; align-items:center; justify-content:center; font-size:26px`
- `box-shadow:0 4px 18px rgba(37,211,102,0.5)`
- `transition:transform 0.2s, box-shadow 0.2s`

## Behavior — hover
- `transform:scale(1) → scale(1.12)`; `box-shadow:0 4px 18px rgba(37,211,102,0.5) → 0 6px 24px rgba(37,211,102,0.7)`

## Content
- `href="https://wa.me/917479034180"`, `target="_blank"`, `rel="noopener"`, `title="Chat with us on WhatsApp"`
- icon `fab fa-whatsapp`

---

# 3. EnquiryPopup

## DOM Structure
```
overlay #kbcp-popup-overlay      fixed inset 0, z-index 9999
  box #kbcp-popup-box            max-width 440px
    close button                 top-right
    header (navy gradient + 2 decorative circles)
      badge (pulse dot + label)
      h3
      p
    body
      success panel (hidden until submitted)
      form: [Name | Phone] , Email , Message , submit
```

## Computed Styles

### Overlay
- `position:fixed; inset:0; z-index:9999; background:rgba(0,0,0,0.6); backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:16px`
- `display:none` when closed, `display:flex` when open

### Box
- `position:relative; width:100%; max-width:440px; background:#fff; border-radius:20px; box-shadow:0 25px 60px rgba(0,0,0,0.35); overflow:hidden`
- Closed state: `transform:scale(0.92) translateY(20px); opacity:0`
- Open state: `transform:scale(1) translateY(0); opacity:1`
- `transition:transform 0.3s ease, opacity 0.3s ease`

### Close button
- `position:absolute; top:14px; right:14px; z-index:10; width:32px; height:32px; border-radius:50%; background:rgba(0,0,0,0.2); border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; color:#fff; font-size:16px`
- icon `fas fa-times`

### Header
- `background:linear-gradient(135deg,#0f1d3d 0%,#1e3a6e 100%); padding:32px 28px 24px; position:relative; overflow:hidden`
- decorative circle 1: `position:absolute; top:-60px; right:-60px; width:200px; height:200px; border-radius:50%; background:rgba(245,158,11,0.08)`
- decorative circle 2: `position:absolute; bottom:-40px; left:-40px; width:160px; height:160px; border-radius:50%; background:rgba(30,64,175,0.15)`
- content wrapper `position:relative; z-index:2`
- badge: `display:inline-flex; align-items:center; gap:6px; background:rgba(245,158,11,0.2); border:1px solid rgba(245,158,11,0.35); color:#fbbf24; font-size:11px; font-weight:700; padding:4px 12px; border-radius:20px; margin-bottom:12px; letter-spacing:0.5px`
  - pulse dot span: `width:6px; height:6px; border-radius:50%; background:#fbbf24; animation:kbcpPulse 1.5s infinite` (keyframe already in globals.css)
  - label `Limited Seats Available`
- `<h3>`: `color:#fff; font-size:22px; font-weight:800; margin:0 0 8px; line-height:1.3` — text `Admissions Open 2026-27`
- `<p>`: `color:rgba(255,255,255,0.65); font-size:13px; margin:0; line-height:1.6` — text
  `Join the D.Pharm programme at KBCP — PCI approved, industry-focused education.`
  (the live page renders mojibake `???` here where an em dash was intended — use the em dash `—`)

### Body
- `padding:24px 28px`

### Success panel (shown after submit)
- `text-align:center; padding:20px 0`
- circle: `width:64px; height:64px; background:#d1fae5; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px` with `fas fa-check` at `font-size:26px; color:#16a34a`
- `<p>`: `font-weight:700; color:#0f1d3d; font-size:16px; margin:0` — text `Thank you! Our admission team will call you shortly.`

### Error banner
- `background:#fef2f2; border:1px solid #fecaca; color:#dc2626; font-size:12px; padding:8px 12px; border-radius:8px; margin-bottom:12px` (hidden unless there is an error)
- Validation message: `Please enter your name and phone number.`

### Form fields
- Name + Phone in a `display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px`
- Email block and Message block each `margin-bottom:12px` / `margin-bottom:18px`
- Labels: `display:block; font-size:12px; font-weight:600; color:#374151; margin-bottom:6px`. Required marker `<span style="color:#dc2626">*</span>`; optional marker `<span style="color:#94a3b8; font-weight:400">(optional)</span>`
- Inputs / textarea: `width:100%; border:1.5px solid #e2e8f0; border-radius:10px; padding:10px 12px; font-size:13px; outline:none; transition:border 0.2s; box-sizing:border-box`; textarea also `resize:none`, `rows=2`
- Focus: `border-color:#1e40af`
- Field labels + placeholders (verbatim):
  - `Name` * — placeholder `Your name`
  - `Phone` * — placeholder `+91 XXXXX XXXXX`, `type="tel"`
  - `Email` (optional) — placeholder `your@email.com`, `type="email"`
  - `Message` (optional) — placeholder `Any questions?`
- Submit button: `width:100%; background:linear-gradient(135deg,#f59e0b,#d97706); color:#fff; font-weight:700; font-size:14px; padding:13px; border:none; border-radius:12px; cursor:pointer; transition:opacity 0.2s; display:flex; align-items:center; justify-content:center; gap:8px`
  - icon `fas fa-paper-plane`, label `Send Enquiry`; while submitting the label becomes `Submitting…` and the button is disabled

## Behaviors
- **Auto-open:** 3000 ms after mount, but only if `sessionStorage.kbcp_popup_shown` is unset AND the cookie `kbcp_popup_1` is absent. On open, set `sessionStorage.kbcp_popup_shown = '1'`.
- **Dismiss:** close button, or clicking the overlay backdrop (not the box). Dismissing sets the cookie `kbcp_popup_1=1` with a 7-day expiry, path `/`.
- **Submit:** the original POSTs to `https://kbcp.in/popup-enquiry`. This clone has no backend — validate that name and phone are non-empty (else show the error banner), then show the success panel, set the 7-day cookie, and auto-dismiss after 3000 ms. Do **not** perform a real network request.
- Also close on `Escape`.

## Responsive
- No breakpoint-specific rules; the overlay padding (`16px`) plus `max-width:440px` handles small screens.
