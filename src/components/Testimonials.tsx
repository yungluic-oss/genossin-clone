import { CheckCircle as CheckCircle2 } from "@/components/icons";
import { SectionHeader } from "./Services";

const FOUNDERS = [
  {
    name: "Jordan Reeves",
    role: "Founder, Northwind",
    quote:
      "Genossin replaced three brittle scripts with one calm system. Our ops team finally has weekends back.",
    email: "jordan@northwind.co",
    company: "Northwind",
  },
  {
    name: "Priya Shah",
    role: "Founder, Cascade Labs",
    quote:
      "We got more value in six weeks than from a year of consultants. They build for the humans, not the demo.",
    email: "priya@cascade.io",
    company: "Cascade",
  },
  {
    name: "Marco Linder",
    role: "Founder, Orbital",
    quote:
      "They scoped tight, shipped tighter, and the support agent is now our most-loved teammate.",
    email: "marco@orbital.app",
    company: "Orbital",
  },
  {
    name: "Sara Klein",
    role: "Founder, Helios",
    quote:
      "Pragmatic, fast, and quietly excellent. Exactly the partner we needed for our first AI rollout.",
    email: "sara@helios.com",
    company: "Helios",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-4">
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Founders"
          title={
            <>
              The people who let us
              <br className="hidden sm:block" /> rewire their business
            </>
          }
          sub="Founders and operators who handed us their hardest workflows — and got their afternoons back."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {FOUNDERS.map((f) => (
            <article
              key={f.name}
              className="card-surface p-7 flex flex-col gap-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet to-pink shrink-0" />
                <div className="min-w-0">
                  <p className="font-display text-lg tracking-tight flex items-center gap-2">
                    {f.name}
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </p>
                  <p className="text-xs text-white/55">{f.role}</p>
                </div>
              </div>
              <p className="text-[15px] text-white/80 leading-relaxed">
                “{f.quote}”
              </p>
              <div className="flex items-center justify-between text-xs text-white/55 pt-4 border-t border-white/[0.07]">
                <span>{f.email}</span>
                <span>{f.company}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
