---
title: "Testing a Plan Before You Commit to It"
description: "A port shuts and you have a day to pick a new route. State the change as a hypothesis and the rules it touches, and get back the case laid out — which rules it collides with, in what order, and what someone would have to believe for the plan to hold. The decision stays with the person accountable for it."
layout: "use_case"
badge: "Hypothesis Engine"
badgeColor: "#ec4899"
product: "Runink FACE"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Financial scenarios and hypothesis testing</p>
<p class="text-base text-stone-500 font-medium mb-10">This is a scenario for <strong class="text-stone-300">Runink FACE</strong>, the Fulfilment Autonomous Claims Engine. FACE runs on the Runink core platform, but the work on this page is FACE's own.</p>

<h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">The change has to be written down before it can be argued.</strong> A hypothesis is stated explicitly, together with the rules it touches — the reorder points, the lead times, the service commitments your business already runs on. Most of the value is in that step, and it is the step normally skipped.</li>
<li><strong class="text-stone-200">What comes back is reasoning, ranked, with the rule it invoked.</strong> Each consequence is tied to the specific rule it follows from, so you can disagree with it on the merits. It is an argument you can check, not a number to accept.</li>
<li><strong class="text-stone-200">Nothing is executed, and nothing is connected.</strong> The engine has no write path to your systems and does not touch them. It reasons over the rules you gave it, on your own hardware — the scenario never leaves the building.</li>
<li><strong class="text-stone-200">You can make it rough on purpose.</strong> Push a lane a week late. Drop a supplier. Let a load run warm. Plans that only work when everything goes right show it here, not at the quarter end.</li>
</ul>

    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Write The Plan Down Before You Argue It.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            When a port shuts or a plant stops, you have about a day to pick a new route. The numbers that would settle it sit in four systems, and pulling them together takes longer than the choice can wait.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A strike shuts a port on the Monday. By Tuesday somebody has to say whether to fly the parts in, hold the line, or ship through another port. The answer turns on what each one costs, how long each one takes, and which orders are at risk either way.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                So somebody builds a spreadsheet. It takes two days. It holds one version of events, it rests on numbers typed by hand, and it is thrown away once the call is made. The next time this happens, the work starts again from nothing.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                The plan is not the hard part. Getting the numbers in time is.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                And nobody wants to try a new plan in the live system. That is the system the plant, the warehouse and the accounts run on. An experiment in there is not an experiment.
            </p>
        </div>
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Be clear about what this is, because the category is full of tools that are vague about it. The engine does not run a simulation over your live data and it does not compute an outcome. You state the change as a hypothesis and hand it the rules that govern the thing you are changing &mdash; reorder points, lead times, service commitments, the reserve assumption. It reasons over those rules and returns a ranked read of what follows, with each consequence tied to the rule it came from.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                So what comes back is an argument, not an answer. That is the useful thing and it is worth saying plainly: a projection presented as a decision is worse than no projection, because it moves the judgement from someone accountable to a piece of software that is not. What this gives the room is the case laid out &mdash; which rules the change collides with, in what order they bite, and what somebody would have to believe for the plan to hold. The decision stays where it was.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Two consequences of that are worth having. Stating the hypothesis forces the assumptions into writing, which is the step teams skip and the reason two people can argue for an hour and turn out to have been discussing different plans. And because the reasoning happens on your own hardware, the scenario you are considering &mdash; which supplier you might drop, which lane you might cut &mdash; never leaves the building.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                You can also make it rough on purpose. Run the lane a week late. Take the second source away. Let a chilled load drift. A plan that only holds when the week goes well will fall over here, in front of you, while it still costs nothing to find out.
            </p>
            <p class="text-lg text-stone-400 font-medium mt-6">
                The run does not pick for you. It puts the options in a row. When somebody does pick one and send it on to be acted on, the option they chose and their name go on the record together, so the question six months later is answered from the file rather than from the meeting.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Would Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. Write down where you stand today, because the baseline is gone for good the moment anything changes.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Hours from a disruption to a decision.</strong> Take your worst few days of last year. From the incident log and the mail trail: when the port shut, and when the new route was booked.</li>
                <li><strong class="text-stone-200">How many options you actually put a price on.</strong> Pull the last few big routing calls out of your records. Count the choices that had a cost worked out before the call, against the ones that were argued from the gut.</li>
                <li><strong class="text-stone-200">What you spend on rushed freight.</strong> The premium and air lines in your payables, a full quarter, sorted by the decision that caused each one.</li>
                <li><strong class="text-stone-200">Days of stock you sit on.</strong> Days of cover per line from your planning system, and how much of it is there because nobody could put a figure on the risk of holding less.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring one lane and your last big routing decision.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="text-base text-stone-500 font-medium">
            The port closure above is drawn to show the shape of the work. It is not an account of a customer engagement, and nothing on this page is a measured result. Runink publishes no ROI figures, no percentages and no customer names &mdash; not because they would be unflattering, but because we have not measured them and saying so is cheaper than being caught.
        </p>
    </div>

    <div class="text-center">
        <a href="/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Book a consultation
        </a>
    </div>
</div>
{{< /section-container >}}
