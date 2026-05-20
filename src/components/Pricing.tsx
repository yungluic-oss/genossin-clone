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
          <span className="skeo-nameplate font-display">
            <span className="led-green" style={{ width: 7, height: 7 }} />
            Preise
          </span>
          <h2
            className="font-display headline-engraved mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(32px, 4vw, 50px)",
              lineHeight: "1.1",
              letterSpacing: "-2px",
              fontWeight: 500,
            }}
          >
            Drei klare Wege,
            <br className="hidden sm:block" /> mit uns zu arbeiten.
          </h2>
          <p className="engraved mt-5 max-w-xl text-base text-[var(--color-ink-3)] sm:text-lg">
            Keine Stundensätze, keine Überraschungen. Wählen Sie das Modell,
            das zu Ihrem Projekt passt — wir passen den Scope an.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={`skeo-raised relative flex flex-col p-7 ${
                t.highlight ? "neon-ring" : ""
              }`}
              style={{
                borderRadius: 22,
                transform: t.highlight ? "translateY(-8px)" : undefined,
              }}
            >
              {t.highlight ? (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-2 -z-10"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 0%, rgba(57,255,20,0.32), transparent 70%)",
                    borderRadius: 28,
                    filter: "blur(20px)",
                  }}
                />
              ) : null}

              <div className="flex items-center justify-between">
                <h3
                  className="font-display headline-engraved text-[22px] tracking-tight"
                  style={{ fontWeight: 600 }}
                >
                  {t.name}
                </h3>
                {t.highlight ? (
                  <span
                    className="font-display rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold"
                    style={{
                      background:
                        "linear-gradient(180deg, #8dff5e 0%, #39ff14 60%, #20d400 100%)",
                      border: "1px solid #1a7a00",
                      color: "#0a2a00",
                      boxShadow:
                        "0 1px 0 rgba(255,255,255,0.6) inset, 0 0 10px rgba(57,255,20,0.55)",
                    }}
                  >
                    Beliebt
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-ink-3)]">
                {t.blurb}
              </p>

              <div
                className="skeo-inset mt-6 px-4 py-3 text-center"
                style={{ borderRadius: 12 }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: 28,
                    letterSpacing: "-0.8px",
                    fontWeight: 700,
                    color: "#0a4a00",
                    textShadow:
                      "0 1px 0 rgba(255,255,255,0.7), 0 0 8px rgba(57,255,20,0.4)",
                    fontFamily:
                      "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
                  }}
                >
                  {t.price}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
                  {t.cadence}
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[13.5px] text-[var(--color-ink-2)]"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#1fa800]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group mt-7 ${
                  t.highlight ? "skeo-btn-neon" : "skeo-btn-ghost"
                } w-full text-[13px]`}
                style={{ padding: "12px 16px" }}
              >
                {t.highlight ? (
                  <span className="led-green" style={{ width: 7, height: 7 }} />
                ) : null}
                {t.cta}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-[13px] text-[var(--color-ink-3)]">
          Eigene Anforderungen?{" "}
          <a
            href="#contact"
            className="font-medium text-[var(--color-ink)] underline-offset-4 hover:underline"
          >
            Kontaktieren Sie uns
          </a>{" "}
          — wir machen Ihnen ein massgeschneidertes Angebot.
        </p>
      </div>
    </section>
  );
}
