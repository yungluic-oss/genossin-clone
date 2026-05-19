import { SectionHeader } from "./Services";

export default function Process() {
  return (
    <section id="process" className="relative py-28 px-4">
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Our Process"
          title={<>Our Simple, Smart, and Scalable Process</>}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          <StepCard
            step="Step 1"
            title="Smart Analyzing"
            body="We assess your needs and identify AI solutions to streamline workflows and improve efficiency."
            visual={<AnalyzeVisual />}
          />
          <StepCard
            step="Step 2"
            title="AI Development"
            body="Our team builds intelligent automation systems tailored to your business processes."
            visual={<CodeVisual />}
          />
          <StepCard
            step="Step 3"
            title="Seamless Integration"
            body="We smoothly integrate AI solutions into your existing infrastructure with minimal disruption."
            visual={<IntegrationVisual />}
          />
          <StepCard
            step="Step 4"
            title="Continuous Optimization"
            body="We refine performance, analyze insights, and enhance automation for long-term growth."
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
          <span className="inline-block text-[11px] px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent uppercase tracking-[0.16em]">
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
    { l: "System check", v: 100 },
    { l: "Process check", v: 80 },
    { l: "Speed check", v: 60 },
    { l: "Manual work", v: 45 },
    { l: "Repetative task", v: 30 },
  ];
  return (
    <div className="rounded-2xl bg-black/40 border border-white/5 p-4 space-y-3">
      <p className="text-[12px] text-white/55">Analyzing current workflow..</p>
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
        <span className="text-emerald-400">"inactive"</span>
        {"\n\n  "}
        <span className="text-pink">def</span>{" "}
        <span className="text-violet">check_trigger</span>(self, value):
        {"\n    "}
        <span className="text-pink">if</span> value &gt; self.threshold:
        {"\n      "}self.status ={" "}
        <span className="text-emerald-400">"active"</span>
        {"\n      "}
        <span className="text-pink">return</span>{" "}
        <span className="text-emerald-400">"Automation triggered!"</span>
        {"\n    "}
        <span className="text-pink">else</span>:
        {"\n      "}
        <span className="text-pink">return</span>{" "}
        <span className="text-emerald-400">"No action taken."</span>
      </pre>
    </div>
  );
}

function IntegrationVisual() {
  return (
    <div className="relative rounded-2xl bg-black/40 border border-white/5 p-6 min-h-[220px] flex items-center justify-between">
      <div className="flex flex-col items-center gap-2">
        <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet to-pink flex items-center justify-center font-display text-xl text-black">
          G
        </span>
        <span className="text-[11px] text-white/55">Our solution</span>
      </div>
      <svg
        className="flex-1 mx-4"
        viewBox="0 0 200 60"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 30 Q 100 -20 200 30"
          stroke="rgba(202,250,90,0.6)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M0 30 Q 100 80 200 30"
          stroke="rgba(129,74,200,0.6)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>
      <div className="flex flex-col items-center gap-2">
        <div className="grid grid-cols-2 gap-1.5">
          {["S", "N", "L", "G"].map((s) => (
            <span
              key={s}
              className="w-6 h-6 rounded-lg bg-white/10 border border-white/10 text-[10px] flex items-center justify-center text-white/75"
            >
              {s}
            </span>
          ))}
        </div>
        <span className="text-[11px] text-white/55">Your stack</span>
      </div>
    </div>
  );
}

function OptimizeVisual() {
  const rows = [
    { l: "Chatbot system", v: "Efficiency will increase by 20%", c: "text-accent" },
    { l: "Workflow system", v: "Update available..", c: "text-violet" },
    { l: "Sales system", v: "Up to date", c: "text-emerald-400" },
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
