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
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
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

    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Book a consultation
        </a>
    </div>
</div>
{{< /section-container >}}
