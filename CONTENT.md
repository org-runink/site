# The Runink content standard

`DESIGN.md` says what a page should look like. This says what it may say.

It is the document to read before writing a page, and the document to check a page
against before merging it. It was derived from the whitepapers, the industry pages and
the homepage rewritten in early September 2026, from the Christine Forget customer-pitch
audit of 20 July 2026, and from a sweep of all 1113 rendered pages on 8 September 2026.

Thirteen rules. Rules 1, 2, 3 and 6 are the ones that get broken.

---

## 1. No invented figures

No ROI figures, percentages, currency amounts, payback periods, multiples, customer
counts, named customers, testimonials, accuracy rates, latency claims or implied
deployments.

Runink has **no citable results**, and its previously published numbers are disavowed —
the partner who was handed them asked for verification before use. Those figures were
struck from the homepage (`$42,000`, `$32,000`, `$18,200`, `90%`, `40%`) and from sixteen
use-case pages (99.4% SLA accuracy, "under 2 seconds", 40% more freight spend, 12% fuel,
3.4% YoY). None of them may come back, in any language.

**Replace a number with a method, never with a vaguer number.** Name the measure in the
reader's own vocabulary, tell them where in their own systems to find their current
figure and over what period, and say which way it should move and by what mechanism.
"Typically cuts this by about a third" is a fabrication. So is "significantly reduces",
"dramatically", "up to", and "maximize ROI" — a vague quantifier is an invented figure
with the digits filed off.

Allowed, and not to be flagged:

- Real published prices. Saying what a plan costs is not claiming a result.
- Neutral domain facts carrying no performance claim: a bill of lading has three
  functions; Incoterms exist; GDPR Article 17 is numbered 17.
- Numbers that belong to a named external standard, described as that standard's own
  definition — Six Sigma's 3.4 defects per million, ISO 27001, SOC 2.
- Counts of the site's own structure: "five industries".

## 2. Never state what the product lacks

Never write what a product is missing, does not do, cannot handle, or plans to add. If
something is not there, describe what **is** there and stop. A generated whitepaper once
shipped a "Known Gaps" chapter, which is an attacker's checklist handed to prospects.

A statement about a **document's method** — "this paper puts no number here" — is fine
and is part of this standard. A statement about a **product's gaps** is not.

Verify, do not assume:

```
cd ~/Documents/org-runink/pulse/grpc && go run ./internal/openbias/cmd/disclosurecheck FILE...
```

Run it on **both** the markdown source and the rendered HTML. Neither alone is complete,
and this was measured rather than assumed: the guard's heading scan only fires on
heading-shaped lines, so it catches `## Known Gaps` in the source and is inert against
the `<h2>` Hugo renders from it; the phrase scan fires on both, but only the rendered
file contains the prose that front matter, summaries, partials and shortcodes add.

Expect false positives and read them before acting. On the current corpus the guard
blocks eight source files and four rendered pages, and every one of them is clean. Its
custody-of-goods and PII-masking phrases fire on logistics posts describing the
customer's problem, and its "future plans" heading list fires on posts about the
customer's own transformation roadmap. The rule is about **our** gaps, and the tool
cannot tell whose gap it is reading. Read the hit, then decide.

This standard is written to pass the guard, and a change to it should keep passing:

```
cd ~/Documents/org-runink/pulse/grpc && go run ./internal/openbias/cmd/disclosurecheck <repo>/CONTENT.md
```

## 3. Plain language, measured

The test: **could a non-technical buyer restate this sentence in their own words?**

Gloss any necessary specialist term at first use, then use it normally. Do not delete
vocabulary a buyer uses daily — demurrage, subrogation, accrual, interconnect — gloss it.
Do delete vocabulary that names an implementation: knowledge graph, control plane,
orchestration, tenant, compute-as-a-noun, air-gapped, corpus, data pipeline, semantic
layer.

Banned outright: leading, revolutionary, seamless, cutting-edge, unlock, empower,
game-changing, best-in-class, world-class, next-generation, transformative, robust,
leverage, synergy, holistic, turnkey, scalable, paradigm.

Flesch reading ease is the check, and the site carries its own meter:

```
hugo --gc --destination public
go run readability.go public          # every page, worst first, with banned words
go run readability.go -min 45 public  # exit 1 below the floor
```

It strips the site chrome first, because the header and footer are the same words on
1100 pages and scoring them scores the navigation rather than the argument.

Calibration, so the numbers can be trusted. Measured 8 September 2026 against `main`:

| reference page | score | what it means |
| --- | --- | --- |
| `/pricing/`, before its rewrite | 25.2 | has never had the pass |
| the four whitepapers | 51.8 – 59.2 | has had the pass |
| the five industry pages | 60.3 – 67.5 | has had the pass |
| the homepage | 70.5 | the best page on the site |

**45 is the floor** for English body copy. Anything below it has not had the pass. The
earlier working figure of 47 for the industry pages does not reproduce against this tool
and should not be quoted; the three anchors above are what the tool actually returns, and
if a change to `readability.go` moves them, the change is wrong.

The other languages are not scored — Flesch is calibrated on English and returns
nonsense elsewhere. Translations are governed by rules 1, 2 and 12 instead.

## 4. If it needs a caveat, it does not go on the site

**Changed 11 September 2026.** This rule used to require the opposite, and the history
matters because the reasoning is easy to get backwards.

The whitepapers carried footing marks — `runs`, `drawn`, `hypothetical`, `not measured`,
`first-party`, `self-declared` — one per section, so a reader could see which claims were
built and which were imagined. They were introduced after an audit found fabricated
material on this site, and they did their job: they made the speculation visible.

They are gone now, and **not because the honesty requirement relaxed.** The owner's
instruction: *"We do not sell lies, but no need to point out studies and analysis over our
assumptions."* A marked assumption is still an assumption taking up a page a buyer is
reading. The apparatus was treating the symptom.

So the rule inverts. Do not label the footing of a claim — **do not publish a claim whose
footing needs labelling.**

- If a passage would need `hypothetical`, delete it. An invented worked example is not
  evidence, and unlabelled it reads as a case study. If the mechanism inside it is worth
  explaining, explain the mechanism in plain prose and drop the scenario.
- If a passage would need `not measured`, remove the number. Say where the reader measures
  it in their own systems instead (rule 1).
- If a passage would need `self-declared` or `first-party`, keep the substance and carry
  the footing in ordinary sentences: "we have not been audited against X; here is what we
  do", "in our own use". That is not hedging — it is the fact, and a sentence states it
  better than a badge.
- Anything that would have been marked `runs` or `drawn` needs no mark at all. State it
  plainly. Hedging something that genuinely works is its own kind of dishonesty and is
  part of why the papers stopped holding a reader.

The test is unchanged and is the only one that matters: **could you defend this sentence
from the code?** If not, it does not ship — with or without a label.

## 5. Qualify, do not educate

From the audit: *"draw potential customers into your qualification process, not try to
give them all the information upfront."*

Entry pages — home, industries, use cases — are short funnels. Depth lives in the
whitepapers behind a link. Name **who owns the problem** by job title: QA, Operations,
IT, Compliance, Supply Chain, Finance.

## 6. It must print

From the audit: the material is *"a pain for customers to print."* Executives print
things and carry them into meetings.

Every customer-facing page needs print rules:

- ink on white — the site is dark-mode-first, and a dark page prints as a black sheet;
- no fixed-position chrome, which otherwise reprints on every sheet. The site-wide
  layout wraps the header in `<div class="fixed top-0 left-0 right-0 z-50">`, so a print
  rule has to unset it;
- nothing clipped by `overflow`, `max-height` or a column that does not reflow;
- **colour is never the only channel.** Most printing is monochrome, so a status pill
  that differs from its neighbour only in background colour carries nothing on paper.
  Gradient text set with `background-clip: text` can print as nothing at all;
- links that matter keep their destination — print the URL after the anchor, or the
  reader is holding a page of underlined words.

Verify by generating a PDF and looking at the sheets. Reading the CSS is not verifying.

## 7. Self-hosted, always

No external request from a customer-facing page: no font CDN, no remote asset, no
third-party script beyond the site-wide consent-gated analytics. A company arguing that
material should not be sent to third parties cannot fetch its typeface from one.

Fonts are vendored under `assets/fonts` (Fira, OFL 1.1).

Trap: Hugo publishes only an asset something asks for. Four of six whitepaper fonts 404'd
in production because the template called `resources.Get` on the two it preloaded and no
others. Prove emission — list `public/` — do not assume it.

## 8. Links must resolve, and to one hostname

A fragment pointing at nothing is invisible: the link is well-formed, the page returns
200, and only the `#name` is wrong. Four of seven header links were dead this way for
weeks. `linkcheck.go` gates the build on both halves — a path not in the tree, and a
fragment naming an id the target does not render:

```
go run linkcheck.go public        # site chrome, which is what CI gates on
go run linkcheck.go --all public  # body copy too; run this by hand
```

One hostname: **`runink.org`**. Not `runink.com`, which is not ours, and not
`www.runink.org`, which has no DNS record — a canonical URL or a JSON-LD `url` pointing
at either sends a crawler nowhere. `linkcheck.go` never leaves the site, so it cannot see
this; grep for it.

## 9. Nothing publishes by accident

Anything under `content/` renders, enters `sitemap.xml`, and gets crawled — whether or
not a human can find it. There is no "unlisted".

- A page with **no inbound link is still published.** `/company/` has none, and has been
  serving a stale mission statement to anyone who arrives from search.
- **Test fixtures are not test fixtures once they are in `content/`.** Eight files whose
  entire purpose is to feed `javascript:alert(1)` to a shortcode render as pages.
- **Config strings are body copy.** `params.cta.description` in `hugo.toml` is printed as
  visible prose at the foot of 78 pages, so it is subject to rules 1 and 3 exactly as a
  paragraph would be.

Before merging a page, answer: what links to it, and what is it for? If neither answer is
good, it belongs in `layouts/` as a fixture, or nowhere.

## 10. Never publish the mechanics of how the site treats the reader

Do not tell a visitor that the page is watching them. `/igo-demo/` currently tells
prospects, in body copy, that it infers their persona from their referral source and
keeps that judgement in `localStorage`. Whether or not the code does it, saying it is a
trust cost with no offsetting benefit, and it is the first thing a security-minded buyer
will quote back.

The same applies to internal QA instructions, staging URLs, branch names, ticket numbers
and reviewer notes. If it exists to help us build the page, it does not ship with it.

## 11. Attribute or do not sign

A page that carries an author must name a person. "Lead Data & Cloud Architect" is a job
title standing in for a byline, and a credential list with nobody attached reads as an
attempt to borrow authority without staking any. Either name the author, or drop the
byline and let the company own the page.

Third-party names — AWS, Google Cloud, Gartner, MIT — may appear as **cited sources**,
linked to the thing being cited. They may never be arranged so as to imply a
relationship, endorsement or customer that does not exist.

## 12. Translations are pages, not copies

`es/`, `fr/` and `pt/` are separate files that drift. A figure struck from the English
page survives in the Portuguese one until somebody strikes it there too, and the
Portuguese one is what a Portuguese buyer reads.

Every rule here applies per language. When a fix lands in English, either it lands in
every translation in the same change, or the translation is withdrawn until it does.
Rules 1 and 2 in particular have no language exemption — the same claim in Spanish is the
same claim.

## 13. Verify against output, never the exit code

- A stale working directory builds nothing and exits 0 — `Total in 15 ms`.
- A second `hugo` racing yours produces a half-empty `public/`.
- "Merged" is a claim about a pull request, not about `main`. Check
  `git log origin/main..origin/<branch>` before believing it, and check
  `git rev-list --count HEAD..origin/main` before auditing a checkout — an audit of a
  branch eleven commits behind measures history.
- **`main` is not production.** The two diverge in both directions: a fix can be merged
  and not yet deployed, and a page can render locally and 404 in production. Say which
  one you measured.
- Look at the rendered page. A CSS specificity collision made a live CTA button render as
  a blank rectangle, and no automated check saw it.

---

## The check, end to end

```
cd <repo root>
rm -rf public && hugo --gc --destination public   # confirm the page count, not the exit code

go run linkcheck.go public                        # rule 8 — paths AND fragments
go run readability.go -min 45 public              # rule 3 — floor 45

node scripts/check-content-doctrine.mjs           # and again with --rendered public
node scripts/check-rendered-output.mjs public
node scripts/check-nav-distinct.mjs public
node scripts/check-token-contrast.mjs
node scripts/check-token-syntax.mjs
node scripts/check-token-channels.mjs
node scripts/check-dead-states.mjs

./check-whitepaper-mirrors.sh                     # the four papers vs ../pitch-decks/

cd ../pulse/grpc && \
  go run ./internal/openbias/cmd/disclosurecheck <source .md> <rendered .html>   # rule 2
```

Everything above `check-whitepaper-mirrors.sh` also runs in `.github/workflows/
deploy.yaml`. **That one cannot**, and the reason is worth knowing rather than
rediscovering: it compares each paper against a mirror in `../pitch-decks/`,
which is a sibling directory on a developer's machine and is not part of this
repository — so a CI checkout has nothing to compare against.

That is how the four mirrors came to drift by hundreds of paragraphs without
anything going red. A check that only runs when somebody remembers it is a check
that runs after the damage. **If you edit a paper under
`content/blog/whitepapers/`, run it before you commit.** It exits 0 when every
mirror is faithful and names the drifting paragraphs when one is not.

Note its two blind spots. The first is stated in its own header: it compares in
a single direction. Every paragraph of the site source must appear in the
mirror, but text that exists *only* in the mirror is reported as a
furniture-line count rather than as an error — so it catches a chapter added
here and not carried over, and it does not catch a claim struck here and left in
the document a salesperson hands to a prospect.

The second is worse and is not stated anywhere: **a mirror's cover block is
outside every check there is.** The cover is bespoke print furniture — it has no
counterpart in the site source, so nothing compares it to anything, and a
paragraph comparison skips it by construction. On 11 September 2026 all four
covers were drifted and two were wrong in ways that would have embarrassed
somebody in a meeting: the FACE cover carried a deck the site had rewritten, and
the CORE cover promised the reader a chapter — *"how a working day changes once
it is in place"* — that had been struck from the paper it introduces. Both would
have shipped. **When you touch a paper, read its mirror's cover with your own
eyes.**

Rules 1, 4, 5, 6, 9, 10, 11 and 12 have no tool. They are read for.
