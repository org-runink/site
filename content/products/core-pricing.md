---
title: "CORE Pricing"
description: "What a licence to run Runink CORE costs. You pay for the number of people who use it; each person comes with an allowance of computing capacity included. There is no second bill: CORE never charges a percentage of anything it touches."
layout: "pricing"
date: "2026-09-27T00:00:00Z"
author: "Runink"
product_name: "Runink CORE"
product_url: "products/core/"
product_subcategory: "IT operations, AI governance and application platform"
# WHERE EVERY CLAIM ON THIS PAGE COMES FROM.
#
# This page shares its shortcodes and its billing SHAPE with content/pricing.md
# (FACE's page) because it is genuinely the same infrastructure: seat-based
# licences, a pooled Compute Unit allowance per seat, the same overage rate.
# The seat prices ($86/$75), the CU formula (1,000 per seat + 2,000 per 10
# seats) and the overage rate ($0.10/100 CU or $5.00/hour) are copied from
# content/pricing.md verbatim, not re-derived — re-pricing CORE's infrastructure
# is not a call this page makes.
#
# WHAT IS NOT SHARED: FACE's page prices a "success fee" (20% of recovered
# money) and an automatic set-up fee (1%-3%) on top of the seat price. CORE has
# neither. It is compute-only by design — see the FAQ entry "Why does CORE
# never charge a success fee?" — and every outcome_strategies row below says so
# rather than staying silent about it.
#
# THE SCENARIO BAND is built from CORE's own five real console parts —
# Overview, DevEx, DataEx, Intelligence, FORGE — exactly as content/products/
# core.md's `rp.plate.rows` and `rp.facts` name them, and as the whitepaper's
# own table states them (content/blog/whitepapers/runink-core.md, "How the
# console is arranged"). Every group deck and item note below is lifted
# word-for-word, or trimmed to one clause without adding a word, from
# core.md's `rp.features.items` bodies (keys: overview, devex, dataex,
# intelligence, resolve, forge) or from the whitepaper. Nothing here is a
# capability CORE does not already claim elsewhere. There is no sixth group
# for "Resolve" — the whitepaper places it directly after Intelligence and
# core.md's own facts still count "5 parts... on one menu" — so Resolve's
# item sits inside the Intelligence group, where the source puts it.
#
# GX10 hardware, its Early Termination Fee schedule, and the Enterprise
# onboarding/consulting pricing ($300/hr in $15,000 blocks) are new commercial
# terms decided by the owner (2026-09-27), not drawn from an existing content
# file. The onboarding split ($10,000 partner / $5,000 Runink per block) is
# carried over verbatim from ../../face/COMMERCIAL_STRATEGY.md section D,
# because Enterprise onboarding is the same consulting motion regardless of
# which product it onboards.
#
# English only, like content/products/core.md itself ("English only, like
# /river/ and /downloads/") — no .es/.fr/.pt sibling files for this page.
#
# URL: this file lives at content/products/core-pricing.md rather than at
# content root (where content/pricing.md sits), so its section is "products"
# and its permalink is /products/core-pricing/ — grouped with, and clearly
# addressed as belonging to, /products/core/ rather than sitting as a second
# unqualified /core-pricing/ beside the generic /pricing/. content/products/
# _index.md is a hand-curated switchboard (`items`, not a section listing), so
# adding this file does not add an unwanted card there.
---

{{< pricing-table-2 >}}
{
  "link_base": "/blog/whitepapers/runink-core/",
  "intro": [
    "You pay for the number of people who use Runink CORE. Each person comes with an allowance of computing capacity included in the price. There is no second bill: CORE never takes a percentage of anything it touches, because an audit record or a deploy pipeline is not the kind of thing a success fee should attach to.",
    "That is the whole shape of it. The bill follows your headcount, not what CORE finds, fixes or ships, so a platform team that puts CORE to heavy use does not open a new line item that grows with it. What the console actually does comes first, though, because that is the part worth arguing about."
  ],
  "eyebrow": "The console",
  "heading": "One Console, Five Parts",
  "lead": [
    "These are the five parts the CORE console is built from. Each one answers one question, and each opens onto more detail in the CORE paper.",
    "They are grouped in the order the console's own menu uses them — the order a person goes to when they have the question, not an order invented for this page."
  ],
  "groups": [
    {
      "label": "Overview",
      "deck": "Is anything wrong, and where do I go next?",
      "items": [
        { "page": "", "name": "Needs attention, worst first", "note": "Headline readings, then a Needs attention list, worst first, each item linking to the page that deals with it." },
        { "page": "", "name": "Ask CORE in plain words", "note": "Ask CORE, the assistant, does a task in plain words and shows every step it took." },
        { "page": "", "name": "Not known is never shown as a zero", "note": "A figure the console could not read is shown as not known, never drawn as a zero, so nobody decides on a reading nobody took." }
      ]
    },
    {
      "label": "DevEx",
      "deck": "Is the platform running, and did our changes ship?",
      "items": [
        { "page": "", "name": "GitOps: does it match what was written down?", "note": "GitOps shows whether what is running matches what was written down." },
        { "page": "", "name": "Deploy lineage", "note": "Deploy lineage shows whether a change reached production." },
        { "page": "", "name": "Audit chain, verified on demand", "note": "Press Verify now on the Audit chain and it names the first record that was altered." }
      ]
    },
    {
      "label": "DataEx",
      "deck": "What may our models and agents do, and can we trust their work?",
      "items": [
        { "page": "", "name": "Model cards, checked against what's live", "note": "Model cards list each model's source, version, licence and test evidence, checked against what is live." },
        { "page": "", "name": "Autonomy is a setting, never a default", "note": "Autonomy is a setting you choose for each kind of action, and every kind starts with a person approving each act." },
        { "page": "", "name": "A second opinion, on the record", "note": "Where a finding matters, an independent assessor reads the evidence first. It can agree, disagree or say it could not judge." }
      ]
    },
    {
      "label": "Intelligence",
      "deck": "What does our data hold, and where do money or controls slip?",
      "items": [
        { "page": "", "name": "Three dashboards, one set of figures", "note": "Dashboards for the analyst, the finance lead and the programme office, built on one set of figures." },
        { "page": "", "name": "Computed, or shown absent with the reason", "note": "Data quality, capital spending, business rules and lineage, each computed from your own records or shown as absent with the reason." },
        { "page": "", "name": "Resolve: an inventory read, not remembered", "note": "Resolve maps which systems hold which data and how they connect, when an administrator asks. It keeps structure and counts only, never a value, and marks each link as declared, inferred or a guess." }
      ]
    },
    {
      "label": "FORGE",
      "deck": "How does a written brief become a working application?",
      "items": [
        { "page": "", "name": "Describe it, the model proposes the steps", "note": "Describe what you want in plain words. The company's own model proposes the steps on a canvas." },
        { "page": "", "name": "Nothing filed until a person approves", "note": "An approved brief goes, word for word, to coding agents as a work item. Nothing is filed until a person approves it." },
        { "page": "", "name": "The brief never leaves your hardware", "note": "The brief never leaves the company's hardware, from the first draft to the working application." }
      ]
    }
  ],
  "outro": "The three licences below differ on one question: how many people need it, and whose machine it runs on. There is no second question about a percentage of anything CORE finds, fixes or ships — that question does not exist here."
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
        {"label": "SUCCESS FEES", "value": "None. CORE is priced on compute, never on a percentage of anything it touches."},
        {"label": "AUTOMATIC SET-UP FEE", "value": "None."}
      ],
      "features": [
        "RUNS ON A MACHINE SHARED WITH OTHER CUSTOMERS",
        "COMPUTING CAPACITY INCLUDED WITH EVERY PERSON",
        "ALL FIVE CONSOLE PARTS: OVERVIEW, DEVEX, DATAEX, INTELLIGENCE, FORGE",
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
        {"label": "SUCCESS FEES", "value": "None. Audit records and deploy pipelines are not the kind of thing a success fee should attach to."},
        {"label": "GX10 APPLIANCE", "value": "From ~$275/month on a 3-year term, bundled into this price as one line. See the FAQ for shorter terms and what an early exit costs."}
      ],
      "features": [
        "RUNS ON MACHINES KEPT FOR YOUR COMPANY ALONE",
        "5,000 UNITS PER PERSON, PLUS 10,000 FOR EVERY 10",
        "YOUR OWN WEB ADDRESS",
        "THE GX10 SOVEREIGNTY APPLIANCE, FROM ~$275/MO, BUNDLED IN"
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
        {"label": "SUCCESS FEES", "value": "None. Not on this licence, not on any other. CORE never takes a percentage of anything it touches."},
        {"label": "ONBOARDING & CONSULTING", "value": "$300 per hour, sold in $15,000 blocks of 50 hours. See the FAQ for how that splits."}
      ],
      "features": [
        "RUNS ON YOUR PREMISES, INCLUDING SITES KEPT OFF THE NETWORK",
        "CAPACITY SIZED AND MANAGED WITH YOU",
        "EVERYTHING IN THE DEDICATED LICENCE, INCLUDING THE GX10 APPLIANCE WHERE YOU WANT IT",
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


{{< faq >}}
{
  "title": "Questions Before You Sign",
  "description": "What the console does and who decides it, then what you are charged for.",
  "questions": [
    {
      "question": "We run more software than any one person understands. Will CORE touch that?",
      "answer": "That is the problem CORE is built for. Most companies run applications from different teams, vendors and years, each with its own way of being started, watched and changed, and its own idea of who may touch the company's information.\n\nCORE gives every application the same foundations once: somewhere to run, one way to prove who you are, a way to reach company data, one place to look, and a way to get changes made. The five groups above are that one place to look, and each opens onto the console page that answers the question in its own heading."
    },
    {
      "question": "What does CORE need from us before it can do any of this?",
      "answer": "Not much to start. One downloaded file and one command bring the whole platform up on a workstation, so you can open Overview and see which readings say they have not been measured, open the Harness and read a remedy, and open the Audit chain and press Verify now — all before anything is installed on machines you own.\n\nAdding one real data source, and putting it on machines you control, are the next steps, each at your own pace. What it needs from your side to begin is a named owner and a decision about who may change data connections and who may arm agents. Everything else can be decided as you go."
    },
    {
      "question": "Who approves what CORE's helpers propose?",
      "answer": "A person, every time. The automated helpers propose; nothing is filed, changed or published until someone with the right to decide says yes. FORGE will propose the steps to build something on a canvas, and an approved brief only then goes to coding agents as a work item. The Harness takes an action only after a person confirms it, and it is written to the Audit chain before it happens.\n\nThat holds however small the action looks. What arrives is always a proposed action, and an action nobody approves is an action that has not been taken."
    },
    {
      "question": "What does it do when it cannot tell?",
      "answer": "It says so, rather than answering anyway. A figure the console could not read is shown as not known, never drawn as a zero, so nobody decides on a reading nobody took. An assessment that could not be completed says so, and says that this is not the same as a clean result.\n\nThat matters more than it sounds. The failure this replaces is a plausible-looking answer that nobody downstream could tell apart from a real one."
    },
    {
      "question": "How do we know the record has not been altered?",
      "answer": "Open the Audit chain and press **Verify now**. The console walks every record and names the first one that was edited, removed, inserted or moved, rather than asking you to trust that nothing changed.\n\nThe same page is where GitOps shows whether what is running matches what was written down, and Deploy lineage shows whether a given change reached production — so \"what actually shipped\" is a reading, not a memory."
    },
    {
      "question": "Where does our data go?",
      "answer": "To a machine you own, and it stays there. The model, the records, the files and the certificate authority all run on your hardware. Nothing is sent to an outside AI service, and nothing is sent out to be trained on — there is no account with an outside model provider for it to be sent to.\n\nDeleting a document removes its influence completely, because nothing is left behind in the model. That is the answer a security review asks for before it will let a platform hold the company's information at all."
    },
    {
      "question": "What am I actually paying for?",
      "answer": "Seats. A **seat** is one person who uses Runink CORE. You count the people who need it, multiply by the price above, and that is the licence.\n\nEach seat also comes with an allowance of computing capacity — the machine time CORE uses to run the assistant, the Harness, the helpers and FORGE on your behalf. That allowance is included in the seat price. You are not billed by the question, the deployment or the finding."
    },
    {
      "question": "What is a Compute Unit?",
      "answer": "It is the meter for machine time, the way a kilowatt-hour is the meter for electricity. CORE counts capacity in **Compute Units** so that what you were given and what you have used are stated in the same terms, both readable in the console rather than arriving at the end of the month.\n\nThe Model cards and Inference pages show how much of that capacity a model reserves and uses, so sizing your allowance is a reading rather than a guess. Every **Dedicated** seat carries 5,000 units, and your organisation gets a further 10,000 units for every 10 seats you hold. Those units are pooled, so a heavy week on one console page draws on the same allowance as a quiet week on another. That allowance is sized against what the underlying compute actually costs us to run, not against what would keep you buying overage."
    },
    {
      "question": "What happens if we go over the allowance?",
      "answer": "Extra capacity is charged at **$0.10 per 100 units**, or **$5.00 per hour of machine time**. In practice that line stays empty for ordinary day-to-day running and appears when you run something very large in one go — re-running Resolve's map across every connected system, or a full Model & agent audit across every application, in one afternoon, for example.\n\nYou can see the running total in the console and set a budget against it, so the first you hear of a heavy month is not the invoice."
    },
    {
      "question": "Which licence fits us?",
      "answer": "Count your people first.\n\nUnder ten, the **Lite Licence** is the fit. It runs on a machine shared with other customers, and it is the only one you can take a month at a time — so an evaluation does not need a year's commitment.\n\nTen or more, the **Dedicated Licence** costs less per person and runs on machines kept for your company alone, with your own web address and first call on the capacity you pay for. It is taken a year at a time.\n\nIf your information cannot leave your own building, that is **Enterprise**, and the conversation starts with where it has to run."
    },
    {
      "question": "Do we have to sign for a year?",
      "answer": "Only for Dedicated and Enterprise, and only for the seat licence itself. The **Lite Licence** can be taken month by month at $86 per person, or a year at a time at $75 — the same 15% difference shown by the toggle above.\n\nDedicated and Enterprise are a year at a time because both involve setting machines aside for your company specifically, and that capacity is reserved whether or not you use it in a given week. The GX10 appliance, where you take one, carries its own separate term — see the next question."
    },
    {
      "question": "What is the GX10, and what happens if we exit the lease early?",
      "answer": "The GX10 is the ASUS Ascent GX10, built on NVIDIA's GB10 Grace Blackwell superchip: a dedicated sovereignty compute appliance you can run CORE (and FACE) on, for full on-premises sovereignty. On Dedicated and Enterprise it is leased monthly and bundled into your seat price as one line, rather than a separate SKU you have to reason about on its own — you sign one commitment, of one to three years. On Dedicated, that bundled line runs from around **$275 a month on a 3-year term**; a 1 or 2 year term carries a higher monthly rate to reflect the faster amortization. On Enterprise it is priced with you.\n\nExiting early carries an Early Termination Fee, and it is scaled rather than flat because it is tracking what the hardware is actually worth used, not punishing you for leaving. Exit in year one and it is 100% of the lease payments left on your term — the card has barely depreciated and Runink is carrying the full cost of it. Exit in year two of a two- or three-year term and it drops to 60% of what remains. Exit in the final stretch of a three-year term and it is 25% — by then the card has done most of its useful life and is worth less to recover. The number moves with the hardware's own resale value, the same honest logic as the rest of this page."
    },
    {
      "question": "What does Enterprise onboarding and consulting cost?",
      "answer": "Enterprise deployments require onboarding and integration time, priced at **$300 per hour**, sold in **$15,000 blocks of 50 hours**. This is a fixed motion regardless of which Runink product is being onboarded — the same rate and the same blocks apply whether the work is a CORE rollout or a FACE one.\n\nOf each $15,000 block, $10,000 goes directly to the partner or consulting team doing the implementation, and $5,000 is retained by Runink to maintain partner-privileged instances, run marketing sessions, and provide dedicated support behind the partner. Neither half is a success fee — it is priced and paid the same whether the deployment finds a great deal wrong or nothing at all."
    },
    {
      "question": "We already have committed spend with GCP, Snowflake or Databricks. Can we buy CORE that way?",
      "answer": "Yes, and the economics work in your favour twice over. CORE is going onto the GCP Marketplace as a VM image running on your own GKE cluster, onto Snowflake as a Native App running in Snowpark Container Services, and onto Databricks as a Solution Accelerator through a partner listing — the same pattern our own build infrastructure already uses to run jobs on Cloud Run, SPCS and Databricks directly: the work runs on compute you already pay that platform for, and we charge our seat and Compute Unit price on top of it rather than adding an infrastructure markup of our own.\n\nIf you already carry committed spend with one of those three, buying CORE through it draws down spend you have already budgeted and already negotiated a rate for, rather than opening a new vendor contract. And because the compute is billed to you directly by GCP, Snowflake or Databricks rather than provisioned and billed by us, there is no separate infrastructure margin for us to stack on top of theirs — you pay their compute rate and our licence rate, not ours on top of theirs. Whatever discount your committed spend gives you is between you and that cloud provider — not a number Runink sets or promises. This is not yet available through AWS."
    },
    {
      "question": "Why does CORE never charge a success fee?",
      "answer": "Because CORE is compute-only, by design, and that was a deliberate choice rather than an oversight. CORE never takes a percentage of anything it touches — audit records and deploy pipelines are not the kind of thing a success fee should attach to. There is no reading of \"CORE verified your audit chain\" or \"CORE shipped your deploy\" that turns into a dollar figure you would want a vendor billing a cut of.\n\nSo every licence above is priced the same way: seats, plus the computing capacity that comes with them. What you are billed follows your headcount, never a percentage of what the console found, fixed or shipped."
    },
    {
      "question": "Why does using it more not cost more?",
      "answer": "Because the model runs on the company's own hardware, so a team that finds heavy use for the assistant, the helpers or FORGE is not billed by the question. The cost of a question is the electricity to answer it.\n\nThe practical consequence is a budgeting one. Your spend is a function of the capacity you run, decided once, rather than a number that moves with how many questions your team asked last month. A team that finds heavy use for CORE does not discover a cost that grows with that success."
    }
  ]
}
{{< /faq >}}


---
