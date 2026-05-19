"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "./" },
  { label: "Solutions", href: "./solutions" },
  { label: "Blog", href: "./blog" },
  { label: "About", href: "./about" },
  { label: "Contact", href: "./contact" },
];

const CTA_HREF = "https://cal.com";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close drawer when viewport crosses lg breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock scroll while mobile drawer open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <nav
      data-framer-name="Desktop"
      className="relative w-full bg-black text-white"
    >
      <div className="mx-auto flex h-[65px] w-full max-w-[1200px] items-center justify-between px-5 py-[10px]">
        {/* Left: logo */}
        <a
          href="./"
          aria-label="Genossin home"
          className="flex shrink-0 items-center gap-2"
        >
          <LogoMark />
          <span
            className="font-display select-none text-white"
            style={{
              fontWeight: 700,
              fontSize: "21px",
              lineHeight: "25.2px",
              letterSpacing: "-1.26px",
            }}
          >
            GENOSSIN
          </span>
        </a>

        {/* Right cluster: links + CTA (desktop) */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="font-display text-white/90 transition-colors hover:text-white"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display inline-flex items-center justify-center bg-accent text-black transition-[filter,transform] hover:brightness-95 active:translate-y-[1px]"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              padding: "10px 16px",
              borderRadius: "8px",
            }}
          >
            Book a call
          </a>
        </div>

        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute left-0 right-0 top-[65px] z-50 border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-1 px-5 py-4">
            <ul className="flex flex-col">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display block rounded-md px-3 py-3 text-white/90 hover:bg-white/5 hover:text-white"
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="font-display mt-3 inline-flex items-center justify-center bg-accent text-black"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                padding: "12px 16px",
                borderRadius: "8px",
              }}
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function LogoMark() {
  return (
    <img
      src="/assets/p7Lbvw5FtXUZVmWWgjuqwPnlASA.png"
      alt=""
      width={22}
      height={22}
      className="shrink-0"
    />
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
