import {
  Gauge,
  Lock,
  Coins,
  TrendingUp,
  Users,
  Puzzle as PuzzleIcon,
} from "@/components/icons";
import { SectionHeader } from "./Services";

const ITEMS = [
  {
    icon: <Gauge className="w-4 h-4" />,
    title: "Faster everything",
    body: "Cut hours from repetitive work — drafts, reports, follow-ups, triage — across every team.",
  },
  {
    icon: <Coins className="w-4 h-4" />,
    title: "Real ROI, fast",
    body: "Most engagements pay for themselves in the first quarter. We track it, you see it.",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "Built to scale",
    body: "Systems that hold up at 10× volume — without 10× the headcount or chaos.",
  },
  {
    icon: <Lock className="w-4 h-4" />,
    title: "Private by default",
    body: "Your data stays where it lives. Self-hosted options, audit logs, and clear permissions.",
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "Adopted by your team",
    body: "We build for the humans using it — onboarding, training, and small wins from week one.",
  },
  {
    icon: <PuzzleIcon className="w-4 h-4" />,
    title: "Fits your stack",
    body: "Drops into the tools you already use — no rip-and-replace, no migration drama.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-28 px-4">
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Benefits"
          title={
            <>
              The key benefits of AI for
              <br className="hidden sm:block" /> your business growth
            </>
          }
          sub="Why teams stop running on caffeine and chaos once the right automations are in place."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITEMS.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl p-7 bg-white/[0.025] border border-white/[0.07] hover:border-white/15 transition-colors"
            >
              <span className="inline-flex w-9 h-9 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                {b.icon}
              </span>
              <h3 className="mt-5 font-display text-xl tracking-tight">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
