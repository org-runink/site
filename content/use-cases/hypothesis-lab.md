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

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">The change has to be written down before it can be argued.</strong> A hypothesis is stated explicitly, together with the rules it touches — the reorder points, the lead times, the service commitments your business already runs on. Most of the value is in that step, and it is the step normally skipped.</li>
<li><strong class="text-stone-200">What comes back is reasoning, ranked, with the rule it invoked.</strong> Each consequence is tied to the specific rule it follows from, so you can disagree with it on the merits. It is an argument you can check, not a number to accept.</li>
<li><strong class="text-stone-200">Nothing is executed, and nothing is connected.</strong> The engine has no write path to your systems and does not touch them. It reasons over the rules you gave it, on your own hardware — the scenario never leaves the building.</li>
<li><strong class="text-stone-200">You can make it rough on purpose.</strong> Push a lane a week late. Drop a supplier. Let a load run warm. Plans that only work when everything goes right show it here, not at the quarter end.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="write-the-plan-down-before-you-argue-it" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Write The Plan Down Before You Argue It.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            When a port shuts or a plant stops, you have about a day to pick a new route. The numbers that would settle it sit in four systems, and pulling them together takes longer than the choice can wait.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
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
            <h2 id="who-this-is-for" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Who This Is For</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Three people in the same room on the Tuesday, arguing from three different sets of numbers.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Operations director.</strong> What lands today is a port shut on Monday and a call to make by Tuesday, with the figures that would settle it sitting in four systems. What changes is what you walk into the meeting holding: the change written down as a plain statement, the rules it runs into, and the order in which they bite.</li>
                <li><strong class="text-stone-200">Head of planning.</strong> What lands today is a plan argued from reorder points, lead times and service commitments that live in three people's heads, which is how two of them spend an hour discovering they were describing different plans. What changes is the order of the work. The assumptions are written down before the argument rather than reconstructed after it, and each consequence names the rule it follows from, so a colleague can disagree with it on the merits.</li>
                <li><strong class="text-stone-200">Chief financial officer.</strong> What lands today is a premium freight line in the payables that nobody can attach to the decision that caused it. What changes is that the option somebody chose and the name of the person who chose it are kept together, so the question six months later is answered from the file rather than from the meeting.</li>
            </ul>
        </div>
        <div>
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
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
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-would-know-it-worked" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Would Know It Worked</h3>
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
</div>
{{< /section-container >}}

{{< faq >}}
{
  "title": "Questions To Ask Before The Next Bad Monday",
  "description": "What you hand it, what it hands back, and who is still making the call.",
  "questions": [
    {
      "question": "What do we have to give it?",
      "answer": "Two things. The change, stated as a plain hypothesis — we ship through Rotterdam instead, we drop this supplier, we let this lane run a week late. And the rules that govern the thing you are changing: the reorder points, the lead times, the service commitments, the reserve assumption your business already runs on.<br><br>Writing those down is the step that gets skipped, and much of the value is in it. Two people can argue a plan for an hour and turn out to have been describing different plans, which only becomes visible once the assumptions are on paper."
    },
    {
      "question": "Is this a forecast, or a simulation of our operation?",
      "answer": "It is an argument you can check. You hand it the change and the rules, and it reasons over those rules and returns a ranked read of what follows, with each consequence tied to the rule it came from.<br><br>That is a different kind of output from a projection, and the difference is the whole point. A number presented as a decision moves the judgement from somebody accountable to a piece of software that is not. What this puts in front of the room is the case laid out: which rules the change collides with, in what order they bite, and what somebody would have to believe for the plan to hold."
    },
    {
      "question": "Does it touch the systems we run the business on?",
      "answer": "It reasons over the rules you handed it, and it does that on your own hardware. The plant, the warehouse and the accounts keep running on their systems, untouched by the exercise — an experiment inside the live system is not an experiment, which is why nobody sensible runs one.<br><br>The other half of that is discretion. The scenario you are considering — which supplier you might drop, which lane you might cut — is exactly the kind of thing you would not want discussed outside the building, and the reasoning happens where you can see it."
    },
    {
      "question": "What does it do when the rules we gave it do not settle the question?",
      "answer": "It names what somebody would have to believe for the plan to hold, and hands that back as the finding. That is the honest output when the rules run out: the belief the plan rests on, stated in a sentence, so the room can argue about the belief rather than about a spreadsheet.<br><br>It restates your assumptions and follows them through. It does not discover an assumption you never gave it, and a consequence it returns is only as good as the rule it was drawn from — which is why every consequence names its rule."
    },
    {
      "question": "Who picks, and what does the record show afterwards?",
      "answer": "The person accountable picks. The run puts the options in a row rather than choosing between them, and the choosing is where the responsibility belongs.<br><br>When somebody does pick one and send it on to be acted on, the option they chose and their name go on the record together. So the question six months later — why did we fly the parts in instead of waiting — is answered out of the file rather than out of somebody's memory of a meeting."
    },
    {
      "question": "Can we push it until the plan breaks?",
      "answer": "That is one of the better uses of it. Run the lane a week late. Take the second source away. Let a chilled load drift warm. State the rough version as the hypothesis and see which rules it hits first.<br><br>A plan that only holds when the week goes well will fall over in front of you, on a morning when finding that out costs nothing. The alternative is finding it out at the quarter end, when it costs whatever it costs."
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
