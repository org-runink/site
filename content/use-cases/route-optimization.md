---
title: "Re-Running the Route After the Day Has Changed"
description: "The plan that was optimal at six in the morning is not optimal by ten. Nobody re-runs it, because re-running it means re-planning a day by hand. This is about making the second run cost nothing."
layout: "use_case"
product: "Runink FACE"
badge: "Route Twin"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-8">
<li><strong class="text-stone-200">A route comes back as a distance, a duration and a line on the map.</strong> An origin, a destination and the constraints you named go out to the routing provider; what comes back is a measured road distance and a travel time, not an opinion.</li>
<li><strong class="text-stone-200">No money is attached to it, on purpose.</strong> The routing provider returns distance and time and no cost. So no saving is printed next to the route, because a figure nobody measured sitting beside two that were is how an estimate gets quoted as a fact.</li>
<li><strong class="text-stone-200">When it could not be worked out, it says so.</strong> No routing credential on the connection, or a provider that returns nothing, comes back as unavailable. It comes back saying so, rather than with the fields left empty, which on a screen is indistinguishable from a good answer.</li>
</ul>

<p class="mb-12">
    <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-600 text-stone-400 text-[10px] font-black uppercase tracking-[0.25em]">
        <span class="inline-block w-2 h-2 rounded-full border border-stone-400"></span>Drawn
    </span>
    <span class="block mt-3 text-sm text-stone-500 font-medium">
        This page marks where the line falls. The routing call, the answer it returns and the refusal to guess a cost are in the product. The working day around them is an illustration of the mechanism, not an account of an event: it has not been run against a customer's fleet, and there are no figures here for distance, time or money saved.
    </span>
</p>

    <div class="text-center mb-16">
        <h2 id="optimal-at-six-not-at-ten" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Optimal At Six. Not At Ten.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            The plan was good when it was built. Then a drop took forty minutes longer than it should have, a road shut, and a customer moved a window. The plan is now the best answer to a question nobody is asking.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Routing happens once, the night before or first thing. It is the most carefully made decision of the day, and it is made with the least information anyone will have all day. Everything that will actually shape the day — the gate queue, the closure, the refused delivery, the driver who is running an hour down — has not happened yet.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                By mid-morning the plan has drifted, and everybody on the desk knows it. What they do about it is patch it: swap two drops, push one to tomorrow, ring a driver. Sensible, local, and nobody can say whether the patched day is better or worse than the one that would come out of running the whole thing again.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                Re-running it is free. Re-planning it by hand is not, so it never gets re-run.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                And the cost of the drift is never written down. It leaves as overtime, as a missed window, as a second trip, as fuel. Each of those lands in a different budget, and none of them is labelled with the reason.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                This sits with the transport planner and whoever is on the dispatch desk that day. They own it in the hour they have least.
            </p>
        </div>
        <div>
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Asking for a route is one small request: where it starts, where it ends, and the constraints that matter on this leg. That goes out to the routing provider and comes back as a road distance, a travel time and the line itself, so the answer can be drawn on a map rather than described in a sentence.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The request is small, so asking a second time costs about what asking the first time cost. The question stops being "is it worth re-planning the day" and becomes "what does the route look like now" — one you can put to it as often as the day changes.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                What comes back is the leg you asked about: its origin and destination, the distance and the duration the provider actually returned, and the line the route follows. It is an answer to a question you put, which is why it arrives when you ask rather than appearing on its own.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Two refusals are built in, and they are the reason to trust the rest. No saving is printed beside the route, because the routing provider does not return one — internal rule-of-thumb estimates exist elsewhere in the product and are deliberately not copied onto a measured route. And if there is no routing credential on that connection, or the provider returns no route at all, the answer is that it is unavailable. Not an answer with blank fields. A blank field on a screen reads as a measurement, and that is a worse failure than an honest error.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The credential belongs to the connection, not to the machine. Routing is reached with the key attached to the connection that was configured for it, so the grounding is something you set up, can see and can revoke per connection. It is not an environment variable baked into a server that nobody can audit.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A change is proposed, never imposed. A named person on the desk approves it, edits it or rejects it, and rejecting is recorded as a decision rather than as silence. Telling the driver is a separate job and a separate page — a driver can ask and be answered out loud with their hands on the wheel, in <a href="/use-cases/voice-dispatch">talking to drivers without a screen</a>, though the call leaves a transcript rather than an acceptance, and the desk still owns the change. And if the question is bigger than one leg &mdash; a supplier dropped, a lane given up for a season &mdash; the case for it can be laid out against the rules it collides with first, in <a href="/use-cases/hypothesis-lab">testing a plan before you commit to it</a>.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Approving is what sends it, and the reason stays on the record for whoever asks in three months why a truck went that way. One more honesty about that, of the kind this page is built on: where a step behind the approval has nothing implemented behind it — the write into your transport system is the real example — the answer names that step as not executed rather than returning a success that covers the whole action. Approved and done are two different words here, and the software is the one that tells you which it managed.
            </p>
        </div>
        <div>
            <h2 id="who-owns-this" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Who Owns This</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Three desks, and what each of them is holding today.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">The transport planner.</strong> Today the plan is built the night before or first thing, which makes it the most carefully made decision of the day and the one made with the least information. What changes is that a single leg can be asked about on its own terms &mdash; one origin, one destination, the constraints that matter on it &mdash; and the answer is a measured road distance and a travel time from the routing provider you connected.</li>
                <li><strong class="text-stone-200">The dispatch desk.</strong> Today the day gets patched: swap two drops, push one to tomorrow, ring a driver. Sensible and local, and nobody can say what the patch cost. What changes is that a leg comes back as a distance and a duration that were actually returned, so two people on the desk are arguing about the same two numbers.</li>
                <li><strong class="text-stone-200">Operations director.</strong> Today the drift leaves the building as overtime, a second trip, a missed window and fuel, each landing in a different budget and none of them labelled with the reason. What changes is that no money is printed beside a route, because the provider returns none &mdash; so a figure that was measured and a figure that was guessed never sit on the same line pretending to be the same kind of thing.</li>
            </ul>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-will-know-it-worked" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Will Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. We have none of our own to offer you. Write down where you stand today, because the baseline is gone for good the moment things improve.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">How often a route is re-run after dispatch.</strong> Most honest answer is never. Take a month and count the days the plan was recalculated rather than patched. This is the number the whole thing turns on.</li>
                <li><strong class="text-stone-200">Planned against actual, per leg.</strong> Out of your transport system: the distance and the time the plan assumed, against the distance and time the vehicle recorded. Keep it per leg, not per day — a day that balances out is hiding two legs that did not.</li>
                <li><strong class="text-stone-200">Windows missed, and which of them were avoidable.</strong> From your delivery records. Split them into the ones that were lost before the truck left and the ones that were lost during the day. The second group is the one this touches.</li>
                <li><strong class="text-stone-200">Driver overtime and second trips, by depot.</strong> From payroll and from your dispatch log. They are the two places the drift leaves the building, and they are usually filed where nobody connects them to routing.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring a month of planned-against-actual leg data for one depot.</p>
        </div>
    </div>

{{< faq >}}
{
  "title": "Questions A Transport Desk Asks",
  "description": "What comes up before anybody talks about a contract.",
  "questions": [
    {
      "question": "What does it need in order to return a route?",
      "answer": "One origin, one destination and the constraints you name on that leg. Those go to the routing provider you connected, and come back as a measured road distance, a travel time and the route line itself &mdash; so the answer can be drawn rather than described in a sentence."
    },
    {
      "question": "Why is there no cost or saving beside the route?",
      "answer": "Because the routing provider returns a distance and a time and no cost. A figure nobody measured, sitting beside two that were, is how an estimate gets quoted back to you as a fact. Rule-of-thumb estimates exist elsewhere in the product and are deliberately not copied onto a measured route."
    },
    {
      "question": "What happens when the route cannot be worked out?",
      "answer": "The answer is that it is unavailable, in those words. No routing credential on the connection, or a provider that returns nothing, comes back as unavailable rather than as an answer with the fields left empty. A blank field on a screen reads as a measurement, and that is the worse failure of the two."
    },
    {
      "question": "Where does the routing credential live?",
      "answer": "On the connection that was configured for routing, not in an environment variable baked into a server. It is something you set up, can see and can revoke per connection, which is what makes it auditable."
    },
    {
      "question": "Who signs off a change to the day?",
      "answer": "A named person on the desk. A change is proposed, never imposed: it is approved, edited or rejected, and rejecting is recorded as a decision rather than as silence. Approving is what sends it, and the reason stays on the record for whoever asks in three months why a truck went that way."
    },
    {
      "question": "How does the driver find out?",
      "answer": "That is a separate job and a separate page. A driver can ask and be answered out loud with their hands on the wheel, described in [talking to drivers without a screen](/use-cases/voice-dispatch/). The call leaves a transcript rather than an acceptance, and the desk still owns the change."
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
