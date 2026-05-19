import Image from "next/image";
import { SectionHeader } from "./Services";

type Case = {
  image: string;
  alt: string;
  headline: string;
  body: string;
  impact: string[];
};

const CASES: Case[] = [
  {
    image: "/assets/wZ4QywsLlJwC6C7w4D9W92Oqug.jpeg",
    alt: "TrailForge suitcase brand case study",
    headline: "“AI-driven forecasting cut inventory waste by 40%”",
    body: "A suitcase brand, faced stock issues and inefficiencies. Our AI forecasting optimized inventory and production cycles, helping them save costs and deliver faster.",
    impact: [
      "40% Less Inventory Waste",
      "35% Faster Production",
      "20% More Accurate Forecasting",
      "25% Faster Fulfillment",
    ],
  },
  {
    image: "/assets/CDxS3e61UksiMm0oJGi80w7vEA.jpeg",
    alt: "Healthcare logistics case study",
    headline:
      "“AI-powered workflows reduced error rate by 80% in daily operations”",
    body: "A healthcare logistics company, was dealing with frequent data errors and delays. We introduced AI validation and live tracking to improve accuracy and speed across their supply chain.",
    impact: [
      "80% Error reduction",
      "90% Accuracy in Data Logs",
      "30% Faster Delivery",
      "60+ Hours Saved",
    ],
  },
  {
    image: "/assets/JK0fwwNQempKT9E5v6SvIj81ag.jpeg",
    alt: "Financial services firm case study",
    headline: "“Automating 50% of operations saved 20% in costs within 2 months”",
    body: "A financial services firm, was overloaded with repetitive admin tasks. By automating internal workflows and integrating data systems, they streamlined operations and reduced overhead.",
    impact: [
      "50% Operations Automated",
      "20% Cost Reduction",
      "70+ Hours Saved/Month",
      "2x Faster Client Onboarding",
    ],
  },
  {
    image: "/assets/TbStOE6QtWLglNJaSOxQJqyQJOE.jpeg",
    alt: "ScaleByte startup sales case study",
    headline: "“AI integration helped a StartUp close 3x more deals in less time”",
    body: "ScaleByte’s sales team struggled with follow-up delays. Our AI sales assistant automated outreach, lead scoring, and CRM updates—resulting in faster responses and more closed deals.",
    impact: [
      "3x More Deals",
      "40% Faster Responses",
      "95% Lead Accuracy",
      "CRM Fully Synced",
    ],
  },
];

function CaseCard({ c }: { c: Case }) {
  return (
    <article
      className="card-surface relative shrink-0 overflow-hidden flex"
      style={{ width: 1000, height: 490 }}
    >
      {/* Left: image */}
      <div className="relative w-[420px] h-full shrink-0 m-3 rounded-2xl overflow-hidden">
        <Image
          src={c.image}
          alt={c.alt}
          fill
          sizes="420px"
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Right: content */}
      <div className="flex-1 px-8 py-9 flex flex-col">
        <p className="font-display font-medium tracking-tight text-[32px] leading-[1.12] text-white">
          {c.headline}
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-white/55 max-w-[460px]">
          {c.body}
        </p>

        <div className="mt-auto">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/45 mb-3">
            Impact :
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {c.impact.map((i) => (
              <div
                key={i}
                className="px-4 py-3 rounded-xl bg-white/[0.035] border border-white/[0.06] text-[13px] text-white/85"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Cases() {
  // Duplicate the array for seamless marquee loop (animation goes 0 -> -50%).
  const loop = [...CASES, ...CASES];

  return (
    <section id="cases" className="relative py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Case Studies"
          title={<>See How Smart AI Automation Transforms Businesses</>}
          sub="See how AI automation streamlines operations, boosts and drives growth."
        />
      </div>

      {/* Marquee track — full-bleed so cards can extend past the container */}
      <div className="relative mt-16">
        <div className="overflow-hidden">
          <div
            className="animate-marquee flex gap-6 w-max will-change-transform"
            style={{ paddingInline: "1rem" }}
          >
            {loop.map((c, idx) => (
              <CaseCard key={`${c.headline}-${idx}`} c={c} />
            ))}
          </div>
        </div>

        {/* DRAG TO EXPLORE pill */}
        <div className="pointer-events-none absolute right-6 bottom-[-1.25rem] z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur text-[10px] uppercase tracking-[0.22em] text-white/70">
            <span>Drag to explore</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h13M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
