"use client";

import { useEffect, useState } from "react";
import { ProgressRingIcon } from "@/components/icons";

const CIRCUMFERENCE = 307.919;

export function ScrollProgress() {
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState(CIRCUMFERENCE);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      setVisible(scrolled > 50);
      setOffset(CIRCUMFERENCE - (CIRCUMFERENCE * scrolled) / total);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-[30px] right-[30px] z-[100] h-[44px] w-[44px] cursor-pointer rounded-[50px] shadow-[inset_0_0_0_2px_rgba(24,27,49,0.2)] transition-all duration-[400ms] ease-linear ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-[20px] opacity-0"
      }`}
    >
      <ProgressRingIcon
        className="block h-full w-full"
        pathStyle={{
          fill: "none",
          stroke: "#181b31",
          strokeWidth: 4,
          strokeLinecap: "round",
          strokeDasharray: CIRCUMFERENCE,
          strokeDashoffset: offset,
        }}
      />
      <i className="fas fa-arrow-up absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[14px] text-[#181b31]" />
    </div>
  );
}
