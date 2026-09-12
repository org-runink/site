---
title: "Stock Cover and Supplier Planning"
description: "Most stockout warnings arrive after the safety stock is already gone, which leaves you paying for air freight. The point is to see it while there is still time to order normally."
layout: "use_case"
product: "Runink FACE"
scenario: "inventory fulfillment"
badge: "Fulfillment Agent"
badgeColor: "#ea580c"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Inventory fulfillment</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
This is a <strong class="text-stone-300">Runink FACE</strong> scenario, the fulfilment side of it. What follows is what the product is built to do and how it would run against your own records. It is an illustration of the mechanism, not an account of a deployment. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">What FACE is</a>.
</p>

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">The trigger says which bound it crossed, in words.</strong> The reorder point, the minimum and the maximum are the ones you already run &mdash; FACE does not invent them and does not derive them from a lead time it has never seen. What it returns is the bound that was crossed and the level that crossed it, written out, so the warning can be argued with instead of acknowledged.</li>
<li><strong class="text-stone-200">The forecast says how much to trust it.</strong> Every projection names the model, which was picked by holding back the most recent stretch of your own history and refitting each candidate on what came before it, and how many periods it had to learn from. When a line's history does not predict itself, that is one of the findings too.</li>
<li><strong class="text-stone-200">The stock trigger does not come with a shortlist, and it is better to say that than to imply one.</strong> The only supplier ranking in FACE sorts names by their public review stars out of a seeded sample file, and what it feeds is a procurement RFP card rather than the stock warning &mdash; where no rated name clears the bar, the field it fills is a literal instruction to go and qualify two or three yourself. On an ordinary instance with nothing connected, nothing ranks alternates for the exposed line: what the trigger returns is the bound, the level that crossed it and the reason, and no supplier list at all. FACE also holds no rate card, so there is no price difference to attach either, and an invented delta would be the most quotable number on the page and the least real.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="stop-finding-out-too-late" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Stop Finding Out Too Late.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            A stockout warning that arrives after the safety stock is gone is not a warning. It is a bill for air freight with a few days' notice.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Most stock alerts fire on a level. When cover drops below the line, you are told. But the supplier still needs a fortnight, and the fortnight started when you were told, not when the trouble began.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                So the choice is a bad one. Pay a premium to fly it in, or tell the customer. Both were decided weeks earlier, by a trend that was visible in your own sales data the whole time.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                The order was late before anybody knew it was late.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                There is a second cost underneath. Every stage of the chain rounds up to a full case and adds a margin for safety, so the plant ends up building for demand that never existed. That growth lives in the sequence, spread across four systems, and no single one of them shows it.
            </p>
        </div>
        <div>
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                FACE reads your own sales history for the season and the trend under it, and checks the projection against periods it was not shown. That is the half that tells you a line is turning earlier than the plan thinks it is.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The trigger on the stock itself is deliberately dull, and it is worth saying what it is rather than what it sounds like. The reorder point, the floor and the ceiling come from you. FACE compares the level against them and returns the bound it crossed and the level that crossed it in plain words, rather than a colour on a tile. It does not work the threshold out from a supplier lead time — there is no lead-time model in here, and a warning timed against a number the software guessed would be worse than the level alert you already have, because it would look cleverer.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                What arrives is narrower than a sourcing decision, and the gap is the part worth naming. The trigger returns the bound that was crossed, the level that crossed it and the reason, in words. It does not return the supplier who normally fills the line, and it does not return ranked alternates — the one ranking in the product reads review stars out of a seeded sample file and attaches them to a procurement RFP card, not to this. On an instance with your own systems connected there is no shortlist here at all until that path is built, and an empty one is the honest answer rather than a worked example with your name on it. Nor is there a price comparison to be had: FACE has no rate card, no tariff table and no historical rate lookup, so the cost difference between two suppliers is not a thing it can tell you — and a made-up one would be the first number quoted back to you in the meeting.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The forecasting underneath this is <a href="/use-cases/demand-forecasting/" class="underline decoration-stone-700 hover:text-stone-300">its own FACE scenario</a> &mdash; how a series is read, which model is chosen and what it says when a line is simply not predictable. This page is about the ordering decision that follows from it.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                A named person approves, edits or rejects it, and that sign-off is kept on the record. Approving is what sends it on. And where a step in the drafted action has nothing behind it yet — a write into your ERP is the honest example — the response names that step as not executed rather than reporting the whole thing as done. You get told which part of the action happened, which is the difference between a system you can rely on and one you have to go and check. Safety margins can then be argued from your own numbers rather than by seniority.
            </p>
        </div>
        <div>
            <h2 id="who-owns-this" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Who Owns This</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Three desks, and what each of them is holding today.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Head of planning.</strong> Today the alert fires on a level, and the supplier still needs a fortnight that starts when you were told rather than when the trouble began. What changes is that the projection underneath the decision is checked against periods it was not shown, and the trigger states which bound was crossed and what level crossed it, in words.</li>
                <li><strong class="text-stone-200">Finance and procurement.</strong> Today the cost of finding out late leaves as premium freight, filed under codes nobody reads back. What changes is that the warning arrives as a bound, a level and a reason rather than a colour on a tile, so the ordering conversation is about a number somebody can check.</li>
                <li><strong class="text-stone-200">Operations director.</strong> Today every stage of the chain rounds up to a full case and adds a margin for safety, and that growth lives across four systems where no single one shows it. What changes is that safety margins get argued from your own numbers rather than by seniority.</li>
            </ul>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-would-know-it-worked" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Would Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. Write down where you stand today, because the baseline is gone for good the moment anything changes.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">What you spend on rushed freight.</strong> Your accounts payable, filtered for the codes your team uses for air or premium freight. Take a full year, because it is seasonal.</li>
                <li><strong class="text-stone-200">Forecast error, by line.</strong> Your planning system's forecast against what actually sold. The point is not that the error falls. It is that the error is stated instead of assumed.</li>
                <li><strong class="text-stone-200">Days of cover per line.</strong> How many days of stock each line is carrying, and how much of that is margin nobody can now explain.</li>
                <li><strong class="text-stone-200">Orders delivered in full and on time.</strong> Your transport or warehouse system, measured against the date and quantity promised on the order line, monthly and by customer. Some of your failures are unavoidable. Watch the ones that are not.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring a year of one product family and your premium freight codes.</p>
        </div>
    </div>

{{< faq >}}
{
  "title": "Questions A Planning Team Asks",
  "description": "What comes up before anybody talks about a contract.",
  "questions": [
    {
      "question": "Where do the thresholds come from?",
      "answer": "From you. The reorder point, the floor and the ceiling are the ones you already run. FACE compares the level against them and returns the bound that was crossed and the level that crossed it. The threshold stays yours deliberately: a warning timed against a lead time the software had guessed would look cleverer than the level alert you already have, and be worth less."
    },
    {
      "question": "What exactly does the trigger return?",
      "answer": "The bound that was crossed, the level that crossed it, and the reason, written out in words rather than shown as a colour on a tile. That is the whole of it, and it is written that way so the warning can be argued with instead of acknowledged."
    },
    {
      "question": "How much can we trust the forecast underneath it?",
      "answer": "Every projection names the model that produced it and how many periods it had to learn from. The model was picked by holding back the most recent stretch of your own history and refitting each candidate on what came before it. When a line&rsquo;s history does not predict itself, that is one of the findings too."
    },
    {
      "question": "Who signs off the order it drafts?",
      "answer": "A named person approves, edits or rejects it, and that sign-off is kept on the record. Approving is what sends it on. Where a step in the drafted action has nothing behind it yet &mdash; a write into your ERP is the honest example &mdash; the response names that step as not executed rather than reporting the whole thing as done, so you are told which part of the action happened."
    },
    {
      "question": "Where does the forecasting itself live?",
      "answer": "In its own scenario. How a series is read, which model is chosen and what it says when a line is simply not predictable is described in [demand forecasting](/use-cases/demand-forecasting/). This page is the ordering decision that follows from it, and the two are kept apart because different people argue them."
    },
    {
      "question": "What should we bring to a first conversation?",
      "answer": "A year of one product family, and the codes your team uses for air or premium freight. Take a full year rather than a quarter, because the cost of finding out late is seasonal and a quarter will flatter or damn you at random."
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
