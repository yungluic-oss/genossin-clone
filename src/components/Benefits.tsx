import { SectionHeader } from "./Services";

// Inline SVGs scoped to this section. Stroked, currentColor, 1.6px stroke, 20px box.
// Style tuned to match the live tile aesthetic: small accent icon on dark inset.

type IconProps = React.SVGProps<SVGSVGElement>;

const baseSvg: IconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function IconChartUp(props: IconProps) {
  return (
    <svg {...baseSvg} {...props}>
      <path d="M3 20h18" />
      <rect x="5" y="13" width="3.2" height="6" rx="0.6" />
      <rect x="10.4" y="9" width="3.2" height="10" rx="0.6" />
      <rect x="15.8" y="5" width="3.2" height="14" rx="0.6" />
      <path d="M5 9l4-3 4 3 5-4" />
      <path d="M14 2h4v4" />
    </svg>
  );
}

function IconSmile(props: IconProps) {
  return (
    <svg {...baseSvg} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14c.9 1.4 2.1 2.1 3.5 2.1S14.6 15.4 15.5 14" />
      <circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconClock(props: IconProps) {
  return (
    <svg {...baseSvg} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

function IconCoin(props: IconProps) {
  return (
    <svg {...baseSvg} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.2c-.6-.7-1.5-1.1-2.5-1.1-1.7 0-3 1-3 2.3 0 1.2 1 1.9 2.7 2.3l.6.1c1.7.4 2.7 1.1 2.7 2.3 0 1.3-1.3 2.3-3 2.3-1.1 0-2.1-.5-2.7-1.2" />
      <path d="M12 6v1.6M12 17.4V19" />
    </svg>
  );
}

function IconLightbulb(props: IconProps) {
  return (
    <svg {...baseSvg} {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2v.1h5v-.1c0-.8.4-1.5 1-2A6 6 0 0012 3z" />
    </svg>
  );
}

function IconScale(props: IconProps) {
  return (
    <svg {...baseSvg} {...props}>
      <path d="M3 17l6-6 4 4 8-9" />
      <path d="M14 6h7v7" />
    </svg>
  );
}

const ITEMS: { icon: React.ReactNode; title: string; body: string }[] = [
  {
    icon: <IconChartUp />,
    title: "Increased Productivity",
    body: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
  },
  {
    icon: <IconSmile />,
    title: "Better Customer Experience",
    body: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
  },
  {
    icon: <IconClock />,
    title: "24/7 Availability",
    body: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
  },
  {
    icon: <IconCoin />,
    title: "Cost Reduction",
    body: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
  },
  {
    icon: <IconLightbulb />,
    title: "Data-Driven Insights",
    body: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
  },
  {
    icon: <IconScale />,
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
          // Preserve the double-space between "AI" and "for" exactly as on live.
          title={<>{"The Key Benefits of AI  for Your Business Growth"}</>}
          sub="Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl p-6 bg-ink-2 border border-white/[0.08] hover:border-white/15 transition-colors"
            >
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-lg border border-accent/40 text-accent bg-accent/[0.06]">
                {b.icon}
              </span>
              <h3 className="mt-5 font-display text-[22px] leading-tight tracking-tight text-white">
                {b.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
