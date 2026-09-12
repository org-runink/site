---
title: "Returns and What to Do With Them"
description: "A returned item is worth the most on the day it comes back. The call on where it goes — shelf, refurbishment, recycling or disposal — is drafted at the scan, from a written-down policy that gives the same grade the same answer every time."
layout: "use_case"
product: "Runink FACE"
scenario: "reverse logistics"
badge: "Circular Economy"
badgeColor: "#14b8a6"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Reverse logistics</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
This is a <strong class="text-stone-300">Runink FACE</strong> scenario, its returns and circular-economy side. What follows is what the product is built to do and how it would run against your own records. It is an illustration of the mechanism, not an account of a deployment. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">What FACE is</a>.
</p>

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">The call is drafted at the scan.</strong> FACE works from four things the dock hands it: the return's id, the barcode, the condition grade the person at the dock wrote down, and the item's value as they type it. It looks nothing up behind those — no order, no warranty, no price file — and it answers at the moment the box lands rather than the afternoon somebody gets to the pen.</li>
<li><strong class="text-stone-200">The policy is written down, so the same grade always gets the same answer.</strong> Restock, refurbish, recycle, dispose — each condition grade routes to one of them and to one of four destinations spelled out in the code, the same way every time, whoever is on the dock and whatever the queue looks like. A grade it does not recognise is refused rather than filed under its best guess.</li>
<li><strong class="text-stone-200">There is a recovery figure, and it is arithmetic on a number you typed.</strong> The triage returns an estimated recovery yield and a refurbishment cost, and both are the value the dock entered multiplied by a fraction fixed against the grade: pristine yields 95% of that value and nothing to refurbish, damaged yields 75% and a quarter of it as the repair. Nothing is measured and nothing is looked up. We would rather you knew the multiplier than trusted the dollar sign.</li>
<li><strong class="text-stone-200">The triage decides nothing on its own.</strong> It answers the screen and stops there: it moves no stock, raises no credit and stores no approval. The person at the dock still makes the call, and nothing in this step can make it for them.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="a-return-is-worth-most-on-day-one" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">A Return Is Worth Most On Day One.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Most of what a return loses, it loses while it waits. Not in the repair, not in the freight — in the weeks it sits in a corner of the dock while somebody works out where it should go.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A box comes back. To decide where it should go, somebody has to know what was in it, whether it is still under warranty, what shape it is in, what it would fetch now, and what a repair would cost. That is four systems and a look in the box.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                So the box waits. It waits in a pen on the dock with the rest of the week's returns, and the pen is sorted when there is a spare afternoon. Meanwhile the customer is waiting on the refund, and the item is quietly getting older and worth less.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                Every week a return waits, it is worth less than it was.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                And when the afternoon comes, the sorting is done by eye and by habit. Good stock goes for scrap because the queue was long. Broken stock goes back on the shelf and comes straight back again. Nobody set out to do either.
            </p>
        </div>
        <div>
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The scan is the moment the work gets done. The condition grade goes in with the return, and a disposition comes back out: straight to the return hub, out for refurbishment, into closed-loop recycling, or to hazardous disposal where the grade calls for it. The useful property is not that a machine decided — it is that the decision is the same one every time. The same grade produces the same route on a quiet Tuesday and on the Monday after Christmas, which is exactly when sorting by eye stops being sorting.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A grade it does not recognise comes back as a refusal rather than as a route. That is worth more than it sounds: the failure mode this replaces is a box that got a plausible-looking disposition because something had to go in the field, and nobody downstream could tell that answer apart from a real one.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Money comes back with the disposition, and it is worth knowing exactly what kind of number it is. Alongside the route, the triage returns an estimated recovery yield and a refurbishment cost, and the cockpit prints both as dollar amounts under those two labels. Both are the value somebody typed on the dock multiplied by a fraction fixed against the grade — a pristine item at 95% of that value with nothing to refurbish, a damaged one at 75% with a quarter of it as the repair, and the remaining grades the same shape. No price file is consulted and no resale is observed. The figure is the policy's arithmetic on your own input, and it is worth exactly what that input was worth, which is a thing you can judge and we cannot.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The destination is the same kind of thing, and here the honest word is unfinished. It is one of four strings written into the code, and two of them name particular sites — a return hub and a refurbishment hub, both in India, with no relationship to any contract of yours. Which facility a grade ought to route to is your decision and your contract; the code does not yet give you anywhere to say so. That is a limitation of what is built today, not a design principle, and it is the first thing an implementation would have to fix.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                The triage call itself sends nothing. It returns a disposition and stops — no stock record is written, no credit is raised, no approval is stored. Acting on a drafted action is a separate part of FACE, and there the decision is recorded against a named person before anything runs; where a step behind it has no implementation yet, the write into an ERP being the honest example, the response names the step that did not happen instead of reporting the move as complete.
            </p>
        </div>
        <div>
            <h2 id="who-owns-this" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Who Owns This</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Three desks, and what each of them is holding today.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">The returns dock supervisor.</strong> They write the condition grade and they type the value, and then the box joins the pen with the rest of the week. What changes is that the grade they wrote is the input to an answer at the scan: a route, a recovery figure and a repair figure, while the box is still in their hands. A grade the policy does not recognise comes back as a refusal, so a doubtful box looks doubtful.</li>
                <li><strong class="text-stone-200">Operations director.</strong> Today the sorting is done by eye and by habit, on the afternoon there is one. Good stock goes for scrap because the queue was long. What changes is that the same grade produces the same route on a quiet Tuesday and on the Monday after Christmas, so the only variation left is in the grading &mdash; which is a thing you can train, sample and audit.</li>
                <li><strong class="text-stone-200">Finance.</strong> Today the credit note is raised weeks after the goods came back, and what you recovered against what the goods were carried at is a figure nobody can break down. What changes is that the recovery yield and the refurbishment cost are stated as arithmetic on the value the dock typed. You can argue with the input, which is the part worth arguing with.</li>
            </ul>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-would-know-it-worked" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Would Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. Write down where you stand today, because the baseline is gone for good the moment anything changes.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Days from the box landing to the call being made.</strong> Take a month of returns. Note when each one was booked in, and when somebody said where it was going. The gap is the whole of it.</li>
                <li><strong class="text-stone-200">What you got back, as a share of what the goods were worth.</strong> From your credit notes and your stock ledger: what the returned goods were carried at, against what you recovered by selling, repairing or scrapping them.</li>
                <li><strong class="text-stone-200">Where the returns went.</strong> A quarter of them, split between shelf, repair and scrap. Then ask how many of the scrapped ones were still under warranty. Most teams have never looked.</li>
                <li><strong class="text-stone-200">Days to refund the customer.</strong> From the return being raised to the credit hitting their account, out of your own billing records.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring one month of returns and your credit notes.</p>
        </div>
    </div>

{{< faq >}}
{
  "title": "Questions A Returns Desk Asks",
  "description": "What comes up before anybody talks about a contract.",
  "questions": [
    {
      "question": "What does it need from our systems before it can grade a return?",
      "answer": "Four things, and the dock already has all four: the return's id, the barcode, the condition grade the person at the dock wrote down, and the item's value as they type it. The triage works from those and from the policy written down beside them. That is why the first box can be graded on the first day, rather than after the order system, the warranty file and the price list have been joined to each other."
    },
    {
      "question": "Who decides where the box actually goes?",
      "answer": "The person at the dock. The triage answers the screen and stops there, and the call remains theirs to make. Acting on a drafted action is a separate part of FACE, and there the decision is recorded against a named person before anything runs."
    },
    {
      "question": "What happens when the grade is one it does not recognise?",
      "answer": "It comes back as a refusal rather than as a route. That is worth more than it sounds. The failure this replaces is a box that got a plausible-looking disposition because something had to go in the field, and nobody downstream could tell that answer apart from a real one."
    },
    {
      "question": "Is the recovery figure a market price?",
      "answer": "It is arithmetic, and it is better to know that than to trust the dollar sign. The estimated recovery yield and the refurbishment cost are the value your dock typed, multiplied by a fraction fixed against the grade &mdash; a pristine item at 95% of that value with nothing to refurbish, a damaged one at 75% with a quarter of it as the repair. Judge the figure by judging the value that was entered."
    },
    {
      "question": "What if our records cannot leave the building?",
      "answer": "Then nothing about this changes. The triage is a written-down policy and arithmetic on four fields the dock types, and it runs where you run FACE, on machines you own."
    },
    {
      "question": "How would we tell whether it made any difference?",
      "answer": "Four of your own figures, written down before anything changes. Days from the box landing to the call being made. What you got back, as a share of what the goods were carried at. Where the returns went, split between shelf, repair and scrap, and how many of the scrapped ones were still under warranty. And days from the return being raised to the credit reaching the customer."
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
