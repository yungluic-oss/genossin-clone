export default function Services() {
  return (
    <section id="services" className="relative py-28 px-4">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-72 glow-violet opacity-40 pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Our Services"
          title={
            <>
              AI Solutions That Take Your
              <br className="hidden sm:block" /> Business to the Next Level
            </>
          }
          sub="We design, develop, and implement automation tools that help you work smarter, not harder"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ServiceCard
            tone="violet"
            chips={["Internal Task Bots", "100+ Automations"]}
            title="Workflow Automation"
            subtitle="Automate repetitive tasks"
            body="We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains  saving time and cutting down errors."
            visual={<WorkflowVisual />}
          />

          <ServiceCard
            tone="lime"
            chips={["Summaries", "Scheduling", "Many more"]}
            title="AI Assistant"
            subtitle="Delegate Daily Tasks"
            body="From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster."
            visual={<AssistantVisual />}
          />

          <ServiceCard
            tone="pink"
            chips={["Leads", "Content", "Social post"]}
            title="Sales & Marketing"
            subtitle="Accelerate Sales Growth"
            body="AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence."
            visual={<SalesVisual />}
          />

          <ServiceCard
            tone="white"
            chips={["Strategy", "Custom AI", "Consulting"]}
            title="Custom Projects"
            subtitle="Build Smarter Systems"
            body="Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals."
            visual={<CustomVisual />}
          />
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`flex flex-col ${center ? "items-center text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.18em] text-white/70">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display font-medium tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl">
        {title}
      </h2>
      {sub ? (
        <p className="mt-5 max-w-xl text-white/60 text-base sm:text-lg">{sub}</p>
      ) : null}
    </div>
  );
}

function ServiceCard({
  tone,
  chips,
  title,
  subtitle,
  body,
  visual,
}: {
  tone: "violet" | "lime" | "pink" | "white";
  chips: string[];
  title: string;
  subtitle: string;
  body: string;
  visual: React.ReactNode;
}) {
  const glowMap = {
    violet: "bg-violet",
    lime: "bg-accent",
    pink: "bg-pink",
    white: "bg-white",
  } as const;

  return (
    <div className="card-surface relative overflow-hidden group">
      <div
        aria-hidden
        className={`absolute -top-20 -right-20 w-72 h-72 rounded-full ${glowMap[tone]} blur-3xl opacity-25 pointer-events-none`}
      />
      <div className="relative p-7 flex flex-col gap-5 min-h-[460px]">
        <div className="flex flex-wrap items-center gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/75"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="flex-1">{visual}</div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-accent/90">
            {subtitle}
          </p>
          <h3 className="mt-2 font-display text-2xl tracking-tight">{title}</h3>
          <p className="mt-2 text-sm text-white/60 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

function WorkflowVisual() {
  const rows = [
    { t: "Payroll management", s: "Due on 2nd july", c: "amber" },
    { t: "Employee Tracking", s: "2 days ago", c: "green" },
    { t: "Social media post", s: "Cancelled by user", c: "red" },
    { t: "Lead list", s: "70% prepared", c: "violet" },
    { t: "Payment reminder", s: "sent to selected clients", c: "green" },
  ];
  const dotMap: Record<string, string> = {
    green: "bg-emerald-400",
    amber: "bg-amber-400",
    red: "bg-rose-400",
    violet: "bg-violet",
  };
  return (
    <div className="rounded-2xl bg-black/40 border border-white/5 p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[13px] font-medium">All Tasks</p>
        <span className="text-[11px] text-white/40">Waiting for approval</span>
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.t}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/5"
          >
            <span className="flex items-center gap-2.5 text-[13px]">
              <span className={`w-2 h-2 rounded-full ${dotMap[r.c]}`} />
              {r.t}
            </span>
            <span className="text-[11px] text-white/45">{r.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AssistantVisual() {
  return (
    <div className="rounded-2xl bg-black/40 border border-white/5 p-5 flex flex-col gap-4">
      <div>
        <p className="font-display text-xl tracking-tight">What can I help with?</p>
        <p className="mt-1 text-[12px] text-white/55 leading-relaxed">
          Weather you want help in customer handling or make changes in your
          system just give me command
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {["Add document", "Analyze", "Generate Image", "research"].map((c) => (
          <button
            key={c}
            className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/5 text-[12px] text-white/80 hover:bg-white/[0.07] transition-colors text-left"
          >
            {c}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 px-3 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-[12px] text-white/55">
        <span className="text-accent">→</span>
        Ask me anything…
      </div>
    </div>
  );
}

function SalesVisual() {
  return (
    <div className="rounded-2xl bg-black/40 border border-white/5 p-4 space-y-3">
      <div className="rounded-xl bg-white/[0.04] border border-white/5 p-3">
        <div className="flex items-center justify-between text-[11px] text-white/55 mb-1.5">
          <span>To</span>
          <span className="text-accent">E-mail Sending..</span>
        </div>
        <p className="text-[13px] text-white/85">Hi LinkedIn lead — quick note about your IT services growth plans.</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Draft", c: "bg-white/[0.04]" },
          { label: "Schedule", c: "bg-violet/30 border-violet/40" },
          { label: "Sent", c: "bg-accent/15 border-accent/40 text-accent" },
        ].map((s) => (
          <div
            key={s.label}
            className={`text-center text-[12px] py-2 rounded-lg border border-white/10 ${s.c}`}
          >
            {s.label}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-[11px] text-white/55 px-1">
        <span>LinkedIn · IT services</span>
        <span className="text-emerald-400">+24 leads today</span>
      </div>
    </div>
  );
}

function CustomVisual() {
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  return (
    <div className="rounded-2xl bg-black/40 border border-white/5 p-4 space-y-3">
      <div>
        <p className="text-[13px] font-medium">Hey David!</p>
        <p className="text-[11px] text-white/55">
          Here is your Custom project &amp; schedule
        </p>
      </div>
      <div className="px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/5">
        <p className="text-[11px] text-white/55">On going project :</p>
        <div className="mt-1 flex items-center justify-between text-[12.5px]">
          <span>Customer Support Chatbot</span>
          <span className="text-accent">90% Finsihed</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[90%] bg-accent" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-[10px] text-center text-white/55">
        {days.map((d, i) => (
          <div
            key={d}
            className={`py-1.5 rounded-md ${
              i === 2 ? "bg-violet/30 text-white" : "bg-white/[0.03]"
            }`}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        <ScheduleRow time="10:00 am to 10:30 am" label="Discovery call" />
        <ScheduleRow time="06:00 pm to 06:30 pm" label="Custom automation" />
      </div>
    </div>
  );
}

function ScheduleRow({ time, label }: { time: string; label: string }) {
  return (
    <div className="flex items-center justify-between text-[12px] px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5">
      <span>{label}</span>
      <span className="text-white/55 text-[11px]">{time}</span>
    </div>
  );
}
