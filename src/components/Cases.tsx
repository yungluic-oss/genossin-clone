"use client";

import Image from "next/image";
import { useRef, useState, useEffect, type PointerEvent } from "react";

type Case = {
  image: string;
  alt: string;
  headline: string;
  body: string;
  impact: string[];
};

const CASES: Case[] = [
  {
    image: "/assets/wZ4QywsLlJwC6C7w4D9W92Oqug.jpeg",
    alt: "Fallstudie: B2B-SaaS Plattform",
    headline: "„MVP in 6 Wochen — 1'200 zahlende Nutzer in den ersten 90 Tagen.“",
    body: "Ein B2B-SaaS-Startup brauchte einen schnellen Markteintritt. Wir lieferten Auth, Stripe-Billing, Admin-Dashboard und Onboarding in 6 Wochen — alles in TypeScript, vollständig getestet.",
    impact: [
      "1'200 zahlende Nutzer in 90 Tagen",
      "CHF 84k MRR nach 4 Monaten",
      "99.9 % Uptime",
      "Code zu 100 % im Kundenbesitz",
    ],
  },
  {
    image: "/assets/CDxS3e61UksiMm0oJGi80w7vEA.jpeg",
    alt: "Fallstudie: Logistik-Plattform",
    headline:
      "„Internes Operations-Tool ersetzte 3 Excel-Tabellen und 2 SaaS-Abos.“",
    body: "Ein Logistikunternehmen jonglierte zwischen Excel, Trello und einem unflexiblen SaaS. Wir bauten ein Custom-Dashboard mit Live-Tracking, Rollen-Permissions und Postgres-Backend — direkt an ihre Daten angebunden.",
    impact: [
      "3 Tools konsolidiert",
      "60+ Stunden / Monat gespart",
      "CHF 18k / Jahr SaaS-Kosten weg",
      "Onboarding für neue Mitarbeitende halbiert",
    ],
  },
  {
    image: "/assets/JK0fwwNQempKT9E5v6SvIj81ag.jpeg",
    alt: "Fallstudie: AI-Integration FinTech",
    headline: "„AI-Agent beantwortet 70 % der Support-Tickets autonom — geprüft auf Quellen.“",
    body: "Ein Finanzdienstleister wollte Support skalieren, ohne Qualität zu verlieren. Wir bauten einen Custom-RAG-Agent auf ihrer Wissensbasis mit Quellen-Verifikation und Eskalationspfaden zu menschlichen Agents.",
    impact: [
      "70 % Tickets autonom gelöst",
      "Ø Antwortzeit 6 Sek.",
      "Quellenangaben bei jeder Antwort",
      "Compliance-Trail vollständig",
    ],
  },
  {
    image: "/assets/TbStOE6QtWLglNJaSOxQJqyQJOE.jpeg",
    alt: "Fallstudie: Mobile App",
    headline: "„Cross-Platform App in 10 Wochen — 4.8 Sterne im App Store.“",
    body: "Ein Schweizer Lifestyle-Brand wollte eine App ohne separates iOS- und Android-Team. Mit React Native und Expo lieferten wir beide Plattformen in einem Codebase — inklusive Push, Auth und In-App-Käufen.",
    impact: [
      "iOS + Android · 1 Codebase",
      "4.8 ⭐ App-Store-Rating",
      "20'000+ Downloads im Q1",
      "OTA-Updates ohne Store-Review",
    ],
  },
];

function CaseCard({ c }: { c: Case }) {
  return (
    <article
      className="skeo-raised relative flex shrink-0 overflow-hidden select-none"
      style={{ width: "min(960px, calc(100vw - 64px))", height: 480, borderRadius: 24 }}
    >
      {/* Inset image well */}
      <div
        className="skeo-inset relative m-3 hidden h-[calc(100%-1.5rem)] w-[400px] shrink-0 overflow-hidden md:block"
        style={{ borderRadius: 18 }}
      >
        <Image
          src={c.image}
          alt={c.alt}
          fill
          sizes="400px"
          className="object-cover"
          draggable={false}
          priority={false}
        />
      </div>

      <div className="flex flex-1 flex-col px-7 py-8 sm:px-8 sm:py-9">
        <p
          className="font-display headline-engraved text-[24px] leading-[1.18] sm:text-[28px] sm:leading-[1.15] md:text-[30px]"
          style={{ letterSpacing: "-1.2px", fontWeight: 600 }}
        >
          {c.headline}
        </p>
        <p className="mt-4 max-w-[460px] text-[14.5px] leading-relaxed text-[var(--color-ink-3)] sm:text-[15px]">
          {c.body}
        </p>

        <div className="mt-auto pt-6">
          <p className="engraved mb-3 text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-3)]">
            Wirkung:
          </p>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {c.impact.map((i) => (
              <div
                key={i}
                className="skeo-raised-sm flex items-center gap-2 px-4 py-3 text-[13px] text-[var(--color-ink)]"
                style={{ borderRadius: 10 }}
              >
                <span className="led-green shrink-0" style={{ width: 7, height: 7 }} />
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Cases() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStateRef = useRef({ startX: 0, scrollLeft: 0, hasMoved: false });

  // Prevent click bubbling immediately after a drag
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onClickCapture = (e: MouseEvent) => {
      if (dragStateRef.current.hasMoved) {
        e.preventDefault();
        e.stopPropagation();
        dragStateRef.current.hasMoved = false;
      }
    };
    el.addEventListener("click", onClickCapture, true);
    return () => el.removeEventListener("click", onClickCapture, true);
  }, []);

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    // Only respond to primary mouse button / touch / pen
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const el = scrollerRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStateRef.current.startX = e.clientX;
    dragStateRef.current.scrollLeft = el.scrollLeft;
    dragStateRef.current.hasMoved = false;
    el.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!isDragging) return;
    const el = scrollerRef.current;
    if (!el) return;
    const dx = e.clientX - dragStateRef.current.startX;
    if (Math.abs(dx) > 4) dragStateRef.current.hasMoved = true;
    el.scrollLeft = dragStateRef.current.scrollLeft - dx;
  }

  function onPointerUp(e: PointerEvent<HTMLDivElement>) {
    setIsDragging(false);
    const el = scrollerRef.current;
    if (el?.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
  }

  return (
    <section id="cases" className="relative overflow-hidden py-28">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          <span className="skeo-nameplate font-display">
            <span className="led-green" style={{ width: 7, height: 7 }} />
            Arbeiten
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
            Produkte, die wir gebaut haben —
            <br className="hidden sm:block" /> mit messbarem Ergebnis.
          </h2>
          <p className="engraved mt-5 max-w-xl text-base text-[var(--color-ink-3)] sm:text-lg">
            Von der ersten Idee zum live-Produkt. Eine Auswahl der Software,
            die wir mit unseren Kunden ausgeliefert haben.
          </p>
        </div>
      </div>

      <div className="relative mt-16">
        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className={`overflow-x-auto overflow-y-hidden ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollSnapType: "x mandatory",
            scrollPadding: "0 24px",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          <div
            className="flex w-max gap-6 px-4 pb-4 sm:px-8"
            style={{ touchAction: "pan-y" }}
          >
            {CASES.map((c) => (
              <div
                key={c.headline}
                style={{ scrollSnapAlign: "center" }}
              >
                <CaseCard c={c} />
              </div>
            ))}
          </div>
        </div>

        {/* Hide scrollbar in WebKit */}
        <style>{`
          #cases ::-webkit-scrollbar { display: none; }
        `}</style>

        <div className="pointer-events-none absolute right-6 -bottom-2 z-10">
          <div
            className="skeo-raised-sm font-display inline-flex items-center gap-2 px-3.5 py-2 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-2)]"
            style={{ borderRadius: 999 }}
          >
            <span>Ziehen zum Stöbern</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h13M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
