import { ArrowUpRight } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden px-4 pt-16 pb-24 sm:pt-24 sm:pb-32"
    >
      {/* Subtle neon glow background — top */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[20%] h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,255,58,0.18), transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Composition */}
      <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center text-center">
        {/* "Neu" badge — dark pill with chartreuse "Neu" chip */}
        <a
          href="#services"
          className="group inline-flex items-center gap-3 py-1.5 pl-1.5 pr-4 font-display"
          style={{
            background:
              "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 999,
            color: "#ffffff",
            boxShadow:
              "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 -1px 0 0 rgba(0,0,0,0.5) inset, 0 2px 4px rgba(0,0,0,0.15), 0 6px 14px -4px rgba(0,0,0,0.25)",
          }}
        >
          <span
            className="inline-flex items-center justify-center text-[12px] font-semibold leading-none"
            style={{
              background:
                "linear-gradient(180deg, #e0ff99 0%, #c4ff3a 60%, #88c000 100%)",
              border: "1px solid #3a5400",
              borderRadius: 999,
              color: "#0a1500",
              padding: "6px 12px",
              boxShadow:
                "0 1px 0 0 rgba(255,255,255,0.6) inset, 0 -1px 0 0 rgba(0,0,0,0.15) inset, 0 0 10px rgba(196,255,58,0.55)",
            }}
          >
            Neu
          </span>
          <span className="text-[13.5px] font-medium tracking-[-0.01em]">
            AI-Chatbot-Integration für Websites
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* H1 — exactly two lines from sm+ */}
        <h1
          className="font-display headline-engraved mt-8 font-semibold"
          style={{ letterSpacing: "-2.6px" }}
        >
          <span className="block text-[36px] leading-[1.05] sm:whitespace-nowrap sm:text-[50px] sm:leading-[1.04] md:text-[64px] md:leading-[1.03] lg:text-[74px]">
            Wir bauen Software,
          </span>
          <span className="block text-[36px] leading-[1.05] sm:whitespace-nowrap sm:text-[50px] sm:leading-[1.04] md:text-[64px] md:leading-[1.03] lg:text-[74px]">
            die echte Wirkung hat.
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
      </div>
    </section>
  );
}
