"use client";

import type { SVGProps } from "react";
import { StarMark, Wordmark } from "@/components/Nav";

type IconProps = SVGProps<SVGSVGElement>;

// Brand icons defined inline (lucide-react@1.16.0 lacks these).
const Instagram = ({ className, ...p }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
    {...p}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Linkedin = ({ className, ...p }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
    {...p}
  >
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9V9z" />
  </svg>
);

const TwitterX = ({ className, ...p }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
    {...p}
  >
    <path d="M17.53 3H20.5l-6.5 7.43L21.75 21H15.7l-4.74-6.2L5.5 21H2.53l6.95-7.94L2 3h6.2l4.28 5.66L17.53 3zm-1.05 16.2h1.65L7.6 4.7H5.83L16.48 19.2z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left block: wordmark + tagline + newsletter */}
        <div>
          <div className="flex items-center gap-3 text-white">
            <StarMark className="h-7 w-auto" />
            <Wordmark className="h-[18px] w-auto" />
          </div>

          <p className="mt-6 max-w-[360px] text-[15px] text-white/65 leading-relaxed">
            Star Solutions ist das Software-Studio aus Zürich. Wir bauen
            Web-Apps, Mobile-Apps und AI-Integrationen, die produktiv gehen
            und produktiv bleiben.
          </p>

          {/* Sister-site cross-link */}
          <a
            href="https://genossin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex max-w-[360px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div
              className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-[11px] font-medium text-black"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-strong) 100%)",
              }}
            >
              SV
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                Schwester-Brand
              </p>
              <p className="mt-1 text-[14px] text-white">
                Starvision — Branding & Design
              </p>
            </div>
            <svg
              className="ml-auto h-4 w-4 shrink-0 text-white/45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </a>
        </div>

        {/* Right block: 3 column nav */}
        <div className="grid grid-cols-3 gap-8 md:justify-self-end md:w-full md:max-w-[520px]">
          <FooterCol
            title="Studio"
            items={[
              { label: "Leistungen", href: "#services" },
              { label: "Prozess", href: "#process" },
              { label: "Arbeiten", href: "#cases" },
              { label: "Preise", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ]}
          />
          <FooterCol
            title="Kontakt"
            items={[
              { label: "Projekt starten", href: "#contact" },
              { label: "hi@starsolutions.ch", href: "mailto:hi@starsolutions.ch" },
              { label: "Zürich, Schweiz", href: "#contact" },
              { label: "Starvision (Design)", href: "https://genossin.com" },
            ]}
          />
          <div>
            <p className="font-display font-semibold text-[15px] text-white">
              Social
            </p>
            <ul className="mt-4 space-y-3">
              {[
                {
                  label: "Instagram",
                  href: "https://instagram.com",
                  Icon: Instagram,
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                  Icon: Linkedin,
                },
                {
                  label: "Twitter",
                  href: "https://x.com",
                  Icon: TwitterX,
                },
              ].map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[15px] text-white/65 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-white/55">
          <p>Zürich · Schweiz</p>
          <p>© 2026 Star Solutions. Alle Rechte vorbehalten.</p>
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
      <p className="font-display font-semibold text-[15px] text-white">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              className="text-[15px] text-white/65 hover:text-white transition-colors"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
