---
title: "When Demand Turns Before the Plan Does"
description: "A line starts moving weeks before the reorder point does. By the time the plan catches up the cover is gone, and the difference is paid in air freight. This is about reading the turn while it is still a forecasting problem."
layout: "use_case"
product: "Runink FACE"
badge: "Demand Signal"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-8">
<li><strong class="text-stone-200">The season and the trend are pulled apart.</strong> Your own history is decomposed into the underlying trend, the repeating seasonal shape and what is left over. The leftovers are where a turn shows up first.</li>
<li><strong class="text-stone-200">The forecast says which method produced it, and why that one.</strong> Competing models are tried against periods your history already contains, and the one that predicted those periods best is the one that is used. The answer carries the name of the method that won.</li>
<li><strong class="text-stone-200">A series it cannot fit is refused, not fitted anyway.</strong> Too few periods, or no model that holds, comes back saying so. It does not come back as a confident-looking line with nothing under it.</li>
</ul>

<p class="mb-12">
    <span class="block mt-3 text-sm text-stone-500 font-medium">
        This page describes a mechanism and the shape of a working week, not an event that happened. It is an illustration, and no part of it has been run against a customer's data. Nothing here is measured, and there are no figures for what it returns.
    </span>
</p>

    <div class="text-center mb-16">
        <h2 id="the-signal-turned-before-the-plan-did" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">The Signal Turned Before The Plan Did.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            A line starts moving long before the reorder point moves. The gap between those two dates is the whole problem, and it is usually settled by the time anyone is told.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The demand plan is rebuilt on a cycle. Somebody exports the sales history, applies last cycle's assumptions to it, argues the exceptions in a meeting, and loads the result back in. It is careful work and it is honest work, and it describes a month that has already ended.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Meanwhile a line turns. Not dramatically — a seasonal peak arriving early, a promotion that held after the promotion stopped, a region that quietly stepped down a level and stayed there. None of those trip a threshold, because the level is still inside the band. They only become visible when you separate the season from the trend, and nobody has the afternoon to do that line by line.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                The forecast was wrong weeks before the stock ran out.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                There is a worse version. A planner who has been burnt before stops trusting the number and carries extra everywhere, which is expensive and invisible. A planner who has not been burnt yet trusts it completely, and finds out in one go. Neither of them was given anything that said how much the forecast could be trusted, so both were guessing about the guess.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                This is the demand planner's problem and the S&amp;OP lead's problem, and it arrives at the supply planner as somebody else's emergency.
            </p>
        </div>
        <div>
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Each series is taken apart before it is projected. The trend underneath, the seasonal shape that repeats, and the residual — what the series did that neither of those explains. A turn shows in the residual first, which is why the residual is reported rather than discarded.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The series is also tested for whether it is steady enough to model in the first place, by name and with the test statistic shown next to the threshold it was compared against. If it is drifting, it is differenced before anything is fitted, and the fact that it had to be is stated. You are not asked to take the projection on faith; you are shown the working that led to it being projected that way at all.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Then more than one method is tried. A seasonal decomposition and a classical autoregressive model both produce a forecast, and both are scored by rolling the clock back and asking them to predict periods your own history already contains. The one that predicted those periods best is the one you get, and it arrives labelled with which it was and with the fact that it was chosen that way. When neither holds, a plain fallback is used and the answer says it is a fallback.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A series with too little history is refused. It comes back saying there are not enough periods to model, which is a more useful answer than a line drawn through four points.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                This is the signal, not the response. What to order, how much cover to hold and which supplier can still make the date is the next job along, and it is described in <a href="/use-cases/fulfillment-optimization">stock cover and supplier planning</a>. Forecasting says the line has turned and how confident that is; fulfilment decides what to do about it. Keeping them apart is deliberate, because the two get argued by different people.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                What reaches a person is one item: this line, the turn, the method behind it, the periods it was tested over, and a drafted change to the plan. A named person approves it, edits it or rejects it, and that decision is kept on the record. Approving is what sends it — and where a step behind it has nothing implemented yet, a write into your planning system being the honest example, the response names that step as not executed rather than reporting the change as made. The decision and the execution are recorded as two different facts, because they are. It runs on machines you own, and the history never leaves them.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-will-know-it-worked" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Will Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. We are not offering you ours, because we do not have yours. Write down where you stand today, because the baseline is gone for good the moment things improve.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Forecast error, by line, against what actually sold.</strong> Out of your planning system. Take a full year, because the seasonal lines and the steady lines fail in different ways. The point is not that the error falls. The point is that it is stated per line instead of averaged into one comforting number.</li>
                <li><strong class="text-stone-200">How many periods pass between a line turning and the plan changing.</strong> Pick a handful of lines that went wrong last year. Find the week the series actually turned, then find the week the plan was revised. That gap is what this is for.</li>
                <li><strong class="text-stone-200">How many lines are forecast by hand, and by whom.</strong> Most teams have a set of lines that one person carries in their head. Count them. That is your concentration risk, and it is usually news to somebody.</li>
                <li><strong class="text-stone-200">Which lines you could not forecast at all.</strong> New lines, short histories, lines replaced mid-year. Write the list down before you start, because a system that admits it cannot forecast these is only an improvement if you knew which ones they were.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring a year of weekly history for one product family, and your current forecast error by line.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Book a consultation
        </a>
    </div>
</div>
{{< /section-container >}}
