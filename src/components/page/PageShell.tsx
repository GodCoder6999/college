import Link from "next/link";
import type { ReactNode } from "react";

import { EnquiryPopup } from "@/components/EnquiryPopup";
import { MainHeader } from "@/components/MainHeader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteFooter } from "@/components/SiteFooter";
import { TickerBar } from "@/components/TickerBar";
import { TopNav } from "@/components/TopNav";
import { WhatsAppFab } from "@/components/WhatsAppFab";

/** Banner + breadcrumb shown at the top of every inner page. */
export function PageHero({ title, parent }: { title: string; parent?: string }) {
  return (
    <header className="msc-page-hero">
      <div className="msc-container relative z-[2]">
        <h1>{title}</h1>
        <nav className="msc-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <i className="fas fa-chevron-right text-[8px]" aria-hidden="true" />
          {parent ? (
            <>
              <span className="text-white/65">{parent}</span>
              <i
                className="fas fa-chevron-right text-[8px]"
                aria-hidden="true"
              />
            </>
          ) : null}
          <span>{title}</span>
        </nav>
      </div>
    </header>
  );
}

/** A content band. `tone` maps to the section background variants. */
export function PageSection({
  label,
  heading,
  center,
  tone = "white",
  children,
}: {
  label?: string;
  heading?: string;
  center?: boolean;
  tone?: "white" | "grey" | "navy";
  children?: ReactNode;
}) {
  const toneClass =
    tone === "white" ? "white" : tone === "navy" ? "navy" : "";
  return (
    <section className={`msc-page-section ${toneClass}`}>
      <div className="msc-container">
        {heading || label ? (
          <div className={`msc-sec-head${center ? " center" : ""}`}>
            {label ? <span className="label">{label}</span> : null}
            {heading ? <h2>{heading}</h2> : null}
            <div className="divider" />
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

/** Body copy block. */
export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="msc-card">
      {paragraphs.map((text, i) => (
        <p
          key={i}
          className={`text-[14px] leading-[28px] text-[#64748b]${i ? " mt-[14px]" : ""}`}
        >
          {text}
        </p>
      ))}
    </div>
  );
}

export interface CardItem {
  icon: string;
  tone?: "blue" | "gold" | "navy" | "green" | "red";
  title: string;
  body?: string;
}

/** Responsive grid of icon cards. */
export function CardGrid({
  items,
  columns = 3,
}: {
  items: CardItem[];
  columns?: 2 | 3 | 4;
}) {
  const width =
    columns === 2
      ? "min-[768px]:w-1/2"
      : columns === 4
        ? "min-[768px]:w-1/2 min-[992px]:w-1/4"
        : "min-[768px]:w-1/2 min-[992px]:w-1/3";
  return (
    <div className="mx-[-12px] flex flex-wrap">
      {items.map((item) => (
        <div key={item.title} className={`mb-[24px] w-full px-[12px] ${width}`}>
          <div className="msc-card">
            <div className={`msc-icon-badge ${item.tone ?? "blue"}`}>
              <i className={item.icon} aria-hidden="true" />
            </div>
            <h6 className="mb-[8px] text-[15px] font-bold text-[#0f1d3d]">
              {item.title}
            </h6>
            {item.body ? (
              <p className="m-0 text-[13px] leading-[24px] text-[#64748b]">
                {item.body}
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Bulleted list rendered inside a card. */
export function BulletList({ items }: { items: string[] }) {
  return (
    <div className="msc-card">
      <ul className="m-0 list-none p-0">
        {items.map((item) => (
          <li
            key={item}
            className="mb-[12px] flex items-start gap-[10px] text-[14px] leading-[26px] text-[#64748b] last:mb-0"
          >
            <i
              className="fas fa-check-circle mt-[6px] shrink-0 text-[13px] text-[#f59e0b]"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Shown where the institute has not published the information yet. Lists what
 * is needed so the page doubles as a checklist rather than looking broken or,
 * worse, being filled with invented detail.
 */
export function PendingInfo({ needs }: { needs: string[] }) {
  return (
    <div className="msc-highlight gold">
      <h6 className="mb-[8px] flex items-center gap-[8px] text-[14px] font-bold text-[#0f1d3d]">
        <i className="fas fa-circle-info" aria-hidden="true" />
        Information coming soon
      </h6>
      <p className="m-0 text-[13px] leading-[24px] text-[#64748b]">
        This page is ready and will be published once the following details are
        available:
      </p>
      <ul className="mt-[10px] mb-0 list-none p-0">
        {needs.map((need) => (
          <li
            key={need}
            className="mb-[6px] flex items-start gap-[8px] text-[13px] leading-[22px] text-[#64748b]"
          >
            <i
              className="fas fa-angle-right mt-[5px] shrink-0 text-[11px] text-[#f59e0b]"
              aria-hidden="true"
            />
            <span>{need}</span>
          </li>
        ))}
      </ul>
      <p className="mt-[14px] mb-0 text-[13px] text-[#64748b]">
        For anything urgent please{" "}
        <Link href="/contact_us" className="font-semibold text-[#1e40af]">
          contact us
        </Link>{" "}
        — we are happy to help.
      </p>
    </div>
  );
}

/** Wraps every inner page with the shared chrome. */
export function PageShell({
  title,
  parent,
  children,
}: {
  title: string;
  parent?: string;
  children: ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <WhatsAppFab />
      <TickerBar />
      <MainHeader />
      <TopNav />
      <PageHero title={title} parent={parent} />
      {children}
      <SiteFooter />
      <EnquiryPopup />
    </>
  );
}
