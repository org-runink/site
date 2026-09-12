---
# WHERE THE URGENCY SENTENCES COME FROM. This page used to say the phone path
# "does not watch for an urgent word and it does not notify anyone", and that the
# escalation existed only on the text side. Both were wrong, and the page had the
# shape right and the attribution backwards.
#
#   face/grpc/cmd/fetch_server.go:4936  the six keywords, on the VOICE utterance
#   face/grpc/cmd/fetch_server.go:4941  a match changes the tone instruction
#   face/grpc/cmd/fetch_server.go:4947  and sends the caller's own words to
#                                       escalationTarget(), when one is configured
#   face/grpc/cmd/whatsapp.go:117       the same six keywords on inbound text
#   face/grpc/cmd/whatsapp.go:86,106    and there, the two paths that page nobody
#                                       are logged as paging nobody
#
# The six words are named on the page rather than described as "a short list",
# because they are the whole of the mechanism and a reader can hold them.
title: "Talking to Drivers Without a Screen"
description: "The person who knows a load is late is the one who cannot type. Asking and answering out loud gets the fact onto the record while the truck keeps moving, and the desk still makes the change."
layout: "use_case"
product: "Runink FACE"
scenario: "reactive logistics"
badge: "Voice-AI Dispatcher"
badgeColor: "#f59e0b"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-[10px] font-black uppercase tracking-[0.25em] text-stone-500 mt-4 mb-3">Runink FACE &middot; Reactive logistics, driver-facing</p>
<p class="text-sm text-stone-500 font-medium mb-10 max-w-3xl">
This is a <strong class="text-stone-300">Runink FACE</strong> scenario, the driver-facing end of it. What follows is what the product is built to do and how it would run against your own fleet records. It is an illustration of the mechanism, not an account of a deployment. <a href="/blog/whitepapers/runink-face/" class="underline decoration-stone-700 hover:text-stone-300">What FACE is</a>.
</p>

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">The driver asks out loud and hears the answer.</strong> Where the next stop is, what the customer asked for, which door to use. No screen to read and no reason to pull over. Every conversational reply is synthesised inside the FACE process itself, from a voice embedded in the binary, and the speech coming in goes to the model server you already run &mdash; the one inference endpoint you point FACE at, carrying an audio-capable model &mdash; rather than to a speech API somebody else operates. Two qualifiers, stated rather than buried: that endpoint is one you configure rather than a hard-coded refusal to call out, and the recording notice and greeting that open the call are spoken in the telephony provider's own voice, because they are read from the call-setup instructions before the socket into your machines is open.</li>
<li><strong class="text-stone-200">It is a phone call, so it goes over the phone network.</strong> Worth saying plainly rather than burying. The leg between the cab and the building is carried by a telephony provider, the same as any other call your drivers make. What that provider never gets is the text: the transcription, and the reasoning that produces the answer, happen on your machines, and the spoken reply is encoded there too. It does carry that audio, as it has to, and its own voice reads the recording notice and the greeting before the socket to your machines opens.</li>
<li><strong class="text-stone-200">What the call produces is a transcript, not an entry on the board.</strong> Both sides of the conversation are written to the call log, speaker by speaker, so the hour at the gate is recorded the moment it is said. What a voice turn cannot do is write into your dispatch or transport system — there is no action path from the call into your records. An urgent word on the call does raise something. The same six words are watched on the phone as on the text side — <em>urgent</em>, <em>asap</em>, <em>emergency</em>, <em>broken</em>, <em>failing</em>, <em>late</em> — and a match both changes how the agent answers and sends the caller's own sentence to the manager number you configured. On the phone, somebody named on the desk reading the log is still what turns it into a change.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="hands-on-the-wheel" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Hands On The Wheel.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            A driver who has to read a screen to answer a question will either stop the truck or read it while moving. One costs you the hour. The other costs you much more, one day.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
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
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The driver speaks and FACE answers. Where is my next stop. Which gate. It is asked out loud and it comes back out loud, so the eyes stay on the road and the hands stay where they were. The call itself is an ordinary phone call and rides a telephony provider to get there; the audio socket into the building is authenticated, and everything that happens after it arrives happens on your machines. The speech is turned into text by the model server you run — the same single configurable inference endpoint the rest of FACE reasons through, carrying an audio-capable model, rather than a speech API with its own contract — and every conversational reply is spoken by a synthesiser running in the same process as the rest of FACE, from a voice embedded in the binary. No transcript ends up in somebody else's account. Two qualifiers belong in the same breath rather than in a footnote. The recording notice and the greeting that open the call are spoken in the provider's own voice, because they are read from the call-setup instructions before the socket into your building exists. And the transcription endpoint is one you configure, so where it points is something to check in a review rather than something a test guarantees.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                What the call leaves behind is the conversation itself, written down as it happens: each turn, who said it, against the call it belongs to. The hour at the gate is on the record at the gate rather than reconstructed at six o'clock. Six words are watched on both channels — <em>urgent</em>, <em>asap</em>, <em>emergency</em>, <em>broken</em>, <em>failing</em>, <em>late</em>. On the phone a match changes how the agent answers and sends the caller's own sentence to the manager number you configured. On an inbound WhatsApp or SMS the same match escalates the same way, and there a message that matched but reached nobody is written to the log saying so rather than passing as handled. The call gets the fact onto the record within minutes of it happening; somebody has to be reading the record.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Here is the line, and it matters more than the feature list. A voice turn does not write into your systems. It does not create the delay record, it does not update the delivery and it does not move the drop — there is no path from the call into your transport system, and a product that told you otherwise would be describing an integration it has not built. What the call does is get the fact out of the cab and onto the record while it is still accurate. A person on the desk reads it and makes the change.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                One more refusal, because it is the kind that usually gets hidden. Elsewhere in FACE you can attach a voice memo to a thread, and that attachment is not transcribed. Rather than letting the model improvise around it, the model is told outright that an audio attachment arrived, that its contents are unknown, and that it must not guess at what was said — and it is instructed to tell you the audio was not processed. A system that cannot hear something and says so is worth more than one that fills the gap in.
            </p>
        </div>
        <div>
            <h2 id="who-owns-this" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Who Owns This</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Three desks, and what each of them is holding today.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">The dispatch desk.</strong> Today a change means ringing round one truck at a time and hoping each one can pick up, and half the calls go to voicemail and get made again twenty minutes later. What changes is that a driver can ask and be answered out loud, and the call writes itself down. The desk still makes the change; it stops being the only route a fact can travel.</li>
                <li><strong class="text-stone-200">The depot manager.</strong> Today the day is written up at the end of it, from memory, if it gets written up at all, and the hour lost at a gate is the one you never bill for. What changes is that both sides of the conversation go to the call log as they happen, so the hour at the gate is on the record at the gate.</li>
                <li><strong class="text-stone-200">IT and information security.</strong> Today a voice product means asking whose account the transcript ends up in. What changes is that the speech is turned into text by the model server you already run, and every conversational reply is spoken inside the FACE process from a voice embedded in the binary. The phone leg is carried by a telephony provider, as any call is, and the recording notice and greeting are read in that provider&rsquo;s voice before the socket into your machines is open.</li>
            </ul>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-would-know-it-worked" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Would Know It Worked</h3>
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

{{< faq >}}
{
  "title": "Questions A Fleet Manager Asks",
  "description": "What comes up before anybody talks about a contract.",
  "questions": [
    {
      "question": "What does the driver have to do?",
      "answer": "Make an ordinary phone call and ask out loud. Where the next stop is, which gate, what the customer asked for. The answer comes back out loud, so there is no screen to read and no reason to pull over."
    },
    {
      "question": "Who carries the audio, and who sees the text?",
      "answer": "The leg between the cab and the building is carried by a telephony provider, the same as any other call your drivers make, and it carries that audio because it has to. The text is a different matter: the transcription and the reasoning that produces the answer happen on your machines, on the model server you already run, and the spoken reply is encoded there too."
    },
    {
      "question": "What happens when a driver says something urgent?",
      "answer": "Six words are watched, on the phone and on inbound WhatsApp or SMS alike: urgent, asap, emergency, broken, failing and late. A match changes how the agent answers and sends the caller&rsquo;s own sentence to the manager number you configured. On the text side, a message that matched and reached nobody is written to the log saying so, rather than passing as handled."
    },
    {
      "question": "What does the call leave behind?",
      "answer": "The conversation itself, written down as it happens: each turn, who said it, and the call it belongs to. The hour at the gate is recorded at the gate rather than reconstructed at six o&rsquo;clock. Somebody named on the desk reads it and makes the change, which is what keeps a spoken sentence and a changed delivery two separate events."
    },
    {
      "question": "Whose voice does the driver hear first?",
      "answer": "The telephony provider&rsquo;s. The recording notice and the greeting that open the call are read from the call-setup instructions, before the socket into your building is open. Every conversational reply after that is spoken from a voice embedded in the FACE binary, in the same process as the rest of it."
    },
    {
      "question": "What should we bring to a first conversation?",
      "answer": "One depot and a week of vehicle tracking data. Two of your own figures go with it: the minutes between a problem happening and the desk knowing, sampled over a month of late runs, and how much of the waiting time at gates you currently bill."
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
