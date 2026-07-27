"use client";

import { useCallback, useEffect, useState } from "react";

const COOKIE_KEY = "msc_popup_1";
const COOKIE_DAYS = 7;
const SESSION_KEY = "msc_popup_shown";
const DELAY_MS = 3000;

function hasCookie(name: string) {
  return document.cookie
    .split(";")
    .some((c) => c.trim().startsWith(`${name}=`));
}

function setCookie(name: string, days: number) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie = `${name}=1;expires=${d.toUTCString()};path=/`;
}

const INPUT_CLASS =
  "w-full box-border rounded-[10px] border-[1.5px] border-[#e2e8f0] px-[12px] py-[10px] text-[13px] outline-none transition-[border] duration-200 focus:border-[#1e40af]";
const LABEL_CLASS =
  "block text-[12px] font-semibold text-[#374151] mb-[6px]";

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const dismiss = useCallback(() => {
    setCookie(COOKIE_KEY, COOKIE_DAYS);
    setOpen(false);
  }, []);

  useEffect(() => {
    if (hasCookie(COOKIE_KEY) || sessionStorage.getItem(SESSION_KEY)) return;
    const t = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  function submit() {
    setError("");
    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }
    // The live site POSTs to the institute contact form — this clone has no
    // backend, so the success state is shown locally without a network request.
    setSubmitting(true);
    setDone(true);
    setCookie(COOKIE_KEY, COOKIE_DAYS);
    setTimeout(() => setOpen(false), 3000);
  }

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
      className={`fixed inset-0 z-[9999] items-center justify-center bg-black/60 p-[16px] backdrop-blur-[4px] ${
        open ? "flex" : "hidden"
      }`}
    >
      <div
        className={`relative w-full max-w-[440px] overflow-hidden rounded-[20px] bg-white shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition-[transform,opacity] duration-300 ease-out ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-[20px] scale-[0.92] opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-[14px] top-[14px] z-10 flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full border-none bg-black/20 text-[16px] text-white"
        >
          <i className="fas fa-times" />
        </button>

        <div className="relative overflow-hidden bg-[linear-gradient(135deg,#0f1d3d_0%,#1e3a6e_100%)] px-[28px] pb-[24px] pt-[32px]">
          <div className="absolute -right-[60px] -top-[60px] h-[200px] w-[200px] rounded-full bg-[rgba(245,158,11,0.08)]" />
          <div className="absolute -bottom-[40px] -left-[40px] h-[160px] w-[160px] rounded-full bg-[rgba(30,64,175,0.15)]" />
          <div className="relative z-[2]">
            <div className="mb-[12px] inline-flex items-center gap-[6px] rounded-[20px] border border-[rgba(245,158,11,0.35)] bg-[rgba(245,158,11,0.2)] px-[12px] py-[4px] text-[11px] font-bold tracking-[0.5px] text-[#fbbf24]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#fbbf24] [animation:mscPulse_1.5s_infinite]" />
              Admission Open
            </div>
            <h3 className="m-0 mb-[8px] text-[22px] font-extrabold leading-[1.3] text-white">
              Admission Open
            </h3>
            <p className="m-0 text-[13px] leading-[1.6] text-white/65">
              Begin your pharmacy career here — Diploma in Pharmacy (D.Pharm)
              at Muktir Siksha College Of Education &amp; Pharmacy.
            </p>
          </div>
        </div>

        <div className="px-[28px] py-[24px]">
          {done ? (
            <div className="py-[20px] text-center">
              <div className="mx-auto mb-[16px] flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#d1fae5]">
                <i className="fas fa-check text-[26px] text-[#16a34a]" />
              </div>
              <p className="m-0 text-[16px] font-bold text-[#0f1d3d]">
                Thank you! Our admission team will call you shortly.
              </p>
            </div>
          ) : (
            <div>
              {error && (
                <div className="mb-[12px] rounded-[8px] border border-[#fecaca] bg-[#fef2f2] px-[12px] py-[8px] text-[12px] text-[#dc2626]">
                  {error}
                </div>
              )}
              <div className="mb-[12px] grid grid-cols-2 gap-[12px]">
                <div>
                  <label className={LABEL_CLASS} htmlFor="msc-p-name">
                    Name <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    id="msc-p-name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label className={LABEL_CLASS} htmlFor="msc-p-phone">
                    Phone <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    id="msc-p-phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>
              <div className="mb-[12px]">
                <label className={LABEL_CLASS} htmlFor="msc-p-email">
                  Email{" "}
                  <span className="font-normal text-[#94a3b8]">(optional)</span>
                </label>
                <input
                  id="msc-p-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={INPUT_CLASS}
                />
              </div>
              <div className="mb-[18px]">
                <label className={LABEL_CLASS} htmlFor="msc-p-msg">
                  Message{" "}
                  <span className="font-normal text-[#94a3b8]">(optional)</span>
                </label>
                <textarea
                  id="msc-p-msg"
                  rows={2}
                  placeholder="Any questions?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${INPUT_CLASS} resize-none`}
                />
              </div>
              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="flex w-full cursor-pointer items-center justify-center gap-[8px] rounded-[12px] border-none bg-[linear-gradient(135deg,#f59e0b,#d97706)] p-[13px] text-[14px] font-bold text-white transition-opacity duration-200 disabled:opacity-70"
              >
                <i className="fas fa-paper-plane" />
                <span>{submitting ? "Submitting…" : "Send Enquiry"}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
