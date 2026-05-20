const STATS = [
  { v: "40+", l: "Produkte ausgeliefert" },
  { v: "8", l: "Jahre Engineering" },
  { v: "20+", l: "Technologien im Stack" },
  { v: "100%", l: "Code-Übergabe an Kunden" },
];

export default function Stats() {
  return (
    <section aria-label="Zahlen" className="relative px-4 py-14">
      <div
        className="skeo-raised relative mx-auto max-w-[1100px] overflow-hidden"
        style={{ borderRadius: 22 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.l}
              className="relative px-6 py-9 text-center sm:px-8 sm:py-11"
              style={{
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(0,0,0,0.08)"
                    : undefined,
                boxShadow:
                  i < STATS.length - 1
                    ? "1px 0 0 0 rgba(255,255,255,0.8)"
                    : undefined,
              }}
            >
              <div
                className="skeo-inset mx-auto inline-flex min-w-[110px] items-center justify-center px-5 py-3"
                style={{ borderRadius: 12 }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 40px)",
                    letterSpacing: "-1px",
                    lineHeight: 1,
                    fontWeight: 700,
                    color: "#0a4a00",
                    textShadow:
                      "0 1px 0 rgba(255,255,255,0.7), 0 0 12px rgba(57,255,20,0.45)",
                    fontFamily:
                      "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
                  }}
                >
                  {s.v}
                </span>
              </div>
              <p className="engraved mt-4 text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-3)]">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
