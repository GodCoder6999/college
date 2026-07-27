import type { Recognition } from "@/types/site";

const RECOGNITIONS: Recognition[] = [
  {
    logo: "/images/highlights/programme.svg",
    title: "Diploma in Pharmacy (D.Pharm)",
    subtitle: "Two-year professional programme",
    ctaLabel: "View Course",
    ctaHref: "https://muktirshikshacollegeofeducationandpharmacy.org/course/",
  },
  {
    logo: "/images/highlights/admission.svg",
    title: "Admission Open",
    subtitle: "Begin your pharmacy career here",
    ctaLabel: "Apply Now",
    ctaHref: "https://muktirshikshacollegeofeducationandpharmacy.org/contact-us/",
  },
];

export function RecognitionsSection() {
  return (
    <section className="bg-[#f8fafc] py-[56px]">
      <div className="msc-container">
        <div className="mb-[5px] text-center">
          <span className="text-[11px] font-bold tracking-[3px] text-[#f59e0b] uppercase">
            Our Programme
          </span>
          <h2 className="mt-[8px] text-[28px] font-bold text-[#0f1d3d]">
            Programme Highlights
          </h2>
          <div className="mx-auto mt-[12px] h-[3px] w-[44px] rounded-[2px] bg-[linear-gradient(90deg,#1e40af,#f59e0b)]" />
        </div>

        <div className="flex flex-wrap justify-center">
          {RECOGNITIONS.map((item) => (
            <div
              key={item.title}
              className="mb-[1.5rem] w-1/2 px-[15px] min-[768px]:w-[33.333%]"
            >
              <div className="h-full rounded-[14px] border-t-4 border-[#1e40af] bg-white px-[20px] py-[28px] text-center shadow-[0_2px_20px_rgba(15,29,61,0.08)] transition-transform duration-200 hover:-translate-y-[4px]">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="mb-[16px] h-[110px] w-[110px] object-contain"
                />
                <h6 className="mb-[6px] text-[14px] font-bold text-[#0f1d3d]">
                  {item.title}
                </h6>
                <p className="mb-[16px] text-[12px] text-[#64748b]">
                  {item.subtitle}
                </p>
                <a
                  href={item.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-[6px] rounded-[6px] bg-[#1e40af] px-[18px] py-[8px] text-[12px] font-bold text-white"
                >
                  <i className="fas fa-file-pdf" />
                  {item.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[1rem] text-center">
          <a
            href="https://muktirshikshacollegeofeducationandpharmacy.org/course/"
            className="group relative inline-flex items-center gap-[8px] overflow-hidden rounded-[50px] px-[28px] py-[11px] text-[13px] font-bold text-white shadow-[0_4px_16px_rgba(30,64,175,0.22)]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(135deg,#0f1d3d,#1e40af)] transition-opacity duration-200 group-hover:opacity-0" />
            <span className="absolute inset-0 bg-[linear-gradient(135deg,#1e40af,#f59e0b)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <i className="fas fa-certificate relative" />
            <span className="relative">See Full Course Details</span>
            <i className="fas fa-arrow-right relative" />
          </a>
        </div>
      </div>
    </section>
  );
}
