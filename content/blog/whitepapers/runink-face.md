---
title: "Runink FACE — Fulfilment Autonomous Claims Engine"
headline: "The evidence of your next loss is already in your systems."
product: "Runink FACE"
subtitle: "Fulfilment Autonomous Claims Engine"
description: "A whitepaper for operations, finance and supply-chain leadership. How Runink FACE reads your operational data, works out what is going wrong, and drafts the fix for a named person to approve."
weight: 10
date: 2026-09-03T00:00:00Z
source_pages: 25
audience: "Operations, finance and supply-chain leadership"
blurb: "Scattered across a dozen systems that were never designed to talk to each other. FACE assembles it, works out what the combined picture means, and produces a specific, reviewable recommendation with the underlying records attached — for a named person to approve."
deck: |
  Runink FACE reads your operational data, works out what is going wrong,
  and drafts the fix — the claim, the reroute, the correction — for a named
  person to approve.

  **Nothing happens without that approval.**
register:
  - { page: 2,  title: "What this document is" }
  - { page: 3,  title: "The problem, in your terms" }
  - { page: 4,  title: "Who has this problem" }
  - { page: 5,  title: "What the problem costs", mark: "not-measured" }
  - { page: 6,  title: "What FACE does about it" }
  - { page: 7,  title: "How it works, in four steps" }
  - { page: 8,  title: "Rules Recon: what you think you enforce" }
  - { page: 9,  title: "Actionable Twins: one queue, ranked" }
  - { page: 10, title: "Hypothesis Lab: test it before you commit" }
  - { page: 11, title: "Fetch Center and Maturity Center" }
  - { page: 12, title: "What the analysis actually covers" }
  - { page: 13, title: "What arrives in the queue" }
  - { page: 14, title: "The numbers are computed, not written" }
  - { page: 15, title: "A working day", mark: "hypothetical" }
  - { page: 16, title: "Reaching it from where the work happens" }
  - { page: 17, title: "Where it runs, and why that is a commercial matter" }
  - { page: 18, title: "How control is kept" }
  - { page: 19, title: "Compliance posture", mark: "self-declared" }
  - { page: 20, title: "What it connects to" }
  - { page: 21, title: "Who this is for" }
  - { page: 22, title: "What adopting it involves" }
  - { page: 23, title: "The commercial shape" }
  - { page: 24, title: "The argument in one page" }
  - { page: 25, title: "The next step" }
---

## What this document is

This is a description of a working product, written for the person who has
to decide whether to buy it.

It contains no case studies, no customer names and no return-on-investment
figures. Those things are easy to write and impossible to check, and a
buyer who has read three vendor decks this month has learned to discount
them. Instead this document explains the mechanism: what the software
looks at, what it produces, who approves it, and where it all runs.

If the mechanism makes sense to you, the numbers will follow from your own
operation, measured in your own instance. If it does not, no case study
would have saved it.

### The short version

Your business systems already contain the evidence of every loss you are
about to take. The container that is drifting warm. The customs entry with
a missing document and a demurrage clock running. The lane where you book
half-empty trailers four times a week. The claim that expired unfiled.

The evidence is there. It is scattered across a dozen systems that were
never designed to talk to each other, and nobody has the hours to
assemble it.

FACE assembles it. It connects to the systems you already run, works out
what the combined picture means, and produces a specific, reviewable
recommendation with the underlying records attached. A person reads it,
approves or rejects it, and the approved ones carry through to the drafts
and updates the action actually requires.

That is the whole product. Everything that follows is detail about how
well it does it, and where it runs.

## The problem, in your terms

Ask an operations director what their systems tell them, and you will get
a version of this answer: *plenty, and too late.*

The reporting layer of a modern supply chain is not short of information.
There are dashboards. There are weekly packs. There is a data warehouse
that someone spent two years and a great deal of money filling.

What there is not, is a mechanism that turns any of it into a decision
before the cost is already incurred.

### Three shapes the failure takes

**You find out afterwards.** A refrigerated container drifts out of its
temperature range on a Thursday night. The excursion is in the telemetry.
Nobody is reading the telemetry at 2am. The cargo is written off on
arrival, and the loss is discovered by the finance team a fortnight later,
in a reconciliation.

**You find out, and nobody acts.** A customs entry is held at the port for
a missing document. Somebody receives that notification. It joins four
hundred other notifications. The demurrage meter runs for eleven days
before a human connects the hold to the document to the invoice.

**You never find out at all.** Money that could have been recovered — a
short-paid freight invoice, a carrier claim inside its filing window, a
duty overpayment — simply expires. No alert fires, because nothing was
configured to look for it. The loss never appears in a report, because a
loss you never identified has no line item.

### Why more reporting has not fixed it

Every one of these is a *decision* problem wearing a *data* problem's
clothes. The information existed. What was absent was somebody with the
time to assemble it, the authority to act on it, and the evidence to
justify acting.

Adding another dashboard adds another thing nobody has time to read.

## Who has this problem

The problem is structural, not managerial. It appears wherever three
conditions meet.

**One: the operation spans systems that were bought separately.**
A warehouse system, a transport system, an accounting ledger, a
customer-relationship system, a spreadsheet that one person maintains.
Each is correct on its own. The loss lives in the space between them,
where no single system has the whole picture.

**Two: the volume exceeds the attention available.**
Exceptions arrive faster than people can read them. The team is not
careless; it is outnumbered. During a seasonal peak the ratio gets worse
precisely when the value at stake gets higher.

**Three: the money is recoverable but only inside a window.**
Claims expire. Disputes have deadlines. Demurrage accrues daily. A
finding that arrives a month late is not a finding, it is a post-mortem.

### Where these conditions concentrate

- **Freight forwarders and third-party logistics providers**, where margin
  is thin and the difference between a good year and a bad one is the
  proportion of claims actually filed.
- **Manufacturers with international inbound flows**, where a customs hold
  and a missing importer of record turn into duty liability and dwell cost.
- **Food, pharmaceutical and chemical distributors**, where a temperature
  excursion is not a data point but a destroyed consignment and a
  regulatory conversation.
- **Retailers and distributors with high return volumes**, where the
  disposition decision on a returned item — restock, refurbish, recycle —
  is made by whoever is on the receiving dock that morning.
- **Any operation carrying an ESG or emissions reporting obligation**,
  where the figures have to be defensible and the assembly of them
  consumes weeks.

If your operation has all three conditions, you are already paying for
this problem. The only question is whether the payment appears anywhere
you can see it.

## What the problem costs

This document does not put a number on your losses. It cannot; the number
is specific to your operation and is measured inside your own instance.

What can be described is the *shape* of the cost, which is consistent
across operations of this kind.

### The cost has four parts

**Losses taken.** Spoiled cargo, penalty fees, detention and demurrage,
duty on entries nobody managed correctly. These appear in the accounts,
usually classified as a cost of doing business.

**Recoveries missed.** Claims not filed. Invoices not disputed. Overcharges
not challenged. These do not appear in the accounts at all, which is why
they persist for years. There is no line item called *money we were
entitled to and did not ask for*.

**Attention consumed.** Skilled people spending their week assembling
evidence by hand — pulling a bill of lading, matching it to a weighbridge
reading, finding the carrier tariff, drafting the dispute. This is
expensive work performed at clerical speed, and it is the reason the
recoveries are missed: the assembly costs more than most individual
claims are worth, so only the large ones get filed.

**Trust spent.** Each failure a customer experiences before you do is a
withdrawal from the relationship. Operations that consistently catch
problems first keep accounts that operations that consistently do not,
lose.

### Why the fourth one matters most

The first three parts are quantifiable and therefore arguable. The fourth
is neither, and it decides renewals. A customer does not leave because of
one spoiled load. They leave because they learned about it from their own
customer, and concluded you were not watching.

The mechanism that catches an exception early is the same mechanism that
lets you tell the customer before they tell you. That is the commercial
argument underneath everything else in this document.

## What FACE does about it

FACE produces one thing, repeatedly, and everything else in the product
exists to make that one thing good.

It is called a **Decision Artifact**.

### What a Decision Artifact is

A Decision Artifact is a named, reviewable recommendation that carries the
records it was derived from.

It is not a paragraph of prose, and it is not an alert. It is a specific
proposed action, stated as an action, with the evidence attached and a
severity band and an estimated impact figure computed for your data.

An example, in the form an operator sees it:

> **File customs refund claim CN-4471**
> Basis: terminal scale reading 21,840 kg against bill of lading 23,100 kg.
> Estimated recovery: shown in your currency, computed from your records.
> Severity: critical.
> `[Approve]` `[Reject]` `[Edit]`

The operator can see why. Every artifact shows the reasoning steps and the
source records that produced it, so the review is a review of evidence
rather than an act of faith in a machine.

### What happens on approval

Approval is the point at which anything leaves the system. Before it, the
recommendation is a proposal. After it, the follow-through work is drafted:
the email that has to go to the carrier, the calendar entry for the
deadline, the update that has to land in the operational system of record.

The approval itself is recorded against the artifact, with the name of the
person who gave it. Six months later, when someone asks why a claim was
filed, the answer is in the artifact, not in somebody's memory.

### Why this shape

Because it is the shape a decision already has in your business. Somebody
proposes, somebody with authority approves, and the record of both
survives. FACE does the proposing at a volume no team could match, and
leaves the approving where it belongs.

## How it works, in four steps

The product runs one loop, continuously: **fetch, extract, reason,
recommend.**

### Fetch

FACE connects to the systems you already run and samples them. The
connection is tested before it is saved, so a misconfigured connection is
caught at setup rather than discovered as silence three weeks later.

Connections are managed in one place, and questions can be set to run on a
recurring interval rather than being asked by hand each time.

### Extract

Raw operational data is not usable as evidence in the state it arrives.
FACE groups related records together, breaks documents into passages that
can be cited individually, and files everything into a searchable index
scoped to your organisation alone.

The point of this step is citation. Every later claim the system makes
points back at the specific record that supports it.

### Reason

A set of analysis agents works over the grounded data. Each has a defined
job — claims, compliance, finance, fulfilment, maintenance, returns,
telemetry, routing, documentation, vision, voice — and each produces its
own kind of output.

They work in a visible loop: consider, act, observe the result, consider
again, for a bounded number of steps. The intermediate steps stream to the
screen as they happen, so a running job is legible rather than a
spinner.

### Recommend

The output is Decision Artifacts, filed into a prioritised queue under one
of seven categories: compliance, finance, operations, sales-and-operations
planning, savings, sustainability and procurement.

Each run leaves a record that can be replayed and inspected afterwards.
If you want to know how the system reached a conclusion in March, you open
March's trace.

## Rules Recon: what you think you enforce

Most businesses have two rulebooks. The one written down, and the one
running.

The written one lives in a standard operating procedure, a policy document,
a contract schedule. The running one lives in the systems: in a validation
somebody added in 2019, in a workflow condition, in a threshold nobody
remembers setting.

They are never the same rulebook. **Rules Recon** shows you the
difference.

### The four states

FACE reads the rules your policies describe, reads the logic actually
present in your systems and data, and sorts every rule into one of four
states.

**Aligned.** The policy says it, the systems do it. No action needed.

**Drift.** The policy says it and the systems do something adjacent. The
threshold moved, the exception list grew, the tolerance loosened. Nobody
decided this; it accumulated.

**Shadow.** Logic is running in production that no policy describes. Somebody
built it, it works, and it is now load-bearing. It has never been reviewed,
because nobody knows it is there.

**Missing.** The policy describes a control that nothing in the operation
performs. The rule exists in the document and nowhere else.

### Why this is usually the first thing customers look at

Because it is the cheapest question in the building and nobody can answer
it. An auditor asks whether you enforce a control. The honest answer is
usually *we believe so*. Rules Recon converts that into a list, with each
rule stated in plain English and citing the source it was extracted from —
data, document, telemetry or configuration.

Shadow rules are the ones that surprise people. They are the reason the
system behaves in ways the policy cannot explain.

## Actionable Twins: one queue, ranked

Findings are worthless if they arrive in seven different places.

**Actionable Twins** is the single queue. Every agent's output — compliance,
finance, operations, planning, savings, sustainability, procurement —
consolidates into one prioritised list, each entry carrying an estimated
impact figure and a severity band.

### What an operator does here

They work down the list. For each entry: read the recommendation, read the
evidence, approve, edit or reject.

Approved actions carry through to a view showing the card and its outcome.
Financial actions are tracked separately on a savings board, moving through
their stages so that a recovery approved in January can be followed to the
money arriving.

### Why the ranking matters more than it sounds

An operations team's real constraint is not information, it is the order in
which they spend the day. A queue ranked by recoverable value and severity
makes that ordering a property of the system rather than a judgement each
person makes independently every morning.

It also makes the day's work measurable. What was in the queue, what was
approved, what it was worth — those are three questions with answers, which
is not the normal condition of exception management.

### Nothing fires on its own

This is the part worth repeating to a risk committee. Consequential actions
are gated by human approval. The system proposes; a named operator
approves; the approval is recorded against the artifact.

The value of autonomy here is in the drafting, the evidence assembly and
the ranking — the expensive, slow, skilled work. The judgement stays with
the person accountable for it.

## Hypothesis Lab: test it before you commit

Some decisions are too large to make from a queue.

Consolidating a lane. Changing a sourcing pattern. Moving inventory
buffers ahead of a season. These are decisions where being wrong is
expensive and being slow is also expensive, which is the worst combination
a management team faces.

**Hypothesis Lab** is where those are examined before they are committed.

### How it is used

An operator states a scenario. The lab validates it against the grounded
data — your actual history, your actual records, not a generic model — and
returns what the evidence supports.

If the hypothesis holds, it can be promoted into the Actionable Twins
queue and become work. If it does not hold, it stops there, having cost an
afternoon rather than a quarter.

### The discipline this introduces

The important word is *promote*. A scenario does not become an action
because somebody senior liked it. It becomes an action because it survived
validation against the data and was then approved by a named person.

This is a governance property as much as an analytical one. It creates a
record of why a structural decision was taken, at the moment it was taken,
which is exactly the record that does not exist when a decision is made in
a meeting.

### Where the outside world comes in

Scenario work is not confined to your own records. The hypothesis agent
draws on external market, competitor and freight-rate signals alongside
the knowledge graph built over your connected systems, so a question about
lane cost is examined against the market as well as against your history.

## Fetch Center and Maturity Center

### Fetch Center — where the questions live

Fetch Center is the front door to your connected systems.

Connections are created, tested and managed here. Recurring questions are
defined here and run on a schedule you set — created, activated, paused or
deleted from the screen, without an engineer.

Each run leaves a replayable trace. That is the difference between an
answer and an auditable answer: you can go back and see the run, the
sources it touched, and the steps it took.

An operator can also skip the connection entirely and upload a spreadsheet
or a document directly, receiving root-cause and savings analysis on the
file itself. This matters more than it sounds during an evaluation, because
it means the first useful output does not wait on an integration project.

### Maturity Center — the direction of travel

A single finding is an event. A trend in findings is a management signal.

Maturity Center tracks operational posture over time and produces a phased
plan from the operation's present level to the target one.
That plan arrives as a Decision Artifact like any other: reviewable,
evidenced, approvable.

### Why both exist

Fetch Center answers *what is happening this week*. Maturity Center answers
*are we getting better*. Operations teams need the first daily. Boards ask
for the second quarterly, and usually receive an opinion instead of an
answer.

## What the analysis actually covers

FACE runs a set of distinct analysis agents. Each has a defined output.
This is the list, in plain terms.

**Claims.** Claims, audit and financial-recovery procedures — the work of
identifying that money is owed, and assembling the case for it.

**Finance.** Transaction and spend categorisation with a confidence score,
anomaly detection against your own baselines, cash-flow and
receivables-and-payables actions, and total-cost-of-ownership,
activity-based-costing and cost-to-serve analysis.

**Compliance.** Compliance posture reporting, ESG narratives and emissions
tracking across Scope 1, 2 and 3, with remediations stated in business
terms rather than technical ones.

**Fulfilment.** Provisioning, sourcing and logistics procedures.

**Rules Recon.** Business and governance rules extracted from data,
documents, telemetry and configuration, each stated in plain English and
citing its source.

**Predictive maintenance.** Maintenance and asset-lifecycle procedures
derived from telemetry, maintenance logs and fleet telematics.

**Reverse logistics.** Returns, warranty claims, remanufacturing and
circular-economy procedures.

**Telemetry.** Action sequences from streaming sensor signals —
temperature, humidity, vibration, location, speed, fuel, engine
diagnostics — covering cold-chain integrity, fleet monitoring, and
hazardous-materials and weight compliance.

**Route Twin.** Multi-modal routes with cost, distance and duration
estimates.

**Documentation.** Structured trade and logistics documents, including
customs declarations.

**Vision.** Physical damage and anomaly grading from video of transport
hubs, airports and infrastructure.

**Voice.** Hands-free voice commands, routed with location context.

**Hypothesis.** Business decision scenarios drawn from the knowledge graph
together with external market, competitor and freight-rate signals.

**Twins.** The executable action cards themselves, with approve and reject
flows and the drafts an approved action requires.

## What arrives in the queue

Decision Artifacts arrive as typed cards. The type determines what the card
shows, so a person reviewing one sees the fields that decision actually
needs.

**Customs clearance.** A held entry with the port, the hold reason, the
missing documents, days held and the demurrage exposure.

**Importer of record.** An entry with no accountable importer of record,
its tariff code and the duty liability attached.

**Cold chain.** A refrigerated-asset temperature excursion, the product at
risk, the value at risk and the corrective dispatch action.

**Claims.** Claim number, status, amount and the reasoning for recovery.

**Freight forwarding.** A lane-level consolidation opportunity with the
bookings, average utilisation, current spend and the recoverable saving.

**Cross-border trucking.** A border-dwell breach with crossing, carrier,
dwell measured against scheduled transit, loads affected, detention cost
and root cause.

**Maintenance.** Equipment identifier, failure-probability score, predicted
failure mode, the intervention and the downtime impact.

**Route.** An origin-to-destination route with distance, duration,
estimated cost saving and a map.

**Emissions.** Daily and annualised freight CO₂e, the worst-emitting lane
and a quantified abatement action, with the methodology stated so the
figure survives audit.

**Spend analysis.** Total spend, identified savings, top categories and a
consolidation recommendation.

**Sales-and-operations planning.** Forecast accuracy and inventory levels
with a planning recommendation.

**Fulfilment.** Order status, estimated delivery and the issue to resolve.

**Reverse logistics.** Return identifier, item condition, refund status and
disposition.

**Reactive logistics.** A disruption incident, the orders it affects and a
resolution plan.

**Request for proposal.** Draft content, evaluation criteria and candidate
vendors.

**Transformation plan.** A phased path from current maturity to a target
level.

**Email draft, calendar invite and system update.** The concrete
follow-through an approved action needs, so that approving is the end of
the work rather than the beginning of it.

## The numbers are computed, not written

There is a failure mode in this category of product that a careful buyer
should ask every vendor about: language models are fluent, and fluency
produces confident numbers that were never calculated.

FACE separates the two jobs. The language model handles language —
reading documents, explaining findings, drafting correspondence.
Quantities are produced by classical statistical and machine-learning
methods, which compute rather than compose.

### What does the computing

**Time-series decomposition** into trend and seasonality, with forecasting
and rolling backtests used to select the model, and anomaly detection on
what the model cannot explain.

**Density-based clustering** with automatic parameter selection, run over
your own records, to find natural groupings without being told in advance
how many to expect.

**Gradient-boosted reranking** of those clusters, scoped by domain, access
level and telemetry source, so the most relevant material surfaces first.

**Keyword relevance folded into semantic search**, so a search for an exact
part number or claim reference finds it, and a search for a described
situation finds that too.

**Descriptive statistics** for distribution and dispersion summaries.

**Causal graph construction and Bayesian inference**, which is how a
finding becomes a cause rather than a coincidence.

**Knowledge-graph construction** over the connected estate, so relationships
between entities — carrier, lane, shipment, invoice, claim — are explicit.

**Failure-mode and effects analysis** with risk-priority scoring, and
service-level dispute detection.

**Image region proposal** in the vision pipeline, which is what makes damage
assessment specific to a location on an object rather than a general
impression.

### Why to care

Because it changes what a finding is worth in an argument. A recovered
figure that came out of a decomposition and a backtest can be defended to a
carrier, an auditor or a board. One that came out of a sentence cannot.

## A working day

The clearest way to describe a product is to describe a Tuesday.

### 06:40 — Overnight, without anyone present

The recurring questions defined in Fetch Center have run. Sensor streams
from refrigerated assets were read through the night. Carrier and customs
positions were pulled. The agents worked over the results and filed their
output.

### 08:15 — The operations lead opens the queue

Actionable Twins shows the night's work, ranked. Fourteen items. The top
one is critical: a refrigerated container drifted above range at 02:10, the
product at risk is named, the value at risk is computed, and the corrective
dispatch action is drafted and waiting.

She reads the evidence — the temperature series, the asset, the
consignment. She approves. The dispatch instruction and the notification
to the customer are drafted immediately.

The customer will hear about this from her, this morning, rather than from
their own receiving dock on Thursday.

### 09:30 — Customs

Two held entries. Each card names the port, the hold reason, the specific
missing documents, the days held so far and the demurrage exposure
accruing. One is straightforward and she approves the documentation draft.
The other has no accountable importer of record; that card carries the
tariff code and the duty liability, and she routes it to trade compliance.

### 11:00 — The claims review

Nine claims artifacts, each with a claim number, a status, an amount and
the reasoning for recovery. This is the hour that used to take a week,
because the evidence assembly — the bill of lading, the weighbridge
reading, the tariff — is already attached to each one.

She approves seven, edits one, rejects one where the reasoning does not
hold. All four outcomes are recorded against the artifacts with her name.

### 14:00 — A question, asked out loud

In a meeting, someone asks why the northern lane costs what it does. She
asks the question in Fetch Center in plain language. The relevant agents
run; the progress of each step appears on screen; the answer comes back
with the records it came from, and one consolidation opportunity worth
promoting to the queue.

### 16:30 — A driver, hands full

A driver logs an exception by voice from the cab. It reaches the same
agents the operations lead is using, and appears in the same queue.

### 17:00 — The board question

The savings board shows what was approved this month and where each item
has reached in its stages. That is the report, and it did not take a day to
assemble.

## Reaching it from where the work happens

Operations do not happen at a desk. The product is reachable from the
places the work actually occurs.

**Voice.** A real-time voice agent, so an operator or driver can ask and
instruct hands-free. Speech recognition and speech synthesis both run
locally.

**Phone messaging.** A WhatsApp and SMS channel reaches the same agents
from an ordinary phone, with no application to install on a driver's
device.

**Cameras.** Live camera feeds or captured images are analysed for damage
and anomalies at transport hubs, airports and infrastructure, with the
results streaming back to the cockpit. Damage grading becomes a record
rather than an argument between two parties' recollections.

**Documents.** Uploads are routed automatically by type — text extraction
for documents, spreadsheet extraction for tabular files, code extraction
for source repositories. The person uploading does not choose a pipeline;
they upload the file.

**Direct file analysis.** A spreadsheet or document can be analysed on its
own, producing root-cause and savings findings without a connection being
configured first.

**Four languages.** The operator interface ships in English, Spanish,
French and Portuguese, which matters for any operation whose warehouse
staff and head office do not share a first language.

### The common property

All of these reach the same agents, produce the same kind of artifact, and
land in the same queue. There is one place where work is reviewed and
approved, regardless of which door it came in through.

## Where it runs, and why that is a commercial matter

FACE runs on hardware you control.

The reasoning that reads your operational data is performed by the
platform's own inference service, running on your own machines. Your
logistics data, your contracts, your customer records and your claims
correspondence are processed where they already sit.

### Three consequences a buyer should weigh

**The data question stops being a negotiation.** A large part of every
enterprise procurement cycle for analytical software is spent establishing
where data goes and who else can see it. When the analysis runs on your own
hardware, that conversation is materially shorter, because the answer is
*here*.

**The cost does not scale with how much you use it.** Because the reasoning
runs on machines you already own, the cost of asking another question is
the cost of the electricity. That changes behaviour: teams ask the small
questions, and the small questions are where the recoveries hide. Usage
priced per query teaches people to ration their curiosity.

**It survives your suppliers.** A system whose reasoning happens on your own
hardware does not change its terms, its pricing or its availability because
a third party revised a policy.

### The shape of a deployment

The same software runs on a single workstation for evaluation, and on one
server or a small group of them inside your own estate for production.
There is no managed cloud database in the middle.

Where no specialist graphics hardware is available, the reasoning runs on
ordinary processors at lower throughput — which suits the batch-shaped
work that claims, reconciliation and compliance actually are. The
overnight run is the natural rhythm of this product, and an overnight run
does not need to be instantaneous.

### Metadata and continuity

Operational metadata is held in an embedded store, continuously replicated
to object storage and restored automatically when the system starts. The
work of keeping that consistent is a property of the platform rather than a
task on somebody's list.

## How control is kept

Autonomy is only sellable to a risk committee if the controls around it are
specific. These are the controls.

### The person stays in command

Consequential actions are gated by human approval. The system proposes; a
named operator approves; the approval is recorded against the artifact.

This is a property of the design, not a setting. The queue is a queue of
proposals.

### Identity between components

The parts of the system prove their identity to each other on every
exchange, using short-lived credentials that are issued fresh and rotate.
Those credentials come from an authority the deployment runs itself.

### Guarding the inputs

Text entering the reasoning step is sanitised at the entry points. Database
queries are validated across the connectors before they run.

### Credentials at rest

Credentials stored locally are held under restrictive filesystem
permissions — directories at 0700, files at 0600 — so they are reachable
only by the account that owns them.

### The audit record

Audit events are structured and typed rather than free text, which means
they can be queried rather than read. Personal identifiers inside them are
hashed.

### Who sees what

Membership is explicit. An operator sees only the instances they are
entitled to see. Entitlements carry an expiry, so access granted for a
project ends with the project rather than persisting for years. An
unidentified caller sees nothing at all.

Sign-in uses multi-factor authentication.

### Separation between tenants

The retrieval index that grounds every answer is scoped per tenant, over
that tenant's own corpus. The evidence behind an answer comes from the
organisation that asked the question.

## Compliance posture

Two things need to be said precisely here, because vendors in this category
routinely blur them.

### What FACE's own posture is

Runink FACE's compliance posture is **SOC 2-oriented, with controls mapped
and self-declared.**

That is the accurate wording and it is the wording used throughout. It is
not a claim of certification, and it should not be read as one.

### What the compliance agent does

Separately from the product's own posture, the compliance agent evaluates
*your* operation's posture against control frameworks, reporting each
finding as pass, fail or warning.

The frameworks it assesses against include PCI-DSS, SOC 2, HIPAA,
ISO 27001, ISO 31000, ISO 42001, LGPD, GDPR and IFRS 17.

This is a statement about what the agent examines in your estate. It is not
a statement that Runink FACE holds any certification under those
frameworks, and it must not be read as one.

### Why the distinction is worth your attention

Because a vendor who is careless about this distinction in a whitepaper
will be careless about it in an audit, and you will be the one holding the
finding. The wording above is the wording Runink uses internally, in its
documentation and in its sales material, without variation.

### The reporting side

For ESG obligations specifically, the compliance agent produces emissions
tracking across Scope 1, 2 and 3, and emissions artifacts state the
methodology used to reach the figure. A number that arrives with its
methodology attached is a number that can be defended.

## What it connects to

FACE reads the systems you already run. The connector layer covers the
following.

### Data platforms and databases

Snowflake, Databricks, PostgreSQL, MySQL and Google BigQuery.

### Business systems

SAP, Microsoft Dynamics 365, Salesforce, HubSpot, ServiceNow and Guidewire.

### Documents, files and storage

Microsoft SharePoint, Excel and Parquet files, and object storage on
Amazon S3, Google Cloud Storage or Azure Blob Storage.

### Workplace sources

Google Workspace — Docs, Drive, Sheets, Gmail, Maps routing and Analytics.

### Unstructured and real-world sources

Web pages through a crawler. Documents and images through optical character
recognition. Source-code repositories. Live video from camera feeds.

### Two properties worth noting

**Connections are tested before they are saved.** A connection that will not
work says so at the moment it is created, in front of the person creating
it.

**Nothing is replaced.** FACE reads the systems you have. It does not ask
you to migrate off your transport system, your warehouse system or your
ledger. The value is in the space between those systems, which means the
systems have to stay where they are for the value to exist.

### Working across systems

Where an operation runs specialist analytical infrastructure, work can be
provisioned onto it directly — including a Snowflake-native execution path
and Databricks cluster and job provisioning — so the analysis runs close to
the data rather than moving the data to the analysis.

## Who this is for

### The operations director

You are measured on exceptions that reach the customer. FACE turns your
inbox of alerts into a ranked queue of drafted decisions, and moves your
team from chasing to approving. The specific promise: you find out before
your customer does, and you have the fix in front of you when you do.

### The chief financial officer

You are carrying losses classified as a cost of doing business, and
recoveries that never appear because they were never identified. FACE
produces claims with the evidence assembled and the reasoning stated, and
tracks approved financial actions through their stages on a savings board.
The specific promise: recoveries become a managed pipeline rather than an
occasional heroic effort.

### The head of compliance or risk

You are asked whether controls are enforced and you answer from belief.
Rules Recon converts that into a list with four states and a citation per
rule. The compliance agent reports posture against the frameworks that
apply to you, with each finding marked pass, fail or warning. The specific
promise: the answer to *do we enforce this* becomes a document rather than
a conversation.

### The chief information officer

You are being asked to approve another system that wants a copy of the
company's operational data. This one runs on your hardware, reads the
systems you already own, replaces none of them, and its internal
components authenticate to each other with short-lived rotating
credentials. The specific promise: a shorter security review, because the
data does not go anywhere.

### The chief executive

You want the operation to catch its own problems and you want the
improvement to be visible. Maturity Center tracks posture over time and
produces the phased plan; the savings board shows what was approved and
what it recovered. The specific promise: operational improvement becomes
something you can read, quarter over quarter.

## What adopting it involves

### Evaluation runs on a laptop

The same software that runs in production runs natively on a single
workstation. An evaluation does not require infrastructure to be
provisioned first, and it does not require a data migration.

The fastest first result comes from uploading a file — a spreadsheet of
freight invoices, a folder of claims correspondence — and receiving
root-cause and savings analysis on it directly. This produces a finding on
your own data in an afternoon, before any connector is configured.

### Connections come next, one at a time

Connect the system where the money is. For most operations that is the
freight or claims data, because that is where recoverable value
concentrates. Test the connection, run a question, read the artifacts.

Add the second system when the first has produced something worth acting
on. The value compounds as more of the estate is connected — because the
losses live between systems, each additional connection makes the previous
ones more useful — but it does not wait for completeness.

### Then it runs on a schedule

Recurring questions run overnight on an interval you set. The queue is
populated when the team arrives. This is the steady state, and it is where
the product stops being a project and becomes part of the day.

### Production sits inside your estate

Production is the same software on one server or a small group of them,
inside your own environment. Instances are declared once and maintained
automatically thereafter.

### What it asks of your people

An operator, not an engineer. Connections are created and tested from the
screen. Schedules are created, activated, paused and deleted from the
screen. Questions are asked in plain language. The reviewing of artifacts
is a domain skill — knowing whether a claim holds — not a technical one.

## The commercial shape

### How the product is licensed

Each organisation holds its own entitlement record, carrying a subscription
tier and a seat count. Licences are generated, validated and activated
through the product itself.

### How consumption is seen

Compute is measured in Compute Units and shown in the usage view. An
operator can set a budget, so consumption is a decision rather than a
discovery at the end of a month.

Because the reasoning runs on your own machines, this is a view of your own
capacity, not a meter you are billed against per question.

### What is included in the operator experience

Beyond the six primary destinations, the interface provides the workflow
drawer — voice, compliance, finance and operations remediation, today's
command, execution drafts and camera connection — an agent activity view
showing what the agents are working on, streaming progress on
every run, replayable traces, and a support console.

### Working alongside your other systems

Agents can be reached by other agents, and the platform makes its tooling
available to other software that speaks the common standard for tool
access. In practice this means FACE can be a participant in a wider
automation estate rather than an island in it.

### FACE within Runink

FACE is one of two Runink products. The other is PULSE, an agentic
digital-marketing engine. Both sit on a shared platform called CORE, which
is what makes the deployment, identity and tenancy properties described in
this document consistent across them.

## The argument in one page

**The evidence of your next loss already exists in your systems.**
Scattered across platforms that were bought separately and never designed
to be read together.

**Assembling it by hand costs more than most individual losses are worth.**
Which is why only the largest recoveries get pursued, and the rest expire
quietly.

**FACE does the assembly.** It connects to the systems you run, grounds
what it reads in your own records, reasons over the combined picture, and
produces a specific recommendation with the evidence attached.

**A person decides.** Every consequential action is proposed by the system
and approved by a named operator, with the approval recorded against the
artifact. The autonomy is in the drafting and the ranking. The judgement
stays with the accountable human.

**The numbers are computed.** Forecasting, clustering, causal inference and
statistical analysis produce the quantities. The language model handles
language. A figure that came from a backtest can be defended to a carrier
or an auditor.

**It runs on your hardware.** Your operational data is processed where it
already sits. The security review is shorter, the cost of asking a question
does not scale with curiosity, and the arrangement does not depend on a
third party's terms.

**Its compliance posture is SOC 2-oriented, with controls mapped and
self-declared** — stated in exactly those words, here and everywhere else.

**The output is a queue, ranked by value.** Which turns exception
management from an inbox into a measurable process with a beginning, a
decision and a recorded outcome.

## The next step

The right first step is small and specific.

### Bring one file

A spreadsheet of freight invoices. A folder of claims correspondence. A
month of temperature readings from refrigerated assets.

FACE analyses uploaded files directly, without a connection being
configured first. Within an afternoon you will have Decision Artifacts
derived from your own records — findings you can check against what you
already know to be true, which is the only test of this kind of product
that means anything.

### Then connect one system

The one holding the money. Test the connection, define a recurring
question, and let it run overnight. The following morning there is a queue.

### Then decide

By that point the argument is no longer about the software. It is about
the specific value sitting in your specific queue, and whether the people
who would work that queue want it.

That is the correct basis for the decision, and it is the one this product
is built to be judged on.

