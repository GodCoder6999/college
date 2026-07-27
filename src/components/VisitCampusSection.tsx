export function VisitCampusSection() {
  return (
    <section className="bg-[#0f1d3d]">
      <div className="flex flex-wrap min-[992px]:flex-nowrap">
        <div className="flex w-full flex-col justify-center bg-[#0f1d3d] px-[40px] py-[48px] min-[992px]:w-[41.667%]">
          <span className="mb-[10px] block text-[11px] font-bold tracking-[3px] text-[#f59e0b] uppercase">
            Find Us
          </span>
          <h3 className="mb-[16px] text-[24px] font-bold text-white">
            Visit Our Campus
          </h3>
          <p className="mb-[24px] text-[14px] leading-[1.8] text-[#94a3b8]">
            Jogen Mondal Colony, Vill.- Kuchlia, P. O.- Gobardanga,
            <br />
            P. S.- Gobardanga, Dist- North 24 Parganas,
            <br />
            Pin- 743252, West Bengal
          </p>

          <div className="mb-[28px] flex flex-col gap-[12px]">
            <div className="flex items-center gap-[10px] text-[13px] text-[#e2e8f0]">
              <i className="fas fa-phone-alt w-[16px] text-[#f59e0b]" />
              (+91) 9830 236143
            </div>
            <div className="flex items-center gap-[10px] text-[13px] text-[#e2e8f0]">
              <i className="fas fa-envelope w-[16px] text-[#f59e0b]" />
              muktirshikshacollegeofpharnacy@gmail.com
            </div>
          </div>

          <a
            href="https://muktirshikshacollegeofeducationandpharmacy.org/contact-us/"
            className="inline-flex w-fit items-center gap-[8px] rounded-[8px] bg-[#f59e0b] px-[26px] py-[12px] text-[13px] font-bold text-[#0f1d3d]"
          >
            <i className="fas fa-map-marker-alt" />
            Get Directions
          </a>
        </div>

        <div className="w-full min-h-[360px] min-[992px]:w-[58.333%]">
          <iframe
            src="https://www.google.com/maps?q=Gobardanga%2C%20North%2024%20Parganas%2C%20West%20Bengal%20743252&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", minHeight: "360px" }}
            allowFullScreen
            loading="lazy"
            title="Muktir Siksha College Of Education & Pharmacy location"
          />
        </div>
      </div>
    </section>
  );
}
