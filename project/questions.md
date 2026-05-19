# questions.md

No blockers.

The task is fully specified in `CLAUDE.md` "Open work" items 1–4 and `intake.md`. Proceeding with Stage 1.

Minor judgment calls being assumed (not blocking):
- Commit cadence: one commit per section (audit + rebuild grouped), not per file edit.
- Section order: top-to-bottom by visual order (Nav → Hero → LogoStrip → Services → Testimonials → Process → Cases → Benefits → CTA → FAQ → Footer).
- Audit storage: snapshots saved to `project/audit/sections/<name>.md`, screenshots to `project/audit/screenshots/`.
- Verification cadence: build + visual diff after each section, full `bun run build` + `vercel ls` only at end.

If any of these need to change, the user can interrupt; otherwise proceeding.
