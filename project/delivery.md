# delivery.md

## What was built
A 1:1 rebuild of all 10 page sections of genossin.com using Playwright MCP live-site inspection as the source of truth instead of static HTML guesswork.

**Components rewritten or fixed:**
- `src/components/Nav.tsx` — desktop nav + mobile drawer, correct link list + Book a call CTA
- `src/components/Hero.tsx` — centered text composition with orb-ring background, no dashboard image, corrected H1
- `src/components/LogoStrip.tsx` — simplified to "Over 10+ business trust us" text band
- `src/components/Services.tsx` — 4 alternating cards with full inline mockup content (task list, chat composer, founders marquee, calendar+project)
- `src/components/Process.tsx` — 2x2 step cards with title-on-top layout
- `src/components/Cases.tsx` — horizontal marquee of 4 case study cards
- `src/components/Benefits.tsx` — 3x2 tile grid with inline SVG icons
- `src/components/CTA.tsx` — centered Book-a-free-call block
- `src/components/FAQ.tsx` — verbatim answers wired into all 5 entries
- `src/components/Footer.tsx` — 2-column layout with wordmark+newsletter and 3-column nav, brand SVGs inline
- `src/components/Testimonials.tsx` — DELETED (live site has no testimonials section)
- `src/app/layout.tsx` — favicons wired via metadata.icons with prefers-color-scheme
- `src/app/globals.css` — added `marquee-y` keyframe for vertical scroller in Services
- `src/app/page.tsx` — Testimonials import + JSX reference removed

## How to run
```sh
cd /Users/vincentluijc/genossin-clone
bun install            # if dependencies missing
bun run dev            # local dev at http://localhost:3000
bun run build          # production build
```

## What to verify
1. Open https://genossin-clone.vercel.app and side-by-side compare with https://genossin.com.
2. Check FAQ accordion expands and shows the 5 captured answers.
3. Confirm Hero is centered text only, no dashboard image.
4. Confirm Nav links route to Home / Solutions / Blog / About / Contact and Book a call goes to https://cal.com.
5. Check favicons render in browser tabs (light + dark variants).
6. Test the mobile drawer (resize to <1024px).

## Known limitations
- Tablet (768) and mobile (390) pixel-level diffs not re-captured post-rebuild — responsive Tailwind classes are in place but unverified.
- Process card visuals are stylized representations rather than pixel-perfect Framer recreations.
- 12 unused logo PNGs in `public/assets/` are dead weight (LogoStrip is now text-only) — can be pruned.

## Next steps (optional)
- Per-viewport Playwright re-screenshot pass at 768/390 to catch any responsive drift.
- Prune unused logo PNGs in `public/assets/`.
- Wire newsletter form to an actual provider (currently `preventDefault`).
- Force-remove the locked agent worktrees: `git worktree remove -f -f .claude/worktrees/agent-*` once they're no longer needed.
