import { ArrowUpRight } from "@/components/icons";

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#15101e] via-[#0c0a14] to-black p-10 sm:p-16 text-center">
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] glow-violet opacity-70 pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 right-0 w-[400px] h-[300px] glow-lime opacity-50 pointer-events-none"
        />

        <p className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] uppercase tracking-[0.18em] text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Let AI do the Work so you can Scale Faster
        </p>
        <h2 className="relative mt-6 font-display font-medium tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
          Book a Call Today and
          <br className="hidden sm:block" /> Start Automating
        </h2>
        <div className="relative mt-9 flex items-center justify-center gap-3 flex-wrap">
          <a
            href="mailto:hello@genossin.com"
            className="group inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full bg-accent text-black text-sm font-medium hover:bg-white transition-colors"
          >
            Book a free call
            <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-black text-white group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
