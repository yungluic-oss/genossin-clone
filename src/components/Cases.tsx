"use client";

import { useRef } from "react";
import { SectionHeader } from "./Services";

const CASES = [
  {
    headline: "“AI-driven forecasting cut inventory waste by 40% for TrailForge”",
    body: "TrailForge, a suitcase brand, faced stock issues and inefficiencies. Our AI forecasting optimized inventory and production cycles, helping them save costs and deliver faster.",
    impact: [
      "40% Less Inventory Waste",
      "35% Faster Production",
      "20% More Accurate Forecasting",
      "25% Faster Fulfillment",
    ],
  },
  {
    headline: "“AI-powered workflows reduced error rate by 80% in daily operations”",
    body: "A healthcare logistics company, was dealing with frequent data errors and delays. We introduced AI validation and live tracking to improve accuracy and speed across their supply chain.",
    impact: [
      "80% Error reduction",
      "90% Accuracy in Data Logs",
      "30% Faster Delivery",
      "60+ Hours Saved",
    ],
  },
  {
    headline: "“Automating 50% of operations saved 20% in costs in 2 months”",
    body: "FinSolve, a financial services firm, was overloaded with repetitive tasks. By automating workflows and integrating data systems, they streamlined operations and significantly reduced overhead.",
    impact: [
      "50% Operations Automated",
      "20% Cost Reduction",
      "70+ Hours Saved/Month",
      "2x Faster Client Onboarding",
    ],
  },
  {
    headline: "“AI integration helped ScaleByte close 3x more deals in less time”",
    body: "ScaleByte’s sales team struggled with follow-up delays. Our AI sales assistant automated outreach, lead scoring, and CRM updates—resulting in faster responses and more closed deals.",
    impact: [
      "3x More Deals",
      "40% Faster Responses",
      "95% Lead Accuracy",
      "CRM Fully Synced",
    ],
  },
];

export default function Cases() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    if (!ref.current) return;
    const w = ref.current.clientWidth * 0.85;
    ref.current.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section id="cases" className="relative py-28 px-4 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Case Studies"
          title={<>See How Smart AI Automation Transforms Businesses</>}
          sub="See how AI automation streamlines operations, boosts and drives growth."
        />

        <div className="mt-10 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/45">
            Drag to explore
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 inline-flex items-center justify-center hover:bg-white/[0.08]"
            >
              <svg width="16" height="16" viewBox="0 0 40 40" fill="none">
                <path
                  d="M22.5 12.5 15 20l7.5 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 inline-flex items-center justify-center hover:bg-white/[0.08]"
            >
              <svg width="16" height="16" viewBox="0 0 40 40" fill="none">
                <path
                  d="M17.5 12.5 25 20l-7.5 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="mt-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {CASES.map((c) => (
            <article
              key={c.headline}
              className="card-surface shrink-0 w-[88%] sm:w-[520px] snap-start p-7 flex flex-col gap-5"
            >
              <p className="font-display text-2xl sm:text-3xl tracking-tight leading-[1.15]">
                {c.headline}
              </p>
              <p className="text-sm text-white/60 leading-relaxed">{c.body}</p>
              <div className="mt-auto">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-3">
                  Impact :
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {c.impact.map((i) => (
                    <div
                      key={i}
                      className="px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-[12px] text-white/85"
                    >
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
