# kbcp.in — Page Topology

Target: `https://kbcp.in/` (Laravel + Bootstrap 5 + jQuery template "Ravo", Swiper, Isotope, WOW.js, Lightbox, Slick).

Layout container: `.container` → `max-width: 1170px; padding: 0 15px`. Rows use `margin: 0 -12px`.
Body: `background:#fff`, base font `"Noto Sans", sans-serif`, 16px/24px, color `#181b31`.

## Section order (top → bottom, desktop 1440)

| # | Name | Component | Type | Desktop height | Notes |
|---|------|-----------|------|----------------|-------|
| 0 | Scroll progress button | `ScrollProgress` | fixed overlay | 44×44 | `position:fixed; right:30px; bottom:30px; z-index:100`, hidden until scroll |
| 1 | Ticker bar | `TickerBar` | flow, time-driven | 34 | amber `#f59e0b`, `<marquee>` scroll |
| 2 | Main header | `MainHeader` | flow | 81 | navy gradient, logo + socials + buttons. Hidden `<576px` |
| 3 | Top nav | `TopNav` | **sticky** `top:0; z-index:1040` | 60 | mega dropdowns; `.scrolled` shadow at `scrollY > 80` |
| 4 | WhatsApp FAB | `WhatsAppFab` | fixed overlay | 54×54 | `bottom:28px; right:24px; z-index:9990` |
| 5 | Hero slider | `HeroSlider` | flow, time-driven | 711 | Swiper fade, 7 slides, autoplay 5 s, fraction pagination |
| 6 | Stats strip | `StatsStrip` | flow | 267 | bg `#f1f0eb`, 4 columns |
| 7 | About | `AboutSection` | flow (WOW) | 640 | two-image collage |
| 8 | Recruiters / placement | `RecruitersSection` | flow (WOW fadeInLeft) | 634 | bg image + dark overlay, 10 logos |
| 9 | Course offered | `CourseSection` | flow | 680 | bg `#f8f9fb`, single D.Pharm card |
| 10 | Gallery | `GallerySection` | flow (WOW) | 509 | bg `#fafafb`, 4 tiles, bottom SVG curve |
| 11 | Testimonials | `TestimonialsSection` | flow, click/swipe-driven | 540 | parallax bg, linked thumb + text swipers |
| 12 | Blog | `BlogSection` | flow | 941 | 3 cards |
| 13 | Recognitions | `RecognitionsSection` | flow | 577 | bg `#f8fafc`, 2 cards |
| 14 | Visit campus + map | `VisitCampusSection` | flow | 399 | navy 5-col + Google Maps iframe 7-col |
| 15 | Footer | `SiteFooter` | flow | 560 | amber CTA strip + 3-col body + bottom bar |
| 16 | Enquiry popup | `EnquiryPopup` | fixed overlay `z-index:9999` | — | auto-opens after 3 s (once per session) |

Z-index layers: popup 9999 > WhatsApp FAB 9990 > sticky nav 1040 > scroll-progress 100 > swiper controls 10.

No smooth-scroll library (no Lenis / Locomotive). Native scrolling. No scroll-snap.
