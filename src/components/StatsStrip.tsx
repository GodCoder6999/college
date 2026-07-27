import type { StatItem } from "@/types/site";

const STATS: StatItem[] = [
  { icon: "/images/stats/course.svg", value: "D.Pharm", label: "Programme Offered" },
  { icon: "/images/stats/duration.svg", value: "2", label: "Years Duration" },
  { icon: "/images/stats/training.svg", value: "100%", label: "Practical Training" },
  { icon: "/images/stats/guidance.svg", value: "24/7", label: "Expert Guidance" },
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
              <img
                src={stat.icon}
                alt={stat.label}
                width={80}
                height={80}
                className="mx-auto w-[80px] h-[80px]"
              />
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
