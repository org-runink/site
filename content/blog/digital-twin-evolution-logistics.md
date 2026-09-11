---
title: "The Digital Twin Maturity Model: Efficiency and ESG in Modern Logistics"
author: "Runink Logistics Operations Team"
date: 2026-06-13T20:24:00Z
draft: false
featured_image: "/images/blog/low-poly-digital-twin.png"
description: "The three levels of digital twin maturity — a picture, an adviser, and a system that acts — and where Runink FACE sits on that scale, which is deliberately not at the top."
slug: digital-twin-evolution-logistics
categories: ["Logistics AI", "Actionable Twin", "ESG"]
tags: ["Intelligent Twin", "Cognitive Twin", "Agentic Decisions", "Supply Chain", "Runink"]
robots: index, follow
---

## What are the Key Takeaways from this Executive Summary?
{{< direct-answer >}}
Digital twins are sold at three levels: a picture of what is happening, an adviser that suggests a recovery plan, and a system that carries the plan out on its own. All three depend on the same thing — records good enough to reason over. The choice of level is a governance choice, not a technical one, because the third level moves the decision off a person's desk.
{{< /direct-answer >}}

* **Level 1 (a picture):** a current view of the physical operation, drawn from the data it already reports. Useful, and passive.
* **Level 2 (an adviser):** it reads the pattern, and when something breaks it suggests a recovery plan. A person still decides.
* **Level 3 (it acts):** it works out a response to a situation nobody planned for and carries it out directly in the order or transport system.
* **Data quality is the floor:** none of the three levels works on records that are incomplete, late or contradictory. That part cannot be bought.
* **Sustainability follows from the routing:** a load that is not run empty does not burn the fuel, which is the mechanism behind most reported Scope 3 reductions in transport.

---

## 1. The Three Levels of Digital Twin Maturity

"Digital twin" covers a wide range of things. Some are a map with vehicles on it. Some reason about the operation. A buyer comparing two products described with the same phrase is often comparing two different categories, so it is worth separating them.

Three levels are commonly described. Each one costs more to run than the last, and each one moves more work — and more responsibility — off a person's desk.

### Level 1: A picture
The foundation. A current or near-current view of the physical operation, drawn from the data it already reports: where the vehicles are, what the warehouse holds. It tells you what is happening now. That is worth having, and it is passive. The analysis, the decision and the execution all stay with the operator, who has to notice the alarm first.

### Level 2: An adviser
This one reads patterns. Given enough history, it can spot the correlations a person working from a report would miss. When something breaks — a port strike, a demand spike — it proposes a recovery plan. It advises, and a person still has to review the proposal and act on it.

### Level 3: It acts
The top of the model. It works out a response to a situation nobody wrote a rule for, tests that response against its copy of the operation, and then carries it out: updating the order system or the transport system directly. Vendors describe this as a tireless digital employee. It is also the level at which the question of who is accountable for the outcome stops being rhetorical.

---

## 2. Who the Twin Has to Serve, and Why Data Quality Comes First

{{< direct-answer >}}
A supply chain has four parties with different incentives: the shipper wants cost and speed, the carrier wants full vehicles, the consignee wants predictability, and the forwarder wants margin. A twin that serves all four needs records that all four agree on, which is why data quality is the first piece of work rather than the last.
{{< /direct-answer >}}

A supply chain has several parties in it, and they do not want the same things:

1.  **The shipper** hands over the goods, and is judged on cost and speed to market.
2.  **The carrier** moves them, and is judged on how full the vehicles are and how dense the routes.
3.  **The consignee** receives them, and wants predictable dates and stock on hand.
4.  **The freight forwarder** consolidates, and lives on margin and clean customs.

For a twin to serve four parties with four incentives, it needs records all four recognise. That is the unglamorous part of this subject, and it is where most programmes actually stall.

**Data quality is the floor.** A twin cannot reason over records that are incomplete, late or contradictory. It will still produce an answer — which is the problem. When the records are sound, the same work pays twice: the same joined-up picture that improves the operation also produces the numbers a sustainability report needs.

Routing shows the double effect plainly. Cutting empty miles lowers the fuel bill and the Scope 3 emissions that come with it, because they are two consequences of the same mile not being driven. That is one mechanism, not two initiatives.

---

## 3. What Changes Between a Manual Operation and a Modelled One

{{< direct-answer >}}
Three differences matter. Emissions move from something counted afterwards to something the routing decision accounts for. Routing moves from an overnight batch to something that can be recalculated when a road closes. And planning moves from preparing for the disruptions you have seen before to testing responses to ones you have not.
{{< /direct-answer >}}

### 🌱 Sustainability
*   **Manual:** carbon data is compiled in spreadsheets after the fact, mostly for the annual return. It is a lagging measure, and it changes nothing.
*   **Modelled:** the emissions consequence is part of the routing choice. Options are tested before the vehicles move, so a mode shift from road to rail or a consolidated part-load is chosen for the cost and the emissions together.

### ⏳ Efficiency
*   **Manual:** routes are planned in an overnight batch. If a road closes at ten in the morning, the rest of the day cascades, because nobody can recalculate a whole network by hand at that speed.
*   **Modelled:** the plan can be recalculated during the day, taking in traffic, weather and congestion at the site. The dispatcher gets a revised plan instead of a problem.

### ⛈️ Resilience
*   **Manual:** the operation is prepared for the disruptions it has seen before — a seasonal peak, a known bottleneck — and improvises for the rest.
*   **Modelled:** alternatives can be tested against the copy before being tried in the real network, which is what makes a canal blockage or an export ban something to plan around rather than absorb.

---

## 4. Where Runink FACE Sits on This Model

{{< direct-answer >}}
Runink FACE is built for the middle of this model and stops short of the top on purpose. It reads the records, works out what they mean together, and drafts the action — the short-pay, the claim rebuttal, the reallocation, the compliance note. The draft then waits in a queue for a named person to approve, edit or reject, and the decision is recorded against that person.
{{< /direct-answer >}}

Four of the kinds of work described on the [Runink FACE](/products/face/) page map onto this model. In each case the reasoning belongs to the software and the decision does not. Read the scenarios below with that boundary in mind: where an older vendor would say "executes", the honest verb here is "drafts for approval".

### 1. Fulfilment (level 2 to 3)
**What it affects: efficiency and resilience**

Instead of a fixed allocation rule, the fulfilment work reconsiders stock positions when the picture changes — when a primary vendor records a stockout, or a site goes down — rather than waiting for the next planning cycle.

What arrives is a proposed reallocation to a named second source, with the stock positions it was based on attached, for the person who owns the order promise to approve or reject.

### 2. Claims (level 2 to 3)
**What it affects: resilience and cost recovery**

Claims are full of situations nobody wrote a rule for: damage in transit, or a carrier citing an exclusion nobody has read in years. The work here is to read the claim file against the policy that governs it and against what was actually recorded at the time, and to test whether the defence being offered is supported by those records. The reasoning is the adviser part; the drafted, evidence-backed rebuttal is the next step up. The draft goes to whoever signs claims. Nothing is filed to a carrier portal without that signature, because filing a claim is a legal act and software is not a party to it.

### 3. Freight invoice review (level 2)
**What it affects: efficiency and margin**

This one depends entirely on record quality. Invoice lines are compared against the negotiated contract and against the operational timestamps for the same movement. What comes out is the charges the records do not support: a detention charge against a container that was gated out inside its free time, a liftgate fee on a dock-to-dock move. Each arrives as a named line with the contract clause and the timestamps that contradict it. The short-pay is drafted; approving it is an accounts payable decision, and it stays one.

### 4. Compliance (level 2 to 3)
**What it affects: governance**

Reporting standards shift, and exposure is usually read once a year when the report is due. The compliance work reads it continuously instead, so a structural variance surfaces in the week it appears rather than in the year-end scramble. What it produces is a draft of the documentation that variance requires, with the records behind it. Not a filing, and not a sign-off.

---

### Where This Leads

The logistics networks of the 2010s were built on the idea that people needed better visibility. The networks now being sold are built on the idea that visibility is just the prerequisite for autonomy. That second idea is worth examining rather than accepting. In claims, compliance and payment, the act itself carries legal and commercial liability, and liability does not transfer to software.

So the useful reading of a maturity model is not "how far up the scale can we get". It is "how much of the reading and reasoning can come off a person's desk while the decision stays on it". That is the line Runink FACE is built to. It is a design choice, not a stage to be passed through later.


---

---

## Sources

- [GHG Protocol — Scope 3 Standard](https://ghgprotocol.org/corporate-value-chain-scope-3-standard) — The standard that defines the Scope 3 categories referred to above
