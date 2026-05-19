import { ArrowUpRight, Sparkles } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-44 pb-24 px-4 overflow-hidden flex flex-col items-center text-center"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 -top-32 h-[600px] glow-violet pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(60%_50%_at_50%_30%,#000_0%,transparent_75%)] pointer-events-none"
      />

      <a
        href="#services"
        className="relative z-10 inline-flex items-center gap-2 px-1 py-1 pr-4 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/80 backdrop-blur-md"
      >
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-black font-semibold uppercase tracking-wide text-[11px]">
          <Sparkles className="w-3 h-3" /> New
        </span>
        First call is free — we listen, diagnose, and scope.
      </a>

      <h1 className="relative z-10 mt-7 max-w-4xl font-display font-medium tracking-tight text-[44px] sm:text-6xl md:text-7xl leading-[1.02]">
        Intelligent solutions
        <br className="hidden sm:block" /> for{" "}
        <span className="italic font-display font-normal text-white/90">
          modern
        </span>{" "}
        businesses
      </h1>

      <p className="relative z-10 mt-6 max-w-xl text-base sm:text-lg text-white/65 leading-relaxed">
        Genossin is an AI automation studio for startups and growing teams.
        We design, build, and integrate tailored AI workflows so your team can
        ship faster, hire smarter, and stay competitive.
      </p>

      <div className="relative z-10 mt-9 flex items-center gap-3">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-accent transition-colors"
        >
          Get in touch
          <span className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-black text-white group-hover:rotate-45 transition-transform">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </a>
        <a
          href="#services"
          className="text-sm text-white/70 hover:text-white px-4 py-2 transition-colors"
        >
          Explore services →
        </a>
      </div>

      <HeroMockup />
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative z-10 mt-16 w-full max-w-5xl">
      <div
        aria-hidden
        className="absolute -inset-4 glow-violet rounded-[40px] opacity-50 blur-2xl"
      />
      <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-[#101013] to-[#08080b] p-3 shadow-[0_30px_120px_-30px_rgba(129,74,200,0.5)]">
        <div className="rounded-[20px] bg-black/60 border border-white/5 overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="ml-3 text-[11px] text-white/40">
              genossin.app — workspace
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] min-h-[340px]">
            <aside className="hidden sm:block border-r border-white/5 p-4 space-y-1.5">
              {["Dashboard", "Tasks", "Automations", "Agents", "Inbox"].map(
                (s, i) => (
                  <div
                    key={s}
                    className={`px-3 py-2 rounded-lg text-[13px] ${
                      i === 1
                        ? "bg-white/8 text-white"
                        : "text-white/55 hover:text-white/80"
                    }`}
                  >
                    {s}
                  </div>
                )
              )}
            </aside>
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">All tasks</p>
                <span className="text-[11px] text-white/40">Today</span>
              </div>
              {[
                { t: "Payroll run — June", s: "Awaiting approval", c: "amber" },
                { t: "Employee tracker sync", s: "Completed 2d ago", c: "green" },
                { t: "Weekly social posts", s: "Cancelled by user", c: "red" },
                { t: "Outbound lead list", s: "70% prepared", c: "violet" },
                {
                  t: "Payment reminders",
                  s: "Sent to selected clients",
                  c: "green",
                },
              ].map((row) => (
                <div
                  key={row.t}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Dot color={row.c} />
                    <span className="text-[13px] truncate">{row.t}</span>
                  </div>
                  <span className="text-[11px] text-white/50 shrink-0">
                    {row.s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot({ color }: { color: string }) {
  const map: Record<string, string> = {
    green: "bg-emerald-400",
    amber: "bg-amber-400",
    red: "bg-rose-400",
    violet: "bg-violet",
  };
  return <span className={`w-2 h-2 rounded-full ${map[color] ?? "bg-white/30"}`} />;
}
