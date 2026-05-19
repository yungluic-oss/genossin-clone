# plan.md — Task breakdown

Sections audited top-to-bottom. Each section task = audit + rebuild + verify, with one commit on finish.

| Id | Description | Role | Inputs | Outputs | Acceptance | Depends |
|----|-------------|------|--------|---------|------------|---------|
| T01 | Probe live site at 1440/768/390, capture global theme tokens (colors, fonts, spacing scale) | Architect | https://genossin.com | `project/audit/global.md` | Tokens recorded; deltas vs. local `globals.css` listed | — |
| T02 | Audit + rebuild Nav | Implementer | T01, live site | `audit/sections/nav.md`, `src/components/Nav.tsx` | Layout matches at 3 viewports; mobile drawer verified | T01 |
| T03 | Audit + rebuild Hero (text side only; defer dashboard) | Implementer | T01, live site | `audit/sections/hero.md`, `src/components/Hero.tsx` | Headline/sub/CTA layout matches; dashboard placeholder kept | T01 |
| T04 | Audit + rebuild LogoStrip (marquee) | Implementer | T01, live site | `audit/sections/logostrip.md`, `src/components/LogoStrip.tsx` | Marquee speed/gap/opacity match | T01 |
| T05 | Audit + rebuild Services | Implementer | T01, live site | `audit/sections/services.md`, `src/components/Services.tsx` | Cards match | T01 |
| T06 | Audit + rebuild Testimonials | Implementer | T01, live site | `audit/sections/testimonials.md`, `src/components/Testimonials.tsx` | Card layout, photo crop, quote typography match | T01 |
| T07 | Audit + rebuild Process | Implementer | T01, live site | `audit/sections/process.md`, `src/components/Process.tsx` | Steps + connecting lines match | T01 |
| T08 | Audit + rebuild Cases | Implementer | T01, live site | `audit/sections/cases.md`, `src/components/Cases.tsx` | Case cards match | T01 |
| T09 | Audit + rebuild Benefits | Implementer | T01, live site | `audit/sections/benefits.md`, `src/components/Benefits.tsx` | Tile layout / icon row match | T01 |
| T10 | Audit + rebuild CTA | Implementer | T01, live site | `audit/sections/cta.md`, `src/components/CTA.tsx` | Centered CTA block matches | T01 |
| T11 | Audit FAQ; capture all 5 answers by clicking each | Data | live site | `audit/sections/faq.md` | 5 answers captured verbatim | T01 |
| T12 | Wire FAQ answers + match accordion styling | Implementer | T11 | `src/components/FAQ.tsx` | All answers non-empty; layout matches | T11 |
| T13 | Audit Footer | Implementer | T01, live site | `audit/sections/footer.md`, `src/components/Footer.tsx` | Footer grid, links, social row match | T01 |
| T14 | Rebuild Hero dashboard as live HTML markup | Implementer | T03 + dashboard DOM inspection | `src/components/HeroDashboard.tsx` (or inline) | No `<img>` for dashboard; renders close enough to OG | T03 |
| T15 | Wire favicons in `layout.tsx` metadata | Integrator | `public/assets/GV95Tgfnp*.png`, `public/assets/p7Lbvw5Ft*.png` | `src/app/layout.tsx` | metadata.icons populated; both files referenced | — |
| QA01 | `bun run build` clean + final visual diff at 3 viewports | QA | T02–T14 | `project/qa.md` | Build green; no new warnings; visual deltas documented | T02–T15 |
| QA02 | Push, verify with `vercel ls` | QA | repo | `project/qa.md` | Latest commit visible on Vercel prod | QA01 |
