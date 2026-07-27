# kbcp.in — Design Tokens

## Fonts
- `Poppins` 100–900 (loaded, used by a few theme utilities)
- `Noto Sans` 100–900 — **the actual body/heading font** (`body`, all sections resolve to `"Noto Sans", sans-serif`)
- Bare `<h1>` in the header brand resolves to `Georgia, serif` (template quirk — the brand `h1` is styled by `.kbcp-college-name` so it renders Noto Sans size 18/800; only unstyled h1s would be Georgia)
- Font Awesome 6.4.0 (all icons)

## Colors

### Brand (custom KBCP navbar/footer layer, hex-literal in page CSS)
| Token | Value | Use |
|---|---|---|
| navy-900 | `#0a1628` | footer background |
| navy-800 | `#0f1d3d` | topnav, badges, headings, dark sections |
| navy-700 | `#1e3a8a` | main-header gradient end |
| blue-700 | `#1e40af` | links hover, primary accents, card top border |
| blue-300 | `#93c5fd` | header tagline |
| amber-500 | `#f59e0b` | primary accent (ticker, buttons, borders, labels) |
| amber-600 | `#d97706` | button hover / CTA gradient end |
| amber-400 | `#fbbf24` | popup badge text |
| slate-400 | `#94a3b8` | muted descriptions |
| slate-500 | `#64748b` | blog excerpt, card sub-text |
| slate-100 | `#f1f5f9` | dropdown separator |
| slate-50 | `#f8fafc` | dropdown hover, recognitions bg |
| gray-700 | `#374151` | popup labels |
| border-input | `#e2e8f0` | popup input border |
| red-600 | `#dc2626` | required mark, error text |
| green-600 | `#16a34a` | success |
| whatsapp | `#25d366` | FAB |
| fb / yt / ig | `#1877f2` / `#ff0000` / `#e1306c` | footer socials |

### Theme (Ravo template)
| Token | Value | Use |
|---|---|---|
| text-body | `#181b31` | default text color |
| text-muted | `#8e8e99` | about paragraph |
| text-p-alt | `#eeeeee` | hero paragraph |
| teal-dark | `#006c93` | `.hiop_newtexts` about heading |
| teal-light | `#00acee` | `.sub-title1` gradient end |
| stats-bg | `#f1f0eb` | `.legacy_outsection` |
| stats-num | `#444444` | `.nmbrcnt_textdesign` |
| stats-label | `#393939` | `.nmbrcnt_ptextdesign` |
| bg-gray | `#fafafb` | `.portfolio` (gallery) |
| bg-course | `#f8f9fb` | course section |
| pill-bg | `#e9eef4` | `.sub-head` pill |
| flora | `#f94c30` | about "Read More" button |
| card-shadow | `rgba(71,67,97,0.09) 0 20px 40px` | blog card |
| overlay-dark | `#171a2a47` | `[data-overlay-dark]:before` |
| overlay-testim | `rgba(0,0,0,0.12)` | `.tstmonial_bckcolor` |

### Gradients
- `grad-text`: `linear-gradient(110deg,#ff5e57 0%,#409fff 100%)` — clipped to text (`.sub-title`, `.gr-purple-red-text`)
- `grad-sub1`: `linear-gradient(110deg,#006c93 0%,#00acee 100%)` — `.sub-title1`
- `grad-coral`: `radial-gradient(circle farthest-corner at 10% 20%,#fdc168 0%,#fb8080 90%)` — hero primary button, gallery hover overlay
- `grad-header`: `linear-gradient(135deg,#0f1d3d 0%,#1e3a8a 100%)` — main header
- `grad-navy`: `linear-gradient(135deg,#0f1d3d 0%,#1e40af 100%)` — mega-menu feature card, CTA buttons
- `grad-amber`: `linear-gradient(135deg,#f59e0b 0%,#d97706 100%)` — footer CTA strip, popup submit
- `grad-rule`: `linear-gradient(90deg,#1e40af,#f59e0b)` — 44×3 heading rule

## Typography scale (exact computed values, desktop 1440)
| Element | size / line-height / weight / spacing |
|---|---|
| Ticker | 12 / — / 600 |
| `.kbcp-college-name` | 18 / 1.25 / 800 |
| `.kbcp-college-tagline` | 11 / — / 400 / 0.3px |
| `.kbcp-accred-text` | 10.5 / — / 400 |
| `.kbcp-link` | 13 / — / 600 / 0.15px |
| `.kn-label` | 13 / 1.3 / 600 |
| `.kn-desc` | 11 / 1.3 / 400 |
| `.kn-section-label` | 10 / — / 700 / 1.5px / uppercase |
| Hero `h1` | 30 / 48 / 800 (white) |
| Hero `p` | 16 / 32 / 400 (`#eee`) |
| Hero pagination | 40 / 60 / 500 (white) |
| `.nmbrcnt_textdesign` | 35 / 56 / 700 (`#444`) |
| `.nmbrcnt_ptextdesign` | 13 / 26 / 400 (`#393939`) |
| `.sub-title` | 17 / 25.5 / 400 / 2px / uppercase, gradient text |
| `.hiop_newtexts` | 27 / 43.2 / 700 (`#006c93`), `padding-bottom:20px` |
| `.sub-title1` | 20 / 30 / 400 / 2px / uppercase, teal gradient text |
| About `p` | 14 / 28 / 400 (`#8e8e99`) |
| `.rcfst_text` | 25 / 37.5 / 500 / 1px (white), `padding:30px 0 10px` |
| `.rcuit_tagline` | 30 / 40 / 700 / 1px (white), `padding:5px 0 45px` |
| `.sub-head` pill | 13 / 19.5 / 600 / 4px, `padding:8px 20px`, `radius:30px`, bg `#e9eef4`, `opacity:.8`; inner span 12 / 18 / 600 / 2px |
| `.portfolio h2.fz-40` | 40 / 64 / 800, gradient text |
| Gallery tile title | 16 / 24 / 700 (`#0f1d3d`) |
| `.intest_textdesighn` | 20 / 30 / 600 / 2px / uppercase (white) |
| Testimonial `p` | 15 / 30 / 400 (white) |
| Testimonial name `h6` | 18 / 27 / 600 / 2px / uppercase (white) |
| Blog `.simple-head h6` | 13 / 19.5 / 600 / 4px / uppercase, `opacity:.8` |
| Blog `.simple-head h4` | 40 / 64 / 700 |
| Blog date | 11 / 16.5 / 400 / uppercase |
| Blog title `a` | 18 / 30.6 / 700 |
| Blog excerpt | 14 / — / 400 (`#64748b`) |
| Recognitions eyebrow | 11 / — / 700 / 3px / uppercase (`#f59e0b`) |
| Recognitions `h2` | 28 / — / 700 (`#0f1d3d`) |
| `.kbcp-ft-heading` | 15 / — / 800 / 1.5px / uppercase, `border-bottom:2px solid #f59e0b`, `padding-bottom:10px` |
| Footer link | 13 / — / 400 (`rgba(255,255,255,.55)`) |
| Footer copy | 12 / — / 400 (`rgba(255,255,255,.35)`) |

## Spacing / layout
- Container `max-width:1170px`, `padding:0 15px`; rows `margin:0 -12px`
- `.section-padding` = `70px 0`, **overridden later in style.css to `40px 0`** (computed value on this page is `40px 0`)
- Radius scale: `5px` (blog card, gallery img), `6–9px` (small buttons), `8px`, `10px`, `12px`, `14px` (dropdown/recognition card), `20px` (popup), `30px`/`50px` (pill buttons), `50%` (circles)
- Shadows: blog card `rgba(71,67,97,.09) 0 20px 40px`; dropdown `0 12px 48px rgba(15,29,61,.12), 0 2px 8px rgba(15,29,61,.05)`; nav scrolled `0 4px 30px rgba(15,29,61,.40)`; recognition card `0 2px 20px rgba(15,29,61,.08)`; course image `0 8px 30px rgba(0,0,0,.12)`; popup `0 25px 60px rgba(0,0,0,.35)`

## Breakpoints (Bootstrap 5)
`576` / `768` / `992` / `1200`
