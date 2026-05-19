import { ArrowUpRight } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[820px] overflow-hidden flex items-center justify-center px-4"
    >
      {/* Particles / star field */}
      <Particles />

      {/* Soft blurred dual-color glow (no visible ring) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="relative w-[520px] h-[520px] -translate-y-[6%]">
          {/* Powder-blue upper glow */}
          <div
            className="absolute rounded-full"
            style={{
              width: 360,
              height: 240,
              top: 60,
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "radial-gradient(60% 60% at 50% 50%, rgba(191,212,222,0.55) 0%, rgba(191,212,222,0) 70%)",
              filter: "blur(30px)",
            }}
          />
          {/* Deeper steel-blue lower glow */}
          <div
            className="absolute rounded-full"
            style={{
              width: 380,
              height: 260,
              top: 200,
              left: "50%",
              transform: "translateX(-50%) translateX(40px)",
              background:
                "radial-gradient(60% 60% at 50% 50%, rgba(122,169,254,0.45) 0%, rgba(122,169,254,0) 70%)",
              filter: "blur(40px)",
            }}
          />
        </div>
      </div>

      {/* Centered text composition */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Top badge: accent pill + label */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-3 text-[12px] leading-[17px] text-white/80 backdrop-blur-sm">
          <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-black">
            Neu
          </span>
          <span>AI-Chatbots auf Ihrer Website</span>
        </div>

        {/* H1 — Figtree 600 */}
        <h1
          className="font-display font-semibold text-white text-balance"
          style={{ letterSpacing: "-2.2px" }}
        >
          <span className="block text-[44px] leading-[1.05] sm:text-6xl sm:leading-[1.05] md:text-[70px] md:leading-[77px]">
            Intelligente Lösungen für
          </span>
          <span className="block text-[44px] leading-[1.05] sm:text-6xl sm:leading-[1.05] md:text-[70px] md:leading-[77px]">
            moderne Unternehmen.
          </span>
        </h1>

        {/* Sub */}
        <p className="mt-6 max-w-[680px] text-[18px] font-medium leading-[27px] text-[#cccccc]">
          Das Erstgespräch ist kostenlos. Wir hören zu, analysieren und bauen
          genau das, was Sie brauchen.
        </p>

        {/* CTA */}
        <div className="mt-7">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-[6px] bg-accent px-3.5 py-2 text-[14px] font-medium leading-[18px] text-black no-underline transition-opacity hover:opacity-90"
          >
            Kontakt aufnehmen
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Particles() {
  // 60 deterministic positions to look like a scattered star field
  const stars = Array.from({ length: 60 }, (_, i) => {
    const seed = i * 1.618;
    const x = ((seed * 13.37) % 100).toFixed(2);
    const y = ((seed * 7.91) % 100).toFixed(2);
    const size = (((seed * 3.3) % 1.4) + 0.6).toFixed(2);
    const opacity = (((seed * 0.71) % 0.5) + 0.25).toFixed(2);
    return { x, y, size, opacity };
  });
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}
