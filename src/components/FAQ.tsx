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
    <section id="faq" className="relative py-28 px-4">
      <div className="relative max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/[0.05] text-[12px] text-white/85 leading-none">
            FAQ
          </span>
          <h2
            className="mt-5 font-display max-w-3xl"
            style={{
              fontSize: "clamp(32px, 4vw, 50px)",
              lineHeight: "1.1",
              letterSpacing: "-2px",
              fontWeight: 400,
            }}
          >
            Die häufigsten Fragen,
            <br className="hidden sm:block" /> ehrlich beantwortet.
          </h2>
          <p className="mt-5 max-w-xl text-white/60 text-base sm:text-lg">
            Sollte etwas fehlen — schreiben Sie uns einfach. Wir antworten
            innerhalb von 24h.
          </p>
        </div>

        <div className="mt-12 space-y-[2px]">
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
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors hover:bg-white/[0.03]">
      <button
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 min-h-[70px] py-4 text-left cursor-pointer"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <span className="font-display text-lg sm:text-xl tracking-tight">
          {q}
        </span>
        <span
          className={`w-8 h-8 shrink-0 rounded-full inline-flex items-center justify-center border transition-colors ${
            open
              ? "bg-accent text-black border-accent"
              : "bg-white/[0.04] text-white border-white/10"
          }`}
        >
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 -mt-1 text-white/65 text-sm sm:text-[15px] leading-relaxed max-w-prose">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
