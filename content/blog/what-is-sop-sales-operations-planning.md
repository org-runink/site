---
title: "What Is S&OP (Sales & Operations Planning) and Why Do Most Companies Get It Wrong?"
description: "What S&OP actually is, the five-step cycle, the four reasons implementations underperform, and the data work that has to happen first."
author: "Runink Logistics Operations Team"
date: 2026-03-08T16:16:22Z
draft: false
featured_image: "/images/blog/what-is-sop-sales-operations-planning-header.png"
canonical: https://runink.org/blog/what-is-sop-sales-operations-planning
slug: "what-is-sop-sales-operations-planning"
categories: ["Supply Chain Strategy", "Demand Planning"]
tags: ["S&OP", "Sales and Operations Planning", "Demand Planning", "Supply Planning", "Forecasting", "Runink"]
robots: index, follow
---

## What are the Key Takeaways from this Executive Summary?
{{< direct-answer >}}
Sales and Operations Planning aligns the demand plan, the supply plan and the financial plan on a rolling horizon. Most implementations underperform because the organisation runs it as a monthly meeting instead of a process: the functions arrive with different numbers, the scenarios are built by hand, and nobody can re-run one between meetings. Fixing the records comes before fixing the meeting.
{{< /direct-answer >}}

* **S&OP is a five-step monthly cycle** — gather the data, plan demand, plan supply, reconcile before the meeting, then decide in the meeting. Most companies collapse all five into one slide review.
* **The failure modes are consistent:** data split across sales, procurement and logistics; spreadsheets as the joining tissue; no agreed set of figures; and no senior owner to enforce the decision.
* **The measurable symptom:** how much of the meeting is spent agreeing what the numbers are, rather than deciding anything. That proportion is the diagnostic.

<br>

---

## What Is S&OP and How Does the 5-Step Cycle Actually Work?

{{< direct-answer >}}
S&OP is a monthly planning process that brings demand forecasts, supply capacity, inventory targets and financial plans into one agreed plan. The five steps — gather data, plan demand, plan supply, reconcile, decide — exist to surface trade-offs early, so leadership chooses between options instead of reacting to surprises.
{{< /direct-answer >}}

S&OP is not a meeting. It is a process that forces commercial ambition and operational reality into the same room. Done properly it is the most useful planning discipline in supply chain management. Done as a monthly ritual, it produces slides nobody acts on.

The five steps were codified by Oliver Wight and refined through APICS/ASCM practice. They run in order, and each depends on the one before.

**Step 1: Gather the data.** Consolidate the actuals — shipments, bookings, stock positions, open orders, supplier lead times, financial results. Most processes break here. If demand data lives in a CRM, stock in an ERP and transport in a TMS, you are reconciling three versions of events before planning starts.

**Step 2: Plan demand.** Produce an unconstrained forecast: a statistical baseline adjusted for what the commercial team knows about promotions, launches and committed customers. The output is what the business expects to sell, not what it hopes to.

**Step 3: Plan supply.** Work out whether manufacturing, suppliers, warehousing and transport can support that demand. Name the constraints and the lead-time risks. Put the alternatives on the table — overtime, a second source, more safety stock, a mode shift — with the cost of each attached.

**Step 4: Reconcile before the meeting.** This is the step most companies skip. Leaders from sales, operations, finance and procurement go through the gaps between the demand plan and the supply plan. They do not settle everything; they frame the decisions and prepare recommendations. Without it, the executive meeting becomes a data dump.

**Step 5: Decide.** Senior leadership reviews the reconciled plan, settles the escalated trade-offs, approves the plan and commits the resources. It is a decision meeting, not a review meeting. The output is one plan that finance, sales and operations all work to.

---

## Why Do So Many S&OP Implementations Underperform?

{{< direct-answer >}}
Not because the process is wrong, but because the records, the discipline or the sponsorship are missing. Gartner's S&OP maturity model describes the progression from reactive and siloed planning to integrated and externally collaborative planning; the earlier stages are where the data problems sit.
{{< /direct-answer >}}

The pattern repeats across industries and company sizes. Four causes account for most of it.

**Data split across functions.** Sales owns the pipeline in a CRM. Procurement tracks supplier commitments in spreadsheets or a sourcing tool. Logistics holds capacity in a TMS. Finance runs its own forecast somewhere that talks to none of them. When those cannot be brought together quickly, every step of the cycle starts with a reconciliation exercise, and the reconciliation eats the time meant for analysis.

**Spreadsheets as the joining tissue.** Even large companies end up moving figures between planning systems by hand. Spreadsheets cannot run a range of scenarios quickly, cannot take in a fresh signal, and leave no reliable record of which version is current. When the demand planner and the supply planner arrive with different files, the meeting stalls on arithmetic.

**No agreed set of figures.** Without one definition per figure that every function accepts, S&OP becomes an argument about whose number is right rather than what the number means. This is the structural problem underneath the other three.

**No senior owner.** S&OP needs a leader — usually the VP of Supply Chain or the COO — who owns the process, insists on attendance and holds functions to the agreed plan. Without that, functional leaders treat it as optional, send delegates who cannot decide, and go back to their own plans afterwards.

---

## What Is the Difference Between S&OP and S&OE?

{{< direct-answer >}}
S&OP runs monthly over a rolling horizon of one to two years and deals with trade-offs: capacity, sourcing, pre-positioning. S&OE — Sales and Operations Execution — runs daily or weekly inside the current period and deals with what is happening now: a demand spike, a missed delivery, a congested port.
{{< /direct-answer >}}

The distinction matters because organisations that conflate the two end up doing neither.

S&OP shapes the future. It answers questions like: can we support the demand increase sales is forecasting for Q3 with the warehouse capacity we have? Should we pre-position stock ahead of a tariff change? Do we need more contracted truckload capacity for peak?

S&OE manages the present. It answers: this item is selling well above forecast this week — do we expedite a production run or pull from safety stock? A supplier has missed a window — which customer orders take priority? Inbound containers are stuck at a congested port — reroute, or absorb the delay?

Without S&OE, a good S&OP plan decays in the first week of the month. Without S&OP, S&OE decisions are made with no view of what they cost later. Both need the same foundation: records the functions agree on, current enough to act on.

---

## What Has to Be True Before Software Helps?

{{< direct-answer >}}
The causes of S&OP failure sit in the records, not in the planning algorithm: functions arrive with different numbers for the same thing, the scenarios are built by hand so there are only ever three of them, and the demand signal in the pack is weeks old by the time the meeting reviews it.
{{< /direct-answer >}}

The technology conversation about S&OP is usually about planning suites — advanced planning systems, integrated business planning, demand sensing. But the hard problem is not the algorithm. It is the state of the data underneath it. Four things have to be true.

**The functions work from the same figures.** The prize is modest to describe and hard to achieve: the same shipment status, the same stock positions and the same supplier lead-time actuals in every function's hands, so the reconciliation meeting argues about decisions instead of about whose number is right. Worth being precise about what that has to mean — not one warehouse holding copies of everything, but one agreed definition per figure, with the source records reachable when somebody disputes it.

**A scenario can be re-run between meetings.** If building a scenario takes a planner two days, there will only ever be three of them, and they will be the three somebody thought of first. The value is in being able to ask a fourth question the morning after the meeting.

**The demand signal is current.** A monthly refresh means the plan is weeks old when it is approved. Till data, order pipeline changes and booking trends are all available more often than monthly, and using them is mostly a question of plumbing rather than prediction.

**Execution feeds back.** When the month deviates from plan — and it does — the variance should be visible against the plan it deviated from, early enough to matter to the next cycle.

---

## Conclusion

{{< direct-answer >}}
S&OP works when it runs as a process rather than a meeting, and that depends on records the functions agree on, the ability to re-run a scenario, and someone senior who owns the decision. The first diagnostic is how much of your last meeting went on agreeing the numbers.
{{< /direct-answer >}}

If your S&OP meetings end without decisions, if the planners spend more time reconciling data than weighing trade-offs, or if the executive team signs off a plan it does not quite believe — the process is not the problem. The foundation under it is.

Companies that progress up the maturity stages share one trait: they fix the records first. That means replacing hand-moved, fragmented figures with one agreed definition per figure and a way to get back to the source.

[Demand forecasting](/use-cases/demand-forecasting/) is one of the kinds of work Runink FACE does: it reads the order and sell-through history you already hold, produces a forecast at the level you ask for, and shows the records it was built from so a planner can argue with it rather than accept it. That is one input to an S&OP process, not a replacement for one — the cross-functional discipline is the part no software supplies.

The first diagnostic is free and unwelcome: at your last S&OP meeting, how much of the time went on reconciling numbers rather than deciding anything? [Get in touch](/#contact-form) if it would help to work through what that reconciliation is costing.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is S&OP (Sales and Operations Planning)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A monthly planning process that brings demand forecasts, supply capacity, inventory targets and financial plans into one agreed plan. It runs in five steps: gather the data, plan demand, plan supply, reconcile the two before the meeting, then decide. The horizon is typically one to two years, rolling."
      }
    },
    {
      "@type": "Question",
      "name": "Why do most S&OP implementations underperform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Four reasons: data split across sales, procurement, logistics and finance; spreadsheets used as the joining tissue between planning systems; no agreed definition per figure, so the meeting argues about numbers rather than decisions; and no senior owner to hold functions to the agreed plan."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between S&OP and S&OE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "S&OP runs monthly over a rolling one-to-two-year horizon and deals with trade-offs such as capacity and sourcing. S&OE, Sales and Operations Execution, runs daily or weekly inside the current period and deals with what is happening now: a demand spike, a missed delivery, a congested port. Both need the same agreed records."
      }
    },
    {
      "@type": "Question",
      "name": "What has to be true before planning software helps S&OP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Four things: every function works from the same figures, with one agreed definition each and the source records reachable; a scenario can be re-run between meetings rather than only before one; the demand signal is refreshed more often than monthly; and execution variance is visible against the plan it deviated from."
      }
    }
  ]
}
</script>

---

<section class="author-bio mt-12 p-6 bg-stone-900 rounded-2xl border border-stone-800">
  <h2 class="text-2xl font-bold text-signal mb-4">Who wrote this</h2>
  <p class="text-stone-300">
    The Runink logistics operations team. Runink builds software that reads the records a logistics operation already holds — orders, carrier invoices, returns, claim files — and drafts the action a named person then approves.
  </p>
</section>

<section class="citations mt-8 p-6 bg-stone-900/50 rounded-2xl border border-stone-800/50">
  <h2 class="text-2xl font-bold text-signal mb-4">Industry Citations &amp; References</h2>
  <ul class="list-decimal pl-6 text-stone-400 space-y-2">
    <li><a href="https://www.ascm.org/topics/s-and-op/" class="text-signal hover:underline" rel="noopener noreferrer" target="_blank">APICS / ASCM — S&amp;OP</a> - Standard definitions and competency frameworks for Sales &amp; Operations Planning.</li>
    <li><a href="https://www.oliverwight.com/" class="text-signal hover:underline" rel="noopener noreferrer" target="_blank">Oliver Wight</a> - Originators of the S&amp;OP process and its extension into Integrated Business Planning.</li>
    <li><a href="https://cscmp.org/" class="text-signal hover:underline" rel="noopener noreferrer" target="_blank">Council of Supply Chain Management Professionals (CSCMP)</a> - Industry glossary and definitions for the planning terms used above.</li>
  </ul>
</section>
