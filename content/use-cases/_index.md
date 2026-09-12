---
title: "What Runink FACE Is Built For"
# This section is Runink FACE's scenarios and nothing else. FACE is the flagship.
# Runink PULSE (market analysis) is a separate product with its own material, and
# CORE is the platform underneath both — neither of their capabilities may be
# listed here, because a reader who cannot tell which product does which job
# reads the whole set as one product's track record.
#
# Every child page carries `product: "FACE"`. So does this index, so the section
# and its pages agree.
product: "Runink FACE"
# Do not state a count in the title or description. The set grows; the previous
# version said "Seven" in three places and was wrong the moment a page was added.
# The count beside the coverage heading is computed from len .Pages in
# layouts/use-cases/section.html for exactly that reason — it cannot go stale.
description: "The operational jobs Runink FACE is built for. In each one the evidence is already in your systems and nobody has the hours to join it up, and each one ends with a person approving a drafted action rather than reading another dashboard."
# The body below renders. It did not once: `layout: "section"` matched nothing,
# so the page fell through to layouts/_default/list.html, which prints .Title,
# .Description and an automatic card grid and never prints .Content — the whole
# argument in this file reached no reader at all. layouts/use-cases/section.html
# exists now and renders it, and that file's own header carries the history.
#
# Left as a note rather than deleted because this file is the one that chooses
# `layout: "section"`, and the next person to change that line needs to know a
# matching template is what makes the prose visible.
layout: "section"

# ---------------------------------------------------------------------------
# THE COVERAGE INDEX.
#
# This used to be five `card-grid` shortcodes in the body: twelve cards of equal
# width and height, each with a rounded tile and a small icon, sitting under
# 3,000px of full-bleed prose. Twelve equal cells cannot show that the groups
# mean anything, and the groups are the only thing on the page that answers
# "does this cover my problem".
#
# It lives in front matter now so that the template can render it above the
# argument with real hierarchy, and so that adding a use-case page is one line
# here rather than a hand-written card. A page left out of `groups` is not
# dropped — section.html collects it under `groups_other_label`.
#
# THE GROUPING IS THE PAGES' OWN, not a taxonomy laid over them. Every child
# page has the same four-part shape — "In Short", a hook, "Where It Goes Wrong",
# "What Happens Instead" — and the hook says when in the operation the problem
# lands. "The Signal Turned Before The Plan Did", "Stop Finding Out Too Late"
# and "Write The Plan Down Before You Argue It" are three statements about the
# same moment, which is before anything has been committed to. "Optimal At Six.
# Not At Ten." and "Hands On The Wheel." are the day already running. "A Return
# Is Worth Most On Day One" and "Claims That Expire Quietly" are the aftermath.
# "The Gathering Is The Job" and "A Lookup That Should Take Ten Minutes" are
# somebody having to produce the file.
#
# `name` is the short domain label a reader scans. The line printed under it is
# the child page's own `title`, read off the page at render time, so it is that
# page's own words in that reader's own language and cannot drift.
coverage_heading: "What this covers"
coverage_meta: "jobs"
coverage_intro: "They are grouped by when in the operation the problem turns up: before you commit to a plan, while the work is moving, after something has gone wrong, and when someone asks you to prove it."
groups_other_label: "Also here"
groups:
  - label: "Planning what you will need"
    deck: "Before you commit. What next quarter will ask for, what cover you are holding, and what a change would cost if you made it."
    items:
      - page: "demand-forecasting"
        name: "Demand forecasting"
      - page: "fulfillment-optimization"
        name: "Stock cover and supplier planning"
      - page: "hypothesis-lab"
        name: "Testing a change before you commit"
  - label: "Moving it"
    deck: "While the work is moving. The route, the picture across the whole chain, and the driver whose hands are on the wheel."
    items:
      - page: "route-optimization"
        name: "Route planning"
      - page: "supply-chain-visibility"
        name: "Supply chain visibility"
      - page: "voice-dispatch"
        name: "Hands-free dispatch for drivers"
  - label: "When something goes wrong"
    deck: "After the event. A container that drifted warm, a return sitting on the dock, a claim with a deadline running."
    items:
      - page: "cold-chain-safety"
        name: "Cold chain and yard safety"
      - page: "responsive-reverse-logistics"
        name: "Returns and reverse logistics"
      - page: "claims-recovery"
        name: "Freight claims and port charges"
  - label: "Paper, policy and proof"
    deck: "When someone asks you to prove it. The claim file, the clause that governs, the report."
    items:
      - page: "insurance-underwriting"
        name: "Underwriting and claim files"
      - page: "paralegal-review"
        name: "Contract and obligation review"
      - page: "compliance"
        name: "Privacy and emissions"

next:
  label: "One next step"
  title: "Bring one lane, one carrier, or one month of returns."
  body: "Half an hour, with whoever owns the problem in the room, and we walk that one example end to end. If the losses you carry are not the shape of the ones described here, we will say so."
  cta: "Book a consultation"
  note: "The form opens with the scenarios already named, so you are not starting by explaining where you came from."
  about: "The scenarios"

---

## The Problem Runink FACE Is Built Around

Every job above has the same shape. The facts you need are already recorded somewhere in your business. They sit in four systems, in four formats, and joining them up takes a morning that nobody has.

So the claim expires. The container is opened warm. The order goes out by air. Not because anyone made a bad call, but because nobody had the time to reach the point where a call could be made.

## What Runink FACE Does About It

FACE is built to run its checks against your own records overnight, so that the morning starts with a short, ranked list of things that happened, with the records attached.

Each item is meant to be a **proposed action**, not an alert. The claim comes with the receipt, the reading, the rate and the deadline, and a drafted letter. The temperature drift comes with the container, the customer and a drafted rerouting.

A proposed action waits in that queue as a record of its own. Approving it is the step that carries it out, and the approval is written down with the name of the person who gave it and what they decided. An action nobody approves is an action that has not been sent.

Note what that is and is not. It is a queue whose items move because a named person moved them, and a record of who moved them — not a blanket gate somewhere in the system that inspects everything else your business does. Where part of a drafted action cannot be carried out, what comes back says so rather than reporting it done.

Approving is designed to end the work rather than start it. The reply names what went and what did not — a mail connector that is not configured comes back as a named skipped step, with its reason, on every reply. Later, when someone asks why a claim was filed or an entry was held, the answer comes from the record.

## Two Things Worth Knowing Up Front

**Your data stays on your machines.** The order files, the customs papers, the sensor readings and the reasoning about them all run on hardware you control — FACE runs on the Runink CORE platform, which is what makes that a property of the build rather than a setting somebody has to honour. Nothing goes to an outside model provider. That is the kind of answer a security review asks for before it will let a supplier hold its order data.

**The queue is where you decide.** Every item arrives with its reasoning and the records it rests on, so you can read why it was proposed before you agree to it. What you approve is what gets carried out, and an item you leave alone stays where it is. Which kinds of work are worth putting through the queue in the first place is a question you answer when you set it up — not a value threshold the software polices on your behalf.

## Where These Scenarios Stand

None of the scenarios above is a customer result. They are written from what the software is built to do, in the vocabulary of the people who own the problem, and they have not been run against any customer's data. Nothing here is a case study, and there are no figures in it, because the figures would be ours and the ones that matter are yours.

Runink PULSE, the market-analysis product, and the CORE platform FACE runs on are covered in [their own papers](/blog/whitepapers/). They are not on this page, and none of the jobs above is a result belonging to either of them.
