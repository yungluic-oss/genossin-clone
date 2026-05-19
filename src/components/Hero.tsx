import { ArrowUpRight } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-44 pb-20 px-4 overflow-hidden flex flex-col items-center text-center"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 -top-32 h-[640px] glow-violet pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(60%_50%_at_50%_30%,#000_0%,transparent_75%)] pointer-events-none"
      />

      <a
        href="#contact"
        className="relative z-10 inline-flex items-center gap-2 px-1 py-1 pr-4 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/80 backdrop-blur-md"
      >
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-black font-semibold uppercase tracking-wide text-[11px]">
          New
        </span>
        The first call is free. We listen, diagnose, then build exactly what you need.
      </a>

      <h1 className="relative z-10 mt-7 max-w-4xl font-display font-medium tracking-tight text-[44px] sm:text-6xl md:text-[80px] leading-[1.02]">
        Intelligent <span className="italic font-normal text-white/90">for</span>
        <br />
        Modern Businesses.
      </h1>

      <div className="relative z-10 mt-9">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-accent transition-colors"
        >
          Get in touch
          <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-black text-white group-hover:rotate-45 transition-transform">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </a>
      </div>

      <HeroDashboard />
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative z-10 mt-16 w-full max-w-5xl">
      <div
        aria-hidden
        className="absolute -inset-6 glow-violet rounded-[40px] opacity-50 blur-3xl"
      />
      <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-[#101013] to-[#08080b] p-3 shadow-[0_30px_120px_-30px_rgba(129,74,200,0.5)]">
        <img
          src="/assets/BDkySH1l96kZh7SgePJrIjeubQ.png"
          alt="Genossin dashboard"
          className="w-full h-auto rounded-[20px]"
        />
      </div>
    </div>
  );
}
