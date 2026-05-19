"use client";

import { useState } from "react";
import { Plus, Minus } from "@/components/icons";
import { SectionHeader } from "./Services";

const FAQS = [
  {
    q: "How can AI automation help my business?",
    a: "",
  },
  {
    q: "Is AI automation difficult to integrate?",
    a: "",
  },
  {
    q: "What industries can benefit from AI automation?",
    a: "",
  },
  {
    q: "Do I need technical knowledge to use AI automation?",
    a: "",
  },
  {
    q: "What kind of support do you offer?",
    a: "",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 px-4">
      <div className="relative max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="FAQs"
          title={<>We&apos;ve Got the Answers You&apos;re Looking For</>}
          sub="Quick answers to your AI automation questions."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <span className="font-display text-lg sm:text-xl tracking-tight">
          {q}
        </span>
        <span
          className={`w-8 h-8 shrink-0 rounded-full inline-flex items-center justify-center border transition-colors ${
            open
              ? "bg-accent text-black border-accent"
              : "bg-white/[0.04] text-white border-white/10"
          }`}
        >
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 text-white/65 text-sm sm:text-[15px] leading-relaxed">
            {a || (
              <span className="text-white/40 italic">
                Paste answer here.
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
