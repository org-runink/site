---
title: "Pricing"
# Search and share-card text (CONTENT.md rules 1 and 3 apply): the <title> is
# seo_title verbatim, at most 60 characters; seo_description is the meta and card
# description, at most 155. Visible copy on the page is unchanged by these two.
seo_title: "FACE by Runink pricing: per person, run where you choose"
seo_description: "What a FACE by Runink licence costs. You pay per person who uses it and pick where it runs: Runink's shared machines, your own cloud account or your premises."
image: "/images/face/cockpit.png"
description: "The operational jobs FACE by Runink is built for, and what a licence to run them costs. You pay for the number of people who use it, and choose where the work runs: on Runink's shared machines, in your own cloud account, or on your own premises."
layout: "pricing"
date: "2024-05-20T00:00:00Z"
author: "Runink"
# WHY THE WORK COMES BEFORE THE PRICE ON THIS PAGE.
# The page used to open on the billing shape and go straight to three licences
# told apart by whose machine they run on. A buyer arrives asking whether this
# touches their reverse-logistics losses, their claims backlog or their forecast
# error, and an infrastructure menu does not answer that question.
#
# So the scenarios band below sits between the intro and the licences, and the
# licences are untouched — what they are, what they cost and what tells them
# apart is a separate question and the cards answer it.
#
# NOTHING IN THAT BAND IS A NEW CLAIM. The four groups, their decks and the
# short name under each link are lifted word for word from the `groups` block in
# content/use-cases/_index.md, and each translation from its own `_index.LANG.md`
# — so a reader meets the scenarios here under the same names, in the same four
# groups, as on the page that owns them. The sentence printed beneath each link
# is not written here at all: layouts/shortcodes/pricing-table-2.html resolves
# the page and prints its own title, in the reader's language, at render time.
# A retitled use-case page therefore changes on this page in the same build.
#
# No count of the scenarios is stated anywhere, in any language. The set grows,
# and the use-cases index carries its own note about the version of itself that
# said "Seven" in three places and was wrong the moment a page was added.
#
# THE FAQ IS BUSINESS FIRST, BILL SECOND. It used to be six questions about
# seats, Compute Units and overage — everything a finance team asks and nothing
# an operations director, a claims lead or a compliance officer does. The seven
# in front of them are the domain questions, and every answer is traceable to a
# use-case page or to the use-cases index rather than written for this page.
#
# BUSINESS OUTCOME FEES ARE NOW A NAMED BAND, NOT ONLY A FAQ ANSWER. The two
# fees (Auto-Provisioning; Claims & Short-Pay Recovery) used to live only in
# "What am I actually paying for?", read by someone who had already scrolled
# past the seat cards. They are unchanged numbers — reused verbatim from that
# FAQ answer and from the outcome_strategies rows already on the Lite/Dedicated
# cards — surfaced via the `features-list` shortcode (no caller anywhere in
# this repo until now; needed no template change) between the scenario band
# and the price toggle. No third fee for avoided demurrage/detention was
# added: the owner deferred that pending its own modelling, and reverse-
# logistics/cold-chain value stays inside the existing Claims Recovery framing.
#
# THE INTRO LINE ABOVE THAT BAND IS PLAIN MARKDOWN ON PURPOSE, NEVER A `<div>`.
# `unsafe = false` in hugo.toml replaces a literal HTML tag typed into a
# content body with `<!-- raw HTML omitted -->` — the exact defect
# pricing-table-2.html's own comment documents having already eaten both of
# this page's opening paragraphs once, and a first draft of this note made the
# same mistake with a `{{/* */}}` block, which content files don't parse as a
# template comment either — it rendered as visible text until this rewrite.
#
# PRICES ARE THE OWNER-APPROVED MODEL V2 (2026-09-28; FACE prices and the CU, prepaid and runner-fee figures of the 2026-11-06 price book): the
# licence says where the work runs. Lite (1-9, Runink's shared machines):
# $85 yearly / $99 monthly, 18,000 units a person, then $0.12 per 100 units or
# units bought ahead (5% less a month, 10% less a year), up to 900 units a
# person an hour before work waits its turn. Dedicated (10+, runners in the
# customer's own cloud account): $165 a person, yearly, unlimited units, plus 1.5%
# of those runners' cloud cost. Enterprise: priced with you. Change the billing
# catalogue first, then here.
#
# THE ESTIMATOR (owner, 2026-11-05) reads its prices from data/pricing.json, never
# from this file. Change billing first, then data/pricing.json, then the card text
# above in all four languages; assets/js/__tests__/pricing-estimator.test.js fails
# when the cards and the data disagree. The auto-provisioning fee is 1-3% of an
# approved and confirmed fulfilment order, capped at $150 per order.
#
# SERVICES (owner, 2026-11-05, rate 2026-11-06; billing business model §9b D6, and the shared
# foundation for services copy): FACE starts with a landscape audit and roadmap at
# $200 or EUR 200 an hour, in 50-hour blocks (two blocks); that hourly rate is the
# only services figure on this page. The paid pilot, onboarding and consulting,
# and support and updates are Enterprise add-ons priced "Upon request". Their
# fixed prices, the support uplifts, retainers and partner splits stay internal.
#
# NO ENTERPRISE SOVEREIGNTY DETAILS ON THIS PAGE (owner, 2026-09-28): no
# hardware or appliance pricing, no field devices, no onboarding or consulting
# totals, no partner splits. The GX10 lease FAQ and the old consulting-rate FAQ
# were removed for that reason.
---

{{< pricing-table-2 >}}
{
  "intro": [
    "This is the price of FACE by Runink: Fulfilment Autonomous Claims Engine. You pay for the number of people who use it, and you choose where the work runs: on Runink's shared machines, in your own cloud account, or on your own premises.",
    "That is the whole shape of it. The three licences below differ on that one question of where the work runs, and the price follows from it. What the work is comes first, though, because that is the part a price is worth arguing about."
  ],
  "eyebrow": "The work",
  "heading": "Operations Actionable Twins",
  "lead": [
    "These are the operational jobs FACE by Runink is built for. In each one the evidence is already in your systems and nobody has the hours to join it up. Each one ends with a person approving a drafted action rather than reading another dashboard.",
    "They are grouped by when in the operation the problem turns up. Each opens onto the page that explains it: what it reads, what it drafts, and the measures to write your own figures against."
  ],
  "personas": {
    "eyebrow": "Enterprise Exclusive",
    "cards": [
      {
        "name": "Digital",
        "accent": "Paralegals",
        "body": "Your claims and recovery desk. They read freight bills, proofs of delivery and your SLA terms, assemble the evidence for each shortage, damage or late-delivery claim, and draft it inside the carrier's filing window. A person on your team approves every claim before it is filed.",
        "focus": "Focus: Claims & Recovery"
      },
      {
        "name": "Statistical",
        "accent": "Buyers",
        "body": "Your demand planning desk. They test forecasting methods against your own sales history, keep the one that would have predicted it best, and flag where stock cover falls short of lead time. Transfers and reorders are proposed for your planners to approve.",
        "focus": "Focus: Inventory & Fulfilment"
      },
      {
        "name": "Revenue",
        "accent": "Operators",
        "body": "Your freight audit desk. They check every invoice line against your negotiated carrier contracts and rate confirmations, flag fees and accessorials the contract does not support, and draft each short-pay with its evidence. Your finance team decides what is withheld.",
        "focus": "Focus: Finance & Reconciliation"
      }
    ]
  },
  "groups": [
    {
      "label": "Planning what you will need",
      "deck": "Before you commit. What next quarter will ask for, what cover you are holding, and what a change would cost if you made it.",
      "items": [
        { "page": "demand-forecasting", "name": "Demand forecasting" },
        { "page": "fulfillment-optimization", "name": "Stock cover and supplier planning" },
        { "page": "hypothesis-lab", "name": "Testing a change before you commit" }
      ]
    },
    {
      "label": "Moving it",
      "deck": "While the work is moving. The route, the picture across the whole chain, and the driver whose hands are on the wheel.",
      "items": [
        { "page": "route-optimization", "name": "Route planning" },
        { "page": "supply-chain-visibility", "name": "Supply chain visibility" },
        { "page": "voice-dispatch", "name": "Hands-free dispatch for drivers" }
      ]
    },
    {
      "label": "When something goes wrong",
      "deck": "After the event. A container that drifted warm, a return sitting on the dock, a claim with a deadline running.",
      "items": [
        { "page": "cold-chain-safety", "name": "Cold chain and yard safety" },
        { "page": "responsive-reverse-logistics", "name": "Returns and reverse logistics" },
        { "page": "claims-recovery", "name": "Freight claims and port charges" }
      ]
    },
    {
      "label": "Paper, policy and proof",
      "deck": "When someone asks you to prove it. The claim file, the clause that governs, the report.",
      "items": [
        { "page": "insurance-underwriting", "name": "Underwriting and claim files" },
        { "page": "paralegal-review", "name": "Contract and obligation review" },
        { "page": "compliance", "name": "Privacy and audit records" }
      ]
    }
  ],
  "outro": "The three licences below differ on one question: how many people need it, and whose machine it runs on."
}
{{< /pricing-table-2 >}}

**A separate kind of charge.** Everything above is the seat price: flat, set by headcount, unaffected by how much you use it. These two are the opposite of that on purpose — nothing is billed until FACE has already created or protected money for you.

{{< features-list
    title="Business Outcome Fees"
    feature1="Auto-Provisioning|1% to 3% of the transaction value FACE places on your behalf, capped at $150 per order, and billed only on orders you have approved and that are confirmed. A large bulk order is never penalised for its size."
    feature2="Claims & Short-Pay Recovery|20% of what is recovered. Success-fee only — nothing is billed when nothing is recovered."
>}}

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Pay Monthly", "value": "monthly" },
    { "label": "Pay Yearly (About 14% Less)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "ON RUNINK'S SHARED MACHINES",
      "pill_color": "stone",
      "name": "LITE LICENCE",
      "subtitle": "FOR TEAMS OF 1 TO 9 PEOPLE",
      "price_color": "stone",
      "price_monthly": "99",
      "price_yearly": "85",
      "price_subtitle": "PER PERSON, PER MONTH",
      "credits": "18,000 COMPUTE UNITS<br>PER PERSON, PER MONTH",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "How many people you licence, plus any units you use beyond the allowance."},
        {"label": "SHORTEST COMMITMENT", "value": "One month."},
        {"label": "IF WE RECOVER MONEY FOR YOU", "value": "20% of what is recovered. Nothing when nothing is recovered."},
        {"label": "AUTOMATIC SET-UP FEE", "value": "1% to 3% of an approved and confirmed order, never more than $150 per order."}
      ],
      "features": [
        "RUNS ON RUNINK'S SHARED MACHINES, TAKING ITS TURN ALONGSIDE OTHER CUSTOMERS' WORK",
        "18,000 UNITS PER PERSON PER MONTH, POOLED ACROSS THE TEAM",
        "MORE UNITS AS YOU GO, OR BOUGHT AHEAD: 5% LESS FOR A MONTH, 10% LESS FOR A YEAR",
        "UP TO 900 UNITS PER PERSON PER HOUR; WORK PAST THAT PACE WAITS ITS TURN"
      ],
      "button": {
        "text": "START WITH LITE",
        "url": "/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "IN YOUR OWN CLOUD ACCOUNT",
      "pill_color": "orange",
      "name": "DEDICATED LICENCE",
      "subtitle": "FOR 10 PEOPLE AND UP",
      "price_color": "orange",
      "price_monthly": "165",
      "price_yearly": "165",
      "price_subtitle": "PER PERSON, PER MONTH, ON A YEARLY CONTRACT",
      "credits": "UNLIMITED COMPUTE UNITS<br>ON YOUR OWN CLOUD",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "How many people you licence, plus 1.5% of what your cloud charges for the runners."},
        {"label": "SHORTEST COMMITMENT", "value": "One year."},
        {"label": "IF WE RECOVER MONEY FOR YOU", "value": "20% of what is recovered. Nothing when nothing is recovered."},
        {"label": "AUTOMATIC SET-UP FEE", "value": "1% to 3% of an approved and confirmed order, never more than $150 per order."}
      ],
      "features": [
        "RUNNERS IN YOUR OWN GOOGLE CLOUD PROJECT, DATABRICKS OR SNOWFLAKE ACCOUNT",
        "UNLIMITED COMPUTE UNITS",
        "YOUR CLOUD BILLS YOU FOR THE COMPUTE DIRECTLY",
        "YOUR OWN WEB ADDRESS"
      ],
      "button": {
        "text": "TALK ABOUT DEDICATED",
        "url": "/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "ON YOUR PREMISES OR YOUR CLOUD",
      "pill_color": "stone",
      "name": "ENTERPRISE LICENCE",
      "subtitle": "FOR RUNNING IT WHERE YOU CHOOSE",
      "price_monthly": "CUSTOM",
      "price_yearly": "CUSTOM",
      "price_subtitle": "PRICED WITH YOU",
      "credits": "UNLIMITED COMPUTE UNITS<br>WHERE YOU RUN IT",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "Where it runs and the service levels you set."},
        {"label": "SHORTEST COMMITMENT", "value": "Agreed with you."},
        {"label": "IF WE RECOVER MONEY FOR YOU", "value": "Agreed with you and written into the contract."},
        {"label": "AUTOMATIC SET-UP FEE", "value": "Agreed with you and written into the contract."}
      ],
      "features": [
        "RUNNERS ON YOUR OWN SERVERS, INCLUDING SITES KEPT OFF THE NETWORK",
        "OR IN YOUR OWN CLOUD ACCOUNT",
        "UNLIMITED COMPUTE UNITS",
        "A FULL RECORD OF WHO DID WHAT, AND WHEN"
      ],
      "button": {
        "text": "TALK TO US",
        "url": "/#contact",
        "style": "outline"
      }
    }
  ]
}
{{< /pricing-table-1 >}}

{{< pricing-estimator >}}
{
  "copy": {
    "eyebrow": "Estimate",
    "title": "Estimate what FACE by Runink costs",
    "intro": "Pick the situation that is yours, type your own numbers, and get a monthly and a yearly figure with the working shown beside every line. It uses only the prices published on this page.",
    "notice": "An estimate, not a quote.",
    "examples": "Every box starts at a neutral value that you change. Nothing in it is a promise or a prediction of what you will pay or get back.",
    "noscript": "The estimator needs JavaScript. Without it, the licence cards above carry the same prices.",
    "scenarioLegend": "Which of these is you?",
    "scenarios": [
      {"id": "lead", "label": "I am evaluating", "help": "Seats only: what the licence costs for my team."},
      {"id": "prospect", "label": "I am sizing the savings", "help": "Adds claims recovery and orders, then sets them against the fees."},
      {"id": "customer", "label": "I am a customer checking my bill", "help": "Seats, units used, claims and orders this month: the invoice lines."},
      {"id": "market", "label": "I am buying through Google Cloud Marketplace", "help": "The same list prices, and where each part is billed."}
    ],
    "seats": "How many people will use it",
    "seatRange": "1 to {liteMax} people: Lite, on Runink's shared machines. {dedMin} or more: Dedicated, in your own cloud account.",
    "premises": "The work must run on my own premises (Enterprise)",
    "cycle": "Billing cycle (Lite only)",
    "cycle_yearly": "Yearly",
    "cycle_monthly": "Monthly",
    "units": "Units you expect to use in a month, across the team",
    "unitsHint": "The units included with each person are pooled across the team. Units bought ahead are taken as fully used.",
    "unitsPay": "How you pay for units beyond the allowance",
    "pay_payg": "As you go",
    "pay_month": "Bought ahead for a month",
    "pay_year": "Bought ahead for a year",
    "runner": "Runner cloud cost in a month (US dollars)",
    "runnerHint": "What your own cloud charges for the runners. You pay that to your cloud; Runink adds a percentage of it.",
    "claims": "Claims recovery in a month (US dollars)",
    "claimsHint": "Only money that has actually come back counts. Nothing is due when nothing comes back.",
    "orders": "Approved and confirmed fulfilment orders in a month",
    "ordersHint": "Count only orders you approved and that are confirmed. No fee is due on any other order.",
    "orderAvg": "Average value of one order (US dollars)",
    "rate": "Auto-provisioning rate (percent)",
    "rateHint": "Agreed with you within the published range. It starts at the top of the range so the estimate is never low.",
    "resultsTitle": "Your estimate",
    "tierLine": "Licence for these answers: {tier}.",
    "tier_lite": "Lite, on Runink's shared machines",
    "tier_dedicated": "Dedicated, in your own cloud account",
    "tier_enterprise": "Enterprise, on your premises",
    "summary": "About {monthly} a month, {yearly} a year.",
    "enterpriseSummary": "Enterprise is priced with you. Tell us where it must run and we will quote.",
    "enterpriseLabel": "Enterprise licence",
    "pricedWithYou": "Priced with you",
    "enterpriseFormula": "There is no list price. Where it runs and the service levels you set decide it. Fees on automated actions are agreed with you and written into the contract.",
    "colItem": "Item",
    "colAmount": "Amount",
    "colFormula": "How it is worked out",
    "unlimited": "Unlimited",
    "notInTotal": "Not in the total.",
    "line_seats": "People",
    "f_seats": "{seats} people × {price} per person per month",
    "line_units_within": "Extra units",
    "f_units_within": "{used} units used, within the {included} included: nothing extra",
    "line_units_payg": "Extra units, as you go",
    "f_units_payg": "{used} used − {included} included = {extra} extra. {blocks} blocks of 100 × {rate}",
    "line_units_month": "Extra units, bought a month ahead",
    "f_units_month": "{used} used − {included} included = {extra} extra. {blocks} blocks of 100 × {rate}, less {off}",
    "line_units_year": "Extra units, bought a year ahead",
    "f_units_year": "{used} used − {included} included = {extra} extra. {blocks} blocks of 100 × {rate}, less {off}",
    "line_units_unlimited": "Units",
    "f_units_unlimited": "Unlimited: the work runs in your own cloud account",
    "line_runner": "Runner fee",
    "f_runner": "{pct} of the {cost} your cloud charges for the runners",
    "line_runner_cloud": "Runner cloud cost",
    "f_runner_cloud": "{cost} a month, paid to your own cloud.",
    "line_claims": "Claims recovery fee",
    "f_claims": "{pct} of {amount} of claims recovery",
    "line_orders": "Auto-provisioning fee",
    "f_orders": "{orders} orders × {each} each. One order: {pct} of {avg} = {raw}, never more than {cap}",
    "totalMonthly": "Total a month",
    "f_totalMonthly": "The lines above, without any line marked not in the total",
    "totalYearly": "Total a year",
    "f_totalYearly": "Total a month × 12",
    "netTitle": "Your own figures: claims recovery set against the fees",
    "netRecovery": "Claims recovery you typed",
    "f_netRecovery": "The amount you entered above, per month",
    "netFees": "Fees",
    "f_netFees": "The total a month above",
    "netMonthly": "Net a month",
    "f_netMonthly": "Claims recovery − fees",
    "netYearly": "Net a year",
    "f_netYearly": "Net a month × 12",
    "netNote": "These are the figures you typed. They are not a result that Runink promises.",
    "marketSeat": "Through Google Cloud Marketplace the seat fee is billed through the listing.",
    "marketRunner": "The runner compute is on your own Google Cloud bill. It is not in the total above.",
    "customerNote": "Use the figures from your own console for this month. Your invoice is the record; if a line differs, ask us.",
    "currencyNote": "Prices are list prices in US dollars. Invoices are in your regional currency, converted at the European Central Bank monthly rate.",
    "footer": "Yearly figures assume every month looks like the one you describe. Orders are priced one by one on the invoice, so a mix of small and large orders can differ from an average.",
    "pct": "{n}%"
  }
}
{{< /pricing-estimator >}}



{{< faq >}}
{
  "title": "Questions Before You Sign",
  "description": "What the work needs from you and who decides it, then what you are charged for.",
  "questions": [
    {
      "question": "We carry losses in returns, in claims, in cold chain. Will this touch them?",
      "answer": "Each of those has a page of its own above, and so does every other job listed there. Reading them and agreeing is not the way to find out, though. Bring one of them and a month of the records behind it.\n\nEvery one of those pages ends with the measures to take out of your own systems first — days from a box landing to the call being made, claims filed against claims available, forecast error by line. Write yours down before anything changes, because the baseline is gone for good once it does.\n\nIf the losses you carry are not the shape of the ones described there, we will say so."
    },
    {
      "question": "What does it need from our systems before it can do any of this?",
      "answer": "Records you already hold. Each scenario names what it wants in order to start: one month of returns and your credit notes; one lane or one carrier and a quarter of invoices; a year of weekly history for one product family; one closed claim file and your delegated authority schedule; one contract and a question your team answered from memory.\n\nExtracts in whatever format your systems produce them are enough to begin with. The joining is the work."
    },
    {
      "question": "Who signs off a claim or a letter that it drafts?",
      "answer": "A named person. The paperwork is gathered — the entry, the port, the reason it is held, the documents that are missing, the days it has been held and the per-day charge — and the letter is drafted. Then it stops.\n\nSomebody reads the case and approves it, edits it or throws it out, and that sign-off is kept on the record. **Nothing goes to the carrier before it.** The same shape holds elsewhere: what arrives is a proposed action, and an action nobody approves is an action that has not been sent."
    },
    {
      "question": "What does it do when it cannot tell?",
      "answer": "It says so, rather than answering anyway.\n\nA return grade it does not recognise is refused instead of filed under a best guess. A demand series it cannot fit comes back saying it could not be fitted, instead of as a confident-looking line with nothing underneath it. Where part of a drafted action cannot be carried out, the reply names the step that did not happen instead of reporting the work as done.\n\nThat matters more than it sounds. The failure this replaces is a plausible answer that nobody downstream could tell apart from a real one."
    },
    {
      "question": "What happens when the forecast is wrong?",
      "answer": "You can see why it was wrong. Competing methods are tried against periods your own history already contains, and the one that predicted those periods best is the one used. The answer carries the name of the method that won.\n\nSo a miss is something to look into — which method, against which history, and what changed — rather than something to take on trust. Your own forecast error by line is the figure to write down before any of it is running."
    },
    {
      "question": "In a year, somebody asks why a claim was filed. What do we show them?",
      "answer": "The record. Each proposed action waits in a queue as a record of its own, and approving it is the step that carries it out.\n\nThat approval is written down with the name of the person who gave it and what they decided, kept together. So the answer to why a claim was filed or an entry was held comes out of the record rather than out of whoever still remembers."
    },
    {
      "question": "Where does our data go?",
      "answer": "Onto the machines your licence names, and no further: Runink's own shared machines on Lite, runners in your own cloud account on Dedicated, your own servers on Enterprise. The order files, the customs papers, the sensor readings and the reasoning about them stay there. Nothing goes to an outside model provider.\n\nThat is the answer a security review asks for before it will let a supplier hold its order data. It is also why the three licences above are told apart by where the work runs: that question is the first one a buyer in a regulated business has to settle."
    },
    {
      "question": "What am I actually paying for?",
      "answer": "Seats. A **seat** is one person who uses FACE by Runink. You count the people who need it, multiply by the price above, and that is the licence.\n\nThe licence you pick decides where the work runs. **Lite** runs on Runink's shared machines and includes Compute Units with every seat. **Dedicated** runs on runners in your own cloud account with no limit on units: your cloud bills you for that compute directly, and Runink adds 1.5% of what those runners cost. **Enterprise** runs on your own premises or in your own cloud, priced with you.\n\nThese seats are for FACE. PULSE and Runink TIDE are separate products, each sold with its own subscription. Beyond the licence, the only fees on a FACE seat are the usage fees on FACE's automated actions, set out above."
    },
    {
      "question": "What is a Compute Unit?",
      "answer": "It is how Runink counts work on its shared machines. Each analysis Runink runs draws **Compute Units** from your allowance, so that what you were given and what you have used are stated in the same terms, and both are on screen in the console rather than arriving at the end of the month.\n\nEvery **Lite** seat carries 18,000 units a month, pooled across the team, so a heavy week for one person draws on the same allowance as a quiet week for another.\n\nOn **Dedicated** and **Enterprise** the work runs in your own cloud or on your own servers, and units are unlimited."
    },
    {
      "question": "What happens if we go over the allowance?",
      "answer": "On the **Lite Licence**, you choose how to pay for more. Units beyond the allowance are charged as you go at **$0.12 per 100 units**, or you can buy units in advance: **5% less** for a month's worth, **10% less** for a year's. Dedicated and Enterprise have no allowance to go over.\n\nYou can see the running total in the console and set a budget against it, so the first you hear of a heavy month is not the invoice."
    },
    {
      "question": "Which licence fits us?",
      "answer": "Decide where the work should run.\n\nUnder ten people, the **Lite Licence** is the fit. It runs on Runink's shared machines at the lowest price, and it is the only one you can take a month at a time — so an evaluation does not need a year's commitment. Work there takes its turn alongside other customers' work.\n\nTen or more, the **Dedicated Licence** runs on runners in your own Google Cloud project, or your Databricks or Snowflake account. It costs more per person than Lite and brings unlimited Compute Units; your cloud bills you for the compute. It is taken a year at a time.\n\nIf the work has to run on your own servers, including sites kept off the network, that is **Enterprise**, and the conversation starts with where it has to run."
    },
    {
      "question": "Do we have to sign for a year?",
      "answer": "Only for Dedicated and Enterprise. The **Lite Licence** can be taken month by month at $99 per person, or a year at a time at $85 — the same difference, about 14%, shown by the toggle above.\n\nDedicated and Enterprise are a year at a time because both set runners up for your company specifically, in your own cloud or on your own servers."
    },
    {
      "question": "How does a FACE project start, and what do the services cost?",
      "answer": "With a **landscape audit and roadmap**. We start by looking, not selling: an audit of your current landscape, then an implementation roadmap built on it. The audit describes your environment as it is; the roadmap says what comes next. It is **$200 or €200 an hour, in 50-hour blocks**: one block for the audit, one for the roadmap.\n\nThe Enterprise engagement packages add the following, each priced **Upon request**: a paid pilot (60 days of proof of value on your own data, run from the roadmap), onboarding and consulting, and support and updates (passive plans for updates and fixes, active plans with named engineers and response times). They are delivered by Runink and its partners."
    },
    {
      "question": "We already have committed spend on GCP, Snowflake or Databricks. Can we buy FACE against that?",
      "answer": "Yes: that is the **Dedicated Licence**. Its runners run in your own Google Cloud project, or your Snowflake or Databricks account, on compute you already pay that platform for.\n\nThe compute is billed to you directly by the platform rather than provisioned and billed by us, so there is no infrastructure margin of ours stacked on top of theirs: you pay their compute rate, our seat price, and 1.5% of what those runners cost. We do not quote a discount here; the rate against your committed spend is between you and that platform."
    },
    {
      "question": "What does heavier use cost?",
      "answer": "On **Lite**, a team can use up to 900 units per person per hour. Work past that pace waits its turn in line; it is never refused, and the pace itself costs nothing extra. Units beyond the monthly allowance are paid as you go or bought ahead, as above.\n\nOn **Dedicated**, units are unlimited: heavier use shows up on your own cloud bill as the compute it used, plus 1.5% of that from Runink. On **Enterprise** it runs where you already run things.\n\nEither way your spend follows decisions you made — how many seats, and where the work runs — rather than a price per question."
    }

  ]
}
{{< /faq >}}


---
