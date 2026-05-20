"use client";

import { useState } from "react";
import { Plus, Minus } from "@/components/icons";

const FAQS = [
  {
    q: "Wie lange dauert ein typisches Projekt?",
    a: "Ein AI-Sprint mit einem fokussierten Use Case dauert 2–3 Wochen. Ein MVP von Web- oder Mobile-App liegt typischerweise zwischen 6 und 10 Wochen. Grössere Plattform-Builds laufen in 2-Wochen-Sprints mit klaren Meilensteinen — Sie sehen nach jedem Sprint Live-Funktionalität.",
  },
  {
    q: "Welchen Tech-Stack benutzt ihr?",
    a: "Wir setzen bewusst auf Technologien mit grosser Community und langer Lebensdauer: Next.js, React, TypeScript, Node.js, Python und Postgres. Mobile mit React Native und Expo. Hosting auf Vercel oder Ihrer eigenen Infrastruktur. Für AI: OpenAI, Anthropic und passende Vector-Stores. Wenn Sie schon einen Stack haben, arbeiten wir auch darin.",
  },
  {
    q: "Wem gehört der Code am Ende?",
    a: "Ihnen — vollständig. Wir entwickeln in Ihrem GitHub-Repo (oder Sie erhalten es bei Projektstart). Es gibt keinen Vendor-Lock-in, keine geheimnisvolle Closed-Source-Schicht. Sie können das Produkt jederzeit selbst weiterentwickeln oder von einem anderen Team weiterführen lassen.",
  },
  {
    q: "Was passiert nach dem Launch?",
    a: "Auf Wunsch bleiben wir an Bord — als Monats-Retainer für Wartung, Bugfixes und neue Features. Oder wir übergeben sauber an Ihr internes Team mit Dokumentation, Onboarding-Sessions und einem 30-Tage-Support-Fenster. Beide Varianten sind transparent geregelt, ohne Mindestlaufzeit.",
  },
  {
    q: "Können wir mit nur einer Idee zu euch kommen?",
    a: "Absolut. Viele unserer besten Projekte starten als grobe Skizze. Im Discovery-Workshop schärfen wir gemeinsam Scope, Tech-Architektur und Roadmap — bevor wir ein Angebot machen. Das Erstgespräch ist immer kostenlos.",
  },
  {
    q: "Wie unterscheidet ihr euch von einer klassischen Agentur?",
    a: "Wir sind ein kleines Studio aus Engineers, die selbst Produkte gebaut haben. Sie sprechen direkt mit den Leuten, die programmieren — keine Account-Manager dazwischen. Wir denken in Produkt- und Business-Outcomes, nicht in Stunden.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative px-4 py-28">
      <div className="relative mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center">
          <span className="skeo-nameplate font-display">
            <span className="led-green" style={{ width: 7, height: 7 }} />
            FAQ
          </span>
          <h2
            className="font-display headline-engraved mt-5 max-w-3xl"
            style={{
              fontSize: "clamp(32px, 4vw, 50px)",
              lineHeight: "1.1",
              letterSpacing: "-2px",
              fontWeight: 500,
            }}
          >
            Die häufigsten Fragen,
            <br className="hidden sm:block" /> ehrlich beantwortet.
          </h2>
          <p className="engraved mt-5 max-w-xl text-base text-[var(--color-ink-3)] sm:text-lg">
            Sollte etwas fehlen — schreiben Sie uns einfach. Wir antworten
            innerhalb von 24h.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="skeo-raised overflow-hidden"
      style={{ borderRadius: 16 }}
    >
      <button
        className="font-display flex w-full min-h-[68px] cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <span
          className="headline-engraved text-lg tracking-tight sm:text-xl"
          style={{ fontWeight: 600 }}
        >
          {q}
        </span>
        <span
          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center ${
            open ? "skeo-btn-neon" : "skeo-btn-ghost"
          }`}
          style={{
            borderRadius: 999,
            padding: 0,
          }}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 sm:px-6">
            <hr className="skeo-groove mb-4" />
            <p className="max-w-prose text-[14.5px] leading-relaxed text-[var(--color-ink-2)] sm:text-[15px]">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
