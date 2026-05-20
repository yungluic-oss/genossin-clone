type Quote = {
  body: string;
  name: string;
  role: string;
  initials: string;
};

const QUOTES: Quote[] = [
  {
    body:
      "Star Solutions hat unser MVP in sechs Wochen geliefert — sauber dokumentiert, vollständig getestet und so gebaut, dass unser Inhouse-Team es weiterführen kann. Selten so unkompliziert mit einer Agentur gearbeitet.",
    name: "Lukas Brunner",
    role: "CTO, FinTech-Startup",
    initials: "LB",
  },
  {
    body:
      "Wir wollten unser internes Tool nicht mehr selbst patchen. Das Team hat zugehört, die wirklich kritischen Workflows priorisiert und ein Dashboard gebaut, das unser Operations-Team täglich nutzt.",
    name: "Anna Hofer",
    role: "Head of Ops, Logistikfirma",
    initials: "AH",
  },
  {
    body:
      "Die AI-Integration war für uns Neuland. Star Solutions hat den Use Case sauber strukturiert, einen Prototyp gebaut und dann skaliert — ohne Hype, mit messbarem Mehrwert.",
    name: "Marc Schenker",
    role: "Gründer, B2B-SaaS",
    initials: "MS",
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
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Stimmen
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
            Was unsere Kunden über die
            <br className="hidden sm:block" /> Zusammenarbeit sagen
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {QUOTES.map((q) => (
            <article
              key={q.name}
              className="relative flex flex-col rounded-2xl border border-white/[0.06] bg-[#0c0c10] p-6"
            >
              <svg
                aria-hidden
                className="h-7 w-7 text-white/15"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M9.4 22.4c-2.5 0-4.4-2-4.4-4.4 0-5.5 4.6-9.6 9.4-10.4l.6 2.6c-3 .8-5.6 3.4-5.6 5.4 2.5 0 4.4 2 4.4 4.4S11.9 22.4 9.4 22.4zm13.2 0c-2.5 0-4.4-2-4.4-4.4 0-5.5 4.6-9.6 9.4-10.4l.6 2.6c-3 .8-5.6 3.4-5.6 5.4 2.5 0 4.4 2 4.4 4.4S25.1 22.4 22.6 22.4z" />
              </svg>
              <p className="mt-3 text-[15px] leading-[1.6] text-white/80">
                {q.body}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.05] pt-5">
                <div
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[11px] font-medium text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-violet) 0%, var(--color-accent-strong) 100%)",
                  }}
                >
                  {q.initials}
                </div>
                <div>
                  <p className="text-[13.5px] font-medium text-white">{q.name}</p>
                  <p className="text-[12px] text-white/50">{q.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
