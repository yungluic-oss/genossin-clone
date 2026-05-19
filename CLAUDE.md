@AGENTS.md

# Genossin Clone — Project Context

This repo is a Next.js clone of the user's own marketing site at https://genossin.com, intended as the starting point for a **sister site** under the same brand. The user owns the company and has explicit permission to reuse all copy, photos, and assets from the live site — treat the source content as the user's own.

## Stack
- Next.js 16.2.6 (App Router, Turbopack) — has breaking changes from older versions; consult `node_modules/next/dist/docs/` before changing framework code
- Tailwind CSS v4 (`@import "tailwindcss"`, `@theme` block in `globals.css`)
- Bun for install/build (`bun run build`)
- `lucide-react@1.16.0` in this env lacks brand icons — all icons live in `src/components/icons.tsx` as inline SVG

## Layout
- `src/app/layout.tsx` — DM Sans + Figtree via `next/font/google`
- `src/app/page.tsx` — single page, imports all sections in order
- `src/app/globals.css` — theme tokens (`--color-accent #cafa5a`, `--color-violet #814ac8`, `--color-pink #df7afe`), grid bg, glows, marquee/float keyframes
- `src/components/` — one file per section: Nav, Hero, LogoStrip, Services, Testimonials, Process, Cases, Benefits, CTA, FAQ, Footer
- `public/assets/` — all images downloaded from `framerusercontent.com` (originals from the live site)

## Deploy
- GitHub: https://github.com/yungluic-oss/genossin-clone (origin `main`)
- Vercel prod: https://genossin-clone.vercel.app (auto-deploys on push to `main`)
- Standing preference: auto-commit + push every change, verify with `vercel ls` after deploy

## What's done
First pass: scaffolded, all 10 sections built with the verbatim copy extracted from the source HTML, real testimonial photos wired in, real hero dashboard PNG embedded, build clean, deployed.

## Open work
1. **1:1 layout redo with Playwright MCP.** First pass was built from static HTML extraction without browser inspection, so layout fidelity is approximate. Playwright MCP is already installed at project scope (see `.mcp.json` / `claude mcp list`) and Chromium is downloaded. On a fresh session started from this directory:
   - Approve the Playwright MCP workspace-trust prompt
   - Navigate to https://genossin.com section by section
   - For each section: extract computed CSS via `getComputedStyle()`, screenshot at 1440/768/390 viewports, capture every interaction state (FAQ open, carousel drag, hover/scroll)
   - Rebuild the relevant component in `src/components/` against the audit, not guessing from HTML
2. **FAQ answers** — the 5 questions are wired in `src/components/FAQ.tsx` but `a: ""` is blank. Framer renders answers on click so they were not in the static HTML. Use Playwright to click each FAQ on the live site and capture the rendered answer text.
3. **Hero dashboard as live HTML** — currently the source OG screenshot. Once Playwright can inspect the live mockup's DOM, rebuild it as real markup for pixel-level control.
4. **Wire favicons** into `layout.tsx` metadata. Files at `public/assets/GV95Tgfnp...png` (light) and `p7Lbvw5Ft...png` (dark).

## How to resume
The user will say something like "redo the clone 1:1 with playwright mcp". That means: do the four items above, starting with item 1.
