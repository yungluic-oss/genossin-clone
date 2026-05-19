"use client";

import { useState } from "react";
import { Plus, Minus } from "@/components/icons";
import { SectionHeader } from "./Services";

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most first engagements ship a working system in 3–6 weeks. We start with the single highest-leverage workflow, prove it works in production, then expand from there.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Most of our clients are. You don't need to know what RAG, LLM, or webhook means — you tell us where the pain is, we handle the rest.",
  },
  {
    q: "What about our data and privacy?",
    a: "Your data stays in your accounts. We support self-hosted models, EU-only providers, audit logs, and clear role-based permissions. NDA on day one if you need it.",
  },
  {
    q: "How is this priced?",
    a: "Fixed-scope projects for the initial build, then a flat monthly retainer for support, monitoring, and iteration. No per-seat surprises.",
  },
  {
    q: "What if it doesn't work?",
    a: "We scope tight, ship in small increments, and measure against a real metric you pick. If a pilot doesn't move the number, we stop — no quarter-long sunk costs.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 px-4">
      <div className="relative max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Questions, answered
              <br className="hidden sm:block" />{" "}
              <span className="italic font-normal">straight</span>
            </>
          }
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
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
