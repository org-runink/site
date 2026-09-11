---
title: "The Picture Nobody Has Time to Assemble"
description: "The facts are in four systems in four formats, and joining them takes a morning nobody has. So the picture that would let somebody act only ever gets assembled after the fact, for the meeting that reviews it."
layout: "use_case"
product: "Runink FACE"
badge: "Domain Graph"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-8">
<li><strong class="text-stone-200">Your records are sorted by what they are, not by where they came from.</strong> Two tables about shipments both belong to logistics whether one arrived from your warehouse system and the other as a spreadsheet somebody emails on Fridays.</li>
<li><strong class="text-stone-200">The map is derived, not guessed.</strong> The domains and the joins between them are worked out from the structure of your own files by fixed rules — no model, no web search, nothing leaving the building for that step. The same files always produce the same map.</li>
<li><strong class="text-stone-200">A domain it could not assess is marked as not assessed.</strong> Not as a pass. The words are explicit: this is not a finding that the area is fine. And with no data connected, it says there is nothing to map yet rather than drawing an empty diagram.</li>
</ul>

<p class="mb-12">
    <span class="block mt-3 text-sm text-stone-500 font-medium">
        This describes the mechanism and a plausible week around it. It is not an account of something that happened: it has not been run against a customer's systems, nothing on this page is measured, and no figure is offered for what it finds or how long it takes.
    </span>
</p>

    <div class="text-center mb-16">
        <h2 id="four-systems-one-morning-you-do-not-have" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Four Systems. One Morning You Do Not Have.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Nothing is missing. Every fact you need was recorded, correctly, by somebody doing their job. It is the joining that never happens in time.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                To answer one ordinary question — why did that customer get a short delivery twice in a month — somebody opens the order system, then the warehouse system, then the carrier's portal, then a spreadsheet that one person maintains. Four logins, four ways of naming the same site, four ideas of what a week is.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                It can be done. It takes a morning, and it is done by the one analyst who knows which column in which export means what. So it gets done for the monthly review, and it gets done when something has already gone badly enough to warrant a morning.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                The picture is always assembled after the point where it would have been useful.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The second cost is that the joining lives in somebody's head. The mapping between a site code in one system and a depot name in another is not written down anywhere, it is remembered. When that person is on leave, the question cannot be answered at all, and nobody quite says so out loud.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                This belongs to the supply chain director, and it is carried day to day by the operations manager and the one analyst everybody relies on.
            </p>
        </div>
        <div>
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The first thing that happens is the boring thing: your data is read and sorted into the parts of a business it describes. Shipments, stock, carriers, suppliers and freight are one area. Invoices, reserves and settlements are another. Sensor readings are another. Vehicles and drivers another again. Records are placed by what they are about, so the same kind of fact lands in the same place whether it arrived from an ERP, a warehouse system, a transport system or a file.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Where the columns are too vague to place a table, it is placed by what the source is instead. A warehouse, yard, transport or order-management extract is logistics. A sensor or tag feed is telemetry. A claims system is finance. The point of that rule is to avoid the thing every catalogue tool does, which is to sweep the awkward half of your estate into a bucket called "other" and then never mention it again.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Then the joins. Where two areas share the ground they stand on, the link is drawn. Where an area shares no column name with anything else, it still gets a relationship rather than being left floating on the edge of the diagram looking irrelevant — a domain that appears unconnected is a domain nobody asks a question about, and that silence is usually wrong.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                All of that is worked out by fixed rules from the shape of your files. No model is asked, no search goes out, nothing crosses the network for that step, and the same files produce the same map every time. A model is used afterwards to add commentary, and what it adds is clearly the commentary rather than the structure. The structure is something you can re-derive and check. Our own configuration files, which sit in the same place as your data, are deliberately excluded, because a tool that reports its own scheduler to you as your operations domain is not describing your business.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                On top of the map, each area is reviewed: what state it is in, where the findings are, and for each finding its category, how serious it is, the rule it relates to and a suggested remedy, along with which system each part of it came from. When an area cannot be assessed, the answer is that it was not assessed and why — stated in those words, because "we did not look" and "we looked and it is fine" are not the same sentence and get read as the same colour on every dashboard ever built.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                And then you can ask it things, in the vocabulary you already use, with the map and the recognised rules behind the answer and narrowed to whichever areas you are looking at. You get the reasoning, not just the reply. A scenario that has been worked through in <a href="/use-cases/hypothesis-lab">the hypothesis lab</a> can be handed across from there as a proposed action, with its variables and the rules it was argued against travelling with it rather than arriving as a bare reference to a run somebody else did.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                One limit on all of that, stated here rather than left for you to find. What the mapping reads is the files sitting in the instance's own data directory, and on a standard instance that directory is not read — so what you get back is the refusal, not a thin map. The classification rules are real and they are deterministic; the path that lands your live extracts in front of them is not finished. We would rather the page said which half is which than describe the whole thing in the present tense and let a pilot discover the seam.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Where an area of the picture turns into a line about to run short, the response is the next job along, in <a href="/use-cases/fulfillment-optimization">stock cover and supplier planning</a>, and the signal underneath it is <a href="/use-cases/demand-forecasting">demand forecasting</a>. Visibility is what makes those two arguable from the same set of facts instead of from three exports.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                What arrives at a person is a short ranked list of proposed actions with the records attached, not a diagram to admire. A named person approves, edits or rejects each one, and that sign-off is kept. Approving is what sends it, and a decided item leaves the queue instead of coming back round next time somebody opens the board. Where a step behind the approval has no implementation yet, the response names that step as not executed rather than reporting the action as complete — so the board shows what was decided and separately what was actually carried out. It all runs on machines you own.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-will-know-it-worked" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Will Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. We are not bringing numbers to this; you are. Write down where you stand today, because the baseline is gone for good the moment things improve.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">How long one ordinary cross-system question takes.</strong> Pick a real one you were asked last month. Time the person who answers it, honestly, including the waiting. That is the number everything else on this page is about.</li>
                <li><strong class="text-stone-200">How many people could have answered it.</strong> Not how many have access. How many could actually have produced the answer. If it is one, write down their name and keep it somewhere a board paper can find it.</li>
                <li><strong class="text-stone-200">How many systems of record you have, and how many are in the monthly pack.</strong> List the systems that hold operational facts. Then list the ones that reach a review. The difference is the part of your operation that is currently managed by anecdote.</li>
                <li><strong class="text-stone-200">How much of the pack is hand-assembled, and by whom.</strong> Go through last quarter's reporting and mark each figure as automatic or typed. Do it before anything changes, because this is the one that nobody believes until they see their own answer.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring one month of extracts from the systems you would actually want joined, in whatever format they come out in.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Book a consultation
        </a>
    </div>
</div>
{{< /section-container >}}
