import type { FooterLink } from "@/types/site";

const USEFUL_LINKS_1: FooterLink[] = [
  { label: "About Institution", href: "/about_institution" },
  { label: "Mission & Vision", href: "/mission_and_vision" },
  { label: "Diploma in Pharmacy", href: "/d_pharma" },
  { label: "Admission", href: "/apply" },
  { label: "Eligibility", href: "/eligibility" },
  { label: "Fee Structure", href: "/fee_structure" },
];

const USEFUL_LINKS_2: FooterLink[] = [
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact_us" },
  { label: "Latest News", href: "/news" },
  { label: "Career", href: "/recruitment" },
  { label: "Events", href: "/event" },
  { label: "Anti Ragging", href: "/anti_ragging" },
  { label: "Scholarship", href: "/scholarship" },
];

const BOTTOM_LINKS: FooterLink[] = [
  { label: "About", href: "/about_institution" },
  { label: "Contact", href: "/contact_us" },
  { label: "Affiliation", href: "/affilation" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const BADGES = ["D.Pharm Programme", "Hands-on Training", "Expert Guidance"];

const SOCIALS = [
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/",
    className:
      "bg-[rgba(24,119,242,0.12)] text-[#1877f2] hover:bg-[#1877f2] hover:text-white",
  },
  {
    icon: "fab fa-twitter",
    href: "https://twitter.com/",
    className:
      "bg-[rgba(29,161,242,0.12)] text-[#1da1f2] hover:bg-[#1da1f2] hover:text-white",
  },
  {
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/",
    className:
      "bg-[rgba(225,48,108,0.12)] text-[#e1306c] hover:bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] hover:text-white",
  },
  {
    icon: "fab fa-whatsapp",
    href: "https://wa.me/919830236143",
    className:
      "bg-[rgba(37,211,102,0.12)] text-[#25d366] hover:bg-[#25d366] hover:text-white",
  },
];

const CONTACT_ITEMS = [
  {
    icon: "fas fa-map-marker-alt",
    label: "Address",
    content: (
      <>
        Jogen Mondal Colony, Vill.- Kuchlia, P. O.- Gobardanga, P. S.-
        Gobardanga, Dist- North 24 Parganas, Pin- 743252, West Bengal.
      </>
    ),
  },
  {
    icon: "fas fa-envelope",
    label: "Email",
    content: (
      <a
        href="mailto:muktirshikshacollegeofpharnacy@gmail.com"
        className="hover:text-[#f59e0b]"
      >
        muktirshikshacollegeofpharnacy@gmail.com
      </a>
    ),
  },
  {
    icon: "fas fa-phone-alt",
    label: "Phone",
    content: (
      <>
        <a href="tel:+919830236143" className="hover:text-[#f59e0b]">
          (+91) 9830 236143
        </a>{" "}
        /{" "}
        <a href="tel:+918172078807" className="hover:text-[#f59e0b]">
          (+91) 8172 078807
        </a>
      </>
    ),
  },
  {
    icon: "fas fa-clock",
    label: "Office Hours",
    content: <>Mon – Sat • 10:00 AM – 5:00 PM</>,
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0a1628] before:pointer-events-none before:absolute before:-top-[120px] before:-right-[120px] before:h-[400px] before:w-[400px] before:rounded-full before:bg-[radial-gradient(circle,rgba(245,158,11,0.07)_0%,transparent_70%)] before:content-[''] after:pointer-events-none after:absolute after:-bottom-[80px] after:-left-[80px] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(30,64,175,0.10)_0%,transparent_70%)] after:content-['']">
      <div className="relative bg-[linear-gradient(135deg,#f59e0b_0%,#d97706_100%)] py-[20px]">
        <div className="msc-container flex flex-wrap items-center justify-between gap-[12px] max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-[14px]">
          <div className="flex items-center gap-[12px]">
            <i className="fas fa-graduation-cap text-[24px] text-[#0f1d3d]" />
            <div>
              <h6 className="m-0 text-[16px] font-extrabold text-[#0f1d3d] max-[575px]:text-[14px]">
                Stay Updated About Our Courses
              </h6>
              <span className="block text-[13px] text-[rgba(15,29,61,0.70)] max-[575px]:text-[12px]">
                Diploma in Pharmacy (D.Pharm) • Admission Open
              </span>
            </div>
          </div>
          <a
            href="/contact_us"
            className="inline-flex items-center gap-[8px] rounded-[9px] bg-[#0f1d3d] px-[24px] py-[10px] text-[13px] font-bold text-[#f59e0b] transition-transform duration-200 hover:-translate-y-[2px] max-[575px]:w-full max-[575px]:justify-center"
          >
            Apply Now for Admission
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>

      <hr className="m-0 h-px border-none bg-[linear-gradient(90deg,transparent,rgba(245,158,11,0.3),transparent)]" />

      <div className="relative msc-container pt-[56px] pb-[40px] max-[991px]:pt-[40px] max-[991px]:pb-[28px] max-[767px]:pt-[36px] max-[767px]:pb-[24px]">
        <div className="mt-[-24px] flex flex-wrap gap-y-[1.5rem]">
          {/* Column A — About */}
          <div className="w-full px-[15px] min-[992px]:w-[33.333%] min-[768px]:w-1/2">
            <a
              href="/"
              className="mb-[16px] flex items-center gap-[12px]"
            >
              <img
                src="/images/brand/logo.png"
                alt="Muktir Siksha College Of Education & Pharmacy"
                className="mb-[16px] h-[64px] w-[64px] object-contain"
              />
              <div>
                <div className="mb-[4px] text-[16px] font-extrabold text-white">
                  Muktir Siksha College
                  <br />
                  Of Education &amp; Pharmacy
                </div>
                <div className="mb-[14px] text-[11px] font-semibold tracking-[0.5px] text-[#f59e0b]">
                  Excellence in Pharmacy Education
                </div>
              </div>
            </a>
            <p className="mb-[20px] text-[13px] leading-[1.8] text-[rgba(255,255,255,0.55)]">
              A premier institute dedicated to excellence in pharmacy
              education, shaping skilled and ethical healthcare professionals.
            </p>
            <div className="mb-[22px] flex flex-wrap gap-[6px]">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-[20px] border border-[rgba(245,158,11,0.35)] px-[10px] py-[4px] text-[10px] font-bold tracking-[0.5px] text-[rgba(255,255,255,0.65)]"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex gap-[8px]">
              {SOCIALS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex h-[36px] w-[36px] items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.12)] text-[14px] transition-all duration-200 hover:-translate-y-[3px] hover:border-transparent ${social.className}`}
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Column B — Useful Links */}
          <div className="w-full px-[15px] min-[992px]:w-[33.333%] min-[768px]:w-1/2">
            <h6 className="mb-[20px] inline-block border-b-2 border-[#f59e0b] pb-[10px] text-[15px] font-extrabold tracking-[1.5px] text-white uppercase max-[575px]:text-[13px]">
              Useful Links
            </h6>
            <div className="grid grid-cols-2 gap-x-[8px] gap-y-0">
              <ul className="m-0 list-none p-0">
                {USEFUL_LINKS_1.map((link) => (
                  <li key={link.label} className="mb-[8px]">
                    <a
                      href={link.href}
                      className="flex items-center gap-[8px] text-[13px] text-[rgba(255,255,255,0.55)] transition-[color,gap] duration-200 hover:gap-[12px] hover:text-[#f59e0b]"
                    >
                      <i className="fas fa-chevron-right shrink-0 text-[9px] text-[#f59e0b]" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="m-0 list-none p-0">
                {USEFUL_LINKS_2.map((link) => (
                  <li key={link.label} className="mb-[8px]">
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="flex items-center gap-[8px] text-[13px] text-[rgba(255,255,255,0.55)] transition-[color,gap] duration-200 hover:gap-[12px] hover:text-[#f59e0b]"
                    >
                      <i className="fas fa-chevron-right shrink-0 text-[9px] text-[#f59e0b]" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column C — Contact Us */}
          <div className="w-full px-[15px] min-[992px]:w-[33.333%]">
            <h6 className="mb-[20px] inline-block border-b-2 border-[#f59e0b] pb-[10px] text-[15px] font-extrabold tracking-[1.5px] text-white uppercase max-[575px]:text-[13px]">
              Contact Us
            </h6>
            {CONTACT_ITEMS.map((item) => (
              <div
                key={item.label}
                className="mb-[18px] flex items-start gap-[12px] max-[767px]:gap-[10px]"
              >
                <div className="mt-[2px] flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[9px] border border-[rgba(245,158,11,0.25)] bg-[rgba(245,158,11,0.12)] text-[14px] text-[#f59e0b] max-[575px]:h-[32px] max-[575px]:w-[32px] max-[575px]:text-[12px]">
                  <i className={item.icon} />
                </div>
                <div className="text-[13px] leading-[1.7] text-[rgba(255,255,255,0.55)] max-[575px]:text-[12px]">
                  <span className="mb-[2px] block text-[11px] font-bold tracking-[0.8px] text-[#f59e0b] uppercase">
                    {item.label}
                  </span>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-[rgba(255,255,255,0.07)] py-[18px]">
        <div className="msc-container flex flex-wrap items-center justify-between gap-[10px] max-[767px]:flex-col max-[767px]:items-center max-[767px]:text-center">
          <p className="text-[12px] text-[rgba(255,255,255,0.35)]">
            © 2026{" "}
            <span className="font-semibold text-[#f59e0b]">Muktir Shiksha</span>
            .&nbsp; All Rights Reserved.&nbsp; |&nbsp; Muktir Siksha College Of
            Education &amp; Pharmacy
          </p>
          <div className="flex flex-wrap gap-x-[18px] gap-y-[8px] max-[767px]:justify-center max-[767px]:gap-x-[14px] max-[575px]:gap-x-[12px] max-[575px]:gap-y-[6px]">
            {BOTTOM_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] text-[rgba(255,255,255,0.35)] hover:text-[#f59e0b] max-[575px]:text-[11px]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
