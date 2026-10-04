---
title: "Runink FACE"
# Search and share-card text (CONTENT.md rules 1 and 3 apply): the <title> is
# seo_title verbatim, at most 60 characters; seo_description is the meta and card
# description, at most 155. Visible copy on the page is unchanged by these two.
seo_title: "Runink FACE: freight overcharges and claims, caught in time"
seo_description: "For freight, claims and operations teams. Runink FACE reads your invoices and claim files, finds the overcharge and the expiring claim, and drafts the fix."
image: "/images/face/cockpit.png"
description: "For logistics, freight, claims and operations teams. FACE reads the invoices, orders, carrier records and claim files you already keep, finds the overcharge, the claim about to expire and the broken rule, and drafts the next step for a named person to approve. It runs on your own servers or cloud account, or on Runink's shared machines to start, and no outside AI service is called."
layout: "landing"
# /products/ used to be this page's alias while the section index was not
# rendered. It renders now (content/products/_index.md), so the alias is gone.
badge: "FACE"
# badgeColor removed, not re-pointed. It held #7c3aed, a pre-migration vendor
# violet that is not a Runink colour (DESIGN.md §2: colour has exactly two jobs,
# signal and category, and both are tokens in assets/css/tokens.css). Nothing
# reads badgeColor on a layout: "landing" page either — the consumers are
# layouts/_default/feature.html and the use-cases carousel, neither of which
# renders this page — so the field is deleted rather than given a new value. If
# a listing ever needs a colour for FACE, the category is logistics:
# --rk-cat-logistics-ink / --rk-cat-logistics-lift. Not a literal.
#
# Docs architecture: All Runink docs live at docs.runink.org/<product>/. The
# hero's tertiary_button_url below points at TIDE's DevEx docs (sessions, MCP
# tools, agent fleet) rather than a FACE-specific docs tree. That note used to
# sit as a bare '#' comment inside the {{< hero >}} shortcode's own parameter
# list, which Hugo's shortcode-argument parser does not accept as a comment
# (unlike frontmatter, which is plain YAML) — it broke `hugo build` outright.
---

{{< hero
    headline="The claim nobody had a morning for is still money you are owed."
    sub_headline="**Runink FACE: Fulfilment Autonomous Claims Engine.** For logistics, freight, claims and operations teams, it reads the invoices, orders, carrier records and claim files you already keep. It finds the overcharge, the claim about to expire and the rule somebody broke, and drafts the next step. A named person approves it. Run it on your own servers or cloud account and your records never leave them. On every plan, Runink's shared machines included, no outside AI service sees them."
    primary_button_text="Book a consultation"
    primary_button_url="/#contact"
    secondary_button_text="Read the FACE paper"
    secondary_button_url="/blog/whitepapers/runink-face/"
    tertiary_button_text="📖 Technical reference"
    tertiary_button_url="https://docs.runink.org/core/docs/devex/"
    size="normal"
    gradient-from="var(--rk-sunk)"
    gradient-to="var(--rk-ground)"
    gradient-angle="135"
>}}

{{< section-container class="pt-16 pb-0 relative z-10" id="what-is-runink-face" >}}
<div class="max-w-4xl mx-auto text-left space-y-4">
<h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight">What is Runink FACE?</h2>
<p class="text-xl text-ink-2 leading-relaxed">Runink FACE is software from Runink for logistics, freight, claims and operations teams. It reads the invoices, orders, carrier records and claim files you already keep, finds the overcharge, the claim about to expire and the rule somebody broke, and drafts the next step for a named person to approve. It runs on your own servers or cloud account, or on Runink's shared machines to start, with no outside AI service; it is licensed per person who uses it, sold on its own.</p>
</div>
{{< /section-container >}}

{{< section-container class="py-20 relative z-10" >}}

<div class="max-w-4xl mx-auto text-left space-y-6 relative">
<h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
Your operation already wrote down what went wrong.
</h2>

<p class="text-xl text-ink-2 leading-relaxed">
An entry held at the port for a missing paper while the daily charge runs. A pallet that came back and was never graded. A freight claim still inside its filing window that nobody had the morning to assemble. A reefer drifting warm overnight. Each one was written down first, in a system you already run. Then it was read late, read by sample, or not read at all.
</p>

<p class="text-xl text-ink-2 leading-relaxed">
That gap costs you in three places. Money you were owed and never asked for. Skilled people doing clerical work. And outside help you pay for again and again. Here is the work FACE takes off the desk, and who still decides.
</p>
</div>

<div class="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
        <h3 class="text-2xl font-bold text-white mb-4">Overcharges nobody challenges</h3>
        <p class="text-slate-300">To dispute one freight invoice, somebody pulls the carrier's receipt, matches it to the weighbridge reading, finds the rate that applied that day and drafts the letter. That takes most of a morning, so only the big ones get done. The rest are paid.</p>
        <p class="text-slate-300 mt-4"><span class="text-signal font-bold">What FACE does:</span> it reads the invoices and the records behind them, checks them against the rules you work to, and assembles the case with every record attached. Your freight-audit analyst reviews it and decides whether to send it.</p>
        <p class="text-slate-300 mt-4"><span class="text-signal font-bold">What it is worth:</span> recoveries that never appear in your accounts, because nobody asked for them. And the analyst's mornings back.</p>
    </div>
    <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
        <h3 class="text-2xl font-bold text-white mb-4">Claims that run out of time</h3>
        <p class="text-slate-300">A damaged load is money back only inside the filing window. When building the file costs more than the claim is worth, the small claims quietly expire.</p>
        <p class="text-slate-300 mt-4"><span class="text-signal font-bold">What FACE does:</span> it gathers the claim, the policy, the reserve and the records, and drafts the action. An adjuster decides, on the file FACE put in front of them.</p>
        <p class="text-slate-300 mt-4"><span class="text-signal font-bold">What it is worth:</span> less leakage. When a file is cheap to build, smaller claims become worth filing.</p>
    </div>
    <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
        <h3 class="text-2xl font-bold text-white mb-4">Paperwork typed in twice</h3>
        <p class="text-slate-300">Spreadsheets, scanned pages and invoices arrive, and somebody keys them into another system. Every retyped figure is a chance for a typo, and somebody pays to fix it later.</p>
        <p class="text-slate-300 mt-4"><span class="text-signal font-bold">What FACE does:</span> it reads a spreadsheet properly, formulas and all. It transcribes a scanned page on the machines FACE runs on, not at an outside service. Where a page is unusable, it says so instead of guessing.</p>
        <p class="text-slate-300 mt-4"><span class="text-signal font-bold">What it is worth:</span> fewer hours of data entry and less rework.</p>
    </div>
    <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
        <h3 class="text-2xl font-bold text-white mb-4">The same report, rebuilt every Monday</h3>
        <p class="text-slate-300">An analyst pulls the same exports, pastes them into the same sheet and answers the same question every week. Nothing new is learned, and the week has already started.</p>
        <p class="text-slate-300 mt-4"><span class="text-signal font-bold">What FACE does:</span> you set the question up once and it runs on the schedule you choose. Each run keeps a record of what it read and the steps it took, so you can check it later.</p>
        <p class="text-slate-300 mt-4"><span class="text-signal font-bold">What it is worth:</span> analyst hours spent on the answer, not on the spreadsheet.</p>
    </div>
    <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
        <h3 class="text-2xl font-bold text-white mb-4">Carrier checks done in a spreadsheet</h3>
        <p class="text-slate-300">Before you trust a new carrier or consignee, somebody searches the web, copies what they find into a sheet and hopes it is current. A customs ruling or a published tariff gets the same treatment.</p>
        <p class="text-slate-300 mt-4"><span class="text-signal font-bold">What FACE does:</span> once your admin turns web research on, it searches from the machines FACE runs on, reads the pages, and attaches what it read to the finding. A person makes the call.</p>
        <p class="text-slate-300 mt-4"><span class="text-signal font-bold">What it is worth:</span> fewer hours of copy and paste. No research subscription billed per question, and no outside vendor keeping a list of the names you checked.</p>
    </div>
    <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
        <h3 class="text-2xl font-bold text-white mb-4">The consultant hired again for the same analysis</h3>
        <p class="text-slate-300">Last quarter's forecast or what-if study lives in a slide deck. To run it again on new numbers, you pay someone to rebuild it.</p>
        <p class="text-slate-300 mt-4"><span class="text-signal font-bold">What FACE does:</span> it runs the forecast on your own order history and states the method it chose and why. It lays out what a change would collide with before you commit. Both run again whenever you ask, on your own records.</p>
        <p class="text-slate-300 mt-4"><span class="text-signal font-bold">What it is worth:</span> outside analysis you stop paying for twice.</p>
    </div>
</div>

<div class="max-w-4xl mx-auto mt-16 text-left space-y-6">
<p class="text-xl text-ink-2 leading-relaxed">
FACE is one product, sold on its own. Two other names appear on this site. They are separate products, each with its own price.
</p>
</div>

<div class="max-w-7xl mx-auto mt-10">
{{< card-grid cols="3" >}}
{{< card
    icon="map"
    title="Runink FACE"
    description="This page. Freight, fulfilment, forecasting, claims, returns and the compliance work around them."
    link="/blog/whitepapers/runink-face/"
>}}
{{< card
    icon="globe-alt"
    title="Runink PULSE"
    description="A separate product, not a FACE feature. Market research and the material a marketing team publishes. It has its own paper."
    link="/blog/whitepapers/runink-pulse/"
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
<h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">Nine kinds of work, in three groups your operation already knows.</h2>
<p class="text-xl text-ink-2 leading-relaxed">What is coming and how it moves. What happens when it goes wrong. And being able to show, afterwards, why you did what you did.</p>
</div>

<div class="max-w-7xl mx-auto px-4 space-y-32">

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div>
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">1. The forward flow</div>
        <h3 class="text-4xl font-bold text-white mb-6">Plan it, hold it, move it.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Three questions decide the week: how much is coming, whether it is on the shelf, and how it gets there. Planning, buying and dispatch usually answer them in three systems, on three different days. When the answers disagree, the fix is air freight.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Demand forecasting</span> <span class="text-slate-300">Your own order history is put through the steps a statistician would run by hand. Two kinds of forecast are tried, and the one that did better on your past data wins. What comes back names the method, the test it was chosen by, and the points that did not fit. With fewer than five data points it declines and says so. The planner argues from a stated method, not from seniority, and nobody is paid to rebuild it next quarter.</span></li>
            <li><span class="text-signal font-bold block mb-1">Inventory fulfilment</span> <span class="text-slate-300">Stock and fulfilment records are read from the systems that hold them — your database, your warehouse platform, your ERP, your spreadsheets, your file storage. They are set against the orders you have already promised. A shortfall shows up while ordering is still routine, before it becomes air freight. Every one of those reads is read-only by design: the query is checked before it is sent, so a connection cannot write to your system of record. The F in FACE is fulfilment.</span></li>
            <li><span class="text-signal font-bold block mb-1">Route optimisation</span> <span class="text-slate-300">A lane is sent to the routing service you configure, and the distance and time it returns come back with the request. If no routing service is set up, or it returns nothing, the answer is the word unavailable. You never get a blank card a dispatcher could read as a route of zero.</span></li>
        </ul>
    </div>
    <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-signal-fill to-signal-fill-hover opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
        {{< figure src="/images/face/cockpit.png" alt="The cockpit's evidence panel: citations, saved hypotheses, active rules and the action queue, each named and each stated as empty on an instance with nothing connected" class="relative rounded-lg shadow-2xl border border-white/10" >}}
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div class="order-1 md:order-2 md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">2. When it goes wrong</div>
        <h3 class="text-4xl font-bold text-white mb-6">The exception arrives named.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Three kinds of bad news: damage on site, goods coming back, and money being claimed. Each is written down somewhere before anybody acts. Each has its own path through FACE, not a note stuck to an order.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Reactive logistics</span> <span class="text-slate-300">A picture reaches FACE one of three ways: a photo taken on a handheld at the dock, text a device has already read off a label, or a video feed you point it at. FACE names what was damaged and where — the pallet, the crate, the container door — not just a severity score. It can then raise an alert on the screen everyone is watching, and the alert says exactly what it is: a request, sent to whoever is subscribed. A sensor type FACE does not recognise is refused rather than quietly filed as a camera.</span></li>
            <li><span class="text-signal font-bold block mb-1">Reverse logistics</span> <span class="text-slate-300">A return is sorted on its own record: what came back, what condition it is in, and where it should go next. Returns have their own path, because the cost of a return is decided in the hour somebody grades it.</span></li>
            <li><span class="text-signal font-bold block mb-1">Insurance underwriting and claims</span> <span class="text-slate-300">Claims, reserves, premiums, deductibles and settlements are records FACE reads like any other: a claim is a reserve against a policy. It assembles the file and drafts the action. It does not make the underwriting decision — an adjuster does, on the file FACE put in front of them.</span></li>
        </ul>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div>
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">3. Before you commit, and after you are asked</div>
        <h3 class="text-4xl font-bold text-white mb-6">Being able to show the reasoning.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Two of the hardest conversations in an operation are the one before a change and the one months after it. Both need the same thing: the records the decision rested on, still joined up. Without them, you pay somebody to dig them out again.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Supply chain management</span> <span class="text-slate-300">Your orders, suppliers, sites and shipments are joined into one picture, even when the systems behind them were never joined. That picture stays current as the records change.</span></li>
            <li><span class="text-signal font-bold block mb-1">Test a change before you commit to it</span> <span class="text-slate-300">State a change — a lane a week late, a supplier dropped, a different reserve — and the rules it touches. FACE lays out the case: which rules the change runs into, in what order, and each result tied to the rule behind it. It is reasoning you can argue with, not a number to accept. It changes nothing, and the decision stays with the person accountable for it.</span></li>
            <li><span class="text-signal font-bold block mb-1">Paralegal and compliance</span> <span class="text-slate-300">A compliance assistant whose stated role is paralegal. It reads policy documents, the rules taken from your own procedures, and the system's own logs. It cites the rule and the records behind a finding, and drafts the fix — the letter, the ticket, the notice. It reads and cites. A person decides.</span></li>
        </ul>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div class="order-1 md:order-2 md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">The approval gate</div>
        <h3 class="text-4xl font-bold text-white mb-6">The drafted action waits. Approving is what sends it.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                All nine end in the same place. A finding is held as one specific proposed action, with the rule and the records attached. A named person approves, edits or rejects it. That decision is written down with their name on it — who approved, when, and what they changed. When the auditor or the customer asks why, the answer is already assembled.
            </p>
            <p>
                A new instance starts with an empty queue. FACE does not arrive holding findings about you. It holds none until it is connected to something and something is found, and it will show you an empty queue rather than fill one.
            </p>
            <p>
                Approving is what sends the drafted action. The reply says which parts actually ran. Where a step could not run, the reply names that step and the reason. That holds on every reply, including one where some of the work went out and some did not. It is the difference between a system that reports success and one that tells you what it did.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Your procedures, written down once</span> <span class="text-slate-300">The rules you already work to — the day you stop waiting on a carrier, the duplicate purchase order, the vendor request with nothing behind it — are stated once and checked against every record. They are no longer remembered by whoever is on shift.</span></li>
            <li><span class="text-signal font-bold block mb-1">Why it fired, on which records</span> <span class="text-slate-300">Afterwards you can open a finding and read the rule, the records underneath it and the reasoning that joined them. A drafted letter nobody can check is not worth signing.</span></li>
            <li><span class="text-signal font-bold block mb-1">Documents arrive as documents</span> <span class="text-ink-2">A spreadsheet is read properly — the cells, the formulas behind them and the named ranges — because that is where the working usually is. A scanned page is transcribed on the machines FACE runs on, not at an outside service. Where a page comes back unusable, the result says so instead of returning a confident blank.</span></li>
            <li><span class="text-signal font-bold block mb-1">Could not check is an answer</span> <span class="text-slate-300">Where a check could not run — nothing to read, an answer that came back unusable — the result is <em>unable to assess</em>. It says in words that this is not a finding that the thing is compliant. Zero and nobody-measured are kept apart on purpose, and a connection nobody has contacted is never reported as verified. A checker whose confident answers and blanks look the same is worth nothing by the second week.</span></li>
        </ul>
    </div>
</div>

</div>

{{< /section-container >}}

{{< section-container class="py-20 bg-stone-900" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="mb-16 max-w-3xl">
        <h2 class="text-4xl font-bold text-white mb-6 tracking-tight">When the data cannot leave the building</h2>
        <p class="text-xl text-ink-2 leading-relaxed">For many freight and claims teams, a cloud tool is off the table before the demo starts. Customer files, customs papers and claim records cannot go to somebody else's servers. This section is for the person who has to say yes to that. These are properties of how FACE is built, not results anybody is reporting.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">Your records stay on the machines you chose</h3>
            <p class="text-slate-300">On the Dedicated and Enterprise licences, the order files, the customs papers and the reasoning about them run on your own servers or in your own cloud account, so the machines doing the work are yours. On Lite they run on Runink's shared machines. On every licence there is no outside model provider anywhere in it, and FACE sends its questions to exactly one model server: the one set up for your plan. So there is no per-question bill from an outside vendor. That is how it is built, not a switch somebody could leave off.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">Open-web research with no account attached to it</h3>
            <p class="text-slate-300">Some answers need the open web — a carrier's standing, a customs ruling, a published tariff, a consignee you are unsure about. FACE runs the search from the machines it runs on, through a public search page, then fetches and reads the pages itself. The extracted page comes attached to the finding. The search engine sees the query, as it would from any browser. What does not happen matters commercially: there is no vendor account, no API key and no per-question bill. No supplier is building a history of the names your company has been checking, filed under your company.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">On Runink TIDE, inside your boundary</h3>
            <p class="text-slate-300">FACE runs on Runink TIDE, the platform underneath it. Services identify themselves to each other on every call and hold nothing long-lived. The screen your team works in sits inside the same boundary your auditors are shown.</p>
        </div>
    </div>

    <p class="text-lg text-ink-2 leading-relaxed mt-10">Who decides, which models run, how data is kept apart and how our controls map to the standards your auditors use, each with a link to the public documentation behind it: <a href="/trust/" class="text-signal underline decoration-signal/40 hover:decoration-signal">Trust &amp; Compliance</a>.</p>
</div>
{{< /section-container >}}

{{< section-container class="py-16" >}}
<div class="max-w-3xl mx-auto px-4">
    <div class="border-l-4 border-signal pl-6 space-y-4">
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-signal">Your number, not ours</p>
        <h2 class="text-2xl font-bold text-white">How to put a figure on it before you call us.</h2>
        <p class="text-lg text-slate-300 leading-relaxed">
            This page carries no figure, no customer name and no claimed outcome. The figures that matter are in your own systems. Take one month of freight invoices, or one month of claims. Count the disputes and claims you could have filed and did not. Count the hours your team spent building the ones you did file. Count what you paid outside help to rerun last quarter's analysis. Each <a href="/industries/" class="text-signal underline decoration-signal/40 hover:decoration-signal">industry page</a> lists the measures to write your own against. Write yours down first: a baseline cannot be rebuilt once things start improving.
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
            "question": "Is FACE the same thing as Runink PULSE?",
            "answer": "No. They are separate products, each sold on its own. FACE is the subject of this page: freight, fulfilment, forecasting, claims, returns and compliance. PULSE is for marketing teams — research, prospecting and the material a marketing team publishes. Nothing on this page is a PULSE capability, and a PULSE result is not a FACE result. Runink TIDE is a third product, also sold separately: the operations layer for your engineering and data teams, on your servers, your cloud or ours, that keeps your Runink applications and your own data in order. Its paper describes it."
        },
        {
            "question": "How do I stop overpaying freight invoices?",
            "answer": "Check every invoice, not only the big ones. Disputing one by hand means pulling the carrier's receipt, matching it to the weighbridge reading, finding the rate that applied that day and drafting the letter. That takes most of a morning, so the small ones get paid. FACE reads the invoices and the records behind them, checks them against the rules you work to, and assembles the case with every record attached. Your freight-audit analyst reviews it and decides whether to send it."
        },
        {
            "question": "How do I stop freight claims from expiring before anyone files them?",
            "answer": "Make each claim file cheap to build. A damaged load is money back only inside the filing window, and when building the file costs more than the claim is worth, the small claims quietly expire. FACE gathers the claim, the policy, the reserve and the records, and drafts the action. An adjuster decides, on the file FACE put in front of them."
        },
        {
            "question": "Can we run it on our own servers, with no outside AI service?",
            "answer": "Yes. On the Dedicated and Enterprise licences FACE runs in your own cloud account or on your own servers; Lite runs on Runink's shared machines. On every licence the work stays on the machines your licence names, and nothing goes to an outside model provider, so there is no per-question bill from an outside vendor. The full answer, including the two paths that do reach outside, is under *Where does our data go?* below."
        },
        {
            "question": "Does FACE decide, or do we?",
            "answer": "You do. FACE drafts an action with the rule and the records attached, and a named person approves, edits or rejects it. That applies most strictly in the two places people worry about: it assembles an underwriting or claims file but does not make the underwriting decision, and the compliance assistant cites the rule and the records but does not rule on them."
        },
        {
            "question": "Do we have to replace our WMS, ERP or claims system?",
            "answer": "No, and be precise about the direction. FACE **reads** from the systems you already run — your databases and warehouses, SAP and Dynamics 365, Salesforce, HubSpot, ServiceNow, Guidewire, SharePoint, your spreadsheets, your file storage, your cameras. It is not a system of record and is not trying to become one, so there is no replacement project to budget for. The read is deliberately one-way: every database connection is read-only by design, so FACE cannot change your system of record."
        },
        {
            "question": "What happens when it cannot check something?",
            "answer": "It says so, in those words, and that is deliberate. Where a compliance check could not run — nothing to read, or an answer that came back unusable — the result is **unable to assess**, and the wording spells out that this is not a finding that the thing is compliant. Where nothing measured a quantity, that is recorded as unmeasured with a reason, kept apart from a measured zero, and never billed. Where a connection has not been contacted, it is never reported as verified; testing one comes back as one of several distinct answers rather than a green tick. And a connection created without credentials does not exist at all, because the credentials are written first. For anyone whose job is evidence, a tool that tells you what it could not check is worth more than one that never admits to a gap."
        },
        {
            "question": "Our team follows the SOPs loosely. How does that help?",
            "answer": "Nobody holds every rule in their head on a bad morning. The procedures you already work to are written down once and checked against every record, not remembered by whoever is on shift. So a slip — a duplicate purchase order, a shipment sitting past the day you stop waiting — comes back as a named item with the rule it broke attached."
        },
        {
            "question": "Where does our data go?",
            "answer": "Onto the machines your licence names, and no further: your own servers or cloud account on Dedicated and Enterprise, Runink's shared machines on Lite. The files and the reasoning about them stay there, and the language model FACE reasons with runs there too, not as an outside provider's service. There is no outside model provider anywhere in it, and exactly one model server, the one set up for your plan. Two paths deliberately reach outside, because they have to: a route request goes to the routing service you configure, and open-web research, which runs only once your admin turns it on, puts a query to a public search endpoint."
        },
        {
            "question": "Is there anything we can put in someone's hands today?",
            "answer": "An Android build of the cockpit — the ranked queue, the records behind each item, and the approve or reject — is on the [downloads page](/downloads/). You install it directly from that page. The server image that carries Runink TIDE is on the same page and is request-access, because it is the platform underneath rather than an app."
        },
        {
            "question": "What does it cost?",
            "answer": "That belongs on the [pricing page](/pricing/), not here."
        }
    ]
}
{{< /faq >}}

{{< cta
    title="Bring one lane, one claim, or one month of invoices."
    description="Half an hour, with whoever owns the problem in the room. We will walk one real example of yours end to end: the invoice, the claim, the records behind it and the person who signs. If the losses you carry are not the shape this addresses, we will say so."
    primary_button_text="Book a consultation"
    primary_button_url="/#contact"
    secondary_button_text="Read the FACE paper"
    secondary_button_url="/blog/whitepapers/runink-face/"
>}}
