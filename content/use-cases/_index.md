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
description: "The operational jobs Runink FACE is built for. In each one the evidence is already in your systems and nobody has the hours to join it up, and each one ends with a person approving a drafted action rather than reading another dashboard."
# KNOWN ISSUE — the body below does not currently render. `layout: "section"` has
# no match (there is no layouts/use-cases/section.html and no
# layouts/_default/section.html), so this page falls through to
# layouts/_default/list.html, which prints .Title and .Description and then an
# automatic card grid of the child pages — it never prints .Content. hugo.toml
# line 305 describes the intent as "the same argument at length, followed by
# every use case as a card", so the prose is meant to be read. Fixing it is a
# layout change, which is not this file's business; until it is fixed, the
# attribution that actually reaches a reader is the title and description above.
layout: "section"
---

## The Problem Runink FACE Is Built Around

Every job below has the same shape. The facts you need are already recorded somewhere in your business. They sit in four systems, in four formats, and joining them up takes a morning that nobody has.

So the claim expires. The container is opened warm. The order goes out by air. Not because anyone made a bad call, but because nobody had the time to reach the point where a call could be made.


## What Runink FACE Does About It

FACE is built to run its checks against your own records overnight, so that the morning starts with a short, ranked list of things that happened, with the records attached.

Each item is meant to be a **proposed action**, not an alert. The claim comes with the receipt, the reading, the rate and the deadline, and a drafted letter. The temperature drift comes with the container, the customer and a drafted rerouting.

A proposed action waits in that queue as a record of its own. Approving it is the step that carries it out, and the approval is written down with the name of the person who gave it and what they decided. An action nobody approves is an action that has not been sent.

Note what that is and is not. It is a queue whose items move because a named person moved them, and a record of who moved them — not a blanket gate somewhere in the system that inspects everything else your business does. Where part of a drafted action cannot be carried out, what comes back says so rather than reporting it done.

Approving is designed to end the work rather than start it. The message, the deadline and the update to your system of record all follow from the approval. Later, when someone asks why a claim was filed or an entry was held, the answer comes from the record.

## Two Things Worth Knowing Up Front

**Your data stays on your machines.** The order files, the customs papers, the sensor readings and the reasoning about them all run on hardware you control — FACE runs on the Runink CORE platform, which is what makes that a property of the build rather than a setting somebody has to honour. Nothing goes to an outside model provider. That is the kind of answer a security review asks for before it will let a supplier hold its order data.

**The queue is where you decide.** Every item arrives with its reasoning and the records it rests on, so you can read why it was proposed before you agree to it. What you approve is what gets carried out, and an item you leave alone stays where it is. Which kinds of work are worth putting through the queue in the first place is a question you answer when you set it up — not a value threshold the software polices on your behalf.

## Where These Scenarios Stand

None of the scenarios below is a customer result. They are **drawn** — written from what the software is built to do, in the vocabulary of the people who own the problem, and not run against any customer's data. Each page says so on its own terms. Nothing here is a case study, and there are no figures in it, because the figures would be ours and the ones that matter are yours.

## Planning What You Will Need

{{< card-grid cols="3" >}}

{{< card
    title="Demand forecasting"
    icon="chart-bar"
    link="/use-cases/demand-forecasting"
    description="What you will need next quarter is implied by what you sold last year. Reading that out of your own history is a job nobody has the morning for."
>}}

{{< card
    title="Stock cover and supplier planning"
    icon="cube-transparent"
    link="/use-cases/fulfillment-optimization"
    description="A stockout warning that arrives after the safety stock is gone is a bill for air freight with a few days' notice."
>}}

{{< card
    title="Testing a change before you commit to it"
    icon="light-bulb"
    link="/use-cases/hypothesis-lab"
    description="Work out what rerouting costs before you spend the money, against your own numbers rather than a supplier's."
>}}

{{< /card-grid >}}

## Moving It

{{< card-grid cols="3" >}}

{{< card
    title="Route planning that keeps up with the day"
    icon="globe-alt"
    link="/use-cases/route-optimization"
    description="The cheapest route on Monday is not the cheapest one on Thursday. Re-planning it by hand is why it gets planned once."
>}}

{{< card
    title="Seeing the whole chain, not your end of it"
    icon="eye"
    link="/use-cases/supply-chain-visibility"
    description="Each supplier, carrier and warehouse holds one piece of the picture. The picture itself is not held anywhere."
>}}

{{< card
    title="Hands-free dispatch for drivers"
    icon="map"
    link="/use-cases/voice-dispatch"
    description="A driver who has to pull over to read a screen either stops or does not read it. Neither is what you wanted."
>}}

{{< /card-grid >}}

## When Something Goes Wrong

{{< card-grid cols="3" >}}

{{< card
    title="Cold chain and yard safety"
    icon="shield-check"
    link="/use-cases/cold-chain-safety"
    description="The reading that condemns a load is recorded hours before anybody looks at it. The whole problem is the gap between the two."
>}}

{{< card
    title="Returns and what they are still worth"
    icon="arrow-path"
    link="/use-cases/responsive-reverse-logistics"
    description="A return sitting in a bay is working capital nobody has counted. What it is worth depends on how fast it is judged."
>}}

{{< card
    title="Freight claims and port charges"
    icon="currency-dollar"
    link="/use-cases/claims-recovery"
    description="Claims expire because assembling one takes a morning. The receipt, the weight, the rate and the deadline arrive already gathered."
>}}

{{< /card-grid >}}

## Paper, Policy and Proof

{{< card-grid cols="3" >}}

{{< card
    title="Underwriting and claim files"
    icon="clipboard-document-list"
    link="/use-cases/insurance-underwriting"
    description="A claim is a reserve against a policy, and the file that settles it arrives as documents. The reading is drafted for you; the decision stays with the underwriter."
>}}

{{< card
    title="Contract and obligation review"
    icon="magnifying-glass"
    link="/use-cases/paralegal-review"
    description="The clause that matters is in a contract nobody has reopened. It gets read and cited for you, and a person decides what it means."
>}}

{{< card
    title="Customer data privacy and emissions reporting"
    icon="scale"
    link="/use-cases/compliance"
    description="Personal details reach screens that should never show them, and the emissions report takes a quarter to build. Both are joining jobs."
>}}

{{< /card-grid >}}

## See Whether It Fits

Bring one lane, one carrier, or one month of returns. A short conversation is usually enough to tell whether the losses you carry are the shape of the ones described here.

Runink PULSE, the market-analysis product, and the CORE platform FACE runs on are covered in [their own papers](/blog/whitepapers/). They are not on this page, and none of the jobs above is a result belonging to either of them.
