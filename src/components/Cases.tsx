import Image from "next/image";

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
    alt: "Fallstudie: B2B-SaaS Plattform",
    headline: "„MVP in 6 Wochen — 1'200 zahlende Nutzer in den ersten 90 Tagen.“",
    body: "Ein B2B-SaaS-Startup brauchte einen schnellen Markteintritt. Wir lieferten Auth, Stripe-Billing, Admin-Dashboard und Onboarding in 6 Wochen — alles in TypeScript, vollständig getestet.",
    impact: [
      "1'200 zahlende Nutzer in 90 Tagen",
      "CHF 84k MRR nach 4 Monaten",
      "99.9 % Uptime",
      "Code zu 100 % im Kundenbesitz",
    ],
  },
  {
    image: "/assets/CDxS3e61UksiMm0oJGi80w7vEA.jpeg",
    alt: "Fallstudie: Logistik-Plattform",
    headline:
      "„Internes Operations-Tool ersetzte 3 Excel-Tabellen und 2 SaaS-Abos.“",
    body: "Ein Logistikunternehmen jonglierte zwischen Excel, Trello und einem unflexiblen SaaS. Wir bauten ein Custom-Dashboard mit Live-Tracking, Rollen-Permissions und Postgres-Backend — direkt an ihre Daten angebunden.",
    impact: [
      "3 Tools konsolidiert",
      "60+ Stunden / Monat gespart",
      "CHF 18k / Jahr SaaS-Kosten weg",
      "Onboarding für neue Mitarbeitende halbiert",
    ],
  },
  {
    image: "/assets/JK0fwwNQempKT9E5v6SvIj81ag.jpeg",
    alt: "Fallstudie: AI-Integration FinTech",
    headline: "„AI-Agent beantwortet 70 % der Support-Tickets autonom — geprüft auf Quellen.“",
    body: "Ein Finanzdienstleister wollte Support skalieren, ohne Qualität zu verlieren. Wir bauten einen Custom-RAG-Agent auf ihrer Wissensbasis mit Quellen-Verifikation und Eskalationspfaden zu menschlichen Agents.",
    impact: [
      "70 % Tickets autonom gelöst",
      "Ø Antwortzeit 6 Sek.",
      "Quellenangaben bei jeder Antwort",
      "Compliance-Trail vollständig",
    ],
  },
  {
    image: "/assets/TbStOE6QtWLglNJaSOxQJqyQJOE.jpeg",
    alt: "Fallstudie: Mobile App",
    headline: "„Cross-Platform App in 10 Wochen — 4.8 Sterne im App Store.“",
    body: "Ein Schweizer Lifestyle-Brand wollte eine App ohne separates iOS- und Android-Team. Mit React Native und Expo lieferten wir beide Plattformen in einem Codebase — inklusive Push, Auth und In-App-Käufen.",
    impact: [
      "iOS + Android · 1 Codebase",
      "4.8 ⭐ App-Store-Rating",
      "20'000+ Downloads im Q1",
      "OTA-Updates ohne Store-Review",
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
            Wirkung:
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
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Arbeiten
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
            Produkte, die wir gebaut haben —
            <br className="hidden sm:block" /> mit messbarem Ergebnis.
          </h2>
          <p className="mt-5 max-w-xl text-white/60 text-base sm:text-lg">
            Von der ersten Idee zum live-Produkt. Eine Auswahl der Software,
            die wir mit unseren Kunden ausgeliefert haben.
          </p>
        </div>
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

        {/* Drag-to-explore pill */}
        <div className="pointer-events-none absolute right-6 bottom-[-1.25rem] z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur text-[10px] uppercase tracking-[0.22em] text-white/70">
            <span>Ziehen zum Stöbern</span>
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
