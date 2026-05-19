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
    icon: <TrendingUp className="w-4 h-4" />,
    title: "Increased Productivity",
    body: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "Better Customer Experience",
    body: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
  },
  {
    icon: <Gauge className="w-4 h-4" />,
    title: "24/7 Availability",
    body: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
  },
  {
    icon: <Coins className="w-4 h-4" />,
    title: "Cost Reduction",
    body: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
  },
  {
    icon: <Lock className="w-4 h-4" />,
    title: "Data-Driven Insights",
    body: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
  },
  {
    icon: <PuzzleIcon className="w-4 h-4" />,
    title: "Scalability & Growth",
    body: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-28 px-4">
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Benefits"
          title={<>The Key Benefits of AI for Your Business Growth</>}
          sub="Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes."
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
