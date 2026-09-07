---
title: "Runink FACE — Fulfilment Autonomous Claims Engine"
headline: "The evidence of your next loss is already in your systems."
product: "Runink FACE"
subtitle: "Fulfilment Autonomous Claims Engine"
description: "A whitepaper for operations, finance and supply-chain leadership. How Runink FACE reads your operational data, works out what is going wrong, and drafts the fix for a named person to approve."
weight: 10
date: 2026-09-03T00:00:00Z
source_pages: 31
audience: "Operations, finance and supply-chain leadership"
blurb: "Scattered across a dozen systems that were never designed to talk to each other. FACE assembles it, works out what the combined picture means, and produces a specific, reviewable recommendation with the underlying records attached — for a named person to approve."
deck: |
  Runink FACE reads your operational data, works out what is going wrong,
  and drafts the fix — the order to hold, the reroute, the declaration, the
  claim — for a named person to approve.

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
  - { page: 15, page_end: 20, title: "Six problems, worked through", mark: "hypothetical" }
  - { page: 21, title: "A working day", mark: "hypothetical" }
  - { page: 22, title: "Reaching it from where the work happens" }
  - { page: 23, title: "Where it runs, and why that is a commercial matter" }
  - { page: 24, title: "How control is kept" }
  - { page: 25, title: "Compliance posture", mark: "self-declared" }
  - { page: 26, title: "What it connects to" }
  - { page: 27, title: "Who this is for" }
  - { page: 28, title: "What adopting it involves" }
  - { page: 29, title: "The commercial shape" }
  - { page: 30, title: "The argument in one page" }
  - { page: 31, title: "The next step" }
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
operation, measured in your own installation. If it does not, no case
study would have saved it.

A note on the name. The *claims* in Fulfilment Autonomous Claims Engine is
where the product started, and recovering money you are owed is still one
of the things it does best, because a recovery is the easiest kind of
result to check — either the money arrives or it does not. But it is one
case among several, and the chapters that follow give the others the same
room: demand that grows as it travels up the chain, customs and the papers
that go with a shipment, what stock to hold and where, returns, and
disruptions handled while they are still happening.

### The short version

Your business systems already contain the evidence of every loss you are
about to take. The container drifting warm at two in the morning. The
customs entry with a missing document and a daily port charge running. The
order that grew by a third at every stage on its way up the chain, so the
factory built for a demand that never existed. The returned item sent for
scrap that was worth refurbishing. The claim that expired unfiled.

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
temperature range on a Thursday night. The reading is there in the sensor
data. Nobody is reading sensor data at 2am. The cargo is written off on
arrival, and the loss is discovered by the finance team a fortnight later,
in a reconciliation.

**You find out, and nobody acts.** A customs entry is held at the port for
a missing document. Somebody receives that notification. It joins four
hundred other notifications. The port's daily charge runs for eleven days
before a human connects the hold to the document to the invoice.

**You never find out at all.** A pattern nobody was looking for — a short-paid
freight invoice, a claim inside its filing window, an order quantity that
has quietly doubled at each stage on its way upstream — simply passes. No
alert fires, because nothing was configured to look for it. The cost never
appears in a report, because a cost you never identified has no line item.

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
Claims expire. Disputes have deadlines. Port charges accrue daily. An
order placed on a forecast that has already turned cannot be unplaced. A
finding that arrives a month late is not a finding, it is a post-mortem.

### Where these conditions concentrate

- **Freight forwarders and third-party logistics providers**, where margin
  is thin and the difference between a good year and a bad one is the
  proportion of claims actually filed.
- **Manufacturers with international inbound flows**, where a customs hold
  and a shipment with nobody named as legally answerable for the
  declaration turn into duty owed and the daily cost of a container
  sitting still.
- **Manufacturers and wholesalers replenishing through several stages**,
  where a shop orders from a depot, the depot from a plant and the plant
  from its suppliers, and a small change at the customer end arrives at the
  far end of that sequence much larger than it started.
- **Food, pharmaceutical and chemical distributors**, where a temperature
  breach is not a data point but a destroyed consignment and a regulatory
  conversation.
- **Retailers and distributors with high return volumes**, where the
  decision on a returned item — restock, refurbish, recycle — is made by
  whoever is on the receiving dock that morning.
- **Any operation carrying an environmental or emissions reporting
  obligation**, where the figures have to be defensible and the assembly of
  them consumes weeks.

If your operation has all three conditions, you are already paying for
this problem. The only question is whether the payment appears anywhere
you can see it.

## What the problem costs

This document does not put a number on your losses. It cannot; the number
is specific to your operation and is measured inside your own installation.

What can be described is the *shape* of the cost, which is consistent
across operations of this kind.

### The cost has four parts

**Losses taken.** Spoiled cargo, penalty fees, port and carrier charges for
time, duty on entries nobody managed correctly, stock built or bought for
demand that did not arrive. These appear in the accounts, usually
classified as a cost of doing business.

**Recoveries missed.** Claims not filed. Invoices not disputed. Overcharges
not challenged. These do not appear in the accounts at all, which is why
they persist for years. There is no line item called *money we were
entitled to and did not ask for*.

**Attention consumed.** Skilled people spending their week assembling
evidence by hand — pulling the carrier's receipt for a shipment, matching
it to a weighbridge reading, finding the carrier's rate schedule, drafting
the dispute. This is expensive work performed at clerical speed, and it is
the reason the recoveries are missed: the assembly costs more than most
individual claims are worth, so only the large ones get filed.

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
> Basis: terminal scale reading 21,840 kg against the carrier's receipt for
> 23,100 kg.
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
filed or why an order was held, the answer is in the artifact, not in
somebody's memory.

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
FACE groups related records together, breaks documents into short passages
that can each be quoted on their own, and files everything into a search
index that holds your organisation's records and nobody else's.

Two things happen in this step that are worth spelling out, because the
rest of the product leans on them.

**It works out what each table is about.** Not which system it came from —
what it *means*. Shipments, money, sensor readings, vehicles, workflow
states, rules, customers, products, people. It reads that from the column
names, and where the columns are ambiguous, from the name of the source
itself. So an orders table from a warehouse system and an orders table
from a sales system land in the right part of the business, without anyone
maintaining a mapping.

**It draws the links between them.** The result is best pictured as a
mindmap of your operation: your data falls into communities — everything to
do with shipments here, everything to do with money there — and the lines
between those communities are the real relationships. This carrier, that
lane, this shipment, that invoice, that claim. Five systems become one
connected picture, and a question can travel along the lines: from a claim
to the shipment it came from, to the lane it ran on, to the other
shipments on that lane last quarter.

The point of the whole step is quotation. Every later claim the system
makes points back at the specific record that supports it.

### Reason

A set of analysis agents works over the assembled data. An agent here is
simply a program with one defined job and one defined kind of output —
claims, compliance, finance, fulfilment, maintenance, returns, sensor
readings, routing, documentation, images, voice.

They work in a visible loop: consider, act, look at the result, consider
again, for a bounded number of steps. The intermediate steps appear on the
screen as they happen, so a running job is legible rather than a spinner.

### Recommend

The output is Decision Artifacts, filed into a ranked queue under one of
seven categories: compliance, finance, operations, sales-and-operations
planning, savings, sustainability and procurement.

Each run leaves a step-by-step record that can be replayed and inspected
afterwards. If you want to know how the system reached a conclusion in
March, you open March's record and walk it.

## Rules Recon: what you think you enforce

Most businesses have two rulebooks. The one written down, and the one
running.

The written one lives in a standard operating procedure, a policy document,
a contract schedule. The running one lives in the systems: in a validation
somebody added in 2019, in a workflow condition, in a threshold nobody
remembers setting.

They are never the same rulebook. **Rules Recon** — a reconnaissance of the
rules — shows you the difference.

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
rule stated in plain English and naming the source it was read out of —
data, document, sensor stream or system configuration.

Shadow rules are the ones that surprise people. They are the reason the
system behaves in ways the policy cannot explain.

## Actionable Twins: one queue, ranked

Findings are worthless if they arrive in seven different places.

**Actionable Twins** is the single queue. The name is worth a sentence: each
entry is a working copy of one real thing in your operation — a shipment, a
return, a customs entry, a piece of equipment — carrying what the system
knows about it and what it proposes doing. A twin of the thing, and one you
can act on rather than only look at.

Every agent's output — compliance, finance, operations, planning, savings,
sustainability, procurement — consolidates into that one ranked list, each
entry carrying an estimated impact figure and a severity band.

### What an operator does here

They work down the list. For each entry: read the recommendation, read the
evidence, approve, edit or reject.

Approved actions carry through to a view showing the card and its outcome.
Financial actions are tracked separately on a savings board, moving through
their stages so that a recovery approved in January can be followed to the
money arriving.

### Why the ranking matters more than it sounds

An operations team's real constraint is not information, it is the order in
which they spend the day. A queue ranked by value at stake and severity
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

Consolidating a lane. Changing a sourcing pattern. Moving stock ahead of a
season. Cutting a safety margin that may be doing more harm than good.
These are decisions where being wrong is expensive and being slow is also
expensive, which is the worst combination a management team faces.

**Hypothesis Lab** is where those are examined before they are committed.

### How it is used

An operator states a scenario in ordinary words. The lab tests it against
your own history and your own records — not a generic industry model — and
returns what the evidence supports.

If the idea holds, it can be promoted into the Actionable Twins queue and
become work. If it does not hold, it stops there, having cost an afternoon
rather than a quarter.

### The discipline this introduces

The important word is *promote*. A scenario does not become an action
because somebody senior liked it. It becomes an action because it survived
a test against the data and was then approved by a named person.

This is a governance property as much as an analytical one. It creates a
record of why a structural decision was taken, at the moment it was taken,
which is exactly the record that does not exist when a decision is made in
a meeting.

### Where the outside world comes in

Scenario work is not confined to your own records. The hypothesis agent
reads outside market, competitor and freight-rate signals alongside the
mindmap of your connected systems — the communities your data falls into
and the lines between them — so a question about lane cost is examined
against the market as well as against your own history.

## Fetch Center and Maturity Center

### Fetch Center — where the questions live

Fetch Center is the front door to your connected systems.

Connections are created, tested and managed here. Recurring questions are
defined here and run on a schedule you set — created, activated, paused or
deleted from the screen, without an engineer.

Each run leaves a step-by-step record you can replay. That is the
difference between an answer and an answer that survives an audit: you can
go back and see the run, the sources it touched, and the steps it took.

An operator can also skip the connection entirely and upload a spreadsheet
or a document directly, receiving root-cause and savings analysis on the
file itself. This matters more than it sounds during an evaluation, because
it means the first useful output does not wait on an integration project.

### Maturity Center — the direction of travel

A single finding is an event. A trend in findings is a management signal.

Maturity Center tracks how the operation is doing over time and produces a
phased plan from where it is now to where it intends to be.
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

**Claims.** Identifying that money is owed — to you or by you — and
assembling the case for it, including the audit and recovery steps that
case has to pass through.

**Finance.** Sorting transactions and spend into categories, with a
confidence score attached to each; spotting amounts that do not fit your
own normal ranges; actions on cash, money owed to you and money you owe;
and the three cost questions finance teams ask — what a thing costs to own
over its life, what each activity in the business actually consumes, and
what it costs to serve a given customer or lane.

**Compliance.** How your operation stands against the control frameworks
that apply to it, environmental narratives, and emissions tracking across
the three standard reporting scopes — what you burn directly, what you buy
as energy, and what happens up and down your chain — with fixes stated in
business terms rather than technical ones.

**Fulfilment.** Sourcing, supply and the steps that get an order to a
customer.

**Rules Recon.** Business and governance rules read out of data, documents,
sensor streams and system configuration, each stated in plain English and
naming the source it came from.

**Predictive maintenance.** When a piece of equipment is likely to need
attention, and what kind, worked out from its sensor readings, its
maintenance history and its vehicle-tracking data.

**Reverse logistics.** Returns, warranty claims, refurbishment and the
decisions that keep material in use rather than in a skip.

**Sensor readings.** Actions derived from live measurement streams —
temperature, humidity, vibration, location, speed, fuel, engine
diagnostics — covering refrigerated-cargo integrity, vehicle monitoring,
and dangerous-goods and weight compliance.

**Route Twin.** Journeys costed across more than one form of transport —
road, rail, sea, air — with distance, duration and cost estimated for each.

**Documentation.** The formal trade and shipping papers a consignment
travels with, including customs declarations.

**Vision.** Grading physical damage and spotting anomalies from video and
still images of transport hubs, airports and infrastructure.

**Voice.** Spoken commands, answered hands-free and routed with the
speaker's location taken into account.

**Hypothesis.** Business decision scenarios drawn from the mindmap of your
connected data, together with outside market, competitor and freight-rate
signals.

**Twins.** The action cards themselves, with the approve and reject flows
and the drafts an approved action requires.

## What arrives in the queue

Decision Artifacts arrive as typed cards. The type determines what the card
shows, so a person reviewing one sees the fields that decision actually
needs.

**Customs clearance.** A held entry with the port, the reason it is held,
the specific documents that would release it, days held and the port
charges accruing.

**Importer of record.** An entry with nobody named as the party legally
answerable for the declaration and the duty, carrying its tariff
classification and the duty at stake.

**Cold chain.** A refrigerated asset that went outside its temperature
range, the product at risk, the value at risk and the corrective dispatch
action.

**Claims.** Claim number, status, amount and the reasoning for recovery.

**Freight forwarding.** A lane where separate bookings could be combined,
with the bookings, how full the trailers ran on average, current spend and
the saving available.

**Cross-border trucking.** A crossing where trucks are waiting longer than
booked, with the crossing, the carrier, the wait measured against the
scheduled transit, the loads affected, the cost of the waiting time and the
underlying cause.

**Maintenance.** Equipment identifier, how likely a failure is, what kind of
failure, the intervention and the downtime it would avoid.

**Route.** An origin-to-destination journey with distance, duration,
estimated cost saving and a map.

**Emissions.** Daily and annualised freight CO₂e, the worst-emitting lane
and a specific action to reduce it, with the method of calculation stated
so the figure survives audit.

**Spend analysis.** Total spend, savings identified, the largest categories
and a recommendation for combining purchases.

**Sales-and-operations planning.** How well the forecast has matched
history, the stock positions behind it, and a planning recommendation.

**Fulfilment.** Order status, estimated delivery and the issue to resolve.

**Reverse logistics.** Return identifier, the condition the item arrived in,
where the refund stands, and what should be done with the item.

**Reactive logistics.** A disruption that has already happened, the orders
it affects and a plan to resolve it.

**Request for proposal.** Draft content, evaluation criteria and candidate
vendors.

**Transformation plan.** A phased path from where the operation is now to
where it intends to be.

**Email draft, calendar invite and system update.** The concrete
follow-through an approved action needs, so that approving is the end of
the work rather than the beginning of it.

## The numbers are computed, not written

There is a failure mode in this category of product that a careful buyer
should ask every vendor about: language models are fluent, and fluency
produces confident numbers that were never calculated.

FACE separates the two jobs. The language model handles language —
reading documents, explaining findings, drafting correspondence. Quantities
are produced by long-established statistical methods, which calculate
rather than compose.

### What does the computing

**Separating a history into its underlying direction and its repeating
seasonal pattern**, and reporting what neither of those explains — which is
where the surprises are. The method is chosen by testing candidates against
periods that have already happened, so its accuracy is quoted from the
record rather than asserted.

**Grouping records that resemble each other**, run over your own data,
without being told in advance how many groups to expect or where to draw
the boundaries.

**Ranking those groups** by how complete, fresh and relevant they are to the
question and the part of the business it concerns, so the most useful
material comes up first.

**Exact-match search folded into meaning-based search**, so a search for a
specific part number or claim reference finds it, and a search for a
described situation — *shipments delayed at the northern crossing* — finds
that too.

**Summaries of how a set of numbers is spread** — the middle, the range, how
tightly clustered or how scattered.

**Working out what caused what**, rather than what merely happened
alongside what. This is the step that turns a correlation into a finding
somebody can act on.

**Grouping your data into communities and drawing the lines between them**,
the way a mindmap does. Carrier, lane, shipment, invoice, claim stop being
rows in five systems and become one connected picture.

**Listing the ways a process can fail**, scoring each by how bad it would
be, how likely it is and how easily it would be noticed, and flagging
service commitments that are being missed.

**Locating the damage in an image**, which is what makes an assessment
specific to a place on an object rather than a general impression.

### Why to care

Because it changes what a finding is worth in an argument. A figure that
came out of a method tested against your own history can be defended to a
carrier, an auditor or a board. One that came out of a sentence cannot.

## Six problems, worked through

The chapters above describe the mechanism. This one points it at six
problems operations teams actually have, and follows each through to what
would arrive in the queue.

These are illustrations, not accounts of events, and the mark on this
chapter says so. What is being illustrated is real: reading across systems
that were never designed to talk to each other, placing the data into the
parts of the business it belongs to, calculating the quantities, and
producing a reviewable recommendation for a named person to approve.

### One — the small change that grows on its way upstream

A shop sells a few more units than usual one week. Its replenishment order
to the depot is a little larger than the extra sales, because somebody
rounds up to a full case and adds a margin for safety. The depot's order to
the plant is larger again, for the same two reasons. The plant's order to
its component suppliers is larger still.

By the time the original small change reaches the far end of the chain it
has grown into a large one. And when the shop's sales settle back to
normal, everybody upstream is holding stock ordered for demand that never
existed — so everybody stops ordering at once, and the correction travels
back up just as amplified as the original.

Planners have a name for this: the **bullwhip effect**. A small movement at
the handle becomes a large one at the tip. Nobody in the chain behaves
unreasonably. Each party rounds up, protects itself and orders on the only
information it has, which is the order it received from the party below.

The reason it survives every attempt to manage it is that no single
position can see it. The shop sees its own sales. The plant sees its own
order book. The amplification lives in the *sequence*, and the sequence is
recorded in four systems owned by four functions, none of which reads the
other three.

FACE reads those four. Point-of-sale or customer order data, the warehouse
system, the production plan, the purchase orders going out to suppliers.
Each lands in the part of the business it belongs to, worked out from the
data itself rather than from a mapping somebody maintains by hand, and the
lines between them — this order, that replenishment, that purchase — make
one connected picture instead of four disconnected ones.

Then it does the same arithmetic at each stage: separate the underlying
direction from the repeating seasonal pattern, and measure what neither
explains. Run that stage by stage and the size of the unexplained movement
grows as you travel away from the customer. That growth is the effect,
stated in your own numbers.

What arrives in the queue is not a chart. It is a proposal: a reorder point
that should change, a safety margin doing more harm than good on a named
line, an order that should be held this week rather than placed. The four
stages come attached as the evidence, and a planner who has spent fifteen
years in that chain reads it and decides whether it is right.

### Two — a customs entry and the papers that travel with it

A consignment crossing a border carries a paper trail, and a great deal of
money turns on whether anybody checks that the papers agree with each other.

Three documents matter most. The **purchase order** is what the buyer asked
for. The **commercial invoice** is what the seller says it is charging for.
The **bill of lading** is the carrier's receipt for what it actually picked
up. These three ought to state the same quantity.

FACE compares all three. If they agree, the shipment carries on. If any one
of them disagrees with the others, the flow stops there and the difference
becomes a case with the numbers stated plainly — this document says this
many, that one says that many, and here is the gap. That is a very
different position from discovering the shortfall at the receiving dock,
after the goods have been accepted and the matter has become one party's
word against another's.

Held entries arrive as their own kind of card: the entry number, the
shipment, the port, why it is held, exactly which documents would release
it, how many days it has sat, and the money accruing while it sits. Ports
charge by the day once a container stays past its free time — the trade
calls this *demurrage* — so the cost of a hold is a clock running, not a
one-off event. A card that shows the clock is a card that gets worked
today.

A second kind of card covers the entry with nobody named as **importer of
record**: the party legally answerable for the declaration, the duty and
the accuracy of the paperwork. That card carries the tariff classification
and the duty at stake, which is what turns an administrative loose end into
a number a finance director recognises.

The clerical work around all of this — the declaration, the tariff
classification, the terms of sale that decide who pays for carriage and
insurance and from which point — is drafted by the system and approved by a
person. The guardrails are explicit about the boundary: an instruction to
forge a tariff code, alter a commercial invoice, ignore a weighbridge
reading that disagrees with a manifest or skip a customs check is refused
outright, and refused before any reasoning happens rather than after.
Autonomy here means the assembly is done for you. It does not mean the
declaration goes out unread.

### Three — what to hold, and where

Forecasting is the oldest analytical job in a supply chain and, in a great
many operations, still the one done in a spreadsheet by one person who is
about to go on leave.

FACE forecasts from your own history using the same method it uses on
sensor data: fit the underlying direction, fit the repeating seasonal
pattern, allow for the points where the pattern genuinely changed, and
report what is left over. It states how closely the fit matched the history
it was given, and how many data points it had to work with. Both of those
travel with the number, because a forecast quoted without either is a
figure nobody can argue with — which sounds like a strength and is the
opposite of one.

On the stock side it reads positions as they are actually recorded, which
is rarely one number. What is free to sell, what is held pending quality
inspection, and what is blocked are three different things, and only the
first can fill an order this afternoon. Checking those against a reorder
point is straightforward arithmetic, and the card says so rather than
dressing it up.

The recommendation that comes out is about placement as much as quantity.
Which region is carrying the demand, and whether stock should be moved
there ahead of time rather than flown there afterwards at expedited freight
rates — because the cost of getting this wrong is not usually a stockout,
it is an air freight invoice nobody planned for.

The card carries the forecast, how well it fits, the stock positions behind
it and the regions it compared. A planner can disagree with any of the
four, on the record, and the disagreement is itself worth having.

### Four — returns, and the decision made on the dock

Every returned item is a small decision with a large total. Restock,
refurbish, break for parts, recycle, or send back to the supplier under
warranty. Made well, a return is a partial recovery. Made badly, it is the
cost of the original sale paid a second time.

The decision is normally made by whoever is on the receiving dock that
morning, from the item in front of them, in the time available. Two people
looking at the same item in the same condition on different days will
reasonably reach different answers, and neither answer leaves a record
anybody can review.

FACE reads the return authorisation, the receiving log and the claim behind
it, and proposes what should be done: the condition the item was recorded
in, what refurbishment would cost, where it should be sent, and where the
refund stands. The reasoning comes with it, so the reviewer is checking a
case rather than trusting a verdict.

Consistency is most of the value. The same item in the same condition gets
the same treatment on a Tuesday as on a Friday, and the rule that produced
it is written down where a category manager can look at it and change it.

Warranty recovery lives here too, and it is the part that is most often
left on the table. A return that is the supplier's fault is money the
supplier owes, and it is owed only for as long as the claim window is open.
The same assembly work that produces the disposition produces the claim
against the supplier, as a separate artifact with its own approval.

### Five — a disruption, while it is still running

A port closes. A road floods. A carrier's line goes down and a vessel is
suddenly three days late. This is *reactive* logistics: responding to
something that has already happened, while it is still happening, when
every hour of deliberation costs something.

The expensive part is almost never the decision. It is the forty minutes of
assembly before the decision. Which orders are actually on that vessel.
Which customers those orders belong to, and which of them have committed
delivery dates. What the alternatives cost, and how long they take.

FACE does that assembly. The card names the incident, what kind of
disruption it is, the orders it touches and the plan proposed to resolve
them. Alternative journeys are costed across more than one form of
transport — road, rail, sea, air — each with its own distance, duration and
cost, so choosing between them is a comparison rather than a hunch under
pressure.

Signals the operation does not own are read alongside your own records —
weather, traffic, fuel prices, freight rates — because a disruption is by
definition something that started outside your systems and arrived in them.

Refrigerated cargo sits next to this and behaves the same way. A container
that drifts above its range at two in the morning is a disruption in
progress with a value attached: the product at risk is named, the value at
risk is calculated, and the corrective dispatch is drafted and waiting when
somebody opens the queue at eight. The window in which that is a save
rather than a write-off is measured in hours.

### Six — money you are owed

The case the product is named for, and deliberately the last one here.

Not because it is the smallest. Because it is the easiest to check, which
makes it the right place to start an evaluation and the wrong place to stop
a description. Either the money arrives or it does not.

The forms it takes are familiar. A freight invoice short-paid against the
rate that was agreed. A claim against a carrier still inside its filing
window. Duty overpaid on a misclassified entry. Waiting time billed to you
for a delay that was not yours.

They go unrecovered for a reason that is arithmetic rather than negligence.
Assembling one case takes a skilled person most of a morning — find the
carrier's receipt, match it to the weighbridge reading, find the rate that
applied on that date, check the filing deadline, draft the letter. If the
average case is worth less than that morning, only the largest get filed
and the rest expire quietly. Everyone in the business knows this and nobody
can fix it by trying harder.

FACE changes the arithmetic by doing the assembly. The claim arrives as a
card with a number, a status, an amount and the reasoning for recovery,
with the supporting records attached, and the reviewer's job is the one
they are actually good at: does this case hold. Approved recoveries move
onto the savings board and through its stages, so a claim approved in
January can be followed to the money arriving, which is the only version of
this that a finance director will believe twice.

### What the six have in common

None of them is a new capability bolted on for a new market. They are the
same loop — read across the systems, place the data, calculate the
quantities, draft a recommendation, hand it to a named person — pointed at
six different questions.

That is the honest claim, and it is a stronger one than a feature list. A
mechanism that generalises is worth more than six mechanisms that do not,
because the seventh problem is already coming and nobody has written the
feature for it yet.

## A working day

The clearest way to describe a product is to describe a Tuesday.

### 06:40 — Overnight, without anyone present

The recurring questions defined in Fetch Center have run. Sensor streams
from refrigerated assets were read through the night. Carrier and customs
positions were pulled. The agents worked over the results and filed their
output.

### 08:15 — The operations lead opens the queue

Actionable Twins shows the night's work, ranked. Fourteen items. The top
one is critical: a refrigerated container went above range at 02:10, the
product at risk is named, the value at risk is computed, and the corrective
dispatch action is drafted and waiting.

She reads the evidence — the temperature readings, the asset, the
consignment. She approves. The dispatch instruction and the notification
to the customer are drafted immediately.

The customer will hear about this from her, this morning, rather than from
their own receiving dock on Thursday.

### 09:30 — Customs

Two held entries. Each card names the port, the reason for the hold, the
specific documents that would release it, the days held so far and the
charges accruing. One is straightforward and she approves the documentation
draft. The other has nobody named as answerable for the declaration; that
card carries the tariff classification and the duty at stake, and she
routes it to trade compliance.

### 10:15 — The planning item

One artifact is not an exception at all. It compares the order quantities
at four stages of a replenishment chain and proposes cutting a safety
margin on one line, because the swing at the supplier end is running far
wider than the swing at the customer end. She reads the four stages, agrees
with three of them, and edits the recommendation down to a single line
before approving it. The edit is recorded with her name on it.

### 11:00 — The claims review

Nine claims artifacts, each with a claim number, a status, an amount and
the reasoning for recovery. This is the hour that used to take a week,
because the evidence assembly — the carrier's receipt, the weighbridge
reading, the rate that applied — is already attached to each one.

She approves seven, edits one, rejects one where the reasoning does not
hold. All the outcomes are recorded against the artifacts with her name.

### 14:00 — A question, asked out loud

In a meeting, someone asks why the northern lane costs what it does. She
asks the question in Fetch Center in plain language. The relevant agents
run; the progress of each step appears on screen; the answer comes back
with the records it came from, and one opportunity to combine bookings
worth promoting to the queue.

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

**Voice.** A live voice agent, so an operator or driver can ask and instruct
hands-free. Both the listening and the speaking run on your own machines.

**Phone messaging.** A WhatsApp and SMS channel reaches the same agents
from an ordinary phone, with no application to install on a driver's
device.

**Cameras.** Live camera feeds or captured images are examined for damage
and anomalies at transport hubs, airports and infrastructure, with the
results appearing on the operator's screen as they are produced. Damage
grading becomes a record rather than an argument between two parties'
recollections.

**Documents.** Uploads are routed automatically by what they are — text
pulled out of documents, tables pulled out of spreadsheets, structure
pulled out of source repositories. The person uploading does not choose a
route; they upload the file.

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
platform's own reasoning software, running on your own machines. Your
logistics data, your contracts, your customer records and your claims
correspondence are processed where they already sit.

### Three consequences a buyer should weigh

**The data question stops being a negotiation.** A large part of every
enterprise purchase cycle for analytical software is spent establishing
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

### The shape of an installation

The same software runs on a single workstation for evaluation, and on one
server or a small group of them inside your own walls for production.
There is no managed cloud database in the middle.

Where no specialist graphics hardware is available, the reasoning runs on
ordinary processors at a steadier pace — which suits work that runs in
batches overnight, which is what claims, reconciliation, planning and
compliance actually are. The overnight run is the natural rhythm of this
product, and an overnight run has all night.

### Records and continuity

The system's own operating records — connections, schedules, artifacts,
approvals — are held in a small database that lives with the software.
It is copied continuously to file storage you control, and restored
automatically when the system starts. Keeping that consistent is the
platform's job rather than a task on somebody's list.

## How control is kept

Autonomy is only sellable to a risk committee if the controls around it are
specific. These are the controls.

### The person stays in command

Consequential actions are gated by human approval. The system proposes; a
named operator approves; the approval is recorded against the artifact.

This is a property of the design, not a setting. The queue is a queue of
proposals.

### Identity between components

The parts of the system prove who they are to each other on every exchange,
using credentials that are short-lived, issued fresh and replaced on a
cycle. Those credentials come from an authority the installation runs
itself.

### Guarding the inputs

Text arriving from outside is checked before it reaches the reasoning step,
so that a document or a message cannot smuggle in an instruction of its
own. Database queries are checked on every connection before they run.

### Credentials at rest

Credentials stored locally are held under restrictive filesystem
permissions — directories at 0700, files at 0600 — so they are reachable
only by the account that owns them.

### The audit record

Audit events are recorded as structured entries with a defined type rather
than as free text, which means they can be queried rather than read.
Personal identifiers inside them are replaced with a one-way code.

### Who sees what

Membership is explicit. An operator sees only the installations they are
entitled to see. Entitlements carry an expiry, so access granted for a
project ends with the project rather than persisting for years. An
unidentified caller sees nothing at all.

Sign-in uses multi-factor authentication.

### Separation between customers

The search index behind every answer holds one organisation's records and
is queried only for that organisation. The evidence behind an answer comes
from the organisation that asked the question.

## Compliance posture

Two things need to be said precisely here, because vendors in this category
routinely blur them.

### What FACE's own posture is

Runink FACE's compliance posture is **SOC 2-oriented, with controls mapped
and self-declared.**

That is the accurate wording and it is the wording used throughout. It is
not a claim of certification, and it should not be read as one.

### What the compliance agent does

Separately from the product's own posture, the compliance agent examines
*your* operation against control frameworks, reporting each finding as
pass, fail or warning.

The frameworks it assesses against include PCI-DSS, SOC 2, HIPAA,
ISO 27001, ISO 31000, ISO 42001, LGPD, GDPR and IFRS 17.

This is a statement about what the agent examines in your systems. It is
not a statement that Runink FACE holds any certification under those
frameworks, and it must not be read as one.

### Why the distinction is worth your attention

Because a vendor who is careless about this distinction in a whitepaper
will be careless about it in an audit, and you will be the one holding the
finding. The wording above is the wording Runink uses internally, in its
documentation and in its sales material, without variation.

### The reporting side

For environmental obligations specifically, the compliance agent produces
emissions tracking across the three standard reporting scopes — what you
burn directly, what you buy as energy, and what happens up and down your
chain — and emissions artifacts state the method used to reach the figure.
A number that arrives with its method attached is a number that can be
defended.

## What it connects to

FACE reads the systems you already run. The connections cover the
following.

### Data platforms and databases

Snowflake, Databricks, PostgreSQL, MySQL and Google BigQuery.

### Business systems

SAP, Microsoft Dynamics 365, Salesforce, HubSpot, ServiceNow and Guidewire.

### Documents, files and storage

Microsoft SharePoint, Excel and Parquet files, and file storage on
Amazon S3, Google Cloud Storage or Azure Blob Storage.

### Workplace sources

Google Workspace — Docs, Drive, Sheets, Gmail, Maps routing and Analytics.

### Everything that is not a neat table

Web pages, read by a browser the platform drives itself. Documents and
images, with the text read out of scans and photographs. Source-code
repositories. Live video from camera feeds.

### Two properties worth noting

**Connections are tested before they are saved.** A connection that will not
work says so at the moment it is created, in front of the person creating
it.

**Nothing is replaced.** FACE reads the systems you have. It does not ask
you to migrate off your transport system, your warehouse system or your
ledger. The value is in the space between those systems, which means the
systems have to stay where they are for the value to exist.

### Working across systems

Where an operation already runs its own analytical infrastructure, work can
be sent to it directly — including a path that executes inside Snowflake,
and the setting up of Databricks clusters and jobs — so the analysis runs
close to the data rather than moving the data to the analysis.

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

### The head of planning

You are forecasting from history in a spreadsheet and absorbing the
consequences of everybody else's rounding. FACE forecasts from your own
records, states how well the forecast fits, reads stock positions as they
are actually recorded, and shows how far an order swing grows between one
stage of the chain and the next. The specific promise: the argument about
safety margins is settled with your own numbers rather than seniority.

### The head of compliance or risk

You are asked whether controls are enforced and you answer from belief.
Rules Recon converts that into a list with four states and a named source
per rule. The compliance agent reports how you stand against the frameworks
that apply to you, with each finding marked pass, fail or warning. The
specific promise: the answer to *do we enforce this* becomes a document
rather than a conversation.

### The chief information officer

You are being asked to approve another system that wants a copy of the
company's operational data. This one runs on your hardware, reads the
systems you already own, replaces none of them, and its internal
components prove who they are to each other with short-lived credentials
that are replaced on a cycle. The specific promise: a shorter security
review, because the data does not go anywhere.

### The chief executive

You want the operation to catch its own problems and you want the
improvement to be visible. Maturity Center tracks how the operation is
doing over time and produces the phased plan; the savings board shows what
was approved and what it recovered. The specific promise: operational
improvement becomes something you can read, quarter over quarter.

## What adopting it involves

### Evaluation runs on a laptop

The same software that runs in production runs as it is on a single
workstation. An evaluation does not require infrastructure to be set up
first, and it does not require a data migration.

The fastest first result comes from uploading a file — a spreadsheet of
freight invoices, a folder of claims correspondence, two years of monthly
order quantities — and receiving root-cause and savings analysis on it
directly. This produces a finding on your own data in an afternoon, before
any connection is configured.

### Connections come next, one at a time

Connect the system where the money is. For most operations that is the
freight or claims data, because that is where recoverable value
concentrates. Test the connection, run a question, read the artifacts.

Add the second system when the first has produced something worth acting
on. The value compounds as more of your systems are connected — because the
losses live between systems, each additional connection makes the previous
ones more useful — but it does not wait for completeness.

### Then it runs on a schedule

Recurring questions run overnight on an interval you set. The queue is
populated when the team arrives. This is the steady state, and it is where
the product stops being a project and becomes part of the day.

### Production sits inside your own walls

Production is the same software on one server or a small group of them,
inside your own environment. Installations are declared once and maintained
automatically thereafter.

### What it asks of your people

An operator, not an engineer. Connections are created and tested from the
screen. Schedules are created, activated, paused and deleted from the
screen. Questions are asked in plain language. Reviewing artifacts is a
domain skill — knowing whether a claim holds, whether a safety margin is
sensible — not a technical one.

## The commercial shape

### How the product is licensed

Each organisation holds its own entitlement record, carrying a subscription
tier and a seat count. Licences are generated, validated and activated
through the product itself.

### How consumption is seen

The work the machines do is counted in units and shown in a usage view,
so a heavy month is visible while it is happening. An operator can set a
budget against it, which makes consumption a decision rather than a
discovery at the end of a month.

Because the reasoning runs on your own machines, this is a view of your own
capacity, not a meter you are billed against per question.

### What is included in the operator experience

Beyond the six main destinations, the interface provides a side panel for
the recurring work — voice, and the compliance, finance and operations
fixes, today's instruction, the drafts waiting to go out, and the camera
connection — a view of what the agents are currently working on, progress
shown as each run proceeds, step-by-step records you can replay, and a
support console.

### Working alongside your other systems

Agents can be reached by other agents, and the platform offers its own
tools to other software through the open standard that has grown up for
exactly that. In practice this means FACE can be a participant in a wider
automation setup rather than an island in it.

### FACE within Runink

FACE is one of two Runink products. The other is PULSE, a digital-marketing
engine built the same way. Both sit on a shared platform called CORE, which
is what makes the installation, identity and separation properties described
in this document consistent across them.

## The argument in one page

**The evidence of your next loss already exists in your systems.**
Scattered across platforms that were bought separately and never designed
to be read together.

**Assembling it by hand costs more than most individual losses are worth.**
Which is why only the largest problems get worked, and the rest — the
expired claim, the amplified order, the mis-sorted return — pass quietly.

**FACE does the assembly.** It connects to the systems you run, ties what it
reads to your own records, works over the combined picture, and produces a
specific recommendation with the evidence attached.

**It is one mechanism, not a feature list.** The same loop answers a customs
hold, a demand swing that grows upstream, a return on a dock, a disruption
in progress and a claim inside its filing window.

**A person decides.** Every consequential action is proposed by the system
and approved by a named operator, with the approval recorded against the
artifact. The autonomy is in the drafting and the ranking. The judgement
stays with the accountable human.

**The numbers are computed.** Forecasting, grouping, cause-and-effect and
statistical analysis produce the quantities. The language model handles
language. A figure that came from a method tested against your own history
can be defended to a carrier or an auditor.

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

A spreadsheet of freight invoices. A folder of claims correspondence. Two
years of monthly order quantities for one product line. A month of
temperature readings from refrigerated assets.

FACE analyses uploaded files directly, without a connection being
configured first. Within an afternoon you will have Decision Artifacts
derived from your own records — findings you can check against what you
already know to be true, which is the only test of this kind of product
that means anything.

### Then connect one system

The one holding the money, or the one holding the order history. Test the
connection, define a recurring question, and let it run overnight. The
following morning there is a queue.

### Then decide

By that point the argument is no longer about the software. It is about
the specific value sitting in your specific queue, and whether the people
who would work that queue want it.

That is the correct basis for the decision, and it is the one this product
is built to be judged on.
