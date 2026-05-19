# analysis.md — BA Analysis

## Problem statement
The local clone of genossin.com was built from a static HTML scrape, so layout, spacing, and runtime-rendered content (FAQ answers, hero dashboard) are approximate. Now that Playwright MCP is available, the clone needs to be brought to true 1:1 fidelity using live DOM inspection.

## Users and use cases
- **User (site owner).** Wants a faithful sister-site starting point so they can later swap copy/branding for a second product without re-doing layout work.
- **Future contributors.** Need a clone whose component structure mirrors the production site closely enough that diffs against the live reference are meaningful.

## Assumptions (explicit)
- The live site at https://genossin.com is the canonical reference; no other staging URL needs to be considered.
- User-owned content; no licensing constraints on copying CSS values, layout structure, or visual treatments.
- Playwright MCP can fully observe the rendered Framer DOM at all three viewports (the workspace-trust prompt is already approved this session — verified by successful navigate).
- The downloaded assets in `public/assets/` cover every image used by the live site. If audit finds a missing asset, download it.
- Component file structure (one file per section in `src/components/`) is correct; only contents need to be rebuilt.

## Dependencies
- Playwright MCP server (project-scoped, started)
- Network access to https://genossin.com and `framerusercontent.com` for any missing assets
- Bun runtime + Next.js 16 toolchain (already installed)
- Vercel CLI (for deploy verification step at the end)

## Out of scope
- New pages, new routes, new components beyond the existing 10 sections.
- Backend, CMS, analytics, or third-party integrations.
- Translating copy, rewriting copy, or adding alt copy.
- Animations beyond what genossin.com itself exhibits.
- Mobile nav drawer behavior changes.

## Acceptance criteria (draft)
1. Each section in `src/components/` has been compared against live-site computed CSS and screenshots, with the audit recorded under `project/audit/sections/`.
2. Visual diff at 1440/768/390 between local (`bun run dev` or build preview) and live site shows no obvious spacing, typography, color, or layout deltas.
3. All 5 FAQ entries have a non-empty `a:` field reproducing the rendered answer from the live site.
4. The hero "dashboard" renders from JSX/CSS, not from `<img src="…OG screenshot…">`.
5. `src/app/layout.tsx` metadata wires both favicon variants from `public/assets/`.
6. `bun run build` succeeds; latest commit deployed and visible via `vercel ls`.
