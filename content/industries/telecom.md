---
date: 2026-09-07T00:00:00Z
title: "Telecom"
description: "Revenue assurance, rating and billing, interconnect settlement, network capital programmes. The Runink CORE and Atlas oversight arrangement applied to two records that ought to agree, at the transaction."
# Same attribution as the banking page, and for the same reason. This is the
# Runink CORE and Atlas arrangement, not Runink FACE and not a product on our
# price list. There is nothing in FACE that touches mediation, rating,
# interconnect settlement or subscriber plan terms — no connector, no domain —
# so this page could only ever have been the platform arrangement, and it said
# so nowhere.
#
# The built half is CORE's judging: findings arrive through one credentialed
# door, are gated deterministically, have any arithmetic recomputed, and leave
# as verdicts through a second door on a different credential. The producing
# half — reading every rated record against that subscriber's plan terms — is
# the assessment platform's, and that platform (Atlas, from Logical Leap) is in
# private beta. The whitepaper's own register marks its telecoms page
# `hypothetical`; the copy derived from it now carries that mark too.
product: "Runink CORE + Atlas"
weight: 40
# category: binds this page to the palette's category tokens via the
# .rk-cat-* class the layout emits. It replaces an `accent:` hex, which
# went dead when the stylesheets moved to --rk-accent: the hex was still
# injected into a style attribute that nothing read any more. A class can
# follow the ground; a literal cannot.
category: "telecom"
card: "Runink CORE with Logical Leap's Atlas — revenue assurance, rating and billing, interconnect settlement, and rollout across many small sites. An architecture, not a product on our price list."
headline: "Revenue assurance exists because the volume defeated inspection."
deck: "Service delivered against service rated. Rated against billed. Billed against collected. Your interconnect traffic against theirs. Each is two records that ought to agree, over a stream too long to read — which is why the work was built on samples. Read this page as an architecture: it describes the Runink CORE platform working with Atlas, an assessment platform from Logical Leap, and the illustrations are hypothetical. No operator has run it."

problems_heading: "Where it goes wrong"
problems:
  - title: "A rating change right for the promotion, wrong for a legacy plan"
    body: "The affected population is small. It moves no monthly aggregate, fires no threshold, and rarely turns up in a sample."
  - title: "A sample gives you a rate, not a name"
    body: "A monthly sweep produces an estimated error rate. To fix anything, operations needs the affected accounts individually."
  - title: "Two parties, one stream of traffic"
    body: "Traffic as you recorded it, as the counterparty recorded it, and the agreement that sets the rates. Three sources, one difference that matters."
  - title: "Rollout across many small sites"
    body: "Site builds and equipment purchases follow the plan, approve, procure, spend sequence of any capital programme — spread over many small sites, which makes sampling worse."

owners_heading: "Who owns this"
owners_intro: "One function in telecom already does this work by hand. The rest inherit the same shape."
owners:
  - role: "Revenue assurance"
    line: "The comparison runs at the transaction, not as a monthly sweep, so the remedy is a configuration correction and a re-rate."
  - role: "Interconnect and partner settlement"
    line: "Both parties' records of the same traffic, read against the agreement that sets the rates, continuously rather than at period end."
  - role: "Finance and procurement"
    line: "\"Where is our risk concentrated across plan to books?\" has an answer that updates rather than one that gets compiled."
  - role: "Compliance and data protection"
    line: "Rules about subscriber data are applied to the flows, and the evidence that they operated is written as the work happens."
  - role: "Engineering and IT"
    line: "Reasoning runs on your own hardware; records and credentials stay on your systems."

outcomes_heading: "What the arrangement changes — and which half of it runs"
outcomes:
  - "The design's central claim. The population tested is the population, so exceptions come back as named accounts a re-rate can still fix, rather than as an estimated error rate. Be clear whose half that is: reading every rated record against that subscriber's own plan terms is the assessment platform's work, and that platform is a partner's product in private beta. It is the reason to judge this page on the arrangement rather than on a Runink deliverable."
  - "Built. Each finding that reaches CORE is gated deterministically before anything is put to a model: it must be complete enough to read, it must carry evidence, at least one piece must be readable, it must be about the subject of the finding rather than something adjacent, it must not be the claim written out a second time, and dated evidence must be recent enough to say something about the present. Each gate that fires ends the matter and states its own reason in a sentence a person reads."
  - "Built. A finding claiming a rate is settled by arithmetic on the raw counts, recomputed rather than accepted, and never goes near a model. A count divided by nothing is unable to judge, never a rate of zero. Two readings of the same traffic that disagree are unable to judge, never averaged into a third figure neither party observed — which for interconnect is the whole argument."
  - "Built. The judging happens on a different credential from the submitting, enforced by which door the message arrived at rather than by a field the sender fills in. A submitter cannot grade its own work."
  - "Built. Unable to judge is a verdict in its own right and never renders as agreement. No evidence, evidence that only restates the claim, evidence about a different subject, evidence past the staleness horizon, an unreadable answer, or a submitter who could not determine the matter either: each ends there, with the reason written next to it, and goes to a person. An assessor whose confident answers and whose guesses look identical is ignored within a week, and this is the discipline that stops that."
  - "Not built. The direction in which CORE would reach into the assessment platform to collect findings itself is a named way in with nothing written behind it, waiting on a published description of how to call it. What runs is the other direction: a platform submits a batch and reads its verdicts back on the same connection."
  - "Demonstrated where. In automated testing, with a real assessor program against the real receiving code over a real connection. Not against a live installation and not against Atlas. There is no field evidence, and it is the thing to ask for before relying on any of this."

measures_heading: "How you will know it worked"
measures_intro: "The figures below are yours, not ours. Write down where you stand today, before anything changes — a baseline stops being recoverable once things start improving. The right-hand column is the mechanism argued, not an outcome observed: no operator has run this arrangement, and the half that reads your stream belongs to a partner's product in private beta."
measures:
  - metric: "Rating accuracy, and the usage it under-bills"
    today: "The rating error rate revenue assurance reports upward, and the sample size and month behind it. Then a month of mediated usage against what billing charged."
    moves: "It stops being an estimate: each account's rated output is read against its own plan terms, so under-rated usage arrives as named accounts a re-rate can still fix."
  - metric: "Credit notes and billing disputes — volume, value, days to resolve"
    today: "Credit notes raised against billing errors over the last four quarters, from the billing ledger, with opened and closed dates."
    moves: "Volume down, because the error is caught before the invoice goes out. Days to resolve down, because each item carries the records it came from. Billing-dispute churn follows."
  - metric: "Interconnect and wholesale settlement differences"
    today: "Your last settlement cycle with each major counterparty: value in dispute, open items, age of the oldest."
    moves: "Fewer reach dispute, and those that do age less, because your traffic, the counterparty's and the agreed rates are read against each other while both sides still hold the detail."
  - metric: "Capital committed against equipment in service"
    today: "For the current rollout programme: approved spend, purchase orders, equipment received and sites carrying traffic, side by side. If that view takes a week to assemble, the lag is part of the measure."
    moves: "The gap narrows, because equipment at a site that was never turned up shows as an exception the day the records disagree. Order-to-activation becomes a standing figure."
  - metric: "Time from a control failing to somebody knowing"
    today: "Your last few rating, provisioning or settlement incidents: the date the fault began against the date someone was told."
    moves: "Down — and it governs the rest, since each of them depends on how long a wrong rule ran unnoticed. Comparisons run as the traffic arrives, so the interval is set by the process, not the reporting calendar."

foundations_heading: "Two things that make the above possible"
foundations:
  - name: "Your records stay on machines you own"
    plain: "The reasoning runs on hardware you own. Subscriber records, usage detail, contracts and credentials are read where they already live. The judging model is the cluster's own inference plane — one endpoint, no API key, no vendor SDK, no fallback, and no code path that would accept an external model plane."
    measured_by: "Call-detail and subscriber data sits under telecoms privacy and interception law and mostly cannot leave your estate. Measure this as the length of the security review before work can begin, and as whether a regulator's question about who saw what is answered from a hash-chained record rather than an investigation. One honest addition: the arrangement involves a second vendor, and your supplier assessment will want to see them as well as us."
  # Corrected. "No outside search company sits in the middle" and "that nobody
  # sees you doing" were both false absolutes: the shared engine puts the query
  # to a public search endpoint before fetching the pages itself. The
  # commercially real property — no vendor account, so no supplier profile of
  # your questions — was already in the second half of this entry, and it now
  # carries the whole claim rather than sitting under a promise of invisibility.
  - name: "Open-web research with no vendor account behind it"
    plain: "When something has to be checked in public — a competitor's tariff, a supplier, a regulator's notice — the search runs from inside your estate through a public search endpoint, and your own browser then fetches and reads the pages behind the results rather than a research service reading them for you."
    measured_by: "Not invisibility — a search engine sees the query, as it would from any browser. What is absent is the account. Researching a rival's bundle pricing through a vendor's paid service builds that vendor a dated record of what your commercial team was working on, under your name. Here there is no key, no contract and no per-question bill, so nothing accumulates and nothing is capped. Measure it by what your commercial team is willing to check at all."

next_heading: "See whether it fits"
next_body: "Bring one comparison and the agreement that governs it — rating output against plan terms, or a month of interconnect traffic against the settlement. Half an hour is usually enough to see whether the differences that matter are the shape this finds. Bring today's figures for the measures above too; they are your baseline."
cta_text: "Book a consultation"
# Link kept on the CORE and Atlas paper. Unlike the insurance page, the
# mechanism here genuinely is that arrangement's and not FACE's — FACE has no
# rating, mediation or interconnect capability of any kind — so repointing this
# at the FACE paper would send a revenue-assurance reader to a logistics
# product. The note now sends them to pages 12 to 14, where the paper states
# which half runs.
paper:
  text: "Read the CORE and Atlas paper"
  url: "/blog/whitepapers/runink-core-atlas/"
  note: "The long version of the arrangement on this page, written jointly with Logical Leap: what a finding contains, the checks it passes before anything reaches a model, how a rate is recomputed rather than accepted, and how a second judgement is formed on a separate credential. Start at pages 12 to 14, which say exactly which half is built and which is drawn. No case studies, no customer names, no return-on-investment figures, and no operator has run it."
---
