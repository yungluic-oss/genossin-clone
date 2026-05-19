"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "@/components/icons";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "Solutions", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex items-center justify-between w-full max-w-6xl transition-all duration-300 px-4 sm:px-5 py-2.5 rounded-full ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <Logo />
          <span className="font-display font-semibold tracking-tight text-[15px]">
            GENOSSIN
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-1.5 text-white/70 hover:text-white transition-colors rounded-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium pl-4 pr-1.5 py-1.5 rounded-full bg-white text-black hover:bg-accent transition-colors"
          >
            Book a call
            <span className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-black text-white">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
          <button
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-full mt-2 left-4 right-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 p-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span className="inline-flex w-7 h-7 items-center justify-center rounded-md bg-gradient-to-br from-violet to-pink text-black">
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden>
        <path
          d="M5 12h6M5 7h14M5 17h10"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
