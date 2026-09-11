---
title: "Talking to Drivers Without a Screen"
description: "The person who knows a load is late is the one who cannot type. Asking and answering out loud gets the fact onto the record while the truck keeps moving, and the desk still makes the change."
layout: "use_case"
product: "Runink FACE"
scenario: "reactive logistics"
standing: "hypothetical"
badge: "Voice-AI Dispatcher"
badgeColor: "#f59e0b"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Reactive logistics, driver-facing</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
<span class="rk-mark" data-standing="hypothetical">Hypothetical</span> &mdash; this is a <strong class="text-stone-300">Runink FACE</strong> scenario, the driver-facing end of it. What follows is what the product is built to do and how it would run against your own fleet records. It is an illustration of the mechanism, not an account of a deployment. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">What FACE is</a>.
</p>

<h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">The driver asks out loud and hears the answer.</strong> Where the next stop is, what the customer asked for, which door to use. No screen to read and no reason to pull over. Every conversational reply is synthesised inside the FACE process itself, from a voice embedded in the binary, and the speech coming in goes to the model server you already run &mdash; the one inference endpoint you point FACE at, carrying an audio-capable model &mdash; rather than to a speech API somebody else operates. Two qualifiers, stated rather than buried: that endpoint is one you configure rather than a hard-coded refusal to call out, and the recording notice and greeting that open the call are spoken in the telephony provider's own voice, because they are read from the call-setup instructions before the socket into your machines is open.</li>
<li><strong class="text-stone-200">It is a phone call, so it goes over the phone network.</strong> Worth saying plainly rather than burying. The leg between the cab and the building is carried by a telephony provider, the same as any other call your drivers make. What that provider never gets is the text: the transcription, and the reasoning that produces the answer, happen on your machines, and the spoken reply is encoded there too. It does carry that audio, as it has to, and its own voice reads the recording notice and the greeting before the socket to your machines opens.</li>
<li><strong class="text-stone-200">What the call produces is a transcript, not an entry on the board.</strong> Both sides of the conversation are written to the call log, speaker by speaker, so the hour at the gate is recorded the moment it is said. What a voice turn cannot do is write into your dispatch or transport system — there is no action path from the call into your records. Nor does an urgent word on the call raise anything: the phone path writes the line and stops. Urgent-word escalation does exist in FACE, but on the WhatsApp and SMS side, where an inbound message matching a short keyword list is forwarded to a configured manager number. On the phone, somebody named on the desk reading the log is still what turns it into a change.</li>
</ul>

    <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Hands On The Wheel.</h1>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            A driver who has to read a screen to answer a question will either stop the truck or read it while moving. One costs you the hour. The other costs you much more, one day.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A load is running late. The driver knows an hour before anyone else, and the office finds out last. To tell them, the driver has to pull in and type, or type while moving. Most days it just waits until the next stop.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                It runs the same way in reverse. The desk has a change and has to ring round to land it, one truck at a time, hoping each one can pick up. Half the calls go to voicemail and get made again twenty minutes later.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                The person who knows first is the one who cannot type.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                So the day gets written up at the end of it, from memory, if it gets written up at all. The tyre that needed air, the hour lost at a gate, the drop that was refused — after eight hours the detail is thin, and the hour at the gate is the one you never bill for.
            </p>
        </div>
        <div>
            <h2 class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The driver speaks and FACE answers. Where is my next stop. Which gate. It is asked out loud and it comes back out loud, so the eyes stay on the road and the hands stay where they were. The call itself is an ordinary phone call and rides a telephony provider to get there; the audio socket into the building is authenticated, and everything that happens after it arrives happens on your machines. The speech is turned into text by the model server you run — the same single configurable inference endpoint the rest of FACE reasons through, carrying an audio-capable model, rather than a speech API with its own contract — and every conversational reply is spoken by a synthesiser running in the same process as the rest of FACE, from a voice embedded in the binary. No transcript ends up in somebody else's account. Two qualifiers belong in the same breath rather than in a footnote. The recording notice and the greeting that open the call are spoken in the provider's own voice, because they are read from the call-setup instructions before the socket into your building exists. And the transcription endpoint is one you configure, so where it points is something to check in a review rather than something a test guarantees.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                What the call leaves behind is the conversation itself, written down as it happens: each turn, who said it, against the call it belongs to. The hour at the gate is on the record at the gate rather than reconstructed at six o'clock. Nothing on the call pages anybody, and that limit belongs next to the benefit rather than after it. The phone path writes the line and stops: it does not watch for an urgent word and it does not notify anyone. The escalation that does exist is on the text side — an inbound WhatsApp or SMS whose wording matches a short keyword list is forwarded to a configured manager number, and every path that ends in nobody being paged is logged as exactly that rather than as success. The call gets the fact onto the record within minutes of it happening; somebody has to be reading the record.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Here is the line, and it matters more than the feature list. A voice turn does not write into your systems. It does not create the delay record, it does not update the delivery and it does not move the drop — there is no path from the call into your transport system, and a product that told you otherwise would be describing an integration it has not built. What the call does is get the fact out of the cab and onto the record while it is still accurate. A person on the desk reads it and makes the change.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                One more refusal, because it is the kind that usually gets hidden. Elsewhere in FACE you can attach a voice memo to a thread, and that attachment is not transcribed. Rather than letting the model improvise around it, the model is told outright that an audio attachment arrived, that its contents are unknown, and that it must not guess at what was said — and it is instructed to tell you the audio was not processed. A system that cannot hear something and says so is worth more than one that fills the gap in.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Would Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. Write down where you stand today, because the baseline is gone for good the moment anything changes.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Time the trucks spend stopped for no delivery.</strong> Your vehicles already send back where they are and when the engine is off. Take a week of it, drop the stops that match a drop, and look at what is left.</li>
                <li><strong class="text-stone-200">Minutes from a problem happening to the desk knowing.</strong> Sample a month of late runs and refused drops. When did it happen, and when did the first message about it reach the office.</li>
                <li><strong class="text-stone-200">Waiting time at gates and sites, and how much of it you bill.</strong> Out of your own job records and your invoices. In most fleets the hours are real and only some of them are written down.</li>
                <li><strong class="text-stone-200">How much of the day's log is written on the road.</strong> Count the notes and alerts raised during the shift against the ones raised after it ended. This is the one the rest of it rests on.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring one depot and a week of vehicle tracking data.</p>
        </div>
    </div>

    <div class="text-center">
        <a href="/#contact" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest !text-on-fill text-on-fill drop-shadow-md transition-all duration-300 bg-gradient-to-r from-signal-fill to-signal-fill-hover rounded-xl border border-signal/30 hover:shadow-2xl hover:-translate-y-1">
            Book a consultation
        </a>
    </div>
</div>
{{< /section-container >}}
