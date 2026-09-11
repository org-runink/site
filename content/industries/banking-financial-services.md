---
date: 2026-09-07T00:00:00Z
title: "Banking & Financial Services"
description: "Payment instruction integrity, third-party risk, decision governance, fee and interest calculation. The Runink CORE and Atlas oversight arrangement: an assessment platform produces findings, and CORE judges each one on separate credentials before a person is asked to act."
# ATTRIBUTION, and the thing a reader most needs to know before reading on.
#
# This page is NOT Runink FACE and not a Runink product you can buy. It
# describes the joint arrangement in the CORE-and-Atlas paper: Atlas, from
# Logical Leap, watches the flow and produces findings; the Runink CORE platform
# receives them through a credentialed door, judges each one, and hands verdicts
# back. Nothing in FACE covers payment instruction integrity, interconnect,
# model governance or rate cards — there is no banking connector and no banking
# domain in it — so attributing this page to FACE would have been the exact
# conflation this section exists to remove.
#
# TWO THINGS TO KNOW ABOUT THE HALVES, both of which the page now states:
#
#   * CORE's half — findings in, verdicts back, on a different credential from
#     the one the findings arrived on — is BUILT and exercised end to end in
#     automated testing. The eight deterministic gates, the recomputed
#     arithmetic and the unable-to-judge verdict are all real.
#   * The producer half is Atlas, which is a partner's product offered in
#     private beta, and the direction where CORE reaches into Atlas is a named
#     way in with nothing written behind it. It waits on a written description
#     from Logical Leap's side.
#
# So the reading of the customer's own stream — the thing every "population is
# the population" claim on this page depends on — is not Runink's to promise.
# The old copy asserted it flatly, in Runink's voice, with no mark on it. The
# paper's own register marks its banking page `hypothetical`, and that mark now
# travels with the copy that was derived from it.
product: "Runink CORE + Atlas"
weight: 30
# category: binds this page to the palette's category tokens via the
# .rk-cat-* class the layout emits. It replaces an `accent:` hex, which
# went dead when the stylesheets moved to --rk-accent: the hex was still
# injected into a style attribute that nothing read any more. A class can
# follow the ground; a literal cannot.
category: "banking"
card: "Runink CORE with Logical Leap's Atlas — payment instruction integrity, third-party risk, decision governance and the evidence a supervisor asks for. An architecture, not a product on our price list."
headline: "You are not asked whether the control exists. You are asked to show that it operated."
deck: "Payment instruction changes, credit decisions, fee calculations, transaction monitoring, model governance, third-party risk. Every one is a written rule applied to a flow, under an authority that expects the rule to be demonstrable rather than asserted. Read this page as an architecture rather than a product: it describes the Runink CORE platform working with Atlas, an assessment platform from Logical Leap, and the illustrations below are hypothetical. Nothing here has been run at a bank."

problems_heading: "Where it goes wrong"
problems:
  - title: "A break that grows inside the range you always clear"
    body: "Each month's movement sits within what has been cleared before, so no single month escalates. What is unusual is the three-month sequence, and nobody is reading the sequence."
  - title: "The verification rule on a payment destination"
    body: "A change to where money goes is governed by a rule. That rule is enforced in the system, performed by a person following a procedure, or neither — and which one it is has a habit of surfacing after the event rather than before it."
  - title: "Contracts nobody reads again after signature"
    body: "Supplier agreements carry obligations on service levels, sub-contracting, data handling and notification. Reading the contract against the relationship you actually have is a comparison at a volume nobody has staffed."
  - title: "Rate cards applied across a portfolio"
    body: "Tiers, thresholds and product terms are a reconciliation between what the terms say and what was charged. It gets done periodically, for the same reason as everything else here: volume."

owners_heading: "Who owns this"
owners_intro: "The supervisor's question and the internal one are the same question, asked by different people."
owners:
  - role: "Compliance and risk"
    line: "The answer moves from \"controls were operating effectively during the period\" to a list: the exceptions found, when each was found, what was decided and by whom — with the ones that could not be judged named as that, rather than folded in as passes."
  - role: "Internal audit and control testing"
    line: "The design's answer to sampling is that the population tested is the population and the exceptions come back as named items. Judge that on the producer, not on us: reading your stream is the assessment platform's half, and it is the half in private beta."
  - role: "Finance"
    line: "Where the tier applied and the tier earned differ, and where the accrual differs from what the agreement earns, is stated with the clause it was read from."
  - role: "Operations"
    line: "A departure from the plan is noticed while a remedy is still available, instead of becoming a recovery action later."
  - role: "Security and IT"
    line: "The model doing the reading runs on your own hardware. The records, the files and the credentials stay on your systems."

outcomes_heading: "What the arrangement changes — and which half of it runs"
outcomes:
  # Kept and sharpened: this is the built half, and it is the strongest thing on
  # the page. The credential separation is enforced by which door the message
  # arrived at, never by a field the sender fills in.
  - "Built. A finding submitted for judgement is graded on a different credential from the one it was submitted with. The two are separate doors: a verdict arriving at the findings door is discarded, and the submitting platform's own secret is refused by name at the verdict door, with the refusal saying why. A submitter cannot grade its own work, and that is decided by what credential was presented rather than by a flag in the message — a flag is something a sender sets, a credential is something a sender either holds or does not."
  - "Built. Where a finding claims a rate, the counts behind it travel with it and the arithmetic is recomputed rather than accepted. A figure the evidence does not reproduce is a dissent with the arithmetic named. A count divided by nothing is unable to judge, never a rate of zero. Two readings of the same quantity that disagree are unable to judge, never averaged into a third figure neither party observed. A claim carrying a number never reaches a model at all, because asking a model to opine on a number nobody measured produces a fabrication wearing a number."
  - "Built. A claim in prose is put to the model as one question — does this evidence support this claim — and the model is never told what the submitter concluded. There is no parameter through which it could be told. Where no model is reachable, the answer is unable to judge with that stated as the reason, never agreement by default."
  - "Built. The record covers what was allowed, what was refused and what failed — the time, the person by verified identity, the action and the outcome — with each entry hashed against the one before it, so a later change to the record shows."
  # This replaces "Anything that cannot be undone waits for a named person.
  # Where no person is reachable, the gate can be set to refuse rather than to
  # proceed." The second sentence describes a real fail-closed pattern; the
  # first was a blanket gate over everything irreversible, which no single
  # switch in this codebase delivers. Claim the specific behaviour instead.
  - "Built. Specific paths fail closed rather than open: an unconfigured ingest refuses rather than accepting anything, an undeclared identity is refused, and where no secret has been issued the findings door accepts nothing rather than accepting everyone — so a configuration nobody finished cannot quietly become an open one. That is a set of named behaviours, not one global switch over everything irreversible, and it is worth asking which of your paths are covered."
  - "Not built, and it is the half this page most depends on. The finding has to come from somewhere. In this arrangement the producer is Atlas, a Logical Leap product currently in private beta, and the direction in which CORE would reach into Atlas to collect findings itself exists as a named way in with nothing written behind it — it waits on a published description of how to call Atlas, not on effort. What runs today is the other direction: a platform submits a batch and reads its verdicts back on the same connection. So read every claim below about reading your whole population as a property of the arrangement, not as something Runink is in a position to deliver to you on its own."
  - "Demonstrated where. In automated testing, with a real assessor program run against the real receiving code over a real connection. Not against a live installation, and not against Atlas. Ask for the field evidence before relying on any of it; there is none yet, and we would rather say so than let the word continuous do the work."

measures_heading: "How you will know it worked"
measures_intro: "None of these numbers are ours. They are yours, and most already sit in a report somebody runs monthly. Write down where you stand today before anything starts: the baseline stops being recoverable the moment things improve. The right-hand column says what the arrangement would move and why — it is the mechanism argued, not an outcome anybody has observed, because no bank has run this."
measures:
  - metric: "Time to close an audit or regulatory finding"
    today: "Your issue register — raised date to closure date, for findings closed in the last four quarters. Split those that waited on evidence from those that waited on a decision."
    moves: "Down on the evidence-bound half, because the record a closure rests on is written as the work happens rather than reassembled afterwards."
  - metric: "Findings open past their due date"
    today: "The ageing view of that register at last month end: count, original due date, and how many times each item has been extended."
    moves: "Down, because a control checked on every item can be re-evidenced when the remediation lands instead of waiting for the next testing cycle."
  - metric: "Person-days to assemble evidence for one request"
    today: "Hours booked against your last supervisory request or audit sample, plus the informal time the business spent finding files. Compare your last two cycles."
    moves: "Down, and the fall is in the finding rather than the reviewing: the reviewer gets the record made at the time of the decision, not a pack built later to describe it."
  - metric: "Reconciliation breaks and their ageing"
    today: "Your month-end break report: open items, value bands, days outstanding, and how many were cleared with no cause recorded."
    moves: "Fewer aged items, and fewer cleared with nothing written down, because a run of movements that each sit inside the usual range can be raised on the shape of the sequence rather than on any single month. Note what the machine does and does not do there: it says the sequence is unusual against the available history, cites the series, and files the item for a person. It has no view on the cause, because attributing one needs somebody who knows what changed operationally that month."
  - metric: "Control-testing coverage and exception rate"
    today: "Your testing plan for the last cycle: per control, the population in scope against the population actually tested, and the exceptions found."
    moves: "Coverage toward the whole population, and the exception rate becomes a count of named items rather than an estimate drawn from a sample."
  - metric: "Time from a control failing to somebody knowing"
    today: "Your last handful of control failures: from the timestamp of the failing event in the source system to the date it first appears in your issue register."
    moves: "Down, because that gap is the review interval, and judging each item as it arrives removes the wait rather than shortening it."

foundations_heading: "Two things that make the above possible"
foundations:
  - name: "The reasoning runs on hardware you own"
    plain: "The records, the contracts and the working-out stay inside your estate. The judging model is the cluster's own inference plane: there is no other endpoint, no API key, no vendor SDK and no fallback, and no code path that would take an external model plane. So no customer record, no payment instruction and no draft finding is sent anywhere to be read."
    measured_by: "The length of your own third-party risk and model governance review. What is reviewed is software you run, so there is no external model service to assess and no data-transfer clause to negotiate — though the arrangement as a whole does involve a second vendor, Logical Leap, which your third-party risk process will want to see. When a supervisor asks how a decision was reached, the answer is a record of what was decided, what it cited and who approved it, hash-chained and held by you."
  # Corrected. This said public material is read "rather than by a search
  # company acting for you", which implied no search engine sees the query. The
  # shared engine puts the query to a public search endpoint and then fetches
  # the result pages itself. The true and still-strong claim is the one in the
  # last sentence, which was already right: there is no vendor account.
  - name: "Open-web research with no vendor account behind it"
    plain: "Public material — filings, court and registry records, press — is found through a public search endpoint queried from inside your estate, and the pages behind the results are then fetched and read by your own browser rather than summarised for you by a paid research service."
    measured_by: "Adverse-media and counterparty research, where the question is more sensitive than the answer. The search engine sees the query, as it would from any browser. What does not exist is an account: no API key, no vendor contract, no per-question bill, so no supplier accumulates a history of the names your bank has been asking about, filed under your bank and retained on their terms. That is the part that matters when the name is market-sensitive or the file later becomes evidence."

next_heading: "See whether it fits"
next_body: "Bring one control and the systems it is supposed to live in — the verification rule on payment destinations, a supplier agreement, a rate card. A short session is usually enough to see whether the written rule and the applied rule still match, and whether this arrangement is the right shape for you or whether you are better served waiting. We would rather tell you which half is built in the meeting than have you find out in the pilot."
cta_text: "Book a consultation"
# The link stays on the CORE and Atlas paper, and deliberately so. Unlike the
# insurance page, the mechanism described here really is that arrangement's and
# not FACE's: two doors on separate credentials, eight deterministic gates,
# recomputed arithmetic, unable-to-judge as a first-class verdict. Repointing it
# at the FACE paper would have sent a banking reader to a logistics product.
# What the paper does that this page did not is state on its own pages 12 to 14
# which half runs — so the note now sends the reader to those pages by number.
paper:
  text: "Read the CORE and Atlas paper"
  url: "/blog/whitepapers/runink-core-atlas/"
  note: "The long version of the arrangement on this page, written jointly with Logical Leap: what a finding contains, the eight checks it passes before anything reaches a model, how the arithmetic is recomputed, and how a second judgement is formed on a separate credential. Read pages 12 to 14 first — they state exactly which half is built and which is drawn, and every other claim in the paper should be held against them. No case studies, no customer names, no return-on-investment figures, and no bank has run this."
---
