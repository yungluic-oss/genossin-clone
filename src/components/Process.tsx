export default function Process() {
  return (
    <section id="process" className="relative py-28 px-4">
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Prozess
          </span>
          <h2
            className="font-display mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(32px, 4vw, 50px)",
              lineHeight: "1.1",
              letterSpacing: "-2px",
              fontWeight: 400,
            }}
          >
            Vier Schritte vom ersten Workshop
            <br className="hidden sm:block" /> bis zum Live-Produkt.
          </h2>
          <p className="mt-5 max-w-xl text-white/60 text-base sm:text-lg">
            Wir liefern in 2-Wochen-Sprints, mit Demos am Ende jedes Sprints —
            damit Sie früh sehen, was wir bauen und Kurs halten können.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
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
    <div className="card-surface relative overflow-hidden">
      <div className="p-7 flex flex-col gap-5 min-h-[420px]">
        <div>
          <span className="inline-block text-[12px] px-3 py-1.5 rounded-md bg-white/[0.05] text-white/85 leading-none">
            {step}
          </span>
          <h3 className="mt-4 font-display text-2xl tracking-tight">{title}</h3>
          <p className="mt-2 text-sm text-white/60 leading-relaxed">{body}</p>
        </div>
        <div className="flex-1 flex items-end">{visual}</div>
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
    <div className="rounded-2xl bg-black/40 border border-white/5 p-4 space-y-3">
      <p className="text-[12px] text-white/55">Discovery-Phase läuft…</p>
      <div className="space-y-2">
        {checks.map((c) => (
          <div key={c.l}>
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-white/80">{c.l}</span>
              <span className="text-white/45">{c.v}%</span>
            </div>
            <div className="mt-1 h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-accent"
                style={{ width: `${c.v}%` }}
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
    <div className="rounded-2xl bg-black/60 border border-white/5 p-4 font-mono text-[11.5px] leading-relaxed overflow-hidden">
      <pre className="text-white/85 whitespace-pre-wrap">
        <span className="text-pink">class</span>{" "}
        <span className="text-accent">Automation</span>:
        {"\n  "}
        <span className="text-pink">def</span>{" "}
        <span className="text-violet">__init__</span>(self, threshold):
        {"\n    "}self.threshold = threshold
        {"\n    "}self.status ={" "}
        <span className="text-emerald-400">&quot;inactive&quot;</span>
        {"\n\n  "}
        <span className="text-pink">def</span>{" "}
        <span className="text-violet">check_trigger</span>(self, value):
        {"\n    "}
        <span className="text-pink">if</span> value &gt; self.threshold:
        {"\n      "}self.status ={" "}
        <span className="text-emerald-400">&quot;active&quot;</span>
        {"\n      "}
        <span className="text-pink">return</span>{" "}
        <span className="text-emerald-400">&quot;Automation triggered!&quot;</span>
        {"\n    "}
        <span className="text-pink">else</span>:
        {"\n      "}
        <span className="text-pink">return</span>{" "}
        <span className="text-emerald-400">&quot;No action taken.&quot;</span>
      </pre>
    </div>
  );
}

function IntegrationVisual() {
  return (
    <div className="relative rounded-2xl bg-black/40 border border-white/5 p-6 min-h-[220px] flex items-center justify-between">
      <div className="flex flex-col items-center gap-2">
        <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-violet flex items-center justify-center font-display text-xl text-black">
          S
        </span>
        <span className="text-[11px] text-white/55">Unsere Lösung</span>
      </div>
      <svg
        className="flex-1 mx-4"
        viewBox="0 0 200 60"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 30 Q 100 -20 200 30"
          stroke="rgba(191,212,222,0.7)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M0 30 Q 100 80 200 30"
          stroke="rgba(74,115,200,0.7)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>
      <div className="flex flex-col items-center gap-2">
        <div className="grid grid-cols-2 gap-1.5">
          {["S", "N", "M", "T"].map((s) => (
            <span
              key={s}
              className="w-6 h-6 rounded-lg bg-white/10 border border-white/10 text-[10px] flex items-center justify-center text-white/75"
            >
              {s}
            </span>
          ))}
        </div>
        <span className="text-[11px] text-white/55">Ihr Stack</span>
      </div>
    </div>
  );
}

function OptimizeVisual() {
  const rows = [
    { l: "Performance-Monitoring", v: "Median 92ms · stable", c: "text-accent" },
    { l: "Feature-Flag · Pricing-V2", v: "Rollout läuft (50 %)", c: "text-violet" },
    { l: "Sentry · Error-Tracking", v: "0 kritische Errors", c: "text-emerald-400" },
  ];
  return (
    <div className="rounded-2xl bg-black/40 border border-white/5 p-4 space-y-2">
      {rows.map((r) => (
        <div
          key={r.l}
          className="px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/5"
        >
          <p className="text-[13px]">{r.l}</p>
          <p className={`text-[11px] mt-0.5 ${r.c}`}>{r.v}</p>
        </div>
      ))}
    </div>
  );
}
