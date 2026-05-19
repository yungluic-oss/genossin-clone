import { ArrowUpRight } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[820px] overflow-hidden flex items-center justify-center px-4"
    >
      {/* Centered text composition */}
      <div className="relative z-10 flex flex-col items-center text-center">
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
