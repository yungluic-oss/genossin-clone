import { ArrowUpRight } from "@/components/icons";
import { SectionHeader } from "./Services";

const CASES = [
  {
    tag: "Customer support",
    title: "Cut response time by 68% for a SaaS support team",
    metric: "−68% TTFR",
    body: "A multi-channel AI agent triages tickets, drafts replies, and routes anything sensitive to a human in under 30 seconds.",
    accent: "violet" as const,
  },
  {
    tag: "Operations",
    title: "200 hours/month back for an ecommerce ops crew",
    metric: "+200 hrs / mo",
    body: "Replaced six spreadsheet rituals with one automated pipeline — inventory, refunds, supplier outreach, all hands-off.",
    accent: "lime" as const,
  },
  {
    tag: "Sales",
    title: "3x more qualified meetings booked for an outbound team",
    metric: "3× meetings",
    body: "Enrichment, sequencing, and personalized first lines — generated daily, reviewed in five minutes by the AE.",
    accent: "pink" as const,
  },
  {
    tag: "Internal tools",
    title: "An ops copilot trained on every doc, ticket, and SOP",
    metric: "1 source of truth",
    body: "A custom RAG assistant the team actually uses — cited answers across Notion, Slack, Drive, and Linear.",
    accent: "white" as const,
  },
];

export default function Cases() {
  return (
    <section id="cases" className="relative py-28 px-4">
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Case studies"
          title={
            <>
              See how smart automation
              <br className="hidden sm:block" /> transforms businesses
            </>
          }
          sub="A few of the engagements that gave teams their time, focus, and pipeline back."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="card-surface p-7 group relative overflow-hidden hover:border-white/15 transition-colors"
            >
              <div
                aria-hidden
                className={`absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-25 ${
                  {
                    violet: "bg-violet",
                    lime: "bg-accent",
                    pink: "bg-pink",
                    white: "bg-white",
                  }[c.accent]
                }`}
              />
              <div className="relative flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {c.tag}
                </span>
                <span className="font-display text-sm text-white/55">
                  Case study
                </span>
              </div>
              <p className="relative mt-7 font-display text-3xl tracking-tight leading-[1.15]">
                {c.title}
              </p>
              <p className="relative mt-3 text-sm text-white/60 leading-relaxed">
                {c.body}
              </p>
              <div className="relative mt-7 flex items-end justify-between">
                <p className="font-display text-4xl tracking-tight text-accent">
                  {c.metric}
                </p>
                <button className="inline-flex items-center gap-1.5 text-sm text-white/75 hover:text-white">
                  Read more
                  <span className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-white/[0.05] border border-white/10 group-hover:bg-accent group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
