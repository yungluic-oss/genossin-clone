import { ArrowUpRight, Instagram, Linkedin, TwitterX as Twitter, Facebook } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] mt-10">
      <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex w-8 h-8 items-center justify-center rounded-md bg-gradient-to-br from-violet to-pink text-black">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden>
                <path
                  d="M5 12h6M5 7h14M5 17h10"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="font-display font-semibold tracking-tight text-lg">
              GENOSSIN
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-white/55 leading-relaxed">
            A modern AI automation studio for startups and growing teams.
            Tailored systems that ship fast and compound over time.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/[0.04] border border-white/10 text-white/65 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Solutions"
          items={[
            "Workflow Automation",
            "AI Assistant",
            "Conversational Agents",
            "Data & RAG",
          ]}
        />
        <FooterCol
          title="Company"
          items={["About", "Blog", "Case studies", "Contact"]}
        />
        <FooterCol
          title="Resources"
          items={["Pricing", "Process", "Benefits", "FAQ"]}
        />
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Genossin Technologies — All rights reserved.</p>
          <a
            href="mailto:hello@genossin.com"
            className="inline-flex items-center gap-1.5 text-white/65 hover:text-white"
          >
            hello@genossin.com <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-white/45">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i}>
            <a
              href="#"
              className="text-sm text-white/75 hover:text-white transition-colors"
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
