import { ArrowUpRight } from "@/components/icons";

export default function CTA() {
  return (
    <section id="contact" className="relative px-4 pt-24 pb-12">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0710] px-8 py-20 sm:px-16 sm:py-24 text-center">
        {/* Deep-blue glow — top-left corner */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(74,115,200,0.55),_transparent_70%)] blur-2xl"
        />
        {/* Powder-blue glow — bottom-right hairline */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-24 h-[360px] w-[440px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(191,212,222,0.22),_transparent_70%)] blur-3xl"
        />

        <h2 className="relative font-display font-normal tracking-[-0.04em] text-4xl sm:text-5xl leading-[1.05] text-white">
          Lassen Sie AI arbeiten —
          <br className="hidden sm:block" /> und skalieren Sie schneller.
        </h2>
        <p className="relative mt-5 text-[15px] sm:text-base text-white/70">
          Buchen Sie noch heute einen Termin und starten Sie mit Automatisierung.
        </p>

        <div className="relative mt-8 flex items-center justify-center">
          <a
            href="https://cal.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full bg-accent text-black text-sm font-medium hover:bg-white transition-colors"
          >
            Kostenloses Gespräch buchen
            <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-black text-white group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
