const STATS = [
  { v: "40+", l: "Produkte ausgeliefert" },
  { v: "8", l: "Jahre Engineering" },
  { v: "20+", l: "Technologien im Stack" },
  { v: "100%", l: "Code-Übergabe an Kunden" },
];

export default function Stats() {
  return (
    <section aria-label="Zahlen" className="relative py-16 px-4">
      <div className="relative mx-auto max-w-[1100px]">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.l}
              className="bg-[#0a0a0d] p-6 text-center sm:p-8"
            >
              <p
                className="font-display text-white"
                style={{
                  fontSize: "clamp(34px, 4vw, 48px)",
                  letterSpacing: "-1.5px",
                  lineHeight: 1,
                  fontWeight: 500,
                }}
              >
                {s.v}
              </p>
              <p className="mt-3 text-[12px] uppercase tracking-[0.18em] text-white/55">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
