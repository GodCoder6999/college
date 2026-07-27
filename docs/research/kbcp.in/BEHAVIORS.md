# kbcp.in — Behavior Bible

## Global

- **No smooth-scroll library.** No `.lenis`, no Locomotive. Native scroll.
- **WOW.js** reveal animations: elements with `.wow.fadeInUp` / `.fadeInLeft` start at `opacity:0` and animate in when they enter the viewport. Delays used: `.1s`, `.3s`, `.4s`, `.5s`.
- **Font Awesome 6.4.0** for every icon on the page. No inline SVG except the scroll-progress ring and the gallery bottom curve.
- Gradient text utility `.gr-purple-red-text` / `.sub-title`:
  `background-image: linear-gradient(110deg,#ff5e57 0%,#409fff 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent;`
- Gradient fill utility `.gr-purple-red-bg`:
  `radial-gradient(circle farthest-corner at 10% 20%, #fdc168 0%, #fb8080 90%)`
- `[data-overlay-dark]` renders a `:before` overlay `background:#171a2a47` (black ~28%), `z-index:1`; content sits at `z-index:2`.

## Scroll-driven

| Element | Trigger | State A | State B | Transition |
|---|---|---|---|---|
| `.kbcp-topnav` | `window.scrollY > 80` (JS toggles `.scrolled`) | `box-shadow:none` | `box-shadow:0 4px 30px rgba(15,29,61,0.40)` | `box-shadow 0.3s` |
| `.progress-wrap` | `scrollY > 50` (theme script) | `opacity:0; transform:translateY(20px)` | `opacity:1; transform:translateY(0)` | `all 0.4s linear`; SVG ring `stroke-dashoffset` tracks scroll % |
| `.testimonials.parallaxie` | scroll | `background-position` Y interpolates with scroll (parallax) | — | continuous |
| `.wow` elements | enter viewport | `opacity:0` (+ translate) | `opacity:1; translate:0` | `1s` keyframe `fadeInUp` / `fadeInLeft` |

## Time-driven

| Element | Behavior |
|---|---|
| `.kbcp-ticker-marquee` | `<marquee scrollamount="5">`, pauses on mouseover, resumes on mouseleave |
| Hero Swiper | `effect:'fade'` + `crossFade:true`, `speed:1200`, `autoplay:{delay:5000, disableOnInteraction:false}`, `loop:true`, `grabCursor:true`, pagination `type:'fraction'` (styled 40px/500 white, top-right at `right:40px; bottom:200px`), custom next/prev chevrons |
| Enquiry popup | opens 3000 ms after load, once per session (`sessionStorage kbcp_popup_shown`), dismissed sets 7-day cookie `kbcp_popup_1` |
| Pulse dot in popup badge | `@keyframes kbcpPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`, `1.5s infinite` |

## Click-driven

| Element | Behavior |
|---|---|
| Nav dropdowns | Bootstrap dropdown, `.kn-drop` animates in `knDropIn 0.18s cubic-bezier(0.16,1,0.3,1)` from `opacity:0 translateY(-10px) scale(0.98)` |
| Nav chevron `.kn-arrow` | rotates 180° when parent `.dropdown.show`, `transform 0.25s` |
| Mobile hamburger `.kbcp-toggler` | toggles `.navbar-collapse` (visible ≤991px) |
| Testimonials | two linked Swipers — `.gallery-thumbs` (3 per view, centered, `slideToClickedSlide`, loop) and `.gallery-top` (text, loop); each controls the other. Prev/next circles at `.controls-rf` |
| Popup close / overlay click | dismiss |

## Hover

| Element | Change | Transition |
|---|---|---|
| `.kbcp-link` (nav) | `color: rgba(255,255,255,.88) → #f59e0b`; `::after` underline bar `scaleX(0) → scaleX(1)` (2px, `#f59e0b`, inset 13px) | `color .2s`, `transform .25s ease` |
| `.kn-di` (dropdown item) | `background: transparent → #f8fafc`; `.kn-label` color `#0f1d3d → #1e40af` | `.14s` |
| `.kbcp-social-icons a` | `bg rgba(255,255,255,.12) → #f59e0b`, `color #fff → #0f1d3d`, border → `#f59e0b` | `.2s` |
| `.kbcp-btn-notice` | `bg transparent → #f59e0b`, `color #f59e0b → #0f1d3d` | `all .2s` |
| `.kbcp-btn-enquire`, nav Apply Now, `.kn-feat a` | `opacity 1 → 0.88` | `.2s` |
| Gallery `.item-img` | `.item-img-overlay` `opacity 0 → .9` (radial amber-coral gradient) with centered white arrow icon; image scales | overlay `.4s`, img `.5s` |
| Gallery title link | `color #0f1d3d → #1e40af` | inline JS |
| "View Full Gallery" button | `background #0f1d3d → #1e40af` | `background .2s` |
| `.kbcp-btn-outline` (course) | `bg transparent → #1e40af`, `color #1e40af → #fff` | `all .25s` |
| `.kbcp-btn-primary` (course) | `bg #f59e0b → #d97706` | `all .25s` |
| "View All Blogs" | `background linear-gradient(135deg,#0f1d3d,#1e40af) → linear-gradient(135deg,#1e40af,#f59e0b)`; shadow `0 6px 24px rgba(30,64,175,.28) → 0 8px 30px rgba(245,158,11,.3)` | `all .25s` |
| Recognition card | `transform none → translateY(-4px)` | `transform .2s` |
| "View All Approvals" | gradient `#0f1d3d,#1e40af → #1e40af,#f59e0b` | — |
| `.kbcp-footer-cta-btn` | `transform → translateY(-2px)` | `.2s` |
| `.kbcp-ft-links a` | `color rgba(255,255,255,.55) → #f59e0b`, `gap 8px → 12px` | `color .2s, gap .2s` |
| `.kbcp-ft-social` | `translateY(-3px)`, border transparent, brand background fill (fb `#1877f2`, wa `#25d366`, yt `#ff0000`, ig instagram gradient) | `all .2s` |
| WhatsApp FAB | `scale(1) → scale(1.12)`, shadow `0 4px 18px rgba(37,211,102,.5) → 0 6px 24px rgba(37,211,102,.7)` | `transform .2s, box-shadow .2s` |
| `.butn` (theme buttons) | `.4s` transition, `slide-up`/`slide-down` text swap | `.4s` |
| Popup inputs | `border-color #e2e8f0 → #1e40af` on focus | `border .2s` |

## Responsive

Container: `max-width:1170px` (≥1200), `720px` @768, full-width @390. Padding `0 15px`.

| Breakpoint | Changes |
|---|---|
| **≤1199** | container 960px |
| **≤991** | Hamburger appears, nav collapses to stacked panel (`background:#0f1d3d; border-radius:14px; padding:10px`), mega menus go static/full width and grids become 1 column; `.kbcp-btn-notice`/`.kbcp-btn-enquire` and header socials + accreditation text hidden; `.kbcp-mnav-brand` shown; `.kbcp-college-name` 14px, logo 44px; blog cards full width (684px @768); course card stacks |
| **≤767** | Stats 2-up (`col-6`); recruiters 3-up (`col-4` ≈ 236px @768); footer CTA stacks; footer bottom bar stacks + centers |
| **≤575** | `.kbcp-mainheader` `display:none`; hero height ≈180px; hero `h1` 15px/24px; `.hiop_newtexts` 19px/30.4px; `.rcuit_tagline` 15px/25px; `.portfolio h2` 30px; blog `h4` 25px; `.about` padding `32px 0`; `.legacy_outsection` padding `15px 0 10px`; `.about .two-img .img1` height 350px; footer CTA padding 16px, CTA btn full width, `.kbcp-ft-heading` 13px |
