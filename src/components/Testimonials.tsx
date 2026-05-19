import { CheckCircle as CheckCircle2 } from "@/components/icons";
import { SectionHeader } from "./Services";

const FOUNDERS = [
  {
    name: "Jack Daniel",
    role: "Founder",
    email: "justin@main.com",
    company: "Xavier LLC",
    photo: "/assets/wZ4QywsLlJwC6C7w4D9W92Oqug.jpeg",
  },
  {
    name: "Gorge Chapel",
    role: "Founder",
    email: "gorge@mail.com",
    company: "Chapel LLC",
    photo: "/assets/CDxS3e61UksiMm0oJGi80w7vEA.jpeg",
  },
  {
    name: "Mike Tylor",
    role: "Founder",
    email: "mike@Cmb.com",
    company: "CMB LLC",
    photo: "/assets/JK0fwwNQempKT9E5v6SvIj81ag.jpeg",
  },
  {
    name: "Thomas Shelby",
    role: "Founder",
    email: "Thimas@Sby.com",
    company: "Shelby.co",
    photo: "/assets/TbStOE6QtWLglNJaSOxQJqyQJOE.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section id="founders" className="relative py-28 px-4">
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader eyebrow="Founders" title={<>Trusted by founders building serious teams</>} />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FOUNDERS.map((f) => (
            <article key={f.name} className="card-surface p-5 flex flex-col gap-4">
              <div
                className="aspect-[4/5] rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${f.photo})` }}
                aria-label={f.name}
              />
              <div>
                <p className="font-display text-lg tracking-tight flex items-center gap-1.5">
                  {f.name}
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </p>
                <p className="text-xs text-white/55">{f.role}</p>
              </div>
              <div className="text-[12px] grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 pt-3 border-t border-white/[0.07]">
                <span className="text-white/45">E-mail</span>
                <span className="text-white/85 truncate">{f.email}</span>
                <span className="text-white/45">Company</span>
                <span className="text-white/85">{f.company}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
