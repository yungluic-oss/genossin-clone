import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  TwitterX as Twitter,
  Facebook,
} from "@/components/icons";

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
          <p className="mt-5 max-w-sm text-sm text-white/65 leading-relaxed">
            Genossin – Automate Smarter, Optimize Faster, and Grow Stronger.
          </p>
          <form className="mt-6 flex items-center gap-2 max-w-sm">
            <input
              type="email"
              placeholder="Join our newsletter"
              className="flex-1 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-sm placeholder:text-white/45 focus:outline-none focus:border-accent/60"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-accent text-black inline-flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Subscribe"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <FooterCol
          title="Links"
          items={[
            { label: "Services", href: "#services" },
            { label: "Process", href: "#process" },
            { label: "Case studies", href: "#cases" },
            { label: "Pricing", href: "#" },
          ]}
        />
        <FooterCol
          title="Pages"
          items={[{ label: "404", href: "#" }]}
        />
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Socials</p>
          <ul className="mt-4 space-y-2.5">
            {[
              { label: "Instagram", Icon: Instagram },
              { label: "Facebook", Icon: Facebook },
              { label: "Linkedin", Icon: Linkedin },
              { label: "Twitter", Icon: Twitter },
            ].map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/45">
          <p>© All right reserved</p>
          <p>Design by Ayush</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-white/45">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              className="text-sm text-white/75 hover:text-white transition-colors"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
