"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Start", href: "./" },
  { label: "Lösungen", href: "./solutions" },
  { label: "Blog", href: "./blog" },
  { label: "Studio", href: "./about" },
  { label: "Kontakt", href: "./contact" },
];

const CTA_HREF = "https://cal.com";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close drawer when viewport crosses lg breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock scroll while mobile drawer open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <nav
      data-framer-name="Desktop"
      className="relative w-full bg-black text-white"
    >
      <div className="mx-auto flex h-[65px] w-full max-w-[1200px] items-center justify-between px-5 py-[10px]">
        {/* Left: logo + wordmark */}
        <a
          href="./"
          aria-label="Star Solutions — Startseite"
          className="flex shrink-0 items-center gap-3 text-white"
        >
          <StarMark className="h-7 w-auto" />
          <Wordmark className="h-[18px] w-auto" />
        </a>

        {/* Right cluster: links + CTA (desktop) */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="font-display text-white/90 transition-colors hover:text-white"
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display inline-flex items-center justify-center bg-accent text-black transition-[filter,transform] hover:brightness-95 active:translate-y-[1px]"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              padding: "10px 16px",
              borderRadius: "8px",
            }}
          >
            Termin buchen
          </a>
        </div>

        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 lg:hidden"
        >
          <span className="sr-only">Menü umschalten</span>
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute left-0 right-0 top-[65px] z-50 border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-1 px-5 py-4">
            <ul className="flex flex-col">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display block rounded-md px-3 py-3 text-white/90 hover:bg-white/5 hover:text-white"
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="font-display mt-3 inline-flex items-center justify-center bg-accent text-black"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                padding: "12px 16px",
                borderRadius: "8px",
              }}
            >
              Termin buchen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export function StarMark({ className = "h-8 w-auto" }: { className?: string }) {
  // The Stern mark from the Starvision identity — shared across both brands.
  return (
    <svg
      viewBox="0 0 499.52 438.18"
      fill="currentColor"
      aria-hidden
      className={`${className} shrink-0`}
    >
      <path d="M495.79,402.81c-48.37-60.37-129.74-156.96-131.82-174.97-3.88-33.53,74.15-108.83,127.82-198.52,11.9-19.89-5.16-30.71-30.06-28.54-22.47,1.95-70.99,29.35-77.43,32.52-41.87,20.59-140.45,71.66-150.57,72.85-11.18,1.32-81.99-25.9-131.9-43.49-7.74-2.73-30.98-14.07-48.62-15.06-17.5-.98-40.95,9.47-31.58,26.58,24.1,44,59.51,76.63,103.8,131.22,6.76,8.33,11.88,13.68,6.59,24.32-25.98,52.26-64.89,82.85-127.87,168.31-10.08,13.68,1.81,46.29,22.06,38.47,68.33-26.42,195.59-97.05,221.11-96.83,9.87.09,183.5,97.08,225.71,96.83,24.72-.15,30.56-23.93,22.76-33.67ZM333.67,300.79c-15.86.1-81.12-36.36-84.83-36.39-9.59-.09-57.42,26.46-83.1,36.39-7.61,2.94-12.08-9.31-8.29-14.46,23.67-32.12,38.29-43.61,48.06-63.25,1.99-4,.06-6.01-2.48-9.14-16.65-20.51-29.96-32.78-39.01-49.32-3.52-6.43,5.29-10.36,11.87-9.99,6.63.37,15.37,4.63,18.27,5.66,18.76,6.61,45.37,16.84,49.57,16.35,3.8-.45,40.85-19.64,56.59-27.38,2.42-1.19,20.65-11.49,29.1-12.22,9.36-.81,15.77,3.25,11.3,10.73-20.17,33.71-49.5,62.01-48.04,74.61.78,6.77,31.37,43.07,49.54,65.76,2.93,3.66.73,12.6-8.55,12.65Z" />
    </svg>
  );
}

export function Wordmark({ className = "h-6 w-auto" }: { className?: string }) {
  // viewBox cropped to the content bbox — the source SVG has ~70% empty padding
  // around the letters, which is why the wordmark looked tiny at any reasonable
  // pixel height. Tight crop = readable wordmark at h-6/h-7 in a nav bar.
  return (
    <svg
      viewBox="100 388 1758 143"
      fill="currentColor"
      aria-label="Star Solutions"
      className={className}
    >
      <path d="M216.75,529.73h-115.76v-53.21h26.87c21.44,27.67,52.86,47.23,88.89,53.21ZM241.98,527.07v2.67c-54.75,0-102.16-31.44-125.17-77.24-14.46-28.79,4.17-62.76,36.39-62.76,0,34.23,19.83,63.84,48.62,77.96,22.94,11.26,40.17,33.81,40.17,59.37ZM241.01,389.76v53.16h-65.08c-11.76-14.54-18.8-33.04-18.8-53.16h83.89Z" />
      <path d="M339.77,486.35v43.38h-53.21v-86.76h-43.38v-53.21c53.34,0,96.59,43.24,96.59,96.59ZM383.15,389.76v53.21h-49.54c-13.33-27.11-38.72-47.18-69.18-53.21h118.71Z" />
      <path d="M509.98,389.73v51.21c-47.93,0-88.79,40.85-88.79,88.79h-51.21c0-77.32,62.68-140,140-140ZM509.97,444.85l.02,84.89h-84.9c0-20.12,7.04-38.67,18.8-53.21h12.87v-12.87c14.6-11.76,33.09-18.8,53.21-18.8Z" />
      <path d="M1068.57,477.52v52.21h-113.39c0-29.39,23.82-52.21,53.21-52.21h60.18ZM955.19,512.24v-122.48h53.21v83.83c-25.39,0-51.04,21.45-53.21,38.64Z" />
      <path d="M1211.77,476.52v53.21h-86.79c-29.39,0-53.21-23.82-53.21-53.21v-86.79h53.21v72.62c0,7.82,6.34,14.16,14.16,14.16h72.62ZM1158.55,472.59v-82.83h53.21v82.83h-53.21Z" />
      <path d="M1361.37,529.73v-140h53.21v140h-53.21Z" />
      <path d="M1568.36,445.83c20.07,0,38.62,8.08,53.21,19.79v64.08h-53.21v-83.87h0ZM1708.39,529.73h-53.21c0-47.93-38.86-87.79-86.79-87.79v-52.21c77.32,0,140,62.68,140,140ZM1708.41,389.76v114.96c-5.88-36.08-25.49-67.66-53.21-89.09v-25.87h53.21Z" />
      <path d="M517.14,445.13s54.13,0,54.33-.05l-.02.02c2.46-3.02,3.45-3.74,4.54-6.16.42-.76-.03-1.48-.56-2.07-2.91-3.57-5.29-5.79-6.91-8.72-.16-.36-.3-.83-.05-1.17,1.47-1.74,4.26-.25,6.04.39,3.39,1.21,7.87,2.92,8.62,2.82,4.58-1.75,9.78-5.03,14.47-6.95,1.46-.7,4.8-.53,3.29,1.89-3.58,5.91-8.67,10.94-8.7,13.31-.01.37.12.59.3.92,1.63,2.67,4.16,5.6,6.26,8.25.94,1.22,1.92,2.24,2.64,3.37.53,1-.52,2.1-1.42,2.15l-.28.02c-2.58-.3-6.65-2.44-9.32-3.69-3.51-1.56-5.48-3.16-6.78-2.96-2.93.81-9.33,4.31-12.89,5.82-1.05.35-2.24,1.37-3.19.5-.46-.47-.67-1.3-.47-1.94.66-1.04,1.34-.97,2.02-1.86h-51.95v51.21h52.59c23.97,0,44.66-8.73,60.37-24.44,15.3-15.3,24.04-39.12,24.49-62.28l-.13-23.77h-137.33v26.61h0v28.77Z" />
      <path d="M636.25,474.44c-1.11,1.27-2.28,2.48-3.5,3.7-8.41,8.41-18.24,14.95-28.94,19.36v32.24h53.21v-32.08c0-12.26-9.02-21.45-20.78-23.22Z" />
      <rect x="517.13" y="504.13" width="53.21" height="25.61" />
      <path d="M889.64,460.48c.18,1.57,7.25,9.96,11.45,15.2.68.85.17,2.91-1.98,2.92h0c-3.67.02-18.76-8.41-19.61-8.41-2.22-.02-13.28,6.12-19.21,8.41-1.28.49-2.17.13-2.23-1.1h-48.36v52.21h53.21c23.97,0,45.66-9.73,61.37-25.44,15.3-15.3,24.88-35.29,25.34-58.45h-49.88c-4.57,7.08-10.42,11.94-10.11,14.65Z" />
      <path d="M896.46,389.75c-23.97,0-45.66,9.73-61.32,25.44-15.3,15.3-24.93,34.23-25.39,57.39h49.13c5.17-6.9,8.41-7.54,10.6-11.94.46-.92.01-1.39-.57-2.11-3.85-4.74-6.93-7.58-9.02-11.4-.81-1.49,1.22-2.4,2.74-2.31,1.53.09,3.55,1.07,4.22,1.31,4.34,1.53,10.49,3.89,11.46,3.78.88-.1,9.44-4.54,13.08-6.33.56-.28,4.77-2.66,6.73-2.83,2.05-.18,3.48-.35,2.76,1.21h48.79v-52.21h-53.21Z" />
      <path d="M778.63,529.74h-115.76v-53.21h26.87c21.44,27.67,52.86,47.23,88.89,53.21" />
      <path d="M803.86,529.74c-54.75,0-102.16-31.44-125.17-77.24-14.46-28.79,4.17-62.76,36.39-62.76,0,34.23,19.83,63.84,48.62,77.96,22.94,11.26,40.17,33.81,40.17,59.37" />
      <path d="M802.89,442.93h-65.08c-11.76-14.54-18.8-33.04-18.8-53.16h83.89" />
      <path d="M1216.58,389.76c53.34,0,96.59,43.24,96.59,96.59v43.38h-53.21v-86.76h-43.38" />
      <path d="M1356.56,442.97h-49.54c-13.33-27.11-38.72-47.18-69.18-53.21h118.71" />
      <path d="M1501.42,460.48c.18,1.57,7.25,9.96,11.45,15.2.68.85.17,2.91-1.98,2.92h0c-3.67.02-18.76-8.41-19.61-8.41-2.22-.02-13.28,6.12-19.21,8.41-1.28.49-2.17.13-2.23-1.1h-48.36v52.21h53.21c23.97,0,45.66-9.73,61.37-25.44,15.3-15.3,24.88-35.29,25.34-58.45h-49.88c-4.57,7.08-10.42,11.94-10.11,14.65Z" />
      <path d="M1508.25,389.75c-23.97,0-45.66,9.73-61.32,25.44-15.3,15.3-24.93,34.23-25.39,57.39h49.13c5.17-6.9,8.41-7.54,10.6-11.94.46-.92.01-1.39-.57-2.11-3.85-4.74-6.93-7.58-9.02-11.4-.81-1.49,1.22-2.4,2.74-2.31,1.53.09,3.55,1.07,4.22,1.31,4.34,1.53,10.49,3.89,11.46,3.78.88-.1,9.44-4.54,13.08-6.33.56-.28,4.77-2.66,6.73-2.83,2.05-.18,3.48-.35,2.76,1.21h48.79v-52.21h-53.21Z" />
      <path d="M1831.07,529.74h-115.76v-53.21h26.87c21.44,27.67,52.86,47.23,88.89,53.21Z" />
      <path d="M1856.31,529.74c-54.75,0-102.16-31.44-125.17-77.24-14.46-28.79,4.17-62.76,36.39-62.76,0,34.23,19.83,63.84,48.62,77.96,22.94,11.26,40.17,33.81,40.17,59.37" />
      <path d="M1855.34,442.93h-65.08c-11.76-14.54-18.8-33.04-18.8-53.16h83.89" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
