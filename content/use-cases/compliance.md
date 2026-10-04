---
title: "Customer Data Privacy and Audit Records"
description: "Operating a system quietly writes personal data into its own logs. How FACE keeps it out, keeps a record of its own working, and hands the evidence to the person accountable."
layout: "use_case"
badge: "Compliance Auditor"
badgeColor: "#10b981"
product: "Runink FACE"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Compliance and audit records</p>
<p class="text-base text-stone-500 font-medium mb-10">This is a scenario for <strong class="text-stone-300">Runink FACE</strong>. The checks described here read FACE's own records of your shipments and reports, and they are part of FACE itself.</p>

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Personal details do not reach the logs.</strong> Email addresses, phone numbers, card numbers, national insurance numbers and IP addresses are stripped out of log and diagnostic output before it is written, so the trail a system leaves behind does not become a second copy of the data.</li>
<li><strong class="text-stone-200">It is built into the platform, not a report you run.</strong> The stripping happens on the logging path underneath every service, at every place a service writes a line.</li>
<li><strong class="text-stone-200">Every check keeps its own working.</strong> What was read, the rule it was read against, what was found and who looked at it are kept on the record, and a check that could not run is written down as exactly that.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="a-trail-nobody-has-time-to-check" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">A Trail Nobody Has Time To Check.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Personal details travel with every record, and every system that handles a record leaves a trail behind it. Answering for that trail means joining systems by hand.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A customer's name and address are needed to deliver the parcel. They are not needed on a carrier's dashboard, in a report sent to a partner, or in the copy of the file somebody pulled for a meeting. But the field travels with the record, and it keeps going.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Nobody plans this. It happens because the shortest way to answer a question is to export what you have, and what you have has the personal details still in it.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                You cannot protect what you cannot see leaving.
            </p>
        </div>
        <div>
            <h2 id="who-this-is-for" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Who This Is For</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Three desks, and the same question underneath: can you show your working.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">The data protection officer, and compliance and risk.</strong> What lands today is a customer's name and address that were needed once to deliver a parcel and have been travelling with the record ever since &mdash; into an export, a partner report, a log file nobody reads until something has gone wrong. What changes is where the trail stops. Personal details are stripped out of log and diagnostic output before it is written, on the path underneath every service rather than in a report somebody remembers to run.</li>
                <li><strong class="text-stone-200">IT and information security.</strong> What lands today is a question you can answer only by counting: which of your services write application logs, and which of those put the output through any redaction at all before it is stored or shipped. What changes is that the answer is a property of how the software is built, described in ordinary sentences you can hold a code review against, so the security conversation is a description rather than a negotiation.</li>
                <li><strong class="text-stone-200">Internal audit, and whoever answers for the report.</strong> What lands today is a request to explain why a figure is what it is, months after the person who assembled it moved on. What changes is that the record keeps its own working, and that a check which could not run is written down as its own entry rather than passing quietly as a clean result.</li>
            </ul>
        </div>
        <div>
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Every service writes its logs and diagnostics through a shared redaction step that strips email addresses, phone numbers, card numbers, national insurance numbers, IP and hardware addresses out of the text before it lands, along with named fields — passwords, tokens, secrets, licence keys, webhook URLs — wherever they appear in a structured payload. The point is that operating a system does not quietly create a second copy of the personal data inside it — the place breaches are found late, and the place nobody thinks to look.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Every check keeps a record of its own working. When an auditor asks why a finding is what it is, or when a regulator asks who saw a customer's address, the answer comes from the record instead of from the memory of whoever built the spreadsheet.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                The record also keeps apart the two answers people usually run together. &ldquo;We checked this and found nothing&rdquo; and &ldquo;we could not read this, so it was never checked&rdquo; are written down as different things. The second one is the finding an audit is actually looking for, and it is the one a green tick normally swallows.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-will-know-it-worked" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Will Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. Write down where you stand today, because the baseline is gone for good the moment things improve.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Where personal details actually sit.</strong> Take a sample of the reports and screens your partners and carriers see. Count how many carry a name, a phone number or an address. Most teams have never counted this.</li>
                <li><strong class="text-stone-200">How much of your own log estate is redacted at all.</strong> Count the services that write application logs, then count the ones whose output goes through any redaction step before it is stored or shipped to a log provider. This is the baseline the privacy half of this page speaks to, and it is the one most teams can answer in an afternoon and would rather not.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring a sample of partner-facing screens and the list of services that write logs.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="text-base text-stone-500 font-medium mb-4">
            The exposures above are drawn to show the shape of the work. They are not accounts of a customer engagement, and nothing on this page is a measured result.
        </p>
        <p class="text-base text-stone-500 font-medium">
            The software finds the record, shows the rule it was read against, and hands both to the person who is accountable. Whether you meet an obligation is a judgement that stays with your compliance officer, your DPO and your auditor.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< faq >}}
{
  "title": "Questions A Compliance Officer Asks First",
  "description": "What the privacy side does, what the record keeps, and who decides.",
  "questions": [
    {
      "question": "What keeps personal details out of our logs?",
      "answer": "One redaction step, sitting on the logging path underneath every service rather than in a tool somebody runs afterwards. Every service writes its logs and diagnostics through it, and it strips email addresses, phone numbers, card numbers, national insurance numbers, and network and hardware addresses out of the text before it lands. Named fields go too — passwords, tokens, secrets, licence keys, webhook URLs — wherever they appear in a structured payload.<br><br>The ordering inside it is deliberate: card numbers are matched before phone numbers, so a phone pattern cannot swallow a card."
    },
    {
      "question": "What happens when a check could not run?",
      "answer": "It is written down as its own entry: compliance was not assessed, in those words, kept deliberately apart from an assessment that ran and found nothing. A quantity nobody measured is held as unmeasured with a reason rather than rounded to zero.<br><br>Collapsing those into one green tick is how &ldquo;we checked this and found nothing&rdquo; and &ldquo;we could not read this, so it was never checked&rdquo; come to look identical in a report. The second is the finding an audit is actually looking for, and it is the one that usually gets swallowed."
    },
    {
      "question": "A regulator asks who saw a customer's address. Who answers?",
      "answer": "You do, from the record rather than from memory. Every check on this page keeps its own working — what was read, what rule it was read against, what was found, who looked at it and when — so the answer to a supervisory question is retrieval rather than a reconstruction project across four systems.<br><br>The person accountable is still yours. What changes is how long it takes them to be able to answer, and whether the answer rests on documents or on somebody's recollection of a Tuesday."
    },
    {
      "question": "Who decides whether we meet an obligation?",
      "answer": "Your own people. Compliance is a judgement, and it stays with the people who hold it. What the software does is find the record, show the rule it was read against, and hand both to the person who is accountable — your compliance officer, your data protection officer, your auditor. Whether the obligation is met is theirs to decide."
    }
  ]
}
{{< /faq >}}

{{< section-container class="py-12" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Book a consultation
        </a>
    </div>
</div>
{{< /section-container >}}
