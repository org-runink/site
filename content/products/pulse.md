---
title: "Runink PULSE"
description: "Runink PULSE is one marketing application your own team operates: it audits your site and social presence, researches your market, finds leads and writes the material, with publishing off until you turn it on and the reasoning on hardware you control."
layout: "landing"
badge: "PULSE"
next_about: "Runink PULSE"
# Where every claim here comes from: the PULSE paper, content/blog/whitepapers/
# runink-pulse.md, and the pulse repository's README. Nothing on this page goes
# beyond what the paper says. If the paper changes, change this page with it.
#
# The name is spelled out as the PULSE paper's title and the pulse README define
# it: Prescriptive Unified Lead & Social Engine (owner, 2026-09-26).
#
# Rewritten 2026-09-29 from the fixed `rp:` product-page template (layout:
# "product", still used by /products/core/ and /river/) onto layout: "landing" —
# the same shortcode vocabulary content/products/face.md uses (hero,
# section-container, card-grid, card, figure, faq, cta). The owner's word for the
# previous version was that it "isn't that appealing"; face.md is the richest
# page of the four and the benchmark this page is now written against. No new
# component was added anywhere on this page — every shortcode here already ships
# in layouts/shortcodes/, used the same way face.md uses it.
#
# No screenshot. The screenshots in the pulse repository show an older interface
# filled with a real third party's profiles and photographs, which cannot go on a
# public page. The one image on this page, the "one brief becomes every channel"
# diagram, is the same drawn SVG the PULSE paper already carries
# (assets/figures/whitepapers/pulse-one-brief.svg) — a diagram, not a screenshot,
# and it holds no third-party data.
#
# English only, like /river/ and /downloads/, so no translation is left behind; the
# homepage card that links here falls back to this page on /es/, /fr/ and /pt/ and
# says the page is in English.
image: "/images/products/pulse-og.jpg"
---

{{< hero
    headline="Your marketing already has an agency's worth of work in it. It just has no one place to do it."
    sub_headline="**Runink PULSE** replaces the marketing patchwork — an agency, a scheduler, a CRM, a design tool, a text generator with your positioning pasted into it — with one application your own team operates, all from one shared understanding of your business."
    primary_button_text="Book a consultation"
    primary_button_url="/#contact"
    secondary_button_text="Read the PULSE paper"
    secondary_button_url="/blog/whitepapers/runink-pulse/"
    size="normal"
    gradient-from="var(--rk-sunk)"
    gradient-to="var(--rk-ground)"
    gradient-angle="135"
>}}

{{< section-container class="py-16 relative z-10" >}}
<div class="max-w-5xl mx-auto">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
    <div class="border-l-2 border-signal pl-4">
      <span class="block text-xs font-bold uppercase tracking-[0.2em] text-signal mb-1">Diagnose</span>
      <p class="text-sm text-ink-2 leading-relaxed">A scored read of your site and social presence.</p>
    </div>
    <div class="border-l-2 border-signal pl-4">
      <span class="block text-xs font-bold uppercase tracking-[0.2em] text-signal mb-1">Attract</span>
      <p class="text-sm text-ink-2 leading-relaxed">Market research, and leads found on the public web.</p>
    </div>
    <div class="border-l-2 border-signal pl-4">
      <span class="block text-xs font-bold uppercase tracking-[0.2em] text-signal mb-1">Create</span>
      <p class="text-sm text-ink-2 leading-relaxed">One brief becomes posts, articles, whitepapers and courses.</p>
    </div>
    <div class="border-l-2 border-signal pl-4">
      <span class="block text-xs font-bold uppercase tracking-[0.2em] text-signal mb-1">Retain</span>
      <p class="text-sm text-ink-2 leading-relaxed">Customer profiles, journey maps and 30-day follow-up.</p>
    </div>
  </div>
  <p class="text-sm text-ink-3 mt-8">Publishing off until you turn it on. The reasoning runs on hardware you control.</p>
</div>
{{< /section-container >}}

{{< section-container class="py-10" >}}

<div class="max-w-4xl mx-auto text-left space-y-6 relative">
<h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
PULSE, and what it is not.
</h2>

<p class="text-xl text-ink-2 leading-relaxed">
PULSE is a separate product from FACE and from CORE, sold on its own. It does not read your logistics or claims records, and it is not the operations layer your other applications run on. What it does: audit your website and social presence, research your market, find the companies worth talking to, and write the material — all from one shared understanding of your business.
</p>
</div>

<div class="max-w-7xl mx-auto mt-16">
{{< card-grid cols="3" >}}
{{< card
    icon="globe-alt"
    title="Runink PULSE"
    description="This page, and the whole of it. Market analysis, research, lead-finding and the material a marketing team publishes."
    link="/blog/whitepapers/runink-pulse/"
>}}
{{< card
    icon="map"
    title="Runink FACE"
    description="A separate product, not a PULSE feature. Logistics, fulfilment, claims, returns and the compliance work around them. It has its own paper."
    link="/blog/whitepapers/runink-face/"
>}}
{{< card
    icon="server-stack"
    title="Runink CORE"
    description="A separate product, sold on its own. The operations layer you run on your own hardware, and the answer to where your data is processed and who can see it. It has its own paper."
    link="/blog/whitepapers/runink-core/"
>}}
{{< /card-grid >}}
</div>

{{< /section-container >}}

{{< section-container class="py-10" >}}

<div class="max-w-4xl mx-auto px-4 mb-20">
<h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">Four stages, one shared understanding of your business.</h2>
<p class="text-xl text-ink-2 leading-relaxed">Each stage feeds the next from the same diagnosis, so nobody writes a fresh brief for every tool. And two things sit around all four: a review queue, and a publishing switch that starts off.</p>
</div>

<div class="max-w-7xl mx-auto px-4 space-y-32">

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div>
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">1. Diagnose</div>
        <h3 class="text-4xl font-bold text-white mb-6">Knowing where you actually stand.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                A web address goes in. Back comes a relevance score across nine measures — from search and AI visibility to trust, engagement and retention — a business diagnosis, and ranked recommendations you can act on from the same screen.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Site Audit</span> <span class="text-slate-300">Nine measures, each made of checks you can read: whether search engines can read your pages, how fast they load, who links to you, whether there is something to click and a way to buy. The weightings are settings, not fixed rules, and they re-balance around whichever data was actually available — a score never reflects something that could not be measured.</span></li>
            <li><span class="text-signal font-bold block mb-1">Multichannel diagnostic</span> <span class="text-slate-300">Your website, LinkedIn, Instagram and TikTok, read together and turned into a written business analysis you can export and put in front of a board.</span></li>
        </ul>
    </div>
    <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-signal-fill to-signal-fill-hover opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
        <div class="relative rounded-lg shadow-2xl border border-white/10 bg-ink/5 p-8">
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-signal mb-4">Nine measures</p>
          <ul class="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-300">
            <li>Search Visibility</li><li>AI Visibility</li>
            <li>Technical Foundation</li><li>Authority &amp; Trust</li>
            <li>Acquisition</li><li>Engagement</li>
            <li>Retention</li><li>Monetization</li>
            <li>Demographics</li>
          </ul>
        </div>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div class="order-1 md:order-2 md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">2. Attract</div>
        <h3 class="text-4xl font-bold text-white mb-6">Finding the people worth talking to.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Two things happen here: understanding the market, and finding specific companies in it. Both read the live public web through a browser that extracts what a page actually says, and your own material — your documents, your audit results, your prior work — through a search that combines exact and meaning-based matching.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Market research</span> <span class="text-slate-300">Trending topics in your sector, competitor channels worth watching, and the podcasts, publications and events where your subject belongs. Mark a result useful or not, and the next round learns from it — the improvement stays with your account.</span></li>
            <li><span class="text-signal font-bold block mb-1">Lead prospecting</span> <span class="text-slate-300">Describe a niche and PULSE searches the public web for matching companies. For each one it drafts a cold email, a call script and a LinkedIn message, written from what is known about that specific company. Leads move through a pipeline — new, contacted, qualified, won or lost — and synchronise with HubSpot, so sales keeps working where it already works.</span></li>
            <li><span class="text-signal font-bold block mb-1">Voice, and WhatsApp</span> <span class="text-slate-300">A voice sales agent handles conversation directly — press-to-talk in the console, listening and replying as the call happens, all on your own machines. For outbound calling, PULSE connects to a telephone exchange you host yourself. A lead can also be reached on WhatsApp through your own Twilio connection — optional, and the channel is simply off without one.</span></li>
        </ul>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div>
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">3. Create</div>
        <h3 class="text-4xl font-bold text-white mb-6">One brief, every channel.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                A single brief becomes LinkedIn posts, blog articles, whitepapers and courses, plus the six long-form generators in Studio — podcasts, short-form video, presentations, infographics and reports. All of it carries the same understanding of your positioning, because all of it draws on the same diagnosis. Generation streams as it happens, so a wrong angle is caught in the second paragraph, not on page nine.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Approval, not decoration</span> <span class="text-slate-300">Every piece carries one stated status: draft, waiting for review, approved, rejected, published, archived — so at any moment you can see what is waiting on you and what actually went out.</span></li>
            <li><span class="text-signal font-bold block mb-1">A 30-day plan</span> <span class="text-slate-300">Content Strategy produces a channel-by-channel plan, and the strategy planner turns it into a dated schedule — what publishes, on which channel, in which week.</span></li>
        </ul>
    </div>
    <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-signal-fill to-signal-fill-hover opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
        {{< figure src="/figures/whitepapers/pulse-one-brief.svg" alt="One sheet on the left, a single brief, opens out into a field of pieces whose shapes differ: long bars for written pieces, paired squares for pictures, tall narrow blocks for short video, broken runs for email. Every piece carries one status mark. A vertical line runs down the picture with a single ring in it, a tick, and only the pieces whose status mark is filled reach that ring; the ones that do not are drawn hollow and their strands stop short of the line. Past the ring the strands open into a dated grid of slots, the schedule of what publishes and when." class="relative rounded-lg shadow-2xl border border-white/10 bg-ink/5 p-4" >}}
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div class="order-1 md:order-2 md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">4. Retain</div>
        <h3 class="text-4xl font-bold text-white mb-6">Keeping what you fought to win.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Winning customers gets the attention and keeping them pays the bills. PULSE treats the second as a proper part of the work rather than an afterthought bolted onto a customer-record system.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Customer 360 and journey maps</span> <span class="text-slate-300">A living profile for a customer or a segment — what they care about, what they respond to, where they are in their relationship with you — mapped to the sequence of touches that account has had and the one that should come next.</span></li>
            <li><span class="text-signal font-bold block mb-1">Structured 30-day follow-up</span> <span class="text-slate-300">A weekly planner, task states you move, saved check-ins, and an evolution score with its history — so a cooling relationship shows up as a trend, not a surprise at renewal.</span></li>
            <li><span class="text-signal font-bold block mb-1">Metrics and Insights</span> <span class="text-slate-300">Impressions, clicks, conversions and return, day by day and split by channel, with a written reading of what the numbers mean. Content Gaps compares what you publish against your competitors and names the subjects your market is asking about that you have not addressed.</span></li>
        </ul>
    </div>
</div>

</div>

{{< /section-container >}}

{{< section-container class="py-20 bg-stone-900" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="mb-16 max-w-3xl">
        <h2 class="text-4xl font-bold text-white mb-6 tracking-tight">Nothing goes out until you say so.</h2>
        <p class="text-xl text-ink-2 leading-relaxed">Every draft — a post, a cold email, a call script, a whitepaper — arrives with a status and an approve and a reject against it. The control that actually decides whether anything leaves is separate and blunter than the approval queue, and it starts off.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">Channels start disarmed</h3>
            <p class="text-slate-300">A global switch, narrowed by one for each channel, decides what may publish. A channel that is off sends nothing, whatever status a draft carries — an approval is consent to the content, and switching a channel off is a statement about the channel.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">You watch it being written</h3>
            <p class="text-slate-300">Research and copy stream onto the screen as they are produced, so a wrong angle is caught in the second paragraph, not on page nine.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">Your material stays in</h3>
            <p class="text-slate-300">Your positioning, your customer lists and your pipeline are processed inside your own network. There is no managed database elsewhere holding your working data.</p>
        </div>
    </div>

    <p class="text-lg text-ink-2 leading-relaxed mt-10">Who decides, which models run, the rules every agent works inside, and how our controls map to the standards your auditors use, each with a link to the public documentation behind it: <a href="/trust/" class="text-signal underline decoration-signal/40 hover:decoration-signal">Trust &amp; Compliance</a>.</p>
</div>
{{< /section-container >}}

{{< section-container class="py-20" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="mb-16 max-w-3xl">
        <h2 class="text-4xl font-bold text-white mb-6 tracking-tight">A machine, not a meter.</h2>
        <p class="text-xl text-ink-2 leading-relaxed">The work runs on machines you own, on ordinary processors. Producing more material does not produce a bigger bill, so the second angle on a campaign gets tried.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">It runs where you put it</h3>
            <p class="text-slate-300">The same application runs on a workstation for evaluation, and on one machine or several working together inside your own estate for production. No outside AI service is called.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">Ordinary hardware</h3>
            <p class="text-slate-300">The reasoning runs on ordinary processors, with no specialist graphics chip required. An evaluation wants a well-specified developer workstation, not a server purchase.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">The cost of a machine</h3>
            <p class="text-slate-300">Because the machines are yours, a team that produces ten pieces a month and a team that produces two hundred are running the same hardware. That is what makes trying a second angle, or a second language, ordinary rather than rationed.</p>
        </div>
    </div>
</div>
{{< /section-container >}}

{{< section-container class="py-16" >}}
<div class="max-w-4xl mx-auto px-4">
    <div class="border-l-4 border-signal pl-6 space-y-4">
        <h2 class="text-2xl font-bold text-white">It arrives as part of the upcoming Runink Server.</h2>
        <p class="text-lg text-slate-300 leading-relaxed">
            PULSE is part of the same Runink Server build as Runink CORE — with FORGE inside it — and Runink FACE. A company standing up the Server will get PULSE already there, not a separate product to source and wire in afterwards. PULSE, FACE and CORE stay billed separately: what changes is that they arrive together.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< section-container class="py-16" >}}
<div class="max-w-3xl mx-auto px-4">
    <div class="border-l-4 border-signal pl-6 space-y-4">
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-signal">Drawn — not a measured result</p>
        <h2 class="text-2xl font-bold text-white">What this page deliberately does not say.</h2>
        <p class="text-lg text-slate-300 leading-relaxed">
            There is no return figure on it, no customer named, and no accuracy rate claimed. Everything above describes what PULSE does and who approves it, drawn from what the product actually runs — not a case study. The figure that matters is yours: run an audit of your own site and read your own nine scores, then work out what a piece of material costs you today. The <a href="/blog/whitepapers/runink-pulse/" class="text-signal underline decoration-signal/40 hover:decoration-signal">PULSE paper</a> sets out the arithmetic, with every input read from your own invoices and systems.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< faq >}}
{
    "title": "The questions that actually get asked.",
    "description": "Straight answers, including where the answer is no.",
    "questions": [
        {
            "question": "Is PULSE the same thing as Runink FACE?",
            "answer": "No. They are separate products. PULSE is a marketing engine: site and social audit, market research, lead prospecting and the material a marketing team publishes. FACE reads logistics, fulfilment and claims records and drafts an action for a named person to approve — nothing on this page is a FACE capability, and a FACE result is not a PULSE result. Runink CORE is a third product, also sold separately: the operations layer you run on your own hardware. Its paper describes it."
        },
        {
            "question": "Does PULSE publish on its own, or do we?",
            "answer": "You do. Every draft — a post, a cold email, a call script, a whitepaper — carries an explicit status and an approve or reject. The control that decides whether anything actually leaves is separate: every publishing channel is disarmed until it has been explicitly armed, by a global switch narrowed by one for each channel. A channel that is off sends nothing, whatever status a draft carries."
        },
        {
            "question": "Does it need training on our business first?",
            "answer": "No, and there is nothing to label or upload in advance. The model PULSE writes with lives on your own machine as a file, the same on your first day and your five hundredth. What makes the output yours is reading at the moment of the question: your site audit, your positioning documents, your prior material and your customer records are indexed on your machine, and the relevant passages are retrieved and placed into the brief as it is written, with the source travelling alongside. Deleting a document removes its influence entirely — nothing is left behind in the model."
        },
        {
            "question": "What happens when it cannot work something out?",
            "answer": "It says so. If a Site Audit measure depends on data that was unavailable, that measure is set aside and the rest are re-weighted around it, rather than the score being quietly depressed by something nobody measured. A source that failed is reported as failed, kept distinct from one that was simply not applicable. And a channel that has been switched off stays off even for approved material — content held back that way is recorded as held back, its own status, distinct from both published and failed, with a stated reason rather than silence."
        },
        {
            "question": "How does it work with the systems we already run?",
            "answer": "PULSE connects to the accounts you already have — your social channels, your advertising and analytics accounts, HubSpot, Mailchimp — configured and tested in the console before you rely on any of them, and disconnected from the same screen. Leads synchronise into your customer-record system rather than PULSE trying to become one, so sales keeps working where it already works."
        },
        {
            "question": "Where does our data go?",
            "answer": "Onto hardware you control. Working data is kept in a database inside the application itself, copied continuously into file storage you own, and restored from that copy when the application starts — there is no database run by somebody else holding your positioning, your customer records or your pipeline. No material is sent out to be trained on, and there is no account with an outside model provider for it to be sent to."
        },
        {
            "question": "Does it need special hardware?",
            "answer": "No. The reasoning runs on ordinary processors where no specialist graphics chip is present, and production installations run on ordinary processors alone. An evaluation wants a well-specified developer workstation — a reasonable amount of memory, a decent number of processor cores and free storage — rather than a server purchase."
        },
        {
            "question": "Is there anything we can put in someone's hands today?",
            "answer": "An Android build of the console is on the [downloads page](/downloads/). It is a debug-signed early-access build you install directly, not signed for the Play Store."
        },
        {
            "question": "What does it cost?",
            "answer": "PULSE is priced by the seat: you pay for each person who uses it, and the seat covers the work that person puts through it. PULSE Lite runs on Runink's shared machines, where your work takes its turn: $59 a seat a month, or $49 a seat a month on an annual plan, for teams of one to nine. Each Lite seat gets 10 tasks a day at full speed; after that, tasks keep running at a slower pace until midnight in your time zone, when the count starts again. Dedicated is $99 a seat a month, for ten seats and up, running on runners in your own cloud account, which bills you for that compute directly. Enterprise, including deployments with no connection to the outside world, is quoted with you. PULSE, FACE and CORE are each sold on their own subscription, so a PULSE seat is a seat in PULSE."
        }
    ]
}
{{< /faq >}}

{{< cta
    title="Bring your website and one campaign you never finished."
    description="Half an hour, with whoever owns marketing in the room. We will walk through what an audit of your own site says, and what the first piece of work would look like."
    primary_button_text="Book a consultation"
    primary_button_url="/#contact"
    secondary_button_text="Read the PULSE paper"
    secondary_button_url="/blog/whitepapers/runink-pulse/"
>}}
