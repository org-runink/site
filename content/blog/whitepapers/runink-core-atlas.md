---
title: "Runink CORE and Atlas — Continuous oversight, with a second opinion built in"
headline: "Continuous oversight, with a second opinion built in."
# The label the closing ask carries into the contact form, so an enquiry
# arrives naming the paper it came from. `product:` is not usable for this —
# two of the four papers are both "Runink CORE".
next_about: "The CORE and Atlas paper"
product: "Runink CORE"
subtitle: "A joint paper with Logical Leap's Atlas"
jointly_with: "Logical Leap"
partner_url: "https://logicalleap.io/atlas"
description: "A joint paper from Runink and Logical Leap. CORE's Intelligence pages bring Atlas's oversight screens into CORE and fill them with the company's own data. This paper walks through each Atlas page: the question it answers, who uses it, and why it is worth having. It then shows how the rest of CORE backs the work with a second opinion, a record nobody can quietly edit, and a person who approves."
weight: 40
date: 2026-09-26T00:00:00Z
source_pages: 22
audience: "Finance, project, data, operations, audit, risk and compliance leaders"
blurb: "Atlas, from Logical Leap, is a set of screens for watching capital spending and data quality. CORE runs those screens as its Intelligence pages, on the company's own hardware and the company's own data. This paper goes through each Atlas page in turn, then shows how the rest of CORE adds a second opinion, a record in which any edit shows, and a person's approval before anything changes."
deck: |
  Atlas, from Logical Leap, is a set of screens for watching capital spending
  and the quality of the data behind it. Runink CORE runs software on machines
  a company owns, with a language model the company runs itself and a record
  of every change and who made it.

  CORE's **Intelligence** pages bring Atlas's screens into CORE and feed them
  with the company's own records. This paper walks through each Atlas page: the
  question it answers, the person who uses it, what it lets them do, and why
  that is worth having. Then it shows how the rest of CORE backs the work: a
  second, independent opinion on submitted findings, a record that anyone
  signed in can check, and a person who approves before a rule or a fix
  changes.
register:
  - { page: 1,  title: "Executive summary" }
  - { page: 2,  title: "The expensive problem, named before the product" }
  - { page: 3,  title: "Who has this problem, and who owns it" }
  - { page: 4,  title: "Why periodic review fails" }
  - { page: 5,  title: "What the two companies bring" }
  - { page: 6,  title: "How to read the Intelligence pages" }
  - { page: 7,  title: "The three dashboards: Analyst, CFO and PMO" }
  - { page: 8,  title: "DQ overview: the state of data quality on one page" }
  - { page: 9,  title: "CapEx monitor and CapEx lineage" }
  - { page: 10, title: "Perspectives: who reads what" }
  - { page: 11, title: "Business rules: a change takes two people" }
  - { page: 12, title: "Orchestrator: playbooks that run on agreed terms" }
  - { page: 13, title: "Lineage, Remediation and Progress" }
  - { page: 14, title: "Sources and Resolve: reaching your systems on purpose" }
  - { page: 15, title: "Settings and Deploy lineage" }
  - { page: 16, title: "The second opinion: what judging means" }
  - { page: 17, title: "How the rest of CORE supports the oversight story" }
  - { page: 18, title: "For finance, operations and compliance leaders" }
  - { page: 19, title: "Continuous versus periodic: a comparison" }
  - { page: 20, title: "What it is worth, computed on your own numbers" }
  - { page: 21, title: "What it is built on, and why that matters" }
  - { page: 22, title: "Who this is for, and the next step" }
---

## Executive summary

Companies find their most expensive mistakes late.

A capital project runs over budget, and the overrun shows up in the quarter-end pack. A
supplier bills against a purchase order that nobody checked again, and the gap surfaces in
an audit sample months later. A rule everyone thinks is enforced was switched off during a
system upgrade, and nobody notices until a regulator asks for proof.

None of these is a failure of intelligence. Each is a failure of timing. The facts needed
for a better decision were already in a system the company owned, before the money was
committed. What was missing was somebody reading them at the moment it mattered.

Nobody was reading because there is too much to read. A review team cannot inspect every
transaction, record and settings change. So review became sampling, sampling became
periodic, and periodic became the thing that happens after the decision.

**Atlas is built for the timing.** Atlas is software from Logical Leap that watches
capital spending and the quality of the data behind it. It checks each record against the
rules a company has written down, ranks what it finds by what is at stake, and keeps an
unbroken trail from the original plan to the money spent.

**CORE runs it on the company's own ground.** CORE's Intelligence pages are Atlas's
screens and Atlas's capital-spending rule book, running inside CORE on the company's own
hardware. Every figure on those pages is computed from the company's own records. Nothing
is sample data, and a figure that cannot be computed says so, with the reason, instead of
showing a zero.

**CORE adds the second opinion.** Oversight creates a queue the moment it works. CORE
does three things so the queue can be trusted:

- An independent assessor reads each finding an outside assessment platform submits, and
  states whether the evidence carries it. When it cannot tell, it says so.
- No rule change, fix, or playbook goes live on one person's say-so. The person who
  proposes it can never be the person who approves it.
- Every change a person makes in the console lands in a record where each entry is tied
  to the one before. Anyone signed in can check that the record is whole.

The rest of this paper takes the Intelligence pages one at a time. For each, it names the
question the page answers, the job title that uses it, what it shows and lets that person
do, and the way it saves money or effort.

## The expensive problem, named before the product

### Money leaves before anybody checks

Every company has rules about how money is committed. A purchase above a set amount needs
an approval. A supplier must be on an approved list. A request must match the plan it came
from. A capital item must be booked as a long-lived asset, not written off as a running
cost. Spending above the approved amount needs a second approver.

These rules exist. They are written down. Somebody was paid to write them.

The rules are enforced in one of three places: in the software, by a person following a
procedure, or nowhere. Most companies cannot say which of the three applies to a given
rule. The rule was written in a policy. A project team built it into a system and moved
on. The system was upgraded twice. Nobody read the policy against the settings afterwards.

So there is a set of rules a company believes it enforces, and a different set it actually
enforces, and no easy way to see the difference.

### The gap between the decision and the review

The second cost is timing.

Think of the ordinary steps of a capital project. A plan is written. A request is approved.
A purchase order is raised. Invoices arrive. The finished thing goes on the books. Each step
is a chance for things to drift: a request that no longer matches the plan, an approval
granted before anyone looked, a purchase order dated before its approval, spending above
what was approved.

Review happens at the end. By then the money is spent, the supplier is paid, and the fix is
a recovery effort rather than a decision not to go ahead. Recovery is slower and less
certain, and it takes senior time that a question asked early would not have taken.

### The review team cannot keep up

The third cost is the one that makes the first two permanent.

An internal audit or data-quality team works by sampling. It picks a sound number of items,
tests them well, and reports. That is a good way to estimate a rate. It is not a way to
catch one bad transaction, because that transaction is almost never in the sample.

### The evidence problem

The fourth cost does not look like a loss. It looks like overhead.

Regulated companies must show, on request, that a control worked throughout a period. The
usual way is to build the evidence after the request. Somebody pulls extracts from several
systems, matches them by hand, writes a story, and attaches screenshots. It takes weeks. It
is done again next quarter, and again for the next framework, and the second round does not
make the third one shorter.

### What the four have in common

Rules that are believed rather than known. A delay between decision and review. A review
method that cannot see the single item. Evidence built by hand after the fact. They share
one cause: the company's own records could answer all four questions, and nothing is
reading them as they change.

## Who has this problem, and who owns it

The pattern appears wherever three things meet: many small decisions that commit money,
written rules about those decisions, and a review team sized for sampling.

**Capital-intensive companies** feel it most. Utilities, manufacturers, property
developers, transport operators, hospital groups, mining and energy firms all run the same
steps: plan, approve, buy, spend, and book the asset. The amounts are large, the chain is
long, and the pieces sit in different systems. This is where Atlas's rule book is aimed,
and Logical Leap names its audiences directly: Finance, the project management office,
Procurement, Engineering, Internal Audit and Executive Leadership.

**Any company that must show a control worked** feels it too. Anyone who answers to an
auditor, a regulator, a certification body or a large customer's security team faces the
same question. For them, continuous review is not about speed. It is the difference
between building evidence and already having it.

### Three people, rarely the same one

A purchase like this involves three people, and they are almost never the same person.

**The person who feels it** lives with the problem every day. They are usually too junior
to buy and too busy to be in the room, and their account is the most accurate one there
is.

**The person who sponsors it** holds the budget and the consequence. They see the problem
as a number in a report, so the case must be made in their units.

**The person who signs it off** can stop the purchase but cannot start it. Security, risk,
audit and data protection sit here. They are answering a question they will personally be
held to.

| Setting | Feels it daily | Sponsors it | Signs it off |
|---|---|---|---|
| **Capital projects** | The project office and the accountants matching commitments to plan | The finance director | Internal audit, and IT for the data connections |
| **Any regulated body** | Whoever builds the evidence, usually on top of their real job | The executive who answers the regulator | The security lead and the external auditor |

The most common way a good evaluation dies is that the case is made to one of the three in
the language of another. The Intelligence pages are split by audience for this reason, as
the chapters that follow show.

## Why periodic review fails

"We already have controls" is the most common and most reasonable objection to everything
in this paper. So it is worth being exact.

**Sampling answers a different question.** A sample tells you how often a group of items
goes wrong. It cannot tell you which items went wrong, and it was never meant to. For an
auditor's conclusion, a rate is the right answer. For an operating decision, such as
whether this payment should go out, a rate is no answer at all.

**The gap is where the loss lives.** If review is quarterly, most findings arrive long
after the event. Every remedy open in the first week, such as holding a payment or querying
a request, has expired. What remains is recovery.

**Manual review slips when it matters most.** Review is done by people with other jobs.
At year end, during a large project or a system move, review is the work that slips. That
is exactly when the risk of error is highest.

**Written rules drift from enforced rules, quietly.** A rule built into a system is a
setting. Settings change during upgrades, moves and the ordinary work of clearing a
backlog. The policy still says the rule is enforced. The system no longer enforces it.

**What continuous means.** Continuous does not mean faster reporting. It means each record
is checked against the rule when it arrives, so the finding lands while the decision is
still open.

## What the two companies bring

### Atlas, from Logical Leap

Atlas is software that watches capital spending: money a company spends on lasting things
such as buildings, plant, equipment and large projects. Logical Leap describes its purpose
plainly: continuous oversight of every capital investment, stopping money leaking away at
the point where it leaves.

Logical Leap describes six capabilities:

- **Continuous intelligence**: every transaction checked as it happens.
- **Anomaly detection**: spotting unusual spend and policy breaches.
- **Risk ranking**: ordering issues by impact and exposure.
- **Predictive insight**: warning of overruns and delays before they land.
- **Guided remediation**: recommending actions and tracking them to close.
- **Complete lineage**: an unbroken trail from the original plan to the books.

Logical Leap arranges access to Atlas through a walkthrough with its team.

### Runink CORE

CORE is the layer a company runs on its own hardware to keep its software and its data
healthy, governed and explainable. Its console sorts the work into categories. The two
that matter most here are:

- **Intelligence**: what the company's data holds, how good it is, and where spending or
  controls are going wrong. These are the Atlas pages.
- **DataEx** (short for data experience): what the company's AI models and agents are,
  what they may do, and whether their work can be trusted.

Beside them sit **Overview**, the front door, and **DevEx** (developer experience), which
covers whether the platform is running and whether changes shipped. The main CORE paper
covers every category: [Runink CORE — the operations layer for companies that keep their
own data](/blog/whitepapers/runink-core/).

### How the two fit together

Logical Leap designed Atlas's screens and its capital-spending rule book for the people
who do this work every day. CORE runs both inside its console, on the company's own
machines, under CORE's sign-in, and against the company's own records.

That split is deliberate. Capital oversight has its own vocabulary: plan, approve,
procure, spend, capitalise; commitment, variance, lead time, Go-Live. Logical Leap built
its screens around that vocabulary, and a general-purpose screen would make the work
harder. CORE contributes what sits underneath: the machines, the model, the connections to
the company's systems, the named people who may change things, and the record of who did.

## How to read the Intelligence pages

Every Intelligence page follows three rules, and a reader who knows them can trust what
they see.

**Every figure is the company's own.** There is no sample data on these pages. Each figure is
computed by CORE from records the company has loaded or connected.

**Not measured is never shown as zero.** When a figure cannot be computed, the page shows
the reason in its place. An empty dataset has no quality score, not a score of zero. A
division by nothing is not a variance. The page also says where each figure came from and
when it was read, so "we could not look" never reads as "all clear".

**Reading is open, changing is named.** Anyone admitted to the console can read these
pages. Changing anything, such as loading a feed, approving a rule change or pressing a
button that reaches a company system, needs a named person on the right list. Every
attempt to change something is recorded, refusals included.

The chapters below follow the order of the menu. They cover the Atlas pages, and the
Resolve and Deploy lineage pages that sit beside them. The Data audit page is described in
the [Runink CORE paper](/blog/whitepapers/runink-core/#data-audit).

## The three dashboards: Analyst, CFO and PMO

Three dashboards open the category, one for each person who owns a part of the problem.
Each one is a summary that points to the page where the work is done.

### Analyst dashboard

**The question it answers.** Is this capital programme ready for its Go-Live date, and
what stands in the way?

**Who uses it.** The capital governance analyst, and the project controller who works
beside them.

**What it shows.** A strip of headline figures: readiness for Go-Live, the data-quality
score, the planned budget, the approved amount, actual spend, the variance between them,
open findings and critical risks. Below it:

- a health scorecard across budget, procurement, schedule, data quality, compliance and
  vendors, where an area with no basis to judge is marked "not assessed", never green;
- a Go-Live readiness gauge and the parts it is built from;
- where each item stands in its life, from plan to spend;
- findings by severity and by rule, with an exception queue;
- long-lead items, and whether each purchase leaves enough lead time before Go-Live;
- data quality by dimension, with the top issues;
- the open backlog of fixes, and what CORE's agents have been doing.

**Why it is worth having.** The analyst's week today is spent building this picture from
several systems. Here it is built for them from the records, and every tile links to the
page that explains it. The time goes to the items that need a decision rather than to
assembling the list.

### CFO dashboard

**The question it answers.** Where is capital going, and is any of it going where it
should not?

**Who uses it.** The chief financial officer, the finance director, and the controller who
prepares their pack.

**What it shows.** The approved budget, approved requests, actual spend and the budget
that remains. Spend by category. Two risk lines that matter most to finance: spending with
no valid approval behind it, and spending above the approved amount. A control
effectiveness view that shows each control area's score and the rules it is built from. A
separate section, marked as CORE's own, shows CORE's compliance controls and an estimate of
the machine capacity each initiative uses, labelled as an estimate.

**Why it is worth having.** Unapproved and over-approved spend are the two lines a finance
leader most wants to see early, and least wants to hear about from an auditor. Here they
are computed from the spend records as they are loaded. The control view links each score
to its rules, so a question about a weak area goes straight to the rule that caused it.

### PMO dashboard

**The question it answers.** Across the portfolio, which initiatives are on track and
which are at risk?

**Who uses it.** The director of the project management office (PMO).

**What it shows.** The page treats each of CORE's initiatives as a project, and says so on
screen. It counts active initiatives, those on track, and those at risk, judged from
whether the software each initiative runs is healthy. It shows the trend of open
data-governance findings over time, and a governance scorecard: each open risk CORE has
found, how severe it is, and the fix CORE proposes, or a plain statement that it needs a
person.

**Why it is worth having.** A portfolio status built from status reports is only as fresh
as the last report. This one is read from the running system each time the page opens. The
PMO director sees the same facts as the people doing the work, at the same moment.

## DQ overview: the state of data quality on one page

**The question it answers.** How good is our data, what is wrong with it right now, and is
it getting better or worse?

**Who uses it.** The head of data quality, data stewards, and the chief data officer.

**What it shows.** A data-quality (DQ) score for the capital-spending records, with its
formula on screen: records with no finding, divided by all records. An active issues list
from CORE's most recent data-governance review. A trend over the past week. Quality by
dimension. A header sentence written from real counts: how many connections are
registered, when the last review ran, and how many review runs there have been. A count
that could not be read is left out of the sentence rather than written as zero.

The page only says the data is "live" when at least one source was actually read.

**Why it is worth having.** Data-quality reports are often one number with no way to see
behind it. Here the formula sits beside the score, and every issue links to its source. A
steward can show a doubting colleague exactly how the number was reached, which is what
makes the number worth acting on.

## CapEx monitor and CapEx lineage

These two pages are the heart of the Atlas rule book. CapEx is short for capital
expenditure: money spent on long-lived assets.

### CapEx monitor

**The question it answers.** Which of our capital plan, request and spend records break
our rules, and how badly?

**Who uses it.** The capital governance analyst, the finance controller, and Procurement.

**What it lets you do.** The page works on three sets of records: the capital plan, the
capital requests, and the spend. A named administrator loads each one, either as a file or
by pulling it from a registered company system. Loading is in three steps. The file is
checked first. Then a preview shows what would change, finding by finding, before anything
is written. Only then does a person commit it. Each commit is recorded as a scan, so the
history is kept.

The rule book checks each record. The checks include:

- items with a missing or duplicated identifier, a vague description, or the wrong type or
  category;
- low-value items classed as capital;
- purchase dates that do not leave enough lead time before Go-Live;
- requests that point to no plan item, or plan items with no request;
- requests with no approval or no vendor, or raised after the planned purchase date;
- approvals granted too soon after the request to have been a real review;
- request amounts that stray from the plan;
- spend with no approval behind it, or a purchase order dated before its approval;
- spend above the approved amount that needs a second approver;
- spend classed differently from the plan;
- dates that cannot be read, which would otherwise let a record slip past every date rule.

Each finding carries its severity, the record it concerns, and the fix the rule book
recommends. The page groups findings by rule, by severity and by theme, and shows how
purchases line up against the Go-Live date. An administrator sets that date on this page.

**Why it is worth having.** Every check here is one a review team would run by hand on a
sample. Here it runs on every record, every time the records are loaded. The preview step
means nobody learns what a new file did only after it is live.

### CapEx lineage

**The question it answers.** Where did this finding come from, and what else does it
touch?

**Who uses it.** Internal audit, and the project controller tracing a problem.

**What it shows.** Pick a finding from the queue. The page traces it along its chain: the
spend, the request that approved it, and the plan item behind that. It shows the findings
upstream and downstream of it on the same chain, and the money at stake, including any
spend above what was approved.

**Why it is worth having.** "Where did this cost come from?" is usually answered by
asking four people. Here it is answered by following the chain. An auditor sees in one view
whether a spending problem began at the plan, at the approval, or at the purchase, which
decides who fixes it.

## Perspectives: who reads what

**The question it answers.** Who in the company cares about capital governance, and what
does each of them care about?

**Who uses it.** Anyone setting up the practice, and anyone explaining it to a new
colleague.

**What it shows.** A framework, not data: one card per audience, each with a short focus.

- **Finance**: budget integrity, capitalisation and cash flow.
- **Internal Audit**: controls and audit evidence.
- **Procurement**: vendor governance and purchase order workflows.
- **Engineering and Operations**: equipment readiness for Go-Live.
- **Security and Cyber**: identity, access and AI safety.
- **Compliance**: regulatory adherence and evidence.
- **Executive Leadership**: portfolio health and capital efficiency.
- **AI and Agentic Governance**: automated work that can be explained and that keeps a
  person in the loop.

**Why it is worth having.** The same finding means different things to Finance and to
Engineering. A shared map of who reads what helps a team route each finding to the person
who can act on it, and helps a sponsor see that the practice serves more than one
department.

## Business rules: a change takes two people

**The question it answers.** Which rules are we enforcing, who owns each one, and who
agreed to change it?

**Who uses it.** Rule owners in Finance and Procurement, the head of internal controls, and
internal audit.

**What it shows.** Every rule in the rule book, with its status, its owner, how many
findings it has raised, and any open change. Each rule also shows its effect, read from
CORE and not guessed: whether it is scored, running as a dry run, or not evaluated. A dry
run and a scored rule never look alike.

**What it lets you do.** Anyone signed in may propose a change to a rule's status or
threshold, and must give a reason. The change is then decided by the rule's owner or an
administrator, and never by the person who proposed it. This is the four-eyes rule, and
CORE enforces it itself; the page simply mirrors it by greying out the approve button on
your own proposal. An administrator assigns owners.

Status is not decoration. A rejected rule raises no findings. A rule still in draft or
awaiting approval raises findings marked as a dry run, and those are kept out of every
total, dashboard and scan, with the rule named as left out. Once approved, a new threshold
feeds the rule book.

**Why it is worth having.** Rules drift because one person can change a setting and
nobody sees it. Here no rule changes on one person's word, the reason is written down,
and the decision lands in the audit record. When an auditor asks who agreed to loosen a
threshold, and why, the answer is a page, not a search.

## Orchestrator: playbooks that run on agreed terms

The menu calls this page Orchestrator. What it holds is playbooks: short, written routines
that say what should happen when something is found.

**The question it answers.** When a certain kind of finding appears, what happens next,
and who agreed to it?

**Who uses it.** The head of data governance, the controls lead, and the operations
manager who owns the follow-up.

**What it lets you do.** A playbook has triggers and steps. A trigger can be a person
pressing Run, a schedule, a report from one of CORE's agents, or a new scan of capital
records. For example: run this when the data-governance agent reports a failing control,
or when a capital scan finds critical issues. The steps can:

- start one of CORE's agents, such as data governance, compliance, dependency risk, the
  independent assessor, or the curator that writes release notes;
- run a new capital scan;
- wait for a named person's approval;
- post a notice.

A playbook can also be drafted from the rules that are failing most, as a starting point
for a person to edit.

The controls are strict. A playbook goes live only when an administrator who neither wrote
it nor last edited it activates it. An approval step can be decided by its named approver
or an administrator, and never by the person who started the run. Editing a live playbook
sends it back to draft. No step calls a model or edits the company's records. A step
that waits on an agent and hears nothing by its deadline is marked
as timed out, never assumed to have worked. Guards stop one playbook setting off another
in a loop, and each skip is recorded with its reason.

Each playbook shows its recent runs, step by step, and a success rate measured from runs
that finished.

**Why it is worth having.** Follow-up is where findings stall. A playbook turns "somebody
should look at this" into a written routine that starts on its own, waits for a person
where it should, and leaves a record of every step. The second-person rule means the
routine itself was agreed by two people before it ran.

## Lineage, Remediation and Progress

### Lineage

**The question it answers.** Where does our data come from, where does it go, and where
along the way is its quality weak?

**Who uses it.** The data architect and data stewards.

**What it shows.** A map from source systems, through the applications that take data from
them, to where the data lands. Sources are the ones registered in CORE. Links are drawn
only where CORE observed them: where an application reported data moving, or where
Resolve read a relationship from the systems themselves, such as a key a source declares
between two tables or a dataset the source's own access log shows being read. A declared
source and an observed flow are drawn differently, so a reader never mistakes a plan
for a fact. Beside the map sit the quality hotspots: for each source, its failing
controls and its warnings from the latest review.

**Why it is worth having.** When a report is wrong, the first question is which source fed
it. A map built from observed movement answers that faster than a diagram drawn once and
never updated.

### Remediation

**The question it answers.** What should we fix, what would the fix change, and who agreed
to it?

**Who uses it.** Finance operations, data owners, and rule owners.

**What it lets you do.** The page opens on the capital-spending fix queue, filtered by
state and severity. For a fix that can be worked out exactly, a dry run shows the record
before and after, which findings the fix would close, and which it would open. The dry run
works on a copy and writes nothing.

A fix is then approved or dismissed, with a note, by the rule's owner or an administrator.
An approval is a recorded decision: the fix is made in the source system, and the finding
clears on the next load. The decision log is the audit trail. Below the capital queue sits
CORE's wider list of findings from its own reviews and compliance checks.

**Why it is worth having.** A fix that opens two new problems is worse than no fix. The dry
run shows that before anyone touches a source system. The recorded decision means the
question "who approved this change to the records?" always has an answer.

### Progress

**The question it answers.** Are we getting better?

**Who uses it.** The chief data officer, the head of internal audit, and whoever reports to
an audit committee.

**What it shows.** The history of CORE's data-governance reviews, with open findings over
time. The history of capital scans: for each load, the quality score, records failed,
findings opened and closed since the previous load, counts by severity, and scores by
dimension. CORE's view of data and AI maturity. The runs of CORE's review agents. The
history can be exported with one click.

**Why it is worth having.** A board asks whether things are improving. The usual answer is
a story. This page answers with the record of every scan, and a scan that could not read
its data shows as a gap in the line, not a drop to zero.

## Sources and Resolve: reaching your systems on purpose

These two pages are where CORE meets the company's own systems. Both follow one principle:
nothing reaches a company system unless a named administrator pressed a button and
confirmed it.

### Sources

**The question it answers.** Which of our systems may the Intelligence pages use, and what
state is each one in?

**Who uses it.** The IT lead or data platform owner, and the security reviewer.

**What it lets you do.** One card for each system registered in CORE. Each card has a switch
that grants that system to the Intelligence workspace; granting records a permission and
reaches nothing. The card shows the business domain the system was grouped into, whether
its credentials are in place, and whether it answered when last checked — or that it has
not been checked, which is never shown as down. A grant whose system has since been
removed is shown as missing, with a way to revoke it. The page also carries the catalogue
of the kinds of system CORE can connect to.

The systems themselves are created, edited, re-keyed, tested and removed in one place,
**DataEx › Connections**, and each card links there. A new connection is a three-step
dialog: choose the kind of system and fill in its form, choose the runner that will reach
it, then review, test and save. Credentials are held apart from the settings, so the
settings can be reviewed by people who may not see the credentials, and they are never
shown back once saved. Only people on an explicit list may change a connection, and every
attempt, allowed or refused, is recorded.

**Why it is worth having.** When each application reaches the company's systems its own
way, the same warehouse ends up connected several times, under several accounts, with
several people each thinking somebody else looks after it. One list of connections, one
catalogue and one record turn "what reaches our finance warehouse, and under whose
account?" into a screen, and the grant switch keeps "CORE knows about it" apart from "these
pages may use it".

### Resolve

**The question it answers.** What is actually in our systems, how is it organised, and how
is it used?

**Who uses it.** The data platform owner, the data architect and data stewards.

Resolve is one capability that Runink CORE and Runink FACE share: the same page, doing the
same work, in both products.

**What it lets you do.** Resolve is the one place CORE reaches into a company system, and
only when an administrator presses a button and confirms it. The confirmation says what
will be reached and what will be kept. There are four actions:

- **Test** a connection: does the source answer?
- **Explore** a source, to record its structure: its datasets and columns, the type each
  column is declared as, the keys between its tables, row counts where the source states
  them, and which columns the source itself marks as personal data and whether it masks
  them.
- **Read access patterns** over a window the administrator chooses: how many times each
  dataset was read and written, and by how many distinct accounts. Counts, never names.
- **Map the estate**: group datasets into business domains by what they mean, and draw the
  links between them. Every link is marked as declared by the source, inferred from the
  data, or a guess, and there is no confidence score anywhere on the page. What could not
  be read is listed first, with the source's own reason. The map also names *drift* (a
  declared relationship the data contradicts), *shadow* (a relationship the data shows and
  nothing declares) and *missing* (a declared key whose target is not in the estate).

Every call is read-only and time-limited. CORE keeps structure and counts. It never keeps
a cell value, a sample row, a smallest or largest value, or the name of a person or
account. A credential is opened for one call and dropped. Opening the page reaches
nothing; only the four actions do. Each action names the runner chosen for it, and every
action is recorded, refusals included.

**What it feeds.** What Resolve reads does not stay on its own page:

- **Lineage** shows the relationships Resolve observed: declared keys between tables,
  domains that span more than one source, and which datasets are read and written.
- **CORE's data-governance checks** assess data quality and personal-data exposure from
  what Explore and Read access patterns recorded. A column declared as never empty that
  holds empty values is flagged, as is a table with no declared primary key. So is a column
  whose name and declared type mark it as likely personal data and that carries no mask
  from the source, and such a column when more than ten distinct accounts read it. The
  checks are rules, with no model involved. Their findings name columns, never values, and
  appear in CORE's data-governance review. A source nobody has explored is reported as not
  yet explored, never as clean.

**Why it is worth having.** Most companies believe they have an inventory of their data,
and on inspection do not. Resolve builds one from the systems themselves, on request, and
keeps nothing a security reviewer would object to. Because the lineage and the governance
checks start from the same recorded description, the map a steward reads and the findings
an auditor reads describe the same estate. The reviewer can read on screen exactly what
was reached and what was kept.

## Settings and Deploy lineage

### Settings

**The question it answers.** How is the Intelligence workspace set up, and is setup
complete?

**Who uses it.** The administrator who runs the workspace.

**What it lets you do.** Choose the rule engine that supplies the rule book; CORE's own
capital-spending engine is the one that runs here, and the page shows how many rules it
holds. Walk through setup: find agents, grant sources, connect the rule engine, confirm.
The checklist is checked against what exists now, not against what was once ticked, and
the page shows who completed setup and when. Reset the workspace, with a required note;
the page states exactly what a reset clears and what it keeps. A reset clears the agents
in the workspace, the granted sources, the engine choice and the record that setup was
completed. Capital feeds, scan history, rule changes and decisions, the list of agents and
CORE's list of connections are all kept. Every change on this page is for an
administrator, and is recorded.

The page also shows, read-only, two related settings kept elsewhere: the latest check of
the business rules against the written policy, and the code repositories CORE's own agents
work on, which are changed on the Account page.

**Why it is worth having.** Setup that is checked against reality cannot drift into a list
of boxes somebody once ticked. A reset that says what it keeps cannot wipe the history an
auditor will later ask for.

### Deploy lineage

**The question it answers.** Did my change ship?

**Who uses it.** The engineering lead and the release manager. It sits here because
Intelligence is where CORE answers questions about what it knows; it is about software
releases, not data lineage.

**What it shows.** Paste the identifier of a change. For each piece of software it touched,
the page shows whether it was merged, reviewed by CORE's agents, built, stored, rolled out
and running. A stage CORE did not measure is shown as a hole, and a change CORE does not
know is shown as not measured, never as "did not ship".

**Why it is worth having.** "Is the fix live?" is asked in every incident. A page that
answers it from the release record, stage by stage, saves the round of messages it
usually takes.

## The second opinion: what judging means

A system that produces findings and also rates them has one opinion, expressed twice. A
finding read by a separate assessor, reasoning a different way, gets two, and where they
disagree there is something worth a person's attention.

CORE has such an assessor, called the judge. It reads findings that an outside assessment
platform submits to CORE, and states for each whether the evidence carries it. Its results
are on the DataEx › Judgements page.

### It is not a second search

A judge does not look for findings. It reads one somebody else produced and asks a narrow
question: does the evidence cited carry the claim?

### Two doors, and the door decides

Findings come in through one door, opened by a secret issued to the submitting platform.
Verdicts go in through another, opened by a different credential that belongs to CORE's
judge.

A verdict that arrives at the findings door is thrown away. The submitting platform's secret
is refused by name at the verdict door. **A platform that submits findings cannot grade
its own work, and the rule rests on which credential was shown, never on a field the
sender fills in.** Where no secret has been issued, the findings door accepts nothing.

### Two vocabularies, kept apart

CORE's verdict is one of four. It **concurs**. It **dissents**. It is **unable to judge**.
Or the subject is **out of scope**: not one CORE has standing to rule on.

What the submitter concluded about its own finding is kept apart: it asserted the claim,
refuted it, or could not tell. Merging the two is how "CORE concurred" comes to mean "the
submitter said so and nobody checked." So CORE refuses the merge.

### Checks come first, and numbers are recomputed

Before anything reaches a model, a fixed series of checks runs in order. The finding must
be complete enough to read. There must be evidence, and it must be readable. It must be
about the same subject. It must not be the claim written out again. Evidence with a date
must be recent enough to speak to the present. Each check that fires ends the matter and
states its reason in a sentence.

A claim that carries a number is settled by arithmetic and never reaches a model. Where a
finding claims a rate, CORE divides the raw counts again itself. A figure the submitter's
own evidence does not reproduce is a dissent, with the arithmetic named. A count divided by
nothing is unable to judge, never a rate of zero.

### The model is asked one question, and never told the answer

Only a claim in prose reaches CORE's model, running on the company's own hardware. It is
asked one question: does this evidence support this claim? It is never told what the
submitter concluded, and the software gives it no way to be told. The step from "the
evidence supports this" to "CORE concurs" happens afterwards, in code. So the model can
neither rubber-stamp the submitter nor contradict it by reflex.

Where no model is reachable, the answer is unable to judge, with that as the reason. Never
agreement by default.

![On the left, transactions as they happen, and the one that produced a finding. The finding crosses CORE's edge through the findings door, opened by the submitting platform's own secret. Inside, it passes a series of checks run in order, drawn as a comb; two of the three findings shown stop at a check, and each stop carries its own reason. What survives forks. A claim carrying a number goes to a sum CORE performs itself on the raw counts. A claim in prose goes to a single ring, one question put to the model, and a second strand, what the submitter concluded, is drawn reaching towards that ring and stopping short of it. Both branches arrive at a verdict kept against the finding, which leaves through a second door lower down the same wall, opened by a different credential.](figures/whitepapers/atlas-verdict-path.svg "Two doors in one wall. A finding comes in through the first; the verdict goes back out through the second, which a different credential opens.")

### Why unable to judge matters

No evidence, evidence that only repeats the claim, evidence about something else, evidence
too old, an unreadable reply, a submitter who also could not tell: each ends in unable to
judge, with the reason beside it.

An assessor whose confident answers and whose guesses look the same is soon ignored. Keeping them apart is what makes a concurrence worth reading. The submitting platform
reads the verdicts back on the same connection it used to submit, and a signed-in person
reads them on the Judgements page.

## How the rest of CORE supports the oversight story

The Intelligence pages say what is wrong. Four other parts of CORE say whether to believe
it, who may act on it, and what happened afterwards. Each is covered in full in the [main
CORE paper](/blog/whitepapers/runink-core/); here is what each adds to oversight.

**DataEx › Judgements: the second opinion.** This page shows the latest batch of submitted
findings, each with CORE's verdict, and the history of the judge's runs. Verdicts are four
words on four lines, never a score. "Nothing submitted" and "never judged" are said in
those words, never shown as agreement. A reviewer sees at a glance which findings an
independent assessor backed, which it disputed, and which still need a person.

**DataEx › Trust: Harness, Guardrails and Policy.** The Harness lists what CORE has found
wrong, worst first, each with its evidence and a proposed fix. From there a person can
start an agent, file an issue, or acknowledge the finding. Guardrails & autonomy sets, for
each of those actions, whether it is switched off or waits for a person's click, and every
action starts at a person's click. Hard limits drawn from rules CORE already enforces keep
some findings at a person's click whatever the setting, and every change to a level is
written to the audit record before it takes effect. The Policy page shows who may do what:
which named lists of people are in force, and your own standing on each.

**DevEx › Audit chain: a record in which any edit shows.** Every change a person makes in the
console is recorded with the time, the person, the action, what it touched and the
outcome. Each record is tied to the one before it, so a record removed or altered breaks
the chain. The page opens with a Verify now check that walks the chain link by link, and
anyone signed in can run it, even a person not allowed to read the records themselves.
Refused attempts are recorded too. In an incident review, the refusals are often the more
telling half.

**DataEx › Agents: who does the work.** This page lists every agent CORE knows, each fact
once: CORE's own agents, the agents inside the company's Runink applications, and a
register of the company's other agents. For each it shows the model it uses, its limits,
the screening rules applied to what it writes, and whether it is reporting. The register of
other agents is a list of facts only; CORE never calls, polls or sends data to an agent on
it. An auditor asking "what automated workers touch our data, and under what limits?" gets
one page as the answer.

## For finance, operations and compliance leaders

### For finance and procurement

Finance is asked to state what was committed, what was spent and what went on the books,
and to be right. Procurement is asked to confirm that what was bought was bought on the
terms agreed. Both are questions of matching records that ought to agree.

Start at the **CFO dashboard** for unapproved and over-approved spend. Follow a line into
**CapEx lineage** to see where it began. Use **Business rules** to see who owns each
check, and **Remediation** to approve a fix with a dry run in front of you. **Sources**
answers which systems the figures came from and under whose account.

### For operations and project leaders

Operations leaders are judged on whether the plan happened, and how soon a departure was
noticed.

The **Analyst dashboard** shows readiness for Go-Live and the long-lead purchases that
threaten it. The **PMO dashboard** shows which initiatives are at risk. **Playbooks**
turn a recurring finding into a routine that starts itself and waits for a person where it
should.

### For compliance, risk and security

You are not asked whether controls exist. You are asked to show they worked, throughout a
period, and what happened when they did not.

**Every record is checked, not a sample.** The rule book runs on every record at every
load, so the exceptions are named items rather than an estimated rate.

**Each exception carries its handling.** The finding, the rule, the dry run, the decision,
who made it and when. That sequence is the evidence, written as the work happens.

**The record can be checked end to end.** The **Audit chain** proves the record is whole,
and anyone signed in can run the check.

**Two people for every change that matters.** Rule changes, fix decisions, playbook
activation and playbook approvals all need a second person, and CORE enforces it.

**Nothing reaches your systems by accident.** Only an administrator's confirmed action
reaches a source, and only to read. A security reviewer can test this in an afternoon:
sign in as somebody not on the list, try to change a source, watch the refusal by name, and
read the record it left.

**Is our material used to train a model?** No. The model is a set of files read from disk
on the company's own machine. There is no training step, no step that sends material out
to be trained on, and no account with a model provider for it to go to. A published list
of outside AI libraries and their addresses is checked against the source before every
change is accepted, and a change that added one would be refused.

## Continuous versus periodic: a comparison

| | Periodic, manual review | The Intelligence pages, with CORE behind them |
|---|---|---|
| **Records examined** | A sample, chosen to estimate a rate | Every record, at every load |
| **When a finding appears** | After the period closes | When the records are loaded, while the decision is open |
| **What a finding tells you** | That the group goes wrong at some rate | That this record breaks this rule, in this way |
| **Remedy open** | Recovery | A decision: hold, query, re-approve or go ahead |
| **Changing a rule** | One person edits a setting | Proposed with a reason, decided by a second person, recorded |
| **Approving a fix** | Made directly in the source | Dry run first, then a recorded decision by the rule owner |
| **A figure nobody could measure** | Often shown as zero | Shown as not measured, with the reason |
| **Confidence in a submitted finding** | Worked out again by each reader | An independent verdict, with its reason |
| **Evidence for an auditor** | Built by hand after the request | Written as the work happens, checkable end to end |
| **Under pressure** | Slips when the company is busiest | Runs at every load, whatever the workload |
| **What the company can say** | Controls operated during the period | Here is every exception, when it was found, what was decided, and by whom |

The last row is the one that matters to a regulated buyer. The two statements are not a
stronger and weaker version of one claim. They answer different questions, and only one
of them is the question the regulator asked.

## What it is worth, computed on your own numbers

Every buyer asks what this returns. Neither company has a customer measurement to quote,
so what follows is the method instead: every input named, every input read from your own
systems, and no value anywhere in it.

### What actually moves

Checking every record does not make a bad transaction good, and it does not improve a
supplier's terms. What it moves is **the gap between an event and the notice of it**, and
through that gap, which remedies are still open when somebody looks. The value is the
difference between the remedy open at today's moment of discovery and the remedy open at
the earlier one.

### The four inputs, and where to read each

**One: your present gap.** Take the last four quarters of findings from your review team:
audit exceptions, control failures, reconciliation breaks, invoice disputes. For each,
note the date of the event and the date it was first recorded as found. The middle value of
those gaps is your present gap.

**Two: what grows inside the gap.** For each kind of finding, the amount that grows while
nobody looks: a charge that keeps running, a commitment still being drawn on, an
overpayment that repeats each month. Read it from the ledger. Record nothing for the kinds
that do not grow. A one-off overpayment does not grow, and treating it as if it did is the
most common way this sum gets inflated.

**Three: the share where earlier notice would have changed the decision.** Ask the people
who worked last year's findings: had this arrived in the week of the event, was a different
action open, and would we have taken it? The honest answer is often no. Only the "yes"
share counts.

**Four: what building evidence costs you.** Count the evidence requests answered in the
last four quarters. For each, count the person-days spent and who spent them. Then count
how many of those days made the next request shorter.

### How they combine

| | What it is | How you get it |
| --- | --- | --- |
| Add | **Exposure you can recover** | What grows per day for each kind of finding × the days the gap would shrink by × the share where earlier notice changes the decision |
| Add | **Evidence saving** | Person-days on evidence requests per year × the part of that work that is assembly |
| Subtract | **Cost** | Licences + machine capacity + the named owner's time + connecting the systems read |

Add the first two, subtract the third, and divide the yearly result by the monthly cost.
That gives a payback period. This paper does not state one, because both sides belong to
you.

### What would make the answer wrong

**Counting the same money twice.** A charge avoided and a credit recovered on the same item
are one benefit.

**Crediting a decision nobody would have taken.** Input three exists to stop this.

**Using a denominator from the process that misses things.** If the count of findings comes
from the same sampling you are trying to replace, you measure the sample and call it the
whole.

**Comparing across a period when something else changed.** Choose a period in which this is
the only change.

**Assuming the gap closes to nothing.** It closes to how often records are loaded plus the
time a person takes to read the queue. Use a reading time measured in your own first
weeks.

### Record the starting point before anything is connected

Write down three things in the first week: your present gap, the person-days spent on the
most recent evidence request, and how many findings a period produces today. Once the
pages are running, the thing that would tell you is the thing that changed. Both companies
would rather be judged on that measurement than on any figure either one publishes.

## What it is built on, and why that matters

### The reasoning runs on your hardware

CORE runs its own model on machines the company owns. The judge and every agent that uses
a model are served by it. No outside service is called for reasoning.

**So the security review becomes a description.** The question that stalls these
evaluations, "where does our information go?", has a short answer: to a machine you own,
and it stays there.

**And the cost has a different shape.** Because the model runs on the company's hardware,
the cost of reasoning does not rise with each item examined. That matters here, because the
point is to examine every record rather than a sample. Budgeting becomes a question of
capacity, settled once, rather than a bill that grows every month.

### The records stay there too

The capital records, rule decisions, playbooks, the audit record and the console's own data
are held on the company's own systems and encrypted there. There is no outside database
holding company information.

### Every change has a name on it

Reading is open to anyone admitted. Every change needs a named person on the right list,
and with no sign-in configured, a change is refused outright, because there would be nobody
to attribute it to. Every attempt is recorded, including refusals.

**So assurance costs what the work costs.** Being able to say who did what, when and why is
paid for by the system as it works, not by a person building evidence after the question.

## Who this is for, and the next step

### Who it is for

**The company whose written rules and enforced rules have drifted.** The test: pick a rule
you are sure about, and try to find out, without asking the person who built the system,
whether software enforces it, a person does, or neither does. If that takes more than an
afternoon, this is the problem the Intelligence pages address.

**The company whose review team samples what it cannot inspect.** The test: ask your
review team what share of transactions it examines.

**The company that builds evidence by hand.** The test: count the weeks your last evidence
request took, and how many of them made the next one shorter.

**The company whose information cannot leave its own systems.** For these buyers, where the
model runs is not a preference. It is the condition for the conversation to happen at all.

**Who evaluates it, and what each looks at.** The finance lead looks at the CFO dashboard
and CapEx lineage. The project lead looks at the Analyst and PMO dashboards. The data lead
looks at the DQ overview, Lineage and Resolve. The compliance lead looks at Business rules,
Remediation and the Audit chain. The security lead looks at Sources, Resolve, the refusals,
and where the model runs.

### A note on numbers

This paper carries no outcome figures of any kind: no savings, no percentages, no
payback. What the pages are worth depends on your volume, your rules, how often you review
today and the shape of your systems. It can be measured in your own setting against your
own starting point, and the chapter on worth sets out how.

### The next step

Name one rule you believe is enforced and one set of capital records you match by hand.
Those two become the first test: load the records, read the findings, and see whether the
rule does what you think.

Two conversations, in either order.

For Atlas and the capital-oversight side: **logicalleap.io/atlas**.

For CORE, where it runs, and the second opinion: **paes@runink.org**, **runink.org**.
