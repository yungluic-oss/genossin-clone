import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:py-28">
      <div className="relative mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center text-center">
          <span className="skeo-nameplate font-display">
            <span className="led-green" style={{ width: 7, height: 7 }} />
            Leistungen & Investment
          </span>
          <h2
            className="font-display headline-engraved mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(32px, 4vw, 50px)",
              lineHeight: "1.1",
              letterSpacing: "-2px",
              fontWeight: 500,
            }}
          >
            Dein Budget.
            <br className="hidden sm:block" /> Unsere Ambition.
          </h2>
          <p className="engraved mt-5 max-w-2xl text-base text-[var(--color-ink-3)] sm:text-lg">
            Wir richten uns nach deinem Rahmen, nicht nach Standardpaketen.
            Sag uns, was du investieren willst — wir bauen das Maximum, was
            darin Platz hat. Die einzige Grenze ist deine Vorstellungskraft.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-6">
          <ServiceCard
            reverse={false}
            eyebrow="Web-Apps & Plattformen"
            title="SaaS und Web-Plattformen entwickeln"
            body="Von der ersten Idee bis zur produktiven Anwendung. Wir bauen skalierbare Web-Apps mit Next.js, TypeScript und Postgres — sauber strukturiert, vollständig getestet und bereit für Wachstum."
            visual={<WorkflowVisual />}
          />

          <ServiceCard
            reverse
            eyebrow="AI-Integration & Agents"
            title="AI dort einsetzen, wo sie wirkt"
            body="Wir bauen AI-Features, die echten Mehrwert liefern: Custom Agents, RAG-Systeme, Chatbots und automatisierte Workflows. Mit OpenAI, Anthropic und massgeschneiderter Logik um Ihre Daten."
            visual={<AssistantVisual />}
          />

          <ServiceCard
            reverse={false}
            eyebrow="Mobile Apps"
            title="Native Apps für iOS & Android"
            body="React Native und Expo für Cross-Platform-Apps, die sich nativ anfühlen. Vom Onboarding über Push-Notifications bis App-Store-Release — wir liefern den gesamten Lebenszyklus."
            visual={<SalesVisual />}
          />

          <ServiceCard
            reverse
            eyebrow="Internal Tools & Dashboards"
            title="Interne Tools, die Ihr Team wirklich nutzt"
            body="Dashboards, Admin-Panels, Reporting-Tools und Workflow-Software für Ihr Team. Massgeschneidert auf Ihre Prozesse — angebunden an die Datenquellen, die Sie bereits haben."
            visual={<CustomVisual />}
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared header (consumed by FAQ.tsx)                                        */
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
      <span className="skeo-nameplate font-display">
        <span className="led-green" style={{ width: 7, height: 7 }} />
        {eyebrow}
      </span>
      <h2
        className="font-display headline-engraved mt-5 max-w-3xl"
        style={{
          fontSize: "clamp(32px, 4vw, 50px)",
          lineHeight: "1.1",
          letterSpacing: "-2px",
          fontWeight: 500,
        }}
      >
        {title}
      </h2>
      {sub ? (
        <p className="engraved mt-5 max-w-xl text-base text-[var(--color-ink-3)] sm:text-lg">
          {sub}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card shell                                                                 */
/* -------------------------------------------------------------------------- */

function ServiceCard({
  reverse,
  eyebrow,
  title,
  body,
  visual,
}: {
  reverse: boolean;
  eyebrow: string;
  title: string;
  body: string;
  visual: ReactNode;
}) {
  return (
    <article
      className="skeo-raised relative overflow-hidden"
      style={{ borderRadius: 24, minHeight: 360 }}
    >
      <div
        className={`relative grid grid-cols-1 items-center gap-8 p-7 sm:p-9 lg:grid-cols-[1.05fr_1fr] lg:gap-10 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative">{visual}</div>

        <div className="flex flex-col gap-4">
          <span className="skeo-nameplate self-start font-display">
            <span className="led-green" style={{ width: 7, height: 7 }} />
            {eyebrow}
          </span>
          <h3
            className="font-display headline-engraved"
            style={{
              fontSize: "32px",
              lineHeight: "36px",
              letterSpacing: "-1.2px",
              fontWeight: 600,
            }}
          >
            {title}
          </h3>
          <p className="text-[15px] leading-relaxed text-[var(--color-ink-3)] max-w-md">
            {body}
          </p>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card 1 — Build pipeline                                                    */
/* -------------------------------------------------------------------------- */

function WorkflowVisual() {
  type Row = {
    label: string;
    meta: string;
    state: "live" | "ready" | "review" | "done" | "wip";
  };
  const rows: Row[] = [
    { label: "Onboarding-Flow", meta: "Live in Production", state: "live" },
    { label: "Stripe-Checkout", meta: "Deploy bereit", state: "ready" },
    { label: "Admin-Dashboard", meta: "QA in Review", state: "review" },
    { label: "Auth & Permissions", meta: "vor 1 Tag", state: "done" },
    { label: "API-Endpoint /v2", meta: "in Entwicklung", state: "wip" },
  ];
  return (
    <div className="skeo-inset p-4" style={{ borderRadius: 16 }}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="grid h-6 w-6 place-items-center rounded-md text-[#1a2a00]"
            style={{
              background:
                "linear-gradient(180deg, #e0ff99 0%, #c4ff3a 60%, #88c000 100%)",
              border: "1px solid #3a5400",
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.6) inset, 0 0 6px rgba(196, 255, 58,0.6)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </span>
          <p className="text-[13px] font-medium text-[var(--color-ink)]">
            Build-Pipeline
          </p>
        </div>
        <span className="text-[11px] text-[var(--color-ink-3)]">5 aktive Tasks</span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div
            key={r.label}
            className="skeo-raised-sm flex items-center justify-between px-3 py-2.5"
            style={{ borderRadius: 10 }}
          >
            <span className="flex items-center gap-2.5 text-[12.5px] text-[var(--color-ink)]">
              {r.state === "live" || r.state === "done" ? (
                <span className="led-green" style={{ width: 7, height: 7 }} />
              ) : (
                <span className="led-off" style={{ width: 7, height: 7 }} />
              )}
              {r.label}
            </span>
            <span className="text-[11px] text-[var(--color-ink-3)]">{r.meta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card 2 — AI agent                                                          */
/* -------------------------------------------------------------------------- */

function AssistantVisual() {
  const tools = [
    { label: "Knowledge-Base anbinden", icon: "doc" },
    { label: "Daten analysieren", icon: "bar" },
    { label: "Antwort generieren", icon: "img" },
    { label: "Quellen prüfen", icon: "search" },
  ] as const;

  return (
    <div
      className="skeo-inset flex flex-col gap-4 p-5"
      style={{ borderRadius: 16 }}
    >
      <div>
        <p className="font-display headline-engraved text-[22px] tracking-tight">
          Was möchten Sie wissen?
        </p>
        <p className="mt-1.5 max-w-[32ch] text-[12px] leading-relaxed text-[var(--color-ink-3)]">
          Ihr Custom AI-Agent — trainiert auf Ihre Daten, integriert in Ihre
          Tools, im Stil Ihrer Marke.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {tools.map((t) => (
          <div
            key={t.label}
            className="skeo-raised-sm flex items-center gap-2 px-3 py-2 text-[12px] text-[var(--color-ink)]"
            style={{ borderRadius: 10 }}
          >
            <ToolIcon name={t.icon} />
            <span>{t.label}</span>
          </div>
        ))}
      </div>

      <div className="relative">
        <div
          className="skeo-raised-sm flex items-center gap-2 py-2 pl-4 pr-2"
          style={{ borderRadius: 999 }}
        >
          <span className="flex-1 truncate text-[12.5px] text-[var(--color-ink)]">
            Fasse die letzten 10 Tickets zusammen
            <span className="ml-0.5 inline-block h-[14px] w-[1.5px] animate-pulse-dot align-middle bg-[#c4ff3a]" />
          </span>
          <button
            className="skeo-btn-neon"
            style={{ width: 30, height: 30, padding: 0, borderRadius: 999 }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    className: "text-[var(--color-ink-3)]",
  };
  if (name === "doc")
    return (
      <svg {...common}>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <path d="M14 3v6h6" />
      </svg>
    );
  if (name === "bar")
    return (
      <svg {...common}>
        <path d="M4 20V10" />
        <path d="M12 20V4" />
        <path d="M20 20v-7" />
      </svg>
    );
  if (name === "img")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card 3 — App users / rollout                                               */
/* -------------------------------------------------------------------------- */

function SalesVisual() {
  const founders = [
    { name: "Jonas Meier", role: "iOS · v3.2.1", email: "Push aktiviert", company: "Zürich", verified: true },
    { name: "Léa Bertrand", role: "Android · v3.2.1", email: "Onboarding aktiv", company: "Lausanne", verified: true },
    { name: "Marco Bianchi", role: "iOS · v3.1.4", email: "Update verfügbar", company: "Lugano", verified: false },
    { name: "Sophie Keller", role: "Android · v3.2.1", email: "Push aktiviert", company: "Bern", verified: true },
  ];

  return (
    <div
      className="skeo-inset overflow-hidden p-4"
      style={{ borderRadius: 16, height: 290 }}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-medium"
            style={{
              background:
                "linear-gradient(180deg, #d8ffb3 0%, #b6ff80 100%)",
              border: "1px solid #88c000",
              color: "#1a2a00",
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.7) inset, 0 0 8px rgba(196, 255, 58,0.4)",
            }}
          >
            <span className="led-green animate-neon" style={{ width: 6, height: 6 }} />
            Live-Rollout läuft…
          </span>
          <span className="skeo-raised-sm rounded-full px-2 py-1 text-[var(--color-ink-2)]" style={{ borderRadius: 999 }}>iOS</span>
          <span className="skeo-raised-sm rounded-full px-2 py-1 text-[var(--color-ink-2)]" style={{ borderRadius: 999 }}>Android</span>
          <span className="skeo-raised-sm rounded-full px-2 py-1 text-[var(--color-ink-2)]" style={{ borderRadius: 999 }}>Aktive Nutzer</span>
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
        <div className="flex animate-marquee-y flex-col gap-2">
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
    <div
      className="skeo-raised-sm flex items-center justify-between gap-3 px-3 py-2.5"
      style={{ borderRadius: 12 }}
    >
      <div className="flex min-w-0 items-center gap-2.5">
        <div
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold"
          style={{
            background:
              "linear-gradient(180deg, #e0ff99 0%, #c4ff3a 60%, #5a7e00 100%)",
            border: "1px solid #3a5400",
            color: "#0a1500",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.6) inset, 0 0 6px rgba(196, 255, 58,0.4)",
          }}
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 truncate text-[12.5px] text-[var(--color-ink)]">
            {name}
            {verified ? (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5a7e00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : null}
          </p>
          <p className="truncate text-[10.5px] text-[var(--color-ink-3)]">
            {role} · {email}
          </p>
        </div>
      </div>
      <span className="shrink-0 text-[10.5px] text-[var(--color-ink-3)]">
        {company}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card 4 — Internal tool / dashboard                                         */
/* -------------------------------------------------------------------------- */

function CustomVisual() {
  const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  return (
    <div
      className="skeo-inset flex flex-col gap-3 p-4"
      style={{ borderRadius: 16 }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="grid h-8 w-8 place-items-center rounded-full text-[11px] font-semibold"
          style={{
            background:
              "linear-gradient(180deg, #e0ff99 0%, #c4ff3a 60%, #5a7e00 100%)",
            border: "1px solid #3a5400",
            color: "#0a1500",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.6) inset, 0 0 8px rgba(196, 255, 58,0.5)",
          }}
        >
          O
        </div>
        <div>
          <p className="text-[13px] font-medium text-[var(--color-ink)]">
            Operations-Team
          </p>
          <p className="text-[11px] text-[var(--color-ink-3)]">
            Ihr internes Dashboard &amp; Sprint-Planung
          </p>
        </div>
      </div>

      <div className="skeo-raised-sm px-3 py-2.5" style={{ borderRadius: 12 }}>
        <p className="text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-ink-3)]">
          Sprint 12 — laufend:
        </p>
        <div className="mt-1 flex items-center justify-between text-[13px]">
          <span className="text-[var(--color-ink)]">Custom Admin-Panel</span>
          <span className="text-[12px] font-semibold text-[#5a7e00]">
            90 % erledigt
          </span>
        </div>
        <div
          className="skeo-inset mt-2 h-2 overflow-hidden"
          style={{ borderRadius: 999 }}
        >
          <div
            className="h-full"
            style={{
              width: "90%",
              background:
                "linear-gradient(180deg, #e0ff99 0%, #c4ff3a 60%, #5a7e00 100%)",
              boxShadow: "0 0 8px rgba(196, 255, 58,0.65)",
              borderRadius: 999,
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
        {days.map((d, i) =>
          i === 2 ? (
            <div
              key={d}
              className="py-2 font-semibold text-[#0a1500]"
              style={{
                borderRadius: 8,
                background:
                  "linear-gradient(180deg, #e0ff99 0%, #c4ff3a 60%, #5a7e00 100%)",
                border: "1px solid #3a5400",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.6) inset, 0 0 8px rgba(196, 255, 58,0.5)",
              }}
            >
              {d}
            </div>
          ) : (
            <div
              key={d}
              className="skeo-raised-sm py-2 text-[var(--color-ink-3)]"
              style={{ borderRadius: 8 }}
            >
              {d}
            </div>
          )
        )}
      </div>

      <div className="space-y-1.5">
        <ScheduleRow time="10:00 – 10:30" label="Standup mit Eng-Team" />
        <ScheduleRow time="14:00 – 14:30" label="Demo: Reporting-Module" />
      </div>
    </div>
  );
}

function ScheduleRow({ time, label }: { time: string; label: string }) {
  return (
    <div
      className="skeo-raised-sm flex items-center justify-between px-3 py-2 text-[12px]"
      style={{ borderRadius: 10 }}
    >
      <span className="flex items-center gap-2 text-[var(--color-ink)]">
        <span className="led-green" style={{ width: 6, height: 6 }} />
        {label}
      </span>
      <span className="text-[10.5px] text-[var(--color-ink-3)]">{time}</span>
    </div>
  );
}
