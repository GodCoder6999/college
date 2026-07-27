"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroSlide } from "@/types/site";

const SLIDES: HeroSlide[] = [
  {
    image: "/images/slider/slide-1.svg",
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
    image: "/images/slider/slide-2.svg",
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
    image: "/images/slider/slide-4.svg",
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
    image: "/images/slider/slide-3.svg",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      <div
        onClick={goPrev}
        className="absolute z-10 left-[40px] bottom-[40px] flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-white/35 text-white transition-[0.4s] hover:bg-white/15"
      >
        <i className="fas fa-chevron-left" />
      </div>
      <div
        onClick={goNext}
        className="absolute z-10 left-[100px] bottom-[40px] flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-white/35 text-white transition-[0.4s] hover:bg-white/15"
      >
        <i className="fas fa-chevron-right" />
      </div>

      <div className="absolute z-10 right-[40px] bottom-[200px] text-center text-[40px] leading-[60px] font-medium text-white">
        {activeIndex + 1} / {SLIDES.length}
      </div>
    </header>
  );
}
