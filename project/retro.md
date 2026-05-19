# retro.md

## Workflow
- **Parallel agent dispatch worked well** for the simple/medium tasks (Hero, Nav, LogoStrip, Cases, Testimonials, Favicons) — those committed and merged cleanly.
- **Parallel agent dispatch stalled on larger tasks** (Services 567 LOC, Footer 233 LOC, Process, Benefits, FAQ wire, CTA) because the agent stream watchdog timed out at 600s mid-write. Importantly, the uncommitted work was still salvageable from the worktree filesystem — 4 of 6 stalled tasks had usable files I copy-merged.
- **The two-step "audit on main, commit, then dispatch" pattern** was critical: every agent could read the committed audit JSON/MD from its own worktree without re-running Playwright. Saved enormous token budget vs. having each agent re-probe.
- The middle was lossy: I spent disproportionate time recovering from stalls. Net flow was still faster than serial — but ideally larger components would have been split (e.g., Services = header + 4 cards as separate agents).

## Skills
- `playwright` MCP — solid for live-site DOM extraction. The Framer wrapping (`data-framer-name` attrs) made section discovery easy.
- `using-git-worktrees` — used implicitly via Agent `isolation: worktree`. The Claude harness's worktree locking blocks normal cleanup until notification fires; needed `remove -f -f` workaround.
- No skill was missing.

## Tools
- `mcp__playwright__browser_click` worked for opening FAQ rows, but in-page `element.click()` from `browser_evaluate` did NOT trigger Framer's hydrated state. Lesson: prefer the MCP-level click for any React/Framer accordion.
- Background `Agent(run_in_background: true)` + 600s stalled watchdog is opaque — agents stopped mid-task without surfacing why until late. Would benefit from a heartbeat / progress signal.
- The `filename:` parameter on `browser_evaluate` was perfect for offloading large JSON output instead of dumping in chat.

## Prompts
- **Worked well:** providing a self-contained brief to each agent with explicit "READ FIRST" pointers to committed audit files, plus a HARD RULES block (don't touch globals.css, run bun run build, don't push).
- **Worked less well:** "rebuild 1:1 from this 50-line spec" for very visually-rich sections (Services, Process inline mockups). The agents had to guess at chrome details not captured in audit JSON. Future: pair text spec with per-card cropped screenshots.
- The "you own ONE file" framing was effective for keeping diffs surgical, but the Services agent still strayed into globals.css because vertical-marquee needed a new keyframe. Solution either: pre-add the keyframe before dispatch, or explicitly allow `globals.css` for that one agent.
