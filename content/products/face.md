---
title: "Runink FACE"
# Search and share-card text (CONTENT.md rules 1 and 3 apply): the <title> is
# seo_title verbatim, at most 60 characters; seo_description is the meta and card
# description, at most 155. Visible copy on the page is unchanged by these two.
seo_title: "Runink FACE: freight overcharges and claims, caught in time"
seo_description: "For freight, claims and operations teams. Runink FACE reads your invoices and claim files, finds the overcharge and the expiring claim, and drafts the fix."
# No share image: the earlier one (/images/face/cockpit.png) showed retired UI, so
# this page falls back to the site card until a current screenshot exists.
#
# Feature sections follow the FACE left rail as it is today (2026-10-10): Reconcile,
# Fetch, Simulate, Twins. If the rail changes, change this page with it.
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
    tertiary_button_url="https://docs.runink.org/tide/docs/devex/"
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

{{< section-container class="py-10" id="inside-face" >}}

<div class="max-w-4xl mx-auto px-4 mb-20">
<h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">One menu, four sections: Reconcile, Fetch, Simulate, Twins.</h2>
<p class="text-xl text-ink-2 leading-relaxed">FACE has one menu, down the left of the screen, and nothing else to find your way through. Reconcile shows where your records stand. Fetch brings them in. Simulate tests a change before you make it. Twins puts the result on a map and in front of the person who approves it. Your account and billing sit at the foot of the same menu.</p>
</div>

<div class="max-w-7xl mx-auto px-4 space-y-32">

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div class="md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">1. Reconcile</div>
        <h3 class="text-4xl font-bold text-white mb-6">Where your records stand, on one page.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Reconcile is the page FACE opens on. Its first line says how many business areas were read, what was found, and what to do about it. Below that, the same page goes as deep as you want to read. There is no second report to ask for.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Reconcile</span> <span class="text-slate-300">Each business area your records cover — supply, orders, claims, finance — gets a score on six counts. Is the data sound? Are the fields filled in? Can each figure be traced to where it came from? Is it current? Is it covered by a policy? What does it cost to keep? Next to it, a matrix shows how those areas connect to each other. Then rules: which of your rules are actually enforced in your systems, and which are only written down somewhere. Last, readiness, in three groups: how mature your data is, how ready it is for AI, and what it costs to run in the cloud.</span></li>
            <li><span class="text-signal font-bold block mb-1">Entities</span> <span class="text-slate-300">The things your records are about — orders, suppliers, sites, shipments, assets — found in whatever source holds them and joined into one list, even when the systems behind them were never joined. Filter by kind, or search by name. The list stays current as the records change.</span></li>
        </ul>
        <!-- SCREENSHOT: Reconcile — the Reconcile landing page: the header line (areas read, findings, measures to take), the domain posture rings, the cross-domain relational matrix and the readiness indicators grouped by category -->
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div class="md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">2. Fetch</div>
        <h3 class="text-4xl font-bold text-white mb-6">Bring in what you already run, and choose what stays on.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Fetch is where FACE reads your systems. You decide which sources it reads and which machines do the work, each with its own on and off switch. While a fetch runs, a card in the middle of the screen shows each step as it happens and how it ended. Open its reasoning if you want to see why.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Fetch</span> <span class="text-slate-300">Ask a question or give an instruction in plain words, or start from a suggested one. Your active connections and the machines that run the work are shown as cards, each with an Active switch. Cameras, devices, handheld readers and live sensors appear here as connections like any other: a photo taken at the dock, a label a device has already read, a video feed you point it at. Every run is kept in a history, step by step, so you can check later what it read and what it did.</span></li>
            <li><span class="text-signal font-bold block mb-1">Connections</span> <span class="text-slate-300">Every source FACE reads: databases and data warehouses, business software, logistics systems, files, web pages, and live streams — GPS trackers, RFID tags and other equipment that reports as it goes. Cameras, devices, handheld readers and live sensors connect here too. Credentials are sealed when you enter them, and you can test a connection before you rely on it. Every database read is read-only by design: the query is checked before it is sent, so a connection cannot write to your system of record.</span></li>
            <li><span class="text-signal font-bold block mb-1">Knowledge</span> <span class="text-slate-300">Your documents and what FACE knows from them, in one place. Add files and search them. A spreadsheet is read properly — the cells, the formulas behind them and the named ranges — because that is where the working usually is. From a scanned page, FACE pulls out the tables, the filled-in fields and the ticked boxes, on the machines FACE runs on, not at an outside service. Where a page comes back unusable, it says so instead of returning a confident blank.</span></li>
            <li><span class="text-signal font-bold block mb-1">Schedules</span> <span class="text-slate-300">Set a fetch up once and it runs when you choose: the Monday report nobody has to rebuild by hand. A scheduled run shows the same step-by-step card and keeps the same record as one you start yourself.</span></li>
        </ul>
        <!-- SCREENSHOT: Fetch — the Fetch page: the question box with fetch starters, the Active connections and Compute runners cards with their Active switches, and the execution history with one run's phases -->
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div class="md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">3. Simulate</div>
        <h3 class="text-4xl font-bold text-white mb-6">Test a change before you commit to it.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Two of the hardest conversations in an operation are the one before a change and the one months after it. Both need the same thing: the records the decision rested on, still joined up. Simulate keeps them joined, and none of it changes anything in your systems.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Swarm Intelligence</span> <span class="text-slate-300">State a hypothesis — a lane a week late, a supplier dropped, a different reserve — and several AI agents work it through together, each from its own angle. Running scenarios stay listed, and you can start a new one at any time. What comes back is reasoning you can argue with, not a number to accept. The decision stays with the person accountable for it.</span></li>
            <li><span class="text-signal font-bold block mb-1">Rules</span> <span class="text-slate-300">The rules you already work to — the day you stop waiting on a carrier, the duplicate purchase order, the vendor request with nothing behind it — are written down once and checked against every record. Each rule can be held up against your policy documents, so you can see where the two disagree. A compliance assistant whose stated role is paralegal reads those policies and cites the rule and the records behind a finding. It drafts the fix — the letter, the ticket, the notice. A person decides.</span></li>
            <li><span class="text-signal font-bold block mb-1">Metasearch Trends</span> <span class="text-slate-300">Search for a term across what FACE has read, and see how it has moved over time.</span></li>
            <li><span class="text-signal font-bold block mb-1">Causal Matrix</span> <span class="text-slate-300">What drives what in your operation, laid out so you can see it. Change one thing and see what it would move, and which rules it would run into, in what order, each result tied to the rule behind it.</span></li>
            <li><span class="text-signal font-bold block mb-1">Demand forecasting</span> <span class="text-slate-300">Your own order history is put through the steps a statistician would run by hand. Two kinds of forecast are tried, and the one that did better on your past data wins. What comes back names the method, the test it was chosen by, and the points that did not fit. With fewer than five data points it declines and says so.</span></li>
        </ul>
        <!-- SCREENSHOT: Swarm Intelligence — the Swarm Intelligence page: a hypothesis being simulated by several agents, the active scenarios list and the New simulation action -->
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div class="md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">4. Twins</div>
        <h3 class="text-4xl font-bold text-white mb-6">Your operation on a map, and the orders waiting on a decision.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                A twin is a live copy of something real — a site, an asset, an order — kept current from your own records. Twins shows them where they are, and puts every proposed action in front of the person who approves it.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Map</span> <span class="text-slate-300">A 3-D map of your operation. Your assets stand as blocks at their real locations, taken from the sources you connected. Routes are drawn in the proposed stop order, over the order you run today. Any connection that reports a position — a camera, a device, a sensor, a handheld reader — adds a live layer on top, and one panel turns each layer on or off, showing how old its data is and where it came from. Tap a place and its details open over the map, with the actions proposed for it, each with Approve and Reject. The savings summary lives here. The map needs no key from you; if you prefer your own map provider, you can bring its key.</span></li>
            <li><span class="text-signal font-bold block mb-1">Today's command</span> <span class="text-slate-300">The same proposed actions as a list of orders, each with its line items. A person approves or rejects each one.</span></li>
            <li><span class="text-signal font-bold block mb-1">Routes</span> <span class="text-slate-300">A lane is sent to the routing service you configure, and the distance and time it returns come back with the request. If no routing service is set up, or it returns nothing, the answer is the word unavailable. You never get a blank a dispatcher could read as a route of zero.</span></li>
        </ul>
        <!-- SCREENSHOT: Map — the Twins map: extruded asset blocks, a route in proposed stop order, a few live layers on, the layer panel open with data age, and one place tapped with its twin cards (Approve/Reject) open over the map -->
        <!-- SCREENSHOT: Today's command — the list of orders with their line items, each with Approve and Reject -->
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div class="md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">On every page</div>
        <h3 class="text-4xl font-bold text-white mb-6">Ask, watch it work, and check it afterwards.</h3>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">The assistant</span> <span class="text-slate-300">A chat in the corner of every page. Ask about what you are looking at, in plain words.</span></li>
            <li><span class="text-signal font-bold block mb-1">The last fetch, always in view</span> <span class="text-slate-300">A strip at the top says how the last fetch went, with a link to its full record.</span></li>
            <li><span class="text-signal font-bold block mb-1">Straight about readiness</span> <span class="text-slate-300">If the language model FACE reasons with is still starting up, a strip says so, rather than letting a question wait in silence.</span></li>
        </ul>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div class="order-1 md:order-2 md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">The approval gate</div>
        <h3 class="text-4xl font-bold text-white mb-6">The drafted action waits. Approving is what sends it.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Every section ends in the same place. A finding is held as one specific proposed action, with the rule and the records attached, on the map and in Today's command. A named person approves or rejects it. That decision is written down with their name on it — who decided, and when. When the auditor or the customer asks why, the answer is already assembled.
            </p>
            <p>
                The same holds for claims. A claim is a reserve against a policy, and FACE reads claims, reserves, premiums and settlements like any other record. It assembles the file and drafts the action. It does not make the underwriting decision — an adjuster does, on the file FACE put in front of them.
            </p>
            <p>
                A new instance starts with an empty queue. FACE does not arrive holding findings about you. It holds none until it is connected to something and something is found, and it will show you an empty queue rather than fill one.
            </p>
            <p>
                Approving is what sends the drafted action. The reply says which parts actually ran. Where a step could not run, the reply names that step and the reason. That holds on every reply, including one where some of the work went out and some did not. It is the difference between a system that reports success and one that tells you what it did.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Why it fired, on which records</span> <span class="text-slate-300">Afterwards you can open a finding and read the rule, the records underneath it and the reasoning that joined them. A drafted letter nobody can check is not worth signing.</span></li>
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
        <p class="text-xl text-ink-2 leading-relaxed">For many freight and claims teams, a cloud tool is off the table before anyone has seen it. Customer files, customs papers and claim records cannot go to somebody else's servers. This section is for the person who has to say yes to that. These are properties of how FACE is built, not results anybody is reporting.</p>
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
            "answer": "You do. FACE drafts an action with the rule and the records attached, and a named person approves or rejects it. That applies most strictly in the two places people worry about: it assembles an underwriting or claims file but does not make the underwriting decision, and the compliance assistant cites the rule and the records but does not rule on them."
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
            "answer": "An Android build of FACE — the actions waiting on a decision, the records behind each one, and the approve or reject — is on the [downloads page](/downloads/). You install it directly from that page. The server image that carries Runink TIDE is on the same page and is request-access, because it is the platform underneath rather than an app."
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
