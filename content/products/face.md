---
title: "Runink FACE"
description: "Runink's main product. It reads the orders, carrier records, sensor feeds and claim files you already hold, works out what the combined picture means, and puts one drafted action in front of the person who can approve it."
layout: "landing"
badge: "FACE"
# badgeColor removed, not re-pointed. It held #7c3aed, a pre-migration vendor
# violet that is not a Runink colour (DESIGN.md §2: colour has exactly two jobs,
# signal and category, and both are tokens in assets/css/tokens.css). Nothing
# reads badgeColor on a layout: "landing" page either — the consumers are
# layouts/_default/feature.html and the use-cases carousel, neither of which
# renders this page — so the field is deleted rather than given a new value. If
# a listing ever needs a colour for FACE, the category is logistics:
# --rk-cat-logistics-ink / --rk-cat-logistics-lift. Not a literal.
---

<!--
  hero_image removed, not replaced. It was /images/face/overview.png: a
  screenshot of "Today's Posture Radar" in which all five business dimensions
  read 85/100 — a constant, not a measurement — beside "Confidence: 6/10" and
  an opportunity naming a demo-seed table (Entities.bill_of_materials). Those
  screens are served from the *_mock.json seeds behind demoSeedEnabled(); a
  standard instance derives nothing from them. Putting them on the flagship
  page presented seeded figures as a customer's own operation, and did it in
  the one form a reader cannot discount — a screenshot. The hero shortcode
  guards the image with `{{ if $hero_image }}`, so omitting it renders.

  Nothing has been drawn to replace it. There is no honest screenshot of a
  populated queue, because on a standard instance the queue is empty.
-->
{{< hero
    headline="Your operation already wrote down what went wrong."
    sub_headline="**Runink FACE** is Runink's main product: the Fulfilment Autonomous Claims Engine, built for logistics and the claims, returns and compliance work that hangs off it. It reads the records you already hold, works out what the combined picture means, and drafts the action for a named person to approve."
    primary_button_text="Book a consultation"
    primary_button_url="/#contact"
    secondary_button_text="Read the FACE paper"
    secondary_button_url="/blog/whitepapers/runink-face/"
    size="normal"
    gradient-from="var(--rk-sunk)"
    gradient-to="var(--rk-ground)"
    gradient-angle="135"
>}}

{{< section-container class="py-20 relative z-10" >}}

<div class="max-w-4xl mx-auto text-left space-y-6 relative">
<h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
What FACE is, and what it is not.
</h2>

<p class="text-xl text-ink-2 leading-relaxed">
An entry held at the port for a missing paper while the daily charge runs. A pallet that came back and was never graded. A freight claim still inside its filing window that nobody had the morning to assemble. A reefer drifting warm overnight. In every case it was written down first, in a system you already run, and then read late, by sample, or not at all.
</p>

<p class="text-xl text-ink-2 leading-relaxed">
FACE is the product that reads all of it, and it is the one this company is built around. Everything described on this page is FACE. The two names you will see elsewhere on this site are not.
</p>
</div>

<div class="max-w-7xl mx-auto mt-16">
{{< card-grid cols="3" >}}
{{< card
    icon="map"
    title="Runink FACE"
    description="The flagship. Logistics, fulfilment, forecasting, claims, returns and the compliance work around them. This page, and the whole of it."
    link="/blog/whitepapers/runink-face/"
>}}
{{< card
    icon="globe-alt"
    title="Runink PULSE"
    description="A separate product, not a FACE feature. Market analysis, research and the material a marketing team publishes. It has its own paper."
    link="/blog/whitepapers/runink-pulse/"
>}}
{{< card
    icon="server-stack"
    title="Runink core"
    description="The platform underneath, not something bought on its own. It is the answer to where FACE runs and who can see what it reads."
    link="/blog/whitepapers/runink-core/"
>}}
{{< /card-grid >}}
</div>

{{< /section-container >}}

{{< section-container class="py-10" >}}

<div class="max-w-4xl mx-auto px-4 mb-20">
<h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">Nine kinds of work, in three groups your operation already recognises.</h2>
<p class="text-xl text-ink-2 leading-relaxed">What is coming and how it moves. What happens when it goes wrong. And being able to show, afterwards, why you did what you did.</p>
</div>

<div class="max-w-7xl mx-auto px-4 space-y-32">

<!-- GROUP 1: THE FORWARD FLOW -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div>
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">1. The forward flow</div>
        <h3 class="text-4xl font-bold text-white mb-6">Plan it, hold it, move it.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                The three questions that decide the week before anything has gone wrong: how much is coming, whether it is on the shelf, and how it gets there. Planning, buying and dispatch usually answer them in three different systems, on three different days.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Demand forecasting</span> <span class="text-slate-300">Your own order history is read as a series and put through the same sequence a statistician would run by hand: describe it, test whether it is stationary, look at the autocorrelation, then fit both a decomposition and an ARIMA and pick between them by backtest. What comes back names the model that won, quotes the stationarity test it was chosen against, and lists the points that did not fit. Under five observations it declines and says so rather than drawing a line through them. The planner argues from a stated method, not from seniority.</span></li>
            <li><span class="text-signal font-bold block mb-1">Inventory fulfilment</span> <span class="text-slate-300">Stock, inventory and fulfilment records are read from the systems that actually hold them — your database, your warehouse platform, your ERP, your spreadsheets, your object storage — and set against the lines you have already promised, so a cover problem surfaces while ordering is still ordinary and has not yet become air freight. Every one of those reads is read-only, and structurally so: the query is checked character by character before it is sent, so a connection cannot become a way to write to your system of record. The F in FACE is fulfilment.</span></li>
            <li><span class="text-signal font-bold block mb-1">Route optimisation</span> <span class="text-slate-300">A lane is put to the routing service you configure, and the distance and duration it returns come back attached to the request. If no routing service is configured, or routing returns nothing, the answer is the word unavailable — not an empty card with the fields blank, which is what a dispatcher would otherwise read as a measured route of zero. Refusing that particular answer is the whole of the work here.</span></li>
        </ul>
    </div>
    <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-signal-fill to-signal-fill-hover opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
        <!--
          Alt text corrected. It used to read "The cockpit, with drafted actions
          queued for approval", which the screenshot contradicts: saved
          hypotheses, active rules and the action queue all read "No items".
          That is not a bad screenshot, it is the accurate one — a standard
          instance derives nothing and shows an empty queue — so the caption now
          says what is on the screen instead of what a buyer would like to see.
        -->
        {{< figure src="/images/face/cockpit.png" alt="The cockpit's evidence panel: citations, saved hypotheses, active rules and the action queue, each named and each stated as empty on an instance with nothing connected" class="relative rounded-lg shadow-2xl border border-white/10" >}}
    </div>
</div>

<!-- GROUP 2: WHEN IT GOES WRONG -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <!--
      Figure removed: /images/face/posture.png. Two separate problems, either of
      which is disqualifying.

      (1) It is not this. The screenshot is the AI Posture Center — table counts,
      lineage coverage, data freshness, "13 tables with low confidence", runbooks
      to "regenerate vector embeddings" and "prevent RAG contamination". That is
      platform and data-quality observability, not reactive logistics, and the
      alt text ("Incidents arriving as a named list rather than a wall of alerts")
      described something the picture does not show. A mislabelled real
      screenshot is worse than mislabelled prose, because a reader treats it as
      evidence.

      (2) It carries six scored percentages across the top and a panel claiming
      an expected improvement in answer accuracy. The site does not put numbers
      on product pages, and it particularly does not put a claimed impact on
      one. Deliberately not quoting the figures here: a comment ships in the
      HTML, and re-typing them would put them back on the page in source.

      Not replaced. The block below stands on its own and the grid renders with
      one column.
    -->
    <div class="order-1 md:order-2 md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">2. When it goes wrong</div>
        <h3 class="text-4xl font-bold text-white mb-6">The exception arrives named.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Three kinds of bad news, all of them recorded somewhere before anybody acts: something on the site, something coming back, something being claimed. Each has its own path through FACE rather than being a note appended to an order.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Reactive logistics</span> <span class="text-slate-300">A frame reaches FACE one of three ways: a photograph taken on a handheld at the dock, text an edge device has already read off a label, or the address of a video feed you point it at. It is graded for what was damaged and where — the pallet, the crate, the container door, named, not reduced to a severity score. A cue can then be raised to the operating picture everyone is watching, and it says exactly what it is: a cue <em>requested</em>, broadcast to whoever is subscribed. It is not an instruction to a crane or a camera, because nothing here is wired to one, and a sensor type FACE does not recognise is refused rather than quietly filed as a camera.</span></li>
            <li><span class="text-signal font-bold block mb-1">Reverse logistics</span> <span class="text-slate-300">A return is triaged on its own record: what came back, what condition it is in, and which disposition it belongs in. Returns are a dedicated path, because the cost of a return is decided in the hour somebody grades it.</span></li>
            <li><span class="text-signal font-bold block mb-1">Insurance underwriting and claims</span> <span class="text-slate-300">Claims, reserves, premiums, deductibles and settlements are records FACE reads and types like any other: a claim is a reserve against a policy. It assembles the file and drafts the action. It does not decide the underwriting — an adjuster does, on the file FACE put in front of them.</span></li>
        </ul>
    </div>
</div>

<!-- GROUP 3: SHOWING YOUR REASONING -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <div>
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">3. Before you commit, and after you are asked</div>
        <h3 class="text-4xl font-bold text-white mb-6">Being able to show the reasoning.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                Two of the hardest conversations in an operation are the one before a change and the one months after it. Both need the same thing: the records the decision rested on, still joined up.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Supply chain management</span> <span class="text-slate-300">The relationships between your orders, suppliers, sites and shipments are built into one graph, so the operation can be read across systems that were never joined to each other. The twins take that picture and keep it current as the records change.</span></li>
            <li><span class="text-signal font-bold block mb-1">Financial scenarios and hypothesis testing</span> <span class="text-slate-300">A change is stated as a hypothesis — a lane a week late, a supplier dropped, a different reserve assumption — together with the rules it touches. What comes back is the case laid out: which rules the change collides with, in what order they bite, and each consequence tied to the rule it follows from. It is reasoning you can argue with rather than a number to accept, it executes nothing, and the decision stays with the person accountable for it.</span></li>
            <li><span class="text-signal font-bold block mb-1">Paralegal and compliance</span> <span class="text-slate-300">A compliance agent whose stated role is paralegal. It reads policy documents, the rules extracted from your own procedures, and the system's own logs; it cites the rule and the records behind a finding; and it drafts the functional remediation — the letter, the ticket, the notification. It reads and cites. A person decides.</span></li>
        </ul>
    </div>
    <!--
      Figure removed: /images/face/hypothesis.png. It is the Hypothesis Lab
      showing "PROJECTED IMPACT" as six percentage tiles — revenue impact, gross
      margin, operating-expense efficiency, risk probability, churn probability,
      market capture — a prediction-confidence dial, and a red panel headed
      STRATEGIC RECOMMENDATION telling the reader risk exposure is too high.
      Figures not quoted here on purpose; a comment ships in the HTML.

      Every one of those is a number produced by a language model over a demo
      seed, and the panel presents them as a decision. That is the exact thing
      the bullet beside this comment says the product does not do, contradicted
      by a screenshot two inches away — and a reader believes the screenshot.
      The subject line also names a seed table (supply_marts.conformed_dim_
      entities_bill_of_materials), so it is not a customer's operation either.

      Not replaced.
    -->
</div>

<!-- THE APPROVAL SEAM -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <!--
      Figure removed: /images/face/rules.png. It is the Rules Studio on a tenant
      whose badge reads "sf_demo", and its header line is
      a bracketed summary quoting a monthly recovery figure in dollars and a
      compliance percentage, above a list of "Value Capture Opportunities" each
      priced at a dollar value per month. The literals are not repeated here,
      because a comment ships in the HTML.

      Currency presented as money Runink recovers is the one thing this material
      may never carry. It is not a figure we have declined to publish; it is a
      figure with no producer. FACE's own test file records that every derived
      savings source was an invented rate and deletes all four
      (grpc/cmd/savings_summary_test.go). Leaving the screenshot up would have
      kept publishing the deleted numbers as a picture.

      Not replaced.
    -->
    <div class="order-1 md:order-2 md:col-span-2">
        <div class="inline-block px-3 py-1 rounded bg-signal-wash text-signal font-bold mb-4 tracking-wide">The seam</div>
        <!--
          Heading narrowed. It read "Nothing leaves with nobody's name on it",
          which is the blanket-gate version of the approval claim and is not
          true: REQUIRE_HITL is read by nothing in FACE except the function that
          reports it (grpc/cmd/compliance_server.go), so it gates nothing. What
          IS true is the queue: a drafted action sits until ExecuteAction is
          called with an approval, and the decision is recorded with the actor.
          Say that, and not the absolute. A control that cannot fire is worse
          than none, because it answers "is this handled?" with a confident yes.
        -->
        <h3 class="text-4xl font-bold text-white mb-6">The drafted action waits. Approving is what sends it.</h3>
        <div class="text-lg text-slate-200 space-y-6 leading-relaxed">
            <p>
                All nine end in the same place. A finding is held as one specific proposed action, with the rule it invoked and the records it cited attached to it. A named person approves, edits or rejects it, and that decision is written down as an event with the actor on it — who approved, when, and what they changed — so the reason can be given later without assembling it again.
            </p>
            <p>
                A new instance starts with an empty queue. FACE does not arrive holding findings about you; it holds none until it is connected to something and something is found, and it will show you an empty queue rather than fill one.
            </p>
            <p>
                Approving is what sends the drafted action, and what comes back afterwards says which parts of it actually ran. Where a step could not be carried out — no mail connector configured, no write-back to your ERP — the response names that step and the reason it did not happen, on every reply, including one where some of the work went out and some did not. It is the difference between a system that reports success and one that tells you what it did.
            </p>
        </div>
        <ul class="space-y-6 mt-8">
            <li><span class="text-signal font-bold block mb-1">Your procedures, written down once</span> <span class="text-slate-300">The rules you already work to — the day you stop waiting on a carrier, the duplicate purchase order, the vendor request with nothing behind it — are stated once and checked against every record rather than remembered by whoever is on shift.</span></li>
            <li><span class="text-signal font-bold block mb-1">Why it fired, on which records</span> <span class="text-slate-300">Afterwards you can open a finding and read the rule, the records underneath it and the reasoning that joined them. A drafted letter nobody can check is not worth signing.</span></li>
            <li><span class="text-signal font-bold block mb-1">Documents arrive as documents</span> <span class="text-slate-300">The bill of lading, the customs paper, the carrier's receipt, the claim file. They are read and turned into records that can be cited, which is the part that makes the draft checkable.</span></li>
            <li><span class="text-signal font-bold block mb-1">Could not check is an answer</span> <span class="text-slate-300">Where a check could not run — nothing to read, an answer that came back unusable — the result is <em>unable to assess</em>, written out in words as not a finding that the thing is compliant. Zero and nobody-measured are kept as different values on purpose, and a connection nobody has contacted is never reported as verified. An assessor whose confident answers and whose blanks look the same is worth nothing by the second week.</span></li>
        </ul>
    </div>
</div>

</div>

{{< /section-container >}}

{{< section-container class="py-20 bg-stone-900" >}}
<div class="max-w-5xl mx-auto px-4">
    <div class="mb-16 max-w-3xl">
        <h2 class="text-4xl font-bold text-white mb-6 tracking-tight">Where it runs, and who can see it</h2>
        <p class="text-xl text-ink-2 leading-relaxed">This is usually the first question from information security and the last one to get a straight answer. These are properties of how FACE is built, not results anybody is reporting.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">Your records stay on your machines</h3>
            <p class="text-slate-300">The order files, the customs papers, the sensor readings and the reasoning about them run on hardware you control. The model FACE reasons with is one you run yourself: there is no third-party model dependency anywhere in it and exactly one inference endpoint, which is the one you point it at. That is how it is built rather than a switch somebody could leave off — though it is an architectural property, not a machine-enforced one, and we would rather you heard that from us than found it.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <!--
              Narrowed. This card used to say the page "is read directly with an
              ordinary browser" and imply the question never leaves — "Asking a
              search company about a consignee tells it who you are checking",
              set against what FACE does. But the shared engine
              (web/metasearch/metasearch.go:29) puts the query to DuckDuckGo's
              public HTML endpoint and then fetches the result pages itself. A
              search engine does see the query. What is genuinely different is
              that there is no vendor account, no API key and no per-question
              bill, so nobody accumulates a searchable history of your questions
              filed under your company's name — which is the part a security
              review actually turns on. Claim that; do not claim the absolute.
            -->
            <h3 class="text-2xl font-bold text-white mb-4">Open-web research with no account attached to it</h3>
            <p class="text-slate-300">When an answer needs the open web — a carrier's standing, a customs ruling, a published tariff, a consignee you are unsure about — FACE runs the search from your own infrastructure through a public search endpoint, then fetches and reads the pages itself, and the extracted page comes attached to the finding. The search engine sees the query, as it would from any browser. What does not happen is the part that matters commercially: there is no vendor account, no API key and no per-question bill, so no supplier is building a history of the names your company has been asking about, filed under your company.</p>
        </div>
        <div class="bg-ink/5 p-8 rounded-xl border border-ink/10">
            <h3 class="text-2xl font-bold text-white mb-4">On Runink core, inside your boundary</h3>
            <p class="text-slate-300">FACE runs on Runink core, the platform underneath it. Services identify themselves to each other on every call and hold nothing long-lived. The cockpit your team uses is the same boundary your auditors are given.</p>
        </div>
    </div>
</div>
{{< /section-container >}}

{{< section-container class="py-16" >}}
<div class="max-w-3xl mx-auto px-4">
    <div class="border-l-4 border-signal pl-6 space-y-4">
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-signal">Drawn — not a measured result</p>
        <h2 class="text-2xl font-bold text-white">What this page deliberately does not say.</h2>
        <p class="text-lg text-slate-300 leading-relaxed">
            There is no figure on it, no customer named, and no outcome claimed. Everything above describes what FACE reads, what it produces and who approves it, drawn from the records these systems hold — not an account of what happened at somebody else's company. The figures that matter belong to you: each <a href="/industries/" class="text-signal underline decoration-signal/40 hover:decoration-signal">industry page</a> carries the measures to write your own against, and a baseline stops being recoverable the moment things start improving. Write yours down first.
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
            "question": "Is FACE the same thing as Runink PULSE?",
            "answer": "No. They are separate products. FACE is the main one and the subject of this page: logistics, fulfilment, forecasting, claims, returns and compliance. PULSE is a marketing engine — audit, research, prospecting and the material a marketing team publishes. Nothing on this page is a PULSE capability, and a PULSE result is not a FACE result. Runink core is a third thing again: the platform both of them run on, not something used on its own."
        },
        {
            "question": "Has this been run on an operation like mine?",
            "answer": "Not that this page is claiming. Nothing here is a case study, and no scenario above carries a customer name, a recovery rate or a return-on-investment figure — every claim is marked with where it stands instead. That is a rule about the product material rather than a boast about the whole site: the pricing page quotes prices, and the blog cites published industry statistics the way trade writing does. What you will not find is a number offered as something FACE achieved. The scenarios above are descriptions of mechanism. If you want to know how it behaves on your operation, bring one lane, one claim, or one month of invoices and we will walk that one example through end to end."
        },
        {
            "question": "Does FACE decide, or do we?",
            "answer": "You do. FACE produces a drafted action with the rule and the records attached, and a named person approves, edits or rejects it. That applies most strictly in the two places people worry about: it assembles an underwriting or claims file but does not make the underwriting decision, and the compliance agent cites the rule and the records but does not rule on them."
        },
        {
            "question": "Do we have to replace our WMS, ERP or claims system?",
            "answer": "No, and be precise about the direction. FACE **reads** from the systems you already run — your databases and warehouses, SAP and Dynamics 365, Salesforce, HubSpot, ServiceNow, Guidewire, SharePoint, your spreadsheets, your object storage, your cameras. It is not a system of record and is not trying to become one. The read is deliberately one-way: every database connection is read-only and structurally so, which is a constraint we would rather have than the convenience of writing. Write-back into an ERP is **not built** — if you approve an action whose plan included one, the reply comes back naming that step as not executed and why. It is worth asking us which of your systems FACE can write to at all before you plan around it; today the honest answer for most of them is none."
        },
        {
            "question": "What happens when it cannot check something?",
            "answer": "It says so, in those words, and that is deliberate engineering rather than a caveat. Where a compliance check could not run — nothing to read, or an answer that came back unusable — the result is **unable to assess**, and the wording spells out that this is not a finding that the thing is compliant. Where nothing measured a quantity, that is recorded as unmeasured with a reason, kept distinct from a measured zero, and never billed. Where a connection has not been contacted, it is never reported as verified; testing one comes back as one of several distinguishable answers rather than a green tick. And a connection created without credentials does not exist at all, because the credentials are written first. For anyone whose job is evidence, a tool that tells you what it could not check is worth more than one that never admits to a gap."
        },
        {
            "question": "Our team follows the SOPs loosely. How does that help?",
            "answer": "Nobody holds every rule in their head on a bad morning. The procedures you already work to are written down once and checked against every record rather than remembered by whoever is on shift, so a slip — a duplicate purchase order, a shipment sitting past the day you stop waiting — comes back as a named item with the rule it broke attached."
        },
        {
            "question": "Where does our data go?",
            "answer": "Onto hardware you control. The files and the reasoning about them stay inside your boundary, and the language model FACE reasons with is one you run yourself rather than a third-party API — there is no third-party model dependency in the codebase and exactly one inference endpoint, the one you configure. Two honest edges to that. It is an architectural property rather than a machine-enforced one: no build step blocks an outside model client from being added, so it is a thing to check in a code review rather than a thing a test guarantees. And two paths deliberately do reach outside, because they have to: a route request goes to the routing service you configure, and open-web research puts a query to a public search endpoint. Neither carries your records. Ask us to walk the boundary with you rather than taking the sentence."
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
    description="Half an hour, with whoever owns the problem in the room, and we will walk one real example of yours end to end. If the losses you carry are not the shape this addresses, we will say so."
    primary_button_text="Book a consultation"
    primary_button_url="/#contact"
    secondary_button_text="Read the FACE paper"
    secondary_button_url="/blog/whitepapers/runink-face/"
>}}
