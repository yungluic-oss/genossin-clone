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
    title: "Moderner Tech-Stack",
    body: "Next.js, TypeScript, Postgres, React Native — Technologien mit grosser Community, langer Lebensdauer und einfacher Hire-bility.",
  },
  {
    icon: <IconCoin />,
    title: "Sie besitzen den Code",
    body: "Kein Vendor-Lock-in. Das gesamte Repository, die CI/CD-Konfiguration und die Infrastruktur gehen am Ende vollständig in Ihren Besitz über.",
  },
  {
    icon: <IconClock />,
    title: "Speed-to-Launch",
    body: "Pragmatischer Scope, klare Sprints und ein erfahrenes Team. Erste Live-Version typischerweise nach 4 – 8 Wochen, nicht nach Quartalen.",
  },
  {
    icon: <IconScale />,
    title: "Skalierbar von Tag eins",
    body: "Wir entwickeln so, dass Ihr Produkt von 100 auf 100'000 Nutzer wachsen kann — ohne dass die Architektur neu geschrieben werden muss.",
  },
  {
    icon: <IconSmile />,
    title: "Design-led",
    body: "Bevor wir programmieren, designen wir. Klare UX, durchdachte Microinteractions und ein Look, der zu Ihrer Marke passt.",
  },
  {
    icon: <IconLightbulb />,
    title: "Langfristige Partnerschaft",
    body: "Nach dem Launch ist nicht Schluss. Wir bleiben verfügbar — als Retainer für Wartung und Features, oder per On-Demand-Abruf.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-28 px-4">
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Warum Star Solutions
          </span>
          <h2
            className="font-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(32px, 4vw, 50px)",
              lineHeight: "1.1",
              letterSpacing: "-2px",
              fontWeight: 400,
            }}
          >
            Sechs Gründe, warum Teams uns
            <br className="hidden sm:block" /> zur Software-Hand werden lassen.
          </h2>
          <p className="mt-5 max-w-xl text-white/60 text-base sm:text-lg">
            Wir sind klein genug, um direkt zu arbeiten — und erfahren genug,
            um Software zu liefern, die in Produktion bleibt.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((b) => (
            <div
              key={b.title}
              className="relative overflow-hidden rounded-2xl p-7 bg-[#0f0f12] border border-white/[0.06]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -right-20 w-56 h-56 rounded-full"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(74,115,200,0.18) 0%, rgba(74,115,200,0) 70%)",
                }}
              />
              <span className="relative inline-flex w-9 h-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/85">
                {b.icon}
              </span>
              <h3 className="relative mt-5 font-display text-[21px] leading-tight tracking-tight text-white">
                {b.title}
              </h3>
              <p className="relative mt-2 text-[14px] leading-relaxed text-white/55">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
