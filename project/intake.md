# intake.md

## Goal
Rebuild the local Next.js clone at `src/components/*` so each section matches `https://genossin.com` 1:1 at 1440 / 768 / 390 viewports, using Playwright MCP for live-site inspection rather than guessing from static HTML. Then complete three follow-ups: capture FAQ answers, rebuild hero dashboard as live markup, wire favicons.

## Context
- First-pass clone scaffolded all 10 sections from a static HTML scrape. Copy is verbatim and assets are downloaded, but layout fidelity is approximate.
- Next.js 16.2.6 (App Router, Turbopack), Tailwind v4, Bun. Icons inline in `src/components/icons.tsx`.
- Playwright MCP is project-scoped (`.mcp.json`), Chromium downloaded, workspace-trust already approved this session — `browser_navigate` to genossin.com succeeded.
- Auto-commit + push every change is a standing user preference.

## Constraints
- Match live site at 1440, 768, 390 viewports. Capture computed CSS, not just visual snapshots.
- Re-use existing components in `src/components/` — edit, don't rewrite from scratch unless structure is wrong.
- Tailwind v4 conventions only (`@theme`, no `tailwind.config.js`).
- Inline SVG icons (lucide-react@1.16.0 lacks brand icons in this env).
- Verbatim copy from live site is the source of truth; intake.md does not duplicate it.

## Inputs available
- Live site: https://genossin.com (probed; reachable)
- Local repo at `/Users/vincentluijc/genossin-clone`
- Pre-downloaded assets in `public/assets/`
- Playwright MCP browser session
- Existing components from first-pass scrape

## Desired outputs
1. Per-section audit files under `project/audit/sections/<section>.md` containing extracted computed CSS, layout boxes, and screenshots at three viewports.
2. Updated components under `src/components/` matching audit findings.
3. FAQ answers captured and wired into `src/components/FAQ.tsx`.
4. Hero dashboard rebuilt as live HTML markup (currently an OG screenshot).
5. Favicons wired in `src/app/layout.tsx` metadata.
6. Clean `bun run build`, deployed to Vercel, verified with `vercel ls`.

## Definition of Done
- Side-by-side screenshots at 1440/768/390 show no obvious deltas in spacing, typography, color, or layout for each section.
- All 5 FAQs have non-empty `a:` content matching live site rendering.
- Hero dashboard renders from JSX/CSS, not an `<img>` tag.
- `layout.tsx` metadata references both favicon files.
- `bun run build` succeeds with no new warnings.
- Pushed to `main`, latest deploy shows on `vercel ls`.

## Non-goals
- Re-deriving copy text (already verbatim from source).
- Re-downloading assets that already exist in `public/assets/`.
- Adding new pages, routes, CMS, or backend wiring.
- Animations beyond what the live site exhibits (marquee, float, FAQ accordion only).
- Mobile nav drawer behavior — only verify; rebuild only if broken.

## Risks
- **Framer-rendered runtime content.** Sections like FAQ answers and the hero dashboard mockup are produced by Framer client JS, not in initial HTML. Mitigated by Playwright (real DOM, post-hydration).
- **Computed-CSS drift between viewports.** Need to extract per-viewport, not assume.
- **Next.js 16 breaking changes** vs. assumptions. Mitigated by consulting `node_modules/next/dist/docs/` before any framework-level edits.
- **Long Playwright audit run** could exceed token budget. Mitigated by saving snapshots/evaluate output to files via `filename:` parameter.
- **Auto-commit per change** could create noisy history. Mitigated by grouping by section: one commit per rebuilt section + audit.
