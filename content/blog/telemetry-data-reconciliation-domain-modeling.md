---
title: "Turning Noisy Fleet Telemetry into Actionable Dispatch Insights"
description: "Your systems disagree about the same day. How to tell a late feed from a real problem, and who should own the answer."
slug: telemetry-data-reconciliation-domain-modeling
author: "Runink Logistics Operations Team"
date: 2026-05-09T00:15:18Z
tags: [data telemetry, automated reconciliation, domain modeling, data observability, enterprise data, analytics automation, streaming data, anomaly detection, data governance, automated operations]
robots: index, follow
featured_image: /images/blog/telemetry-data-reconciliation-domain-modeling.png
canonical: https://runink.org/blog/telemetry-data-reconciliation-domain-modeling
---

# When Two Systems Disagree, Which One Is Wrong?

## Executive Summary: Key Takeaways
*   **The daily chore.** Someone exports two reports, lines them up in a spreadsheet, and tries to explain the gap. That person is usually your best analyst.
*   **Most gaps are not errors.** A feed arrived late. A partner sends totals once a night. Until you can tell that apart from a real fault, every gap gets the same alarm.
*   **The fix is boring.** Write down, per measure, where it comes from, how fresh it should be, and who is called when it is not. Then stop alerting on the gaps that are expected.

## Why does this cost so much time?
{{< direct-answer >}}
Two systems report different numbers for the same day, and nothing says which one to trust. So an analyst exports both and compares them by hand. The gap is often just a feed that arrived late, but nobody can prove that quickly, so the check happens again next week.
{{< /direct-answer >}}

Here is the usual week. A dispatch report says one thing. The billing system says another. Neither is obviously wrong. So an analyst pulls both into a spreadsheet and starts matching rows.

The reason it is slow is that the two systems do not send data the same way. One sends an event the second it happens. The other sends one total at midnight. A gap between them at 4pm is not an error at all. It is the shape of the feed.

The information that would settle it is usually held somewhere else. Which feed ran late, which file was short, which partner retried: that lives in a monitoring tool with its own login, owned by a different team. So the question gets answered in a chat thread and a screenshot instead.

The cost lands in three places. Finance signs off numbers it has not been able to check. Operations stops trusting the report and goes back to calling the yard. Your engineers treat every gap as an incident, including the ones that happen every night.

## What to do instead
{{< direct-answer >}}
Write down what each measure means, where it comes from, and how fresh it should be. Keep that record next to the number. Then an alert can say which feed is late rather than that two totals differ, and it can go to the person who owns that feed.
{{< /direct-answer >}}

Start with a list of what you already receive. Tracking events, gate scans, scale tickets, carrier files, fuel card records. Most operations have more of these than anyone has written down.

For each measure your business actually uses, record four things:

* **Where it comes from.** Which system, and which feed inside it.
* **How fresh it should be.** Per shift, hourly, once a night. A target, not a hope.
* **What it must agree with.** Line items add up to the invoice total. Gate-outs match loads tendered.
* **Who is called.** A named team for each feed, not "data".

That record is the thing worth building. With it, a gap can be checked automatically: did the feed arrive, was it complete, does the total add up. A gap with an expected cause gets noted. A gap without one gets a name attached and goes to that team.

Keep it where people work. A planner should be able to ask where a number came from and get the answer on the same screen, not file a request.

## What changes when you have that record
{{< direct-answer >}}
The alert stops being "the totals differ" and starts being "the carrier file for lane 7 arrived two hours late". That is a sentence someone can act on, and it names the owner. Expected gaps stop paging anyone, which is what makes the remaining alerts worth reading.
{{< /direct-answer >}}

The first change is that the search gets shorter. Instead of checking a dozen systems, you check the feeds that feed this measure, in order. Most of the time one of them explains it.

The second change is who gets called. A late carrier file is not a job for the analytics team. When the record names an owner per feed, the alert goes to them and everyone else stays out of it.

The third change is what happens after. Write the cause down next to the measure. The same gap next quarter is then a known case with a known fix, and it can be handled without a meeting.

The fourth change is that people start using the numbers again. Finance can see that the feeds behind a figure all arrived before the close. That is a different conversation from being asked to trust a total.

## Where this is the wrong project
{{< direct-answer >}}
Skip it if your data sits in systems you cannot get events out of, or if the same table is edited by three departments and nobody owns it. Fix ownership first. Also check your retention rules before you start keeping detailed records of everything, because some of that data has a legal clock on it.
{{< /direct-answer >}}

Some of this data is hard to reach. An old scheduler or a vendor system with no export will cost more to open up than the check is worth. Start with the feeds you can already read.

Storing more detail also has a bill, and sometimes a legal limit. Check your retention rules before you decide to keep every event for years.

The harder blocker is ownership. If marketing, planning and finance all write to the same table, no amount of record-keeping will tell you who should change a rule. Settle that first. Manual checks and a written runbook are a fine place to stand while you do.

## Where to start
{{< direct-answer >}}
Pick one measure that caused an argument last month. Write down its sources, how fresh each should be, and who owns it. Run the check for a month and count how many gaps had an expected cause. That count is your case for doing the next one.
{{< /direct-answer >}}

Pick the measure that caused the last argument. Write down its sources, the freshness you expect from each, and the owner. Then run the check for a month.

Count two things at the end of the month: how many gaps had an expected cause, and how long it took to explain the rest. Those two numbers tell you whether to do the next measure. They are also the only figures in this argument that are actually yours.

<!-- FAQPage schema for search engines -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why do two systems report different numbers for the same day?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Usually because they send data differently. One reports each event as it happens; the other sends one total at the end of the night. A gap between them during the day is the shape of the feed, not an error. Telling that apart from a real fault needs a record of how fresh each feed should be."
    }
  }, {
    "@type": "Question",
    "name": "What should a data check record for each measure?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Four things: where the number comes from, how fresh it should be, what it must add up to, and who is called when it does not. With those written down, an alert can name the late feed and its owner instead of reporting that two totals differ."
    }
  }, {
    "@type": "Question",
    "name": "When is this not worth doing?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When the data sits in systems you cannot export from, when retention rules limit what you may keep, or when several departments write to the same records and none of them owns the rule. Ownership is the one to settle first."
    }
  }]
}
</script>


---

<section class="author-bio mt-12 p-6 bg-stone-900 rounded-2xl border border-stone-800">
  <h2 class="text-2xl font-bold text-signal mb-4">About the Author</h2>
  <p class="text-stone-300">
    Written by the Runink team. <a href="/#contact-form" class="text-signal hover:underline">Get in touch</a> if you want to work through one measure against your own feeds.
  </p>
</section>
