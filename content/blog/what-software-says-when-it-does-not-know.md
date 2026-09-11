---
title: "How to Evaluate Supply Chain AI: Ask What It Says When It Does Not Know"
author: "Runink Logistics Operations Team"
date: 2026-09-11T09:00:00Z
# Drawn for this post rather than borrowed: assets/figures/blog/
# measured-and-unmeasured-zero.svg, rasterised with rsvg-convert. 1600x900
# because Discover is a card surface built around a large image, and 51 of
# the 52 images already in static/images/blog are square or under 1200px,
# which is why every other post falls back to the logo for og:image.
featured_image: "/images/blog/measured-and-unmeasured-zero.png"
draft: false
description: "A dashboard cannot show you the difference between a measured zero and a number nobody measured. Both render as 0. Four questions that separate software that knows from software that is guessing."
slug: what-software-says-when-it-does-not-know
categories: ["Supply Chain Strategy", "Risk Management"]
tags: ["Vaporware", "SCM", "Procurement", "Runink"]
robots: index, follow
---

## What is the fastest way to test a supply chain software claim?

{{< direct-answer >}}
Ask what the system does when it cannot answer. Every vendor can show you the case where their software knows. Almost none can show you the case where it does not, and that is the case you will meet on a bad morning. A system that reports a confident zero for a quantity nobody measured will do the same thing to you in front of a carrier, an auditor or a customs broker.
{{< /direct-answer >}}

A note on method: there are no figures in this article. We have no survey to cite, and a number invented to make the point would be the same trick the article is about.

Buyers have got better at the demo. They ask for a live test on their own data. They ask what happens at volume. Those are good questions and they are now common enough that most vendors have an answer ready.

There is a question almost nobody asks, and it is the one that separates a working system from a convincing one.

**What does it say when it does not know?**

## Why does a zero on a screen not mean zero?

{{< direct-answer >}}
Because a screen has one way to draw two different facts. A measured zero means somebody looked and found nothing. An unmeasured zero means nobody looked. Both print as 0, in the same font, in the same box, and the reader has no way to tell them apart.
{{< /direct-answer >}}

Consider a panel showing your error rate for the last hour. It says 0.

There are two worlds behind that. In one, the software read every record and found no errors. In the other, nothing was instrumented, the field was never populated, and the panel is rendering a default.

You are looking at the same character in both worlds.

This is not a hypothetical failure. It is what an empty field does by default in most systems: it becomes a zero somewhere between the database and the screen, and from that point on it is indistinguishable from a reading.

The cost is not the wrong number. The cost is the confidence. Nobody escalates a zero.

## What are the four answers that look like knowledge but are not?

{{< direct-answer >}}
A zero that was never measured. A green tick for a connection nobody dialled. A success for work that did not run. And a pass for a check that could not run at all. Each one looks like a result and each one is the absence of a result wearing a result's clothes.
{{< /direct-answer >}}

They are worth naming separately, because they fail in different places and the remedy is different in each.

### The zero nobody measured

Covered above. The tell is that the field is never blank and never in doubt. Software that can say "not measured" has had to be built to say it; software that always shows a number has not.

### The connection that was never tested

A settings page shows a green tick beside an integration. Ask what the tick means. Often it means the record was saved, not that anything was contacted.

There is a real difference between "we saved your credentials", "we reached the host", "we authenticated", "we read a row", and "we cannot test this kind of source". A green tick collapses five answers into one, and four of them are not the one you assumed.

### The action that reported success

An automated step comes back green. Ask what green covers.

If a job was supposed to send a notice, update a record and write to a ledger, and only the first happened, a single success flag has hidden two failures. What you want back is not a boolean. It is a list of the steps that did not happen, each one named.

### The check that could not run

This is the most expensive of the four, because it happens inside compliance and audit work where the answer gets filed.

If a control cannot be evaluated — the data was unreadable, the source was empty, the export never arrived — there are three honest answers, not two. Pass. Fail. And *could not be assessed.* Software that only has two will quietly file the third as one of the first two, and an unassessable control that reports as a pass is worse than no report at all. You now have a document saying you checked.

## Why does this matter more with AI than it did with reporting?

{{< direct-answer >}}
Because a language model always produces an answer. A spreadsheet leaves a cell blank when it has nothing. A model fills it with a fluent sentence in the same tone as the sentences that were correct. Absence of knowledge does not look like absence, so the reader has lost the cue they were relying on.
{{< /direct-answer >}}

For thirty years the tell for missing data was visual. A gap. A dash. A cell you had to click into.

That cue is gone. Ask a model about a shipment it has no record of and you get a paragraph, in the house style, at the same confidence as the paragraph about the shipment it does have a record of.

This is why the question has moved from a nice-to-have to the first thing to ask. The failure mode is no longer silence. It is fluency.

And in claims, customs and freight audit the difference is not academic. A gap can be filled before you file. An invented figure gets the whole submission challenged, and the challenge lands on the parts that were true as well.

## What should I ask a vendor, in the room?

{{< direct-answer >}}
Ask for the empty case, not the full one. Show me a field the system did not measure. Disconnect a source and run it in front of me. Show me a compliance check that could not run. And show me what the system returns when half an action completed. Four requests, all answerable in a demo, and none of them flattering to answer badly.
{{< /direct-answer >}}

These work because they cannot be prepared for with a slide.

**Show me a field this build does not measure, and show me the screen.** You are looking for a sentence where a number would be. If every field always has a value, ask how they know the meter is running.

**Disconnect one source and run it again.** Not a story about what would happen. Do it. A system that is honest about absence behaves differently with a source missing; a system that is not looks exactly the same, which is the problem.

**Show me a control that could not be assessed.** Ask to read the words it files. If those words do not make clear that this is not a finding of compliance, the report is worse than nothing, because somebody will later treat it as evidence.

**Show me a partially completed action.** Approve something that cannot fully execute. Ask what comes back. You want the step named. "Failed" is not enough; it tells you to retry without telling you whether retrying is safe.

## Is this not just asking for error handling?

{{< direct-answer >}}
No. Error handling is what a system does when something goes wrong. This is what a system does when nothing goes wrong and it simply does not have the answer. Those are different code paths, and the second one is the one that gets skipped, because nothing is visibly broken when it is missing.
{{< /direct-answer >}}

An error is loud. Somebody notices, files a ticket, and it gets fixed.

An unmeasured value is quiet. It renders. The page loads. Nobody is paged. It fails the first time somebody makes a decision on it, which may be months later and in a meeting where the software is not present to be questioned.

That is why it survives procurement. Nothing in a normal evaluation touches it.

## How does this change what we buy?

{{< direct-answer >}}
It moves one question to the front of the list. Not "what can it do" but "what does it do when it cannot". The first question is answered by every vendor in the market. The second is answered by very few, and the answer is hard to fake in a live session.
{{< /direct-answer >}}

None of this requires you to become technical. Every one of the four requests above is something you can watch happen on a screen and judge with your own eyes.

And it reframes the conversation in a way that is useful to you even if you buy nothing. You will learn more about a vendor from five minutes of the empty case than from an hour of the happy path, because the happy path is the part they have rehearsed.

The software we build is designed around this idea, and we would rather be asked these four questions than not. But the questions are not ours and they work on anybody.

## Frequently asked questions

### Is a blank field better than a zero?

Only if the blank is deliberate and explained. A blank that means "not measured" is honest; a blank that means the page failed to load is a different problem wearing the same clothes. What you want is a short sentence in place of the number, saying which it is.

### Our vendor says this is an edge case. Is it?

The empty case is not an edge case in logistics. Sources go down, exports arrive late, a field the integration expects is not populated by the team that owns it. The question is whether the software treats that as an ordinary Tuesday or as an exception it was not designed for.

### Can we test this after we have bought?

You can, and it is worth doing either way. But it is far cheaper before, because after the purchase the finding becomes a change request rather than a reason not to sign.
