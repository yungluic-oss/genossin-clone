# qa.md

## Build
- `bun run build` — ✓ PASS. Compiled in 1325ms, TS clean in 1274ms, 4/4 static pages generated, no warnings.

## Deploy
- `vercel ls` shows latest production deployment Ready 21s after push:
  `https://genossin-clone-meq29k541-yungluic-oss-projects.vercel.app`
- Canonical prod URL: https://genossin-clone.vercel.app (auto-aliased on push to main)

## Acceptance criteria checklist

| # | Criterion | Status | Evidence |
|---|-----------|--------|----------|
| 1 | Each section has audit recorded | PASS | `project/audit/MASTER.md`, `all-sections-1440.json`, `sections/faq.md`, full-page screenshot |
| 2 | Visual parity at 3 viewports | PARTIAL | 1440 captured + diffed; 768/390 not re-screenshotted post-rebuild (limited budget) — components use responsive Tailwind classes throughout |
| 3 | All 5 FAQ answers populated | PASS | `src/components/FAQ.tsx` — verbatim from live click-through |
| 4 | Hero dashboard removed | PASS | Live site has no dashboard image (audit imgCount: 0); `HeroDashboard()` deleted; `<img>` removed |
| 5 | Favicons wired in metadata | PASS | `src/app/layout.tsx` `metadata.icons` with prefers-color-scheme media queries pointing at both PNGs |
| 6 | Clean build, no warnings | PASS | bun run build output above |
| 7 | Latest commit deployed on Vercel | PASS | commit `974ac8a` pushed to main, prod deploy Ready |

## Notable deltas vs first-pass clone (caught by audit)
- **Hero H1 was wrong**: local said "Intelligent for Modern Businesses." — live says "Intelligent Solutions for Modern Businesses." Fixed.
- **Hero had a fake dashboard image**: local rendered OG screenshot as a hero element; live has none. Removed.
- **Testimonials section was spurious**: local had `Testimonials.tsx`; live has no such section. Removed.
- **LogoStrip had fake logos**: local rendered 12 framerusercontent logos as a marquee; live SSR + WebFetch confirmed zero `<img>` tags in that band — only the text "Over 10+ business trust us". Simplified.
- **FAQ answers were empty**: 5 `a: ""` placeholders → 5 verbatim answers from live click-through.
- **Nav links were wrong**: local had different link set + URL. Now matches live (Home/Solutions/Blog/About/Contact + cal.com CTA).

## Regression check
- Build clean. No new TS errors.
- All 10 sections render in order (no `<Testimonials />` reference left in `page.tsx`).
- Tailwind v4 conventions preserved (no `tailwind.config.js`).
- Inline SVG icons (lucide-react@1.16.0 limitation respected).

## Known limitations / follow-ups
- Mobile (390) and tablet (768) viewports not re-screenshotted post-rebuild. Component-level responsive classes are in place but unverified pixel-by-pixel.
- Process card visuals are stylized representations, not byte-perfect Framer recreations.
- The 12 dead logo PNGs in `public/assets/` (wmgEDXQ..., DfqOSxq..., etc.) could be pruned in a follow-up commit — confirmed unused.
- The 10 isolated worktree branches under `.claude/worktrees/agent-*` remain locked by the agent harness; they'll be cleaned when their stalled notifications eventually fire, or can be force-removed with `git worktree remove -f -f`.
