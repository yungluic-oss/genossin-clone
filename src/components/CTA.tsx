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
      <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0710] px-6 py-16 sm:px-12 sm:py-20">
        {/* Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(74,115,200,0.55),_transparent_70%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-24 h-[360px] w-[440px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(191,212,222,0.22),_transparent_70%)] blur-3xl"
        />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-center">
          {/* Left: heading + reasons + contact */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Projekt starten
            </span>

            <h2 className="font-display mt-5 text-balance text-4xl font-normal leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
              Lassen Sie uns
              <br className="hidden sm:block" /> Ihr Produkt bauen.
            </h2>
            <p className="mt-5 max-w-md text-[15px] text-white/65 leading-relaxed">
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
                  className="flex items-center gap-2.5 text-[14px] text-white/85"
                >
                  <CheckCircle className="h-4 w-4 text-accent" />
                  {r}
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 inline-flex items-center gap-2 text-[13.5px] text-white/70 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Right: form */}
          <div className="relative rounded-2xl border border-white/[0.08] bg-black/40 p-6 sm:p-8 backdrop-blur">
            {submitted ? (
              <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-accent/15 text-accent">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-display mt-5 text-2xl text-white">
                  Danke!
                </h3>
                <p className="mt-2 max-w-xs text-[14px] text-white/65">
                  Ihre E-Mail-App sollte sich geöffnet haben. Wenn nicht,
                  schreiben Sie uns direkt an{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-white underline-offset-4 hover:underline"
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
                  <label className="mb-2 block text-[12px] uppercase tracking-[0.14em] text-white/55">
                    Projekt-Typ
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {PROJECT_TYPES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setType(t)}
                        className={`rounded-full border px-3 py-1.5 text-[12.5px] transition-colors ${
                          type === t
                            ? "border-accent/60 bg-accent/15 text-accent"
                            : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[12px] uppercase tracking-[0.14em] text-white/55"
                  >
                    Worum geht's?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Skizzieren Sie kurz das Vorhaben — was bauen Sie, gegen welches Problem, wie weit sind Sie?"
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder:text-white/35 focus:border-white/25 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-[10px] bg-accent px-5 py-3.5 text-[14px] font-medium text-black transition-[filter,transform] hover:brightness-95 active:translate-y-[1px]"
                >
                  Anfrage senden
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <p className="text-[11.5px] text-white/40">
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
        className="mb-2 block text-[12px] uppercase tracking-[0.14em] text-white/55"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder:text-white/35 focus:border-white/25 focus:outline-none"
      />
    </div>
  );
}
