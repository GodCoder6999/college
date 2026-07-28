// Values come from the institute's own copy. Deliberately no invented figures
// (seat counts, placement rates, years running) until the client supplies them.
//
// Icons are Font Awesome glyphs rather than generated artwork: real vector
// icons stay crisp at any size and match the weight of every other icon on
// the page.
const STATS = [
  { icon: "fas fa-pills", value: "D.Pharm", label: "Programme Offered" },
  { icon: "fas fa-award", value: "Quality", label: "Pharmacy Education" },
  { icon: "fas fa-flask", value: "Hands-on", label: "Practical Training" },
  { icon: "fas fa-chalkboard-teacher", value: "Expert", label: "Faculty Guidance" },
];

export function StatsStrip() {
  return (
    <div className="max-w-full bg-[#f1f0eb] max-[767px]:pt-[15px] max-[767px]:pr-0 max-[767px]:pb-[10px] max-[767px]:pl-0 min-[768px]:pt-[50px] min-[768px]:pr-[75px] min-[768px]:pb-[55px] min-[768px]:pl-0">
      <div className="msc-container">
        <div className="flex flex-wrap">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="w-1/2 min-[992px]:w-1/4 text-center"
            >
              <div className="mx-auto flex h-[80px] w-[80px] items-center justify-center">
                <i
                  className={`${stat.icon} text-[44px] text-[#444444]`}
                  aria-hidden="true"
                />
              </div>
              <h2 className="text-[35px] leading-[56px] font-bold text-[#444444]">
                {stat.value}
              </h2>
              <p className="text-[13px] leading-[26px] font-normal text-[#393939]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
