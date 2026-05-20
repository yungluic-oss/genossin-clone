"use client";

import type { SVGProps } from "react";
import { StarMark, Wordmark } from "@/components/Nav";

type IconProps = SVGProps<SVGSVGElement>;

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
    <footer className="relative px-4 pb-8">
      <div
        className="skeo-raised relative mx-auto max-w-[1180px] overflow-hidden"
        style={{ borderRadius: 28 }}
      >
        <div className="grid grid-cols-1 gap-12 px-6 py-12 sm:px-10 sm:py-14 md:grid-cols-2">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 text-[var(--color-ink)]">
              <StarMark className="h-7 w-auto" />
              <Wordmark className="h-[16px] w-auto" />
            </div>

            <p className="mt-6 max-w-[360px] text-[15px] leading-relaxed text-[var(--color-ink-3)]">
              Star Solutions ist das Software-Studio aus Zürich. Wir bauen
              Web-Apps, Mobile-Apps und AI-Integrationen, die produktiv gehen
              und produktiv bleiben.
            </p>

            <a
              href="https://genossin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="skeo-raised-sm group mt-7 inline-flex max-w-[360px] items-center gap-3 p-4 transition-transform hover:-translate-y-0.5"
              style={{ borderRadius: 14 }}
            >
              <div
                className="grid h-10 w-10 shrink-0 place-items-center text-[11px] font-semibold"
                style={{
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #e0ddd2 100%)",
                  border: "1px solid rgba(0,0,0,0.15)",
                  borderRadius: 10,
                  color: "#0a0a0a",
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.9) inset, 0 1px 2px rgba(0,0,0,0.12)",
                }}
              >
                SV
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-3)]">
                  Schwester-Brand
                </p>
                <p className="mt-1 text-[14px] text-[var(--color-ink)]">
                  Starvision — Branding & Design
                </p>
              </div>
              <svg
                className="ml-auto h-4 w-4 shrink-0 text-[var(--color-ink-3)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-ink)]"
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

          {/* Right */}
          <div className="grid grid-cols-3 gap-8 md:w-full md:max-w-[520px] md:justify-self-end">
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
                { label: "Starvision", href: "https://genossin.com" },
              ]}
            />
            <div>
              <p className="font-display headline-engraved text-[15px] font-semibold text-[var(--color-ink)]">
                Social
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
                  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
                  { label: "Twitter", href: "https://x.com", Icon: TwitterX },
                ].map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[15px] text-[var(--color-ink-3)] transition-colors hover:text-[var(--color-ink)]"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="skeo-groove" />

        <div className="flex flex-col items-center justify-between gap-2 px-6 py-5 text-[13px] text-[var(--color-ink-3)] sm:flex-row sm:px-10">
          <p>Zürich · Schweiz</p>
          <p className="flex items-center gap-2">
            <span className="led-green" style={{ width: 6, height: 6 }} />
            © 2026 Star Solutions. Alle Rechte vorbehalten.
          </p>
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
      <p className="font-display headline-engraved text-[15px] font-semibold text-[var(--color-ink)]">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              className="text-[15px] text-[var(--color-ink-3)] transition-colors hover:text-[var(--color-ink)]"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
