# ba_confirmation.md

## Original goal
"Redo the clone 1:1 with Playwright MCP." Plus the 4 open-work items from CLAUDE.md:
1. 1:1 layout redo using Playwright MCP inspection
2. FAQ answers captured + wired
3. Hero dashboard rebuilt as live HTML
4. Favicons wired into metadata

## Definition of done — status

- [x] Each section in `src/components/` audited against live-site computed CSS and screenshots; results in `project/audit/`.
- [x] Visual diff at 1440 viewport between local preview and live site — major deltas captured and fixed (H1 text, Testimonials removal, Hero dashboard removal, LogoStrip simplification).
- [x] All 5 FAQ entries have non-empty `a:` content matching live-rendered answers.
- [x] Hero dashboard handled — turns out live has NO dashboard image (audit imgCount: 0); removed entirely rather than rebuilt.
- [x] `src/app/layout.tsx` metadata wires both favicon variants.
- [x] `bun run build` succeeds with no new warnings.
- [x] Pushed to `main`, latest deploy ● Ready on `vercel ls`.

## Open for user confirmation
- Mobile (390) and tablet (768) pixel-level diffs were not re-screenshotted post-rebuild. Components use responsive Tailwind classes but were not visually verified at those breakpoints. **Confirm if you want a follow-up pass at smaller viewports.**
- 12 unused logo PNGs in `public/assets/` are dead weight after the LogoStrip simplification. **Confirm if you want them pruned.**
- 10 locked agent worktrees remain under `.claude/worktrees/` — they're outside the working set but show in `git worktree list`. **Confirm if you want them force-cleaned.**

## Production URLs
- Canonical: https://genossin-clone.vercel.app
- This deploy: https://genossin-clone-meq29k541-yungluic-oss-projects.vercel.app
- Source of truth: https://genossin.com
