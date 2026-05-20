const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Postgres",
  "Supabase",
  "Tailwind",
  "Vercel",
  "Stripe",
  "OpenAI",
  "Anthropic",
  "n8n",
  "React Native",
  "Expo",
  "Figma",
];

export default function LogoStrip() {
  const loop = [...STACK, ...STACK];

  return (
    <section
      aria-label="Tech Stack"
      className="relative border-y border-white/[0.06] bg-[#050505] py-10"
    >
      <p className="text-center text-[11px] uppercase tracking-[0.22em] text-white/45">
        Unser Tech-Stack — bewährt, modern, langfristig wartbar
      </p>

      <div className="relative mt-7 overflow-hidden">
        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent"
        />

        <div className="animate-marquee flex w-max gap-3 will-change-transform">
          {loop.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[13px] text-white/75"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
