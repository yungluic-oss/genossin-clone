import { ArrowUpRight } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden px-4 pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      {/* Subtle neon glow background — top */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[16%] h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(57,255,20,0.18), transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Composition */}
      <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center text-center">
        {/* Nameplate eyebrow */}
        <a
          href="#cases"
          className="group skeo-nameplate font-display"
        >
          <span className="led-green animate-neon" style={{ width: 8, height: 8 }} />
          Schweizer Software- & App-Studio
          <ArrowUpRight className="h-3 w-3 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* H1 */}
        <h1
          className="font-display headline-engraved mt-7 font-semibold text-balance"
          style={{ letterSpacing: "-2.6px" }}
        >
          <span className="block text-[44px] leading-[1.04] sm:text-6xl sm:leading-[1.04] md:text-[78px] md:leading-[1.03]">
            Wir bauen Software,
          </span>
          <span className="block text-[44px] leading-[1.04] sm:text-6xl sm:leading-[1.04] md:text-[78px] md:leading-[1.03]">
            die{" "}
            <span
              className="relative inline-block px-1"
              style={{
                color: "#0a4a00",
                textShadow:
                  "0 1px 0 rgba(255,255,255,0.7), 0 0 18px rgba(57,255,20,0.55)",
              }}
            >
              echte Wirkung
              <span
                aria-hidden
                className="absolute inset-x-1 -bottom-1 h-[6px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #39ff14, transparent)",
                  boxShadow: "0 0 16px rgba(57,255,20,0.7)",
                }}
              />
            </span>{" "}
            hat.
          </span>
        </h1>

        {/* Sub */}
        <p className="engraved mt-7 max-w-[640px] text-[17px] font-medium leading-[1.55] text-[var(--color-ink-3)] sm:text-[18px]">
          Web-Apps, Mobile-Apps und AI-Integrationen — vom ersten Workshop
          bis zum produktiven Produkt. Aus Zürich, für die Schweiz und darüber
          hinaus.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-3">
          <a
            href="#contact"
            className="skeo-btn-neon group text-[14px]"
            style={{ padding: "14px 22px" }}
          >
            <span className="led-green" style={{ width: 8, height: 8 }} />
            Projekt starten
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#services"
            className="skeo-btn-ghost group text-[14px]"
            style={{ padding: "14px 22px" }}
          >
            Leistungen ansehen
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-7 text-[12.5px] text-[var(--color-ink-3)]">
          Kein Vertrieb. Ein 30-min Erstgespräch, kostenlos und unverbindlich.
        </p>

        {/* Product visual */}
        <div className="relative mt-16 w-full max-w-[980px]">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      {/* Neon halo behind */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -top-6 -bottom-6 rounded-[40px]"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 0%, rgba(57,255,20,0.22), transparent 65%)",
        }}
      />

      <div
        className="skeo-raised skeo-gloss relative overflow-hidden"
        style={{ borderRadius: 22 }}
      >
        {/* Window chrome — raised top bar */}
        <div
          className="relative flex items-center justify-between px-4 py-3"
          style={{
            background: "linear-gradient(180deg, #f6f4eb 0%, #e0ddd2 100%)",
            borderBottom: "1px solid rgba(0,0,0,0.12)",
            boxShadow: "0 1px 0 0 rgba(255,255,255,0.7) inset",
          }}
        >
          <div className="flex items-center gap-1.5">
            <SkeuoDot color="#ff5f56" />
            <SkeuoDot color="#ffbd2e" />
            <SkeuoDot color="#27c93f" />
          </div>
          <div
            className="hidden rounded-md px-3 py-1 text-[11px] text-[var(--color-ink-3)] sm:block skeo-inset"
            style={{ borderRadius: 8 }}
          >
            app.starsolutions.ch
          </div>
          <div className="text-[11px] text-[var(--color-ink-3)]">v1.0 · live</div>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <div
            className="hidden p-4 md:block"
            style={{
              borderRight: "1px solid rgba(0,0,0,0.1)",
              background: "linear-gradient(180deg, #f1efe6 0%, #e6e3d8 100%)",
              boxShadow: "1px 0 0 0 rgba(255,255,255,0.7) inset",
            }}
          >
            <div
              className="skeo-inset mb-4 flex items-center gap-2 px-2.5 py-2"
              style={{ borderRadius: 10 }}
            >
              <span
                className="grid h-7 w-7 place-items-center rounded-md text-[11px] font-semibold"
                style={{
                  background:
                    "linear-gradient(180deg, #8dff5e 0%, #39ff14 60%, #20d400 100%)",
                  border: "1px solid #1a7a00",
                  color: "#0a2a00",
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,0.6) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 0 8px rgba(57,255,20,0.5)",
                }}
              >
                S
              </span>
              <div className="min-w-0">
                <p className="truncate text-[12px] font-medium text-[var(--color-ink)]">
                  Star Solutions
                </p>
                <p className="truncate text-[10px] text-[var(--color-ink-3)]">
                  Production
                </p>
              </div>
            </div>
            <p className="mb-2 px-2 text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-3)]">
              Workspace
            </p>
            <ul className="space-y-1 text-[12.5px]">
              {[
                { l: "Dashboard", active: true },
                { l: "Projekte", active: false },
                { l: "Kunden", active: false },
                { l: "Integrations", active: false },
                { l: "Einstellungen", active: false },
              ].map((i) =>
                i.active ? (
                  <li
                    key={i.l}
                    className="skeo-raised-sm flex items-center gap-2 px-2.5 py-1.5 text-[var(--color-ink)]"
                    style={{ borderRadius: 8 }}
                  >
                    <span className="led-green" style={{ width: 7, height: 7 }} />
                    {i.l}
                  </li>
                ) : (
                  <li
                    key={i.l}
                    className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[var(--color-ink-3)] hover:bg-black/[0.03]"
                  >
                    <span className="led-off" style={{ width: 7, height: 7 }} />
                    {i.l}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Main */}
          <div
            className="p-5"
            style={{
              background: "linear-gradient(180deg, #faf8ef 0%, #efece2 100%)",
            }}
          >
            {/* Stats — inset display windows */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { k: "MRR", v: "CHF 84.2k", d: "+18 %" },
                { k: "Aktive Nutzer", v: "12'487", d: "+6 %" },
                { k: "Ø Antwortzeit", v: "92 ms", d: "−14 %" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="skeo-inset p-3 text-center"
                  style={{ borderRadius: 12 }}
                >
                  <p className="text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
                    {s.k}
                  </p>
                  <p
                    className="font-display mt-1.5"
                    style={{
                      fontSize: 20,
                      letterSpacing: "-0.5px",
                      color: "#0a4a00",
                      textShadow:
                        "0 1px 0 rgba(255,255,255,0.7), 0 0 6px rgba(57,255,20,0.4)",
                      fontFamily:
                        "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
                      fontWeight: 600,
                    }}
                  >
                    {s.v}
                  </p>
                  <p className="mt-1 text-[10px] font-medium text-[#1fa800]">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart panel */}
            <div
              className="skeo-inset mt-4 p-4"
              style={{ borderRadius: 14 }}
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[12px] font-medium text-[var(--color-ink-2)]">
                  Performance · letzte 30 Tage
                </p>
                <div className="flex items-center gap-3 text-[10px] text-[var(--color-ink-3)]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="led-green" style={{ width: 6, height: 6 }} />
                    Conversion
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="inline-block"
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 999,
                        background:
                          "radial-gradient(circle at 35% 30%, #555 0%, #0a0a0a 70%)",
                        boxShadow:
                          "0 0 0 1px rgba(0,0,0,0.2), 0 1px 1px rgba(255,255,255,0.5)",
                      }}
                    />
                    Signups
                  </span>
                </div>
              </div>
              <Sparkline />
            </div>

            {/* Activity feed */}
            <div className="mt-4 space-y-1.5">
              {[
                { l: "Deploy → production", m: "vor 2 Min.", t: "led" },
                { l: "Stripe webhook integriert", m: "heute, 09:42", t: "muted" },
                { l: "Schema-Migration #142", m: "gestern", t: "muted" },
              ].map((r) => (
                <div
                  key={r.l}
                  className="skeo-raised-sm flex items-center justify-between px-3 py-2.5"
                  style={{ borderRadius: 10 }}
                >
                  <span className="flex items-center gap-2.5 text-[12.5px] text-[var(--color-ink)]">
                    {r.t === "led" ? (
                      <span className="led-green" style={{ width: 7, height: 7 }} />
                    ) : (
                      <span className="led-off" style={{ width: 7, height: 7 }} />
                    )}
                    {r.l}
                  </span>
                  <span className="text-[11px] text-[var(--color-ink-3)]">
                    {r.m}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkeuoDot({ color }: { color: string }) {
  return (
    <span
      className="inline-block"
      style={{
        width: 12,
        height: 12,
        borderRadius: 999,
        background: `radial-gradient(circle at 35% 30%, #ffffff 0%, ${color} 60%, rgba(0,0,0,0.4) 100%)`,
        boxShadow:
          "0 0 0 1px rgba(0,0,0,0.15), 0 1px 1px rgba(0,0,0,0.2) inset",
      }}
    />
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 600 140" className="h-32 w-full" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[30, 70, 110].map((y) => (
        <line
          key={y}
          x1="0"
          x2="600"
          y1={y}
          y2={y}
          stroke="rgba(0,0,0,0.06)"
          strokeDasharray="3 5"
        />
      ))}
      <path
        d="M0 90 C 60 80, 120 60, 180 65 S 300 35, 360 40 S 480 18, 600 28 L600 140 L0 140 Z"
        fill="url(#g1)"
      />
      <path
        d="M0 90 C 60 80, 120 60, 180 65 S 300 35, 360 40 S 480 18, 600 28"
        fill="none"
        stroke="#1fa800"
        strokeWidth="2.5"
        style={{ filter: "drop-shadow(0 0 6px rgba(57,255,20,0.7))" }}
      />
      <path
        d="M0 110 C 80 100, 140 90, 220 88 S 340 70, 420 75 S 540 55, 600 60 L600 140 L0 140 Z"
        fill="url(#g2)"
      />
      <path
        d="M0 110 C 80 100, 140 90, 220 88 S 340 70, 420 75 S 540 55, 600 60"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
    </svg>
  );
}
