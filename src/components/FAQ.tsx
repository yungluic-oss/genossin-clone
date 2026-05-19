"use client";

import { useState } from "react";
import { Plus, Minus } from "@/components/icons";

const FAQS = [
  {
    q: "Wie hilft AI-Automatisierung meinem Unternehmen?",
    a: "AI-Automatisierung übernimmt repetitive Aufgaben, steigert die Effizienz und reduziert Fehler. Ihr Team kann sich auf die wirklich wertschöpfende Arbeit konzentrieren — bei höherer Produktivität und tieferen Betriebskosten.",
  },
  {
    q: "Ist die Integration aufwendig?",
    a: "Nein. Unsere Lösungen sind so gestaltet, dass sie sich nahtlos in Ihre bestehenden Tools und Workflows einfügen. Wir begleiten Sie Schritt für Schritt durch ein reibungsloses Setup — vom ersten Workshop bis zum produktiven Betrieb.",
  },
  {
    q: "Welche Branchen profitieren von AI-Automatisierung?",
    a: "Praktisch alle. Wir haben Lösungen in Marketing, Vertrieb, Finanzen, Gesundheitswesen, Kundensupport und Operations umgesetzt. Wo immer Effizienz, Datenqualität oder Skalierung Engpässe sind, hilft AI weiter.",
  },
  {
    q: "Brauche ich technisches Wissen, um AI-Automatisierung zu nutzen?",
    a: "Überhaupt nicht. Unsere Lösungen sind für Fachanwender:innen gebaut, nicht für Entwickler:innen. Sie erhalten ein klares Onboarding, verständliche Dokumentation und einen direkten Ansprechpartner — bei Fragen, Anpassungen oder neuen Ideen.",
  },
  {
    q: "Welche Art von Support bieten Sie an?",
    a: "Wir bieten umfassenden Support: Onboarding, Schulungen, laufende Updates und schnellen technischen Support. Unser Team ist erreichbar, wenn Sie es brauchen — und proaktiv, wenn wir Optimierungspotenzial sehen.",
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
            Wir haben die Antworten, die Sie suchen.
          </h2>
          <p className="mt-5 max-w-xl text-white/60 text-base sm:text-lg">
            Schnelle Antworten auf Ihre Fragen zur AI-Automatisierung.
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
