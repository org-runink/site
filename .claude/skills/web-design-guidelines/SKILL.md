---
name: web-design-guidelines
description: Review and build web/UI interfaces against Vercel's Web Interface Guidelines — concise MUST/SHOULD/NEVER rules for accessible, fast, delightful interfaces (interactions, forms, focus, animation, layout, content, performance). Use when building or polishing any UI (web, or Flutter web) and before shipping a frontend change.
license: MIT (Vercel Labs). Full text in LICENSE.
---

# Web Design Guidelines (Vercel Web Interface Guidelines)

A living checklist of the hundreds of small choices that make interfaces succeed:
accessibility, interaction, forms, focus management, animation, layout, content, and
performance. Most rules are framework-agnostic (they apply to Flutter web as much as
React); a few are React/Next.js-specific — apply the spirit of those to the current stack.

## How to use this skill

- **Building new UI or reshaping one** — read `references/web-interface-guidelines.md`
  first and hold the design to those rules as you go (keyboard operability, visible
  focus, hit-target sizes, loading/optimistic states, reduced-motion, content polish).
- **Reviewing a frontend change** — check the changed files against the rules and report
  violations concisely (sacrifice grammar for brevity; high signal-to-noise), grouped by
  section, each as MUST/SHOULD/NEVER with a one-line fix.
- **Pairs with `frontend-design`** — `frontend-design` sets the aesthetic direction
  (palette, type, distinctive point of view); this skill enforces the interaction/quality
  bar so the result is both distinctive AND correct.

The complete, authoritative rule list lives in
`references/web-interface-guidelines.md` (do not paraphrase it from memory — read it).

## Attribution

Rules vendored from Vercel Labs' Web Interface Guidelines
(github.com/vercel-labs/web-interface-guidelines), MIT-licensed — see `LICENSE`.
