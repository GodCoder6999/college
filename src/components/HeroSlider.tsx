"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroSlide } from "@/types/site";

const SLIDES: HeroSlide[] = [
  {
    image: "/images/slider/slide-1.jpg",
    title: "Empowering the Next Generation of",
    titleAccent: " Pharmacists",
    description:
      "Our students gain the knowledge, skills, and confidence to excel in pharmacy and healthcare. We combine quality education, hands-on training, and expert guidance for a rewarding career.",
    buttons: [
      { label: "Apply Now", href: "https://muktirshikshacollegeofeducationandpharmacy.org/contact-us/", variant: "primary" },
      { label: "Know More", href: "https://muktirshikshacollegeofeducationandpharmacy.org/about-us/", variant: "outline" },
    ],
  },
  {
    image: "/images/slider/slide-2.jpg",
    title: "Diploma in Pharmacy",
    titleAccent: " (D.Pharm)",
    description:
      "A comprehensive programme covering pharmaceutical sciences, drug formulation, dispensing, and patient care — preparing you for pharmacies, hospitals, and healthcare settings.",
    buttons: [
      { label: "Explore Course", href: "https://muktirshikshacollegeofeducationandpharmacy.org/course/", variant: "primary" },
      { label: "Contact Us", href: "https://muktirshikshacollegeofeducationandpharmacy.org/contact-us/", variant: "outline" },
    ],
  },
  {
    image: "/images/slider/slide-4.jpg",
    title: "A Campus That Inspires",
    titleAccent: " Learning",
    description:
      "Muktir Siksha College Of Education & Pharmacy, Gobardanga — experienced faculty, modern laboratories, and a student-centred learning environment.",
    buttons: [
      { label: "Admission", href: "https://muktirshikshacollegeofeducationandpharmacy.org/contact-us/", variant: "primary" },
      { label: "About Us", href: "https://muktirshikshacollegeofeducationandpharmacy.org/about-us/", variant: "outline" },
    ],
  },
  {
    image: "/images/slider/slide-3.jpg",
    title: "Shaping the Future of",
    titleAccent: " Pharmacy Education",
    description:
      "Ethical practice, healthcare regulations, and industry standards run through every part of our teaching, so graduates start work with confidence.",
    buttons: [],
  },
];

const AUTOPLAY_MS = 5000;

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setActiveIndex((index + SLIDES.length) % SLIDES.length);
    startTimer();
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  return (
    <header
      className="slider relative overflow-hidden cursor-grab h-[180px] min-[576px]:h-[809px] min-[992px]:h-[711px]"
    >
      {SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={slide.image}
            className={`msc-overlay-dark absolute inset-0 flex items-center bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out ${
              isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="msc-container relative z-[2]">
              <div className="w-full min-[992px]:w-[66.667%] min-[768px]:w-[83.333%] text-left">
                <h1
                  className={`text-[15px] leading-[24px] min-[576px]:text-[30px] min-[576px]:leading-[48px] font-extrabold text-white transition-[opacity,visibility] duration-500 ${
                    isActive ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {slide.title}
                  {slide.titleAccent ? <span className="text-[#f59e0b]">{slide.titleAccent}</span> : null}
                </h1>
                {slide.description ? (
                  <p
                    className={`mt-[15px] max-w-[83.333%] text-[16px] leading-[32px] font-normal text-[#eeeeee] transition-[opacity,transform] duration-[400ms] delay-[1000ms] ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
                    }`}
                  >
                    {slide.description}
                  </p>
                ) : null}
                {slide.buttons.length > 0 ? (
                  <div className="mt-[30px] flex flex-wrap items-center">
                    {slide.buttons.map((btn) =>
                      btn.variant === "primary" ? (
                        <a
                          key={btn.label}
                          href={btn.href}
                          className="msc-grad-coral relative inline-block overflow-hidden rounded-[30px] px-[25px] min-h-[50px] leading-[50px] text-center text-[16px] text-[#f8f9fa] transition-[0.4s]"
                        >
                          {btn.label}
                        </a>
                      ) : (
                        <a
                          key={btn.label}
                          href={btn.href}
                          className="ml-[12px] inline-block overflow-hidden rounded-[30px] border-2 border-white px-[25px] min-h-[50px] leading-[50px] text-center text-[16px] text-white transition-[0.4s] hover:bg-white hover:text-[#0f1d3d]"
                        >
                          {btn.label}
                        </a>
                      )
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}

      {/* Edge arrows — circular, translucent, vertically centred */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute top-1/2 left-[24px] z-10 flex h-[56px] w-[56px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/35 text-[20px] text-white transition-colors duration-200 hover:bg-black/60 max-[575px]:h-[36px] max-[575px]:w-[36px] max-[575px]:left-[10px] max-[575px]:text-[14px]"
      >
        <i className="fas fa-chevron-left" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next slide"
        className="absolute top-1/2 right-[24px] z-10 flex h-[56px] w-[56px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/35 text-[20px] text-white transition-colors duration-200 hover:bg-black/60 max-[575px]:h-[36px] max-[575px]:w-[36px] max-[575px]:right-[10px] max-[575px]:text-[14px]"
      >
        <i className="fas fa-chevron-right" />
      </button>

      {/* Slide indicators — active slide is a wider pill, the rest are dots */}
      <div className="absolute bottom-[40px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[8px] max-[575px]:bottom-[16px]">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex}
            className={`h-[8px] cursor-pointer rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-[26px] bg-white"
                : "w-[8px] bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </header>
  );
}
