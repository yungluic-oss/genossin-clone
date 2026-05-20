import { ArrowUpRight } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden px-4 pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      {/* Background grid + glows */}
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 35%, #000 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 35%, #000 0%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[20%] h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(74,115,200,0.45), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[10%] h-[260px] w-[520px] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(191,212,222,0.45), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Composition */}
      <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center text-center">
        {/* Eyebrow */}
        <a
          href="#cases"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] text-white/80 backdrop-blur transition-colors hover:border-white/20 hover:text-white"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Schweizer Software- & App-Studio
          <ArrowUpRight className="h-3 w-3 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* H1 */}
        <h1
          className="font-display mt-6 font-semibold text-white text-balance"
          style={{ letterSpacing: "-2.4px" }}
        >
          <span className="block text-[44px] leading-[1.05] sm:text-6xl sm:leading-[1.05] md:text-[76px] md:leading-[1.04]">
            Wir bauen Software,
          </span>
          <span className="block text-[44px] leading-[1.05] sm:text-6xl sm:leading-[1.05] md:text-[76px] md:leading-[1.04]">
            die{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #bfd4de 0%, #7aa9fe 50%, #4a73c8 100%)",
              }}
            >
              echte Wirkung
            </span>{" "}
            hat.
          </span>
        </h1>

        {/* Sub */}
        <p className="mt-6 max-w-[640px] text-[17px] font-medium leading-[1.55] text-white/70 sm:text-[18px]">
          Web-Apps, Mobile-Apps und AI-Integrationen — vom ersten Workshop
          bis zum produktiven Produkt. Aus Zürich, für die Schweiz und darüber
          hinaus.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-[10px] bg-accent px-5 py-3 text-[14px] font-medium text-black transition-[filter,transform] hover:brightness-95 active:translate-y-[1px]"
          >
            Projekt starten
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-[10px] border border-white/15 bg-white/[0.04] px-5 py-3 text-[14px] font-medium text-white/90 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/[0.06]"
          >
            Leistungen ansehen
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-[12px] text-white/45">
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
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-12 -bottom-8 -top-8 rounded-[40px]"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 0%, rgba(74,115,200,0.35), transparent 65%)",
        }}
      />
      <div
        className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl"
        style={{
          background:
            "linear-gradient(180deg, #0e0e12 0%, #06060a 100%)",
        }}
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="hidden text-[11px] text-white/45 sm:block">
            app.starsolutions.ch
          </div>
          <div className="text-[11px] text-white/45">v1.0 · live</div>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <div className="hidden border-r border-white/[0.06] p-4 md:block">
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-white/[0.04] px-2.5 py-2">
              <span
                className="grid h-7 w-7 place-items-center rounded-md text-[11px] font-semibold text-black"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent) 0%, var(--color-violet) 100%)",
                }}
              >
                S
              </span>
              <div className="min-w-0">
                <p className="truncate text-[12px] font-medium">Star Solutions</p>
                <p className="truncate text-[10px] text-white/45">Production</p>
              </div>
            </div>
            <p className="mb-2 px-2 text-[10px] uppercase tracking-[0.16em] text-white/35">
              Workspace
            </p>
            <ul className="space-y-1 text-[12px]">
              {[
                { l: "Dashboard", active: true },
                { l: "Projekte", active: false },
                { l: "Kunden", active: false },
                { l: "Integrations", active: false },
                { l: "Einstellungen", active: false },
              ].map((i) => (
                <li
                  key={i.l}
                  className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 ${
                    i.active
                      ? "bg-white/[0.06] text-white"
                      : "text-white/65 hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      i.active ? "bg-accent" : "bg-white/20"
                    }`}
                  />
                  {i.l}
                </li>
              ))}
            </ul>
          </div>

          {/* Main */}
          <div className="p-5">
            {/* Top stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { k: "MRR", v: "CHF 84.2k", d: "+18 %", t: "accent" },
                { k: "Aktive Nutzer", v: "12'487", d: "+6 %", t: "violet" },
                { k: "Ø Antwortzeit", v: "92 ms", d: "−14 %", t: "accent" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                >
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/45">
                    {s.k}
                  </p>
                  <p className="font-display mt-1.5 text-[20px] tracking-tight">
                    {s.v}
                  </p>
                  <p
                    className={`mt-1 text-[10.5px] ${
                      s.t === "accent" ? "text-accent" : "text-violet"
                    }`}
                  >
                    {s.d} vs. letzte Woche
                  </p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[12px] font-medium text-white/85">
                  Performance · letzte 30 Tage
                </p>
                <div className="flex items-center gap-3 text-[10px] text-white/45">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Conversion
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                    Signups
                  </span>
                </div>
              </div>
              <Sparkline />
            </div>

            {/* Activity feed */}
            <div className="mt-4 space-y-1.5">
              {[
                { l: "Deploy → production", m: "vor 2 Min.", t: "accent" },
                { l: "Stripe webhook integriert", m: "heute, 09:42", t: "violet" },
                { l: "Schema-Migration #142", m: "gestern", t: "muted" },
              ].map((r) => (
                <div
                  key={r.l}
                  className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.025] px-3 py-2.5"
                >
                  <span className="flex items-center gap-2.5 text-[12.5px] text-white/85">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        r.t === "accent"
                          ? "bg-accent"
                          : r.t === "violet"
                          ? "bg-violet"
                          : "bg-white/30"
                      }`}
                    />
                    {r.l}
                  </span>
                  <span className="text-[11px] text-white/45">{r.m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 600 140" className="h-32 w-full" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#bfd4de" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#bfd4de" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4a73c8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4a73c8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid */}
      {[30, 70, 110].map((y) => (
        <line
          key={y}
          x1="0"
          x2="600"
          y1={y}
          y2={y}
          stroke="rgba(255,255,255,0.05)"
          strokeDasharray="3 5"
        />
      ))}
      {/* Conversion area */}
      <path
        d="M0 90 C 60 80, 120 60, 180 65 S 300 35, 360 40 S 480 18, 600 28 L600 140 L0 140 Z"
        fill="url(#g1)"
      />
      <path
        d="M0 90 C 60 80, 120 60, 180 65 S 300 35, 360 40 S 480 18, 600 28"
        fill="none"
        stroke="#bfd4de"
        strokeWidth="2"
      />
      {/* Signups area */}
      <path
        d="M0 110 C 80 100, 140 90, 220 88 S 340 70, 420 75 S 540 55, 600 60 L600 140 L0 140 Z"
        fill="url(#g2)"
      />
      <path
        d="M0 110 C 80 100, 140 90, 220 88 S 340 70, 420 75 S 540 55, 600 60"
        fill="none"
        stroke="#4a73c8"
        strokeWidth="2"
      />
    </svg>
  );
}
