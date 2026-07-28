"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_DATA, APPLY_NOW_HREF } from "@/lib/nav-data";
import type { NavDropdownItem, NavItem } from "@/types/site";

function hexWithAlpha(hex: string) {
  return `${hex}18`;
}

function DropdownItem({ item }: { item: NavDropdownItem }) {
  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="kn-di group flex items-center gap-[10px] rounded-[9px] p-[9px_10px] px-[10px] py-[9px] transition-colors duration-[140ms] hover:bg-[#f8fafc] max-[991px]:hover:bg-white/10"
    >
      <span
        className={cn(
          "flex flex-shrink-0 items-center justify-center rounded-[8px]",
          item.compact ? "h-[34px] w-[34px] text-[12px]" : "h-[34px] w-[34px] text-[14px]"
        )}
        style={{ background: hexWithAlpha(item.color), color: item.color }}
      >
        <i className={item.icon} />
      </span>
      <span className="flex min-w-0 flex-col">
        <span
          className={cn(
            "font-semibold leading-[1.3] text-[#0f1d3d] transition-colors duration-[140ms] group-hover:text-[#1e40af]",
            "max-[991px]:text-white max-[991px]:group-hover:text-[#f59e0b]",
            item.compact ? "text-[12px]" : "text-[13px]"
          )}
        >
          {item.label}
        </span>
        {item.desc ? (
          <span className="mt-[1px] text-[11px] font-normal leading-[1.3] text-[#94a3b8] max-[991px]:text-white/52">
            {item.desc}
          </span>
        ) : null}
      </span>
    </a>
  );
}

function DropdownPanel({ item }: { item: NavItem }) {
  const isMega = item.size === "mega" || item.size === "mega-lg";
  return (
    <div
      className={cn(
        "kn-drop absolute left-0 top-full z-[1000] mt-0 animate-[mscDropIn_0.18s_cubic-bezier(0.16,1,0.3,1)_forwards] rounded-[14px] border-none bg-white p-[8px] shadow-[0_12px_48px_rgba(15,29,61,0.12),0_2px_8px_rgba(15,29,61,0.05)]",
        isMega && "p-[16px]",
        "max-[991px]:static max-[991px]:mt-[4px] max-[991px]:w-full max-[991px]:animate-none max-[991px]:rounded-[10px] max-[991px]:border max-[991px]:border-white/12 max-[991px]:bg-white/[0.07] max-[991px]:p-[8px] max-[991px]:shadow-none"
      )}
      style={{ minWidth: item.dropdownWidth }}
    >
      {item.groups?.map((group, gi) => (
        <div key={gi}>
          {gi > 0 ? (
            <div className="kn-sep my-[6px] mx-[4px] h-px bg-[#f1f5f9] max-[991px]:bg-white/12" />
          ) : null}
          {group.sectionLabel ? (
            <span className="kn-section-label block p-[10px_10px_4px] px-[10px] pt-[10px] pb-[4px] text-[10px] font-bold uppercase tracking-[1.5px] text-[#94a3b8] max-[991px]:text-[#f59e0b]">
              {group.sectionLabel}
            </span>
          ) : null}
          <div
            className={cn(
              "kn-grid grid gap-[2px] max-[991px]:grid-cols-1",
              group.columns === 2 && "grid-cols-2",
              group.columns === 3 && "grid-cols-3"
            )}
          >
            {group.items.map((di) => (
              <DropdownItem key={di.label} item={di} />
            ))}
          </div>
        </div>
      ))}

      {item.featured ? (
        <div className="kn-feat mt-[12px] flex items-center gap-[16px] rounded-[10px] bg-[linear-gradient(135deg,#0f1d3d_0%,#1e40af_100%)] p-[18px_16px] px-[16px] py-[18px] max-[991px]:flex-col max-[991px]:text-center">
          <div className="min-w-0 flex-1">
            <h6 className="m-0 mb-[3px] text-[13px] font-bold text-[#f59e0b]">
              <i className="fas fa-star mr-[4px]" />
              {item.featured.title}
            </h6>
            <p className="m-0 text-[11px] text-[#94a3b8]">
              {item.featured.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < item.featured!.lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          </div>
          <a
            href={item.featured.ctaHref}
            className="flex-shrink-0 whitespace-nowrap rounded-[7px] bg-[#f59e0b] p-[8px_18px] px-[18px] py-[8px] text-[12px] font-bold text-[#0f1d3d] transition-opacity duration-200 hover:opacity-[0.88]"
          >
            <i className="fas fa-arrow-right mr-[5px]" />
            {item.featured.ctaLabel}
          </a>
        </div>
      ) : null}
    </div>
  );
}

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        "msc-topnav sticky top-0 z-[1040] flex h-[60px] flex-wrap items-center border-b-[0.8px] border-[rgba(245,158,11,0.25)] bg-[#0f1d3d] p-0 transition-shadow duration-300",
        "max-[991px]:h-auto max-[991px]:p-[10px_0] max-[991px]:py-[10px]",
        scrolled ? "shadow-[0_4px_30px_rgba(15,29,61,0.40)]" : "shadow-none"
      )}
    >
      <div className="msc-nav-container mx-auto flex w-full max-w-[1320px] flex-wrap items-center px-[20px]">
        {/* Mobile brand */}
        <a
          href="/"
          className="msc-mnav-brand hidden items-center gap-[10px] max-[991px]:flex min-[992px]:hidden"
        >
          <img
            src="/images/brand/logo.png"
            alt="Muktir Siksha College Of Education & Pharmacy"
            width={40}
            height={40}
            className="h-[40px] w-[40px] object-contain"
          />
          <span className="flex flex-col">
            <strong className="text-[13px] font-extrabold leading-[1.2] text-white">
              Muktir Siksha College
            </strong>
            <small className="text-[9px] tracking-[0.3px] leading-[1.3] text-white/60">
              of Education &amp; Pharmacy
            </small>
          </span>
        </a>

        {/* Mobile toggler */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="msc-toggler ml-auto hidden flex-col gap-[5px] border-none bg-none p-[6px] max-[991px]:flex min-[992px]:hidden"
        >
          <span
            className={cn(
              "h-[2.5px] w-[22px] rounded-[2px] bg-white transition-[transform,opacity] duration-300",
              mobileOpen && "translate-y-[7.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-[2.5px] w-[22px] rounded-[2px] bg-white transition-[transform,opacity] duration-300",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-[2.5px] w-[22px] rounded-[2px] bg-white transition-[transform,opacity] duration-300",
              mobileOpen && "-translate-y-[7.5px] -rotate-45"
            )}
          />
        </button>

        {/* Collapse */}
        <div
          className={cn(
            "navbar-collapse w-full min-[992px]:flex min-[992px]:w-auto min-[992px]:items-center",
            mobileOpen
              ? "block rounded-[14px] border border-[rgba(245,158,11,0.2)] bg-[#0f1d3d] p-[10px] shadow-[0_10px_40px_rgba(15,29,61,0.40)] mt-[10px]"
              : "hidden min-[992px]:mt-0 min-[992px]:border-0 min-[992px]:p-0 min-[992px]:shadow-none"
          )}
        >
          <ul className="navbar-nav mx-auto flex flex-col min-[992px]:mx-auto min-[992px]:flex-row min-[992px]:items-center">
            {NAV_DATA.map((item, idx) => {
              const hasDropdown = !!item.groups;
              const isOpen = openIndex === idx;

              return (
                <li key={item.label} className="relative">
                  {hasDropdown ? (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex((cur) => (cur === idx ? null : idx))
                      }
                      aria-expanded={isOpen}
                      className={cn(
                        "msc-link relative flex cursor-pointer select-none items-center gap-[4px] whitespace-nowrap border-none bg-none p-[18px_13px] px-[13px] py-[18px] text-[13px] font-semibold tracking-[0.15px] text-white/88 transition-colors duration-200 hover:text-[#f59e0b]",
                        "max-[991px]:w-full max-[991px]:justify-between max-[991px]:rounded-[9px] max-[991px]:p-[11px_14px] max-[991px]:px-[14px] max-[991px]:py-[11px] max-[991px]:text-white/92",
                        isOpen && "text-[#f59e0b]"
                      )}
                    >
                      {item.label}
                      <i
                        className={cn(
                          "kn-arrow fas fa-chevron-down text-[9px] opacity-55 transition-[transform,opacity] duration-[250ms]",
                          isOpen && "rotate-180 opacity-100"
                        )}
                      />
                      <span
                        className={cn(
                          "pointer-events-none absolute bottom-0 left-[13px] right-[13px] h-[2px] origin-left rounded-[1px] bg-[#f59e0b] transition-transform duration-[250ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                          "max-[991px]:hidden",
                          isOpen ? "scale-x-100" : "scale-x-0"
                        )}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="msc-link relative flex cursor-pointer select-none items-center gap-[4px] whitespace-nowrap p-[18px_13px] px-[13px] py-[18px] text-[13px] font-semibold tracking-[0.15px] text-white/88 transition-colors duration-200 hover:text-[#f59e0b] max-[991px]:w-full max-[991px]:rounded-[9px] max-[991px]:p-[11px_14px] max-[991px]:px-[14px] max-[991px]:py-[11px] max-[991px]:text-white/92 group"
                    >
                      {item.label}
                      <span className="pointer-events-none absolute bottom-0 left-[13px] right-[13px] h-[2px] origin-left scale-x-0 rounded-[1px] bg-[#f59e0b] transition-transform duration-[250ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-x-100 max-[991px]:hidden" />
                    </a>
                  )}

                  {hasDropdown && isOpen ? <DropdownPanel item={item} /> : null}
                </li>
              );
            })}
          </ul>

          <a
            href={APPLY_NOW_HREF}
            className="ml-[16px] hidden items-center gap-[6px] whitespace-nowrap rounded-[9px] bg-[#f59e0b] p-[9px_22px] px-[22px] py-[9px] text-[12px] font-extrabold tracking-[0.3px] text-[#0f1d3d] transition-opacity duration-200 hover:opacity-[0.88] min-[992px]:inline-flex"
          >
            <i className="fas fa-arrow-right" />
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
