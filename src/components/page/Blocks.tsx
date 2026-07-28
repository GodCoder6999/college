"use client";

import { useState } from "react";

/** Small centred heading used above a block, matching the section head style. */
function BlockHead({
  label,
  heading,
  intro,
}: {
  label?: string;
  heading?: string;
  intro?: string;
}) {
  if (!label && !heading && !intro) return null;
  return (
    <div className="mb-[40px] text-center">
      {label ? (
        <span className="mb-[10px] inline-block text-[11px] font-bold tracking-[3px] text-[#f59e0b] uppercase">
          {label}
        </span>
      ) : null}
      {heading ? (
        <h2 className="mb-[8px] text-[30px] font-extrabold text-[#0f1d3d] max-[575px]:text-[24px]">
          {heading}
        </h2>
      ) : null}
      <div className="mx-auto mb-[14px] h-[3px] w-[48px] rounded-[2px] bg-[linear-gradient(90deg,#1e40af,#f59e0b)]" />
      {intro ? (
        <p className="mx-auto max-w-[600px] text-[15px] text-[#64748b]">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export interface FaqGroup {
  group: string;
  items: { q: string; a: string }[];
}

/** Grouped accordion. First item of the first group starts open. */
export function Accordion({ groups }: { groups: FaqGroup[] }) {
  const [open, setOpen] = useState("0-0");

  return (
    <div className="mx-auto max-w-[820px]">
      {groups.map((group, gi) => (
        <div key={group.group} className="mb-[32px]">
          <div className="mb-[16px] flex items-center gap-[12px]">
            <div className="h-[2px] flex-1 bg-[#e2e8f0]" />
            <span className="text-[12px] font-bold tracking-[2px] whitespace-nowrap text-[#f59e0b] uppercase">
              {group.group}
            </span>
            <div className="h-[2px] flex-1 bg-[#e2e8f0]" />
          </div>

          {group.items.map((item, ii) => {
            const id = `${gi}-${ii}`;
            const isOpen = open === id;
            return (
              <div
                key={item.q}
                className="mb-[8px] overflow-hidden rounded-[10px] bg-white shadow-[0_1px_8px_rgba(15,29,61,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? "" : id)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-[12px] px-[20px] py-[16px] text-left text-[15px] font-semibold text-[#0f1d3d]"
                >
                  <span className="flex items-start gap-[10px]">
                    <i
                      className="fas fa-question-circle mt-[3px] text-[14px] text-[#1e40af]"
                      aria-hidden="true"
                    />
                    {item.q}
                  </span>
                  <i
                    className={`fas fa-chevron-down shrink-0 text-[12px] text-[#94a3b8] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 px-[20px] pt-0 pb-[18px] text-[14px] leading-[26px] text-[#64748b]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export interface ContactDetail {
  icon: string;
  label: string;
  lines: string[];
}

/**
 * Enquiry form beside the institute's contact details.
 *
 * The form has no backend in this build, so it validates locally and shows a
 * confirmation rather than pretending to deliver a message.
 */
export function ContactBlock({ details }: { details: ContactDetail[] }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const field =
    "w-full box-border rounded-[10px] border-[1.5px] border-[#e2e8f0] px-[14px] py-[11px] text-[14px] outline-none transition-[border] duration-200 focus:border-[#1e40af]";
  const label = "mb-[6px] block text-[12px] font-semibold text-[#374151]";

  return (
    <div className="mx-[-12px] flex flex-wrap">
      {/* Form */}
      <div className="mb-[24px] w-full px-[12px] min-[992px]:w-1/2">
        <div className="msc-card h-full">
          <div className="mb-[20px] flex items-center gap-[12px]">
            <div className="msc-icon-badge gold mb-0">
              <i className="fas fa-paper-plane" aria-hidden="true" />
            </div>
            <div>
              <h4 className="m-0 text-[20px] font-bold text-[#0f1d3d]">
                Send an Enquiry
              </h4>
              <p className="mt-[2px] mb-0 text-[12px] text-[#94a3b8]">
                We will get back to you shortly
              </p>
            </div>
          </div>

          {sent ? (
            <div className="msc-highlight green">
              <p className="m-0 text-[14px] font-semibold text-[#0f1d3d]">
                Thank you — your enquiry has been noted. Our team will contact
                you shortly.
              </p>
            </div>
          ) : (
            <div>
              {error ? (
                <div className="mb-[14px] rounded-[8px] border border-[#fecaca] bg-[#fef2f2] px-[12px] py-[8px] text-[12px] text-[#dc2626]">
                  {error}
                </div>
              ) : null}
              <div className="mb-[14px]">
                <label className={label} htmlFor="c-name">
                  Name <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  id="c-name"
                  className={field}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className="mb-[14px]">
                <label className={label} htmlFor="c-phone">
                  Phone <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  id="c-phone"
                  type="tel"
                  className={field}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="mb-[14px]">
                <label className={label} htmlFor="c-email">
                  Email{" "}
                  <span className="font-normal text-[#94a3b8]">(optional)</span>
                </label>
                <input
                  id="c-email"
                  type="email"
                  className={field}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-[18px]">
                <label className={label} htmlFor="c-msg">
                  Message
                </label>
                <textarea
                  id="c-msg"
                  rows={4}
                  className={`${field} resize-none`}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  if (!form.name.trim() || !form.phone.trim()) {
                    setError("Please enter your name and phone number.");
                    return;
                  }
                  setError("");
                  setSent(true);
                }}
                className="flex w-full cursor-pointer items-center justify-center gap-[8px] rounded-[10px] border-none bg-[linear-gradient(135deg,#f59e0b,#d97706)] px-[20px] py-[13px] text-[14px] font-bold text-white transition-opacity duration-200 hover:opacity-90"
              >
                <i className="fas fa-paper-plane" aria-hidden="true" />
                Send Enquiry
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="mb-[24px] w-full px-[12px] min-[992px]:w-1/2">
        <div className="flex h-full flex-col gap-[16px]">
          {details.map((d) => (
            <div key={d.label} className="msc-card flex-1">
              <div className="flex items-start gap-[14px]">
                <div className="msc-icon-badge blue mb-0 shrink-0">
                  <i className={d.icon} aria-hidden="true" />
                </div>
                <div>
                  <h6 className="mb-[6px] text-[13px] font-bold tracking-[1px] text-[#f59e0b] uppercase">
                    {d.label}
                  </h6>
                  {d.lines.map((line) => (
                    <p
                      key={line}
                      className="m-0 text-[14px] leading-[24px] text-[#64748b]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface GalleryItem {
  image: string;
  title: string;
}

/** Photo grid with a zoom overlay on hover. */
export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="mx-[-12px] flex flex-wrap">
      {items.map((item) => (
        <div
          key={item.title}
          className="mb-[24px] w-full px-[12px] min-[576px]:w-1/2 min-[992px]:w-1/3"
        >
          <div className="group relative overflow-hidden rounded-[12px] shadow-[0_2px_20px_rgba(15,29,61,0.08)]">
            <img
              src={item.image}
              alt={item.title}
              className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[10px] bg-[linear-gradient(180deg,rgba(15,29,61,0)_0%,rgba(15,29,61,0.82)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/15 text-[16px] text-white ring-1 ring-white/40">
                <i className="fas fa-search" aria-hidden="true" />
              </span>
              <span className="px-[12px] text-center text-[14px] font-semibold text-white">
                {item.title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { BlockHead };
