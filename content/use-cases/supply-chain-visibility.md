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
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Your records are sorted by what they are, not by where they came from.</strong> Two tables about shipments both belong to logistics whether one arrived from your warehouse system and the other as a spreadsheet somebody emails on Fridays.</li>
<li><strong class="text-stone-200">The map is derived, not guessed.</strong> The domains and the joins between them are worked out by fixed rules from the records your connected sources return: their column names and a small sample of rows. No model and no web search take part in that step, and the same records always produce the same map.</li>
<li><strong class="text-stone-200">A domain it could not assess is marked as not assessed.</strong> Not as a pass. The words are explicit: this is not a finding that the area is fine.</li>
</ul>


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
                All of that is worked out by fixed rules from the shape of the records your connections return. No model is asked and no search goes out for that step, and the same records produce the same map every time. The structure is something you can re-derive and check.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                On top of the map, each area is reviewed: what state it is in, where the findings are, and for each finding its category, how serious it is, the rule it relates to and a suggested remedy, along with which system each part of it came from. When an area cannot be assessed, the answer is that it was not assessed and why — stated in those words, because "we did not look" and "we looked and it is fine" are not the same sentence and get read as the same colour on every dashboard ever built.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                And then you can ask it things, in the vocabulary you already use, with the map and the recognised rules behind the answer and narrowed to whichever areas you are looking at. You get the reasoning, not just the reply. A scenario that has been worked through in <a href="/use-cases/hypothesis-lab">the hypothesis lab</a> can be handed across from there as a proposed action, with its variables and the rules it was argued against travelling with it rather than arriving as a bare reference to a run somebody else did.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Where an area of the picture turns into a line about to run short, the response is the next job along, in <a href="/use-cases/fulfillment-optimization">stock cover and supplier planning</a>, and the signal underneath it is <a href="/use-cases/demand-forecasting">demand forecasting</a>. Visibility is what makes those two arguable from the same set of facts instead of from three exports.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                What arrives at a person is a short ranked list of proposed actions with the records attached, not a diagram to admire. A named person approves, edits or rejects each one, and that sign-off is kept. Approving is what sends it, and a decided item leaves the queue instead of coming back round next time somebody opens the board. The response names each step that ran and any that could not, rather than reporting the action as complete — so the board shows what was decided and separately what was actually carried out. It all runs where FACE runs, with no outside AI service.
            </p>
        </div>
        <div>
            <h2 id="who-owns-this" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Who Owns This</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Three desks, and what each of them is holding today.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">The supply chain director.</strong> Today the picture gets assembled for the monthly review, or once something has gone badly enough to be worth a morning. What changes is that the same set of facts sits behind the question and behind the answer, so a decision is argued from one place rather than from three exports.</li>
                <li><strong class="text-stone-200">The operations manager.</strong> Today one ordinary question means four logins, four ways of naming the same site and four ideas of what a week is. What changes is that records are placed by what they are about, so the same kind of fact lands in the same place whether it came from an ERP, a warehouse system, a transport system or a spreadsheet somebody emails on Fridays.</li>
                <li><strong class="text-stone-200">The analyst everybody relies on.</strong> Today the mapping between a site code in one system and a depot name in another is not written down anywhere. It is remembered, and while that person is on leave the question cannot be answered at all. What changes is that the map is derived from the structure of your own records by fixed rules, so it is something anyone can re-derive and check.</li>
            </ul>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-will-know-it-worked" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Will Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. Write down where you stand today, because the baseline is gone for good the moment things improve.
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

{{< faq >}}
{
  "title": "Questions An Operations Team Asks",
  "description": "What comes up before anybody talks about a contract.",
  "questions": [
    {
      "question": "How is the map worked out?",
      "answer": "From the structure of the records your connected sources return, by fixed rules: column names, and a small sample of rows to find where two areas join. No model is asked and no search goes out for that step, so the same records produce the same map every time."
    },
    {
      "question": "What happens to the tables that do not fit anywhere?",
      "answer": "They are placed by what the source is instead. A warehouse, yard, transport or order-management extract is logistics. A sensor or tag feed is telemetry. A claims system is finance. The rule exists so that the awkward half of an estate gets named, rather than swept into a bucket called other and never mentioned again."
    },
    {
      "question": "What does it say about an area it could not assess?",
      "answer": "That it was not assessed, and why, in those words. We did not look and we looked and it is fine are two different sentences, and a status colour on a dashboard cannot tell them apart. Marking one as the other is the failure this is written to avoid."
    },
    {
      "question": "Can we ask it questions in our own words?",
      "answer": "Yes, in the vocabulary you already use, narrowed to whichever areas you are looking at, with the map and the recognised rules behind the answer. You get the reasoning as well as the reply. It all runs where FACE runs, with no outside AI service."
    },
    {
      "question": "What reaches a person at the end of it?",
      "answer": "A short ranked list of proposed actions with the records attached, rather than a diagram to admire. A named person approves, edits or rejects each one and the sign-off is kept. A decided item leaves the queue instead of coming back round the next time somebody opens the board, and the response names each step that ran and any that could not, rather than reporting the action as complete."
    },
    {
      "question": "What should we bring to a first conversation?",
      "answer": "One month of extracts from the systems you would actually want joined, in whatever format they come out in. Bring one more thing with them: an ordinary cross-system question you were asked last month, and an honest count of how many people in the building could have answered it."
    }
  ]
}
{{< /faq >}}

    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Book a consultation
        </a>
    </div>
</div>
{{< /section-container >}}
