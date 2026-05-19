export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[900px] overflow-hidden flex items-center justify-center px-4"
    >
      {/* Decorative orb stack — centered behind text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        {/* Wrapper provides shared center; orbs are absolutely positioned within */}
        <div className="relative w-[434px] h-[434px] -translate-y-[5%]">
          {/* Big Circle (434×434, 229deg, violet→transparent→accent) */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(229deg, #df7afe 13%, rgba(201,110,240,0) 35.02%, rgba(164,92,219,0) 64.17%, #cafa5a 88%)",
            }}
          />
          {/* Small circle (310×310, mirrored 141deg) — concentric */}
          <div
            className="absolute rounded-full"
            style={{
              width: 310,
              height: 310,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              backgroundImage:
                "linear-gradient(141deg, #df7afe 13%, rgba(201,110,240,0) 35.02%, rgba(164,92,219,0) 64.17%, #cafa5a 88%)",
            }}
          />
          {/* Void — solid black 410×410 cut-out, creates the donut ring */}
          <div
            className="absolute rounded-full bg-black"
            style={{
              width: 410,
              height: 410,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* BG — soft blurred glow halo */}
          <div
            className="absolute rounded-full"
            style={{
              width: 406,
              height: 406,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.6,
              filter: "blur(10px)",
              backgroundImage:
                "linear-gradient(229deg, #df7afe 13%, rgba(201,110,240,0) 35.02%, rgba(164,92,219,0) 64.17%, #cafa5a 88%)",
            }}
          />
        </div>
      </div>

      {/* Centered text composition */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Top decorative pill badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[12px] leading-[17px] text-white/80 backdrop-blur-sm">
          AI chatbot integration on websites
        </div>

        {/* H1 — Figtree 600, 70/77, -2.2 tracking, white */}
        <h1
          className="font-display font-semibold text-white text-balance"
          style={{
            letterSpacing: "-2.2px",
          }}
        >
          <span className="block text-[44px] leading-[1.1] sm:text-6xl sm:leading-[1.08] md:text-[70px] md:leading-[77px]">
            Intelligent Solutions for
          </span>
          <span className="block text-[44px] leading-[1.1] sm:text-6xl sm:leading-[1.08] md:text-[70px] md:leading-[77px]">
            Modern Businesses.
          </span>
        </h1>

        {/* Sub — 18/27, #ccc, max 600px */}
        <p className="mt-6 max-w-[600px] text-[18px] font-medium leading-[27px] text-[#cccccc]">
          The first call is free. We listen, diagnose, then build exactly what
          you need.
        </p>

        {/* CTA — accent pill, dark text, 6px radius, 9px 13px padding */}
        <div className="mt-7">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[6px] bg-accent px-[13px] py-[9px] text-[14px] font-medium leading-[18px] text-black no-underline transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
