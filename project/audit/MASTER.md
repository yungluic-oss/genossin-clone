# Master live-site audit — genossin.com @ 1440

Captured 2026-05-19 via Playwright MCP. Source of truth: [`all-sections-1440.json`](./all-sections-1440.json) and [`global-tokens-1440.json`](./global-tokens-1440.json). Full-page screenshot: [`screenshots/live-1440-fullpage.png`](./screenshots/live-1440-fullpage.png).

## Global tokens (live site)
- BG: `#000` (body)
- Accent / lime: `#cafa5a` (also used as primary CTA bg + text selection)
- Pink: `#df7afe`
- Violet: `#814ac8` (and `#814ac873` translucent for shadows)
- Panel: `#141417`, `#181818`, `#080808`, `#020202`
- Lines: `#222`, `#ffffff0d` (border-faint), `#ffffff0a`
- Text: `#fff`, `#ffffffe6` (95%), `#ffffffbf` (75%), `#ffffffad` (68%), `#ccc`, `#949494`
- Display font: `Figtree` (variable). Body font: `DM Sans`. Mono accents: `Fragment Mono`.
- Typography scale (Figtree):
  - H1 — 70px / 77px lh / -2.2px ls / weight 600
  - H2 — 50px / 55px lh / -2px ls / weight 400 (Figtree Variable)
  - H3 — 35px / 38.5px lh / -1.4px ls / weight 500
  - Body (Figtree default) — 14px / 1.2em / -0.02em ls / weight 500
  - Logo wordmark — 21px / 25.2px / -1.26px / weight 700

## Page sections (live, 1440 viewport, y top→bottom)
| y | h | Section | Notes |
|---|---|---------|-------|
| 0 | 65 | Nav (Desktop) | logo + 5 links + CTA |
| 0 | 900 | Hero section | centered text; **NO dashboard image**; orb gradient bg |
| 900 | 122 | Logos | text "Over 10+ business trust us"; **0 imgs at 1440** (verify if lazy) |
| 1022 | 2197 | Services | eyebrow + H2 + sub + 4 cards (1000x350 each, alternating?) |
| 3219 | 1230 | Process | 4 cards in 2x2 grid (440 wide each) |
| 4448 | 1000 | Case studies | 4 case items in marquee/drag carousel |
| 5448 | 896 | Benefits | 6 tiles, 3x2 grid |
| 6345 | 1567 | FAQs and CTA | CTA on top, FAQ accordion below |
| 7911 | 334 | Footer | brand + newsletter + 3 columns + social row |

**Document height: ~8000px at 1440 viewport.** No "Testimonials" section.

## Per-section detail

### Nav
- Container `nav[data-framer-name="Desktop"]` 1440x65, inner 1200x45 at y=10
- Logo: `GENOSSIN` text (uppercase, no icon mark visible — verify if mark exists)
- Links: Home (`./`), Solutions (`./solutions`), Blog (`./blog`), About (`./about`), Contact (`./contact`)
- CTA: "Book a call" → `https://cal.com`
- Not fixed-position; sits as static element at top.

### Hero (CRITICAL — local clone is wrong)
- **Centered** text composition, NO dashboard mockup
- Top decorative badge: "AI chatbot integration on websites" (small pill at y=341, 209x17)
- H1: `Intelligent Solutions for Modern Businesses.` — NOT current local `Intelligent for Modern Businesses.`
- Sub (y=553): `The first call is free. We listen, diagnose, then build exactly what you need.` — 18px / 27px lh / `#ccc`
- CTA button (y=607): `Get in touch` — bg `#cafa5a` (accent), text dark; 124x36, border-radius 6px, padding 9px 13px (the computed values suggest a chip-like button — verify on actual live screenshot)
- Background orb: `Big Circle` 434x434 with `linear-gradient(229deg, #df7afe 13%, transparent 35%-64%, #cafa5a 88%)` rotating, plus `Small circle` 310x310 with mirror gradient at 141deg, `Void` 410x410 black overlay creates the ring; whole thing centered at the visual hero center (y≈247-657)
- No "trust line" inside Hero — that text belongs in Logos section

### Logos
- Header text only: `Over 10+ business trust us` (in nav-y space below hero)
- imgCount = 0 in initial capture; possibly lazy. Local clone currently renders a marquee with 12 framerusercontent logos. **Verify on live whether logo marquee actually appears.** If yes, keep marquee. If no, simplify to a centered single-line trust text.

### Services
- Eyebrow chip: `Our Services`
- H2: `AI Solutions That Take Your Business to the Next Level` (50px Figtree)
- Sub: `We design, develop, and implement automation tools that help you work smarter, not harder`
- 4 alternating cards, each 1000x350:
  1. **Workflow automation** — H3 35px "Automate repetitive tasks". Tags: All Tasks, Waiting for approval, Payroll management, Due on 2nd july, Employee Tracking, 2 days ago. Inline animated task list mockup.
  2. **AI Assistant** — H3 "Delegate Daily Tasks". Tags: AI Assistant, Summaries, Scheduling, Many more. Inline chat composer mockup.
  3. **Sales and marketing** — H3 "Accelerate Sales Growth". Tags: E-mail Sending.., LinkedIn, IT services, Founders (Jack Daniel etc). Inline founders email-row marquee.
  4. **Custom project** — H3 "Build Smarter Systems". Tags: Strategy, Custom AI, Consulting, Hey David!, On going project, Customer Support Chatbot, 90% Finsihed (typo on live), Schedule, Mo/Tu/We/.... Inline calendar+chat mockup.

### Process
- Eyebrow: `Our Process`
- H2: `Our Simple, Smart, and Scalable Process`
- Sub: `We design, develop, and implement automation tools that help you work smarter, not harder` (same as Services!)
- 4 cards in 2x2 grid, each 440x356:
  1. Step 1 — Smart Analyzing — "We assess your needs and identify AI solutions to streamline workflows and improve efficiency."
  2. Step 2 — AI Development — "Our team builds intelligent automation systems tailored to your business processes."
  3. Step 3 — Seamless Integration — "We smoothly integrate AI solutions into your existing infrastructure with minimal disruption."
  4. Step 4 — Continuous Optimization — "We refine performance, analyze insights, and enhance automation for long-term growth."

### Cases
- Eyebrow: `Case Studies`
- H2: `See How Smart AI Automation Transforms Businesses`
- Sub: `See how AI automation streamlines operations, boosts and drives growth.`
- 4 unique cases in horizontal carousel/marquee (visible 4, then loop). Each 1000x490, ends with "DRAG TO EXPLORE" hint.
- Case 1: "AI-driven forecasting cut inventory waste by 40%" — suitcase brand. Stats: 40% Less Inventory Waste, 35% Faster Production, 20% More Accurate Forecasting, 25% Faster Fulfillment.
- Case 2: "AI-powered workflows reduced error rate by 80% in daily operations" — healthcare logistics. Stats: 80% Error reduction, 90% Accuracy in Data Logs, 30% Faster Delivery, 60+ Hours Saved.
- Case 3: "Automating 50% of operations saved 20% in costs within 2 months" — financial services. Stats: 50% Operations Automated, 20% Cost Reduction, 70+ Hours Saved/Month, 2x Faster Client Onboarding.
- Case 4: "AI integration helped a StartUp close 3x more deals in less time" — ScaleByte. Stats: 3x More Deals, 40% Faster Responses, 95% Lead Accuracy, CRM Fully Synced.
- Images from framerusercontent.com (already mirrored in `public/assets/`).

### Benefits
- H2: `The Key Benefits of AI  for Your Business Growth` (note: double-space after "AI")
- Sub: `Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.`
- 6 tiles, 3x2 grid:
  1. Increased Productivity — Gain actionable insights with AI-driven analytics to improve decision-making and strategy.
  2. Better Customer Experience — Personalized AI interactions improve response times, customer engagement, and overall satisfaction.
  3. 24/7 Availability — AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.
  4. Cost Reduction — AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.
  5. Data-Driven Insights — Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.
  6. Scalability & Growth — AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.

### CTA (within FAQs and CTA section)
- H2: `Let AI do the Work so you can Scale Faster`
- Sub: `Book a Call Today and Start Automating`
- Button: `Book a free call` (duplicated in DOM as "Book a free callBook a free call" — second instance is sr-only hover state)

### FAQ
See [`sections/faq.md`](./sections/faq.md) for verbatim Q&A pairs.
- Eyebrow: `FAQs`
- H2: `We've Got the Answers You're Looking For`
- Sub: `Quick answers to your AI automation questions.`

### Footer
- Tagline (next to GENOSSIN wordmark): `Genossin – Automate Smarter, Optimize Faster, and Grow Stronger.`
- Newsletter heading: `Join our newsletter`
- 3 columns:
  - **Links**: Services (`./#services`), Process (`./#process`), Case studies (`./#cases`), Benefits (`./#benefits`), Pricing (`./#pricing`)
  - **Pages**: Home, About, Blog, Contact, 404
  - **Socials**: Instagram, Facebook, Linkedin, Twitter
- Bottom row: `Design by Ayush` + `© All right reserved` (not captured in eval — verify presence; visible in earlier text dump)
