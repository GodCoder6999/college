import Link from "next/link";

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
  { href: "https://twitter.com/", icon: "fab fa-twitter" },
  { href: "https://www.instagram.com/", icon: "fab fa-instagram" },
  { href: "https://wa.me/919830236143", icon: "fab fa-whatsapp" },
];

export function MainHeader() {
  return (
    <div className="max-[575px]:hidden bg-[linear-gradient(135deg,#0f1d3d_0%,#1e3a8a_100%)] border-b-[3px] border-[#f59e0b] py-[10px]">
      <div className="mx-auto w-full max-w-[1320px] px-[12px]">
        <div className="flex items-center">
          <div className="w-[58.333%] max-[991px]:w-[66.667%] max-[767px]:w-[75%]">
            <Link
              href="/"
              className="flex items-center gap-[14px]"
            >
              <div className="flex items-center gap-[14px]">
                <img
                  src="/images/brand/logo.png"
                  alt="Muktir Siksha College Of Education & Pharmacy"
                  className="h-[54px] w-[54px] max-[991px]:h-[44px] max-[991px]:w-[44px] object-contain [filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.3))]"
                />
                <div>
                  <div className="m-0 text-[18px] max-[991px]:text-[14px] font-extrabold leading-[1.25] text-white">
                    Muktir Siksha College Of Education &amp; Pharmacy
                  </div>
                  <p className="mt-[4px] mb-0 text-[11px] tracking-[0.3px] text-[#93c5fd]">
                    Diploma in Pharmacy (D.Pharm) • Gobardanga, North 24 Parganas, WB
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-[41.667%] max-[991px]:w-[33.333%] max-[767px]:w-[25%] flex flex-col items-end gap-[9px]">
            <div className="flex items-center gap-[16px]">
              <div className="flex gap-[7px] max-[991px]:hidden">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.22)] bg-[rgba(255,255,255,0.12)] text-[12px] text-white transition-[background,color,border-color] duration-200 hover:bg-[#f59e0b] hover:text-[#0f1d3d] hover:border-[#f59e0b]"
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
              <div className="flex gap-[8px] max-[991px]:hidden">
                <a
                  href="/d_pharma"
                  className="inline-flex items-center gap-[6px] rounded-[8px] border-[1.5px] border-[#f59e0b] bg-transparent px-[16px] py-[7px] text-[12px] font-bold text-[#f59e0b] transition-all duration-200 hover:bg-[#f59e0b] hover:text-[#0f1d3d]"
                >
                  <i className="fas fa-book-open" />
                  Course
                </a>
                <a
                  href="/contact_us"
                  className="inline-flex items-center gap-[6px] rounded-[8px] bg-[#f59e0b] px-[18px] py-[7px] text-[12px] font-bold text-[#0f1d3d] transition-opacity duration-200 hover:opacity-[0.88]"
                >
                  <i className="fas fa-phone-alt" />
                  Querry
                </a>
              </div>
            </div>
            <p className="max-[991px]:hidden m-0 text-right text-[10.5px] leading-[15.75px] text-[rgba(255,255,255,0.45)]">
              Quality Education &nbsp;|&nbsp; Hands-on Training &nbsp;|&nbsp; Expert Guidance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
