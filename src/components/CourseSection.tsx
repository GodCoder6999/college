import type { ReactNode } from "react";

const INFO_ROWS: { icon: string; content: ReactNode }[] = [
  {
    icon: "fas fa-graduation-cap",
    content: (
      <>
        <strong>Covers:</strong> Pharmaceutical sciences, drug formulation,
        dispensing and patient care
      </>
    ),
  },
  {
    icon: "fas fa-university",
    content: (
      <>
        <strong>Learning:</strong> Theoretical knowledge combined with practical
        training
      </>
    ),
  },
  {
    icon: "fas fa-briefcase",
    content: (
      <>
        <strong>Focus:</strong>{" "}
        Ethical practices&nbsp;|&nbsp;
        <strong>Standards:</strong> Healthcare regulations
      </>
    ),
  },
  {
    icon: "fas fa-stethoscope",
    content: (
      <>
        <strong>Work in:</strong> Pharmacies, hospitals, clinics and other
        healthcare institutions
      </>
    ),
  },
];

export function CourseSection() {
  return (
    <section className="msc-section-padding bg-[#f8f9fb]">
      <div className="msc-container">
        <div className="mb-[40px] text-center">
          <h6 className="msc-grad-text mb-[15px] inline-block text-[17px] leading-[25.5px] tracking-[2px] uppercase">
            OUR ACADEMICS
          </h6>
          <h2 className="text-[40px] leading-[64px] font-bold text-[#181b31] max-[575px]:text-[25px]">
            Course Offered
          </h2>
        </div>

        <div className="flex flex-wrap items-center py-[20px]">
          <div className="mb-[30px] w-full px-[12px] min-[992px]:mb-0 min-[992px]:w-[41.667%]">
            <img
              src="/images/campus/campus.png"
              alt="Diploma in Pharmacy (D.Pharm)"
              className="w-full rounded-[10px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            />
          </div>

          <div className="w-full px-[12px] min-[992px]:ml-[8.333%] min-[992px]:w-[50%]">
            <span className="msc-grad-text mb-[15px] inline-block text-[17px] leading-[25.5px] tracking-[2px] uppercase">
              Diploma
            </span>
            <h2 className="mb-[15px] text-[40px] leading-[64px] font-bold max-[575px]:text-[25px]">
              D.Pharm
            </h2>

            <div className="mb-[20px] flex flex-wrap gap-[10px]">
              <span className="rounded-[20px] bg-[#0f1d3d] px-[14px] py-[5px] text-[13px] font-medium text-white">
                <i className="fas fa-clock" /> 2 Years
              </span>
              <span className="rounded-[20px] bg-[#0f1d3d] px-[14px] py-[5px] text-[13px] font-medium text-white">
                <i className="fas fa-certificate" /> Diploma
              </span>
            </div>

            <div className="mb-[28px]">
              {INFO_ROWS.map((row, i) => (
                <div
                  key={i}
                  className="border-b border-[#eef0f3] py-[8px] text-[14px] text-[#444]"
                >
                  <i className={`${row.icon} mr-[8px] w-[16px] text-[#1e40af]`} />
                  {row.content}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-[12px]">
              <a
                href="/d_pharma"
                className="inline-flex items-center gap-[8px] rounded-[30px] border-2 border-[#1e40af] px-[26px] py-[11px] text-[14px] font-semibold text-[#1e40af] transition-all duration-[250ms] hover:bg-[#1e40af] hover:text-white"
              >
                Read More
                <i className="fas fa-arrow-right" />
              </a>
              <a
                href="/contact_us"
                className="inline-flex items-center gap-[8px] rounded-[30px] bg-[#f59e0b] px-[26px] py-[11px] text-[14px] font-bold text-[#0f1d3d] transition-all duration-[250ms] hover:bg-[#d97706]"
              >
                Apply Now for Admission
                <i className="fas fa-paper-plane" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
