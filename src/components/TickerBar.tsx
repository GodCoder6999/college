const TICKER_ITEMS = [
  {
    icon: "fas fa-university",
    text: "Muktir Siksha College Of Education & Pharmacy, Gobardanga",
  },
  { icon: "fas fa-phone-alt", text: "Enquire: (+91) 9830 236143" },
  {
    icon: "fas fa-graduation-cap",
    text: "Admission Open — Diploma in Pharmacy (D.Pharm)",
  },
  {
    icon: "fas fa-check-circle",
    text: "Quality Education • Hands-on Training • Expert Guidance",
  },
  {
    icon: "fas fa-desktop",
    text: "Apply Online at muktirshikshacollegeofeducationandpharmacy.org",
  },
];

function TickerContent() {
  return (
    <span className="whitespace-nowrap text-[12px] leading-[34px] font-semibold text-white">
      {TICKER_ITEMS.map((item, i) => (
        <span key={i}>
          {i > 0 && " • "}
          <i className={`${item.icon} text-white opacity-85`} /> {item.text}
        </span>
      ))}
    </span>
  );
}

export function TickerBar() {
  return (
    <div className="group h-[34px] overflow-hidden bg-[#f59e0b] p-0">
      <div className="flex w-max shrink-0 animate-[mscMarquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  );
}
