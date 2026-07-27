"use client";

import { useReveal } from "@/hooks/use-reveal";
import type { Recruiter } from "@/types/site";

const RECRUITERS: Recruiter[] = [
  { logo: "/images/pathways/hospitals.svg", name: "Hospitals" },
  { logo: "/images/pathways/clinics.svg", name: "Clinics" },
  { logo: "/images/pathways/community-pharmacy.svg", name: "Community Pharmacy" },
  { logo: "/images/pathways/pharma-companies.svg", name: "Pharmaceutical Companies" },
  { logo: "/images/pathways/quality-control.svg", name: "Quality Control" },
  { logo: "/images/pathways/higher-studies.svg", name: "Higher Studies in Pharmacy" },
];

export function RecruitersSection() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section
      className="relative bg-repeat bg-[position:50%_0%] bg-cover p-0"
      style={{ backgroundImage: "url(/images/background/pathways.svg)" }}
    >
      <div className="absolute inset-0 h-full w-full bg-black/65" />
      <div className="msc-container relative z-[1]">
        <div className="relative z-[1] max-w-full px-[15px]">
          <h5 className="pt-[30px] pb-[10px] text-center text-[25px] leading-[37.5px] font-medium tracking-[1px] text-white">
            Where Can a D.Pharm Take You?
          </h5>
          <h1 className="pt-[5px] pb-[45px] text-center text-[30px] leading-[40px] font-bold tracking-[1px] text-white max-[575px]:text-[15px] max-[575px]:leading-[25px]">
            Career Opportunities in Healthcare
            <br />
            and the Pharmaceutical Industry
          </h1>
          <div ref={ref} className="flex flex-wrap justify-center">
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
