export function AboutSection() {
  return (
    <section className="msc-section-padding max-[575px]:py-[32px]">
      <div className="msc-container">
        <div className="flex flex-wrap min-[992px]:flex-nowrap">
          <div className="w-full min-[992px]:w-[41.667%] mb-[50px] min-[992px]:mb-0 flex flex-col justify-center">
            <span className="msc-grad-text mb-[15px] inline-block text-[17px] leading-[25.5px] tracking-[2px] uppercase">
              About Us
            </span>
            <h4 className="pb-[20px] text-[27px] leading-[43.2px] font-bold text-[#006c93] max-[575px]:text-[19px] max-[575px]:leading-[30.4px]">
              MUKTIR SIKSHA COLLEGE OF EDUCATION &amp; PHARMACY
            </h4>
            <span className="msc-grad-text-teal mb-[15px] inline-block text-[20px] leading-[30px] tracking-[2px] uppercase">
              Shaping the Future of Pharmacy Education
            </span>
            <p className="text-[14px] leading-[28px] font-normal text-[#8e8e99]">
              We are a dedicated educational institute committed to shaping
              skilled and responsible professionals in the field of pharmacy.
              With a strong focus on academic excellence and practical learning,
              we provide quality education that meets industry standards and
              healthcare needs.
            </p>
            <a
              href="https://muktirshikshacollegeofeducationandpharmacy.org/about-us/"
              className="group relative mt-[30px] mb-0 inline-block min-h-[55px] overflow-hidden rounded-[30px] border-[0.8px] border-[#f94c30] bg-[#f94c30] px-[30px] text-center leading-[55px] text-white transition-[0.4s]"
            >
              <span className="flex items-center justify-center gap-2">
                <i className="fas fa-chevron-right text-[12px] opacity-0 transition-[0.4s] group-hover:opacity-100" />
                <span className="text-[12px] font-medium tracking-[2px] uppercase">
                  Read More
                </span>
                <i className="fas fa-chevron-right text-[12px] opacity-100 transition-[0.4s] group-hover:opacity-0" />
              </span>
            </a>
          </div>
          <div className="w-full min-[992px]:w-1/2 min-[992px]:ml-[8.333%]">
            <div className="relative mb-[60px] h-[500px]">
              <div className="ml-[35%] h-[500px] w-[65%] overflow-hidden bg-[#f1f0eb] max-[575px]:h-[350px]">
                <img
                  src="/images/campus/student.png"
                  alt="Pharmacy student at Muktir Siksha College Of Education &amp; Pharmacy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute bottom-[-60px] left-0 h-[259px] w-[63%] after:absolute after:bottom-[-20px] after:right-[-50px] after:z-[-1] after:h-[100px] after:w-[100px] after:rounded-full after:border-[20px] after:border-[#3b3f82] after:opacity-20 after:content-['']">
                <img
                  src="/images/campus/campus.png"
                  alt="Diploma in Pharmacy at Muktir Siksha College Of Education &amp; Pharmacy"
                  className="h-full w-full bg-white object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
