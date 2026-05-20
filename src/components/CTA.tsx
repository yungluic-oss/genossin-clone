"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle, Mail } from "@/components/icons";

const PROJECT_TYPES = [
  "Web-App / SaaS",
  "Mobile-App",
  "AI-Integration",
  "Internal Tool / Dashboard",
  "Anderes",
];

const CONTACT_EMAIL = "hi@starsolutions.ch";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState(PROJECT_TYPES[0]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Neue Projektanfrage — ${type}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nProjekt-Typ: ${type}\n\nNachricht:\n${message}\n`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative px-4 pt-24 pb-12">
      <div
        className="skeo-raised relative mx-auto max-w-[1100px] overflow-hidden px-6 py-16 sm:px-12 sm:py-20"
        style={{ borderRadius: 28 }}
      >
        {/* Neon glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[520px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle at center, rgba(57,255,20,0.25), transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-24 h-[360px] w-[440px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle at center, rgba(57,255,20,0.15), transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          {/* Left */}
          <div>
            <span className="skeo-nameplate font-display">
              <span className="led-green animate-neon" style={{ width: 8, height: 8 }} />
              Projekt starten
            </span>

            <h2
              className="font-display headline-engraved mt-5 text-balance text-4xl sm:text-5xl"
              style={{ letterSpacing: "-2.2px", lineHeight: 1.05, fontWeight: 600 }}
            >
              Lassen Sie uns
              <br className="hidden sm:block" /> Ihr Produkt bauen.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--color-ink-3)]">
              Schreiben Sie uns kurz, woran Sie arbeiten. Wir melden uns
              innerhalb von 24 Stunden mit einem ersten Termin — kostenlos und
              unverbindlich.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "30-min Erstgespräch, kostenlos",
                "Realistische Einschätzung & Roadmap",
                "Sie behalten den vollständigen Code",
              ].map((r) => (
                <li
                  key={r}
                  className="flex items-center gap-2.5 text-[14px] text-[var(--color-ink-2)]"
                >
                  <CheckCircle className="h-4 w-4 text-[#1fa800]" />
                  {r}
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="skeo-btn-ghost font-display mt-8 inline-flex text-[13.5px]"
              style={{ padding: "10px 16px" }}
            >
              <Mail className="h-4 w-4 text-[var(--color-ink-2)]" />
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Right: form panel */}
          <div
            className="skeo-inset-deep relative p-6 sm:p-8"
            style={{ borderRadius: 22 }}
          >
            {submitted ? (
              <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
                <div
                  className="grid h-12 w-12 place-items-center rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #8dff5e 0%, #39ff14 60%, #1fa800 100%)",
                    border: "1px solid #1a7a00",
                    color: "#0a2a00",
                    boxShadow:
                      "0 1px 0 rgba(255,255,255,0.6) inset, 0 0 14px rgba(57,255,20,0.6)",
                  }}
                >
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-display headline-engraved mt-5 text-2xl" style={{ fontWeight: 600 }}>
                  Danke!
                </h3>
                <p className="mt-2 max-w-xs text-[14px] text-[var(--color-ink-3)]">
                  Ihre E-Mail-App sollte sich geöffnet haben. Wenn nicht,
                  schreiben Sie uns direkt an{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-[var(--color-ink)] underline-offset-4 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Ihr Name" required />
                  <Field
                    label="E-Mail"
                    name="email"
                    type="email"
                    placeholder="name@firma.ch"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-3)]">
                    Projekt-Typ
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {PROJECT_TYPES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setType(t)}
                        className={
                          type === t
                            ? "skeo-btn-neon font-display text-[12.5px]"
                            : "skeo-btn-ghost font-display text-[12.5px]"
                        }
                        style={{ padding: "7px 14px", borderRadius: 999 }}
                      >
                        {type === t ? (
                          <span className="led-green" style={{ width: 6, height: 6 }} />
                        ) : null}
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-3)]"
                  >
                    Worum geht&apos;s?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Skizzieren Sie kurz das Vorhaben — was bauen Sie, gegen welches Problem, wie weit sind Sie?"
                    className="skeo-inset w-full resize-none px-4 py-3 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-3)] focus:outline-none"
                    style={{ borderRadius: 12 }}
                  />
                </div>

                <button
                  type="submit"
                  className="skeo-btn-neon group font-display mt-2 text-[14px]"
                  style={{ padding: "14px 22px" }}
                >
                  <span className="led-green" style={{ width: 7, height: 7 }} />
                  Anfrage senden
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <p className="text-[11.5px] text-[var(--color-ink-3)]">
                  Wir antworten innerhalb von 24h. Ihre Angaben werden
                  ausschliesslich zur Beantwortung Ihrer Anfrage verwendet.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-3)]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="skeo-inset w-full px-4 py-3 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-3)] focus:outline-none"
        style={{ borderRadius: 12 }}
      />
    </div>
  );
}
