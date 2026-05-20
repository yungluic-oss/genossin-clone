import { ArrowUpRight, CheckCircle } from "@/components/icons";

type Tier = {
  name: string;
  blurb: string;
  price: string;
  cadence: string;
  features: string[];
  highlight?: boolean;
  cta: string;
};

const TIERS: Tier[] = [
  {
    name: "AI-Sprint",
    blurb:
      "Eine fokussierte Integration in 2 – 3 Wochen: AI-Agent, RAG-Pipeline oder Workflow.",
    price: "ab CHF 8'500",
    cadence: "Fixpreis",
    features: [
      "1 Use Case, sauber umgesetzt",
      "Anbindung an Ihre Datenquellen",
      "Evaluations- und Test-Suite",
      "Übergabe inkl. Dokumentation",
    ],
    cta: "AI-Sprint anfragen",
  },
  {
    name: "MVP-Build",
    blurb:
      "Vom Konzept zum produktiven MVP. Web-App, Mobile-App oder Plattform.",
    price: "ab CHF 28'000",
    cadence: "Fixpreis, 6 – 10 Wochen",
    features: [
      "Discovery, Design, Build, Launch",
      "Authentifizierung, Billing, Admin",
      "CI/CD und Monitoring eingerichtet",
      "Sie behalten den vollständigen Code",
    ],
    highlight: true,
    cta: "MVP starten",
  },
  {
    name: "Studio-Retainer",
    blurb:
      "Ihr externes Engineering-Team — laufende Entwicklung, Wartung und Features.",
    price: "ab CHF 6'500",
    cadence: "pro Monat",
    features: [
      "Dediziertes Team-Kapazitäts-Slot",
      "Wöchentliche Demos und Roadmap",
      "Bugs, Releases, Performance",
      "Monatlich kündbar, ohne Mindestlaufzeit",
    ],
    cta: "Retainer besprechen",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-28">
      <div className="relative mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Preise
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
            Drei klare Wege,
            <br className="hidden sm:block" /> mit uns zu arbeiten.
          </h2>
          <p className="mt-5 max-w-xl text-white/60 text-base sm:text-lg">
            Keine Stundensätze, keine Überraschungen. Wählen Sie das Modell,
            das zu Ihrem Projekt passt — wir passen den Scope an.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                t.highlight
                  ? "border-accent/30 bg-gradient-to-b from-[#0f1318] to-[#0a0a0e]"
                  : "border-white/[0.06] bg-[#0c0c10]"
              }`}
            >
              {t.highlight ? (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(191,212,222,0.25) 0%, transparent 40%, rgba(74,115,200,0.25) 100%)",
                    mask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: 1,
                    borderRadius: 16,
                  }}
                />
              ) : null}

              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[22px] tracking-tight text-white">
                    {t.name}
                  </h3>
                  {t.highlight ? (
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-accent">
                      Beliebt
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-white/55">
                  {t.blurb}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className="font-display text-white"
                    style={{
                      fontSize: "32px",
                      letterSpacing: "-1px",
                      fontWeight: 500,
                    }}
                  >
                    {t.price}
                  </span>
                </div>
                <p className="mt-1 text-[12px] text-white/45">{t.cadence}</p>

                <ul className="mt-6 space-y-3 border-t border-white/[0.05] pt-5">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[13.5px] text-white/80"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`group mt-7 inline-flex w-full items-center justify-center gap-1.5 rounded-[10px] px-4 py-3 text-[13px] font-medium transition-[filter,transform] ${
                    t.highlight
                      ? "bg-accent text-black hover:brightness-95"
                      : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.07]"
                  }`}
                >
                  {t.cta}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-white/50">
          Eigene Anforderungen?{" "}
          <a
            href="#contact"
            className="text-white/85 underline-offset-4 hover:underline"
          >
            Kontaktieren Sie uns
          </a>{" "}
          — wir machen Ihnen ein massgeschneidertes Angebot.
        </p>
      </div>
    </section>
  );
}
