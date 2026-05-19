import { SectionHeader } from "./Services";

const STEPS = [
  {
    n: "01",
    title: "Analyze",
    body: "We map your workflows, talk to your team, and pinpoint where AI actually moves the needle — no theatre, no fluff.",
  },
  {
    n: "02",
    title: "Develop",
    body: "We design and build the automations and agents that fit your stack, your data, and the way your team already works.",
  },
  {
    n: "03",
    title: "Integrate",
    body: "Tight, secure integrations with the tools you live in — CRM, support, calendar, billing — rolled out without disrupting flow.",
  },
  {
    n: "04",
    title: "Optimize",
    body: "Once it's live, we measure, iterate, and improve. Your systems get sharper every month, not slower.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 px-4">
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Our process"
          title={
            <>
              Simple, smart, and
              <br className="hidden sm:block" />{" "}
              <span className="italic font-normal">scalable</span>
            </>
          }
          sub="A repeatable four-step process that turns ideas into shipping AI in weeks, not quarters."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="card-surface p-7 relative overflow-hidden"
            >
              <div
                aria-hidden
                className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 ${
                  i % 2 === 0 ? "bg-violet" : "bg-accent"
                }`}
              />
              <p className="relative font-display text-5xl text-white/15 font-medium">
                {s.n}
              </p>
              <h3 className="relative mt-6 font-display text-2xl tracking-tight">
                {s.title}
              </h3>
              <p className="relative mt-2.5 text-sm text-white/60 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
