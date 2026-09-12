---
title: "Cold Chain and Yard Safety"
description: "A container drifts warm overnight and nobody opens the door until morning. What the yard camera already sees, read against the handover record and the paperwork the consignment travels with."
layout: "use_case"
product: "Runink FACE"
scenario: "reactive logistics"
badge: "IoT Sentinel"
badgeColor: "#3b82f6"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Reactive logistics</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
This is a <strong class="text-stone-300">Runink FACE</strong> scenario, its yard-facing end. It is an illustration of the mechanism, not an account of a deployment. What the software reads here is the paperwork and the images a cold chain already produces — the consignment record, the handover, the photograph taken at the door — against the rule that governs the shipment. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">What FACE is</a>.
</p>

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">There is no live sensor feed into FACE today, and we are not going to imply there is.</strong> The connectors for sensor, tag, warehouse, yard and transport systems are placeholders that fail on purpose, so the reasoning behind them can be exercised against a seeded file while the real path is built. A temperature excursion on your own units is not something this reads yet.</li>
<li><strong class="text-stone-200">The yard camera is the part that is built.</strong> A frame arriving from a yard or infrared camera is checked to be an actual image before anything reads it, reduced to a size a model can take, and read by a vision model running on hardware you control. What comes back is a written observation tied to the frame it was read from.</li>
<li><strong class="text-stone-200">A cue is a request, not a lock.</strong> FACE can broadcast a cue &mdash; slew that camera, hold those crane moves &mdash; to whatever is subscribed to the yard's event stream. It contacts no actuator, there is no crane controller on the other end of it, and the code says so in as many words so that a broadcast can never be read as a move having been stopped. If somebody has offered you a dangerous-goods interlock, this is not one.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="the-reading-has-to-arrive-first" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">The Reading Has To Arrive First.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            The reading that condemns a load is recorded hours before anybody looks at it. The whole problem is the gap between the two &mdash; and closing it starts with a sensor path into the software, which is the piece we have not built.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A cooling unit starts to fail on a Tuesday night. The sensor records it. Nobody is watching at that hour, and the data is not looked at until the container is opened at the far end.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                By then the question has changed. It is no longer "can we save this load", it is "who pays for it". That is a much more expensive question, and it is the only one left.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                The reading was there all along. Nobody was reading it.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                The yard has the same shape of problem. Rules about which goods may sit near which are known, written down, and checked by a person who is also doing four other things.
            </p>
        </div>
        <div>
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Start with the part that is not finished, because it is the part the rest of this depends on. The reading has to reach FACE before any of it matters, and today it does not. The connector for a sensor, tag, warehouse or yard system is a placeholder that fails deliberately, so that the reasoning built on top of it runs against a seeded file instead. On an ordinary instance with nothing connected, the queue is empty. It used to be filled with those seeded examples, presented as though they were your operations, and that was removed rather than dressed up.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                What is built is the camera side of the yard. A frame is validated as a real image before a model sees it, scaled down to something a model can take, and read by a vision model on your own hardware — so the reading of the yard happens where the footage already is, and the footage does not go out to anybody's API to be described. The observation comes back attached to the frame it came from, which is what makes it arguable rather than assertable.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                On top of that, a cue can be broadcast to everything watching the yard's event stream. This is worth being exact about, because the category sells it as enforcement: the broadcast asks, it does not act. No actuator is contacted, there is no crane controller in the process to contact one with, and the code refuses to report a cue as a move having happened. That refusal is the feature. An interlock that cannot fire is worse than no interlock, because it answers "is this handled?" with a confident yes.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Where there is something to act on, it waits as a drafted move, and a named person approves, edits or rejects it with the sign-off kept on the record. Approving is what sends it. And where a step in that move has nothing behind it — a write into a yard or transport system, for instance — the response names the step that did not happen instead of reporting success, so "approved" and "done" stay two different words.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-would-know-it-worked" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Would Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. Write down where you stand today, because the baseline is gone for good the moment anything changes.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">What you write off on chilled and frozen stock.</strong> The write-off account in your ledger and the quality rejection log for the same period, with temperature cases separated from every other cause.</li>
                <li><strong class="text-stone-200">Hours from the first bad reading to somebody acting.</strong> Sample last quarter's temperature events. Note when each was recorded, and when a person first did something about it.</li>
                <li><strong class="text-stone-200">How many drifts were caught while the load could still be saved.</strong> Count them as a share of all drifts. This is the number the rest of it rests on.</li>
                <li><strong class="text-stone-200">Safety findings in the yard.</strong> Your own inspection and incident records, counted per quarter, split between rules about keeping goods apart and everything else.</li>
                <li><strong class="text-stone-200">What your cameras already record and nobody reads.</strong> Count the cameras in the yard, then count how many hours of what they record is ever looked at by a person. This is the gap the vision side of this works in, and it is usually the largest number on the list.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring your write-off account and a day of yard camera footage.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Book a consultation
        </a>
    </div>
</div>
{{< /section-container >}}
