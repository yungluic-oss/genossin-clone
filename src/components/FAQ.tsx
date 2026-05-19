"use client";

import { useState } from "react";
import { Plus, Minus } from "@/components/icons";
import { SectionHeader } from "./Services";

const FAQS = [
  {
    q: "How can AI automation help my business?",
    a: "AI automation eliminates repetitive tasks, improves efficiency, and reduces errors. It allows your team to focus on high-value work while increasing productivity and lowering operational costs.",
  },
  {
    q: "Is AI automation difficult to integrate?",
    a: "No! Our AI solutions are designed for seamless integration with your existing tools and workflows. We provide step-by-step guidance to ensure a smooth and hassle-free setup.",
  },
  {
    q: "What industries can benefit from AI automation?",
    a: "AI automation is beneficial across various industries, including marketing, sales, finance, healthcare, customer support, and operations. Any business looking to improve efficiency can leverage AI.",
  },
  {
    q: "Do I need technical knowledge to use AI automation?",
    a: "Not at all! Our platform is user-friendly and built for all skill levels. We provide onboarding, tutorials, and customer support to ensure you can easily navigate and use the system.",
  },
  {
    q: "What kind of support do you offer?",
    a: "We offer comprehensive support, including onboarding assistance, troubleshooting, and ongoing updates. Our team is available to help with any questions or technical issues you may have.",
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

        <div className="mt-12 space-y-[2px]">
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
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors hover:bg-white/[0.03]">
      <button
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 min-h-[70px] py-4 text-left cursor-pointer"
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
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 -mt-1 text-white/65 text-sm sm:text-[15px] leading-relaxed max-w-prose">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
