---
title: "Overcoming Data Silos for Complete Global Freight Visibility"
description: "Every carrier sends data its own way. How to get one view of a shipment, and keep the records behind each number."
slug: automated-semantic-layer-data-observability
author: "Runink Logistics Operations Team"
date: 2026-02-21T13:16:42Z
tags: [data observability, semantic layer, telemetry, data governance, analytics engineering, data quality, lineage, knowledge graph, advanced analytics, Runink FACE]
robots: index, follow
featured_image: /images/blog/automated-semantic-layer-data-observability.png
canonical: https://runink.org/blog/automated-semantic-layer-data-observability
---

## What are the Key Takeaways from this Executive Summary?
{{< direct-answer >}}
Every carrier, terminal and warehouse sends data its own way. A shared view means giving those events one shape and one set of names, so a delay in one system can be read against a commitment in another. The part that decides whether anyone trusts it: each number keeps the records it came from.
{{< /direct-answer >}}

*   Your systems already send the events. The gap is agreeing what they mean.
*   One set of names per measure is what lets two systems be compared at all.
*   A number you cannot trace back to records is a scoreboard, not a fact.

---

## What does "one shared view" actually mean?

{{< direct-answer >}}
It means one agreed name and definition for each thing you measure, fed by the events your systems already send. Dwell time means the same thing in the yard report and the board pack. When the definition is kept up to date from the events themselves, it does not drift away from how the work is really done.
{{< /direct-answer >}}

Take one word: dwell. The yard calls it the time between arrival and departure. The terminal counts from discharge. Finance counts the days it was billed for. All three are defensible. None of them match.

A shared view is the decision about which one you mean, written down once, and applied wherever the number appears. It is less exciting than it sounds, and it is the step most reports skip.

---

### 🧩 Visualizing the Concept

Events arrive. You give them one shape. You attach the business meaning. You keep the link back to the source. Then a number can be questioned and answered.

That last part is what turns an alert into something a person can act on. "Dwell is up" starts an argument. "These eleven containers at this terminal drove it" starts work.

---

## Why start from the events rather than a glossary?

{{< direct-answer >}}
A glossary is written once and then ages. The events keep coming. If your definitions are fed by the events your systems already send, they stay close to how the work is done, and they cover every facility instead of the ones someone had time to document.
{{< /direct-answer >}}

Your systems already describe what happened. Gate scans, status messages, scale tickets, appointment changes. Collecting it was never the hard part. Agreeing what it means is.

Starting from events gives you three things a document cannot:

* **It stays current.** Names and definitions update as the events arrive.
* **It covers everything.** Every site and partner that sends data is included, not just the ones someone wrote up.
* **It is not anyone's opinion.** A gate scan is a gate scan, whoever is reporting the month.

---

## Why the definitions matter more than the dashboard

{{< direct-answer >}}
Definitions decide what counts as good, who owns a number, and whether a question about it can be answered. Without them you get metrics with no story: the chart moved, nobody can say why, and the meeting becomes a search for the right spreadsheet.
{{< /direct-answer >}}

### 1. **They say what good looks like**

A raw figure is not a standard. Eight hours of dwell is fine at one site and a failure at another. The definition is where you write down which it is, and against whose commitment.

### 2. **They keep each area's rules local**

Finance, claims and operations do not need the same rules. They do need the same names. Keep one set of names, and let each area set its own thresholds on top.

### 3. **They make the "why" findable**

When a figure moves, the useful question is which records moved it. If each number keeps its links back to the events behind it, that question has an answer in minutes.

### 4. **They keep a forecast honest**

A model's output is only as good as what fed it. If each forecast carries the data it used and the rule it was run under, a reviewer can check it. If it does not, they can only agree with it.

---

## What does it take to put this together?

{{< direct-answer >}}
Five plain steps: collect the events, give them one shape, attach the business names, keep the links back to the source, and act on rules rather than hunches. Most operations already do the first and skip the fourth, which is the one that decides whether anyone trusts the result.
{{< /direct-answer >}}

### 1. **Collect**

Take in what your systems send: carrier messages, warehouse records, contract terms, sensor readings.

### 2. **Standardise**

Give every event the same shape, with the same identifiers: shipment, site, carrier, time.

### 3. **Name**

Attach the business meaning. This event is a gate-out. This field is the free time clock.

### 4. **Keep the links**

Hold the link from every figure back to the records it came from. This is the step that gets dropped.

### 5. **Act**

Write the rules in business terms, and route what breaks them to the person who owns it.

---

### 🔧 Example Architecture

Signal, then structure, then meaning, then action. Each step only makes sense if the one before it held.

---

## What this looks like by industry

{{< direct-answer >}}
The pattern is the same in every industry; the records differ. Retail reads till data against promotions. Financial services reads each transaction against the rule it was booked under. Freight reads tracking events against the commitment that was made to the customer.
{{< /direct-answer >}}

### 🏬 Retail

Till data, price changes and promotion calendars in one set of names. The value is seeing which stores moved a figure, not that it moved.

### 💰 Financial Services

Every transaction and check carries the rule it was booked under. When a regulator asks, the answer is the records, not a description of the process.

### 🚚 Supply Chain and Logistics

Tracking events, yard scans and contract terms in one place. A late arrival can then be read against the delivery window you actually promised.

---

## What do you get out of it?

{{< direct-answer >}}
One vocabulary across teams, rules that run before a human looks, thresholds that can be set per site instead of globally, and a trail from every figure back to its records. The last one is what makes the first three worth anything.
{{< /direct-answer >}}

### 1. **One vocabulary**

Freshness means the same thing to finance and to the yard. Arguments about the number stop being arguments about the definition.

### 2. **Rules that run first**

Retention, personal data and service terms can be checked as records arrive, not at review time.

### 3. **Thresholds that fit the site**

A fixed threshold for every facility is wrong nearly everywhere. Set them where the work happens.

### 4. **A trail you can follow**

When leadership asks where a number came from, the answer is a list of records.

---

## How far along is your own reporting?

{{< direct-answer >}}
Four stages, and most operations sit at the second. Alerts on fixed thresholds; alerts with context; rules read against records as they arrive; and forecasts of what is about to break. The jump worth planning for is from context to records, because that is the one that changes what a person can do with an alert.
{{< /direct-answer >}}

| Stage | What it does | What an alert sounds like |
| --- | --- | --- |
| **1 – Reactive** | Fixed thresholds on a chart | "The load failed." |
| **2 – With context** | Links the alert to owner and source | "The finance feed is late; the vendor API is down." |
| **3 – Read against records** | Checks each record against its rule | "These eleven containers breached free time." |
| **4 – Forecast** | Flags what is likely to break next | "This lane will miss its window on Thursday." |

Stage three is where an alert stops being news and starts being work. That is the jump worth planning.

---

## What has to hold at once

{{< direct-answer >}}
Two things: the definitions have to be fed by the events rather than maintained by hand, and every figure has to be traceable back to the records behind it. Either one on its own gives you a layer nobody trusts or a layer nobody maintains.
{{< /direct-answer >}}

The aim is that any figure can be questioned and the answer is records, not a definition. That is what makes a measure arguable in a room full of people who own different parts of it.

Runink FACE takes the narrow version of this seriously rather than the broad one. When it raises a finding, the finding arrives with the rule it breached and the records behind it attached. The person deciding reads the evidence instead of trusting a score. That is a different goal from watching everything.

---

## Final thoughts

{{< direct-answer >}}
The work is not collecting more data. It is agreeing what the data means and keeping the trail back to it. Start with the one measure your teams argue about most, and write down its definition, its sources and its owner.
{{< /direct-answer >}}

Nobody in logistics is short of data. What is short is agreement about what it means.

So pick the measure your last meeting argued about. Write down what it means, which events feed it, and who owns it. Then check whether the number on the slide can be traced back to records. That check is the whole test, and you can run it this week.

---

*For what Runink FACE does with the records it reads, and where it stops: [Runink FACE →](/products/face/)*


