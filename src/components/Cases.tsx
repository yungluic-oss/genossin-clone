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
    alt: "Fallstudie: Schweizer Kofferhersteller",
    headline: "„AI-gestützte Prognosen reduzierten Lagerabfall um 40 %.“",
    body: "Eine Schweizer Kofferherstellerin kämpfte mit Lager- und Effizienzproblemen. Unsere AI-Prognose optimierte Bestand und Produktionszyklen — kosteneffizient und schnell.",
    impact: [
      "40 % weniger Lagerabfall",
      "35 % schnellere Produktion",
      "20 % präzisere Prognosen",
      "25 % schnellere Auslieferung",
    ],
  },
  {
    image: "/assets/CDxS3e61UksiMm0oJGi80w7vEA.jpeg",
    alt: "Fallstudie: Healthcare-Logistik",
    headline:
      "„AI-Workflows reduzierten die Fehlerquote im Tagesgeschäft um 80 %.“",
    body: "Ein Logistikunternehmen im Gesundheitswesen hatte mit Datenfehlern und Verzögerungen zu kämpfen. Wir führten AI-Validierung und Live-Tracking ein — für Präzision und Tempo in der gesamten Lieferkette.",
    impact: [
      "80 % weniger Fehler",
      "90 % Datenqualität",
      "30 % schnellere Lieferung",
      "60+ Stunden gespart",
    ],
  },
  {
    image: "/assets/JK0fwwNQempKT9E5v6SvIj81ag.jpeg",
    alt: "Fallstudie: Finanzdienstleister",
    headline: "„50 % der Abläufe automatisiert — 20 % Kostensenkung in zwei Monaten.“",
    body: "Ein Finanzdienstleister war von repetitiven Admin-Aufgaben überlastet. Durch Workflow-Automatisierung und integrierte Datensysteme wurden Abläufe verschlankt und Gemeinkosten gesenkt.",
    impact: [
      "50 % Prozesse automatisiert",
      "20 % Kosten reduziert",
      "70+ Stunden / Monat gespart",
      "2× schnelleres Kunden-Onboarding",
    ],
  },
  {
    image: "/assets/TbStOE6QtWLglNJaSOxQJqyQJOE.jpeg",
    alt: "Fallstudie: Startup im Vertrieb",
    headline: "„AI-Integration half einem Startup, 3× mehr Deals in kürzerer Zeit abzuschliessen.“",
    body: "Das Vertriebsteam kämpfte mit verzögerten Follow-ups. Unser AI-Vertriebsassistent automatisierte Ansprache, Lead-Scoring und CRM-Updates — schnellere Antworten, mehr Abschlüsse.",
    impact: [
      "3× mehr Abschlüsse",
      "40 % schnellere Antworten",
      "95 % Lead-Qualität",
      "CRM vollständig synchronisiert",
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
          <h2
            className="font-display max-w-3xl"
            style={{
              fontSize: "clamp(32px, 4vw, 50px)",
              lineHeight: "1.1",
              letterSpacing: "-2px",
              fontWeight: 400,
            }}
          >
            So verändert smarte AI-Automatisierung Unternehmen
          </h2>
          <p className="mt-5 max-w-xl text-white/60 text-base sm:text-lg">
            Wie AI-Automatisierung Abläufe verschlankt, Effizienz steigert und
            Wachstum ermöglicht.
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
