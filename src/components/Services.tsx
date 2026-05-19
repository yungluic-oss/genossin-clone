import {
  Bot,
  Workflow,
  MessageSquare,
  Database,
  Sparkles as Sparkle,
  PenLine,
  ScanLine,
  Wand as Wand2,
} from "@/components/icons";

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-4">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-72 glow-violet opacity-40 pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Our services"
          title={
            <>
              AI solutions that take your
              <br className="hidden sm:block" /> business to the next level
            </>
          }
          sub="We design, develop, and integrate automation tools that help your team work smarter — not harder."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ServiceCard
            tone="violet"
            icon={<Workflow className="w-4 h-4" />}
            title="Workflow Automation"
            body="Streamline internal operations by automating manual workflows — data entry, reporting, approvals — so your team can focus on the work that matters."
            chip="100+ automations shipped"
          >
            <WorkflowVisual />
          </ServiceCard>

          <ServiceCard
            tone="lime"
            icon={<Bot className="w-4 h-4" />}
            title="AI Assistant"
            body="From managing calendars and drafting emails to summarizing meetings — AI assistants that work around the clock alongside your team."
            chip="Always-on assistant"
          >
            <AssistantVisual />
          </ServiceCard>

          <ServiceCard
            tone="pink"
            icon={<MessageSquare className="w-4 h-4" />}
            title="Conversational Agents"
            body="Custom chat and voice agents for support, sales, and onboarding — connected to your data, your tone, and your stack."
            chip="Voice + chat"
          >
            <AgentVisual />
          </ServiceCard>

          <ServiceCard
            tone="white"
            icon={<Database className="w-4 h-4" />}
            title="Data & RAG Systems"
            body="Turn scattered documents and internal knowledge into a searchable, cited brain your team and your agents can rely on."
            chip="Cited answers"
          >
            <DataVisual />
          </ServiceCard>
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
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.18em] text-white/65">
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
  icon,
  title,
  body,
  chip,
  children,
}: {
  tone: "violet" | "lime" | "pink" | "white";
  icon: React.ReactNode;
  title: string;
  body: string;
  chip: string;
  children: React.ReactNode;
}) {
  const toneClass: Record<typeof tone, string> = {
    violet: "from-violet/30 to-transparent text-violet",
    lime: "from-accent/30 to-transparent text-accent",
    pink: "from-pink/30 to-transparent text-pink",
    white: "from-white/15 to-transparent text-white",
  } as Record<"violet" | "lime" | "pink" | "white", string>;

  return (
    <div className="card-surface relative overflow-hidden group">
      <div
        aria-hidden
        className={`absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br ${toneClass[tone]} blur-3xl opacity-40 pointer-events-none`}
      />
      <div className="relative p-7 flex flex-col gap-5 min-h-[420px]">
        <div className="flex items-center gap-2 text-xs text-white/70">
          <span
            className={`w-7 h-7 rounded-md inline-flex items-center justify-center bg-white/[0.06] border border-white/10 ${toneClass[tone].split(" ").pop()}`}
          >
            {icon}
          </span>
          <span>{chip}</span>
        </div>
        <div className="flex-1">{children}</div>
        <div>
          <h3 className="font-display text-2xl tracking-tight">{title}</h3>
          <p className="mt-2 text-sm text-white/60 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

function WorkflowVisual() {
  const rows = [
    { t: "Invoice triage", s: "Routed to finance", c: "bg-violet" },
    { t: "Standup digest", s: "Sent to #team", c: "bg-emerald-400" },
    { t: "Lead enrichment", s: "42 new contacts", c: "bg-accent" },
    { t: "Support tagger", s: "Auto-classifying", c: "bg-pink" },
  ];
  return (
    <div className="rounded-2xl bg-black/40 border border-white/5 p-3">
      <div className="flex items-center justify-between mb-3 px-1">
        <p className="text-[11px] text-white/40 uppercase tracking-wider">
          Active automations
        </p>
        <span className="text-[11px] text-white/40">live</span>
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.t}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/5"
          >
            <span className="flex items-center gap-2.5 text-[13px]">
              <span className={`w-2 h-2 rounded-full ${r.c} animate-pulse-dot`} />
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
    <div className="rounded-2xl bg-black/40 border border-white/5 p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-violet inline-flex items-center justify-center text-black">
          <Sparkle className="w-4 h-4" />
        </span>
        <div>
          <p className="text-[13px] font-medium">What can I help with?</p>
          <p className="text-[11px] text-white/45">
            Drafts, scheduling, summaries — just ask.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-1">
        {[
          { label: "Summaries", icon: <PenLine className="w-3.5 h-3.5" /> },
          { label: "Scheduling", icon: <Workflow className="w-3.5 h-3.5" /> },
          { label: "Analyze", icon: <ScanLine className="w-3.5 h-3.5" /> },
          { label: "Generate", icon: <Wand2 className="w-3.5 h-3.5" /> },
        ].map((c) => (
          <button
            key={c.label}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/5 text-[12px] text-white/80 hover:bg-white/[0.07] transition-colors text-left"
          >
            <span className="text-accent">{c.icon}</span>
            {c.label}
          </button>
        ))}
      </div>
      <div className="mt-1 flex items-center gap-2 px-3 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-[12px] text-white/55">
        <span className="text-accent">→</span>
        Ask anything about your business…
      </div>
    </div>
  );
}

function AgentVisual() {
  return (
    <div className="rounded-2xl bg-black/40 border border-white/5 p-4 space-y-2">
      <Bubble side="left">Hi! Looking for a quote on the Pro plan.</Bubble>
      <Bubble side="right" tone="accent">
        Happy to help. Team size & main use case?
      </Bubble>
      <Bubble side="left">12 people, mostly customer success.</Bubble>
      <Bubble side="right" tone="violet">
        Pro fits — drafting a tailored proposal now.
      </Bubble>
      <div className="flex items-center gap-1.5 pl-3 pt-1 text-[11px] text-white/50">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
        Drafting reply…
      </div>
    </div>
  );
}

function Bubble({
  side,
  tone,
  children,
}: {
  side: "left" | "right";
  tone?: "accent" | "violet";
  children: React.ReactNode;
}) {
  const align = side === "right" ? "ml-auto" : "";
  const bg =
    tone === "accent"
      ? "bg-accent text-black"
      : tone === "violet"
        ? "bg-violet text-white"
        : "bg-white/[0.06] text-white/85";
  return (
    <div
      className={`max-w-[80%] ${align} px-3 py-2 rounded-2xl text-[12.5px] leading-snug ${bg}`}
    >
      {children}
    </div>
  );
}

function DataVisual() {
  return (
    <div className="rounded-2xl bg-black/40 border border-white/5 p-4 grid grid-cols-3 gap-2">
      {[
        "Notion",
        "Drive",
        "Slack",
        "Linear",
        "Gmail",
        "Confluence",
        "HubSpot",
        "Stripe",
        "Postgres",
      ].map((src) => (
        <div
          key={src}
          className="aspect-square rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center text-[11px] text-white/65 hover:border-accent/40 transition-colors"
        >
          {src}
        </div>
      ))}
    </div>
  );
}
