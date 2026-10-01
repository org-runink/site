---
title: "Runink CORE"
layout: "product"
description: "Runink CORE is the operations layer a company runs on machines it owns. One console shows whether your software is healthy, what your AI models and agents may do, what your data holds, and turns a written brief into a working application."
next_about: "Runink CORE"
# Where every claim here comes from: the CORE paper, content/blog/whitepapers/
# runink-core.md (sections named beside each block in the PR), and the product copy
# of #246 "Present Runink CORE as a product in its own right". Nothing on this page
# goes beyond what that paper says. If the paper changes, change this page with it.
#
# No screenshot. The only console screenshot in the core repository shows an error
# screen, so the hero carries the console's five parts as type instead of an invented
# picture of a screen. Checked again 2026-09-29: core/.claude/skills/run-core/
# console-screenshot.png is still the "Cannot reach the console API" error state, not
# a fresh capture, so the typographic treatment stands.
#
# Enriched 2026-09-29, staying inside the `rp.features` grid this layout already uses
# (layouts/_default/product.html has no {{ .Content }} slot, so a page here cannot
# grow past its rp: fields the way content/products/face.md can). Three cards added:
# `trust` (Harness + Judgements, DataEx section), `local` (CORE's own egress-audit
# paragraph, added to the whitepaper the same day — see that file's own note), and
# `cost` (the lease/no-meter material from "It runs the same way everywhere" and "The
# model is yours"). All three summarise paragraphs the paper already carried but this
# page had not used.
#
# Deliberately NOT added: a "Backlog hunter" agent and built-in GitHub CI runners,
# both real work in progress this session but not yet shipped. CONTENT.md rule 2 bars
# stating what a product "plans to add", with no exception for a clearly-labelled
# "upcoming" tag, so neither goes on this public page or into the paper until each
# actually ships — at which point it is a `rp.features` item here and a new section
# there, the same way FORGE was added when it existed to describe. Flagged for the
# owner in the PR description rather than guessed around.
#
# Restyled 2026-10-01 (owner request): "DevEx" and "DataEx" are CORE's own internal
# console menu-category names (Developer Experience / Data Experience) and had been
# exposed straight to a buyer with no gloss, in the `plate` facts row, the `facts`
# count and the `features` item keys — exactly the "vocabulary that names an
# implementation" CONTENT.md rule 3 says to delete. Fixed by leading every
# buyer-facing spot with the plain-language outcome (delivery confidence; AI you can
# govern and trust) and demoting DevEx/DataEx to a one-line parenthetical gloss for
# a reader who already knows CORE's own console — never the primary label. The
# `features` card titles ("Know what shipped", "AI you can answer for") already did
# this correctly and are untouched; only their small `k` kicker tags, which had
# literally rendered the raw labels "devex"/"dataex" in small caps above the title,
# are renamed. Same treatment for "the Harness" in the `trust` card, which CONTENT.md
# also names as a console-menu term worth checking: it is now glossed once, in
# parentheses, at its first mention on the page. FORGE, Resolve, GitOps and "Audit
# chain" were checked and left alone — FORGE is a named, intentionally-branded studio
# the paper introduces as such; the other three are either already explained in the
# same sentence they appear in or are plain enough compound English not to need a
# gloss. No fact changed — only the label and the sentence around it.
#
# The name is spelled out as the core README defines it: Control · Orchestration ·
# Resilience · Enforcement (owner, 2026-09-26: every product name spelled out).
#
# English only, like /river/ and /downloads/, so no translation is left behind; the
# homepage card that links here falls back to this page on /es/, /fr/ and /pt/ and
# says the page is in English.
image: "/images/products/core-og.jpg"
rp:
  lockup: "CORE · Control · Orchestration · Resilience · Enforcement"
  title: "Your software, your AI and your data, on machines you own."
  promise: "**Runink CORE** keeps your company's software healthy, governs the AI models and agents that work inside it, watches your own data, and turns a written brief into a working application. Its AI model runs on those same machines. No outside AI service is called."
  cta:
    - { text: "Book a consultation", url: "/#contact", style: "primary" }
    - { text: "Read the CORE paper", url: "/blog/whitepapers/runink-core/", style: "ghost" }
    - { text: "📖 Read the docs", url: "https://docs.runink.org/core/", style: "ghost" }
    # Documentation: All Runink product docs at docs.runink.org/<product>/
  fine: "A product in its own right, sold separately · in English, Spanish, French and Portuguese"
  plate:
    name: "Runink CORE"
    sub: "One console, five parts. Each answers one question."
    rows:
      - { k: "Overview", v: "Is anything wrong, and where do I go next?" }
      - { k: "Delivery", v: "Is the platform running, and did our changes actually ship? (CORE's own console calls this part DevEx.)" }
      - { k: "AI governance", v: "What may our models and agents do, and can we trust their work? (CORE's own console calls this part DataEx.)" }
      - { k: "Intelligence", v: "What does our data hold, and where do money or controls slip?" }
      - { k: "FORGE (preview)", v: "How does a written brief become a working application?" }
    foot: "It asks before it acts."
  mission: "Where does our information go? To a machine you own, *and it stays there.*"
  facts:
    - { k: "5 parts", v: "Overview, Delivery, AI governance, Intelligence and FORGE (in preview), on one menu" }
    - { k: "1 command", v: "brings the whole platform up on one workstation" }
    - { k: "your model", v: "the assistant, the helpers and FORGE all run on your hardware" }
    - { k: "every action", v: "recorded with a name, in a record anyone signed in can verify" }
  split:
    eyebrow: "Three habits on every page"
    heading: "It says what it knows. It asks before it acts."
    body:
      - "Most companies now run more software than any one person understands. CORE gives every application the same foundations once: somewhere to run, one way to prove who you are, a way to reach company data, one place to look, and a way to get changes made."
    list:
      - "**Not known is not zero.** A figure the console could not read is shown as not known, never drawn as a zero, so nobody decides on a reading nobody took."
      - "**A person approves.** The automated helpers propose. Nothing is filed, changed or published until someone with the right to decide says yes."
      - "**A second opinion.** Where a finding matters, an independent assessor reads the evidence first. It can agree, disagree or say it could not judge."
    link: { text: "How the console is arranged", url: "/blog/whitepapers/runink-core/" }
  features:
    heading: "What each part of the console does"
    intro: "Every page opens the same way: one status line, a headline, and where the reading came from and when it was taken."
    items:
      - { k: "overview", title: "Start the day in one look", body: "Headline readings, then a *Needs attention* list, worst first, each item linking to the page that deals with it. Ask CORE, the assistant, does a task in plain words and shows every step it took." }
      - { k: "delivery", title: "Know what shipped", body: "GitOps shows whether what is running matches what was written down. Deploy lineage shows whether a change reached production. Press *Verify now* on the Audit chain and it names the first record that was altered." }
      - { k: "govern", title: "AI you can answer for", body: "Model cards list each model's source, version, licence and test evidence, checked against what is live. Autonomy is a setting you choose for each kind of action, and every kind starts with a person approving each act." }
      - { k: "trust", title: "A second opinion before you act", body: "Findings arrive with a proposed remedy — start a named helper, file a tracking item, or acknowledge it — confirmed and written to the Audit chain before it happens. (CORE's console calls this queue the Harness.) Where a finding matters, an independent assessor reads the evidence first and says whether it agrees, disagrees or could not judge, never blended into a score." }
      - { k: "intelligence", title: "See what your data holds", body: "Dashboards for the analyst, the finance lead and the programme office, built on one set of figures. Data quality, capital spending, business rules and lineage, each computed from your own records or shown as absent with the reason." }
      - { k: "resolve", title: "An inventory read, not remembered", body: "Resolve maps which systems hold which data and how they connect, when an administrator asks. It keeps structure and counts only, never a value, and marks each link as declared, inferred or a guess." }
      - { k: "local", title: "No outbound connection, in our own test run", body: "In our audit run, CORE made no outbound connection while testing, exploring, mapping and assessing your sources; integrations you turn on, such as GitHub or Stripe, connect only to their own services. That was one run, about six seconds, on a development machine, with Chrome and the host out of scope, no model wired in, and no such integration configured for it." }
      - { k: "forge", title: "From a brief to an application", body: "In preview. Describe what you want in plain words. The company's own model proposes the steps on a canvas, and nothing is filed until a person approves. The brief stays with the model you run yourself; we are confirming there is no other path out before promising more than that." }
      - { k: "cost", title: "Your own machines, not a bill that grows", body: "One command runs the whole platform on a workstation; one command puts it onto machines you own, in the same shape. Deployments carry a lease and an owner, and the platform removes them when the lease ends. Because the model runs on hardware you already own, asking it more does not raise the bill — budgeting becomes a capacity decision made once, not a bill read every month." }
  steps:
    heading: "See it on your own hardware"
    intro: "CORE runs on one machine, from one downloaded file, with one command. The version on your workstation is the version that runs on your machines."
    items:
      - { title: "In an afternoon", body: "Open Overview and notice which readings say they have not been measured. Open the Harness and read a remedy. Open the Audit chain and press *Verify now*." }
      - { title: "In a day", body: "Add one real data source. Try to change it as somebody who is not on the permitted list, and read the record that refusal leaves." }
      - { title: "In a week", body: "Put it on machines you own. Have somebody outside the platform team request a deployment, and watch it remove itself when its lease ends." }
  papers:
    heading: "Read the detail"
    items:
      - { url: "/blog/whitepapers/runink-core/", title: "The Runink CORE paper", note: "Every page of the console: the question it answers, who uses it, and why it is worth having.", cta: "Read the paper" }
      - { url: "/blog/whitepapers/runink-core-atlas/", title: "Runink CORE and Atlas", note: "A joint paper with Logical Leap: Atlas's oversight screens inside CORE, on your own data, with a second opinion built in.", cta: "Read the paper" }
      - { url: "/products/core-pricing/", title: "Pricing", note: "You pay per person, and each person comes with an allowance of computing capacity included. No success fees, ever.", cta: "See the plans" }
  final:
    heading: "Bring one system you would like to stop worrying about."
    body: "Half an hour, with whoever owns it in the room. We will show you what CORE reads from it, what it keeps, and who can change it."
    tagline: true
    cta:
      - { text: "Book a consultation", url: "/#contact", style: "primary" }
      - { text: "Read the CORE paper", url: "/blog/whitepapers/runink-core/", style: "ghost" }
---
