"use client";

import { useState } from "react";
import type { Testimonial } from "@/types/site";

const TESTIMONIALS: Testimonial[] = [
  {
    avatar: "/images/testimonials/student-1.jpg",
    name: "Sagarika Mondal",
    quote:
      "The D.Pharm programme here gave me a strong foundation in pharmaceutical sciences. The practical sessions in the laboratory made dispensing and formulation feel natural long before I stepped into a real pharmacy.",
  },
  {
    avatar: "/images/testimonials/student-2.jpg",
    name: "Arindam Roy",
    quote:
      "What I value most is how much emphasis the faculty place on ethics and accuracy. That focus on responsibility is exactly what employers look for, and it made my first hospital placement far easier.",
  },
  {
    avatar: "/images/testimonials/student-3.jpg",
    name: "Puja Das",
    quote:
      "Expert guidance, a supportive learning environment, and a course that keeps industry standards in view — Muktir Siksha College prepared me for a career in community pharmacy with real confidence.",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % TESTIMONIALS.length);

  const active = TESTIMONIALS[activeIndex];

  return (
    <section
      className="msc-overlay-dark relative h-[540px] bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url(/images/background/testimonials.svg)" }}
    >
      <div className="relative z-[2] bg-[rgba(0,0,0,0.12)] py-[70px]">
        <div className="msc-container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full min-[992px]:w-[66.667%] min-[768px]:w-[83.333%]">
              <div className="mb-[30px] text-center">
                <h6 className="mb-[10px] inline-block text-[20px] leading-[30px] font-semibold tracking-[2px] text-white uppercase">
                  Testimonials
                </h6>
              </div>

              <div className="relative z-[1] mx-auto my-[20px] h-[90px] w-[260px] max-w-[260px] overflow-hidden">
                <div className="flex h-full items-center justify-center">
                  {TESTIMONIALS.map((t, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <div
                        key={t.name}
                        className="relative mr-[10px] h-[90px] w-[80px]"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveIndex(i)}
                          aria-label={`Show testimonial from ${t.name}`}
                          className={`block h-[90px] w-[90px] overflow-hidden rounded-full border-4 transition-[opacity,border-color] duration-300 ${
                            isActive
                              ? "border-white opacity-100"
                              : "border-transparent opacity-60"
                          }`}
                        >
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="h-[123px] w-[82px] object-cover"
                          />
                        </button>
                        {isActive && (
                          <span className="msc-grad-coral absolute bottom-0 left-1/2 h-[4px] w-[24px] -translate-x-1/2 rounded-[2px]" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div key={activeIndex} className="transition-opacity duration-[400ms]">
                <p className="text-center text-[15px] leading-[30px] font-normal text-white">
                  {active.quote}
                </p>
                <div className="mt-[30px]">
                  <h6 className="mb-[5px] text-center text-[18px] leading-[27px] font-semibold tracking-[2px] text-white uppercase">
                    {active.name}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous testimonial"
        className="absolute top-[200px] left-[10px] z-10 -mt-[22px] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] text-[30px] text-white transition-all duration-[400ms] hover:bg-[rgba(255,255,255,0.2)] max-[767px]:left-0"
      >
        <i className="fas fa-angle-left" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next testimonial"
        className="absolute top-[200px] right-[10px] z-10 -mt-[22px] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] text-[30px] text-white transition-all duration-[400ms] hover:bg-[rgba(255,255,255,0.2)] max-[767px]:right-0"
      >
        <i className="fas fa-angle-right" />
      </button>
    </section>
  );
}
