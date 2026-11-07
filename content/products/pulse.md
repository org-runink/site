---
title: "Runink PULSE"
# Search and share-card text (CONTENT.md rules 1 and 3 apply): the <title> is
# seo_title verbatim, at most 60 characters; seo_description is the meta and card
# description, at most 155. Visible copy on the page is unchanged by these two.
seo_title: "Runink PULSE: answer leads first, spend less on agencies"
seo_description: "Runink PULSE finds the companies worth calling, drafts replies, campaigns and follow-ups, and shows which channel brings customers in. Your team approves."
description: "Runink PULSE is marketing software your own team runs: it finds leads, drafts the replies, campaigns and follow-ups, and shows which channel brings customers in. Your team decides what goes out. Priced per seat."
layout: "landing"
badge: "PULSE"
next_about: "Runink PULSE"
# Where every claim here comes from: the PULSE paper,
# content/blog/whitepapers/runink-pulse.md, the PULSE product documentation, and
# the behaviour the product actually ships. Nothing on this page goes beyond
# those. Every sentence has to be defensible from the product as it runs today;
# if the paper or the product changes, change this page with it. In particular,
# this page names no result, no customer and no figure that is not a published
# price.
#
# The name is spelled out as the PULSE paper's title and the product itself
# define it: Prescriptive Unified Lead & Social Engine (owner, 2026-09-26).
#
# Rewritten 2026-09-29 from the fixed `rp:` product-page template (layout:
# "product", still used by /products/tide/ and /river/) onto layout: "landing" —
# the same shortcode vocabulary content/products/face.md uses (hero,
# section-container, card-grid, card, figure, faq, cta). No new component was
# added anywhere on this page — every shortcode here already ships in
# layouts/shortcodes/, used the same way face.md uses it.
#
# Rewritten again 2026-10-03 for business value (owner: lead with the reader's
# daily burden and the cost line it hits, not with the technology). Each stage
# now reads: the burden, what PULSE does about it, who still decides, and which
# cost line it touches. No figures: the "work out your own figure" section tells
# the reader where to find theirs. The PULSE Lite quota copy in the FAQ is
# owner-approved wording; keep it exactly as it is. The prices are the price book of
# 2026-11-06 (data/pricing.json "pulse"; /products/pulse-pricing/ carries the cards).
#
# No screenshot. The screenshots that exist show an older interface filled with a
# real third party's profiles and photographs, which cannot go on a public page.
# The one image on this page, the "one brief becomes every channel" diagram, is
# the same drawn SVG the PULSE paper already carries
# (assets/figures/whitepapers/pulse-one-brief.svg) — a diagram, not a screenshot,
# and it holds no third-party data. The image this page would most like is the
# assistant's audit card mid-run, beside "One line to start"; it goes in only once
# one exists with no third-party data on it.
#
# The hero shows the PULSE persona (owner, 2026-10-31: each product gets its own
# cartoon persona; the Runink logo stays the company's). One source,
# assets/images/brand/pulse-persona.webp; Hugo writes the sizes. It is a mark, not a
# product image, so the note above about screenshots still stands.
#
# Refreshed 2026-10-10 against the shipped product, with every line checked
# against what it actually does. What was added: the one-line audit now says what
# each step records — where its result came from, and why a step that could not
# finish did not; each site-audit measure reports how much of it was measured;
# the second pass that checks each proposal against the evidence is described;
# and the measurement section says plainly that figures come only from the
# accounts the customer connects, and that a figure PULSE could not get is shown
# as a dash. What was corrected: Studio is now named by what it produces, which
# is written material; the sales agent is described on the outbound call, which
# is the path that is built; the connectors are named individually, because they
# are set up with a token the customer creates, not a one-click sign-in; and the
# channels that post as the company are named exactly. What was dropped: a
# connector that is not one, PULSE standing in for a design tool, and the
# suggestion that research is retrieved from an index. Ask before adding any of
# them back.
#
# Refreshed 2026-11-02 against PULSE Release 10 and its user guide
# (docs.runink.org/pulse): the page now uses the app's own names — Brand
# Analysis, Leads (with public tenders and Partners), Campaigns with each
# campaign's page, Studio with Download, and Settings → Integrations. Gone with
# the pages the app retired: the per-customer profile, the follow-up screen, the
# market view, the influencer list, TikTok, and the Android download. WhatsApp
# replies are described as the product ships them: off until an administrator
# turns them on.
#
# English only, like /river/ and /downloads/, so no translation is left behind; the
# homepage card that links here falls back to this page on /es/, /fr/ and /pt/ and
# says the page is in English.
image: "/images/products/pulse-og.jpg"
---

{{< hero
    headline="The lead who wrote at nine at night bought from whoever answered first."
    sub_headline="**Runink PULSE: Prescriptive Unified Lead & Social Engine.** Marketing software your own team runs. It finds the companies worth calling, drafts the reply, the campaign and the follow-up, and shows which channel brings customers in. Your team decides what goes out. You pay per seat, not per tool."
    primary_button_text="Book a consultation"
    primary_button_url="/#contact"
    secondary_button_text="Read the PULSE paper"
    secondary_button_url="/blog/whitepapers/runink-pulse/"
    persona="images/brand/pulse-persona.webp"
    persona_label="PULSE"
    size="normal"
    gradient-from="var(--rk-sunk)"
    gradient-to="var(--rk-ground)"
    gradient-angle="135"
>}}

{{< section-container class="pt-16 pb-0 relative z-10" id="what-is-runink-pulse" >}}
<div class="max-w-4xl mx-auto text-left space-y-4">
<h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight">What is Runink PULSE?</h2>
<p class="text-xl text-ink-2 leading-relaxed">Runink PULSE is marketing software from Runink for small and mid-size businesses and the people who sell and market for them. It finds the companies worth calling, drafts the reply, the campaign and the follow-up, and shows which channel brings customers in, while your team decides what goes out. It runs on Runink's shared machines, in your own cloud account or inside your own estate, and it is priced per seat, sold on its own.</p>
</div>
{{< /section-container >}}

{{< section-container class="py-16 relative z-10" >}}
<div class="max-w-5xl mx-auto">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
    <div class="border-l-2 border-signal pl-4">
      <span class="block text-xs font-bold uppercase tracking-[0.2em] text-signal mb-1">Diagnose</span>
      <p class="text-sm text-ink-2 leading-relaxed">Know whether your site and social pages bring anyone in.</p>
    </div>
    <div class="border-l-2 border-signal pl-4">
      <span class="block text-xs font-bold uppercase tracking-[0.2em] text-signal mb-1">Attract</span>
      <p class="text-sm text-ink-2 leading-relaxed">Find the next companies to call, with the first message drafted.</p>
    </div>
    <div class="border-l-2 border-signal pl-4">
      <span class="block text-xs font-bold uppercase tracking-[0.2em] text-signal mb-1">Create</span>
      <p class="text-sm text-ink-2 leading-relaxed">One brief becomes the posts, articles and emails for the month.</p>
    </div>
    <div class="border-l-2 border-signal pl-4">
      <span class="block text-xs font-bold uppercase tracking-[0.2em] text-signal mb-1">Retain</span>
      <p class="text-sm text-ink-2 leading-relaxed">See what each post brought in, and who may go quiet.</p>
    </div>
  </div>
  <p class="text-sm text-ink-3 mt-8">No channel publishes until you switch it on. Your customer lists stay on the machines your plan names, and no outside AI service reads them.</p>
</div>
{{< /section-container >}}

{{< section-container class="py-10" >}}

<div class="max-w-4xl mx-auto text-left space-y-6 relative">
<h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
Who PULSE is for.
</h2>

<p class="text-xl text-ink-2 leading-relaxed">
The owner of a small or mid-size business, and the people who sell and market for it. You know the week. Messages from new leads sit until somebody has a minute. Campaign copy gets written at night, after the real work. An agency retainer pays for routine posts. Several tools each charge per seat, and it is still hard to say which channel brought a customer in.
</p>

<p class="text-xl text-ink-2 leading-relaxed">
PULSE puts that work in one place. It is a separate product from FACE and from Runink TIDE, sold on its own.
</p>
</div>

<div class="max-w-7xl mx-auto mt-16">
{{< card-grid cols="3" >}}
{{< card
    icon="globe-alt"
    title="Runink PULSE"
    description="This page. Finding leads, answering them, and the material a marketing team publishes."
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
    title="Runink TIDE"
    description="A separate product, sold on its own. The operations layer for your engineering and data teams, on your servers, your cloud or ours, and the answer to where your data is processed and who can see it. It has its own paper."
    link="/blog/whitepapers/runink-tide/"
>}}
{{< /card-grid >}}
</div>

{{< /section-container >}}

{{< section-container class="py-10" >}}

<div class="max-w-4xl mx-auto px-4 mb-20">
<h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">Four jobs that eat your week, done from one brief.</h2>
<p class="text-xl text-ink-2 leading-relaxed">Each stage feeds the next from the same reading of your business. Nobody writes a fresh brief for every tool. What PULSE drafts goes to a review queue, and your team decides which channels it may go out on.</p>
</div>

<div class="max-w-7xl mx-auto px-4 space-y-32">

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div>
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">1. Diagnose</div>
        <h3 class="text-4xl font-bold text-white mb-6">You pay for a website. Is it bringing anyone in?</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Most owners cannot answer that without paying someone to look. PULSE looks for you. Give it your web address. It runs a check-up: it scores your site on nine measures, writes a plain diagnosis, and ranks what to fix first. The result opens on Brand Analysis, the page PULSE starts on.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Site score</span> <span class="text-slate-300">Each measure is a set of checks you can read. Can search engines read your pages? How fast do they load? Who links to you? Is there something to click and a way to buy? A check that needs a source you have not connected is set aside and listed by name, and the rest of the measure is weighed around it. Something nobody could measure does not lower your score — and each measure says how much of it was measured, so a high score on thin coverage cannot pass for a high score on full coverage. The weightings behind all nine are settings you can read, so you can disagree with one in particular rather than with the score in general.</span></li>
            <li><span class="text-signal font-bold block mb-1">Fixes as pull requests</span> <span class="text-slate-300">Connect your website repository in Settings → Integrations, and once your administrator has switched site fixes on, PULSE proposes each fix the site score found as a pull request. Your developer reviews it and merges it. PULSE never merges and never changes your main branch.</span></li>
            <li><span class="text-signal font-bold block mb-1">One line to start</span> <span class="text-slate-300">Type "Audit" and your web address into the assistant, or say it. PULSE reads your site, scores it and writes the diagnosis. Then it fills in the rest from that one reading: drafts waiting for your approval, a proposed campaign, a 30-day plan, content ideas for each kind of customer, the competitors and partners it found, and the first leads. It runs in minutes, and it keeps running if you close the page. Ask again within a day and you get that same audit back, with the date it ran on it, until you say run it again.</span></li>
            <li><span class="text-signal font-bold block mb-1">Every step says where it got that</span> <span class="text-slate-300">The audit comes back as a list of steps. A step that wrote something says whether it was read on the web, worked out by the model, or both, and shows the first address it read. A step that could not finish says why, in words, and the page it would have filled stays empty. Nothing is filled with something made up to look complete.</span></li>
            <li><span class="text-signal font-bold block mb-1">Brand Analysis</span> <span class="text-slate-300">One card per question, each with its own page: can people find you, in search and in AI answers; who you compete with and where you win; partners to contact; what people in your market are talking about; and how your business comes across. A card nobody could measure says "Not measured", never zero. Export the written diagnosis as a PDF and put it in front of your partners or your board.</span></li>
            <li><span class="text-signal font-bold block mb-1">What it is worth</span> <span class="text-slate-300">Opex. Fewer outside audits bought from an agency or consultant. Fewer hours spent guessing which fix matters most.</span></li>
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
        <h3 class="text-4xl font-bold text-white mb-6">Leads go cold while you are busy.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                A message lands on WhatsApp during a customer visit. A list of prospects waits for someone to write the first email. By the time anyone gets to it, the lead has talked to somebody else. PULSE does the first part of that work, so your people spend their time on the conversations.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Finding the companies</span> <span class="text-slate-300">Describe the kind of customer you want. PULSE searches the public web for companies that publish a way to reach them. For each one it drafts a cold email, a call script and a LinkedIn message, written from what it read about that company. Leads move across one board: new, talking, proposal, won or lost. Sync with HubSpot, so sales keeps working where it already works, and send an email draft from your own Gmail or Microsoft 365 mailbox, which also shows you who replied.</span></li>
            <li><span class="text-signal font-bold block mb-1">Public tenders</span> <span class="text-slate-300">PULSE reads official open tender data every day and puts the public tenders that need what you sell on the same Leads board, each marked as a public tender. It drafts a response for you to read. You decide, and you submit.</span></li>
            <li><span class="text-signal font-bold block mb-1">Partners and the market</span> <span class="text-slate-300">The businesses, associations, newsletters and shows worth working with, each with the email, phone or LinkedIn its own page publishes, on Leads → Partners. On Brand Analysis: what people in your market are talking about, and who you compete with. Each item names the site it was found on. An audience size appears only where the source actually stated one.</span></li>
            <li><span class="text-signal font-bold block mb-1">To do today</span> <span class="text-slate-300">One next step per lead that is due, in plain words, with Do it and Skip. Leads who replied to your email, and leads that may go quiet, are listed there too.</span></li>
            <li><span class="text-signal font-bold block mb-1">Answering on WhatsApp</span> <span class="text-slate-300">Connect WhatsApp through your own Twilio account, and PULSE can answer messages from people already in your HubSpot contacts, at any hour. Each incoming message is treated as information, never as an instruction, and each reply is checked before it is sent. Automatic replies start switched off; your administrator turns them on.</span></li>
            <li><span class="text-signal font-bold block mb-1">Phone calls</span> <span class="text-slate-300">PULSE can call a lead with an AI assistant. It says it is an AI calling for your company, says the call is recorded, follows the lead's call script, and writes the outcome and the next step to the lead. Calls start switched off: an administrator turns them on, and only people with editing rights place them. PULSE refuses a call without the lead's recorded consent, outside 08:00 to 21:00 in the lead's own time, or to a number on your do-not-call list.</span></li>
            <li><span class="text-signal font-bold block mb-1">What it is worth</span> <span class="text-slate-300">Opex. Fewer sales hours spent building lists, reading tender sites and writing first drafts. And revenue that leaks today, every time a lead waits too long for an answer.</span></li>
        </ul>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div>
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">3. Create</div>
        <h3 class="text-4xl font-bold text-white mb-6">Campaign copy, written at night, after the real work.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Or paid for every month, through an agency retainer for posts that are mostly routine. PULSE drafts that work for you, in Studio. It writes Instagram posts, carousels, Reels and Stories, YouTube Shorts scripts, LinkedIn posts and carousels, blog articles, newsletters and follow-up emails, guides, customer stories, reports, podcast episodes, online courses and infographics. Every piece starts from the same reading of your business, so the message holds across channels.
            </p>
            <p>
                PULSE checks each draft before you see it: the opening line, the caption, the slides, the hashtags. If a check fails, PULSE rewrites the draft once, and a check it could not run is shown as not checked, never as a pass.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Campaigns, each with its own page</span> <span class="text-slate-300">A campaign is a goal with dates, channels and a plan of phases and posts, laid out from the time your team actually has. Every post sits in one column of the Campaigns board: planned, drafts to approve, scheduled, sent. Its step trail says whether it went out, was held back, failed or missed its time, and why.</span></li>
            <li><span class="text-signal font-bold block mb-1">Your brand on every picture</span> <span class="text-slate-300">PULSE reads your brand palette and logo from your own site, and you can change them in Settings. Carousel slides, post images and video frames are drawn in those colours, with text colours checked for contrast.</span></li>
            <li><span class="text-signal font-bold block mb-1">Reels, Stories and Shorts</span> <span class="text-slate-300">Attach your own video, or approve the script and PULSE makes the short video from it: the lines drawn on upright frames in your colours, read aloud by your PULSE's speech service.</span></li>
            <li><span class="text-signal font-bold block mb-1">@mentions that are real</span> <span class="text-slate-300">An Instagram piece mentions only accounts PULSE has on record — your partners, your leads, or a name you gave it — and looks each one up on Instagram before tagging it.</span></li>
            <li><span class="text-signal font-bold block mb-1">Download, or let it post</span> <span class="text-slate-300">Download any approved piece as files you can post yourself: the pictures, the video and the caption. Or connect Instagram, YouTube, LinkedIn or your website, and with Autopilot on, an approved post goes out at the account's best time, measured from your own posts' results.</span></li>
            <li><span class="text-signal font-bold block mb-1">What it is worth</span> <span class="text-slate-300">Opex. Agency hours for routine copy. Evenings an owner spends writing. A separate scheduler and a separate writing tool, each with its own seat price.</span></li>
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
        <h3 class="text-4xl font-bold text-white mb-6">Which channel is bringing customers in? And are they staying?</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Winning a customer gets the attention. Keeping them pays the bills. Most small teams learn a customer has gone quiet when the renewal does not come. PULSE keeps the follow-up on a schedule, and keeps the numbers next to it.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Results, in plain words</span> <span class="text-slate-300">Each post's reach, views, reactions and comments as Instagram, LinkedIn and YouTube report them. Visits, ad clicks and spend from Google Analytics and Google Ads. Search clicks, positions and pages losing clicks from Google Search Console. All of it on Brand Analysis, with a PDF report over any period you name.</span></li>
            <li><span class="text-signal font-bold block mb-1">A figure it could not get stays blank</span> <span class="text-slate-300">PULSE shows only figures it actually read. A number it could not obtain says "Not measured". It is never rounded down to zero and never estimated, so a quiet channel and a channel nobody measured never look the same on the screen.</span></li>
            <li><span class="text-signal font-bold block mb-1">Ideas from what your market asks</span> <span class="text-slate-300">The topics your customers search for that your site does not cover, then post ideas for one kind of customer, one problem and one angle, each with the findings behind it.</span></li>
            <li><span class="text-signal font-bold block mb-1">Your 30-day plan</span> <span class="text-slate-300">Tasks week by week, a calendar by channel, and where you started against where you are, measured from your weekly check-ins. Leads that may go quiet show up on To do today, before the renewal, not after it.</span></li>
            <li><span class="text-signal font-bold block mb-1">What it is worth</span> <span class="text-slate-300">Opex. Ad spend kept on channels that convert, and taken off the ones that do not. Revenue kept, because a quiet customer gets a call in time.</span></li>
        </ul>
    </div>
</div>

</div>

{{< /section-container >}}

{{< section-container class="py-20 bg-stone-900" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="mb-16 max-w-3xl">
        <h2 class="text-4xl font-bold text-white mb-6 tracking-tight">Your team decides what goes out.</h2>
        <p class="text-xl text-ink-2 leading-relaxed">PULSE drafts, and your team decides what goes out. Every draft, whether a post, a cold email, a call script or a guide, waits for an approve or a discard. The switch that decides whether anything leaves on a channel is separate, and it starts off. Automatic replies, on WhatsApp or to comments, also start off, and stay off until someone turns them on.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">Channels start switched off</h3>
            <p class="text-slate-300">One main switch, then one per channel, decides what may publish. A channel that is off sends nothing, even an approved draft. Approving a draft says the content is right. Switching a channel on says it may go out. On the channels that post as the company itself — its own LinkedIn, its blog, its podcast — only the people the owner names by name can publish at all. Material held back is marked as held back, with the reason, so you can tell it apart from material that published and material that failed.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">A second pass before it reaches you</h3>
            <p class="text-slate-300">The agents propose. Before a prescription, a content idea, a campaign plan or a site fix is saved, PULSE's reviewer checks it against the evidence the run actually gathered. One the reviewer disagrees with is held back and listed as held back. One it could not rule on is kept and marked as such. Disagreement is never shown to you as agreement, and a held-back prescription never becomes a draft or a scheduled post.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">No outside AI service sees your lists</h3>
            <p class="text-slate-300">Your positioning, your customer lists and your pipeline are processed on the machines your plan names: your own servers or cloud account on Dedicated and Enterprise, Runink's shared machines on Lite. Runink runs its own model there. No outside company runs a database holding your working data, and none is sent a prompt about it.</p>
        </div>
    </div>

    <p class="text-lg text-ink-2 leading-relaxed mt-10">Who decides, what runs where, the rules every agent works inside, and how our controls map to the standards your auditors use, each with a link to the public documentation behind it: <a href="/trust/" class="text-signal underline decoration-signal/40 hover:decoration-signal">Trust &amp; Compliance</a>.</p>
</div>
{{< /section-container >}}

{{< section-container class="py-20" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="mb-16 max-w-3xl">
        <h2 class="text-4xl font-bold text-white mb-6 tracking-tight">One seat price, not a stack of subscriptions.</h2>
        <p class="text-xl text-ink-2 leading-relaxed">A scheduler, a writing tool, a lead list and an agency retainer each send their own invoice. PULSE is priced per seat, and the seat covers the work that person puts through it. Writing a second version of a campaign does not add to the price, so it gets tried.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">It runs where you put it</h3>
            <p class="text-slate-300">The same software runs on one workstation to try it out, and on one machine or several inside your own estate for daily use. PULSE Lite runs on Runink's shared machines instead. No outside AI service is called on any plan. PULSE opens in a web browser, in English, Spanish, French and Portuguese.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">No graphics card to buy</h3>
            <p class="text-slate-300">PULSE runs on ordinary processors. A trial needs a well-specified developer workstation, not a server purchase. That is capital you keep.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">Volume does not change the price</h3>
            <p class="text-slate-300">A team that writes ten pieces a month and a team that writes two hundred pay for the same seats. The price stays the same. On Lite, each seat gets 10 tasks a day at full speed; after that, tasks keep running at a slower pace until midnight in your time zone.</p>
        </div>
    </div>
</div>
{{< /section-container >}}

{{< section-container class="py-16" >}}
<div class="max-w-3xl mx-auto px-4">
    <div class="border-l-4 border-signal pl-6 space-y-4">
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-signal">Your numbers, not ours</p>
        <h2 class="text-2xl font-bold text-white">Work out what this costs you today.</h2>
        <p class="text-lg text-slate-300 leading-relaxed">
            This page names no return figure and no customer. The figure that matters is yours, and it sits in your own records. Add up last quarter's agency invoices for routine posts. Add every marketing tool you pay for per seat. Count the evenings someone spent writing copy. Check how long new WhatsApp and email leads waited for a first answer. Then run an audit of your own site and read your nine scores.
        </p>
        <p class="text-lg text-slate-300 leading-relaxed">
            The <a href="/blog/whitepapers/runink-pulse/" class="text-signal underline decoration-signal/40 hover:decoration-signal">PULSE paper</a> sets out the arithmetic, with every input read from your own invoices and systems.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< faq >}}
{
    "title": "The questions that actually get asked.",
    "description": "Straight answers to what buyers ask first.",
    "questions": [
        {
            "question": "Is PULSE the same thing as Runink FACE?",
            "answer": "No. They are separate products. PULSE is for marketing and sales: the check-up of your site and market, finding leads and public tenders, and the material a marketing team publishes. FACE reads logistics, fulfilment and claims records and drafts an action for a named person to approve. Nothing on this page is a FACE capability. Runink TIDE is a third product, also sold separately: the operations layer for your engineering and data teams, on your servers, your cloud or ours. Its paper describes it."
        },
        {
            "question": "How do I answer new leads faster?",
            "answer": "Take the first part of the work off your people. Describe the customer you want, and PULSE finds companies that match and drafts a cold email, a call script and a LinkedIn message for each. To do today lists one next step for each lead that is due, and the leads who replied to your email. Connect WhatsApp through your own Twilio account, and once your administrator turns automatic replies on, PULSE can answer people already in your HubSpot contacts at any hour, with each reply checked before it is sent."
        },
        {
            "question": "How do I spend less on an agency for routine posts?",
            "answer": "Draft the routine work yourselves, in Studio. PULSE writes Instagram posts, carousels, Reels and Stories, YouTube Shorts scripts, LinkedIn posts, blog articles, newsletters, guides, podcast episodes, courses and reports, in your brand's colours. Each campaign gets a dated plan of which post goes out on which channel and when. Every draft waits on the Campaigns board for your approval, and nothing goes out on a channel until someone switches that channel on. The seat price stays the same however many pieces you write."
        },
        {
            "question": "Can we run PULSE on our own servers?",
            "answer": "Yes. The same software runs on one workstation to try it out, and on one machine or several inside your own estate for daily use. It runs on ordinary processors, with no graphics card required, and no outside AI service is called. PULSE Lite runs on Runink's shared machines instead; the cost answer below lists each plan and where it runs."
        },
        {
            "question": "Does PULSE publish on its own, or do we?",
            "answer": "You decide. Every draft — a post, a cold email, a call script, a guide — waits for an approve or a discard. The control that decides whether anything leaves is separate. Every publishing channel stays off until someone switches it on, with one main switch and one per channel. A channel that is off sends nothing, whatever status a draft carries, and switching a channel on is the decision that lets material go out on it. On the channels that post as the company itself — its own LinkedIn, its blog, its podcast — only the people the owner names by name can publish at all. With Autopilot on for an account, an approved post waits for that account's best time; nothing you have not approved is queued. Automatic replies on WhatsApp go only to people already in your HubSpot contacts, and they start switched off until your administrator turns them on."
        },
        {
            "question": "Does it need training on our business first?",
            "answer": "No. There is nothing to label or upload in advance. When PULSE writes, it reads your own material at the moment of the question — your check-up, your answers about your business, your leads and your earlier work, held on the machines your plan names. Nothing about your business is baked into the model, which is the same file on your first day and your five hundredth."
        },
        {
            "question": "What happens when it cannot work something out?",
            "answer": "It says so. If a site-score check depends on a source you have not connected, that check is set aside and named, and the rest of the measure is weighed around it. The score is not quietly lowered by something nobody measured. In the one-line audit, each step records where its result came from — read on the web, worked out by the model, or both — and a step that could not finish gives the reason, while the page it would have filled stays empty. A source that failed is reported as failed, separate from one that did not apply. And a channel that is switched off stays off, even for approved material. That material is marked as held back, with a stated reason, so you can tell it apart from both published and failed."
        },
        {
            "question": "How do we know it is not making the numbers up?",
            "answer": "Because it only shows figures it read. Impressions, clicks, conversions and return come from the advertising and analytics accounts you connect, and nowhere else — an audit never writes a performance number. A figure PULSE could not obtain says \"Not measured\" rather than showing a zero or an estimate. A partner or show found by a check-up carries a score for how well it fits your subject, not an audience figure, and an audience size appears only where the source stated one. Every audit score opens out into the measures beneath it and then into the individual checks, so a number is always traceable to what was examined."
        },
        {
            "question": "How does it work with the systems we already run?",
            "answer": "Through Settings → Integrations, one card per account. Instagram, YouTube, LinkedIn and Google Search Console connect through the platform's own sign-in. Google Analytics and Google Ads take a key you create in Google Cloud, HubSpot takes an access token, and your website repository takes a GitHub token for that one repository. Your own Gmail, Microsoft 365 or mail server sends your emails. Each card says whether it is ready, or what is missing, and you disconnect from the same card. Tokens are stored encrypted and never shown again. Leads sync into HubSpot rather than PULSE trying to become your customer-record system, so sales keeps working where it already works."
        },
        {
            "question": "Where does our data go?",
            "answer": "Onto the machines your plan names: your own servers or cloud account on Dedicated and Enterprise, Runink's shared machines on Lite. Working data is kept in a database inside the application itself, copied continuously into file storage on those same machines, and restored from that copy when the application starts. No outside company runs a database holding your positioning, your customer records or your pipeline. No material is sent out to be trained on, and there is no account with an outside AI provider for it to be sent to."
        },
        {
            "question": "Does it need special hardware?",
            "answer": "No. PULSE runs on ordinary processors, with no graphics card required. A trial wants a well-specified developer workstation — a reasonable amount of memory, a decent number of processor cores and free storage — rather than a server purchase."
        },
        {
            "question": "Is there anything we can put in someone's hands today?",
            "answer": "PULSE itself. It opens in a web browser at your organisation's PULSE address, and the [getting-started guide](https://docs.runink.org/pulse/docs/getting-started/) walks through signing in and the first check-up."
        },
        {
            "question": "What does it cost?",
            "answer": "PULSE is priced by the seat: you pay for each person who uses it, and the seat covers the work that person puts through it. PULSE Lite runs on Runink's shared machines, where your work takes its turn: $65 a seat a month, or $55 a seat a month on an annual plan, for teams of one to nine. Each Lite seat gets 10 tasks a day at full speed; after that, tasks keep running at a slower pace until midnight in your time zone, when the count starts again. Dedicated is $109 a seat a month, for ten seats and up, running on runners in your own cloud account, which bills you for that compute directly. Enterprise, including deployments with no connection to the outside world, is quoted with you. PULSE, FACE and TIDE are each sold on their own subscription, so a PULSE seat is a seat in PULSE. Every plan, and what an automated voice agent costs by comparison, is on [the PULSE pricing page](/products/pulse-pricing/)."
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
