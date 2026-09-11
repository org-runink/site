---
title: "Runink CORE and Atlas — Continuous oversight, with a second opinion on every finding"
headline: "Continuous oversight, with a second opinion on every finding."
product: "Runink CORE"
subtitle: "A joint architecture paper with Logical Leap's Atlas"
jointly_with: "Logical Leap"
partner_url: "https://logicalleap.io/atlas"
description: "A joint architecture paper from Runink and Logical Leap. Atlas watches capital spending as it happens; CORE's assessors read each finding and score it before a person is asked to act. The paper states, on the pages it names, which half of the design runs and which is drawn."
weight: 40
date: 2026-09-03T00:00:00Z
source_pages: 23
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
  - { page: 1,  title: "What this paper is, and which part of it runs" }
  - { page: 2,  title: "Executive summary" }
  - { page: 3,  page_end: 4, title: "The expensive problem, named before the product" }
  - { page: 5,  title: "Who has this problem, by segment" }
  - { page: 6,  title: "Who owns it, who sponsors it, and who signs it off" }
  - { page: 7,  title: "Why periodic review fails" }
  - { page: 8,  title: "What the two products do" }
  - { page: 9,  title: "How the two divide the work" }
  - { page: 10, title: "What \"judging\" means, in plain language" }
  - { page: 11, title: "What is built: findings in, verdicts back" }
  - { page: 12, title: "What is built: how a verdict is reached, and where the line falls" }
  - { page: 13, title: "Where the built part stops" }
  - { page: 14, title: "Why an independent assessor matters" }
  - { page: 15, title: "A note on how we name the assessors" }
  - { page: 16, title: "The two-stage adoption path" }
  - { page: 17, title: "For operations leaders" }
  - { page: 18, title: "For finance and procurement" }
  - { page: 19, title: "For compliance, risk and security" }
  - { page: 20, title: "Continuous versus periodic: a comparison" }
  - { page: 21, title: "What it is worth, computed on your own numbers" }
  - { page: 22, title: "What the combination is built on, and why that matters commercially" }
  - { page: 23, title: "Who this is for, what adopting it involves, and a straight note on numbers" }
---

## What this paper is, and which part of it runs

**What runs.** CORE accepts findings from an outside assessment platform, judges each one, and
hands the verdicts back. That path is built, and it has been exercised end to end in automated
testing. Pages 11 to 13 describe it as it is written, and every claim in this paper should be
read against them.

**What is drawn.** The other direction — CORE reaching into Atlas to collect findings itself,
or to push verdicts into it — is a named way in with nothing written behind it. It waits on a
written description from Logical Leap's side of how to call Atlas; Atlas is offered in private
beta, to selected customers rather than generally, and does not publish one, which is ordinary
for a product at that stage.

The paper is written jointly by Runink and Logical Leap, so that both engineering teams and any
interested customer are reading the same description of the same shape. Nothing in it is an
account of work performed for a customer, and nothing in it describes an outcome observed at
one.

## Executive summary

Companies discover their most expensive mistakes late.

A capital project overruns and the overrun is visible in the quarter-end pack. A supplier
invoices against a purchase order that nobody re-checked and the discrepancy surfaces in an
audit sample nine months later. A rule that everyone believes is enforced was quietly
switched off during a system upgrade in March and nobody notices until a regulator asks for
evidence. A claim is paid that should have been questioned. A customer leaves after four
warning signals that were each individually unremarkable.

None of these are failures of intelligence. They are failures of timing. In every case, the
information needed to make a better decision existed, in a system the company already owned,
before the money was committed. What was missing was somebody reading it at the moment it
mattered.

The reason nobody was reading it is arithmetic. The volume of transactions, records and
configuration changes in a mid-sized company exceeds what a review function can inspect. So
review became sampling, sampling became periodic, and periodic became the thing that happens
after the decision.

**Atlas addresses the timing.** Atlas is software from Logical Leap that watches the quality
of a company's data and whether the company's own rules are being kept. It checks transactions
continuously against the rules a company has written down, inside the systems where the
records are first created — invoices, purchase orders, and the system that runs the company's
finance and operations — rather than in a spreadsheet assembled afterwards. It flags breaches
of policy as they occur, spots unusual patterns, ranks what it finds by how much money is at
stake, warns of overruns and delays before they land, recommends actions and follows them
until they are closed, and keeps an unbroken record from the original plan through to the
books where the finished asset is recorded. Logical Leap describes this as moving from
reactive problem management to continuous governance — from cleaning up after problems to
checking every transaction as it happens.

**CORE addresses what happens next.** Continuous monitoring creates a new problem the moment
it works: a queue. If every item in the queue arrives with the same confidence, a person has
to re-derive the judgement for each one, and the queue becomes a second full-time reading
job. CORE contributes a set of automated assessors that read a finding before a person does,
score it on both the reasoning that produced it and the conclusion it reached, and separate
the items that carry a clear recommended action from the items where the judgement genuinely
belongs to a person.

**The division of labour is deliberate.** Atlas leads on the screens people work in: the
customer's people work in Atlas, see findings in Atlas, and act in Atlas. CORE sits
behind it as an independent assessor and as the layer that runs the whole arrangement on the
customer's own machines, on a language model the customer runs itself, with a written record
of every action.

**What of this runs.** The path by which findings reach CORE, are judged, and are read back is
built and has been exercised in automated testing. The path by which CORE would reach into
Atlas is a design with nothing written behind it. Pages 11 to 13 draw that line precisely,
and the rest of this paper is written so the two are never confused.

**The two-stage path.** Stage one is visibility — reading the estate and describing it,
setting the rules a company has written down beside the rules its systems actually enforce
and reporting the differences, and answering "what would have happened if" questions against
the company's own records. Nothing acts on the business. Stage two is autonomy — assessors
that carry out a limited, agreed set of actions, with anything that cannot be undone held
until a named person approves it. Most organisations should buy stage one,
run it for a period they choose, and decide about stage two with evidence in hand.

## The expensive problem, named before the product

### Money leaves before anybody checks

Every company has a set of rules about how money is committed. A purchase above a threshold
needs an approval. A supplier must be on an approved list. An invoice must match a purchase
order within a tolerance. A capital item must be recorded as a long-lived asset rather than
written off as a running cost. A change to a payment destination must be confirmed through a
separate channel, not by replying to the message that asked for it. A claim above a value must
be reviewed by a second assessor. A discount above a level must be signed off.

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
approved. A purchase order is raised. Invoices arrive against it. Eventually the finished
thing is entered in the books as a long-lived asset rather than written off as a running
cost. Each of those steps is an opportunity for a discrepancy: a plan that assumed one scope,
an approval granted against an earlier version, a purchase order that drifted, an invoice
that does not match, an entry in the books that puts the cost in the wrong place.

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
pulls extracts from several systems, sets them against each other by hand to find where they
disagree — what finance calls a reconciliation — writes a narrative, and attaches
screenshots. This takes weeks. It is done by people whose ordinary job is something
else. It is done again next quarter, and again for the next framework, and again for the next
customer's security questionnaire, and the work is not cumulative — the second assembly does
not make the third one shorter.

The cost is not the audit finding. The cost is the assembly, paid every time the question is
asked, by people who were doing something else.

### What all four have in common

Four costs: rules that are believed rather than known, a delay between the decision and the
review, a review method that cannot see the specific item, and evidence assembled by hand
after the fact. They share one cause — the company's own information is sufficient to answer
all four questions, and nothing is reading it continuously.

That is the problem the combination of Atlas and CORE addresses. A company that does not have
it does not need either product, and should be able to establish that from these two pages
without a meeting.

## Who has this problem, by segment

The pattern appears wherever three conditions meet: a high volume of individually small
decisions that commit money or create obligation, written rules governing those decisions,
and a review function sized for sampling rather than inspection.

That combination is not industry-specific. Here is where it shows up.

### Capital-intensive organisations

Any organisation that runs capital projects — utilities, manufacturers, real-estate
developers, transport operators, hospital groups, mining and energy companies — carries the
sequence described on the previous pages: plan, approve, buy, spend, and finally record the
finished thing in the books. The amounts are large, the sequence is long, the participants are
numerous, and the systems that hold the pieces are usually not the same system.

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

Revenue assurance is the discipline of confirming that what was delivered was priced — in
telecoms, "rated" — that what was rated was billed, and that what was billed was collected.
It exists as a named function in telecoms precisely because the transaction volume defeats
inspection. Alongside it sit interconnect settlement, network capital programmes, device
subsidy tracking and partner commission — each a reconciliation between two records that
ought to agree.

### Marketing organisations

Media spend commits money through agencies and platforms, against plans, with rules about
brand safety, placement, data use and consent. Working out which spending produced which
result is a reconciliation problem. Agency
fee validation is a rules problem. Consent handling is a control that must be demonstrable.
The spend is continuous, the review is periodic, and the interval between them is where the
money goes.

### Any organisation that must show a control worked

Cutting across all of the above: anybody who answers to an external framework, a supervisory
authority, a certification body or a large customer's security team. For these organisations
the continuous-versus-periodic question is not an efficiency question. It is the difference
between assembling evidence and having it.

## Who owns it, who sponsors it, and who signs it off

The previous page describes organisations. This one describes people, because a purchase of
this kind involves three different ones and they are almost never the same person. Naming
them apart is not organisational theory. It is the difference between a conversation that
progresses and one that goes round.

**The person who feels it** lives with the problem daily and can describe it without being
prompted. They are usually too junior to buy and too busy to be in the room, and their
description is the most accurate one available.

**The person who sponsors it** carries the budget and the consequence. They feel the problem
as a number in a report rather than as an afternoon of work, which is why the case has to be
made to them in their own units.

**The person who signs it off** can stop the purchase and cannot start it. Security, risk,
audit and data protection sit here. They are not obstacles; they are answering a question
they will personally be held to.

The commonest way a good evaluation dies is that the case is made to one of the three in the
language of another.

| Segment | Feels it daily | Sponsors it | Signs it off |
|---|---|---|---|
| **Capital projects** | The project office and the accountants reconciling commitments against plan | The finance director | Internal audit, and technology for the data connections |
| **Insurance** | Claims handlers and the people reconciling reserves and recoveries | The claims or operations director | Compliance and the regulator-facing function; the security lead |
| **Banking** | The control and reconciliation functions | The operations director, or whoever owns non-financial risk | Risk, compliance and the security lead |
| **Telecoms** | Revenue assurance | The finance director, or the head of revenue assurance | Internal audit, and data protection for subscriber records |
| **Marketing** | Marketing operations, checking agency billing against the agreement | The marketing director | Finance for the spend, legal for consent |
| **Any regulated body** | Whoever assembles the evidence — usually as an addition to their real job | The executive who answers the supervisor | The security lead and the external auditor |

Logical Leap names the Atlas audiences directly, and they map onto the same three positions:
Finance, the project management office, Procurement, Engineering, Internal Audit and
Executive Leadership.

### What each of the three should be shown

**To the person who feels it:** the queue. Whether it is sorted the way they would sort it,
and whether the reasoning attached to an item is the reasoning they would have written. If
it is not, nothing else matters.

**To the person who sponsors it:** the method on page 21, run on their own figures. Not a
figure from this paper — there is none — but the arithmetic and where each input is read.

**To the person who signs it off:** the refusal. Sign in as somebody who is not on the
permitted list, try to change a data connection, watch it be declined by name, and read the
record that the refusal left behind. That takes an afternoon and settles the question of
whether the governance is a control or a policy.

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

Shortening the interval helps, and its cost scales with frequency: a monthly review is three
times the work of a quarterly one and still leaves a month.

### Manual review degrades exactly when it matters

Review is done by people with other responsibilities. When the organisation is busy — a
year-end, a large project, an acquisition, a system migration — the review work is the work
that slips. Which is to say it degrades precisely during the periods when the risk of error
is highest.

This is not a criticism of the people. It is a property of any control whose operation
depends on somebody having spare time.

### Written rules drift from enforced rules, silently

A rule implemented in a system is a piece of configuration. Configuration changes. It changes during upgrades, during migrations, during
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

That is the shift Atlas is built to make.

## What the two products do

### Atlas, from Logical Leap

Atlas is software that watches the quality of a company's data and whether its own rules are
being kept, applied to the money a company spends on lasting things — buildings, plant,
equipment, large projects. Logical Leap states its purpose plainly: continuous oversight of
every capital investment, stopping money leaking away at the point where it leaves. It is
offered in private beta, with access arranged through a walkthrough with the Logical Leap
team.

Its method is to put the checking of rules, and the checking of the descriptive details
attached to each record, directly into the systems where capital spending is first recorded —
invoices, purchase orders, and the system that runs the company's finance and operations —
rather than relying on spreadsheets and periodic audits.

Logical Leap describes six capabilities:

- **Continuous intelligence** — every transaction evaluated as it happens.
- **Anomaly detection** — spotting unusual spend and policy violations.
- **Risk prioritisation** — ranking issues by impact and exposure.
- **Predictive insights** — forecasting overruns and delays weeks ahead.
- **Guided remediation** — recommending actions and tracking them to close.
- **Complete lineage** — an unbroken trail from the original plan to the books where the
  finished asset is recorded.

It covers a five-stage sequence: plan, approve, procure, spend, and record the finished thing
in the books. Findings are ranked across those stages, so the question "where in that sequence
is our risk concentrated" has an answer that updates rather than an answer that is compiled.

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
files, the authority that issues the platform's credentials, the secrets and the index that
makes the company's own material searchable are all held on the customer's own systems.

**It holds the connections to the company's own systems, under governance.** The links to
databases, the stores where data is gathered for analysis, the systems that run finance and
operations, purchasing systems, document stores and file storage live in one place, described
in one vocabulary, with credentials
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

Three sentences, and then why each is the right way round.

**Atlas leads on the screens people work in.** The customer's people work in Atlas. Findings
appear in Atlas. Actions are taken in Atlas. The view across the whole sequence, the ranking,
the tracking of fixes to completion and the unbroken record from plan to books are Atlas's,
and they are what the customer sees.

**CORE judges.** Before a finding reaches a person, CORE's assessors read it — the reasoning
that produced it as well as the conclusion it reached — and attach a verdict to it. The
verdict is one of four words, and it always carries the reason behind it: CORE concurs, it
dissents, it is unable to judge, or the subject is one it has no business ruling on. This is
the part that is built; pages 11 to 13 describe it as it is written.

**CORE runs the arrangement on the customer's own systems.** The machines, the model, the
connections to the company's own data, the identity, and the record of who did what are
CORE's contribution to the arrangement.

### Why Atlas leads the screens

Two reasons, one of them commercial and one of them practical.

The commercial reason: capital oversight is a specific discipline with a specific vocabulary.
Plan, approve, procure, spend, capitalise. Commitment, accrual, capitalisation, variance.
Logical Leap has built a set of screens around that vocabulary for the people who use it
daily.
Replacing it with a general-purpose screen would make the product worse for the buyer.

The practical reason: the person who acts on a finding needs one place to act. Two screens is
not an architecture; it is a handoff, and handoffs are where items sit. The finding, the
score, the reasoning and the action all belong in the same view.

### Why the assessor is separate from the finder

A system that produces findings and also rates its own findings has one opinion, expressed
twice. A system whose findings are read by a separate assessor, built by a different team,
reasoning with a different method, has two — and the disagreements between them are
informative. Page 14 sets that argument out in full, after the pages that describe what is
built.

### What passes between them

Runink's automated workers already talk to each other through a shared calling arrangement
in the platform. One worker sends a message to another and receives back a task that moves
from submitted, through working, to completed or failed, with intermediate progress reported
as it happens. The same calling arrangement covers workers running inside the same program
and workers reached across a network, so the design does not have to change if the two
products end up running on the same machines or on different ones.

Runink also keeps a register of every managed worker, turns that register into live
addresses, and checks each one by asking it to describe itself — which doubles as the
check that it is still alive and refreshes what each worker says it can do.

Those pieces exist in the platform, and the arrangement that receives an outside assessment
platform's findings is now built on CORE's side: findings arrive, verdicts are produced and
kept against them, and the submitting platform reads them back on the same connection it
submitted over. What is not built is CORE reaching the other way into Atlas, which waits on a
written description from Logical Leap of how to call it. Pages 11 to 13 state that boundary
precisely, and a reader who takes nothing else from this paper should take that distinction.

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
  involve a judgement about intent, about whether something is big enough to matter, about a
  relationship or about precedent. The second kind should arrive labelled as the second kind.

### Where the method comes from

CORE already scores automated work this way. Its assessment routine takes recorded runs,
compares them against a set of answers already known to be right, and scores each one on two
separate counts: the route taken and the result reached. Scoring both is the point. A run
that reached the right answer by the wrong route is a run that will reach the wrong answer as
soon as the inputs shift, and a scoring method that only looks at outcomes cannot see that
coming.

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
is one CORE has no business ruling on.

What the submitter concluded about its own finding is a separate matter, recorded separately:
it asserted the claim, it refuted it, or it could not determine it.

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

### Unable to judge is an answer in its own right, and never renders as agreement

No evidence, evidence that only restates the claim, evidence about a different subject,
evidence past the staleness horizon, an unreadable answer, a submitter who also could not
determine the matter: each ends in unable to judge, with the reason written next to it.

An assessor whose confident answers and whose guesses look identical is ignored within a week.
This is the discipline that stops that happening, and it is the reason the concurrences on the
screen are worth something.

### The two halves were tested together, not separately

An automated test builds CORE's assessor as a working program, runs it against the real
receiving code over a real connection, and checks that the verdicts survive the trip intact —
the arithmetic, the dissents, the times it declined to judge, and the reason attached to each.

That test exists for a reason worth stating. The two halves were written in parallel, and each
passed every test it had while the two disagreed about the shape of the document they were
meant to exchange. Both sides reported themselves working, and together they could not have
judged a single finding. A test that exercises one side is what produces that outcome, so this
one exercises both — it is the only test in this design that would have caught it.

### The whole built path, on one page

![On the left, transactions as they happen, and the one that produced a finding. The finding crosses CORE's edge through the findings door, opened by the submitting platform's own secret. Inside, it passes eight checks run in order, drawn as a comb; two of the three findings shown stop at a check, and each stop carries its own reason. What survives forks. A claim carrying a number goes to a sum CORE performs itself on the raw counts. A claim in prose goes to a single ring, one question put to the model, and a second strand — what the submitter concluded — is drawn reaching towards that ring and stopping short of it. Both branches arrive at a verdict kept against the finding, which leaves through a second door lower down the same wall, opened by a different credential.](figures/whitepapers/atlas-verdict-path.svg "Two doors in one wall. A finding comes in through the first; the verdict goes back out through the second, which a different credential opens.")

The same thing in words, for a reader who would rather have the sentence. A finding arrives
through one door, opened by a secret issued to the submitting platform. CORE keeps it and
runs eight checks in order; any check that fires ends the matter there and states its own
reason. What survives is one of two things. A claim carrying a number is settled by
arithmetic CORE performs itself on the raw counts, and never goes near a model. A claim in
prose is put to the model as a single question — does this evidence support this claim —
without being told what the submitter concluded, so there is nothing for it to rubber-stamp
or contradict. The verdict and its reason are kept against the finding, and the submitting
platform reads them back on the connection it submitted over, through a second door opened
by a different credential.

## Where the built part stops

### Designed, and not built: CORE reaching into Atlas

The direction in which CORE would call Atlas — to collect findings itself, or to push verdicts
into it — exists as a named way in with nothing written behind it.

Atlas is offered in private beta, and Logical Leap does not publish a written description of
how another program should call it. That is entirely ordinary for a product at that stage. The
consequence for this design is concrete: software written against a description nobody outside
Logical Leap has seen would build cleanly, would pass every test written for it, and would
fail the moment it met the real thing. So it has deliberately not been written. It waits on a
written description rather than on effort, and it is short work once one exists.

The consequence is smaller than it sounds, because the direction that is built does not need
it. A submitting platform receives CORE's verdicts on the same connection it submitted on, and
can ask for them again by handing over the same batch. That is a working exchange between the
two products that requires neither party to invent the other's way in.

### Demonstrated where, and where not

Everything on the previous two pages is argued from automated tests and from a measurement of
how much room the stored material actually takes — the store that holds submissions and
verdicts is sized against a real measurement of a realistic finding rather than against an
estimate, and how long records are kept was revised downwards when the measurement said so.

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

**What would change the answer?** For the direction that is drawn, a published description
from Logical Leap's side of how to call Atlas. For the field evidence, a first installation —
which is the thing to ask for before relying on any of this.

## Why an independent assessor matters

Two reasons the assessor is a separate product from the finder, and one property that makes the
separation worth having.

**A system that scores its own output is measuring itself with its own instrument.** When it is
wrong it is usually wrong in a consistent direction, because the error comes from an assumption
in how it reads the data and that same assumption is present in the scoring. A rule mis-parsed
at detection is mis-parsed at scoring. A field misread as a date is misread as a date twice:
the confidence score comes back high and the finding is wrong. An assessor built by a different
team, reading the same records and reasoning with a different method, has its own assumptions
and they are different ones — so where the two disagree there is something worth a person's
attention. That disagreement signal does not exist inside a single system, however carefully
built.

**Ranking by confidence decides how the first hour of the day is spent.** Continuous monitoring
does not produce fewer findings. It produces many more, earlier, which is the point, and a queue
in which every item carries equal weight is a queue somebody has to read entirely — the review
job that did not scale in the first place. Atlas ranks by impact and exposure. The high-impact
item the assessor is confident about and the high-impact item the assessor disagrees with are
different pieces of work, and they should not look the same on arrival.

And the queue is readable only because the assessor is allowed to decline. Materiality,
relationships, intent, precedent, a rule genuinely ambiguous as applied to this transaction:
these arrive labelled as needing a person, with the observation written up and the ambiguity
named. That labelling is what earns the concurrences their attention.

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

In stage two, assessors act. Not on everything — on a limited set of actions the customer
defines, with a rule about which of them require a person.

That holding-back is not advice; it is built in. Runink's platform includes a gate that stops
an action until a named person decides it: the request is described, the assessor pauses, the
request is put in front of a person, and the assessor carries on once the answer comes back.
Where there is no way to reach a person, the gate can be set to refuse rather than to
proceed. The default for anything that cannot be undone is that it waits.

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

Read this chapter against pages 11 to 13. The judging path — findings in, verdicts back — is
built. The ranking, the screens and the tracking of fixes are Atlas's, and Logical Leap's
description of them is on page 8. The arrangement as a whole is architecture.

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

**The reasoning is written down where the verdict is.** The observation, the rule invoked, the
records cited, the severity and the proposed action sit next to each other, so the reasoning
behind a decision is not carried in one person's head.

## For finance and procurement

Same caution as the previous page: the judging path is built, the lifecycle record and the
forecasting are Atlas's, and the two working together is architecture.

### The question you are answering

Finance is asked to state what was committed, what was spent, what has been incurred but not
yet invoiced, and what has been entered in the books as a long-lived asset — and to be right.
Procurement is asked to confirm that what was bought was bought under the terms that were
negotiated.

Both questions are reconciliation questions between records that ought to agree and
frequently do not.

### What the arrangement does for you

**The whole sequence is one record.** Atlas's record runs unbroken from the original plan to
the books where the finished asset appears. The question "where did this cost come from" is
answered by following that record rather than by asking four people.

**The data connections are brought together.** CORE holds the links to the systems the answer
depends on — the systems that run finance and operations, the stores where data is gathered
for analysis, purchasing systems, spreadsheet and document stores, file storage — in one
place, described in one vocabulary, with a
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
the authority that issues the platform's credentials, the secrets and the index that makes
the company's own material searchable are held on the customer's own systems. No outside
service is called for reasoning, and no outside account is required. Deployments the customer
hosts on its own premises are supported, including where there is no outside network
connection at all.

The commercial consequence is that the security review becomes a description rather than a
negotiation.

### Three questions a security reviewer always asks next

**Is our material used to train a model?** No. The model is a set of weight files read from
disk on the customer's own machine. Those files are the same on the first day of a
deployment and on the last, and the customer can confirm that for themselves by comparing
them. There is no training step in the arrangement, no step that sends material out to be
trained on, and no account with a model provider for one to be sent to. The prohibition is
enforced mechanically as well as by policy: a published list of outside model libraries and
their network addresses is checked against the source before every change is accepted, and a
change that introduced one would be refused rather than reviewed.

**Then how does it come to understand our rules and our records?** By reading them at the
moment a question is asked, not by absorbing them in advance. The customer's policies,
contracts, configuration and records are indexed on the customer's own machine, and the
relevant passages are retrieved and placed in front of the model as part of the question,
with the source of each passage carried alongside it. This is why every finding can cite the
record it came from: the record was present in the question, rather than remembered from
training. It is also why removing a document removes its influence — there is nothing left
behind in a set of weights.

**Can one customer's material reach another's?** The retrieval index is filtered by
organisation before anything is ranked, so material belonging to another organisation is
never a candidate for an answer rather than being a candidate that is discarded afterwards.
A second, independent check applies the same rule to whatever the first one returns. Two
checks in sequence is deliberate: a single filter that quietly stopped working would fail
open, and this one fails closed.

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

## What it is worth, computed on your own numbers

Every buyer asks what the arrangement returns, and neither company has a customer measurement
to quote. What follows is the arithmetic instead: every input named, every input read from the
reader's own systems, and no value anywhere in it. A finance function can run it and get a
figure that is theirs and that will survive being asked where it came from.

### First, be precise about what actually moves

Continuous evaluation does not make a bad transaction good. It does not improve a supplier's
terms, and it does not change the rate at which a challenged invoice is conceded. What it moves
is **the interval between an event and the notice of it** — and, through that interval, which
remedies are still available at the moment somebody finally looks. So the value is the
difference between the remedy available at today's moment of detection and the remedy available
at the earlier one. That is a single quantity, and it can be measured rather than asserted.

### The four inputs, and where each one is read

**One — your present detection interval.** Take the last four quarters of findings from your
review function: internal audit exceptions, control-testing failures, reconciliation breaks,
invoice disputes. For each, record the date of the underlying event and the date it was
first recorded as found. The median of those differences is your present interval. Most
organisations have never computed this figure and are surprised by it, which is itself worth
the afternoon.

**Two — the exposure that accrues inside the interval.** For each class of finding, the
amount that grows while nobody is looking: a daily charge that keeps running, a commitment
that keeps being drawn against, an overpayment that repeats monthly on the same contract, a
wrong rate applied to a rising volume. Read it from the ledger for the classes where it
genuinely accrues, and record nothing for the classes where it does not. A one-off
overpayment does not grow, and treating it as though it did is the commonest way this
calculation gets inflated.

**Three — the share of findings where earlier notice would have changed the decision.** This
one is a judgement and it should be made by the people who worked the findings rather than
estimated by anybody else. Take a sample of last year's findings and ask of each: had this
arrived in the week of the event, was a different action available — hold, query,
re-approve, decline — and would we have taken it? The honest answer is often no. Some
findings are information rather than opportunity. The share where the answer is yes is the
only share the arrangement can act on.

**Four — what evidence assembly costs you.** Count the evidence requests answered in the
last four quarters: supervisory, certification, customer security review, internal. For
each, the person-days consumed and the seniority of the people consumed. Then count how many
of those days made the next request shorter. That second count is usually close to nothing,
and the difference between the two counts is your standing overhead.

### How they combine

| | What it is | How you get it |
| --- | --- | --- |
| Add | **Recoverable exposure** | What accrues per day, for each class of finding × the days the interval would shorten by × the share where earlier notice changes the decision |
| Add | **Assembly saving** | Person-days on evidence requests per year × the part of that work that is assembly |
| Subtract | **Cost side** | Licences + machine capacity + the named owner's time + connecting the systems read |

Sum the first two, subtract the third, and divide the annual result by the monthly cost.
That quotient is a payback period. This paper does not state one, because both terms belong
to the reader and neither of them is knowable from here.

The assembly saving is input four, adjusted downwards for the part of an evidence request that
is not assembly at all — the narrative, the review, the meeting. Only the assembly part is at
stake. And because stage one is a reading exercise, its cost side is bounded accordingly.

### Stage one measures the terms stage two needs

The two-stage path on page 16 exists partly for this reason. Stage one produces three
numbers, measured inside the reader's own organisation: how many findings a week the
arrangement produces, what share of them are filed as needing a person, and how often the
assessor and the reader's own reviewers agree.

Those three convert the method above from an estimate into a measurement. Findings per week
gives the volume. The share needing a person gives the reading load, which is a cost and
belongs on the cost side. The agreement rate is the one that decides whether the scored
queue can be trusted enough to change how the first hour of the day is spent, which is where
the interval actually closes.

An organisation that has run stage one is deciding about stage two with its own terms in
hand. An organisation that buys stage two first is deciding without them.

### What would make the answer wrong

Five ways, and they are the five worth checking before the figure leaves the building.

**Counting the same money twice.** A charge avoided and a supplier credit recovered against
the same shipment are one benefit, not two. Reconcile the classes against each other before
summing them.

**Crediting the arrangement with a decision nobody would have taken.** Input three exists to
prevent exactly this. A finding that arrives earlier and is still not acted on has produced
information, which is worth something, but not the thing being counted here.

**Using a denominator produced by the process that misses things.** If the population of
eligible findings is read from the same review function whose sampling is the problem, the
calculation measures the sample and calls it the population. The denominator has to come
from a complete inspection of some period, however short that period is.

**Comparing across a period when something else changed.** A quarter that also carried a
system migration, a new supplier or a reorganisation is not a clean comparison. Choose a
period in which the arrangement is the change.

**Assuming the interval closes to zero.** It does not. It closes to the frequency of
evaluation plus the time a person takes to read a queue. Use a reading time measured in your
own first weeks rather than an ideal one.

### Record the baseline before anything is connected

The commonest reason an organisation cannot state a return is that nobody wrote down the
starting position while it was still true.

Three numbers, recorded in the first week: the median detection interval, the person-days
spent on the most recent evidence request, and the count of findings a period produces
today. All three become unrecoverable once the arrangement is running, because the thing
that would tell you is now the thing that changed.

Both teams would rather be judged on that measurement than on a figure either company
publishes.

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

Records, files, the authority that issues the platform's credentials, the secrets and the
index that makes the company's own material searchable are all held on the customer's own
systems. There is no managed outside database holding company information, and
deployments the customer hosts on its own premises are supported, including where there is no
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

A name attached to every change, a sequenced record with each entry fingerprinted against the one
before it, and a sixty-day history of what was built and what was rolled out.

**The consequence is that assurance costs what the work costs.** The standing overhead of
being able to answer who did what, when and why is paid by the system as it works, rather
than by a person assembling evidence after the question is asked.

### The workers already know how to talk to each other

Runink's platform includes a shared calling arrangement for automated workers, a register of
every managed worker, a way to check each one is alive by asking it to describe itself, and a
gate that holds an action that cannot be undone until a named person decides it. Workers in
the same
process and workers reached across a network are called the same way.

**The consequence is that the inbound half of this integration is built rather than
imagined.** Findings submitted by an outside assessment platform are received, judged and
returned by working code, exercised end to end in automated testing. The outbound half — CORE
reaching into Atlas — is a named way in with nothing written behind it, and that is a
decision rather than an omission: software written against a description nobody outside
Logical Leap has seen would build cleanly, pass its own tests, and fail on first contact with
the real thing. It waits
on that description, and nothing depends on it in the meantime, because a submitting platform
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

So this document carries no numbers of that kind at all. What the arrangement is worth depends
on your transaction volume, your rule set, your current review frequency and the shape of your
estate, and it is measurable in your own deployment against your own baseline. Page 21 is the
arithmetic for doing that, with each input named, each one read from your own systems, and the
five ways the result can come out wrong.

Both teams would rather be judged on a measurement you take than on a figure we publish.

### The next step

Two conversations, and they can happen in either order.

For Atlas and the capital-oversight side: **logicalleap.io/atlas**.

For CORE, the data-control properties and the assessor design: **paes@runink.org**,
**runink.org**.

One half of the joint design is built and can be exercised today: an outside assessment
platform hands CORE its findings, CORE judges each one and keeps the verdict against it, and
the platform reads the verdicts back. That half was exercised in automated testing, against a
real assessor program and the real receiving code, and not yet against a live installation at a
customer. The other half — CORE reaching into Atlas — is a named way in with nothing written
behind it, waiting on a written description from Logical Leap's side of how to call Atlas.

Everything else here is architecture, described in the way a drawing describes a building. What
the paper is for is to let you tell us whether that shape fits your organisation before either
party builds further against the other.

