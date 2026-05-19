# prd.md — Genossin Clone 1:1 Redo

## Summary
Bring the local Next.js clone of genossin.com to 1:1 fidelity at 1440/768/390 viewports using Playwright MCP for live-site DOM inspection. Capture FAQ answers, rebuild hero dashboard as live markup, wire favicons.

## Personas and jobs to be done
- **Site owner / brand operator.** "Give me a faithful starting template so I can spin up the sister brand without re-doing layout work."
- **Subsequent contributor.** "When I view-source on the clone and the live site, the structures should rhyme so I can port small live-site updates over."

## Scope and non-scope
**In scope**
- Per-section layout, typography, spacing, color, and effect parity at 1440/768/390 viewports.
- FAQ answer text capture and wiring.
- Hero dashboard rebuilt from JSX/CSS instead of an OG screenshot.
- Favicon wiring in `layout.tsx` metadata.

**Out of scope**
- New routes, pages, or business logic.
- Backend, CMS, analytics, A/B testing.
- Copy translation or rewriting.
- Animations that go beyond what the live site exhibits.

## User stories
- US1: As the site owner, I want each section of the clone to visually match genossin.com so I can confidently rebrand it for the sister site.
- US2: As a contributor, I want each FAQ to expand to a real answer so the section is usable end-to-end.
- US3: As the site owner, I want the hero dashboard rendered as real markup so I can later change values or theme it.
- US4: As the site owner, I want the favicons to render correctly across browsers and dark/light contexts.

## UX flows (text)
- Landing: visitor hits `/`, sees Nav + Hero + LogoStrip + Services + Testimonials + Process + Cases + Benefits + CTA + FAQ + Footer in that order.
- FAQ: visitor clicks a question, the answer expands inline (Framer-style accordion).
- Nav: scroll-aware behavior matches live site (verify; rebuild only if broken).

## Data model
N/A — this is a static marketing page.

## APIs and integrations
- No new APIs.
- Vercel deployment pipeline (existing, auto on push).

## Permissions and security
- No auth surface. Static public marketing page.
- No user input collected.

## Edge cases
- Asset 404 on the live site (rare, would require source asset re-download).
- Framer JS shapes content; Playwright must wait for hydration before extracting CSS / clicking FAQ.
- Tailwind v4 token differences from runtime CSS values.
- Different cumulative layout shifts at small viewports (390) — capture computed values *after* layout settles.

## Analytics and logging
N/A.

## Acceptance criteria (testable)
1. Each section under `src/components/` has a corresponding `project/audit/sections/<section>.md` containing extracted computed CSS, layout box data, and screenshot file references for at least 1440 viewport (768/390 captured where the section's responsive behavior differs).
2. `src/components/FAQ.tsx` has all 5 entries' `a:` fields populated with non-empty text matching the live rendered answer.
3. `grep -n 'src="/assets/.*\.\(png\|jpg\)"' src/components/Hero.tsx` does not match the OG dashboard image (`Hero - Dark`-style filename) — the dashboard panel is JSX/CSS.
4. `src/app/layout.tsx` metadata.icons references both `public/assets/GV95Tgfnp...png` and `public/assets/p7Lbvw5Ft...png` (light/dark).
5. `bun run build` exits 0 with no new warnings vs. previous build.
6. Visual side-by-side at 1440/768/390 between local preview and live site — no obvious layout or spacing deltas.
7. Latest commit shows up in `vercel ls` as a deployed prod build.

## Rollout plan
- Per-section commits to `main` (auto-push on each).
- Vercel auto-deploys.
- Final manual verification via `vercel ls`.

## Open questions
None blocking. Listed assumptions are accepted; user can correct mid-run.
