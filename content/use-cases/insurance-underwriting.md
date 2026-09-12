---
title: "Your Adjusters Spend the Day Gathering, Not Deciding"
description: "The policy wording, the loss report, the reserve history and the authority limit for a claim that size sit in four places. They arrive joined, with a drafted next step and the reading it rests on. The underwriter still decides."
layout: "use_case"
badge: "Finance Domain"
product: "Runink FACE"
date: "2024-05-20T00:00:00Z"
author: "Runink"
---

{{< section-container class="py-8" >}}
<div class="max-w-5xl mx-auto px-4">

<p class="text-xs font-black uppercase tracking-[0.25em] text-stone-500 mb-2">Runink FACE &middot; Insurance, inside the Finance domain</p>
<p class="text-base text-stone-500 font-medium mb-10">This is a scenario for <strong class="text-stone-300">Runink FACE</strong>, the Fulfilment Autonomous Claims Engine. Insurance is not a separate product or a separate module: FACE types claims, reserves, premiums, deductibles, settlements and underwriting records into its <strong class="text-stone-300">Finance</strong> domain, on the reasoning that a claim is a reserve held against a policy.</p>

<h2 id="in-short" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6 mt-8">In Short</h2>
<ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6 mb-12">
<li><strong class="text-stone-200">The file is assembled. It is not judged.</strong> The wording, the loss documents, the reserve movements and the authority limit that applies at that value arrive in one place, joined to the claim they belong to.</li>
<li><strong class="text-stone-200">Every reading says where it came from.</strong> Text lifted out of a document comes back with the file it was read from and the method used to read it, so a figure in the draft can be traced to a page rather than taken on trust. What it does not come back with is a per-figure confidence score &mdash; there is a confidence number on the response and it is a fixed one, which means it tells you nothing, and we would rather say that than let you read it as a quality signal.</li>
<li><strong class="text-stone-200">The decision is not the software's to make.</strong> It drafts the next step. An underwriter or a claims lead approves it, rewrites it or throws it out, and their name stays on the record beside what they decided.</li>
</ul>

    <div class="text-center mb-16">
        <h2 id="the-gathering-is-the-job-the-judgement-should-be" class="text-5xl md:text-6xl font-black !text-white text-white drop-shadow-md italic tracking-tighter uppercase mb-6">The Gathering Is The Job. The Judgement Should Be.</h2>
        <p class="text-xl text-stone-400 font-bold leading-relaxed">
            An adjuster's morning goes on finding the wording, the loss report and last quarter's reserve movement. The part that actually needed their training takes ten minutes at the end of it.
        </p>
    </div>

    <div class="flex flex-col gap-12 mb-20">
        <div>
            <h2 id="where-it-goes-wrong" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Where It Goes Wrong</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                A claim comes in. The policy wording sits in a document system. The loss report is a PDF somebody emailed on Friday. The reserve history is in the policy administration system. The authority limit that applies to a claim of this size is in a procedure note, and the current version of that note is not obvious. Joining the four is most of the work and none of the skill.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                So the large files get the full treatment and the rest get handled on a partial reading of the record by somebody experienced enough to usually be right. &ldquo;Usually&rdquo; is carrying a great deal of weight in that sentence, and nobody wants to be the one who writes down how much.
            </p>
            <p class="text-lg text-stone-400 font-bold text-sm uppercase tracking-widest text-stone-300 mb-6">
                The bottleneck is not judgement. It is assembly.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Where underwriting is delegated, the same problem arrives as paper. The schedules come back monthly. Reading them against what the delegation agreement actually permits is a rules-against-records job at a volume no team reads all of, and the accountability does not move just because the decision did.
            </p>
        </div>
        <div>
            <h2 id="who-this-is-for" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">Who This Is For</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Three desks that answer for a file they did not have time to read in full.
            </p>
            <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">Claims operations &mdash; the adjuster and the claims lead.</strong> What lands today is a file in pieces: the wording in a document system, the loss report in Friday's mail, the reserve history in the policy administration system, and an authority limit written in a procedure note whose current version is not obvious. What changes is that those four arrive joined to the claim, with one drafted next step and the reading behind it, so the ten minutes that needed their training are not the last ten minutes of the morning.</li>
                <li><strong class="text-stone-200">The underwriting manager who delegated authority.</strong> What lands today is a monthly schedule from the agent, and reading it against what the delegation agreement actually permits is a rules-against-records job at a volume no team gets through. What changes is that the terms you wrote are held against the schedule you were sent, and each place the two part company is named with the clause and the record both cited.</li>
                <li><strong class="text-stone-200">Compliance and risk, and internal audit.</strong> What lands today is a question about a decision taken months ago, answered by reconstructing it across several systems. What changes is that approvals and refusals are both kept as they happen, carrying who decided and what they changed &mdash; and that the authority limit as documented can be set beside the limit as configured, which is the comparison that finds the threshold raised during a backlog and never put back.</li>
            </ul>
        </div>
        <div>
            <h2 id="what-happens-instead" class="text-3xl font-black italic tracking-tighter uppercase !text-white text-white drop-shadow-md mb-6">What Happens Instead</h2>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Insurance records are recognised as insurance records. A claims extract out of a policy administration system is typed by its vocabulary &mdash; claim, reserve, adjuster, premium, deductible, settlement, payout &mdash; rather than being filed wherever its most generic column happened to point. This is a real failure we had to fix: a whole claims dataset once landed in operations because one of its columns was called &ldquo;status&rdquo;.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Documents are read where they already are: a PDF on an SFTP drop, a Word file in a shared drive, the spreadsheet whose formulas quietly implement a rate rule nobody has written down — and the formulas are read, cell by cell, not just the values they happen to be showing. What comes back carries the file it was read from and the method that read it, so a figure in a draft leads back to a page.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                What it does not carry is a usable confidence on the reading, and that is the kind of thing we would rather you heard here than discovered. The extraction returns one score for the batch and that score is a constant: it is the same whether every page came out cleanly or every page failed. So it is not a quality signal, it should not be shown to a handler as one, and a blurred scan is still a document somebody has to open. Treat the extraction as having found the page for you, not as having verified what is on it.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                Then the written rule is held against the record, and every finding takes the same shape: here is what the document says, here is what the file shows, here is where the two part company. Does the wording cover this. Were the documents the procedure requires actually in the file. Was the handler inside the authority that applies at that value. The comparison is only as good as the rule you gave it to compare against — it is reading your clauses, not a library of insurance law — and where it finds a disagreement it cites the clause and the record both, so the first question in review is about the case rather than about where the numbers came from.
            </p>
            <p class="text-lg text-stone-400 font-medium mb-6">
                What it does not do is underwrite. It does not price a risk. It does not accept or decline. It does not set a reserve, and it does not settle anything. It assembles the file, drafts one proposed next step, and shows what it read to get there. An underwriter or a claims lead makes the call. If you are shopping for software that makes the call instead, this is not it &mdash; and you should ask hard questions of anything that says it is.
            </p>
            <p class="text-lg text-stone-400 font-medium">
                Approving the drafted step is what sends it. Declining it is recorded too, which is the part most systems lose. And where the step has a leg with nothing implemented behind it — a write into a policy administration system, say — the response names that leg as not executed rather than reporting the action as done, so the file never shows a step as taken that was only approved. Months later, <em class="text-stone-300">who decided this, and on what basis</em> is answered out of the file rather than out of somebody's memory of a Tuesday.
            </p>
        </div>
        <div class="bg-sheet p-8 rounded-2xl border border-stone-800/80 shadow-2xl">
             <h3 id="how-you-will-know-it-worked" class="text-xl font-black text-stone-200 mb-4 tracking-tighter uppercase italic">How You Will Know It Worked</h3>
             <p class="text-lg text-stone-400 font-medium mb-6">
                Every figure below is yours, not ours. Write down where you stand today, because the baseline is gone for good the moment things improve.
             </p>
             <ul class="text-lg text-stone-400 font-medium space-y-4 list-disc pl-6">
                <li><strong class="text-stone-200">How much of a file is gathering.</strong> Take a sample of claims closed last quarter. Ask the handler to split their time on each one into finding things and judging things. Most teams have never asked, and the answer tends to surprise the people who manage them.</li>
                <li><strong class="text-stone-200">How many files were decided on a partial record.</strong> In the same sample, count the ones where the wording was not actually re-read, or the authority limit was assumed rather than checked. This is an uncomfortable number. It is also the one that matters.</li>
                <li><strong class="text-stone-200">The gap between the written rule and the enforced rule.</strong> Put your authority limits as documented beside your authority limits as configured. If a threshold was raised during a backlog, find out whether anybody ever lowered it again.</li>
                <li><strong class="text-stone-200">Days from a delegated schedule arriving to somebody reading it.</strong> Where you delegate underwriting. Measure it as a gap, not as a total, and count the schedules nobody opened at all.</li>
             </ul>
             <p class="text-sm text-stone-500 font-bold uppercase tracking-widest text-xs mt-6 text-center">Bring one closed claim file and your delegated authority schedule.</p>
        </div>
    </div>

    <div class="border-l-2 border-stone-700 pl-5 mb-16">
        <p class="mb-2">
            <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-600 text-stone-400 text-[10px] font-black uppercase tracking-[0.25em]">
                <span class="inline-block w-2 h-2 rounded-full border border-stone-400"></span>Drawn
            </span>
            <span class="ml-2 text-xs font-black uppercase tracking-[0.25em] text-stone-500">not measured</span>
        </p>
        <p class="text-base text-stone-500 font-medium mb-4">
            Runink's published work is in logistics and operations. The claim, the adjuster's morning and the delegated schedule above are drawn to show the shape of the arrangement &mdash; they are illustrations of how it works, not accounts of things that happened. There are no recovery rates on this page, no settlement amounts, no cycle times and no customer names, because we have not measured them.
        </p>
        <p class="text-base text-stone-500 font-medium">
            Nothing here is an approval, an authorisation or a certification of anything. The software reads records and drafts; it holds no delegated authority, it is not a regulated actor, and using it does not satisfy an obligation on your behalf. Where a decision must be made by a person with authority to make it, that person makes it and the record says who they were.
        </p>
    </div>
</div>
{{< /section-container >}}

{{< faq >}}
{
  "title": "Questions An Insurer Asks Before Buying",
  "description": "What it reads, who decides, and what it does not claim to be.",
  "questions": [
    {
      "question": "What does it need from a claim file?",
      "answer": "The wording, the loss documents, the reserve movements and the authority limit that applies at that value — read where they already sit. A PDF on an SFTP drop, a Word file on a shared drive, an extract from the policy administration system, the spreadsheet whose formulas quietly implement a rate rule nobody has written down. The formulas are read cell by cell, not just the values they happen to be showing that day.<br><br>A claims extract is recognised as claims data by its own vocabulary — claim, reserve, adjuster, premium, deductible, settlement, payout — rather than filed wherever its most generic column happened to point."
    },
    {
      "question": "Who makes the decision on a file?",
      "answer": "An underwriter or a claims lead. What the software produces is an assembled file and one proposed next step, with the reading it rests on attached. A person approves it, rewrites it or throws it out, and their name stays on the record beside what they decided.<br><br>Refusals are kept as carefully as approvals, which is the half most systems lose. Where a leg of an approved step has not been carried out — a write into a policy administration system, say — the reply names that leg as not executed rather than reporting the action as done, so the file never shows a step as taken when it was only approved."
    },
    {
      "question": "How do we check a figure that appears in a draft?",
      "answer": "Follow it back. Text lifted out of a document comes back with the file it was read from and the method used to read it, so a figure in a draft leads to a page in a document rather than to a black box.<br><br>One thing to hear from us rather than discover later: the extraction returns a single confidence number for a batch, and that number is a constant. It is the same whether every page came out cleanly or every page came out badly, so it is not a quality signal and should never be shown to a handler as one. Read the extraction as having found the page for you. A person still reads the page."
    },
    {
      "question": "What happens when the wording and the file disagree?",
      "answer": "The finding says so in the same shape every time: here is what the document says, here is what the file shows, here is the point where the two part company. Does the wording cover this. Were the documents the procedure requires actually in the file. Was the handler inside the authority that applies at that value.<br><br>Both sides are cited, so the first question in review is about the case rather than about where the numbers came from. And the comparison is only as good as the rule you gave it: it is reading your clauses and your procedures, not a library of insurance law."
    },
    {
      "question": "We delegate underwriting. What does it do with the schedules?",
      "answer": "It holds the delegation agreement against the schedules the agent sends back, which is a rules-against-records comparison at a volume that is exactly why the reading gets sampled today. Each disagreement comes back naming the clause and the record it was read from, and it waits for a person.<br><br>The accountability does not move because the decision did. You still answer for what was decided under the agreement, and what this changes is how much of the schedule actually gets read before you have to."
    },
    {
      "question": "Does using this satisfy a regulatory obligation?",
      "answer": "Obligations stay with the people and the firms that hold them. The software reads records, compares them against the rules you gave it, and drafts; a person with the authority to make the decision makes it, and the record says who they were.<br><br>Be precise about frameworks too, because the distinction is the one that matters in a supervisory conversation. Pointing the software at a framework means it was given that text to read and compare against. It is not a statement that Runink holds a certification under SOC 2, ISO 27001, ISO 42001 or anything else, and no page of ours says otherwise. A vendor careless about that distinction in a brochure will be careless about it in an audit, and you would be the one holding the finding."
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
