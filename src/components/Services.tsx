import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28 px-4">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-72 glow-violet opacity-30 pointer-events-none"
      />

      <div className="relative max-w-[1100px] mx-auto">
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

        <div className="mt-14 flex flex-col gap-5">
          <ServiceCard
            reverse={false}
            tone="violet"
            chips={["Internal Task Bots", "100+ Automations"]}
            title="Automate repetitive tasks"
            body="We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains — saving time and cutting down errors."
            visual={<WorkflowVisual />}
          />

          <ServiceCard
            reverse
            tone="lime"
            chips={["Summaries", "Scheduling", "Many more"]}
            title="Delegate Daily Tasks"
            body="From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster."
            visual={<AssistantVisual />}
          />

          <ServiceCard
            reverse={false}
            tone="pink"
            chips={["Leads", "Content", "Social post"]}
            title="Accelerate Sales Growth"
            body="AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence."
            visual={<SalesVisual />}
          />

          <ServiceCard
            reverse
            tone="white"
            chips={["Strategy", "Custom AI", "Consulting"]}
            title="Build Smarter Systems"
            body="Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals."
            visual={<CustomVisual />}
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared header (consumed by FAQ.tsx — keep export!)                         */
/* -------------------------------------------------------------------------- */

export function SectionHeader({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`flex flex-col ${center ? "items-center text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.18em] text-white/70">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2
        className="mt-5 font-display max-w-3xl"
        style={{
          fontSize: "clamp(32px, 4vw, 50px)",
          lineHeight: "1.1",
          letterSpacing: "-2px",
          fontWeight: 400,
        }}
      >
        {title}
      </h2>
      {sub ? (
        <p className="mt-5 max-w-xl text-white/60 text-base sm:text-lg">{sub}</p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card shell                                                                 */
/* -------------------------------------------------------------------------- */

function ServiceCard({
  reverse,
  tone,
  chips,
  title,
  body,
  visual,
}: {
  reverse: boolean;
  tone: "violet" | "lime" | "pink" | "white";
  chips: string[];
  title: string;
  body: string;
  visual: ReactNode;
}) {
  const glowMap = {
    violet: "bg-violet",
    lime: "bg-accent",
    pink: "bg-pink",
    white: "bg-white",
  } as const;

  return (
    <article
      className="relative overflow-hidden rounded-3xl border border-white/[0.07]"
      style={{
        background:
          "linear-gradient(180deg, #141417 0%, #0b0b0d 100%)",
        minHeight: 350,
      }}
    >
      <div
        aria-hidden
        className={`absolute -top-32 ${reverse ? "-left-32" : "-right-32"} w-80 h-80 rounded-full ${glowMap[tone]} blur-3xl opacity-20 pointer-events-none`}
      />

      <div
        className={`relative grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-center p-7 sm:p-9 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Visual */}
        <div className="relative">{visual}</div>

        {/* Copy */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            {chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
          <h3
            className="font-display"
            style={{
              fontSize: "35px",
              lineHeight: "38.5px",
              letterSpacing: "-1.4px",
              fontWeight: 500,
            }}
          >
            {title}
          </h3>
          <p className="text-[15px] text-white/55 leading-relaxed max-w-md">
            {body}
          </p>
        </div>
      </div>
    </article>
  );
}

function Chip({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "violet" | "pink";
}) {
  const toneMap = {
    default: "bg-white/[0.04] border-white/10 text-white/75",
    accent: "bg-accent/15 border-accent/30 text-accent",
    violet: "bg-violet/15 border-violet/40 text-violet-200",
    pink: "bg-pink/15 border-pink/40 text-pink-200",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border ${toneMap[tone]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card 1 — Workflow Automation                                               */
/* -------------------------------------------------------------------------- */

function WorkflowVisual() {
  type Row = {
    label: string;
    meta: string;
    dot: "violet" | "amber" | "rose" | "emerald" | "white";
    metaTone?: "muted" | "violet" | "rose" | "emerald";
  };
  const rows: Row[] = [
    { label: "Payroll management", meta: "Due on 2nd july", dot: "amber", metaTone: "violet" },
    { label: "Employee Tracking", meta: "2 days ago", dot: "emerald", metaTone: "muted" },
    { label: "Social media post", meta: "Cancelled by user", dot: "rose", metaTone: "rose" },
    { label: "Lead list", meta: "70% prepared", dot: "violet", metaTone: "violet" },
    { label: "Payment reminder", meta: "sent to selected clients", dot: "emerald", metaTone: "emerald" },
  ];
  const dotMap: Record<Row["dot"], string> = {
    violet: "bg-violet",
    amber: "bg-amber-400",
    rose: "bg-rose-400",
    emerald: "bg-emerald-400",
    white: "bg-white",
  };
  const metaMap = {
    muted: "text-white/45",
    violet: "text-violet",
    rose: "text-rose-300",
    emerald: "text-emerald-300",
  } as const;

  return (
    <div
      className="rounded-2xl border border-white/[0.06] p-4 backdrop-blur-sm"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-violet/20 border border-violet/40 grid place-items-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-violet">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <p className="text-[13px] font-medium text-white/90">All Tasks</p>
        </div>
        <span className="text-[11px] text-white/45">Waiting for approval</span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]"
          >
            <span className="flex items-center gap-2.5 text-[12.5px] text-white/85">
              <span className={`w-1.5 h-1.5 rounded-full ${dotMap[r.dot]}`} />
              {r.label}
            </span>
            <span className={`text-[11px] ${metaMap[r.metaTone ?? "muted"]}`}>{r.meta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card 2 — AI Assistant                                                      */
/* -------------------------------------------------------------------------- */

function AssistantVisual() {
  const tools = [
    { label: "Add document", icon: "doc" },
    { label: "Analyze", icon: "bar" },
    { label: "Generate Image", icon: "img" },
    { label: "research", icon: "search" },
  ] as const;

  return (
    <div
      className="rounded-2xl border border-white/[0.06] p-5 flex flex-col gap-4"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
      }}
    >
      <div>
        <p className="font-display text-[22px] tracking-tight">
          What can I help with?
        </p>
        <p className="mt-1.5 text-[12px] text-white/55 leading-relaxed max-w-[28ch]">
          Weather you want help in customer handling or make changes in your
          system just give me command
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {tools.map((t) => (
          <div
            key={t.label}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[12px] text-white/85"
          >
            <ToolIcon name={t.icon} />
            <span>{t.label}</span>
          </div>
        ))}
      </div>

      <div className="relative">
        <div className="flex items-center gap-2 pl-4 pr-2 py-2 rounded-full bg-white/[0.05] border border-white/10">
          <span className="text-[12.5px] text-white/85 flex-1 truncate">
            Schedule a 30 day cont
            <span className="inline-block w-[1px] h-[14px] bg-accent ml-0.5 align-middle animate-pulse-dot" />
          </span>
          <button className="w-7 h-7 rounded-full bg-accent grid place-items-center text-black">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function ToolIcon({ name }: { name: "doc" | "bar" | "img" | "search" }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "doc")
    return (
      <svg {...common} className="text-white/70">
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <path d="M14 3v6h6" />
      </svg>
    );
  if (name === "bar")
    return (
      <svg {...common} className="text-white/70">
        <path d="M4 20V10" />
        <path d="M12 20V4" />
        <path d="M20 20v-7" />
      </svg>
    );
  if (name === "img")
    return (
      <svg {...common} className="text-white/70">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    );
  return (
    <svg {...common} className="text-white/70">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card 3 — Sales & Marketing                                                 */
/* -------------------------------------------------------------------------- */

function SalesVisual() {
  const founders = [
    { name: "Jack Daniel", role: "Founder", email: "justin@main.com", company: "Xavier LLC", verified: true },
    { name: "Gorge Chapel", role: "Founder", email: "gorge@mail.com", company: "Chapel LLC", verified: true },
    { name: "Mike Tylor", role: "Founder", email: "mike@Cmb.com", company: "CMB LLC", verified: false },
    { name: "Thomas Shelby", role: "Founder", email: "Thimas@Sby.com", company: "Shelby.co", verified: true },
  ];

  return (
    <div
      className="rounded-2xl border border-white/[0.06] p-4 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        height: 290,
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-[11px]">
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
            E-mail Sending..
          </span>
          <span className="px-2 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/70">
            LinkedIn
          </span>
          <span className="px-2 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/70">
            IT services
          </span>
          <span className="px-2 py-1 rounded-full bg-violet/15 border border-violet/30 text-violet-200">
            Founders
          </span>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(180deg, transparent 0%, #000 18%, #000 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, #000 18%, #000 82%, transparent 100%)",
          height: 200,
        }}
      >
        <div className="flex flex-col gap-2 animate-marquee-y">
          {[...founders, ...founders].map((f, i) => (
            <FounderRow key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FounderRow({
  name,
  role,
  email,
  company,
  verified,
}: {
  name: string;
  role: string;
  email: string;
  company: string;
  verified: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
      <div className="flex items-center gap-2.5 min-w-0">
        <div
          className="w-7 h-7 rounded-full grid place-items-center text-[10px] font-medium shrink-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-violet) 0%, var(--color-pink) 100%)",
          }}
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="min-w-0">
          <p className="text-[12.5px] text-white/90 truncate flex items-center gap-1.5">
            {name}
            {verified ? (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : null}
          </p>
          <p className="text-[10.5px] text-white/45 truncate">
            {role} · {email}
          </p>
        </div>
      </div>
      <span className="text-[10.5px] text-white/55 shrink-0">{company}</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card 4 — Custom Project                                                    */
/* -------------------------------------------------------------------------- */

function CustomVisual() {
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  return (
    <div
      className="rounded-2xl border border-white/[0.06] p-4 flex flex-col gap-3"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded-full grid place-items-center text-[11px] font-semibold text-black"
          style={{
            background:
              "linear-gradient(135deg, var(--color-accent) 0%, #a8e63a 100%)",
          }}
        >
          D
        </div>
        <div>
          <p className="text-[13px] font-medium text-white/90">Hey David!</p>
          <p className="text-[11px] text-white/55">
            Here is your Custom project &amp; schedule
          </p>
        </div>
      </div>

      <div className="px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
        <p className="text-[10.5px] uppercase tracking-[0.14em] text-white/45">
          On going project :
        </p>
        <div className="mt-1 flex items-center justify-between text-[13px]">
          <span className="text-white/90">Customer Support Chatbot</span>
          <span className="text-accent text-[12px] font-medium">90% Finsihed</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[90%] bg-accent" />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-[10px] text-center">
        {days.map((d, i) => (
          <div
            key={d}
            className={`py-2 rounded-md ${
              i === 2
                ? "bg-violet text-white"
                : "bg-white/[0.03] border border-white/[0.05] text-white/55"
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      <div className="space-y-1.5">
        <ScheduleRow time="10:00 am to 10:30 am" label="Discovery call" tone="accent" />
        <ScheduleRow time="06:00 pm to 06:30 pm" label="Custom automation" tone="violet" />
      </div>
    </div>
  );
}

function ScheduleRow({
  time,
  label,
  tone,
}: {
  time: string;
  label: string;
  tone: "accent" | "violet";
}) {
  const dot = tone === "accent" ? "bg-accent" : "bg-violet";
  return (
    <div className="flex items-center justify-between text-[12px] px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
      <span className="flex items-center gap-2 text-white/90">
        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
        {label}
      </span>
      <span className="text-white/55 text-[10.5px]">{time}</span>
    </div>
  );
}
