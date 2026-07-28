// Wording is drawn from the institute's own copy — "quality pharmacy education
// aligned with industry standards", "experienced and dedicated faculty members",
// "career-oriented training and professional guidance". Deliberately no invented
// figures (seat counts, placement rates, years running) until the client
// supplies them.
const STATS = [
  {
    icon: "fas fa-pills",
    value: "D.Pharm",
    label: "Programme Offered",
    note: "Diploma in Pharmacy",
  },
  {
    icon: "fas fa-award",
    value: "Industry",
    label: "Aligned Curriculum",
    note: "Taught to sector standards",
  },
  {
    icon: "fas fa-flask",
    value: "Hands-On",
    label: "Practical Training",
    note: "Learning by doing, in the lab",
  },
  {
    icon: "fas fa-chalkboard-teacher",
    value: "Experienced",
    label: "Dedicated Faculty",
    note: "Guidance at every step",
  },
];

export function StatsStrip() {
  return (
    <div className="max-w-full bg-[#f1f0eb] max-[767px]:py-[26px] min-[768px]:py-[46px]">
      <div className="msc-container">
        <div className="flex flex-wrap">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`group w-1/2 px-[12px] text-center max-[767px]:mb-[26px] max-[767px]:last:mb-0 min-[992px]:w-1/4 ${
                i > 0
                  ? "min-[992px]:border-l min-[992px]:border-dashed min-[992px]:border-[#d8d5cb]"
                  : ""
              }`}
            >
              {/* Disc behind the glyph so the icon reads as deliberate, not stray */}
              <div className="mx-auto mb-[16px] flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white ring-1 ring-[#e6e2d6] shadow-[0_2px_14px_rgba(15,29,61,0.08)] transition-[transform,box-shadow] duration-300 group-hover:-translate-y-[3px] group-hover:shadow-[0_10px_26px_rgba(15,29,61,0.14)]">
                <i
                  className={`${stat.icon} text-[26px] text-[#f59e0b]`}
                  aria-hidden="true"
                />
              </div>

              <h2 className="text-[27px] leading-[36px] font-extrabold tracking-[-0.4px] text-[#0f1d3d] max-[575px]:text-[22px]">
                {stat.value}
              </h2>

              <p className="mt-[4px] text-[12px] leading-[18px] font-bold tracking-[1.4px] text-[#1e40af] uppercase">
                {stat.label}
              </p>

              <p className="mt-[6px] text-[12.5px] leading-[20px] text-[#7c7a72]">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
