# agents.md — Role allocation

This is a small focused redo; single-session execution by the main agent acting in different roles. No parallel subagents needed — Playwright MCP holds one browser session, so audits are serial.

| Role | Tasks | Skills needed | Files edited |
|------|-------|---------------|--------------|
| Architect | T01 | playwright | `project/audit/global.md` |
| Implementer | T02–T10, T12, T13, T14 | playwright, react-nextjs-optimization (light), swiss-design (reference only) | `src/components/*.tsx` |
| Data | T11 | playwright | `project/audit/sections/faq.md` |
| Integrator | T15 | (none) | `src/app/layout.tsx` |
| QA | QA01, QA02 | verification-before-completion | `project/qa.md`, runs `bun run build` + `vercel ls` |

Subagent escalation: only if a single component balloons past ~30 min of work, consider an Explore agent to map related files. Otherwise inline.
