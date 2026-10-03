---
title: "Runink TIDE"
layout: "product"
description: "Runink TIDE takes the repeat questions off engineering, platform and data teams: what broke and why, whether a fix shipped, which number is right, who changed what. Run it on your own servers, in your own cloud account, or on Runink's shared machines to start. Helpers propose; a person approves."
next_about: "Runink TIDE"
aliases: ["/products/core/"]
# RENAMED 2026-10: this product was called Runink CORE and is now Runink TIDE
# (Trusted Intelligence for Developer & Data Experience). The old URL stays live
# through `aliases`. In copy, write "Runink TIDE" at the first mention on a page
# and "TIDE" after that; never a bare "Tide", a name already crowded in AI
# tooling. FORGE, DevEx, DataEx and Intelligence keep their names as sections
# inside it. Links into docs.runink.org keep their /core/ paths, which work
# today; the docs site will redirect them to /tide/ once it publishes there.
#
# Where every claim here comes from: the TIDE paper, content/blog/whitepapers/
# runink-tide.md (sections named beside each block in the PR), and the product copy
# of #246 "Present Runink TIDE as a product in its own right". Nothing on this page
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
# `trust` (Harness + Judgements, DataEx section), `local` (TIDE's own egress-audit
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
# Restyled 2026-10-01 (owner request): "DevEx" and "DataEx" are TIDE's own internal
# console menu-category names (Developer Experience / Data Experience) and had been
# exposed straight to a buyer with no gloss, in the `plate` facts row, the `facts`
# count and the `features` item keys — exactly the "vocabulary that names an
# implementation" CONTENT.md rule 3 says to delete. Fixed by leading every
# buyer-facing spot with the plain-language outcome (delivery confidence; AI you can
# govern and trust) and demoting DevEx/DataEx to a one-line parenthetical gloss for
# a reader who already knows TIDE's own console — never the primary label. The
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
# Updated 2026-10-01: a `devices` card was added and taken out again the same day;
# it goes back only on the TIDE owner's word that the Server release carrying it has
# passed acceptance (the parked text is kept outside this repo). The note above about
# upcoming work stands. The `papers` pricing note now follows /products/tide-pricing/
# (priced by where TIDE runs, a team allowance of Compute Units, sold on its own)
# and says nothing about where the allowance is read until that can be shown.
#
# The name is spelled out once, here in the hero lockup: Trusted Intelligence for
# Developer & Data Experience (owner, 2026-09-26: every product name spelled out).
# Other pages name the product and do not repeat the expansion, except the
# one-line name glosses on the homepage cards and the /products/ index, which spell
# out every product the same way.
#
# English only, like /river/ and /downloads/, so no translation is left behind; the
# homepage card that links here falls back to this page on /es/, /fr/ and /pt/ and
# says the page is in English.
#
# Rewritten 2026-10-03 (owner: "business value, not AI hype"). Every card now
# opens on a burden the buyer carries (the on-call page, the unread pull request,
# the audit rebuilt by hand, the forgotten environment, the wrong number found by
# the business first, two teams with two figures, the AI inventory nobody keeps,
# data that cannot leave), then says what TIDE does in plain verbs, then names the
# cost line it touches. No figure was added: the steps intro carries the paper's
# own method ("How to see the value in your own records") instead of a number.
# Every claim still comes from the TIDE paper; the `resolve` card was folded away
# rather than reworded, and the console's own words (DevEx, DataEx, Harness) stay
# only as small section labels, each explained by the burden it removes.
image: "/images/products/tide-og.jpg"
rp:
  lockup: "TIDE · Trusted Intelligence for Developer & Data Experience"
  title: "Know what broke, what shipped and which number is right. On your servers, your cloud or ours."
  promise: "**Runink TIDE** takes the repeat questions off your engineering, platform and data teams: why did it break, is the fix live, which dashboard is right, who changed this. Helpers draft the answer or the fix. A named person approves it. Run it on your own servers or cloud account and your data stays there. No plan sends it to an outside AI service."
  cta:
    - { text: "Book a consultation", url: "/#contact", style: "primary" }
    - { text: "Read the TIDE paper", url: "/blog/whitepapers/runink-tide/", style: "ghost" }
    - { text: "📖 Read the docs", url: "https://docs.runink.org/core/", style: "ghost" }
    # Documentation: All Runink product docs at docs.runink.org/<product>/
  fine: "A product in its own right, sold separately · in English, Spanish, French and Portuguese"
  plate:
    name: "Runink TIDE"
    sub: "One console, five parts. Each one takes a question off somebody's week."
    rows:
      - { k: "Overview", v: "What is wrong right now, and where do I look first?" }
      - { k: "Delivery", v: "Is the platform up, and did my fix actually ship? (The console calls this part DevEx.)" }
      - { k: "AI oversight", v: "Which AI do we run, what may it do, and who checked its work? (The console calls this part DataEx.)" }
      - { k: "Intelligence", v: "Which number is right, and where are money or controls slipping?" }
      - { k: "FORGE (preview)", v: "How does a small tool a team asks for get built without waiting its turn?" }
    foot: "It asks before it acts."
  mission: "Where does our information go? To the machines your plan names, *and it stays there.*"
  facts:
    - { k: "1 screen", v: "for whoever is on duty, in place of one screen for each system" }
    - { k: "1 command", v: "brings the whole platform up on one workstation, so you can try it on your own hardware" }
    - { k: "every deployment", v: "has a named owner and an end date, and is removed when the date comes" }
    - { k: "every action", v: "recorded with a name, in a record anyone signed in can verify" }
  split:
    eyebrow: "Why your team can act on what it shows"
    heading: "It says what it knows. It asks before it acts."
    body:
      - "A dashboard that shows zero when it means *I did not look* gets the wrong person woken, or nobody. A tool that changes things on its own gets switched off after the first surprise. TIDE is built the other way round."
    list:
      - "**Not known is not zero.** A figure the console could not read is shown as not known, never drawn as a zero, so nobody decides on a reading nobody took."
      - "**A person approves.** The helpers propose. Nothing is filed, changed or published until someone with the right to decide says yes."
      - "**A second opinion.** Where a finding matters, an independent assessor reads the evidence first. It can agree, disagree or say it could not judge."
    link: { text: "How the console is arranged", url: "/blog/whitepapers/runink-tide/" }
  features:
    heading: "What it takes off your team's week"
    intro: "Each card starts with a burden your team carries. Then it says what TIDE does about it, and which cost it touches. A person approves anything that files, changes or publishes."
    items:
      - { k: "Overview · on call", title: "The call at 2 a.m. that a written reason could have answered", body: "The person on duty has a screen for each system and none for all of them. Finding the problem takes longer than fixing it. TIDE opens on one *Needs attention* list, worst first. Each item has a plain reason and a link to the page that deals with it. Where TIDE has a remedy, it sits next to the reading, so the know-how belongs to the company, not to a few heads. A health check runs apart from the machines it watches, so it keeps watching when they fail. **Cost it touches:** specialist hours, and an on-call rota only a few names can staff." }
      - { k: "DevEx · changes", title: "Pull requests that wait days for a first read", body: "A change sits until a busy senior engineer has time to look. TIDE's reviewer helper reads changes on the repositories you choose. It lists what it found, worst first, with the evidence. Until a person arms it, it only reports what it would have said. Your engineers still decide what merges. Then *Deploy lineage* shows each change merged, reviewed, built and running, so *is my fix live?* needs no message to the platform team. **Cost it touches:** senior engineering hours spent on first reads and status questions." }
      - { k: "DevEx · audit", title: "Audit evidence rebuilt by hand before every review", body: "Before each audit, somebody spends days piecing together who changed what, and on whose authority. TIDE writes it down as the work happens. Every console action is recorded with the person's name, refused attempts included. Press *Verify now* on the Audit chain and it names the first record that was altered. One audit page gives a single verdict over the platform's checks, and lists any check it could not read instead of counting it as a pass. **Cost it touches:** the person-days your last audit took, and outside help to prepare for the next one." }
      - { k: "DevEx · capacity", title: "Paying for environments nobody remembers", body: "A test environment is set up for a week and runs for months, because removing it is nobody's job. In TIDE every deployment carries a named owner, a reason and an end date from the moment it is requested. It is flagged as the date gets close. When the date comes, the platform removes it. **Cost it touches:** the cloud or server bill for idle capacity." }
      - { k: "Intelligence · data", title: "Broken data, found by the business first", body: "The first sign of a broken feed is often a manager asking why a report looks wrong. On one page, a data steward sees whether each source answered its last test, where a source's own description disagrees with what it holds, and the open data-quality issues, and can check them all again on demand. *Lineage* traces each report back to the systems it comes from, with the trouble spots marked. Fixes wait in a queue where a person approves, tests or dismisses each one, and every decision is kept. **Cost it touches:** rework, and the hours spent tracing a wrong number back to its source." }
      - { k: "Intelligence · one figure", title: "Two teams, two numbers, one meeting", body: "Finance and the programme office bring different figures and spend the meeting reconciling them. TIDE's analyst, finance and programme-office dashboards are built on one set of figures, worked out the same way, from your own records. A figure TIDE could not read is shown as not known. Planned, requested and actual capital spending are checked against each other with a published rule book. **Cost it touches:** analyst hours spent reconciling spreadsheets, and money that leaves before anyone checks." }
      - { k: "DataEx · AI oversight", title: "Nobody can list every AI helper in use", body: "When the board, a customer or a regulator asks which AI you run and what it may do, the answer is a spreadsheet nobody trusts. TIDE keeps that list for you. It records each one's source, version, licence and test evidence, checked against what is actually running, and what each helper is allowed to do. How much a helper may do on its own is a setting you choose for each kind of action, and every kind starts with a person approving each act. **Cost it touches:** risk and compliance hours spent answering the same questions again." }
      - { k: "Private by design", title: "Data that cannot leave, so outside AI tools are off-limits", body: "Customer records, contracts and claims cannot go to somebody else's service, so the quick AI tools are ruled out, and promising evaluations end at *where does that run?* On the Dedicated and Enterprise plans, TIDE runs in your own cloud account or on your own servers. Its assistant, its helpers and FORGE run there too, and records, files, secrets and certificates stay there. On every plan, no outside AI service is called. **Cost it touches:** security reviews that stall a purchase, and a bill from an outside AI service that grows with every question." }
      - { k: "Checked", title: "No outbound connection, in our own test run", body: "In our audit run, TIDE made no outbound connection while testing, exploring, mapping and assessing your sources; integrations you turn on, such as GitHub or Stripe, connect only to their own services. That was one run, about six seconds, on a development machine, with Chrome and the host out of scope, no model wired in, and no such integration configured for it." }
      - { k: "FORGE (preview)", title: "The small tool a team needs waits behind the roadmap", body: "In preview. A product owner describes the tool, or the scheduled steps that move and prepare a set of data, in plain words. TIDE proposes the steps on a canvas, and nothing is filed until that person approves. The approved brief goes to coding helpers as a work item. The result comes back as a change for your engineers to review. The brief stays on the machines your plan names; we are confirming there is no other path out before promising more than that. **Cost it touches:** engineering and contractor time spent on small internal tools." }
      - { k: "Cost", title: "Not billed by the question", body: "Each new application rebuilds the same foundations: sign-in, secrets, a way to reach company data, somewhere to run, something watching it. Each tool bought to fill a gap brings its own account and its own bill. TIDE gives every application those foundations once. On every plan, heavy use of the assistant, the helpers or FORGE is not billed by the question. On your own servers, budgeting becomes a capacity decision made once, not a usage bill read every month. **Cost it touches:** engineering time spent rebuilding foundations, and servers you already own put to work." }
  steps:
    heading: "See it on your own hardware"
    intro: "Before you start, write down two readings from your own records: the person-days your last audit took to answer *who did what, and on whose authority*, and every environment running today with the date it was last used. Both should fall once TIDE is in place. TIDE runs on one machine, from one downloaded file, with one command, and the version on your workstation is the version that runs on your servers."
    items:
      - { title: "In an afternoon", body: "Open Overview and notice which readings say they have not been measured, instead of a reassuring zero. Open the findings queue (the console calls it the Harness) and read a proposed remedy. Open the Audit chain and press *Verify now*." }
      - { title: "In a day", body: "Add one real data source. Try to change it as somebody who is not on the permitted list, and read the record that refusal leaves. That is the record your security lead will ask for." }
      - { title: "In a week", body: "Put it on servers you own. Have somebody outside the platform team request a deployment, and watch it remove itself when its end date comes. Switch on the reviewer for one repository and read what it would have said before you arm it." }
  papers:
    heading: "Read the detail"
    items:
      - { url: "/blog/whitepapers/runink-tide/", title: "The Runink TIDE paper", note: "Every page of the console: the question it answers, who uses it, and why it is worth having.", cta: "Read the paper" }
      - { url: "/blog/whitepapers/runink-tide-atlas/", title: "Runink TIDE and Atlas", note: "A joint paper with Logical Leap: Atlas's oversight screens inside TIDE, on your own data, with a second opinion built in.", cta: "Read the paper" }
      - { url: "/trust/", title: "Trust & Compliance", note: "Who decides, where the models run, the audit chain anyone signed in can check, and how our controls map to five standards. Each claim links to the public documentation behind it.", cta: "Read the page" }
      - { url: "/products/tide-pricing/", title: "Pricing", note: "Priced by where TIDE runs: per person on Runink's shared machines, as a team plan with an allowance of Compute Units; per machine in your own cloud; with you on your own premises. Sold on its own. No success fees, ever.", cta: "See the plans" }
  final:
    heading: "Bring one system you would like to stop worrying about."
    body: "Half an hour, with whoever owns it in the room. We will show you what TIDE reads from it, what it keeps, and who can change it."
    tagline: true
    cta:
      - { text: "Book a consultation", url: "/#contact", style: "primary" }
      - { text: "Read the TIDE paper", url: "/blog/whitepapers/runink-tide/", style: "ghost" }
---
