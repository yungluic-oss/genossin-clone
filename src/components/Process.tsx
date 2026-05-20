export default function Process() {
  return (
    <section id="process" className="relative px-4 py-28">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="skeo-nameplate font-display">
            <span className="led-green" style={{ width: 7, height: 7 }} />
            Prozess
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
            Vier Schritte vom ersten Workshop
            <br className="hidden sm:block" /> bis zum Live-Produkt.
          </h2>
          <p className="engraved mt-5 max-w-xl text-base text-[var(--color-ink-3)] sm:text-lg">
            Wir liefern in 2-Wochen-Sprints, mit Demos am Ende jedes Sprints —
            damit Sie früh sehen, was wir bauen und Kurs halten können.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          <StepCard
            step="Schritt 1"
            title="Discovery & Strategy"
            body="Wir verstehen Ihr Geschäft, Ihre Nutzer und Ihre Zielgruppe. Daraus entsteht ein klarer Scope mit Architektur-Entscheid, Tech-Stack und realistischem Zeitplan."
            visual={<AnalyzeVisual />}
          />
          <StepCard
            step="Schritt 2"
            title="Design & Prototype"
            body="UX-Flows, Wireframes und ein interaktiver Prototyp in Figma. Sie sehen das Produkt, bevor wir die erste Zeile Code schreiben — und Änderungen kosten nichts."
            visual={<CodeVisual />}
          />
          <StepCard
            step="Schritt 3"
            title="Build & Ship"
            body="Wir entwickeln in 2-Wochen-Sprints mit wöchentlichen Demos. Code geht direkt in Ihr GitHub-Repo, mit CI/CD auf Vercel oder Ihrer Infrastruktur."
            visual={<IntegrationVisual />}
          />
          <StepCard
            step="Schritt 4"
            title="Iterate & Scale"
            body="Nach dem Launch: Monitoring, Bugfixes, Features. Auf Wunsch als Retainer — oder vollständige Übergabe an Ihr Team mit Dokumentation und Onboarding."
            visual={<OptimizeVisual />}
          />
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  title,
  body,
  visual,
}: {
  step: string;
  title: string;
  body: string;
  visual: React.ReactNode;
}) {
  return (
    <div
      className="skeo-raised relative overflow-hidden"
      style={{ borderRadius: 22 }}
    >
      <div className="flex min-h-[420px] flex-col gap-5 p-7">
        <div>
          <span className="skeo-nameplate font-display inline-block">
            <span className="led-green" style={{ width: 7, height: 7 }} />
            {step}
          </span>
          <h3 className="font-display headline-engraved mt-4 text-[26px] tracking-tight" style={{ letterSpacing: "-1px", fontWeight: 600 }}>
            {title}
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-ink-3)]">
            {body}
          </p>
        </div>
        <div className="flex flex-1 items-end">{visual}</div>
      </div>
    </div>
  );
}

function AnalyzeVisual() {
  const checks = [
    { l: "Geschäftsziele", v: 100 },
    { l: "User-Research", v: 85 },
    { l: "Tech-Architektur", v: 70 },
    { l: "Datenmodell", v: 55 },
    { l: "Scope & Roadmap", v: 40 },
  ];
  return (
    <div className="skeo-inset w-full space-y-3 p-4" style={{ borderRadius: 14 }}>
      <p className="text-[12px] text-[var(--color-ink-3)]">Discovery-Phase läuft…</p>
      <div className="space-y-2.5">
        {checks.map((c) => (
          <div key={c.l}>
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-[var(--color-ink)]">{c.l}</span>
              <span className="text-[var(--color-ink-3)]">{c.v}%</span>
            </div>
            <div
              className="skeo-inset mt-1.5 h-1.5 overflow-hidden"
              style={{ borderRadius: 999 }}
            >
              <div
                className="h-full"
                style={{
                  width: `${c.v}%`,
                  background:
                    "linear-gradient(180deg, #8dff5e 0%, #39ff14 60%, #1fa800 100%)",
                  boxShadow: "0 0 6px rgba(57,255,20,0.6)",
                  borderRadius: 999,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeVisual() {
  return (
    <div
      className="skeo-inset w-full overflow-hidden p-4 font-mono text-[11.5px] leading-relaxed"
      style={{
        borderRadius: 14,
        background:
          "linear-gradient(180deg, #d6d3c8 0%, #ece9df 100%)",
      }}
    >
      <pre
        className="whitespace-pre-wrap"
        style={{ color: "#1a1a1a", textShadow: "0 1px 0 rgba(255,255,255,0.7)" }}
      >
        <span style={{ color: "#1fa800" }}>class</span>{" "}
        <span style={{ color: "#0a4a00", fontWeight: 700 }}>Product</span>:
        {"\n  "}
        <span style={{ color: "#1fa800" }}>def</span>{" "}
        <span style={{ color: "#0a4a00" }}>__init__</span>(self, scope):
        {"\n    "}self.scope = scope
        {"\n    "}self.status ={" "}
        <span style={{ color: "#1fa800" }}>&quot;in_design&quot;</span>
        {"\n\n  "}
        <span style={{ color: "#1fa800" }}>def</span>{" "}
        <span style={{ color: "#0a4a00" }}>ship</span>(self):
        {"\n    "}self.status ={" "}
        <span style={{ color: "#1fa800" }}>&quot;live&quot;</span>
        {"\n    "}
        <span style={{ color: "#1fa800" }}>return</span>{" "}
        <span style={{ color: "#1fa800" }}>&quot;🚀 Production!&quot;</span>
      </pre>
    </div>
  );
}

function IntegrationVisual() {
  return (
    <div
      className="skeo-inset relative flex w-full items-center justify-between p-6"
      style={{ borderRadius: 14, minHeight: 220 }}
    >
      <div className="flex flex-col items-center gap-2">
        <span
          className="grid h-14 w-14 place-items-center text-xl font-semibold"
          style={{
            background:
              "linear-gradient(180deg, #8dff5e 0%, #39ff14 50%, #1fa800 100%)",
            border: "1px solid #1a7a00",
            color: "#0a2a00",
            borderRadius: 16,
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.65) inset, 0 -1px 0 rgba(0,0,0,0.15) inset, 0 0 14px rgba(57,255,20,0.6), 0 4px 8px rgba(0,0,0,0.15)",
          }}
        >
          S
        </span>
        <span className="text-[11px] text-[var(--color-ink-3)]">
          Unsere Lösung
        </span>
      </div>
      <svg className="mx-4 flex-1" viewBox="0 0 200 60" fill="none" aria-hidden>
        <path
          d="M0 30 Q 100 -20 200 30"
          stroke="#1fa800"
          strokeWidth="1.8"
          strokeDasharray="4 4"
          opacity="0.7"
        />
        <path
          d="M0 30 Q 100 80 200 30"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.4"
        />
      </svg>
      <div className="flex flex-col items-center gap-2">
        <div className="grid grid-cols-2 gap-1.5">
          {["S", "N", "M", "T"].map((s) => (
            <span
              key={s}
              className="skeo-raised-sm grid h-7 w-7 place-items-center text-[10px] text-[var(--color-ink)]"
              style={{ borderRadius: 8 }}
            >
              {s}
            </span>
          ))}
        </div>
        <span className="text-[11px] text-[var(--color-ink-3)]">Ihr Stack</span>
      </div>
    </div>
  );
}

function OptimizeVisual() {
  const rows = [
    { l: "Performance-Monitoring", v: "Median 92ms · stable", state: "live" as const },
    { l: "Feature-Flag · Pricing-V2", v: "Rollout läuft (50 %)", state: "wip" as const },
    { l: "Sentry · Error-Tracking", v: "0 kritische Errors", state: "live" as const },
  ];
  return (
    <div className="skeo-inset w-full space-y-2 p-4" style={{ borderRadius: 14 }}>
      {rows.map((r) => (
        <div
          key={r.l}
          className="skeo-raised-sm flex items-center justify-between px-3 py-2.5"
          style={{ borderRadius: 10 }}
        >
          <div className="flex flex-col">
            <p className="text-[13px] text-[var(--color-ink)]">{r.l}</p>
            <p
              className="mt-0.5 text-[11px]"
              style={{ color: r.state === "live" ? "#1fa800" : "#7a6a00" }}
            >
              {r.v}
            </p>
          </div>
          {r.state === "live" ? (
            <span className="led-green" style={{ width: 8, height: 8 }} />
          ) : (
            <span className="led-off" style={{ width: 8, height: 8 }} />
          )}
        </div>
      ))}
    </div>
  );
}
