---
title: "Customer Data Privacy and Emissions Reporting"
description: "Operating a system quietly writes personal data into its own logs, and the emissions report takes a quarter to assemble. What the software reads for each, what it hands to the person accountable, and where a check it could not run says so."
layout: "use_case"
badge: "Compliance Auditor"
badgeColor: "#10b981"
product: "Runink FACE"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Compliance and emissions reporting</p>
<p class="text-base text-stone-500 font-medium mb-10">This is a scenario for <strong class="text-stone-300">Runink FACE</strong>, not for the core platform underneath it. That is worth saying plainly, because compliance sounds like a platform concern: the checks described here read FACE's own records of your shipments and reports, and they are part of FACE rather than an add-on to the infrastructure.</p>

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">Personal details do not reach the logs.</strong> Email addresses, phone numbers, card numbers, national insurance numbers and IP addresses are stripped out of log and diagnostic output before it is written, so the trail a system leaves behind does not become a second copy of the data.</li>
<li><strong class="text-stone-200">That is a property of the platform, not a report you run &mdash; and it has no tests.</strong> The stripping happens on the logging path underneath every service, at every place a service writes a line. We will also tell you that the redaction function itself carries no test of its own, because a list of what a regular expression is supposed to catch is not evidence that it catches it. Read the list as a description of intent, not as a certification.</li>
<li><strong class="text-stone-200">The emissions figure is one published road factor times a lane distance &mdash; and the card is demo-only today.</strong> Not weights, not modes, not a model. A single well-to-wheel factor for a diesel heavy-goods vehicle, applied to the lane distances in the routing data, with the method written on the figure. Today that routing data is a seeded sample file, so a connected instance shows no emissions card at all. Sea and air are not covered, and where there is no distance data the card does not appear rather than an estimate standing in for one.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="two-reports-nobody-has-time-to-build" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">Two Reports Nobody Has Time To Build.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Privacy and emissions look like different problems. They are the same problem: records spread across systems that only a person joining them by hand can answer for.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A customer's name and address are needed to deliver the parcel. They are not needed on a carrier's dashboard, in a report sent to a partner, or in the copy of the file somebody pulled for a meeting. But the field travels with the record, and it keeps going.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Nobody plans this. It happens because the shortest way to answer a question is to export what you have, and what you have has the personal details still in it.
            </p>
            <p class="text-lg text-stone-400 font-medium font-semibold text-signal tracking-wide font-bold text-sm">
                You cannot protect what you cannot see leaving.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                The emissions report has the same shape. The numbers you need — how much moved, how far, by what means — are all in your own shipping records. They are just in several systems, in several formats, and pulling them together is a quarter of somebody's year.
            </p>
        </div>
        <div>
            <h2 id="who-this-is-for" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Who This Is For</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Two reports, three desks, and the same question underneath both: can you show your working.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">The data protection officer, and compliance and risk.</strong> What lands today is a customer's name and address that were needed once to deliver a parcel and have been travelling with the record ever since &mdash; into an export, a partner report, a log file nobody reads until something has gone wrong. What changes is where the trail stops. Personal details are stripped out of log and diagnostic output before it is written, on the path underneath every service rather than in a report somebody remembers to run.</li>
                <li><strong class="text-stone-200">IT and information security.</strong> What lands today is a question you can answer only by counting: which of your services write application logs, and which of those put the output through any redaction at all before it is stored or shipped. What changes is that the answer is a property of how the software is built, described in ordinary sentences you can hold a code review against, so the security conversation is a description rather than a negotiation.</li>
                <li><strong class="text-stone-200">Internal audit, and whoever answers for the report.</strong> What lands today is a request to explain why a figure is what it is, months after the person who assembled it moved on. What changes is that the method travels with the figure in the same sentence, and that a check which could not run is written down as its own entry rather than passing quietly as a clean result.</li>
            </ul>
        </div>
        <div>
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                On the privacy side the mechanism is narrower than it is usually sold, and worth stating exactly. Every service writes its logs and diagnostics through a shared redaction step that strips email addresses, phone numbers, card numbers, national insurance numbers, IP and hardware addresses out of the text before it lands, along with named fields — passwords, tokens, secrets, licence keys, webhook URLs — wherever they appear in a structured payload. The point is that operating a system does not quietly create a second copy of the personal data inside it — the place breaches are found late, and the place nobody thinks to look. What it does <em>not</em> do is scan your reports or your dispatch screens, decide a name should not be on one, or tell you who saw it. There is no screen scanner and no exposure finding here; if a page told you otherwise it was describing something that does not exist.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                And one thing we are not going to let a bullet list hide. That redaction has no tests of its own. The ordering inside it is careful — card numbers are matched before phone numbers, so that a phone pattern cannot swallow a card — and it is called from every service that writes a line, but nobody has written a test that proves it catches what it claims to catch. A rule with no check is a comment. We would rather you heard that from us than found it in a due-diligence pack.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                For emissions, be exact about what the figure is made of, because the category is not. It is one published road-freight factor — well-to-wheel, for a diesel heavy-goods vehicle — multiplied by a lane distance taken from the routing data rather than modelled, and annualised over a stated number of working days. The method travels with the figure, in the same sentence, so an auditor reads the assumption at the same moment they read the number. What it is not is a weight-and-mode model: sea and air are not in it, and a lane whose distance was never measured yields nothing rather than a guess. It is also, today, a demo-only card: the lane distances it multiplies are read from a seeded sample file, behind the same switch that lights the demo-data badge. An instance with nothing connected produces no emissions card rather than a worked example with your name on it, and on an instance with your own systems connected the card stays absent until that path is built.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                There used to be an abatement rate on this too — a share by which a changed lane was said to cut emissions, described as well established and sourced to nothing. It was deleted, and there is now a test whose only job is to fail if anybody puts a reduction rate back. A counterfactual is not something a distance and a factor can support, and the cheapest way to keep that true was to make the absence enforceable rather than remembered.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Both keep a record of their own working. When an auditor asks why a figure is what it is, or when a regulator asks who saw a customer's address, the answer comes from the record instead of from the memory of whoever built the spreadsheet.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                The record also keeps apart the two answers people usually run together. &ldquo;We checked this and found nothing&rdquo; and &ldquo;we could not read this, so it was never checked&rdquo; are written down as different things. The second one is the finding an audit is actually looking for, and it is the one a green tick normally swallows.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-will-know-it-worked" class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-signal-fill to-signal-fill-hover mb-4 tracking-tighter uppercase italic drop-shadow-lg">How You Will Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. Write down where you stand today, because the baseline is gone for good the moment things improve.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Days of work in your reporting cycle.</strong> Ask the people who build the emissions report how many days it took them last year, and how many of those days were spent finding numbers rather than checking them.</li>
                <li><strong class="text-stone-200">How much of the report you can source.</strong> Count the share of your figures that trace to a shipping record you can point at, against the share that rests on an estimate nobody can now defend.</li>
                <li><strong class="text-stone-200">Where personal details actually sit.</strong> Take a sample of the reports and screens your partners and carriers see. Count how many carry a name, a phone number or an address. Most teams have never counted this.</li>
                <li><strong class="text-stone-200">How much of your own log estate is redacted at all.</strong> Count the services that write application logs, then count the ones whose output goes through any redaction step before it is stored or shipped to a log provider. This is the baseline the privacy half of this page speaks to, and it is the one most teams can answer in an afternoon and would rather not.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring last year's report and a sample of partner-facing screens.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="text-base text-stone-500 font-medium mb-4">
            The exposures and the reporting cycle above are drawn to show the shape of the work. They are not accounts of a customer engagement, and nothing on this page is a measured result.
        </p>
        <p class="text-base text-stone-500 font-medium">
            Two things this page is not claiming. FACE is <strong class="text-stone-300">SOC&nbsp;2&ndash;oriented</strong>, which is a design intention we declare ourselves &mdash; it is not a completed audit and it is not a certification. And nothing here makes you compliant with anything. The software finds the record, shows the rule it was read against, and hands both to the person who is accountable. Whether you meet an obligation is a judgement that stays with your compliance officer, your DPO and your auditor, and we would be lying to you if we suggested otherwise.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< faq >}}
{
  "title": "Questions A Compliance Officer Asks First",
  "description": "What the privacy half actually does, what the emissions figure is made of, and what this page is not claiming.",
  "questions": [
    {
      "question": "What keeps personal details out of our logs?",
      "answer": "One redaction step, sitting on the logging path underneath every service rather than in a tool somebody runs afterwards. Every service writes its logs and diagnostics through it, and it strips email addresses, phone numbers, card numbers, national insurance numbers, and network and hardware addresses out of the text before it lands. Named fields go too — passwords, tokens, secrets, licence keys, webhook URLs — wherever they appear in a structured payload.<br><br>The ordering inside it is deliberate: card numbers are matched before phone numbers, so a phone pattern cannot swallow a card. Read that list as a description of what the step is built to catch. It is a description of the mechanism, not a certificate, and we would rather you heard it in those terms."
    },
    {
      "question": "Does this scan our dashboards and exports for exposed personal data?",
      "answer": "The mechanism is narrower than the category is usually sold, and it is worth stating exactly what it is. It works on what your own systems write down about themselves: logs, diagnostics and the structured payloads that go with them, cleaned on the way out so that operating a system does not quietly create a second store of the personal data inside it. That is where breaches are found late and where nobody thinks to look.<br><br>What you are buying here is that trail being clean by construction, at every place a service writes a line. Deciding who should be able to see a customer's address on a partner-facing screen is a policy question about your own systems, and it stays with the people who own those systems."
    },
    {
      "question": "What is the emissions figure actually made of?",
      "answer": "One published road-freight factor — well-to-wheel, for a diesel heavy-goods vehicle — multiplied by a lane distance taken from the routing data rather than modelled, and annualised over a stated number of working days. The method travels with the figure in the same sentence, so an auditor reads the assumption at the moment they read the number.<br><br>Be clear about the edges of that, because the category is not. It is road freight: sea and air are outside it. A lane whose distance was never measured yields nothing rather than a guess. And the lane distances behind the card today come from a sample file, so what you are looking at is the method shown rather than a reading of your own lanes. There was once an abatement rate here as well — a share by which a changed lane was said to cut emissions, sourced to nothing — and it was deleted, with a test whose only job is to fail if anybody puts one back."
    },
    {
      "question": "What happens when a check could not run?",
      "answer": "It is written down as its own entry: compliance was not assessed, in those words, kept deliberately apart from an assessment that ran and found nothing. A quantity nobody measured is held as unmeasured with a reason rather than rounded to zero.<br><br>Collapsing those into one green tick is how &ldquo;we checked this and found nothing&rdquo; and &ldquo;we could not read this, so it was never checked&rdquo; come to look identical in a report. The second is the finding an audit is actually looking for, and it is the one that usually gets swallowed."
    },
    {
      "question": "A regulator asks who saw a customer's address. Who answers?",
      "answer": "You do, from the record rather than from memory. Both halves of this page keep their own working — what was read, what rule it was read against, what was found, who looked at it and when — so the answer to a supervisory question is retrieval rather than a reconstruction project across four systems.<br><br>The person accountable is still yours. What changes is how long it takes them to be able to answer, and whether the answer rests on documents or on somebody's recollection of a Tuesday."
    },
    {
      "question": "Does any of this make us compliant, or certify anything?",
      "answer": "Compliance is a judgement, and it stays with the people who hold it. What the software does is find the record, show the rule it was read against, and hand both to the person who is accountable — your compliance officer, your data protection officer, your auditor. Whether the obligation is met is theirs to decide, and we would be lying to you if we suggested otherwise.<br><br>The same distinction applies to us. FACE's own posture is SOC 2–oriented, which is a design intention we declare ourselves: it is not a completed audit, and it is not a statement that Runink holds a certification under SOC 2, ISO 27001, ISO 42001 or any other scheme. Where that difference matters to you, ask us for the posture document rather than taking a word off a web page."
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
