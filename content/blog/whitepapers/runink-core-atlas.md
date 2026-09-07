---
title: "Runink CORE and Atlas — Continuous oversight, with a second opinion on every finding"
headline: "Continuous oversight, with a second opinion on every finding."
product: "Runink CORE"
subtitle: "A joint architecture paper with Logical Leap's Atlas"
jointly_with: "Logical Leap"
partner_url: "https://logicalleap.io/atlas"
description: "A joint architecture paper from Runink and Logical Leap. Atlas watches capital spending as it happens; CORE's assessors read each finding and score it before a person is asked to act. The paper marks, on the pages it names, which half of the design runs and which is drawn."
weight: 40
date: 2026-09-03T00:00:00Z
source_pages: 25
audience: "Executive, finance, operations and risk stakeholders"
blurb: "Atlas watches a company's capital spending as it happens. CORE's automated assessors read Atlas's findings and score them before a person is asked to act on any of them. This is an architecture paper: it states on pages 11 to 13 exactly which half of the design runs today and which half is drawn, and every claim in it should be read against those pages."
deck: |
  Atlas, from Logical Leap, watches a company's capital spending as it happens
  and tells the people responsible what deserves their attention. Runink CORE
  runs software on machines a company owns, using a language model the company
  runs itself, with a record of every action taken and by whom.

  This paper describes a design in which the two work together: Atlas leads on
  what the customer sees and does, and CORE's automated assessors read Atlas's
  findings and score them before a person is asked to act on any of them.

  **Part of that shape is now built, and part of it is drawn. Chapter one and
  pages 11 to 13 set out exactly which is which, and every claim in this paper
  should be read against them.**
register:
  - { page: 1,  title: "What this paper is, and which part of it runs", mark: "drawn" }
  - { page: 2,  title: "Executive summary" }
  - { page: 3,  page_end: 4, title: "The expensive problem, named before the product" }
  - { page: 5,  title: "Who has this problem, by segment" }
  - { page: 6,  title: "Why periodic review fails" }
  - { page: 7,  title: "What the two products do" }
  - { page: 8,  title: "How the two divide the work" }
  - { page: 9,  title: "What \"judging\" means, in plain language" }
  - { page: 10, title: "Why an independent assessor matters" }
  - { page: 11, title: "What is built: findings in, verdicts back", mark: "runs" }
  - { page: 12, title: "What is built: how a verdict is reached, and where the line falls", mark: "runs" }
  - { page: 13, title: "Where the built part stops", mark: "drawn" }
  - { page: 14, title: "A note on how we name the assessors" }
  - { page: 15, title: "The two-stage adoption path" }
  - { page: 16, title: "For operations leaders", mark: "hypothetical" }
  - { page: 17, title: "For finance and procurement", mark: "hypothetical" }
  - { page: 18, title: "For compliance, risk and security" }
  - { page: 19, title: "Insurance", mark: "hypothetical" }
  - { page: 20, title: "Banking and financial services", mark: "hypothetical" }
  - { page: 21, title: "Telecoms", mark: "hypothetical" }
  - { page: 22, title: "Marketing", mark: "hypothetical" }
  - { page: 23, title: "Continuous versus periodic: a comparison" }
  - { page: 24, title: "What the combination is built on, and why that matters commercially", mark: "drawn" }
  - { page: 25, title: "Who this is for, what adopting it involves, and a straight note on numbers", mark: "not-measured" }
---

## What this paper is, and which part of it runs

It is written jointly so that both
engineering teams and any interested customer are reading the same description of the same
shape. Part of that shape is now built. CORE accepts findings from an outside assessment
platform, judges each one, and hands the verdicts back, and that path has been exercised end
to end in automated testing. The other direction — CORE reaching into Atlas to collect
findings itself or to push verdicts into it — is a named interface with nothing written behind
it, and it waits on a technical interface from Logical Leap's side; Atlas is offered in
private beta and does not publish one, which is ordinary for a product at that stage. Pages 11
to 13 set out exactly which is which, and every claim in this paper should be read against
them. Nothing here is an account of work performed for a customer, and nothing in it describes
an outcome observed at one.

## Executive summary

Companies discover their most expensive mistakes late.

A capital project overruns and the overrun is visible in the quarter-end pack. A supplier
invoices against a purchase order that nobody re-checked and the discrepancy surfaces in an
audit sample nine months later. A rule that everyone believes is enforced was quietly
switched off during a system upgrade in March and nobody notices until a regulator asks for
evidence. A claim is paid that should have been questioned. A customer churns after four
warning signals that were each individually unremarkable.

None of these are failures of intelligence. They are failures of timing. In every case, the
information needed to make a better decision existed, in a system the company already owned,
before the money was committed. What was missing was somebody reading it at the moment it
mattered.

The reason nobody was reading it is arithmetic. The volume of transactions, records and
configuration changes in a mid-sized company exceeds what a review function can inspect. So
review became sampling, sampling became periodic, and periodic became the thing that happens
after the decision.

**Atlas addresses the timing.** Atlas is a data-quality and governance agent from Logical
Leap. It evaluates transactions continuously against the rules a company has written down,
inside the systems where the data originates — invoices, purchase orders, enterprise resource
records — rather than in a spreadsheet assembled afterwards. It flags policy violations as
they occur, detects unusual patterns, ranks what it finds by impact and exposure, forecasts
overruns and delays ahead of time, recommends actions and tracks them to close, and keeps an
unbroken record from plan through to the asset ledger. Logical Leap describes this as moving
from reactive problem management to continuous governance.

**CORE addresses what happens next.** Continuous monitoring creates a new problem the moment
it works: a queue. If every item in the queue arrives with the same confidence, a person has
to re-derive the judgement for each one, and the queue becomes a second full-time reading
job. CORE contributes a set of automated assessors that read a finding before a person does,
score it on both the reasoning that produced it and the conclusion it reached, and separate
the items that carry a clear recommended action from the items where the judgement genuinely
belongs to a person.

**The division of labour is deliberate.** Atlas leads on the presentation and the interface:
the customer's people work in Atlas, see findings in Atlas, and act in Atlas. CORE sits
behind it as an independent assessor and as the layer that runs the whole arrangement on the
customer's own machines, on the customer's own model, with a written record of every action.

**What of this runs.** The path by which findings reach CORE, are judged, and are read back is
built and has been exercised in automated testing. The path by which CORE would reach into
Atlas is a design with nothing written behind it. Pages 11 to 13 draw that line precisely,
and the rest of this paper is written so the two are never confused.

**The two-stage path.** Stage one is visibility — assessments, reconciliation of written
rules against enforced ones, and hypothesis testing. Nothing acts on the business. Stage two
is autonomy — assessors that carry out a bounded set of actions, each one gated behind a
named person's approval for anything irreversible. Most organisations should buy stage one,
run it for a period they choose, and decide about stage two with evidence in hand.

## The expensive problem, named before the product

Set both products aside for two pages.

### Money leaves before anybody checks

Every company has a set of rules about how money is committed. A purchase above a threshold
needs an approval. A supplier must be on an approved list. An invoice must match a purchase
order within a tolerance. A capital item must be capitalised, not expensed. A change to a
payment destination must be verified out of band. A claim above a value must be reviewed by a
second assessor. A discount above a level must be signed off.

These rules exist. They are written down. Somebody was paid to write them.

The rules are enforced at three places: in the software, by a person following a procedure,
or nowhere. Most companies cannot say, for any given rule, which of the three applies. The
rule was written in a policy document. It was implemented in a system by a project team that
has since dispersed. The system was upgraded twice. The workflow was changed to clear a
backlog. Nobody re-read the policy against the configuration afterwards.

The result is a set of rules a company believes it enforces and a different set it actually
enforces, and no reliable way to describe the difference.

### The interval between the decision and the review

The second cost is timing, and it compounds.

Consider the ordinary sequence of a capital project. A plan is written. A request is
approved. A purchase order is raised. Invoices arrive against it. Eventually the asset is
capitalised. Each of those steps is an opportunity for a discrepancy: a plan that assumed
one scope, an approval granted against an earlier version, a purchase order that drifted, an
invoice that does not match, a capitalisation that puts the cost in the wrong place.

Review happens at the end. By the time the discrepancy is found, the money is spent, the
supplier has been paid, the asset is on the books, and the remedy is a recovery action rather
than a decision not to proceed. Recovery is slower, less certain, and consumes senior
attention that a timely question would not have consumed.

The same shape appears everywhere. A claim mis-assessed is a recovery action rather than a
question. A control that stopped working is a remediation programme rather than a
configuration change. A customer already gone is a win-back campaign rather than a phone
call.

### The review function cannot scale to the volume

The third cost is the one that makes the first two permanent.

An internal audit function, a control-testing team or a data-quality team works by sampling.
It picks a defensible number of items, tests them thoroughly, and reports. This is a sound
method for estimating a rate. It is not a method for catching a specific bad transaction,
because the specific bad transaction is almost certainly not in the sample.

So the review function reports that controls are operating effectively, which is true as a
statement about the population and useless as a statement about the item that went wrong. And
the organisation draws the obvious conclusion — that review is a compliance activity rather
than an operational one — which is exactly the conclusion that guarantees the next surprise.

### The evidence problem, stated separately

There is a fourth cost, and it is the one most often underestimated, because it does not
appear as a loss. It appears as a standing overhead.

Regulated organisations must be able to demonstrate, on request, that a control was operating
throughout a period. Not that it exists. That it operated, continuously, across the period,
and that any occasion on which it did not operate was detected and handled.

The usual method of demonstrating this is to assemble evidence after the request. Somebody
pulls extracts from several systems, reconciles them by hand, writes a narrative, and
attaches screenshots. This takes weeks. It is done by people whose ordinary job is something
else. It is done again next quarter, and again for the next framework, and again for the next
customer's security questionnaire, and the work is not cumulative — the second assembly does
not make the third one shorter.

The cost is not the audit finding. The cost is the assembly, paid every time the question is
asked, by people who were doing something else.

### What all four have in common

Four costs: rules that are believed rather than known, a delay between the decision and the
review, a review method that cannot see the specific item, and evidence assembled by hand
after the fact.

They share a single cause. The company's own information is sufficient to answer all four
questions, and nothing is reading it continuously.

This is the problem the combination of Atlas and CORE is designed to address. Naming it first
is deliberate: a company that does not have this problem does not need either product, and
should be able to establish that from the previous two pages without a meeting.

## Who has this problem, by segment

The pattern appears wherever three conditions meet: a high volume of individually small
decisions that commit money or create obligation, written rules governing those decisions,
and a review function sized for sampling rather than inspection.

That combination is not industry-specific. Here is where it shows up.

### Capital-intensive organisations

Any organisation that runs capital projects — utilities, manufacturers, real-estate
developers, transport operators, hospital groups, mining and energy companies — carries the
plan-to-capitalise sequence described on the previous pages. The amounts are large, the
sequence is long, the participants are numerous, and the systems that hold the pieces are
usually not the same system.

This is Atlas's primary ground, and Logical Leap names the audiences directly: Finance, the
project management office, Procurement, Engineering, Internal Audit and Executive Leadership.

### Insurers

An insurer's core process is deciding whether to pay. Each decision is governed by policy
wording, regulatory obligation and internal authority limits. The volume is high, the value
of individual decisions varies by orders of magnitude, and the consequences of getting it
wrong run in both directions: paying what should have been questioned, and questioning what
should have been paid.

Alongside claims sits reserving, reinsurance recovery, commission and premium reconciliation
— each one a set of rules applied to a stream of transactions.

### Banks and financial firms

Payment instruction changes, credit decisions, fee calculations, suitability checks,
transaction monitoring, model governance, third-party risk. Every one is a written rule
applied to a flow, under supervision by an authority that expects the rule to be
demonstrable, not merely asserted.

Banks additionally carry an evidence obligation heavier than most: the regulator's question
is not answered by a policy document.

### Telecoms operators

Revenue assurance is the discipline of confirming that what was delivered was rated,
that what was rated was billed, and that what was billed was collected. It exists as a named
function in telecoms precisely because the transaction volume defeats inspection. Alongside
it sit interconnect settlement, network capital programmes, device subsidy tracking and
partner commission — each a reconciliation between two records that ought to agree.

### Marketing organisations

Media spend commits money through agencies and platforms, against plans, with rules about
brand safety, placement, data use and consent. Attribution is a reconciliation problem. Agency
fee validation is a rules problem. Consent handling is a control that must be demonstrable.
The spend is continuous, the review is periodic, and the interval between them is where the
money goes.

### Any organisation that must show a control worked

Cutting across all of the above: anybody who answers to an external framework, a supervisory
authority, a certification body or a large customer's security team. For these organisations
the continuous-versus-periodic question is not an efficiency question. It is the difference
between assembling evidence and having it.

## Why periodic review fails

It is worth being precise about this, because "we already have controls" is the most common
and most reasonable objection to everything in this paper.

### Sampling answers a different question

A sample tells you the rate at which a population deviates. It is designed to do that, and it
does it well. It cannot tell you which items deviated, and it was never intended to.

For a supervisory conclusion — are controls operating effectively — a rate is the correct
answer. For an operational decision — should this payment go out — a rate is no answer at
all. Most organisations use the supervisory method and then behave as though they had an
operational answer.

### The interval is where the loss lives

If review is quarterly, the average finding is discovered six weeks after the event and the
worst one is discovered thirteen weeks after. Every remedy available in week one — hold the
payment, query the invoice, re-scope the project, ask the customer a question — has expired.
What remains is recovery, which costs more and works less often.

Shortening the interval helps, and every organisation that has tried it has discovered the
same thing: the cost of review scales with frequency, so a monthly review costs three times a
quarterly one and still leaves a month.

### Manual review degrades exactly when it matters

Review is done by people with other responsibilities. When the organisation is busy — a
year-end, a large project, an acquisition, a system migration — the review work is the work
that slips. Which is to say it degrades precisely during the periods when the risk of error
is highest.

This is not a criticism of the people. It is a property of any control whose operation
depends on somebody having spare time.

### Written rules drift from enforced rules, silently

The most uncomfortable of the four. A rule implemented in a system is a piece of
configuration. Configuration changes. It changes during upgrades, during migrations, during
incident response, and during the ordinary work of clearing a backlog.

Nothing about that change announces itself to the policy document. The policy still says the
rule is enforced. The system no longer enforces it. Both statements persist happily side by
side, sometimes for years, and the discovery is usually an incident.

Reconciling the written rule against the enforced rule is a specific, mechanical piece of
work. It is almost never done, because doing it by hand across an estate is a project, and by
the time the project finishes the configuration has moved.

### What continuous means, precisely

Continuous does not mean faster reporting. It means the evaluation happens at the moment the
transaction happens, against the rule as it is written, in the system where the data
originates — so the finding arrives while the decision is still open.

That is the shift Atlas is built to make, and it is the reason the rest of this paper has
something to describe.

## What the two products do

### Atlas, from Logical Leap

Atlas is a data-quality and governance agent for capital expenditure oversight. Logical Leap
states its purpose plainly: continuous oversight of every capital investment, stopping spend
leakage at the source. It is offered in private beta, with access arranged through a
walkthrough with the Logical Leap team.

Its method is to embed policy execution and metadata validation directly into the systems
where capital data originates — invoices, purchase orders, enterprise resource records —
rather than relying on spreadsheets and periodic audits.

Logical Leap describes six capabilities:

- **Continuous intelligence** — every transaction evaluated as it happens.
- **Anomaly detection** — spotting unusual spend and policy violations.
- **Risk prioritisation** — ranking issues by impact and exposure.
- **Predictive insights** — forecasting overruns and delays weeks ahead.
- **Guided remediation** — recommending actions and tracking them to close.
- **Complete lineage** — an unbroken trail from plan to the asset ledger.

It covers a five-stage sequence: plan, approve, procure, spend, capitalise. Findings are
ranked across those stages, so the question "where in the lifecycle is our risk concentrated"
has an answer that updates rather than an answer that is compiled.

Its named audiences are Finance, the project management office, Procurement, Engineering,
Internal Audit and Executive Leadership.

### Runink CORE

CORE is the operations layer beneath a company's software. It places applications onto the
machines that run them, keeps them running, shows one named person what is happening across
all of them from a single screen, holds the connections those applications use to reach the
company's own information, and carries changes from written down to running.

Three properties of CORE matter to this design.

**It runs on machines the company owns, on a model the company runs itself.** Every automated
assessor, the console assistant and the longer coding sessions are served by a language model
running on the customer's own hardware. No outside service is called for reasoning. Records,
files, the identity authority, the secrets and the search index are all held on the
customer's own systems.

**It holds the connections to the company's own systems, under governance.** The links to
databases, analytical stores, enterprise resource systems, procurement systems, document
stores and object storage live in one place, described in one vocabulary, with credentials
held separately from settings and encrypted with a key that is itself encrypted. A connection
cannot be created, changed or removed by anyone CORE cannot name, the set of people permitted
to make those changes can be listed explicitly, and every attempt — allowed, refused or
failed — is recorded with the person, the time, the thing acted on, the outcome and the
source. Each record carries a fingerprint computed over the record before it, so the sequence
can be checked from end to end.

**It states an observation, a reason, a severity and a remedy — or says a person must
decide.** CORE's own operational screen reports each category it watches as fine, worth
attention, wrong, or not known, with a plain sentence explaining the reading. Where a
category is not fine, it proposes a specific remedy carrying the reasoning behind it and a
severity. And where the judgement belongs to a person rather than to a machine, it says so
explicitly and files the item under a heading that reads "Needs a human".

That last discipline is the one this design borrows and applies to Atlas's findings.

## How the two divide the work

The division is simple enough to state in three sentences, and the rest of this section
explains why each sentence is the right way round.

**Atlas leads on presentation and interface.** The customer's people work in Atlas. Findings
appear in Atlas. Actions are taken in Atlas. The lifecycle view, the ranking, the remediation
tracking and the lineage record are Atlas's, and they are what the customer sees.

**CORE judges.** Before a finding reaches a person, CORE's assessors read it — the reasoning
that produced it as well as the conclusion it reached — and attach a verdict to it. The
verdict is one of four words, and it always carries the reason behind it: CORE concurs, it
dissents, it is unable to judge, or the subject is outside what it has standing over. This is
the part that is built; pages 11 to 13 describe it as it is written.

**CORE runs the arrangement on the customer's own systems.** The machines, the model, the
connections to the company's own data, the identity, and the record of who did what are
CORE's contribution to the arrangement.

### Why Atlas leads the interface

Two reasons, one of them commercial and one of them practical.

The commercial reason: capital oversight is a specific discipline with a specific vocabulary.
Plan, approve, procure, spend, capitalise. Commitment, accrual, capitalisation, variance.
Logical Leap has built an interface around that vocabulary for the people who use it daily.
Replacing it with a general-purpose screen would make the product worse for the buyer.

The practical reason: the person who acts on a finding needs one place to act. Two screens is
not an architecture; it is a handoff, and handoffs are where items sit. The finding, the
score, the reasoning and the action all belong in the same view.

### Why the assessor is separate from the finder

This is the load-bearing decision in the whole design, and it deserves its own section. The
next two pages are that section.

The short form: a system that produces findings and also rates its own findings has one
opinion, expressed twice. A system whose findings are read by a separate assessor, built by a
different team, reasoning with a different method, has two — and the disagreements between
them are informative.

### What passes between them

Runink's automated workers already talk to each other through a shared calling arrangement
in the platform. One worker sends a message to another and receives back a task that moves
from submitted, through working, to completed or failed, with intermediate progress reported
as it happens. The same calling arrangement covers workers in the same process and workers
reached across a network, so the design does not have to change if the two products end up
running on the same machines or on different ones.

Runink also keeps a register of every managed worker, turns that register into live
addresses, and checks each one by asking it to describe itself — which doubles as the
liveness check and refreshes what each worker says it can do.

Those pieces exist in the platform, and the arrangement that receives an outside assessment
platform's findings is now built on CORE's side: findings arrive, verdicts are produced and
kept against them, and the submitting platform reads them back on the same connection it
submitted over. What is not built is CORE reaching the other way into Atlas, which waits on an
interface from Logical Leap. Pages 11 to 13 state that boundary precisely, and a reader who
takes nothing else from this paper should take that distinction.

## What "judging" means, in plain language

The word is doing specific work here, and it is worth taking apart.

### It is not a second detection pass

A judge does not look for findings. It reads a finding somebody else produced and answers a
narrow set of questions about it:

- **Is the conclusion supported by the records cited?** The finding says an invoice does not
  match its purchase order. Do the two records, read directly, actually differ, and differ in
  the way the finding says?
- **Was the reasoning the right reasoning?** Not merely: is the answer right. Also: was the
  route to the answer the route a competent reviewer would have taken, or did it arrive at a
  correct conclusion for a reason that will not hold next time?
- **Does the rule cited actually say what the finding says it says?** The finding invokes a
  policy. Read the policy. Does it apply to this transaction, in this jurisdiction, at this
  value, at this stage?
- **How confident should a person be?** Expressed as a score, with the reasoning behind the
  score attached.
- **Is this a decision a machine should be making at all?** Some items are mechanical. Some
  involve a judgement about intent, materiality, relationship or precedent. The second kind
  should arrive labelled as the second kind.

### Where the method comes from

CORE already scores automated work this way. Its assessment routine takes recorded runs,
compares them against a known-good set, and scores each one on two separate axes: the route
taken and the result reached. Scoring both is the point. A run that reached the right answer
by the wrong route is a run that will reach the wrong answer as soon as the inputs shift, and
a scoring method that only looks at outcomes cannot see that coming.

CORE's operational screen already applies the other half of the discipline. Every reading
carries a plain sentence explaining it, a severity, and where the reading is not fine, a
specific remedy with the reasoning for why it is the right remedy. And where the decision
belongs to a person, the item is filed under "Needs a human" rather than dressed up as a
recommendation.

Applying both to a governance finding is what CORE's assessor now does, and pages 11 to 13
describe the mechanism as it is written. The finding arrives from the assessment platform. The
assessor reads it, checks the conclusion against the evidence cited, checks the reasoning,
checks the rule, reaches a verdict, and hands it back with the reasoning and — where relevant
— the statement that this one needs a person.

## Why an independent assessor matters

### The queue problem

Continuous monitoring works, and the first consequence of it working is a queue.

An organisation that moves from quarterly sampling to continuous evaluation does not get
fewer findings. It gets many more, earlier, which is the entire point. But a queue in which
every item carries equal weight is a queue that a person has to read entirely, and reading it
entirely is the review job that did not scale in the first place.

Ranking by impact helps and Atlas does it. Ranking by confidence is a different axis and it
is the one that decides how a person spends the first hour. The high-impact item that the
assessor is confident about and the high-impact item the assessor disagrees with are two
completely different pieces of work, and they should not look the same on arrival.

### The self-assessment problem

A system that scores its own output is measuring itself with its own instrument.

When it is wrong, it is usually wrong in a consistent direction — because the error comes
from an assumption in how it reads the data, and that same assumption is present in the
scoring. A rule mis-parsed at detection is mis-parsed at scoring. A field misread as a date
is misread as a date twice. The confidence score comes back high and the finding is wrong.

An assessor built by a different team, reading the same records independently and reasoning
with a different method, does not share those assumptions. It will have its own, and they
will be different ones, and where the two disagree there is something worth a person's
attention. That disagreement signal does not exist inside a single system, however carefully
built.

### The evidence problem, solved as a by-product

There is a third reason, and for regulated buyers it may be the largest.

When a finding is produced by one system, assessed by a second, and acted on by a named
person, the sequence that survives is a complete account: what was observed, what rule was
applied, what the assessor concluded and why, what score it gave, who saw it, what they
decided, and when.

CORE records that sequence the way it records everything else — with the time, a sequence
number, the person by verified identity, the action, the thing acted upon, the outcome, an
explanatory line and the source address, each record carrying a fingerprint computed over the
record before it. Given the first record and the last, the ones in between can be confirmed
to be the ones that were written, in the order they were written.

The consequence is that "show me that this control operated throughout the period, and show
me the exceptions and how each was handled" stops being an assembly project. The evidence was
produced as a by-product of doing the work.

### Where the judge declines

An assessor that always produces an answer is quickly ignored, because its confident answers
and its guesses look identical from the outside.

The design here is that the assessor is permitted — and expected — to say that an item needs
a person, and to say why. Materiality judgements, relationship judgements, anything turning on
intent or precedent, anything where the rule is genuinely ambiguous as applied to this
transaction: these arrive labelled, with the observation written up and the ambiguity named.

That labelling is what makes the rest of the queue trustworthy. When a system distinguishes
"here is the answer" from "this needs your judgement, and here is what makes it a judgement",
the first category earns the attention it asks for.

## What is built: findings in, verdicts back

This page and the two that follow are the ones to read sceptically, and the ones against which
to hold every other claim in this paper. They separate what runs from what is drawn.

### Findings come in, verdicts go back

An outside assessment platform hands CORE a batch of findings. CORE keeps them, judges each
one, and returns the judged batch on the same connection the batch arrived on. The same
verdicts are readable inside CORE by a signed-in person, on a screen.

Handing over the same batch a second time returns the same stored verdicts. That small
property is what makes the exchange usable today: neither product has to build a client for
the other in order to get CORE's verdicts back into the hands of the platform that produced
the findings.

### Two doors, and the door you came in decides what you may do

Findings arrive through one door, opened by a secret issued to the submitting platform.
Verdicts enter through a different door, opened by a different credential belonging to CORE's
own assessor.

A verdict arriving at the findings door is discarded rather than stored. The submitting
platform's secret is refused by name at the verdict door, and the refusal says why: a platform
that submits findings does not judge them.

**A submitter cannot grade its own work, and the rule is enforced by which credential was
presented — never by a field the sender fills in.** A flag in a message is something a sender
sets; a credential is something a sender either holds or does not. Where no secret has been
issued at all, the findings door accepts nothing rather than accepting everyone, so a
configuration that was never completed cannot quietly become an open one.

### Two vocabularies, deliberately not merged

CORE's verdict is one of four. It concurs. It dissents. It is unable to judge. Or the subject
is outside anything CORE has standing over.

What the submitter concluded about its own finding is a separate matter, recorded on a
separate axis: it asserted the claim, it refuted it, or it could not determine it.

Keeping the two apart is not tidiness. Collapsing them is precisely how "CORE concurred" comes
to mean "the submitter said so and nobody checked" — the two sentences look identical on a
screen and mean opposite things. So the software refuses the collapse: a concurrence on a
finding where the submitter stated no position of its own is recorded as unable to judge
instead, because there is nothing there to agree with.

The same discipline governs the verdict itself. A verdict CORE cannot interpret, or one that
arrives with no reason attached, is recorded as unjudged rather than shown beside verdicts
that can be read. An unreadable answer is not agreement.

## What is built: how a verdict is reached, and where the line falls

### Eight checks run in order, before anything is put to a model

The finding must be complete enough to read. The submitter's stated position must be one CORE
interprets. There must be evidence. At least one piece of it must be readable. It must be
about the subject the finding is about, rather than about something adjacent. It must not be
the claim itself written out a second time — an assertion is not evidence for that same
assertion, and treating the loop as support is how a finding gets manufactured out of nothing.
Evidence that carries a date must be recent enough to say something about the present; ninety
days is the horizon, and evidence carrying no date is neither assumed fresh nor assumed stale.
And a claim that carries a number is settled by arithmetic, and never reaches a model at all.

Each check that fires ends the matter and states its own reason in a sentence a person reads.

### Numbers are recomputed, not accepted

Where a finding claims a rate, the evidence carries the raw counts the rate was derived from,
not only the derived figure — so CORE divides them again itself.

A figure the submitter's own evidence does not reproduce is a **dissent**, with the arithmetic
named. A count divided by nothing is unable to judge, never a rate of zero. Two readings of
the same quantity that disagree with each other are unable to judge, never averaged into a
third figure that neither party observed.

This is the difference between checking a claim and repeating it, and it is mechanical rather
than clever. It is also the reason a quantitative finding never goes to a model: asking a
language model to opine on a number nobody measured produces a fabrication wearing a number.

### The model is asked one question, and never told the answer

What survives the eight checks and is not a number is a claim in prose. Only that reaches a
model, and it is asked one question: does this evidence support this claim.

It is never told what the submitter concluded. That is not a matter of care in the wording —
the way the software is written, there is no way to pass it. The join between "the evidence
supports this" and "CORE concurs" happens afterwards, in code, which is why the model can
neither rubber-stamp the submitter nor reflexively contradict it. It has nothing to agree or
disagree with.

Where no model is reachable, the answer is unable to judge, with that stated as the reason.
Never agreement by default.

### Unable to judge is a first-class answer, and never renders as agreement

No evidence, evidence that only restates the claim, evidence about a different subject,
evidence past the staleness horizon, an unreadable answer, a submitter who also could not
determine the matter: each ends in unable to judge, with the reason written next to it.

An assessor whose confident answers and whose guesses look identical is ignored within a week.
This is the discipline that stops that happening, and it is the reason the concurrences on the
screen are worth something.

### The two halves were tested together, not separately

An automated test builds CORE's assessor as a working program, runs it against the real
receiving code over a real connection, and checks that the verdicts survive the trip intact —
the arithmetic, the dissents, the abstentions, and the reason attached to each.

That test exists for a reason worth stating. The two halves were written in parallel, and each
passed every test it had while the two disagreed about the shape of the document they were
meant to exchange. Both sides reported themselves working, and together they could not have
judged a single finding. A test that exercises one side is what produces that outcome, so this
one exercises both — it is the only test in this design that would have caught it.

## Where the built part stops

### Designed, and not built: CORE reaching into Atlas

The direction in which CORE would call Atlas — to collect findings itself, or to push verdicts
into it — exists as a named interface with nothing written behind it.

Atlas is offered in private beta, and Logical Leap does not publish a technical interface for
it. That is entirely ordinary for a product at that stage. The consequence for this design is
concrete: software written against an interface nobody outside Logical Leap has seen would
build cleanly, would pass every test written for it, and would fail the moment it met the real
thing. So it has deliberately not been written. It waits on a specification rather than on
effort, and it is short work once one exists.

The consequence is smaller than it sounds, because the direction that is built does not need
it. A submitting platform receives CORE's verdicts on the same connection it submitted on, and
can ask for them again by handing over the same batch. That is a working exchange between the
two products that requires neither party to invent the other's interface.

### Demonstrated where, and where not

Everything on the previous two pages is argued from automated tests and from a measured size
budget —
the store that holds submissions and verdicts is sized against a real measurement of a
realistic finding rather than an estimate, and the retention figures were revised downwards
when the measurement said so.

None of it has been run against a live installation at a customer, or against Atlas itself. A
reader should treat the behaviour described here as proven in the workshop and unproven in the
field, and should ask for the field evidence before relying on it.

### Three questions that settle any claim in this paper

Both companies would rather be asked these than not.

**Does this run, or is it drawn?** Everything on the previous two pages runs. Everything about
CORE calling Atlas is drawn. Anything else in this paper that describes the joint arrangement
is architecture, in the way a drawing describes a building.

**Where has it been demonstrated?** In automated testing, against a real assessor program and
the real receiving code, over a real connection. Not against a live installation, and not
against Atlas.

**What would change the answer?** For the direction that is drawn, a published technical
interface from Logical Leap's side. For the field evidence, a first installation — which is
the thing to ask for before relying on any of this.

## A note on how we name the assessors

Assessors are easier to explain by the job they do than by the technology they use. "An
automated agent that performs policy conformance evaluation" tells a buyer nothing. "It reads
the contract and tells you which clause this invoice breaks" tells them everything.

So this paper describes assessors by their work:

**The one that reads rules.** It reads policies, contracts, regulatory text and system
configuration, and reports what each says in plain language with a citation back to the
source. Its output is of the form: this document says this; this system does this; here is
where they differ.

**The one that checks numbers against evidence.** It reads a price, a quantity, a rate or a
term, finds the record that ought to support it, and reports whether it does. Its output is
of the form: this invoice claims this; the purchase order says this; the difference is this.

**The one that watches signals.** It reads a stream of ordinary events and reports when the
combination is unusual for this customer, this supplier, this lane, this account. Its output
is of the form: individually these are unremarkable; together they have not occurred before.

These are descriptions of work, not product names. They are used in this paper because they
are clearer than the alternatives, and a reader should take them as an explanation of what
each assessor does rather than as a catalogue of things to order.

## The two-stage adoption path

The combination is designed to be adopted in two stages, and they should be bought, evaluated
and paid for separately. The reason is that they carry different risk and answer different
questions.

### Stage one: visibility

In stage one, nothing acts on the business. The arrangement reads, evaluates and reports.
Three things happen.

**Assessment.** The estate is read and described. Which systems hold which records. Which
connections reach them and under whose account. Where the same fact is held in more than one
place and the places disagree. This is the inventory that most organisations believe they
have and, on inspection, do not.

**Rules reconciliation.** The rules the business believes it enforces are read from policy
documents and contracts. The rules actually enforced are read from system configuration and
from the observed behaviour of transactions. The two sets are compared, and the difference is
sorted: aligned, drifted, running-without-a-policy, and written-but-unenforced.

That last sorting is often the single most valuable output of stage one, because it is
specific, it is actionable, and almost nobody can produce it any other way.

**Hypothesis testing.** A question is posed — if we changed this threshold, what would have
happened over the last period; if this rule had been enforced, how many transactions would
have been caught — and answered against the customer's own records, without touching a
production system.

Stage one is a reading exercise. Its risk to the business is essentially the risk of
connecting a read-only account to a system. Its output is a set of documents and a screen.

### Stage two: autonomy

In stage two, assessors act. Not on everything — on a bounded set of actions the customer
defines, with a rule about which of them require a person.

The gating is not advisory. Runink's platform includes a gate that holds an action until a
named person decides it: the request is described, the assessor pauses, the request is
surfaced for a human decision, and the assessor resumes on the answer. Where no human channel
is configured, the gate can be set to refuse rather than to proceed. The default posture for
anything irreversible is that it waits.

CORE applies the same discipline to its own automated helpers today. Each one is switched on
or off individually. Each runs on its schedule and reports what it would have done, and it is
permitted to publish its work only after a person has armed it by typing its name. A team can
watch an assessor for a week and read exactly what it would have produced before any of it
reaches a colleague.

### Why the order matters commercially

Stage one is a low-risk purchase with a legible output, and it produces the evidence needed
to decide about stage two. An organisation that has run rules reconciliation knows which
rules are drifting, knows how many findings a week the arrangement produces, and knows how
often the assessor and the person agree. Those three numbers, measured in that organisation,
are the inputs to a sensible decision about autonomy.

Buying stage two first means making that decision without them.

## For operations leaders

### The question you are answering

Operations leaders are measured on whether the thing that should have happened happened, and
on how quickly a departure from the plan is noticed. The failures that hurt are the ones where
the information existed and the notice came late.

### What the arrangement does for you

**Findings arrive while the decision is open.** A commitment that departs from its plan, an
order that departs from its schedule, a supplier that departs from its terms — the evaluation
happens at the transaction, not at the period end.

**The queue arrives sorted twice.** Once by impact and exposure, which is Atlas's ranking.
Once by how confident an independent assessor is, which is CORE's contribution. The first
hour of the day goes to items that are both material and clear, and the disagreements go to a
separate list that is short.

**Each item carries its reasoning, not just its verdict.** The observation, the rule invoked,
the records cited, the severity, and the specific action proposed. An item that cannot be
acted on without a judgement call says so.

**The knowledge stops living in three heads.** The reason most operations functions cannot
grow their on-call rota is that the reasoning behind each decision is tacit. When the
observation, the reasoning, the severity and the remedy are written next to each other, a
wider group can staff the rota, and the escalations that happen are the ones that genuinely
need the specialist.

### An illustration of the mechanism

This is a hypothetical, offered to show the shape rather than to report an event.

A capital project has an approved plan, a purchase order raised against it, and invoices
arriving. In week six an invoice arrives that is within tolerance individually but which,
combined with two earlier ones, takes committed spend past the approved plan for the stage.

The finding is produced at the moment the third invoice lands: the plan says this, the
commitments total this, the difference is this, and the stage is procure.

The assessor reads it, pulls the three invoices and the purchase order directly, confirms the
arithmetic, checks that the approval threshold cited is the one that applies at this value,
and scores the finding as high confidence with the reasoning attached. It notes that the
recommended action — hold the third invoice pending re-approval — is mechanical, so it is not
filed as needing a person.

The project manager sees it in Atlas the same day, with the three invoices, the plan, the
rule and the assessor's reasoning in one view, and holds the invoice.

What changed is timing. The same discrepancy, found at quarter-end, is a variance to explain.

## For finance and procurement

### The question you are answering

Finance is asked to state what was committed, what was spent, what is accrued and what is
capitalised — and to be right. Procurement is asked to confirm that what was bought was
bought under the terms that were negotiated.

Both questions are reconciliation questions between records that ought to agree and
frequently do not.

### What the arrangement does for you

**The lifecycle is one record.** Atlas's lineage runs from plan to the asset ledger. The
question "where did this cost come from" is answered by following the record rather than by
asking four people.

**Consolidation of the data connections.** CORE holds the links to the systems the answer
depends on — enterprise resource systems, analytical stores, procurement systems, spreadsheet
and document stores, object storage — in one place, described in one vocabulary, with a
published catalogue that states what each kind of system requires before a person starts
filling in a form.

This is not a small point for finance. When each application carries its own way of reaching
the company's systems, the same warehouse ends up connected several times with several sets
of credentials and several people who each believe somebody else is looking after it. With
one catalogue and one place to hold them, "what reaches our finance warehouse, and under
whose account" is a screen.

**Contract terms checked against invoices, continuously.** The assessor that reads rules can
read a supplier agreement. The assessor that checks numbers against evidence can read the
invoice. The comparison is mechanical and it is exactly the comparison that nobody has time
to do at volume.

**Forecast departures arrive before the period closes.** Atlas forecasts overruns and delays
ahead of time. The assessor scores the forecast's reasoning, which matters more for a forecast
than for an observation, because a forecast cannot be checked against the record — only its
method can.

### An illustration of the mechanism

Hypothetical, again for shape.

A supplier agreement sets a rate card with volume tiers and a rebate at an annual threshold.
Invoices arrive monthly, priced at the tier the supplier applies.

The rule-reading assessor extracts the tier structure from the agreement, in plain language,
with a citation to the clause. The number-checking assessor reads each invoice against
cumulative volume and reports where the applied tier and the earned tier differ, and where
the rebate accrual on the books differs from the rebate earned under the agreement.

Neither of these is a hard piece of reasoning. Both are tedious, both are done at volume, and
both are exactly the kind of work that quietly stops during a busy quarter — which is when
the volumes that trigger tier changes are largest.

## For compliance, risk and security

This is a different buyer, with a different problem, and it is worth stating separately
because the pitch that lands with operations does not land here.

### The question you are answering

You are not asked whether controls exist. You are asked to demonstrate that they operated,
throughout a period, and to show what happened on the occasions when they did not.

Today that demonstration is assembled. Extracts are pulled, reconciled by hand, narrated and
screenshotted. The work is done by people whose ordinary job is something else, it takes
weeks, it is repeated for each framework and each period, and it produces nothing that makes
the next assembly shorter.

### The different thing on offer

Continuous control monitoring is not periodic evidence-gathering done more often. It is a
different arrangement:

**The control is evaluated at each transaction, not sampled at the end.** So the population
tested is the population, and the exceptions are named individuals rather than an estimated
rate.

**Each exception carries its handling.** What was observed, what rule applied, what the
assessor concluded, who was notified, what they decided, when. That sequence is the evidence,
and it is written as the work happens.

**The record is verifiable end to end.** CORE's records carry the time, a sequence number,
the person by verified identity, the action, the thing acted on, the outcome, an explanatory
line and the source address — and each record carries a fingerprint computed over the record
before it. Given the first and the last, the intervening records can be confirmed to be the
ones that were written, in the order they were written.

**Refused attempts are recorded too.** Every attempt to change a data connection — allowed,
refused or failed — leaves a record. In an incident conversation, the refused attempts are
frequently the more interesting half.

**Written rules are reconciled against enforced rules as a standing activity.** Not as a
project that finishes after the configuration has moved on.

### Governance of the connections themselves

For a security reviewer, the interesting question about any monitoring arrangement is what it
can reach and who decided that.

CORE's answer: a connection cannot be created, changed or removed unless the platform can
name the person doing it. If sign-in is not configured, the change is refused outright, with
the reason stated. Beyond requiring a name, the set of people permitted to change connections
can be listed explicitly, and anyone outside that list is refused by name. Credentials are
held separately from settings, so the settings of a connection can be reviewed by people who
are not entitled to the credentials — which is the normal case.

That is a control rather than a policy, and the difference is demonstrable in an afternoon:
sign in as somebody not on the list, try to change a connection, watch the refusal, and read
the record it left.

### Where the model runs

For a security review the question that ends most evaluations is where the information goes.

CORE's reasoning is served by a model running on the customer's own hardware. Records, files,
the identity authority, the secrets and the search index are held on the customer's own
systems. No outside service is called for reasoning, and no outside account is required.
Self-hosted deployments on the customer's premises are supported, including where there is no
outside network connection at all.

The commercial consequence is that the security review becomes a description rather than a
negotiation.

## Insurance

Runink's published work is in logistics and operations. What follows describes the mechanism
generically and illustrates it with hypothetical scenarios. These are illustrations of how
the arrangement works, not accounts of things that happened.

### The mechanism, stated generically

Every insurance process is a rule applied to a record, producing a decision that must be
explainable later. Policy wording is a rule. Regulatory obligation is a rule. Delegated
authority is a rule. A reserving standard is a rule. Each is written down, each is applied to
a stream of items, and each application is a decision somebody may later ask about.

The arrangement reads the rule, reads the record, compares them at the moment of the
decision, produces a finding where they differ, has that finding assessed independently, and
keeps the sequence.

### Where it lands

**Claims handling.** Each claim decision is governed by wording, by authority limits and by
regulatory obligation. A continuous evaluation asks, at the point of decision: does the
wording cover this; is the handler within their authority for this value; has the required
second review occurred; are the supporting documents the ones the procedure requires.

**Reserving and recovery.** Reserve movements follow rules. Reinsurance recoveries follow
treaty terms. Both are reconciliations between a written instrument and a stream of
transactions, and both are done periodically today for the same volume reason as everything
else in this paper.

**Premium, commission and delegated authority.** Where underwriting is delegated, the
principal remains accountable for decisions taken under the delegation. Reading the
delegation agreement against the bordereaux is a rules-versus-records comparison.

**Conduct evidence.** Supervisory authorities ask insurers to demonstrate fair outcomes,
consistently, across a population. That is an evidence problem of the shape described on the
previous page.

### An illustration

Hypothetical. A claims backlog builds after an event. Handling times lengthen, and the
organisation temporarily raises the value at which a second review is required, in order to
clear volume.

The change is made in the workflow configuration. The policy document is not updated, because
the change is understood to be temporary.

Six months later the temporary change is still in place. Nobody made a decision to keep it;
nobody made a decision to remove it either.

A standing reconciliation between the written rule and the enforced rule reports this in the
week it happens: the policy says one threshold, the system enforces another, and here are the
claims settled in the interval that would have required a second review under the written
rule. The independent assessor reads the configuration and the policy directly, confirms the
difference, and — because the question of whether the temporary change should stand is a
judgement about risk appetite rather than a mechanical correction — files it as an item
needing a person, with the observation already written up.

The value is not that a machine fixed anything. It is that a decision the organisation
drifted into becomes a decision the organisation makes.

## Banking and financial services

Illustrations again. Runink's published work is not in banking; what follows describes the
mechanism and shows its shape.

### The mechanism, stated generically

Banking runs on written rules applied to flows, under an authority that expects the rule to
be demonstrable. The same three components appear: a rule, a source of record, and a stream
of items to which the rule applies. The arrangement evaluates continuously, assesses each
finding independently, and keeps a record that can be checked end to end.

### Where it lands

**Payment instruction integrity.** A change to a payment destination is governed by a
verification rule. The rule is either enforced in the system, performed by a person following
a procedure, or neither. Reconciling written against enforced is precisely the exercise
described on page 15.

**Third-party and vendor risk.** Contracts carry obligations — on service levels, on
sub-contracting, on data handling, on notification. Reading the contract against the observed
relationship is a rules-versus-records comparison at volume.

**Model and decision governance.** Where an automated decision affects a customer,
supervisors expect the decision to be explainable and the governing controls to be
demonstrable. An arrangement in which each finding carries its reasoning, its assessor's
independent score, and the identity of the person who acted, produces that explanation as
part of doing the work.

**Capital programme oversight.** Banks run large change programmes with the same plan-to-
capitalise sequence as any capital-intensive organisation, and with more scrutiny.

**Fee and interest calculation.** Rate cards, tiers and product terms applied across a
portfolio; a reconciliation between what the terms say and what was charged.

### An illustration

Hypothetical. A reconciliation break appears between two internal records of the same set of
transactions. Historically this break is small and is cleared manually at month end by a team
that knows the usual causes.

Over three months the break grows. Each month's growth is within the range that has been
cleared before, so no individual month triggers an escalation.

An assessor watching the signal reports that the sequence — three consecutive months of
growth in the same direction, in a measure that historically oscillates — has not occurred in
the available history. It has no view on the cause. It says what is unusual, cites the series,
and files the item as needing a person, because attributing a cause requires knowledge of
what changed operationally in that period.

The point of the illustration is the division of labour. The machine is good at noticing that
a pattern is unusual across a volume no person is reading. It is not good at knowing that the
team changed a posting rule in month one. The design puts the observation in front of the
person who knows that.

## Telecoms

### The mechanism, stated generically

Telecoms operators run a named function — revenue assurance — whose entire purpose is to
confirm that two records agree. Service delivered against service rated. Service rated against
service billed. Service billed against payment collected. Interconnect traffic against
interconnect settlement. Device subsidy granted against contract served. Partner activity
against partner commission.

Every one of those is the arrangement's core shape: a rule, two sources of record, a stream of
items, and a difference that matters.

The reason revenue assurance exists as a distinct discipline in telecoms and not in most other
industries is volume. Telecoms passed the point where inspection was possible decades ago and
built a function around sampling and reconciliation. That is the shape continuous evaluation
is built for.

### Where it lands

**Rating and billing reconciliation.** Continuous evaluation at the transaction, rather than
a monthly sweep against a sample.

**Interconnect and partner settlement.** Two parties' records of the same traffic, compared
against the agreement that governs the rates.

**Network capital programmes.** Site builds, equipment purchases and rollout programmes carry
the plan-to-capitalise sequence, across many small sites rather than a few large ones, which
makes the sampling problem worse rather than better.

**Consent and data handling.** Obligations about what may be done with subscriber data are
rules applied to flows, and they are exactly the kind of control that must be demonstrable.

### An illustration

A rating rule for a particular bundle is changed to support a new promotion. The change is
correct for the promotion and incorrect for a small set of legacy subscribers on a similar
bundle, whose usage now rates differently.

The affected population is small enough that it does not move any monthly aggregate. No
threshold fires. A sample of a few hundred accounts is unlikely to contain one.

A continuous comparison between the rating output and the terms of each subscriber's plan
finds the affected accounts individually, because it is looking at each account rather than at
the total. The assessor confirms, for a handful of them, that the plan terms and the rated
output genuinely differ, scores the finding, and the remediation is a configuration correction
and a re-rate rather than a discovered liability.

## Marketing

Marketing is included as a first-class example because the shape holds exactly, and because
marketing spend is one of the few large budgets that is routinely committed continuously and
reviewed periodically.

### The mechanism, stated generically

Media is bought against a plan, through intermediaries, under an agreement with rates and
fees, subject to rules about placement, brand safety, data use and consent. Performance is
reported by parties who have an interest in the report. The commitments are numerous and
individually small.

That is the arrangement's shape with different nouns: a plan, a rule, a source of record, a
stream of transactions, and a difference worth knowing about.

### Where it lands

**Agency and platform fee validation.** The agreement sets a fee structure. The billing
applies one. Reading the first against the second is a rules-versus-records comparison.

**Plan versus commitment.** A media plan is approved. Buys are committed against it. The
sequence is plan, approve, procure, spend — the same five-stage shape Atlas covers for
capital, applied to a different budget.

**Consent and data-use obligations.** What may be done with a customer record is governed by
rules that must be demonstrable. This is a control-monitoring problem, not a marketing
problem, and it lands on the marketing budget.

**Signal watching.** The assessor that watches signals reads streams of ordinary events and
reports when the combination is unusual for a given account. Runink's marketing product
already works this shape over a customer's own data.

### An illustration

A churn-risk signal. An account reduces usage slightly, its main contact changes, a support
case is opened and closed without escalation, and a renewal date approaches. Each of these
events is unremarkable and each sits in a different system.

An assessor reading the combination reports that this pattern, in this segment, has preceded
non-renewal before. It says what it saw and where each piece came from. It does not claim to
know the outcome, and because the decision about what to do — a call, a discount, a service
review, nothing — turns on the relationship, it is filed as needing a person.

The commercial value is a phone call in week one rather than a win-back campaign in month
four.

## Continuous versus periodic: a comparison

Both parties use this framing already, and it is the clearest single summary of what the
combination is for.

| | Periodic and manual review | Continuous evaluation with an independent assessor |
|---|---|---|
| **Population examined** | A sample, chosen to support a statement about a rate | Every item, examined individually |
| **When a finding appears** | After the period closes | At the transaction, while the decision is open |
| **What a finding tells you** | That the population deviates at some rate | That this specific item deviates, in this specific way |
| **Remedy available** | Recovery — the money is spent, the asset is on the books | Decision — hold, query, re-approve, or proceed |
| **Rules tested against** | The rule as written in the policy document | The rule as written, compared with the rule as enforced |
| **Drift between the two** | Discovered by incident | Reported as a standing output |
| **Who reads the queue** | A reviewer, item by item | A person, after an assessor has scored and sorted it |
| **Confidence in a finding** | Re-derived by the reader for each item | Attached to the item, with the reasoning behind it |
| **Items needing judgement** | Indistinguishable from mechanical ones | Labelled as such, with the ambiguity named |
| **Evidence for an auditor** | Assembled after the request, by hand, each time | Written as the work happens, verifiable end to end |
| **Behaviour under pressure** | Degrades exactly when the organisation is busiest | Runs on a schedule regardless of workload |
| **Cost of doing it more often** | Rises roughly in proportion to frequency | A capacity question, decided once |
| **What the organisation can say** | Controls were operating effectively during the period | Here is every exception, when it was found, what was decided, and by whom |

The last row is the one that matters to a regulated buyer, and it is worth reading twice. The
two statements are not stronger and weaker versions of the same claim. They are answers to
different questions, and only one of them is the question the supervisor asked.

## What the combination is built on, and why that matters commercially

Each property below is a description of how the arrangement is built. Each has a commercial
consequence, and the consequence is the reason to care.

### The reasoning runs on the customer's hardware

CORE runs its own model on machines the customer owns. Every automated assessor is served by
it. No outside service is called for reasoning and no outside account is required.

**The consequence is that the security review becomes a description.** The question that
stalls these evaluations — where does our information go — has a one-sentence answer that
survives scrutiny: to a machine you own, in a building you control, and it stays there. That
answer opens categories of buyer that are otherwise closed.

**The second consequence is the shape of the cost.** Because the model runs on hardware the
company owns, the cost of reasoning does not rise with every item examined. This matters more
here than in most designs, because the entire proposition is examining every item rather than
a sample. An arrangement whose cost rose with each item examined would be in tension with its
own purpose. Budgeting is a capacity conversation, held once, rather than a consumption
conversation held every month.

### Everything else runs there too

Records, files, the identity authority, the secrets and the search index are all held on the
customer's own systems. There is no managed outside database holding company information, and
self-hosted deployments on the customer's premises are supported, including where there is no
outside network connection at all.

**The consequence is that the data-control claim is complete.** A single outside dependency
holding company information would make the whole claim conditional, and a conditional claim
does not survive a procurement questionnaire.

### Every internal service proves who it is

Every service inside the platform proves its identity to every other service before any
information moves between them, using short-lived credentials that are replaced automatically
and issued from one shared authority. The console reports which authority each part of the
platform trusts, when it was issued, when it expires, and whether every part agrees on the
same one.

**The consequence is that the assessor's independence is enforced rather than asserted.** A
finding arriving from Atlas and a score returning from CORE are exchanges between two
identified parties, and the identity is checked rather than assumed.

### The record is a by-product

Attribution on every change, a sequenced record with each entry fingerprinted against the one
before it, and a sixty-day history of what was built and what was rolled out.

**The consequence is that assurance costs what the work costs.** The standing overhead of
being able to answer who did what, when and why is paid by the system as it works, rather
than by a person assembling evidence after the question is asked.

### The workers already know how to talk to each other

Runink's platform includes a shared calling arrangement for automated workers, a register of
every managed worker, a way to check each one is alive by asking it to describe itself, and a
gate that holds an irreversible action until a named person decides it. Workers in the same
process and workers reached across a network are called the same way.

**The consequence is that the inbound half of this integration is built rather than
imagined.** Findings submitted by an outside assessment platform are received, judged and
returned by working code, exercised end to end in automated testing. The outbound half — CORE
reaching into Atlas — is a named interface with nothing written behind it, and that is a
decision rather than an omission: software written against an interface nobody outside
Logical Leap has seen would build cleanly, pass its own tests, and fail on first contact with
the real thing. It waits
on a specification, and nothing depends on it in the meantime, because a submitting platform
receives CORE's verdicts on the same connection it submitted on and can ask for them again by
handing over the same batch. That is a statement about engineering risk, and it is the reason
the two companies think this shape is the right one.

## Who this is for, what adopting it involves, and a straight note on numbers

### Who it is for

**The organisation whose written rules and enforced rules have drifted.** The measure of fit:
pick a rule you are confident about, and try to establish — without asking the person who
built the system — whether it is enforced in software, performed by a person, or neither. If
that takes more than an hour, this is the problem the arrangement addresses.

**The organisation whose review function is sampling a population it cannot inspect.** The
measure of fit: ask your review function what share of transactions it examines. If the
answer is a sample, ask what it would cost to examine all of them the way you examine the
sample.

**The organisation that assembles evidence by hand.** The measure of fit: count the weeks
your last evidence request consumed, and count how many of those weeks made the next request
shorter.

**The organisation whose information cannot leave its own systems.** For these buyers the
data-control property is not a preference. It is the condition of the conversation existing.

**Who evaluates it, and what each one looks at.** The operations lead looks at whether the
scored queue is sorted the way they would sort it. The finance lead looks at the lifecycle
record and the connection catalogue. The compliance lead looks at the exception record and
whether it can be verified end to end. The security lead looks at the connection governance,
the refusal behaviour, and where the model runs.

### What adopting it involves

**Read this paper against your own estate.** Name one rule you believe is enforced and one
reconciliation you do by hand. Those two become the first test.

**Talk to both parties.** Logical Leap arranges access to Atlas through a walkthrough with
their team. Runink CORE runs on one machine from one downloaded file and one command, at no
cost and with no procurement, so the data-control properties and the connection governance
can be examined directly rather than taken on description.

**Do stage one first.** Assessment, rules reconciliation and hypothesis testing. Nothing acts
on the business. The output is a set of documents, a screen, and three measured numbers —
how many findings a week, how many need a person, and how often the assessor and your people
agree — which are the inputs to any sensible decision about stage two.

**Decide about stage two with those numbers.** Not with ours.

### A straight note on outcome figures

Both companies publish marketing material that carries figures — reductions, savings,
percentages, dollar amounts.

**Those figures are scenario illustrations. They are not measured customer results.** Logical
Leap labels the figures on the Atlas page as representative or target outcomes. Runink's
published figures — including the amounts that appear in its logistics use cases — originate
in marketing copy describing an illustrative scenario, and the source material hedges them as
examples.

Neither company is putting a customer result behind a number in this document, so this
document contains no numbers of that kind at all. The honest statement is this: the impact of
this arrangement depends on your transaction volume, your rule set, your current review
frequency and the shape of your estate. It is measurable, and the place to measure it is your
own deployment, against your own baseline, over a period you choose.

Both teams would rather be judged on a measurement you take than on a figure we publish.

### The next step

Two conversations, and they can happen in either order.

For Atlas and the capital-oversight side: **logicalleap.io/atlas**.

For CORE, the data-control properties and the assessor design: **paes@runink.org**,
**runink.org**.

And a closing reminder of what this paper is, stated so that no reader closes it believing
more runs than does.

One half of the joint design is built and can be exercised. An outside assessment platform
hands CORE its findings, CORE judges each one and keeps the verdict against it, and the
platform reads the verdicts back. That half has been proven in automated testing, against a
real assessor program and the real receiving code. It has not been run against a live
installation at a customer, so what is claimed for it is argued from tests and a measured size
budget rather than from observed traffic.

The other half — CORE reaching into Atlas — is a named interface with nothing written behind
it, and it waits on a technical interface from Logical Leap's side. Everything else in this
paper is architecture: a shape the two companies believe is right, described in the way a
drawing describes a building. What the paper is for is to let you tell us whether that shape
fits your organisation before either party builds further against the other.

