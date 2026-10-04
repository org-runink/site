---
title: "Runink TIDE Pricing"
# Search and share-card text (CONTENT.md rules 1 and 3 apply): the <title> is
# seo_title verbatim, at most 60 characters; seo_description is the meta and card
# description, at most 155. Visible copy on the page is unchanged by these two.
seo_title: "Runink TIDE pricing: per person, per node or on-premises"
seo_description: "What a Runink TIDE licence costs: per person on Runink's shared machines, per node in your own cloud, or priced with you on your premises. No success fees."
image: "/images/products/tide-og.jpg"
aliases: ["/products/core-pricing/"]
description: "What a licence to run Runink TIDE costs. You choose where it runs: on Runink's shared machines, priced per person; in your own cloud account, priced per node; or on your own premises, priced with you. There is no second bill: TIDE never charges a percentage of anything it finds, fixes or ships."
layout: "pricing"
date: "2026-09-27T00:00:00Z"
author: "Runink"
product_name: "Runink TIDE"
product_url: "products/tide/"
product_subcategory: "IT operations, AI governance and application platform"
# WHERE EVERY CLAIM ON THIS PAGE COMES FROM.
#
# PRICES ARE THE OWNER-APPROVED MODEL V2 (2026-09-28, billing catalogue): the
# licence says where the work runs. TIDE Lite (1-9, Runink's shared machines):
# $75 yearly / $89 monthly, 18,000 units a person, then $0.10 per 100 units or
# units bought ahead (10% less a month, 20% less a year), up to 900 units a
# person an hour before work waits its turn. TIDE Dedicated (runners in the
# customer's own cloud account): $249 a month for the first node + $149 per
# extra node, yearly, unlimited units, plus 1% of those runners' cloud cost.
# Enterprise: priced with you. TIDE is sold separately from FACE and PULSE.
# Change the billing catalogue first, then here.
#
# WHAT IS NOT SHARED: FACE's page prices a "success fee" (20% of recovered
# money) and an automatic set-up fee (1%-3%) on top of the seat price. TIDE has
# neither. It is compute-only by design — see the FAQ entry "Why does TIDE
# never charge a success fee?" — and every outcome_strategies row below says so
# rather than staying silent about it.
#
# THE SCENARIO BAND is built from TIDE's own five real console parts —
# Overview, DevEx, DataEx, Intelligence, FORGE — exactly as content/products/
# tide.md's `rp.plate.rows` and `rp.facts` name them, and as the whitepaper's
# own table states them (content/blog/whitepapers/runink-tide.md, "How the
# console is arranged"). Every group deck and item note below is lifted
# word-for-word, or trimmed to one clause without adding a word, from
# tide.md's `rp.features.items` bodies (keys: overview, devex, dataex,
# intelligence, resolve, forge) or from the whitepaper. Nothing here is a
# capability TIDE does not already claim elsewhere. There is no sixth group
# for "Resolve" — the whitepaper places it directly after Intelligence and
# tide.md's own facts still count "5 parts... on one menu" — so Resolve's
# item sits inside the Intelligence group, where the source puts it.
#
# NO ENTERPRISE SOVEREIGNTY DETAILS ON THIS PAGE (owner, 2026-09-28): no
# hardware or appliance pricing, no field devices, no onboarding or consulting
# rates, no partner splits. The GX10 lease terms and the $300/hour consulting
# split were removed for that reason; onboarding is quoted with the customer.
#
# English only, like content/products/tide.md itself ("English only, like
# /river/ and /downloads/") — no .es/.fr/.pt sibling files for this page.
#
# URL: this file lives at content/products/tide-pricing.md rather than at
# content root (where content/pricing.md sits), so its section is "products"
# and its permalink is /products/tide-pricing/ — grouped with, and clearly
# addressed as belonging to, /products/tide/ rather than sitting as a second
# unqualified /tide-pricing/ beside the generic /pricing/. content/products/
# _index.md is a hand-curated switchboard (`items`, not a section listing), so
# adding this file does not add an unwanted card there.
#
# COMPUTE UNIT WORDING (2026-10-01): the "What is a Compute Unit?" and overage
# answers say only what the TIDE release customers run today supports, and name
# only the work that draws units. The prices, the overage terms and the allowance
# are the billing catalogue's and change there first. Before adding wording about
# usage or budgets in the console, or widening what draws units, confirm it against
# the shipped TIDE release with the TIDE owner — a merge is not a release.
---

{{< pricing-table-2 >}}
{
  "link_base": "/blog/whitepapers/runink-tide/",
  "intro": [
    "This is the price of Runink TIDE: Trusted Intelligence for Developer & Data Experience. You choose where it runs: on Runink's shared machines, priced per person; in your own cloud account, priced per node; or on your own premises, priced with you. There is no second bill: TIDE never takes a percentage of anything it finds, fixes or ships, because an audit record or a deploy pipeline is not the kind of thing a success fee should attach to.",
    "That is the whole shape of it. The bill follows the seats or nodes you run, not what TIDE finds, fixes or ships, so a platform team that puts TIDE to heavy use does not open a new line item that grows with it. What the console actually does comes first, though, because that is the part worth arguing about."
  ],
  "eyebrow": "The console",
  "heading": "One Console, Five Parts",
  "lead": [
    "These are the five parts the TIDE console is built from. Each one answers one question, and each opens onto more detail in the TIDE paper.",
    "They are grouped in the order the console's own menu uses them — the order a person goes to when they have the question, not an order invented for this page."
  ],
  "groups": [
    {
      "label": "Overview",
      "deck": "Is anything wrong, and where do I go next?",
      "items": [
        { "page": "", "name": "Needs attention, worst first", "note": "Headline readings, then a Needs attention list, worst first, each item linking to the page that deals with it." },
        { "page": "", "name": "Ask TIDE in plain words", "note": "Ask TIDE, the assistant, does a task in plain words and shows every step it took." },
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
        { "page": "", "name": "Nothing filed until a person approves", "note": "An approved brief goes, word for word, to coding agents as a work item. Nothing is filed until a person approves it." }
      ]
    }
  ],
  "outro": "The three licences below differ on one question: where TIDE runs. There is no second question about a percentage of anything TIDE finds, fixes or ships — that question does not exist here."
}
{{< /pricing-table-2 >}}

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Pay Monthly", "value": "monthly" },
    { "label": "Pay Yearly (About 16% Less)", "value": "yearly" }
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
      "price_monthly": "89",
      "price_yearly": "75",
      "price_subtitle": "PER PERSON, PER MONTH",
      "credits": "18,000 COMPUTE UNITS<br>PER PERSON, PER MONTH",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "How many people you licence, plus any units you use beyond the allowance."},
        {"label": "SHORTEST COMMITMENT", "value": "One month."},
        {"label": "SUCCESS FEES", "value": "None. TIDE never takes a percentage of anything it finds, fixes or ships."},
        {"label": "AUTOMATIC SET-UP FEE", "value": "None."}
      ],
      "features": [
        "RUNS ON RUNINK'S SHARED MACHINES, TAKING ITS TURN ALONGSIDE OTHER CUSTOMERS' WORK",
        "ALL FIVE CONSOLE PARTS: OVERVIEW, DEVEX, DATAEX, INTELLIGENCE, FORGE",
        "MORE UNITS AS YOU GO, OR BOUGHT AHEAD: 10% LESS FOR A MONTH, 20% LESS FOR A YEAR",
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
      "subtitle": "PRICED PER NODE",
      "price_color": "orange",
      "price_monthly": "249",
      "price_yearly": "249",
      "price_subtitle": "A MONTH FOR THE FIRST NODE, THEN $149 FOR EACH EXTRA NODE, ON A YEARLY CONTRACT",
      "credits": "UNLIMITED COMPUTE UNITS<br>ON YOUR OWN CLOUD",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "How many nodes you run, plus 1% of what your cloud charges for the runners."},
        {"label": "SHORTEST COMMITMENT", "value": "One year."},
        {"label": "SUCCESS FEES", "value": "None. Audit records and deploy pipelines are not the kind of thing a success fee should attach to."},
        {"label": "AUTOMATIC SET-UP FEE", "value": "None."}
      ],
      "features": [
        "RUNNERS IN YOUR OWN GOOGLE CLOUD PROJECT, DATABRICKS OR SNOWFLAKE ACCOUNT",
        "ALL FIVE CONSOLE PARTS: OVERVIEW, DEVEX, DATAEX, INTELLIGENCE, FORGE",
        "UNLIMITED COMPUTE UNITS; YOUR CLOUD BILLS YOU FOR THE COMPUTE DIRECTLY",
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
        {"label": "SUCCESS FEES", "value": "None. Not on this licence, not on any other. TIDE never takes a percentage of anything it finds, fixes or ships."},
        {"label": "ONBOARDING & CONSULTING", "value": "Scoped and quoted with you."}
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



{{< faq >}}
{
  "title": "Questions Before You Sign",
  "description": "What the console does and who decides it, then what you are charged for.",
  "questions": [
    {
      "question": "We run more software than any one person understands. Will TIDE touch that?",
      "answer": "That is the problem TIDE is built for. Most companies run applications from different teams, vendors and years, each with its own way of being started, watched and changed, and its own idea of who may touch the company's information.\n\nTIDE gives every application the same foundations once: somewhere to run, one way to prove who you are, a way to reach company data, one place to look, and a way to get changes made. The five groups above are that one place to look, and each opens onto the console page that answers the question in its own heading."
    },
    {
      "question": "What does TIDE need from us before it can do any of this?",
      "answer": "Not much to start. One downloaded file and one command bring the whole platform up on a workstation, so you can open Overview and see which readings say they have not been measured, open the Harness and read a remedy, and open the Audit chain and press Verify now — all before anything is installed on machines you own.\n\nAdding one real data source, and putting it on machines you control, are the next steps, each at your own pace. What it needs from your side to begin is a named owner and a decision about who may change data connections and who may arm agents. Everything else can be decided as you go."
    },
    {
      "question": "Who approves what TIDE's helpers propose?",
      "answer": "A person, every time. The automated helpers propose; nothing is filed, changed or published until someone with the right to decide says yes. FORGE proposes the steps to build something on a canvas, and an approved brief only then goes to coding agents as a work item. The Harness takes an action only after a person confirms it, and it is written to the Audit chain before it happens.\n\nThat holds however small the action looks. What arrives is always a proposed action, and an action nobody approves is an action that has not been taken."
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
      "answer": "To the machines your licence names, and it stays there: Runink's own shared machines on Lite, runners in your own cloud account on Dedicated, your own servers on Enterprise. Nothing is sent to an outside AI service, and nothing is sent out to be trained on — there is no account with an outside model provider for it to be sent to.\n\nDeleting a document removes its influence completely, because nothing is left behind in the model. That is the answer a security review asks for before it will let a platform hold the company's information at all."
    },
    {
      "question": "What am I actually paying for?",
      "answer": "It depends on where TIDE runs. On **Lite**, seats: a **seat** is one person who uses Runink TIDE, and each comes with Compute Units on Runink's shared machines. On **Dedicated**, nodes: $249 a month for the first node and $149 for each one after it, with runners in your own cloud account and no limit on units. Your cloud bills you for that compute directly, and Runink adds 1% of what those runners cost. **Enterprise** runs on your own premises or in your own cloud, priced with you.\n\nYou are not billed by the question, the deployment or the finding."
    },
    {
      "question": "What is a Compute Unit?",
      "answer": "It is how Runink counts work on its shared machines. Asking TIDE a question — and the work it does to ground that answer in your own data — draws **Compute Units** from your allowance.\n\nEvery **Lite** seat carries 18,000 units a month, pooled across the team. On **Dedicated** and **Enterprise** the work runs in your own cloud or on your own servers, and units are unlimited."
    },
    {
      "question": "What happens if we go over the allowance?",
      "answer": "On the **Lite Licence**, you choose how to pay for more. Units beyond the allowance are charged as you go at **$0.10 per 100 units**, or you can buy units in advance: **10% less** for a month's worth, **20% less** for a year's. Dedicated and Enterprise have no allowance to go over."
    },
    {
      "question": "Which licence fits us?",
      "answer": "Decide where TIDE should run.\n\nUnder ten people, the **Lite Licence** is the fit. It runs on Runink's shared machines at the lowest price, and it is the only one you can take a month at a time — so an evaluation does not need a year's commitment. Work there takes its turn alongside other customers' work.\n\nIf TIDE should run in your own Google Cloud project, or your Databricks or Snowflake account, that is **Dedicated**, priced per node, with unlimited Compute Units. It is taken a year at a time.\n\nIf it has to run on your own servers, including sites kept off the network, that is **Enterprise**, and the conversation starts with where it has to run."
    },
    {
      "question": "Do we have to sign for a year?",
      "answer": "Only for Dedicated and Enterprise. The **Lite Licence** can be taken month by month at $89 per person, or a year at a time at $75 — the same difference, about 16%, shown by the toggle above.\n\nDedicated and Enterprise are a year at a time because TIDE runs your platform there: the audit record, the deploy pipeline and the data connections are not something to switch on for a month and off again."
    },
    {
      "question": "What does Enterprise onboarding and consulting cost?",
      "answer": "Onboarding and consulting are scoped and quoted with you as part of the Enterprise conversation."
    },
    {
      "question": "We already have committed spend with GCP, Snowflake or Databricks. Can we buy TIDE that way?",
      "answer": "Yes: that is the **Dedicated Licence**. Its runners run in your own Google Cloud project, or your Snowflake or Databricks account, on compute you already pay that platform for.\n\nThe compute is billed to you directly by the platform rather than provisioned and billed by us, so there is no infrastructure margin of ours stacked on top of theirs: you pay their compute rate, our per-node price, and 1% of what those runners cost. Whatever discount your committed spend gives you is between you and that cloud provider — not a number Runink sets or promises."
    },
    {
      "question": "Why does TIDE never charge a success fee?",
      "answer": "Because TIDE is priced on where it runs, by design, and that was a deliberate choice rather than an oversight. TIDE never takes a percentage of anything it finds, fixes or ships — audit records and deploy pipelines are not the kind of thing a success fee should attach to. There is no reading of \"TIDE verified your audit chain\" or \"TIDE shipped your deploy\" that turns into a dollar figure you would want a vendor billing a cut of.\n\nSo every licence above is priced by seats or nodes, and by where the work runs — never by what the console found, fixed or shipped."
    },
    {
      "question": "What does heavier use cost?",
      "answer": "On **Lite**, a team can use up to 900 units per person per hour. Work past that pace waits its turn in line; it is never refused, and the pace itself costs nothing extra. Units beyond the monthly allowance are paid as you go or bought ahead, as above.\n\nOn **Dedicated**, units are unlimited: heavier use shows up on your own cloud bill as the compute it used, plus 1% of that from Runink. On **Enterprise** it runs where you already run things.\n\nEither way a team that finds heavy use for the assistant, the helpers or FORGE is not billed by the question."
    }

  ]
}
{{< /faq >}}


---
