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
      className="relative px-4 py-12"
    >
      <div
        className="skeo-inset-deep mx-auto max-w-[1180px] py-7"
        style={{ borderRadius: 22 }}
      >
        <p className="engraved text-center text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-3)]">
          Unser Tech-Stack — bewährt, modern, langfristig wartbar
        </p>

        <div className="relative mt-6 overflow-hidden">
          {/* Edge fades */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
            style={{
              background:
                "linear-gradient(90deg, #e0ddd2 0%, transparent 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
            style={{
              background:
                "linear-gradient(270deg, #e0ddd2 0%, transparent 100%)",
            }}
          />

          <div className="animate-marquee flex w-max gap-3 will-change-transform">
            {loop.map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="skeo-raised-sm font-display inline-flex shrink-0 items-center gap-2 px-4 py-2 text-[13px] text-[var(--color-ink)]"
                style={{ borderRadius: 999 }}
              >
                <span className="led-green" style={{ width: 7, height: 7 }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
