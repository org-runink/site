---
title: "Pricing"
description: "The operational jobs Runink FACE is built for, and what a licence to run them costs. You pay for the number of people who use it; each person comes with an allowance of computing capacity included, so using it more does not raise the bill."
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
# THE GX10 SOVEREIGNTY COMPUTE APPLIANCE IS NEW (added alongside the fee band).
# It is a leased, bundled line inside Dedicated/Enterprise, not a separate
# SKU — the "FEATURES" line on those two cards points to the FAQ, which states
# the 1-3 year term and the depreciation-shaped Early Termination Fee
# (100% / 60% / 25% of remaining payments). The Enterprise-consulting and
# marketplace-committed-spend FAQ entries are additions of the same kind:
# real, decided terms that had no answer on this page before.
---

{{< pricing-table-2 >}}
{
  "intro": [
    "You pay for the number of people who use Runink. Each person comes with an allowance of computing capacity included in the price.",
    "That is the whole shape of it. The bill follows your headcount, not your usage, so a team that finds heavy use for Runink does not open a new line item that grows with it. What the work is comes first, though, because that is the part a price is worth arguing about."
  ],
  "eyebrow": "The work",
  "heading": "Operations Actionable Twins",
  "lead": [
    "These are the operational jobs Runink FACE is built for. In each one the evidence is already in your systems and nobody has the hours to join it up. Each one ends with a person approving a drafted action rather than reading another dashboard.",
    "They are grouped by when in the operation the problem turns up. Each opens onto the page that explains it: what it reads, what it drafts, and the measures to write your own figures against."
  ],
  "personas": {
    "eyebrow": "Enterprise Exclusive",
    "cards": [
      {
        "name": "Digital",
        "accent": "Paralegals",
        "body": "Your automated legal and compliance team. They autonomously ingest freight bills, cross-reference SLA agreements, and instantly file irrefutable claims to recover lost margins from carriers without manual intervention.",
        "focus": "Focus: Claims & Recovery"
      },
      {
        "name": "Statistical",
        "accent": "Buyers",
        "body": "Your autonomous demand planning unit. They intelligently ingest market trends and sales velocity to predict exact stock needs, dynamically orchestrating inventory allocation across your entire distribution network.",
        "focus": "Focus: Inventory & Fulfilment"
      },
      {
        "name": "Revenue",
        "accent": "Operators",
        "body": "Your forensic financial auditors. They meticulously audit every invoice line against your negotiated carrier contracts, automatically flagging ghost fees and executing Short-Pays to halt margin leakage.",
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
        { "page": "compliance", "name": "Privacy and emissions" }
      ]
    }
  ],
  "outro": "The three licences below differ on one question: how many people need it, and whose machine it runs on."
}
{{< /pricing-table-2 >}}

**A separate kind of charge.** Everything above is the seat price: flat, set by headcount, unaffected by how much you use it. These two are the opposite of that on purpose — nothing is billed until FACE has already created or protected money for you.

{{< features-list
    title="Business Outcome Fees"
    feature1="Auto-Provisioning|1% to 3% of the transaction value FACE places on your behalf, capped at $50 per order. A large bulk order is never penalised for its size."
    feature2="Claims & Short-Pay Recovery|20% of what is recovered. Success-fee only — nothing is billed when nothing is recovered."
>}}

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Pay Monthly", "value": "monthly" },
    { "label": "Pay Yearly (15% Less)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "ON A SHARED MACHINE",
      "pill_color": "stone",
      "name": "LITE LICENCE",
      "subtitle": "FOR TEAMS OF 1 TO 9 PEOPLE",
      "price_color": "stone",
      "price_monthly": "86",
      "price_yearly": "75",
      "price_subtitle": "PER PERSON, PER MONTH",
      "credits": "COMPUTING INCLUDED<br>FROM A SHARED POOL",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "How many people you licence. Not how much they use it."},
        {"label": "SHORTEST COMMITMENT", "value": "One month."},
        {"label": "IF WE RECOVER MONEY FOR YOU", "value": "20% of what is recovered. Nothing when nothing is recovered."},
        {"label": "AUTOMATIC SET-UP FEE", "value": "1% to 3%, never more than $50."}
      ],
      "features": [
        "RUNS ON A MACHINE SHARED WITH OTHER CUSTOMERS",
        "COMPUTING CAPACITY INCLUDED WITH EVERY PERSON",
        "THE STANDARD SET OF AUTOMATED HELPERS",
        "THE ENTRY POINT FOR A FIRST TEAM"
      ],
      "button": {
        "text": "START WITH LITE",
        "url": "/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "ON YOUR OWN MACHINE",
      "pill_color": "orange",
      "name": "DEDICATED LICENCE",
      "subtitle": "FOR 10 PEOPLE AND UP",
      "price_color": "orange",
      "price_monthly": "75",
      "price_yearly": "75",
      "price_subtitle": "PER PERSON, PER MONTH",
      "credits": "COMPUTING INCLUDED<br>FROM YOUR OWN POOL",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "How many people you licence. Not how much they use it."},
        {"label": "SHORTEST COMMITMENT", "value": "One year."},
        {"label": "IF WE RECOVER MONEY FOR YOU", "value": "20% of what is recovered. Nothing when nothing is recovered."},
        {"label": "AUTOMATIC SET-UP FEE", "value": "1% to 3%, never more than $50."}
      ],
      "features": [
        "RUNS ON MACHINES KEPT FOR YOUR COMPANY ALONE",
        "YOUR OWN WEB ADDRESS",
        "FIRST CALL ON THE CAPACITY YOU PAY FOR",
        "5,000 UNITS PER PERSON, PLUS 10,000 FOR EVERY 10",
        "OPTION: THE GX10 SOVEREIGNTY APPLIANCE, FROM ~$275/MO BUNDLED IN ON A 3-YEAR TERM (SEE FAQ)"
      ],
      "button": {
        "text": "TALK ABOUT DEDICATED",
        "url": "/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "IN YOUR OWN BUILDING",
      "pill_color": "stone",
      "name": "ENTERPRISE LICENCE",
      "subtitle": "FOR HOSTING IT YOURSELF",
      "price_monthly": "CUSTOM",
      "price_yearly": "CUSTOM",
      "price_subtitle": "PRICED WITH YOU",
      "credits": "COMPUTING INCLUDED<br>SIZED WITH YOU",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "The capacity you need and the service levels you set."},
        {"label": "SHORTEST COMMITMENT", "value": "Agreed with you."},
        {"label": "IF WE RECOVER MONEY FOR YOU", "value": "Agreed with you and written into the contract."},
        {"label": "AUTOMATIC SET-UP FEE", "value": "Agreed with you and written into the contract."}
      ],
      "features": [
        "RUNS ON YOUR PREMISES, INCLUDING SITES KEPT OFF THE NETWORK",
        "CAPACITY SIZED AND MANAGED WITH YOU",
        "EVERYTHING IN THE DEDICATED LICENCE",
        "A FULL RECORD OF WHO DID WHAT, AND WHEN",
        "OPTION: THE GX10 SOVEREIGNTY APPLIANCE, PRICED WITH YOU AT ENTERPRISE SCALE (SEE FAQ)"
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
      "answer": "Onto machines you control, and no further. The order files, the customs papers, the sensor readings and the reasoning about them all run on hardware you run. Nothing goes to an outside model provider.\n\nThat is the answer a security review asks for before it will let a supplier hold its order data. It is also why the three licences above are told apart by whose machine they run on: that question is the first one a buyer in a regulated business has to settle."
    },
    {
      "question": "What am I actually paying for?",
      "answer": "Seats. A **seat** is one person who uses Runink. You count the people who need it, multiply by the price above, and that is the licence.\n\nEach seat also comes with an allowance of computing capacity — the machine time Runink uses to read your documents, check your records and draft the work. That allowance is included in the seat price. You are not billed by the question, the document or the report.\n\nThese seats are for FACE. PULSE and CORE are separate products, each sold with its own subscription. The only fees on top of a FACE seat are the usage fees on FACE's automated actions, set out above."
    },
    {
      "question": "What is a Compute Unit?",
      "answer": "It is how Runink counts work. Each analysis Runink runs draws **Compute Units** from your allowance — a FACE fetch run, for example, draws 25 units — so that what you were given and what you have used are stated in the same terms, and both are on screen in the console rather than arriving at the end of the month.\n\nEvery **Dedicated** seat carries 5,000 units, and your organisation gets a further 10,000 units for every 10 seats you hold. Those units are pooled, so a heavy week for one person draws on the same allowance as a quiet week for another."
    },
    {
      "question": "What happens if we go over the allowance?",
      "answer": "Units used beyond the allowance are charged at **$0.10 per 100 units**. In practice that line stays empty for ordinary day-to-day work and appears when you run something very large in one go — reprocessing a year of documents in an afternoon, for example. For a large one-off batch, machine time is also available as a separate option at **$5.00 per hour**.\n\nYou can see the running total in the console and set a budget against it, so the first you hear of a heavy month is not the invoice."
    },
    {
      "question": "Which licence fits us?",
      "answer": "Count your people first.\n\nUnder ten, the **Lite Licence** is the fit. It runs on a machine shared with other customers, and it is the only one you can take a month at a time — so an evaluation does not need a year's commitment.\n\nTen or more, the **Dedicated Licence** costs less per person and runs on machines kept for your company alone, with your own web address and first call on the capacity you pay for. It is taken a year at a time.\n\nIf your information cannot leave your own building, that is **Enterprise**, and the conversation starts with where it has to run."
    },
    {
      "question": "Do we have to sign for a year?",
      "answer": "Only for Dedicated and Enterprise. The **Lite Licence** can be taken month by month at $86 per person, or a year at a time at $75 — the same 15% difference shown by the toggle above.\n\nDedicated and Enterprise are a year at a time because both involve setting machines aside for your company specifically, and that capacity is reserved whether or not you use it in a given week."
    },
    {
      "question": "What is the sovereignty compute appliance, and what happens if we exit the lease early?",
      "answer": "For Dedicated and Enterprise, you can add a dedicated **sovereignty compute appliance** — the ASUS Ascent GX10, built on NVIDIA's GB10 Grace Blackwell superchip — as the physical box FACE runs on for full on-premises isolation. It is **leased monthly and bundled into your seat price as one line**, not billed as a separate SKU you have to reason about on its own. On Dedicated, that bundled line runs **from around $275 a month on a 3-year term**; a 1 or 2 year term carries a higher monthly rate to reflect the faster amortization. On Enterprise it is priced with you as part of the wider conversation.\n\nThe lease is a **1 to 3 year commitment**. Exiting early carries an **Early Termination Fee tied to what the hardware is actually worth at that point, not a flat number**: 100% of the remaining payments in year one, 60% in year two of a 2 to 3 year term, and 25% in the final stretch of a 3 year term. That schedule tracks the hardware's real residual and resale value — steepest when the least depreciation has happened, and easing as more of it has."
    },
    {
      "question": "What does Enterprise onboarding cost, beyond the licence?",
      "answer": "Enterprise deployments carry onboarding and integration consulting, priced at **$300 per hour**, sold in **$15,000 blocks of 50 hours**. That work is split with whoever delivers it: **two thirds goes to the partner or consultant doing the implementation**, and **one third is retained by Runink** to keep partner-privileged instances running and provide ongoing support. It is scoped with you as part of the Enterprise conversation, not added afterward."
    },
    {
      "question": "We already have committed spend on GCP, Snowflake or Databricks. Can we buy FACE against that?",
      "answer": "Ask us. Runink is packaged to run on compute you already pay those platforms for — as a Compute Engine image on Google Cloud, or as a Native App in Snowpark Container Services on Snowflake — and we work out with you and the platform how the purchase is made.\n\nWhere FACE runs that way, the compute is billed to you directly by the platform rather than provisioned and billed by us, so there is no infrastructure margin of ours stacked on top of theirs: you pay their compute rate and our seat and Compute Unit price. We do not quote a discount here; the rate against your committed spend is between you and that platform."
    },
    {
      "question": "Why does using it more not cost more?",
      "answer": "Because the reasoning runs on hardware rather than on somebody else's metered service. The cost of a question is the electricity to answer it.\n\nThe practical consequence is a budgeting one. Your spend is a function of the capacity you run, decided once, rather than a number that moves with how many questions your team asked last month. A team that finds heavy use for Runink does not discover a cost that grows with that success."
    }
  ]
}
{{< /faq >}}


---
