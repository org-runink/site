---
title: "The Analyze Phase: Eradicating Root Causes with Operations Actionable Twins"
description: "How continuous improvement teams find the real cause of a logistics defect: one connected view of the network, a check that makes feed changes visible, and a way to test a fix first."
author: "Runink Logistics Operations Team"
date: 2026-03-24T09:29:31Z
draft: false
featured_image: "/images/blog/six-sigma-analyze-phase-data-posture-actionable-twins-header.png"
canonical: https://runink.org/blog/six-sigma-analyze-phase-data-posture-actionable-twins
slug: "six-sigma-analyze-phase-data-posture-actionable-twins"
categories: ["Continuous Improvement", "Supply Chain Analytics"]
tags: ["Six Sigma", "Root Cause Analysis", "Operations Actionable Twins", "Runink"]
robots: index, follow
---

## What are the Key Takeaways from this Executive Summary?
{{< direct-answer >}}
The Measure phase tells you how often you fail. The Analyze phase asks why. In a freight network the answer usually sits across systems, so the work is to connect them, to make sure a changed data feed cannot corrupt the answer quietly, and to test a fix before it reaches live operations.
{{< /direct-answer >}}

* **Find the cause, not the symptom.** A missed delivery window is the symptom. The cause is usually one step upstream, in another system.
* **One view beats four reports.** A yard report alone will blame the yard. Put the transport record next to it and the picture changes.
* **A changed feed can ruin an analysis silently.** Catching that is a precondition for the Analyze phase, not a refinement of it.

<br>

---

## How Does the Six Sigma Analyze Phase Expose Logistics Root Causes?

{{< direct-answer >}}
By working back from a defect to the variable that drives it. Instead of reporting that on-time delivery fell, you identify which lane, which carrier, which facility and which step in the handoff produced the misses.
{{< /direct-answer >}}

The Measure phase gives you the baseline: on-time in-full, dwell times, exception counts. The Analyze phase answers one question. Why are we missing the target?

In a freight network that answer is rarely where the number is. On-time delivery falls. The cause might be a cross-dock schedule that does not line up, a carrier short of capacity on one lane, or a terminal that holds boxes for days and bills you for the privilege.

So the Analyze phase means moving off the summary. Look at the inputs — which carrier, which lane, which shift, which facility — and find which of them actually moves the outcome. That needs records from the whole path, not from one system.

---

## Why Do Traditional Root Cause Analyses Fail in Complex Supply Chains?

{{< direct-answer >}}
Because each system holds one part of the story. A yard report explains the yard. It cannot show that inbound trucks arrive late because of a consolidation delay two steps upstream. Analysis built on one system tends to blame that system.
{{< /direct-answer >}}

The usual problem is split records. Transport lives in one system, the warehouse in another, the yard in a third. When they do not line up, the analysis inherits the gap.

Take dwell time at a distribution centre. Read only the yard system and the conclusion is that the yard crew is slow. Put the transport record beside it and you see inbound trucks arriving off-schedule because of a delay upstream. Act on the first reading and you hire yard staff. The right fix was to change the inbound appointment windows.

The second problem is timing. Most analysis looks at a state that no longer exists. By the time the report is ready, the capacity, the lanes and the demand have all moved. You need the records as they are now, and you need the dependencies between them.

---

## How Can Intent-Graph Optimization (IGO) Reveal Hidden Process Constraints?

{{< direct-answer >}}
Intent-graph optimisation means holding the network as a set of connected things rather than rows in a table: containers, trucks, items, sites, and the handoffs between them. You also hold what was supposed to happen. Comparing the two shows where a delay in one place causes a charge in another.
{{< /direct-answer >}}

Strip the term back and it is simple. Model the network as things and the links between them, and keep the plan next to the actual.

Every container, truck and item is a thing. Each handoff is a link. The plan says when each handoff should happen. The records say when it did. The gap between them is where your defects live.

Take demurrage and detention — the daily charges a terminal or carrier levies once free time runs out. Read the charge on its own and it looks like terminal congestion. Follow the links back and it may be a shortage of chassis that never lines up with customs release. Same charge, different fix.

That is the point of connecting the records: the fix lands where the cause is. To see where this applies, review our [industry use cases](/use-cases/).

---

## What Role Does a Data Posture Control Play in Preventing Schema Drift?

{{< direct-answer >}}
A data posture control checks that each incoming feed still has the shape your analysis expects, and holds back records that do not. The requirement that matters is that the hold is visible. A control that drops bad records quietly gives you a clean-looking report with a hole in it.
{{< /direct-answer >}}

Your analysis depends on feeds from hundreds of other companies: carriers, forwarders, brokers, telematics providers. They change things without telling you.

That is schema drift. A carrier changes the code it sends for "arrived at terminal". A telematics feed changes its timestamp format. Nothing breaks loudly. The records just stop meaning what your analysis thinks they mean, and your exception count drops for the wrong reason.

The control is worth specifying carefully, because it is easy to specify badly. Check the shape of every incoming feed against what the analysis expects. Hold back records that do not match. And make the hold visible. A control that discards bad records quietly is worse than an error, because nobody questions a report that looks clean.

Here is the test to apply to any product that claims this. An EDI feed changes its status codes overnight. Does Monday's report say "this feed is held back", or does it simply show fewer exceptions?

---

## How Do Operations Actionable Twins Drive Defect Eradication?

{{< direct-answer >}}
An operations twin is a working copy of the network you can change before changing the real thing. You test the fix in the copy, see what it does elsewhere, then apply it. The value is in the order: test, then act.
{{< /direct-answer >}}

Finding the cause is not the end of the Analyze phase. You still have to know whether your fix works.

Most digital twins are dashboards. A copy you can act on is different: you change the routing rule, the appointment windows or the carrier allocation in the copy first, and see what it does to the rest of the network.

That second part matters more than it sounds. Fixes in a freight network move the problem. Pull trucks forward and the yard backs up. Testing in a copy is how you find that out before the shift does.

Once the change holds up, apply it to the live systems. The same copy then tells you whether the defect actually went away, which is the question the next phase asks.

---

## Conclusion

{{< direct-answer >}}
Three things make the Analyze phase work on a real network: a check that makes a changed feed visible, a connected view that can trace a charge back to its cause, and a way to test a fix before it reaches live operations. Specify all three by behaviour before you compare anyone's product names against them.
{{< /direct-answer >}}

The Analyze phase is where a continuous improvement programme either earns its keep or produces slides. The difference is whether the team can move from the summary to the records behind it.

Three capabilities do that work. A check that makes a changed feed visible rather than silent. A connected view that can trace a charge back through the handoffs. A way to test a fix before it reaches live operations.

Write all three down as behaviours first. Then compare products against them. [Contact our team](/#contact-form) if it would help to work through which of the three your programme is missing.

---

---

## Sources

- [American Society for Quality (ASQ)](https://www.asq.org/quality-resources/six-sigma) — the Six Sigma Analyze phase and its methods
- [Council of Supply Chain Management Professionals (CSCMP)](https://cscmp.org/) — practice guidance on digital twins and control towers
