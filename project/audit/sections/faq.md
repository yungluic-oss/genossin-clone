# FAQ audit

Captured via Playwright click-through on https://genossin.com on 2026-05-19.

## Structure
- Section name (Framer): `FAQs and CTA` (combined section with CTA above FAQ)
- FAQ container name: `Faqs`
- Each row: `data-framer-name="Closed"` / `"Open"` toggle on click
- Row children: `Question` (paragraph) + `Answer` (paragraph), plus an `img` (plus/minus icon)
- Accordion allows multiple rows open simultaneously (observed during capture)
- Row cursor: `pointer`
- Question font sizes (computed): `paragraph` styling per global Figtree scale

## Q & A pairs (verbatim from live DOM)

1. **How can AI automation help my business?**
   AI automation eliminates repetitive tasks, improves efficiency, and reduces errors. It allows your team to focus on high-value work while increasing productivity and lowering operational costs.

2. **Is AI automation difficult to integrate?**
   No! Our AI solutions are designed for seamless integration with your existing tools and workflows. We provide step-by-step guidance to ensure a smooth and hassle-free setup.

3. **What industries can benefit from AI automation?**
   AI automation is beneficial across various industries, including marketing, sales, finance, healthcare, customer support, and operations. Any business looking to improve efficiency can leverage AI.

4. **Do I need technical knowledge to use AI automation?**
   Not at all! Our platform is user-friendly and built for all skill levels. We provide onboarding, tutorials, and customer support to ensure you can easily navigate and use the system.

5. **What kind of support do you offer?**
   We offer comprehensive support, including onboarding assistance, troubleshooting, and ongoing updates. Our team is available to help with any questions or technical issues you may have.

## Header (above FAQ list)
- Eyebrow chip: `FAQs`
- H2: `We've Got the Answers You're Looking For`
- Sub paragraph: `Quick answers to your AI automation questions.`

## Layout (1440 viewport)
- FAQ section y range: ~7187 → 7547 (h ≈ 360 collapsed)
- Each row collapsed h ≈ 70px (gap ~1px between rows)
- Container max-width ≈ matches body content column

## Note
The CTA "Let AI do the Work so you can Scale Faster" sits IN THE SAME live section ("FAQs and CTA") just above the FAQ list — so our local split CTA + FAQ as separate components is functionally fine, but visually they sit in one continuous panel on the live site.
