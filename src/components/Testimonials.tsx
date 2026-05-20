type Quote = {
  body: string;
  name: string;
  role: string;
  initials: string;
  tilt: number;
};

const QUOTES: Quote[] = [
  {
    body:
      "Star Solutions hat unser MVP in sechs Wochen geliefert — sauber dokumentiert, vollständig getestet und so gebaut, dass unser Inhouse-Team es weiterführen kann. Selten so unkompliziert mit einer Agentur gearbeitet.",
    name: "Lukas Brunner",
    role: "CTO, FinTech-Startup",
    initials: "LB",
    tilt: -1.2,
  },
  {
    body:
      "Wir wollten unser internes Tool nicht mehr selbst patchen. Das Team hat zugehört, die wirklich kritischen Workflows priorisiert und ein Dashboard gebaut, das unser Operations-Team täglich nutzt.",
    name: "Anna Hofer",
    role: "Head of Ops, Logistikfirma",
    initials: "AH",
    tilt: 0.8,
  },
  {
    body:
      "Die AI-Integration war für uns Neuland. Star Solutions hat den Use Case sauber strukturiert, einen Prototyp gebaut und dann skaliert — ohne Hype, mit messbarem Mehrwert.",
    name: "Marc Schenker",
    role: "Gründer, B2B-SaaS",
    initials: "MS",
    tilt: -0.6,
  },
];

export default function Testimonials() {
  return (
    <section
      aria-label="Stimmen unserer Kunden"
      className="relative px-4 py-24"
    >
      <div className="relative mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center text-center">
          <span className="skeo-nameplate font-display">
            <span className="led-green" style={{ width: 7, height: 7 }} />
            Stimmen
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
            Was unsere Kunden über die
            <br className="hidden sm:block" /> Zusammenarbeit sagen
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {QUOTES.map((q) => (
            <article
              key={q.name}
              className="skeo-raised relative flex flex-col p-7"
              style={{
                borderRadius: 18,
                transform: `rotate(${q.tilt}deg)`,
              }}
            >
              <svg
                aria-hidden
                className="h-8 w-8"
                viewBox="0 0 32 32"
                fill="#5a7e00"
                style={{ opacity: 0.85 }}
              >
                <path d="M9.4 22.4c-2.5 0-4.4-2-4.4-4.4 0-5.5 4.6-9.6 9.4-10.4l.6 2.6c-3 .8-5.6 3.4-5.6 5.4 2.5 0 4.4 2 4.4 4.4S11.9 22.4 9.4 22.4zm13.2 0c-2.5 0-4.4-2-4.4-4.4 0-5.5 4.6-9.6 9.4-10.4l.6 2.6c-3 .8-5.6 3.4-5.6 5.4 2.5 0 4.4 2 4.4 4.4S25.1 22.4 22.6 22.4z" />
              </svg>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--color-ink-2)]">
                {q.body}
              </p>

              <hr className="skeo-groove my-5" />

              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[12px] font-semibold"
                  style={{ background: "#c4ff3a", color: "#1a2a00" }}
                >
                  {q.initials}
                </div>
                <div>
                  <p className="text-[13.5px] font-semibold text-[var(--color-ink)]">
                    {q.name}
                  </p>
                  <p className="text-[12px] text-[var(--color-ink-3)]">
                    {q.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
