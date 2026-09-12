---
title: "Freight Claims and Port Charges"
description: "Claims expire because assembling one takes a morning. The entry, the hold, the missing documents, the days held and the per-day charge arrive already gathered and joined, so a person only has to judge whether the case holds."
layout: "use_case"
badge: "Claims Agent"
badgeColor: "#7c3aed"
product: "Runink FACE"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Freight claims</p>
<p class="text-base text-stone-500 font-medium mb-10">This is a scenario for <strong class="text-stone-300">Runink FACE</strong> &mdash; the Fulfilment Autonomous Claims Engine. Claims are not a side feature here. They are the C in the product's name.</p>

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">The paperwork is gathered for you, and only the parts that are really there.</strong> The entry, the port, the reason it is held, the documents that are missing, the days it has been held and the per-day charge arrive in one place, joined to the shipment they belong to. Not the rate that applied on the date: FACE holds no rate card, no tariff table and no accessorial schedule, so it cannot tell you what the rate was and will not pretend to.</li>
<li><strong class="text-stone-200">Quantities are checked three ways.</strong> The purchase order, the invoice and the bill of lading are compared against each other, and where they disagree the finding names the pair and the size of the gap &mdash; bill of lading against order, bill of lading against invoice. That is a discrepancy check on what the documents say, not a reconciliation against a scale or a rate: there is no weighbridge feed here either.</li>
<li><strong class="text-stone-200">The letter is drafted, not sent.</strong> A named person reads the case, edits or rejects it, and that sign-off is kept on the record. Nothing goes to the carrier before it.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="claims-that-expire-quietly" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Claims That Expire Quietly.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Most claims are not lost arguments. They are claims nobody had the morning to assemble, filed too late or never filed at all.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                One claim means finding the carrier's receipt, the quantity the terminal recorded, the rate that applied on the date, and the deadline the carrier works to. Then it means writing the letter. That is a morning's work, so only the largest claims get one.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The same is true at the port. An entry is held for a missing paper, and a daily charge starts running. The notice arrives with everything else from overnight, and by the time someone joins the hold to the invoice, the charge has been running for days.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                None of this is about judgement. It is a gathering problem.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                All of the evidence already exists in your systems. It sits in four of them, in four formats, and joining it up is the part nobody has time for.
            </p>
        </div>
        <div>
            <h2 id="who-this-is-for" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Who This Is For</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                One gathering problem, arriving at three desks in three different forms.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Claims operations.</strong> What lands today is a carrier record, a filing deadline and a morning of hunting for the rest, which is why only the largest events get a claim written at all. What changes is the start of the day. The queue is the cases your own records support, ranked, each one carrying the shipment, the documents and the quantity gap, with the letter already drafted for a reader to judge.</li>
                <li><strong class="text-stone-200">Trade compliance.</strong> What lands today is a hold notice in the overnight pile, and the daily charge has been running for days by the time somebody joins the hold to the invoice. What changes is the timing and the completeness. The entry, the reason the terminal gave and the papers missing from the file arrive together, on the day the hold is recorded.</li>
                <li><strong class="text-stone-200">Chief financial officer.</strong> What lands today is a demurrage line in the payables that nobody can trace back to a decision. What changes is what the figure means. The charge that was avoidable is shown apart from the duty that was owed whichever day the box moved, and each claim that goes out carries the name of the person who approved it.</li>
            </ul>
        </div>
        <div>
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Checks run against your own records, and the queue in the morning is what those records actually say, ranked, with the records attached — not a dashboard for you to go looking through. The corollary is worth stating because most products hide it: connect nothing and the queue is empty. It does not open on worked examples that read like your lanes. That was how it behaved once, and it was taken out.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                On the port side the arithmetic is the honest kind. The days the box has been held, multiplied by the per-day charge on the entry, and nothing else — the duty is deliberately left out of that figure, because the duty is owed whether the box moves today or in a week, and adding it would inflate the exposure by the value of a bill nobody avoided. What you are shown is the charge that was avoidable, which is a smaller and more useful number than the one most tools print.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A claim arrives already put together: the entry, the hold and its stated reason, the documents missing from the file, the quantity discrepancy if there is one, and a drafted letter. Your reviewer is left with one question, which is the only one worth their time — does this case hold?
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Approving is what sends it. And where a step behind the approval has no implementation yet — the write back into your system of record is the real example — the response names that step as not executed instead of reporting the whole action as done, so nobody finds out in three weeks that the filing never left. Later, why a claim was filed is answered from the record rather than from memory.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-will-know-it-worked" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Will Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. Write down where you stand today, because the baseline is gone for good the moment things improve.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">How many eligible claims you actually file.</strong> Take a quarter of the carrier records of what went wrong. Count the events you could have claimed for. Then count how many you filed, and whether each one was still inside the carrier's time limit.</li>
                <li><strong class="text-stone-200">Days from event to filing.</strong> The same records, measured as a gap rather than a total.</li>
                <li><strong class="text-stone-200">Demurrage and detention days.</strong> These are the daily charges for holding a container longer than the free time allowed. From terminal and carrier invoices, a full quarter by port, splitting the days caused by paperwork from the days caused by queues at the port.</li>
                <li><strong class="text-stone-200">Days from event to somebody noticing.</strong> When each hold was recorded, against when a person first acted on it. Few teams have ever counted this gap. The rest depend on it.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring one lane or one carrier and a quarter of invoices.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="text-base text-stone-500 font-medium">
            The claim and the port hold above are drawn to show the shape of the work. They are not accounts of a customer engagement. We publish no recovery rates, no amounts recovered and no customer names, because we have not measured them on your records or anyone else's &mdash; and a recovery rate from somebody else's lanes would tell you nothing about yours anyway.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< faq >}}
{
  "title": "Questions A Claims Team Asks First",
  "description": "What it reads, who signs, and what the file shows a year later.",
  "questions": [
    {
      "question": "What does it need from our claim files to do this?",
      "answer": "The records you already hold, read where they already sit. For a freight claim that means the carrier's record of what went wrong, and the purchase order, the invoice and the bill of lading for the same shipment. For a port charge it means the entry, the hold notice and the reason the terminal gave, the documents missing from the file, and the per-day charge written on the entry itself.<br><br>Nothing is retyped and nothing has to be loaded into a new system of record. The consequence is worth saying plainly, because most products hide it: connect nothing and the morning queue is empty, because the queue is made of what your own records say and of nothing else."
    },
    {
      "question": "Who signs off a claim it drafts?",
      "answer": "A named person on your team. The case arrives assembled — the entry, the hold, the documents missing from the file, the quantity gap if there is one — with the letter already written, and then it waits. Someone reads it, edits it, or rejects it. Approving is what sends it to the carrier.<br><br>That sign-off is kept on the record beside what was decided, and a rejection is recorded as carefully as an approval. The name on the claim is the name of the person who read it."
    },
    {
      "question": "What happens when it is wrong, or cannot tell?",
      "answer": "You find out before the carrier does, because what it produces reaches your reviewer rather than your counterparty. Every finding carries the records it was built from — which two documents disagree and by how much, the hold and the reason the terminal stated — so the reviewer judges the case against the evidence instead of taking a conclusion on trust. Rejecting a case is an ordinary outcome with an ordinary record.<br><br>Where it cannot tell, it says so rather than filling the space. A figure it cannot source from your own records is not printed as an estimate, and where a step behind an approval has not been carried out, the reply names that step as not executed rather than reporting the whole action as done. Nobody finds out three weeks later that the filing never left."
    },
    {
      "question": "How is the port exposure figure worked out?",
      "answer": "Days held, multiplied by the per-day charge on the entry, and nothing else. The duty is deliberately left out of it. The duty is owed whether the box moves today or next week, so folding it in would inflate the exposure by the value of a bill nobody avoided.<br><br>What you are shown is the charge that was avoidable. It is a smaller figure than the one most tools print, and it is the one worth taking to a carrier."
    },
    {
      "question": "What does an auditor see afterwards?",
      "answer": "The entry and the hold with the reason the terminal gave, the documents that were missing from the file, the difference between the order, the invoice and the bill of lading, the letter as it was drafted, and the person who approved or rejected it and when.<br><br>So the question a year later — why was this claim filed, and on what reading — is answered out of the record rather than out of somebody's memory of a bad week."
    },
    {
      "question": "What if our files cannot leave the building?",
      "answer": "Then they do not. The reasoning runs on machines you control, and the model it reasons with is one you run yourself rather than a service somebody else operates. Your shipping records, invoices and correspondence are read where they already live, and the reading happens on your side of the boundary.<br><br>This is how the software is built rather than a setting to switch on, so it is a property your own security review can examine. Ask us to walk the boundary with you rather than taking a sentence on a web page for it."
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
