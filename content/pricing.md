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
---

{{< pricing-table-2 >}}
{
  "intro": [
    "You pay for the number of people who use Runink. Each person comes with an allowance of computing capacity included in the price.",
    "That is the whole shape of it. The bill follows your headcount, not your usage, so a team that finds heavy use for Runink does not open a new line item that grows with it. What the work is comes first, though, because that is the part a price is worth arguing about."
  ],
  "eyebrow": "The work",
  "heading": "Where it is put to work",
  "lead": [
    "These are the operational jobs Runink FACE is built for. In each one the evidence is already in your systems and nobody has the hours to join it up. Each one ends with a person approving a drafted action rather than reading another dashboard.",
    "They are grouped by when in the operation the problem turns up. Each opens onto the page that explains it: what it reads, what it drafts, and the measures to write your own figures against."
  ],
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
        "1,000 UNITS PER PERSON, PLUS 2,000 FOR EVERY 10",
        "YOUR OWN WEB ADDRESS",
        "FIRST CALL ON THE CAPACITY YOU PAY FOR"
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

{{< enterprise-a2a >}}

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
      "answer": "Seats. A **seat** is one person who uses Runink. You count the people who need it, multiply by the price above, and that is the licence.\n\nEach seat also comes with an allowance of computing capacity — the machine time Runink uses to read your documents, check your records and draft the work. That allowance is included in the seat price. You are not billed by the question, the document or the report."
    },
    {
      "question": "What is a Compute Unit?",
      "answer": "It is the meter for machine time, the way a kilowatt-hour is the meter for electricity. Runink counts capacity in **Compute Units** so that what you were given and what you have used are stated in the same terms, and both are on screen in the console rather than arriving at the end of the month.\n\nEvery **Dedicated** seat carries 1,000 units, and your organisation gets a further 2,000 units for every 10 seats you hold. Those units are pooled, so a heavy week for one person draws on the same allowance as a quiet week for another."
    },
    {
      "question": "What happens if we go over the allowance?",
      "answer": "Extra capacity is charged at **$0.10 per 100 units**, or **$5.00 per hour of machine time**. In practice that line stays empty for ordinary day-to-day work and appears when you run something very large in one go — reprocessing a year of documents in an afternoon, for example.\n\nYou can see the running total in the console and set a budget against it, so the first you hear of a heavy month is not the invoice."
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
      "question": "Why does using it more not cost more?",
      "answer": "Because the reasoning runs on hardware rather than on somebody else's metered service. The cost of a question is the electricity to answer it.\n\nThe practical consequence is a budgeting one. Your spend is a function of the capacity you run, decided once, rather than a number that moves with how many questions your team asked last month. A team that finds heavy use for Runink does not discover a cost that grows with that success."
    }
  ]
}
{{< /faq >}}


---
