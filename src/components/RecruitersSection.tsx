"use client";

import { useReveal } from "@/hooks/use-reveal";
import type { Recruiter } from "@/types/site";

const RECRUITERS: Recruiter[] = [
  { logo: "/images/recruiters/sun-pharma.png", name: "Sun Pharma" },
  { logo: "/images/recruiters/cipla.png", name: "Cipla" },
  { logo: "/images/recruiters/dr-reddys.png", name: "Dr. Reddy's" },
  { logo: "/images/recruiters/lupin.jpg", name: "Lupin" },
  { logo: "/images/recruiters/zydus.jpg", name: "Zydus" },
  { logo: "/images/recruiters/wockhardt.jpg", name: "Wockhardt" },
  { logo: "/images/recruiters/mankind.png", name: "Mankind Pharma" },
  { logo: "/images/recruiters/alkem.png", name: "Alkem Laboratories" },
  { logo: "/images/recruiters/glenmark.png", name: "Glenmark" },
  { logo: "/images/recruiters/zuventus.png", name: "Zuventus" },
];

export function RecruitersSection() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section
      className="relative bg-repeat bg-[position:50%_0%] bg-cover p-0"
      style={{ backgroundImage: "url(/images/background/recruit-back.jpg)" }}
    >
      <div className="absolute inset-0 h-full w-full bg-black/65" />
      <div className="msc-container relative z-[1]">
        <div className="relative z-[1] max-w-full px-[15px]">
          <h5 className="pt-[30px] pb-[10px] text-center text-[25px] leading-[37.5px] font-medium tracking-[1px] text-white">
            After Muktir Siksha What Comes Next?
          </h5>
          <h1 className="pt-[5px] pb-[45px] text-center text-[30px] leading-[40px] font-bold tracking-[1px] text-white max-[575px]:text-[15px] max-[575px]:leading-[25px]">
            Your Impeccable Placement
            <br />
            Opportunities With Milestone Packages
          </h1>
          <div ref={ref} className="mx-[-12px] flex flex-wrap">
            {RECRUITERS.map((recruiter) => (
              <div
                key={recruiter.name}
                className={`w-1/3 min-[992px]:w-[16.667%] px-[15px] msc-wow${
                  shown ? " msc-in msc-fade-left" : ""
                }`}
                style={shown ? { animationDelay: "0.4s" } : undefined}
              >
                <div className="pb-[50px]">
                  <img
                    src={recruiter.logo}
                    alt={recruiter.name}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
