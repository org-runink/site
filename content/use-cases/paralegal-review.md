---
title: "Which Clause Governs This, and Who Checked"
description: "A routine question settled by a paragraph takes a day and a half to answer, so it gets answered from memory instead. The clause and the record arrive together, cited. The reading is the software's. The judgement is not."
layout: "use_case"
badge: "Compliance Agent"
product: "Runink FACE"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Paralegal and compliance review</p>
<p class="text-base text-stone-500 font-medium mb-10">This is a scenario for <strong class="text-stone-300">Runink FACE</strong>, the Fulfilment Autonomous Claims Engine. The agent doing this work is written to a stated role &mdash; <em class="text-stone-300">paralegal and compliance officer</em> &mdash; and that role is the ceiling on what it does, not a flourish. It reads, it cites, and it hands the reading to somebody who decides.</p>

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">It finds the clause and the record, and shows you both.</strong> Nothing comes back asserted. Every finding arrives with the passage it was read from and the record it was held against.</li>
<li><strong class="text-stone-200">It writes notes, not changes.</strong> It is built to hand back a next step in business language &mdash; draft this letter, raise this ticket, escalate this to the data protection officer. It is explicitly forbidden from writing a fix into your systems.</li>
<li><strong class="text-stone-200">&ldquo;Checked and clean&rdquo; and &ldquo;could not check&rdquo; are different entries.</strong> Most tools collapse both into a green tick. Here the second one is a state in its own right, with three separate ways of arriving at it &mdash; nothing came back, what came back could not be parsed, what came back was empty &mdash; and the wording it produces says outright that this is not a finding that the area is compliant. It is the entry an audit is actually hunting for.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="a-lookup-that-should-take-ten-minutes" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">A Lookup That Should Take Ten Minutes.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            Somebody asks whether the agreement permits this. A paragraph somewhere settles it. Finding the paragraph takes a day and a half, so the question gets answered from memory.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The question arrives mid-afternoon and it is never exotic. Can we send this data to that partner. Does the contract allow them to sub-contract the handling. Is the retention period we are running the one we committed to. Somewhere in sixty pages there is a clause that answers it outright.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Finding it means knowing which agreement is current, which amendment supersedes which, and whether the rule being enforced is in the contract at all &mdash; or in a spreadsheet somebody built to implement the contract and then left running for four years.
            </p>
            <p class="text-lg text-stone-400 font-bold text-sm uppercase tracking-widest text-stone-300 mb-6">
                The answer exists. Locating it is the whole cost.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                So it gets answered from recollection, or it gets sent outside for a routine lookup that never needed outside help. And when an auditor asks next year whether the check was done, the honest answer is usually &ldquo;probably&rdquo; &mdash; which is not an answer you want to give twice.
            </p>
        </div>
        <div>
            <h2 id="who-this-is-for" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Who This Is For</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Three people who are asked to be sure, and are given a day and a half to be sure in.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">The paralegal or contracts analyst.</strong> What lands today is the mid-afternoon question &mdash; can we send this data to that partner, may they sub-contract the handling &mdash; and a stack of agreements in which one paragraph settles it. What changes is where the day goes. The passage and the record it was held against arrive together, cited, and the work left is reading them and saying what they mean.</li>
                <li><strong class="text-stone-200">Compliance and risk, and the officer who owns the framework.</strong> What lands today is a rule you believe is in a contract and is in fact in a spreadsheet somebody built four years ago and left running. What changes is that the rule as written and the rule as operating are put side by side, with the document and the record both named, so the conversation starts at the difference rather than at the search.</li>
                <li><strong class="text-stone-200">Internal audit.</strong> What lands today is the question of whether a check was done, and an honest answer of &ldquo;probably&rdquo;. What changes is that a check that ran and found nothing and a check that could not run are written down as different entries, each carrying who read it and what they decided. The second entry is the one an audit is actually hunting for.</li>
            </ul>
        </div>
        <div>
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                The documents are read where they already sit: PDFs, Word files, decks on a shared drive or an SFTP drop. Spreadsheets are read including their formulas, cell by cell, because in a great many organisations the operative rule is not in the policy document at all. It is in a cell.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Macros are a different matter, and the way that is handled is the best argument on this page. Reading VBA out of a workbook is not implemented. So rather than report that a file contains no macros — which would be a claim, made by code that never opened the archive — the result carries a flag saying the macros were not inspected. "Macros: 0" and "nobody looked" are different facts, and the second one is the one that should send somebody to open the file by hand. A tool that cannot tell you those apart has quietly answered the question for you.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Rules pulled out of those documents are then held against your records and your configuration. The question always has the same shape: here is what was written down, here is what is actually happening, and here is the point where the two part company. The finding cites both sides, so the first thing a reviewer does is judge the case rather than go looking for the source.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                What comes back is a next step in business language, never a change to your systems. That is a hard constraint in how the agent is written, not a gap we are presenting as a virtue: it is instructed not to produce SQL or code fixes, and to return a functional remediation instead &mdash; draft the dispute letter, raise the ticket with the data team, escalate this to the officer who owns it.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                You point it at whichever framework your people already work to &mdash; data protection, payment card, information security, insurance contract reporting, your own internal standards. What it returns is a citation and a comparison. Whether you meet the obligation is not a thing software can tell you, and we are not going to pretend the output is a verdict.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                It reads and it cites. It does not advise. Nothing it produces is legal advice, and it is not a replacement for your paralegal, your compliance officer or your counsel &mdash; the narrow thing it removes is the trip outside for a lookup that was always answerable in the building. The person reading the citation is still the person who decides what it means, and it is their decision that goes on the record, under their name.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Two small honesties in the record. Patterned personal details &mdash; email addresses, phone numbers, card numbers, national insurance numbers, IP addresses &mdash; are stripped out of logs and diagnostic output before they are written, so the act of investigating does not quietly create a new exposure. Names and street addresses are not in that list, because they have no pattern to match on, and the redaction step carries no test of its own; take it as what it is built to do rather than as a guarantee. And when a dataset could not be read at all, the record says compliance was <em class="text-stone-300">not assessed</em>, which is deliberately not the same entry as an assessment that ran and failed. Collapsing those two would make &ldquo;the check came back clean&rdquo; and &ldquo;the check never happened&rdquo; look identical, and they need different answers from different people.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-lg border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-will-know-it-worked" class="text-xl font-black text-stone-200 mb-4 tracking-tighter uppercase italic">How You Will Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. Write down where you stand today, because the baseline is gone for good the moment things improve.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Time from a routine question to a cited answer.</strong> Take ten questions from last quarter that a clause settled. Measure from when somebody asked to when somebody could point at the paragraph &mdash; not to when an answer was given.</li>
                <li><strong class="text-stone-200">How many were answered from memory.</strong> Of the same ten, count the ones where nobody actually re-opened the document. Then count the ones that went outside, and what the waiting cost you in days rather than in fees.</li>
                <li><strong class="text-stone-200">Where the operative rule actually lives.</strong> Pick five rules you believe are in contracts. Check whether what is being enforced is the contract, an amendment, or a spreadsheet. Most organisations find at least one spreadsheet, and it is usually load-bearing.</li>
                <li><strong class="text-stone-200">Whether you can show a check happened.</strong> Take a control you assert is checked regularly and try to produce the evidence for one specific month. How hard that is, is the finding.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring one contract and a question your team answered from memory.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="mb-2">
            <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-600 text-stone-400 text-[10px] font-black uppercase tracking-[0.25em]">
                <span class="inline-block w-2 h-2 rounded-full border border-stone-400"></span>Drawn
            </span>
            <span class="ml-2 text-xs font-black uppercase tracking-[0.25em] text-stone-500">not measured &middot; posture self-declared</span>
        </p>
        <p class="text-base text-stone-500 font-medium mb-4">
            The afternoon question, the sixty-page agreement and the four-year-old spreadsheet above are drawn to show the shape of the work. They are illustrations, not accounts of things that happened, and no lookup time, hit rate or saving on this page is a measured result. Runink publishes no such figures and no customer names.
        </p>
        <p class="text-base text-stone-500 font-medium mb-4">
            <strong class="text-stone-300">This is not legal advice and it is not a compliance certification.</strong> Naming a framework means the software was pointed at it to read and compare against &mdash; it does not mean the software assesses you as compliant with it, and it does not mean Runink is certified against it. FACE's own posture is <strong class="text-stone-300">SOC&nbsp;2&ndash;oriented</strong>: a design intention we declare ourselves, not a completed audit and not a certificate. Where the difference between those matters to you, ask us for the posture document rather than taking a word off a web page.
        </p>
        <p class="text-base text-stone-500 font-medium">
            The role the agent is written to is paralegal and compliance officer, and the work it does is reading, structuring and citing. It holds no professional standing, it exercises no judgement you are entitled to rely on, and it is not a substitute for a qualified person. A named person reads what it found, decides, and that decision stays on the record.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< faq >}}
{
  "title": "Questions A Legal And Compliance Team Asks First",
  "description": "What it reads, what it hands back, and where the judgement stays.",
  "questions": [
    {
      "question": "What does it read, and where does it read it?",
      "answer": "Your own documents, where they already sit: agreements and their amendments, policies, procedure notes, PDFs, Word files and decks on a shared drive or an SFTP drop. Spreadsheets are read including their formulas, cell by cell, because in a great many organisations the rule actually being applied is not in the policy document. It is in a cell.<br><br>What comes back from a reading names the file it came from, so a citation leads to a page rather than to an assertion."
    },
    {
      "question": "Is what it produces legal advice?",
      "answer": "It is a citation and a comparison, and it is read by a person who decides what it means. What comes back is the passage from your own document set beside the record or the configuration it was held against, and the point where the two part company.<br><br>Nothing it produces is legal advice, and it is not a substitute for your paralegal, your compliance officer or your counsel. It holds no professional standing and no authority of its own. The narrow thing it changes is the trip outside for a lookup that was always answerable in the building — the reading is the software's, the judgement is the qualified person's, and it is their decision that goes on the record under their name."
    },
    {
      "question": "Can it fix what it finds?",
      "answer": "It writes the next step for a person to take, in business language: draft this letter, raise this ticket with the data team, escalate this to the officer who owns it. That is a hard constraint in how the agent is written — it returns a functional remediation rather than a change to your systems.<br><br>The practical value of that is who ends up holding the pen. A finding that arrives as a written step goes to somebody who can weigh it against what else is true that week, instead of arriving as an alteration somebody has to discover and unpick."
    },
    {
      "question": "What does it do when it cannot check something?",
      "answer": "It records that it could not, in those words, and keeps it apart from a clean result. There are three ways of arriving there — nothing came back, what came back could not be read, what came back was empty — and the wording it produces says outright that this is not a finding that the area is compliant.<br><br>Handling those two as one entry is how &ldquo;the check came back clean&rdquo; and &ldquo;the check never happened&rdquo; come to look identical on a dashboard. They need different answers from different people, so they are written down as different things."
    },
    {
      "question": "We work to a framework. Does a clean run mean we comply with it?",
      "answer": "A clean run is a comparison, not a verdict, and the distinction is worth being exact about. You point the software at whichever framework your people already work to — data protection, payment card, information security, insurance contract reporting, your own internal standards — and what it returns is a citation and a comparison against that text.<br><br>Whether you meet an obligation is a judgement, and it stays with your compliance officer, your data protection officer and your auditor. Naming a framework here also says nothing about Runink's own standing: it is not a claim that Runink holds a certification under SOC 2, ISO 27001, ISO 42001 or any other scheme. We would rather you heard that from us than from somebody reading our copy back to you."
    },
    {
      "question": "What can we show an auditor next year?",
      "answer": "The passage that was read and the file it came from, the record or the configuration it was held against, the difference between them, the step that was written, and the person who read it, what they decided and when.<br><br>That is the difference between evidence and recollection. A control you assert is checked regularly is only demonstrable if you can produce the working for one specific month, and that working is kept as the work is done rather than assembled afterwards."
    }
  ]
}
{{< /faq >}}

{{< section-container class="py-12" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="text-center">
        <a href="{{< contacturl >}}" class="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 hover:-translate-y-1" style="background-color: var(--rk-signal-fill); color: var(--rk-on-signal-fill);">
            Book a consultation
        </a>
    </div>
</div>
{{< /section-container >}}
