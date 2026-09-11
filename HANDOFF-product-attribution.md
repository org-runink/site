# Handoff — product attribution and fact-check on runink.org

> **Second pass, same day: a fact audit against the code.** Everything the site
> claimed was checked against `../face`. The findings were serious enough that this
> section goes first. The original attribution handoff follows below.
>
> ## What the audit found
>
> **The blog was inventing products.** Seven product names were announced as shipped
> and exist in **no repository**: "Target Compute Runner wizard", "Runink Managed
> instances", "Isolated VPCs", "ReAct Live Console", "Data Posture Module", "Herd
> Observability Layer", "Runink Analytics". One post *offered a demo* of a product
> that existed only in that post. All removed.
>
> **A fabricated case study was published as real.** `demurrage-detention-fees-prevention.md`
> carried *"Consider a real-world scenario: a consumer goods importer moving 3,000
> TEUs annually through the Port of Savannah was paying $1.8 million per year …
> achieved a 52% reduction … recovery of $340,000"* — two paragraphs above "Runink
> was built to deliver exactly this shift". Removed. It was the only case study on
> the site, and it was invented.
>
> **No savings figure has a producer.** `savings_summary_test.go:24`: *"EVERY DERIVED
> SAVINGS SOURCE WAS AN INVENTED RATE, and all four are now gone"* — spend × 0.08,
> km × an invented $/km, reserve × 0.45, spend × unusedShare × 0.66. Any number
> presented as something Runink saves or recovers is unsupported **by construction**.
> Verified absent site-wide.
>
> **Four of five product-page screenshots were disqualifying** and nobody had opened
> them. The hero showed five business dimensions all reading the *same* score (a
> constant, not a measurement) over a demo-seed table; another showed "PROJECTED
> IMPACT" percentage tiles and a red "CRITICAL" recommendation; another published a
> monthly dollar recovery figure in the header — the deleted-multiplier territory,
> still shipping as a picture. Removed. `cockpit.png` was kept because it honestly
> shows "No items".
>
> **Eight connector types are stubs that force failure** (`connector.go:98-114`):
> `oms`, `tms`, `wms`, `yms`, `ims`, `rfid`, `iot`, `whs`. There is no live sensor,
> WMS, TMS, OMS or YMS path. `cold-chain-safety.md`'s central premise — live reefer
> telemetry read against thresholds — does not exist, and the feed struct has **no
> temperature field at all**. That page is now honest and thinner; see the flag below.
>
> **"Nothing leaves without approval" is not enforced** (`REQUIRE_HITL` gates
> nothing), and **the hypothesis lab is a language-model prompt**, not a simulation
> over a copy of your records — the phrase came from a code comment reading "Secure
> Sandbox Context Engineering", where *sandbox* means prompt context. Both corrected
> everywhere.
>
> ## What replaced it — and it is stronger
>
> The company's real differentiator is that **it refuses to fabricate and can prove it
> in code about seventy times over**. That material was sitting unused:
>
> - **Absence is a typed field, four times over** — `unmeasured`, `unmeasured_reason`
>   (*"Absence has to be representable, not rounded to zero"*),
>   `ComplianceStatusUnableToAssess` with three triggers and wording that says outright
>   *"This is NOT a finding that X is compliant"*, and a compile-enforced
>   `ProvenanceSource.failed`.
> - **"Never bill on unmeasured usage."**
> - `TestConnection` returns **five distinguishable answers, not a boolean**; BigQuery's
>   `Ping` refuses to return nil *"for a project nobody contacted"*.
> - `ExecuteAction` returns **typed skip tokens** (`erp:not_implemented`) so the software
>   names the step that did not happen instead of reporting success.
> - `VBAInspected` — *"'Macros: 0' is a claim… False means the counts say nothing about
>   whether macros exist."*
> - A read-only SQL state machine **that documents its own bypass**.
> - **"A rule with no check is a comment."**
>
> ## Corrections to my own briefs, found by agents checking rather than obeying
>
> - I told writers `ClaimsAgentService` backed freight claims. It holds only
>   `ProcessReverseLogistics` and `TriageReturnItem` — reverse logistics.
> - I told them model selection by rolling backtest did not exist. **It does**
>   (`ml/prophet/series_eda.go:109-141`); the claim was kept and tightened.
> - An agent found a false claim on a page not on its list: `ocr_service.go:87` returns
>   `Confidence: 0.85` as a **literal**, identical whether extraction succeeded or every
>   file failed, rendered in the cockpit as "85%".
>
> ## Flagged — premise not supportable, not patched
>
> - **`cold-chain-safety.md`** — no sensor path, no temperature field, no numeric band.
>   The page now says so and is built on the two things that are real (vision frame
>   ingest, a cue that is broadcast rather than actuated: *"NOTHING HERE ACTUATES
>   ANYTHING, so nothing here may claim it did"*). Its `badge: "IoT Sentinel"` now reads
>   against the body — left alone deliberately, since `_index.md` may key off it.
> - **`banking-financial-services.md` / `telecom.md`** — CORE+Atlas-led, and Atlas is a
>   third party's unreleased product. Outcomes are now labelled Built / Not built, but
>   these pages still present the platform as a customer-facing product.
> - **Four blog posts** whose whole premise is a claim that cannot be supported:
>   `runink-modal-shift-optimization`, `advanced-analytics-supply-chain-emissions-reduction`,
>   `digital-twin-evolution-logistics`, `what-is-digital-twin-agentic-decisions`, plus
>   `six-sigma-improve-…compute-runners` which has no reason to exist once its three
>   phantom product names are gone. De-claimed, but they argue against the product's own
>   position. They need an editorial decision, not another edit.
> - **PULSE's publish gate is a channel switch, not a per-item approval**, and Runink's
>   own fleet runs armed. Corrected in the paper; worth an owner's eye.
> - **Two SVG figures** still draw the blanket approval gate. Captions corrected; the
>   drawings were out of scope.

---

# Handoff — product attribution on runink.org

Written 2026-09-10, at the end of a pass that made **Runink FACE** the site's
explicit flagship and separated PULSE and CORE from it. Everything below is
either done, or open and waiting on a decision that is not an editor's to make.

---

## What the pass changed

- **FACE is now named as the product.** New `product` block on the homepage
  (between the industry ledger and the `why` block — the earliest point the
  layout's own rule permits a product name), a rewritten `content/products/face.md`,
  and `product: "FACE"` front matter on all twelve use-case pages.
- **Five new FACE scenario pages**, covering the domains that had none:
  `demand-forecasting`, `route-optimization`, `supply-chain-visibility`,
  `insurance-underwriting`, `paralegal-review`.
- **`/use-cases/` is now FACE's**, grouped by scenario domain rather than a flat
  list, and it says outright that PULSE and CORE are not on the page.
- **PULSE and CORE are labelled as what they are** on `downloads.md`, the
  whitepapers index, and `industries/marketing.md` (which is PULSE's, per-claim).

## Two claims that were corrected, not softened

1. **"Nothing leaves your building before somebody approves it."** This was on the
   homepage and in the use-cases index. It is **not true as a global guarantee**.
   FACE's own source says so at `face/grpc/cmd/compliance_server.go:149-154`:
   *"`REQUIRE_HITL` is read by no code in this repo except this function, so
   setting it requires nothing… nothing consults this variable."*
   What is true: a drafted action **waits in the queue**; `ExecuteAction` takes
   `req.UserApproval`, acts only on a stored action, and records
   `HITL_DECISION_PROCESSED` with the actor. Both pages now say that instead.
   This is the failure mode `face/CLAUDE.md` argues about at length — *"a control
   that cannot fire is worse than none."* **Do not restore the blanket version.**
2. **Unimplemented features were being sold.** `content/products/face.md` listed
   "Shadow Mode", "Graduated Autonomy", "Junior Analyst Mode" and "Full Autonomy"
   as shipped controls. A grep across `.go`, `.proto` and `.dart` returns **zero
   hits** for any of them. Removed.

---

## Open — needs an owner's decision

### 1. `content/forecast-llm-document-auditing.md` — held as a draft
Twelve currency figures ($45/hour, $562,500, $50M …), percentages, headed
"Vanguard ROI Forecast", `author: "Vanguard"`, no date. All of it forbidden by
DESIGN.md §1 and the homepage header comment. The file was **untracked**, so it
had never been committed, but it sits under `content/` and was one `git add -A`
from publishing. Now `draft: true` with the reasoning in its front matter.
**Decide:** whose forecast is it, may Vanguard's name appear on runink.org, and
does the company want a page quoting returns at all.

### 2. Three industry pages point at the CORE paper
`industries/insurance.md`, `industries/telecom.md` and
`industries/banking-financial-services.md` all end with *"Read the CORE paper"* →
`/blog/whitepapers/runink-core-atlas/`.

Insurance is FACE domain #8 and now has its own FACE page, so sending an
insurance reader to a CORE paper looks wrong — **but** each page's `note`
describes "a second independent judgement", which *is* the Atlas assessor design.
So either the paper link is wrong, or these pages are genuinely CORE-led and are
presenting CORE as a customer-facing product, which this pass was told not to do.
**Not repointed, deliberately** — it is a product question, not a copy question.

### 3. `content/blog/whitepapers/runink-core.md` sells the platform as a product
"Who CORE is for", "What adopting CORE involves", "The commercial model", with
per-seat currency. This — not the FACE or PULSE papers — is where CORE is priced
and segmented like an end-user product. Fixing it is a rewrite of four chapters
**plus** a commercial decision about whether CORE is sold separately at all.

### 4. `content/industries/_index.md` has no attribution
"The five industries Runink is built around" — four are FACE-shaped, one
(marketing) is PULSE, and a reader has no way to tell which is which.

---

## Open — structural, and bigger than it looks

### `assets/css/tokens.css` is unreachable from every marketing page
It is loaded **only** by `layouts/design/baseof.html`. So `var(--rk-*)` and
`.rk-mark[data-standing]` do not exist on `layout: landing` / `use_case` /
`_default` pages. Three separate agents hit this independently. It is the
structural reason content pages write literal hexes, and why the vendor palette
keeps coming back.

**It is not a one-line fix.** `tokens.css` declares eight Fira `@font-face` rules,
and Hugo only publishes an asset something requests — so loading it globally also
requires invoking `layouts/partials/rk-fonts.html` site-wide, which changes font
loading on every page. `DESIGN.md` §8 and §11 already name this as the next pass.
Consequence today: the standing marks (`hypothetical`, `drawn`, `not measured`) on
the use-case pages carry the right **content** and the right `data-standing`
attribute, but render as plain text rather than DESIGN.md §1's solid/hollow mark.

### `layouts/use_cases/single.html` renders no front matter
It prints `.Content` only — it consumes neither `product`, `badge` nor
`badgeColor`. Attribution on each page is therefore hand-rolled HTML in the body.
`layouts/whitepapers/single.html:20` already has the pattern to copy.

### Key-name drift
Use-case pages use `product: "FACE"`. Whitepapers use `product: "Runink FACE"` /
`"Runink PULSE"` / `"Runink CORE"` and render it verbatim. Pick one before a
layout consumes both.

---

## Fixed along the way (shared layout code)

- **`layouts/use-cases/section.html` created.** `content/use-cases/_index.md` sets
  `layout: "section"`, nothing matched it, and it fell through to
  `_default/list.html` — which never prints `.Content`. **The entire body of
  `/use-cases/` had never rendered for any reader.** The new layout renders it and
  deliberately omits the auto card grid, because the body now carries its own
  grouped grids; keeping both would print every card twice.
- **`layouts/shortcodes/hero.html`** — emitted a **duplicate `class` attribute**,
  so the `bg-stone-900` fallback was silently discarded and a hero without
  `gradient-from` rendered transparent. Also removed a texture layer pointing at
  `/images/grid.svg`, which exists in neither `static/` nor `assets/` and has
  therefore never rendered, and a computed `$padding` that was never referenced
  (so `size="double"` scaled the type but not the band, despite the code implying
  otherwise).
- **Provenance comments corrected** in `assets/css/whitepaper.css` and
  `layouts/partials/industries-style.html`. Both claimed their colours were
  "DESIGN.md tokens" and cited names — `surface.gray_50`, `brand_accents.green`,
  `text.stone_300` … — from the deleted bot-authored frontmatter. Every one
  returns zero hits today. The **values** are correct and deliberately literal;
  only the claim of provenance was false.

## Translation gap — recorded, not created

English-only, no `.es` / `.fr` / `.pt`: the five new use-case pages, the new
homepage `product` block (the layout guards it with `with`, so the three locales
render nothing rather than an empty band — verified), and the EN-only additions to
`fulfillment-optimization`, `responsive-reverse-logistics`, `cold-chain-safety`,
`voice-dispatch`, `hypothesis-lab`, `claims-recovery`, `compliance`.
`content/use-cases/_index.{es,fr,pt}.md` still carry the old title and the word
"Seven" in three languages.
