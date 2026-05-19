const LOGOS = [
  "Northwind",
  "Cascade",
  "Lumen Labs",
  "Helios",
  "Orbital",
  "Stratos",
  "Vesper",
  "Quanta",
];

export default function LogoStrip() {
  return (
    <section className="py-16 px-4 border-y border-white/[0.06] bg-[#050505]">
      <p className="text-center text-xs uppercase tracking-[0.18em] text-white/40">
        Trusted by 10+ teams shipping smarter every week
      </p>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max gap-12 animate-marquee">
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <span
              key={i}
              className="font-display text-2xl text-white/55 whitespace-nowrap tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
