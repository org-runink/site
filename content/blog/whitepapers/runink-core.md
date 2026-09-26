---
title: "Runink CORE — The operations layer for companies that keep their own data"
headline: "Run your software, your AI and your data on your own machines, and see all of it from one screen."
# The label the closing ask carries into the contact form, so an enquiry
# arrives naming the paper it came from. `product:` is not usable for this —
# two of the four papers are both "Runink CORE".
next_about: "The Runink CORE paper"
product: "Runink CORE"
subtitle: "The operations layer for companies that keep their own data"
description: "What Runink CORE is, who it is for, and what each part of its console does: Overview, DevEx, DataEx, Intelligence and FORGE, page by page, with the business value of each and what adopting it involves."
weight: 20
date: 2026-09-26T00:00:00Z
source_pages: 23
audience: "Executive, technology, data and risk stakeholders"
blurb: "The operations layer a company runs on its own machines. One console shows whether the platform is healthy and your changes shipped, what your AI models and agents are allowed to do, what your data holds and where spending goes wrong, and turns a written brief into a working application with a person approving each step."
deck: |
  **Runink CORE is the operations layer a company runs on machines it owns.**
  It keeps the company's software healthy, governs the AI models and agents
  that work inside it, watches the company's own data, and turns a written
  brief into a working application. Its AI model runs on those same machines.
  No outside AI service is called.

  It is for companies whose information has to stay under their own control,
  and whose small technical team looks after more software than any one
  person can hold in their head.

  **One console, five parts: Overview, DevEx, DataEx, Intelligence and FORGE.
  This paper walks through every page of it.** To see it on your own
  hardware, [book a consultation](/#contact).
register:
  - { page: 2,  title: "Executive summary" }
  - { page: 3,  title: "Why a company that keeps its own data needs this" }
  - { page: 4,  title: "How the console is arranged" }
  - { page: 5,  title: "Overview: is anything wrong, and where do I go next" }
  - { page: 6,  page_end: 8, title: "DevEx: is the platform running, and did our changes ship" }
  - { page: 9,  page_end: 11, title: "DataEx: can our models and agents be trusted" }
  - { page: 12, page_end: 13, title: "Intelligence: what our data holds, and where it goes wrong" }
  - { page: 14, title: "Resolve: what is in your data, and how it connects" }
  - { page: 15, title: "FORGE: from a written brief to a working application" }
  - { page: 16, title: "On every screen" }
  - { page: 17, title: "What it is built on, and why that matters commercially" }
  - { page: 18, title: "Who CORE is for" }
  - { page: 19, title: "What adopting CORE involves" }
  - { page: 20, title: "The commercial model" }
  - { page: 21, page_end: 22, title: "Answers to the questions we are usually asked" }
  - { page: 23, title: "The next step" }
---

## Executive summary

Runink CORE is the layer beneath a company's software. It runs that software on
machines the company owns. It shows one person, on one screen, what is happening
across all of it. It keeps a record of every change a person makes, and anyone
signed in can check that the record is intact.

It also runs the company's own AI. The language model CORE uses — the kind of
system that reads and writes plain English — runs on the company's hardware. The
automated helpers that review changes, sort reports and check rules use that
model too. Nothing is sent to an outside AI service. That one fact turns a
security review from a negotiation into a description.

CORE is a product in its own right, sold separately. Runink FACE and Runink
PULSE are distinct products that work together with it: where a company runs
them, CORE is the layer they run on.

CORE's console is split into five parts. Each answers one question.

- **Overview** — is anything wrong, and where do I go next?
- **DevEx**, short for developer experience — is the platform running as it
  should, and did our changes ship?
- **DataEx**, short for data experience — what are our AI models and agents,
  what are they allowed to do, and can their work be trusted?
- **Intelligence** — what does our data hold, how good is it, and where are
  spending or controls going wrong?
- **FORGE** — how do we turn a written brief into a working application, with a
  person approving each step?

Three habits run through every page.

**It says what it knows and what it does not.** A figure the console could not
read is shown as not known. It is never drawn as a zero. A screen that says
"nothing happened" when it means "I did not look" is worse than no screen,
because people make decisions on it.

**It asks before it acts.** The automated helpers propose. A person approves.
Nothing is filed, changed or published on the company's behalf until someone
with the right to decide has said yes.

**It keeps a second opinion.** Where a finding matters, an independent assessor
reads the evidence behind it before a person is asked to act. It can agree,
disagree or say it was unable to judge, and it never passes off the third as
the first.

The rest of this paper takes each part of the console in turn: what question
each page answers, who in the company uses it, what it shows, and why that is
worth something.

## Why a company that keeps its own data needs this

Most companies now run more software than any one person understands. It came
from different teams, vendors and years. Each piece has its own way of being
started, watched and changed, and its own idea of who may touch the company's
information.

That arrangement has three costs, and different people pay them.

### Nobody has the whole picture

The person on duty has a screen for each system and no screen for all of them.
When a customer says something is slow, finding out where takes longer than
fixing it. Half the tools show a zero when they mean they could not look. So
capacity nobody measured gets reported as spare, and work nobody counted gets
reported as idle.

### Every new thing rebuilds the same foundations

Each new application needs sign-in, somewhere to keep its secrets, a way to
reach company data, somewhere to run, something watching it, and a way to be
updated. None of that is what the team set out to build. All of it has been
built before, in the same building. The calendar fills with work no customer
sees.

### Your data leaves the building

The quick way to add AI to software is to send the material to somebody else's
service and read back the answer. That is a fast route to a demonstration and a
slow route to a contract. Once real customer records, contracts or claims are
involved, a security review asks where the information goes, who else can see
it, and what happens to it after. If the design sends it out, the honest answer
stalls the deal.

### What CORE changes

CORE provides the common foundations once, for every application: somewhere to
run, one way to prove identity, a way to reach company data, one place to look,
and a way to get changes made. And it does all of it on the company's own
machines, with the company's own model. The security question then has a short
answer that holds up: the information goes to a machine you own, and stays
there.

## How the console is arranged

The console has a menu down its left side. The menu is grouped by the question
each group answers, so a person goes to the part that matches the question they
have. Some groups have small headings inside them, such as *Cluster* or
*Trust*, to keep related pages together.

| Part | The question it answers | Who reaches for it first |
| --- | --- | --- |
| **Overview** | Is anything wrong, and where do I go next? | Anyone on duty; the operations lead |
| **DevEx** | Is the platform running as it should, and did our changes ship? | Platform engineers, the engineering lead, the security lead |
| **DataEx** | What are our models and agents, what may they do, and can we trust their work? | The head of data, the risk and compliance officers, the security lead |
| **Intelligence** | What does our data hold, how good is it, and where is money or control slipping? | The finance lead, the portfolio office, data stewards, analysts |
| **FORGE** | How do we turn a brief into a working application, with a person approving each step? | Product owners and the engineering lead |

Every page opens the same way: one status line with a single verdict, a
headline, where the reading came from and when it was taken. The detail sits
underneath. When a source could not be read, the status line says so and gives
the reason, rather than showing a colour that implies a verdict.

The same menu is on every screen. The console works in a browser on a desktop
and at phone width, and it speaks English, Spanish, French and Portuguese.

## Overview: is anything wrong, and where do I go next

**The question.** Is anything wrong right now, and which page do I open next?

**Who uses it.** Whoever is on duty, the operations lead at the start of the
day, and any manager who wants the state of things in one look.

**What it shows.** A strip of headline readings: how many customer and team
deployments are ready, how many of the platform's services are healthy, how many
times the automated helpers ran in the last week, and how often they succeeded.
Below that, a *Needs attention* list of open findings, worst first, each linking
to the page where it can be dealt with. Then the most recent helper runs, and
one line for each part of the platform — services, deployments and the AI
models — each a link to its own page.

At the foot of the page is **Ask CORE**, an assistant. A person types, or
speaks, a request in plain language: list what exists, tell me the state of that
one, create a deployment of this application for this team. The assistant
carries out the request with the same controls a person would use, and shows
each step it took. Only people with the right to create deployments can have it
create one.

**Why it matters.** The first hour of a problem is usually spent working out
where to look. This page removes that hour. It also stops the most common
dashboard lie: an unread source here is shown as unread, never as "all clear".
And because the assistant shows its working, a new team member can do a real
task on their first day and see exactly what it involved.

## DevEx: is the platform running, and did our changes ship

DevEx is short for developer experience. These are the pages for the people who
run the platform and change it. They answer two questions: is everything
running as intended, and did the change we made actually reach production?

### Cluster › Namespaces

**The question.** Is my service working, and if not, where does it break?

**Who uses it.** Platform engineers and whoever is on duty.

**What it shows.** A namespace is a named, walled-off area of the platform where
one service or one team's work runs. For each one, the page gives a verdict and
a one-sentence reason. Under it sit the running parts, recent warnings and
resource limits, each described first by what it means for serving customers
and only then by its technical name. A second tab, *Nodes & placement*, lists
each machine: whether it is available, whether it is set aside for one
application, how much processing power and memory it has, how much is already
claimed, and what is running on it.

**Why it matters.** "Why is this slow" and "why is this not running" get a
written answer instead of an investigation. And because every raw fact is
explained in plain terms, more people can safely take a turn on duty.

### Cluster › Instances

**The question.** What deployments exist, who are they for, and when do they
end?

**Who uses it.** The operations lead, the finance lead, and team leads who
requested a deployment.

**What it shows.** One row per deployment for a customer or a team: which
application, which team, what role, what state, whether it is ready, how much
computing capacity it is allowed, and when its lease runs out. A deployment
whose lease has ended is marked plainly, and one whose lease is close is
flagged. Opening a row shows the full record. Deployments are created from a
request — the assistant on Overview can take one — and carry an owner and an
expiry from the start.

**Why it matters.** Idle environments stop running for months because nobody
remembered them. Each deployment has an end date and a named owner, so its cost
has somebody to belong to, and removing it is the platform's job rather than a
person's.

### Cluster › Routing

**The question.** Can people reach each of our web addresses, and where does a
request actually go?

**Who uses it.** Platform engineers and the security lead.

**What it shows.** For each web address, the path a request takes, read left to
right: the front door that receives it, the service behind that door, how many
copies of the service are ready, and the program that finally answers. Each
route opens with a verdict and a reason. A route the console only read from the
written configuration is marked *declared*, and is never shown as serving until
the console has seen it serve.

**Why it matters.** When a site is down, the question is always "which hop
broke". This page names the hop. It also shows the security lead exactly which
doors lead to which services, from a live reading rather than a diagram drawn
last year.

### GitOps

**The question.** Does what is running match what we wrote down?

**Who uses it.** Platform engineers and the engineering lead.

**What it shows.** GitOps is the practice of writing down the intended state of
every application in a code repository and letting the platform make the
running state match it. This page lists every managed application and whether
it has caught up: in step with what was written, and healthy. If an update
failed, the reason is on that row.

**Why it matters.** "What is actually running, and which change produced it" is
a question every audit and every incident asks. This page answers it for every
application at once.

### Audit chain

**The question.** Who did what, when, and has the record been tampered with?

**Who uses it.** The security lead, internal audit and the compliance officer.

**What it shows.** Every action a person takes in the console is recorded: the
time, a sequence number, the person, the action, the thing acted on, the outcome
— succeeded, refused or failed — a line of detail, and where the request came
from. Refused attempts are recorded as well as the ones that went through. Each
record carries a fingerprint worked out from the record before it, so the
records form a chain. The page opens on a check: press *Verify now* and the
console walks the chain link by link and names the first record that was
edited, removed, inserted or moved. Anyone signed in can run that check, even
people who are not allowed to read the records themselves.

**Why it matters.** "Show me every change to this, who made it and on whose
authority" becomes a lookup, not a project. The evidence is collected as the
work happens, not pieced together afterwards. And the refused attempts, which
are often the most telling part of an incident, exist because something wrote
them down at the time.

### Session admins

**The question.** Who may read the full audit trail and end other people's
sessions?

**Who uses it.** The security lead and the platform owner.

**What it shows.** The list of session administrators for this installation.
Only people already on the list can see it or change it. The console will not
accept an empty list, since nobody could then put anyone back. Every change to
the list is recorded before it is made.

**Why it matters.** The people who can see everything are a short, named list
that lives with the installation. When someone leaves, removing them is one
edit, and the record of what they did stays attributed to them.

### Doctor

**The question.** Is the standing health check still watching?

**Who uses it.** Platform engineers and the operations lead.

**What it shows.** The doctor is a health check that runs on its own schedule,
apart from the machines it watches, so it keeps watching when they fail. The
page says which of four states it is in — watching, paused by hand, not set up,
or unknown because the console could not read it — and keeps those apart. It
shows the schedule, the recent runs and the item where the doctor reports what
it found.

**Why it matters.** A health check that was quietly paused looks exactly like a
healthy, quiet one. This page makes the difference visible, so the check that is
meant to catch failures does not fail silently itself.

### Metrics

**The question.** Are the platform's services ready, and is the console itself
well?

**Who uses it.** Platform engineers.

**What it shows.** How many of the platform's services are ready, the console's
own working readings such as memory in use and time since it started, and a
plain list of what is not measured, shown as gaps rather than as zeros.

**Why it matters.** A number on this page can be used for a decision because the
page never fills a gap with a guess.

### Agent runs › Runs

**The question.** What did the automated helpers do, and did their work reach
anyone?

**Who uses it.** The engineering lead and platform engineers.

**What it shows.** Every run each helper made, whether it was scheduled or set
off by an event, and whether it landed. A tab called *Schedules & arming* shows
when each helper runs, whether it is allowed to publish its work, and what its
last run delivered. A helper publishes only after a person has armed it, and
until then it runs and reports what it would have done. A run that finished
"green" but put nothing in front of a person is flagged, not shown as a
success. A third tab lists the longer coding sessions.

**Why it matters.** A team can watch a helper for a week and read what it would
have produced before any of it reaches a colleague. And a helper that has been
succeeding without delivering anything is caught, instead of looking fine for
months.

### Agent runs › Reviews

**The question.** What did each review find?

**Who uses it.** The engineering lead, the security lead and the compliance
officer.

**What it shows.** One card for each kind of review the platform runs, such as
code review, dependency risk, compliance and data governance. Each card gives
the latest verdict, when it last ran, the trend and what triggers it. Opening a
card shows the runs in progress and past runs, and a run's findings sorted by
severity, with the evidence and a link for each. A run whose findings were not
kept says so.

**Why it matters.** Reviews that run on a schedule are only worth something if
somebody reads the results. This puts every review's findings in one place, in
order of severity, with the evidence attached.

## DataEx: can our models and agents be trusted

DataEx is short for data experience. These pages are about the AI inside the
platform: which models run, which agents use them, what those agents are allowed
to do, and whether their findings hold up. An agent here means an automated
helper that reads material and proposes or takes a step. DataEx is also where
the connections to company systems, and the runners that reach them, are
created and looked after.

### Model cards

**The question.** Which AI models are we running, where did they come from, and
are they running what we think they are?

**Who uses it.** The head of data, the risk officer and the security lead.

**What it shows.** One card per model in service. A model card is a short,
standard record of a model: where it came from, the exact version and its
fingerprint, its licence, what it is intended for, its known limits, and the
evidence from testing it. Beside the card sits what is actually running. The
health mark is green only when the two agree.

**Why it matters.** When a regulator, a customer or your own board asks which AI
you use and why, the answer is on one page, and it is checked against what is
live rather than copied from a document.

### Agents

**The question.** Which agents exist, which model does each use, and what is
each allowed to do?

**Who uses it.** The head of data, the risk officer and the engineering lead.

**What it shows.** Every agent CORE knows about, each fact shown once. CORE's
own agents appear with their purpose, whether they are switched on, which model
they use, and the limits they work under. The agents inside the Runink
applications appear with their health, their model, and the written rules each
one applies to its answers. Agents the company registers itself appear too. At
the top, once for the whole page, is the boundary: who may arm agents, how much
agents may do on their own, and the hard limits that bind them, with links to
the pages that set each one.

**Why it matters.** Most companies adopting AI cannot say how many agents they
have or what each is allowed to do. This page is that inventory, kept current by
the platform rather than by a spreadsheet.

### Inference

**The question.** How are our models being used, and by whom?

**Who uses it.** The head of data, the finance lead and platform engineers.

**What it shows.** Inference is the act of running a model to get an answer. The
page shows the model router — the single entrance every application and agent
uses to reach a model — and the model cards again, beside usage: how much text
each application's agents have sent through the models, and the computing
capacity allocated to each deployment. Anything not measured is shown as a gap
with its reason.

**Why it matters.** Because the models run on the company's own hardware, using
them more does not open a bill that grows with every question. This page shows
where that capacity goes, so sizing is a reading, not a guess.

### Connections

**The question.** Which of our systems does CORE know how to reach, and who may
change that?

**Who uses it.** The head of data, platform engineers and the security lead.

**What it shows.** Every connection to a company system, one row each: what
kind of system it is, whether its credentials are in place, which runner
reaches it and that runner's state, and when it was last tested. This is the
one place a connection is created, changed, re-keyed, tested or removed; the
other pages that need one open the same dialog. Creating one takes three
steps: choose the kind of system and fill in its form, choose the runner that
will reach it, then review, test and save. The test asks one question, whether
the system answers, and only after a confirmation. Credentials are held apart
from the settings and are never shown back once saved. Removing a connection
names every other connection that shares its credentials first. Nothing on the
page reaches a system when it opens.

**Why it matters.** When each application reaches company systems its own way,
the same warehouse ends up connected several times, under several accounts.
One list, one dialog and one record turn "what reaches our finance warehouse,
and under whose account?" into a screen. Only people on an explicit list may
change a connection, and every attempt, refusals included, is recorded.

### Runners

**The question.** What reaches our data sources on CORE's behalf, and is it
healthy?

**Who uses it.** Platform engineers and the security lead.

**What it shows.** A runner is the worker that reaches out to a company data
source when an administrator asks it to. The Runink-managed runner is listed
first and cannot be revoked. A company can also add runners of its own, on its
own network: an administrator gives each one a name and an address, and the
runner uses a one-time ticket to obtain its certificate. CORE then connects to
it at that address, and both ends prove who they are before anything moves.
For each runner the page shows whether it is connected, when it was last seen,
its version, when its certificate expires and how much work it has in hand.
Its health is measured on the runner itself, never by contacting a data
source. An administrator can connect to a runner now, issue a new ticket,
change its address or revoke it, each after a confirmation that says what will
happen.

**Why it matters.** The security lead can see every worker allowed to touch
company data, where it runs, and who can add or remove one. Checking their
health never touches the data itself.

### Trust › Harness

**The question.** What is wrong, and what can CORE do about it?

**Who uses it.** The operations lead, the security lead and the compliance
officer.

**What it shows.** Findings about risk and compliance, each with its evidence
and a proposed remedy. Under each finding are only the actions CORE can really
take: start a named helper, file a tracking item, or acknowledge the finding.
Every action is confirmed first, then written to the audit chain before it
happens, and its result is shown in place. An action the console cannot take
here is shown greyed out with the reason, rather than hidden.

**Why it matters.** Operations know-how usually lives in a few heads. Here the
remedy sits next to the reading, so the knowledge belongs to the company rather
than to whoever is on call, and a wider group can take a turn on duty.

### Trust › Guardrails & autonomy

**The question.** How much may the platform do on its own?

**Who uses it.** The security lead, the risk officer and the platform owner.

**What it shows.** The kinds of action the Harness can take, each with its level
of autonomy and any overrides for particular areas. Every kind starts with a
person approving each act. Above those settings sit hard limits that no setting
can pass. Each kind also shows its recent activity, read from the audit chain.

**Why it matters.** Autonomy becomes a dial the company sets, kind by kind, and
can read back at any time. It is a written setting with a record behind it, not
a decision made once at installation and forgotten.

### Trust › Policy & ReBAC

**The question.** Who may do which kind of thing on this console?

**Who uses it.** The security lead and internal audit.

**What it shows.** ReBAC stands for relationship-based access control: rules
about who may act on what. The page lists the named groups of people allowed to
sign in, to arm agents, to change data connections, to make changes on the
Intelligence pages, and to end other people's sessions. For each list it shows
how many people are on it, what happens if it is left empty, and whether *you*
are on it — never who else is. It also shows the access granted inside each
deployment.

**Why it matters.** Being signed in and being allowed are two different things.
Plenty of people should be able to see that a connection to the finance
warehouse exists. Far fewer should be able to change it. This page makes that
difference readable.

### Trust › Secrets & PKI

**The question.** Does every part of the platform trust the same authority, and
for how much longer?

**Who uses it.** The security lead and platform engineers.

**What it shows.** Every service inside the platform proves who it is to every
other service before any information moves, using short-lived certificates from
one shared authority. PKI is the name for that system of certificates. The page
gives one verdict — does every part agree on the same authority — then the
authority's fingerprint, its validity window and the time left. If any part is
out of line, the repair is stated above the evidence. It also shows how the
console's own sign-in is set up.

**Why it matters.** An expired certificate stops services talking to each other,
often without an obvious error. This page shows the expiry before it arrives,
and a single verdict replaces comparing fingerprints by eye.

### Judgements

**The question.** Does an independent assessor agree with the findings we have
been handed?

**Who uses it.** The risk officer, the compliance officer and internal audit.

**What it shows.** Findings sent in by an outside assessment platform, each with
CORE's own verdict: agree, disagree, or unable to judge, each on its own line and
never blended into a score. "Nothing was sent in" and "never judged" are said in
those words, and never read as agreement. The page also lists the assessor's
recent runs.

**Why it matters.** A finding checked by the same system that raised it is not
checked. A second, separate reading before a person acts means people spend
their time on findings that hold up, and can see which ones were not assessed.
The joint paper on CORE and Atlas describes how that assessor reaches a verdict.

## Intelligence: what our data holds, and where it goes wrong

The Intelligence pages look outward, at the company's own data and spending.
Most of them are the Atlas oversight pages, built with our partner Logical Leap,
running inside CORE on CORE's own data. Resolve, which reads the structure of
the company's systems, is a Runink capability that CORE shares with FACE.
Every figure on these pages is computed from the company's own records and
feeds, or shown as absent with the reason.

This section summarises each page. The joint paper,
[Runink CORE and Atlas](/blog/whitepapers/runink-core-atlas/), covers them in
depth.

### The three dashboards: Analyst, CFO and PMO

**The question.** Where does our capital spending stand, from my seat?

**Who uses it.** The capital governance analyst, the chief financial officer and
the director of the portfolio or programme office.

**What it shows.** Three views of the same information. The *Analyst dashboard*
shows how ready projects are and what needs checking. The *CFO dashboard* shows
the financial summary: approved budget, requests and spending. The *PMO
dashboard* shows the portfolio, where a project maps to an initiative the
platform already tracks.

**Why it matters.** Finance and the programme office argue from the same figures,
worked out the same way, rather than reconciling two spreadsheets first.

### DQ overview and Progress

**The question.** How good is our data, and is it getting better?

**Who uses it.** Data stewards and the head of data.

**What it shows.** DQ stands for data quality. The *DQ overview* summarises the
data sources, the business rules checked against them, and the open issues. The
*Progress* page compares recent data governance checks over time, so a steward
can see whether open issues are falling.

**Why it matters.** Data quality stops being an opinion. It becomes a list of
issues that goes down, or does not, with each check kept.

### CapEx monitor and CapEx lineage

**The question.** Does our spending match what was requested and planned?

**Who uses it.** The capital governance analyst and the finance lead.

**What it shows.** CapEx means capital expenditure. The *CapEx monitor* takes the
three feeds a company uploads — the plan, the requests and the spending — and
checks them against each other with a published rule book, in one view. *CapEx
lineage* traces any finding back and forth along that chain: from spending, to
the approval, to the plan.

**Why it matters.** Money that leaves before anyone checks is the costly kind.
Checking as the feeds arrive, rather than at the quarterly review, moves the
check closer to the decision.

### Perspectives

**The question.** Who cares about capital governance, and what does each of
them need?

**Who uses it.** Anyone setting up the practice, and the executives it serves.

**What it shows.** A framework page: the stakeholders who read capital
governance and what each one focuses on.

**Why it matters.** It gives a new programme a shared map of whose questions it
has to answer.

### Business rules and Orchestrator (playbooks)

**The question.** Which rules do we enforce, and what happens when one fails?

**Who uses it.** The compliance officer, rule owners and the head of data.

**What it shows.** *Business rules* lists the capital rule book: each rule's
status, effect, owner and findings. A change to a rule is proposed by one person
and approved by another. The same page shows whether the rules built into the
software still match the policy that was signed off. *Orchestrator* is where
playbooks are written: a playbook is a set of steps that runs when a finding
appears, such as starting a named helper. A playbook can be drafted from the
rules that fail most often, and then edited by a person.

**Why it matters.** Written rules drift from enforced rules quietly. Two people
on every rule change, and a standing check that code matches policy, make that
drift visible.

### Lineage and Remediation

**The question.** Where does this data come from, and what are we doing about
the problems in it?

**Who uses it.** Data stewards, the head of data and the compliance officer.

**What it shows.** *Lineage* draws the path from each source system to the
reports built on it, with the trouble spots marked. It also shows the
relationships Resolve read from the systems themselves: the keys a source
declares between its tables, the domains that span more than one source, and
which datasets are read and written. *Remediation* is the queue
of proposed fixes. For capital findings a person can approve, test or dismiss
each one, and every decision is kept as an audit trail. An approved fix is a
recorded decision; the change itself is made at the source system.

**Why it matters.** People trust a report more when they can see where its
numbers came from. And every fix decision has a name and a reason attached.

### Resolve

**The question.** What is actually in our systems, and how does it all connect?

**Who uses it.** The head of data, data stewards and the security lead.

**What it shows.** Resolve reads the structure of the company's systems when an
administrator asks it to, and draws them as one map of business domains and the
links between them. It has its own chapter after this one, because several
other pages are built on what it reads.

**Why it matters.** Lineage, the data-quality checks and the personal-data
checks all start from what Resolve recorded, so the map a steward reads and
the checks an auditor reads describe the same estate.

### Sources and Settings

**The question.** Which systems may CORE read, and who may change that?

**Who uses it.** The head of data and the security lead.

**What it shows.** *Sources* shows one card for each system CORE is connected
to: the business domain it was grouped into, whether it answered when last
checked, and a switch that grants it to the Intelligence workspace. Granting
records a permission without reaching the system. Connections themselves are
created and changed on DataEx › Connections, and each card links there.
*Settings* holds the workspace choices for the Intelligence pages, stored on
the server and recorded.

**Why it matters.** The security lead can answer "what reaches this system, and
on whose say-so" from a screen.

### Deploy lineage

**The question.** Did my change ship?

**Who uses it.** Developers and the engineering lead.

**What it shows.** For each change, the stages it passed through: merged,
reviewed by the helpers, built, stored, rolled out and running. A stage that
could not be measured is shown as a gap. A change the platform does not
recognise is shown as unmeasured, never as "did not ship". This is about
software releases, not data; data lineage has its own page above.

**Why it matters.** "Is my fix live?" is one of the most asked questions in any
engineering team. This page answers it without a message to the platform team.

## Resolve: what is in your data, and how it connects

Most companies believe they have an inventory of their data, and on
inspection do not. The list was drawn once, by hand, and the systems moved on
without it. Resolve builds that inventory from the systems themselves, when an
administrator asks, and keeps nothing a security reviewer would object to.

Resolve is one capability that Runink CORE and Runink FACE share: the same
page, doing the same work, in both products. In CORE it sits in the menu under
Intelligence › Resolve.

### What it lets you do

There are four actions. Each one is started by a named administrator, and
each asks for a confirmation that says what will be reached and what will be
kept.

- **Test** a source: does it answer?
- **Explore** a source, to record its structure: its datasets and columns, the
  type each column is declared as, the keys that link its tables, and row
  counts where the source states them. It also records which columns the
  source itself marks as personal data, and whether it masks them. Where the
  source can count them, Explore notes how many values in a column are empty
  and how many are different.
- **Read access patterns** over a window the administrator chooses: how many
  times each dataset was read and written, and by how many distinct accounts.
  These are counts. The accounts are never named.
- **Map the estate** — the estate being every system that holds company data.
  The map covers the sources granted to the Intelligence workspace, or every
  source Resolve can read when none are granted.

### How the map is made

**It works out what each dataset is about.** Not which system it came from,
but what it *means*: customers, orders, payments, products, staff. It reads
that from the names of the tables and columns. So a customer table in the
billing system and a customer table in the support system land in the same
business domain, without anyone keeping a mapping by hand.

**It draws the links, and says what each one rests on.** The result is best
pictured as a mindmap of the company's data: datasets fall into domains, and
the lines between them are the real relationships. Every line is marked with
its evidence. It was *declared* by the source, as a key the system itself
defines. Or it was *inferred*, from a declared key, from shared vocabulary or
from matching values. Or it is a *guess*, such as two rare columns with the
same name and nothing declared, and it is called a guess. There is no
confidence score to blur the three together.

**It puts what it could not read first.** A source that did not answer, or a
view it had no permission to see, is listed at the top with the reason the
source gave. Datasets that fit no domain are listed on their own, rather than
forced into one.

**It compares what is declared with what is there.** Where a source declares
a relationship and its data contradicts it, that is *drift*. Where the data
shows a relationship nothing declares, that is *shadow*. Where a declared key
points at something that is not in the estate, that is *missing*.

**The map is worked out by rules, not written by a model.** The domains, the
links and the comparisons come from fixed rules applied to names, declared
keys and counts. The same estate gives the same map every time, and a busy or
unavailable language model cannot change it or hold it up.

### What it keeps, and when it reaches a system

Resolve keeps structure and counts only. No cell value, sample row, smallest
or largest value, account name or credential is kept or shown. A credential
is opened for one call and then dropped. Every call only reads, and each has a
time limit.

Opening the page reaches nothing. The page shows what the last action
recorded, and only the four actions reach a source — never a timer, and never
a page load. Each action names its runner, the worker described under
DataEx › Runners: the one the administrator chose for that action, or the one
the source is set to use. Every action is written to the Audit chain with its
outcome, and refusals are written too.

### What it feeds

**Lineage.** When an action finishes, the relationships it read go onto the
Lineage page: the keys a source declares between its tables, the domains that
span more than one source, and which datasets were read and written.

**The data-governance checks.** CORE's data-governance helper assesses data
quality and personal-data exposure from what Explore and Read access patterns
recorded. On quality, it flags a column declared as never empty that holds
empty values, and a table with no declared primary key. On personal data, it
flags columns whose name and declared type mark them as likely personal data
and that carry no mask from the source, and such columns when more than ten
distinct accounts read them. Findings name the column, never a value in it.
These checks are rules, with no model involved, and they appear on Reviews
under data governance. A source nobody has explored is reported as not yet
explored, never as clean.

### Where the value is

**In an inventory that is read, not remembered.** The map comes from the
systems as they are today, on request, so it does not age the way a diagram
does.

**In evidence that is named.** A steward can tell a key the source declared
from a link the map inferred, and both from a guess, before relying on any of
them.

**In one reading behind several pages.** The map, the lineage and the
governance checks all start from the same recorded description, so they
cannot quietly disagree about what the estate holds.

**In a short security review.** The security lead can read, on screen,
exactly what was reached, by whom, on which runner, and what was kept.

## FORGE: from a written brief to a working application

FORGE is Runink's studio for making new software. It builds web applications and
pipelines — a pipeline here is a set of steps that moves and prepares data on a
schedule. It is served inside CORE, under CORE's sign-in, as its own part of the
menu.

### Studio

**The question.** How do we turn an idea into working software without handing
control to a machine?

**Who uses it.** Product owners, team leads and the engineering lead.

**What it shows.** A person describes what they want in plain words. The
company's own AI model proposes the steps on a canvas. Nothing is filed until
the person approves. An approved brief goes, word for word, to coding agents as
a work item, and the result comes back as a change for people to review.

**Why it matters.** The distance from "we need a small tool for this" to a first
working version gets shorter, and every step is visible and approved. The brief
never leaves the company's hardware.

### Applications

**The question.** What has FORGE made, and how far has each one got?

**Who uses it.** Product owners and the engineering lead.

**What it shows.** A read-only list of what FORGE has made, with the stages each
one has passed: the brief, the agent working on it, and the build. A short form
lets a person name a new web application or pipeline and say what it should do.
It then opens the Studio with the brief filled in. The Studio never sends it on
its own; the person pressing send is the approval.

**Why it matters.** Anyone can see the state of every request without asking
the team that builds it. And there is one path for a brief to enter, with a
person's approval at the door.

## On every screen

**Account**, at the foot of the menu, shows who is signed in and their active
sessions. A person can log out, or sign out everywhere at once. It also shows
the connection to the company's code repositories and which repositories the
platform manages.

**Language** is chosen from the console itself: English, Spanish, French or
Portuguese.

**Sign-in** is the company's own. People sign in with a company identity, access
can be limited to a named list, and everything a person does in the console is
recorded against their name.

## What it is built on, and why that matters commercially

Each property in this section describes how CORE is built. Each has a commercial
result, and the result is the reason to care.

### The model is yours

CORE runs its own language model on the company's own hardware. The assistant,
the automated helpers, the coding sessions and the FORGE studio all use it. No
outside AI service is called, and no outside account is needed. A published list
of outside AI libraries and their web addresses is checked against every change
to the software, and a change that brings one in is stopped.

**The result:** the question that stalls these deals — where does our
information go — has a one-sentence answer. It goes to a machine you own and
stays there. That answer opens doors to buyers who are otherwise closed: the
regulated insurer, the public body, and the company whose contracts confine its
customers' data.

**A second result is the shape of the cost.** The model runs on hardware the
company already owns, so the cost of asking does not rise with every question.
Budgeting becomes a capacity decision made once, not a usage bill read every
month.

### Everything else is yours too

Records, files, the authority that issues the platform's certificates, and the
secrets are all held on the company's own machines. No outside database run by
somebody else holds company information.

**The result:** the boundary is real. One outside service holding company data
would make the whole claim conditional, and a claim with an exception in it does
not survive a procurement questionnaire.

### It runs the same way everywhere

One command brings up the whole platform on a single workstation. One command
puts it onto the machines a company owns. The arrangement is the same shape in
both places.

**The result:** a shorter evaluation. A prospect can run the real thing on their
own hardware, without procurement and without a cut-down demo version. What they
evaluate is what they buy.

### It removes what it created

Deployments carry a lease and an owner. When the lease ends, the platform
removes them.

**The result:** the running cost stays tied to use. Capacity sized for a peak
that happened once does not keep running because removing it is nobody's job.

### It records what it does, and checks its own record

Every console action is recorded with the person's name, and the chain of
records can be verified by anyone signed in.

**The result:** assurance becomes a by-product of the work rather than a
project. The cost of answering who did what, when and why is paid by the system
as it runs.

## Who CORE is for

### The company that runs several applications with a small platform team

If a handful of people keep everything running, and each is the only one who
understands part of it, CORE helps from the first week. One screen, remedies
written next to the readings, and helpers that take the repetitive work.

The sign of fit: your operations knowledge lives mostly in people's heads, and
only a few names can staff the on-call rota.

### The company whose data cannot leave

Regulated finance, insurance, healthcare, public bodies, and any company under a
contract that confines its customers' records. For these buyers, running
everything on their own machines is the condition of the conversation.

The sign of fit: a promising evaluation has ended at the question "and where
does that run?"

### The company adopting AI that has to answer for it

If your board, a regulator or a customer asks which AI you use, what it may do
and who checked its work, the DataEx pages are the answer: model cards checked
against what is live, an inventory of agents with their limits, and an
independent second opinion on findings.

The sign of fit: nobody in the company can list every AI agent in use today.

### The finance and data leaders who need one version of the truth

If capital spending is checked at the quarterly review, and data quality is
argued rather than measured, the Intelligence pages put both on a screen that
finance, the programme office and data stewards share.

The sign of fit: two teams bring two different numbers to the same meeting.

### Who feels it, who sponsors it, and who signs it off

A purchase like this involves three people who are almost never the same
person. A promising evaluation often dies because the case is made to one of
them in the language of another.

| | Feels it daily | Sponsors it | Signs it off |
|---|---|---|---|
| **Several applications, small platform team** | The people on the on-call rota | The engineering or technology lead | The security lead |
| **Data that cannot leave** | Whoever answers the residency question each time it is asked | The executive who answers to the regulator | Compliance, data protection and the security lead |
| **AI that has to answer for itself** | The head of data | The chief risk or technology officer | Compliance and internal audit |
| **One version of the truth** | Analysts and data stewards | The chief financial officer | Internal audit |

### What each one should look at

- **The operations lead** opens Overview and the Harness, and asks whether the
  remedies are the ones they would have written.
- **The security lead** opens the Audit chain and presses *Verify now*, then
  reads Policy & ReBAC and Secrets & PKI, and checks where the model runs.
- **The head of data** opens Model cards and Agents, and asks whether that is
  the inventory they would give a regulator.
- **The finance lead** opens the CFO dashboard and Instances, and looks at how
  spending and computing capacity are tied to initiatives and owners.
- **The engineering lead** opens Runs, Reviews and Deploy lineage, and watches
  one helper for a week before arming it.

Each can reach their own answer on their own hardware, without committing to
anything.

## What adopting CORE involves

Five steps, in this order. Each one is worth doing on its own, and each answers
a question the next step assumes.

| | What you bring | The step | What it settles |
| --- | --- | --- | --- |
| 1 | One workstation | Run the whole platform on it with one command | Whether the screens can be trusted: which ones say they did not measure something |
| 2 | Machines you own and your sign-in arrangement | Put the platform on them with one command, in the same shape | Nothing new. Same screens, more room |
| 3 | One data source you would like to stop worrying about | Add it on DataEx › Connections, and read what Resolve shows about it | Whether CORE reads your data the way your security lead needs |
| 4 | Somebody outside the platform team | Have them request a deployment, and watch it expire | Whether useful work happens without the platform team in the loop |
| 5 | One code repository | Switch on one helper and watch it before arming it | Whether the helpers save real time, judged on what they would have published |

### Step one: run it on one machine

Download the control tool and run one command. The whole platform comes up on
the workstation: the applications, the model, the console and the full security
arrangement. Look at Overview, the Harness and the Audit chain first. Together
they show the honesty rule, the remedy habit and the record, which are what set
CORE apart from a dashboard.

### Step two: put it on machines you own

One command sets up the machines and installs the platform. From here the only
things that change are size and who has access.

### Step three: connect one real data source

Choose one system and add it on DataEx › Connections. Explore it in Resolve
and read what CORE kept about it: structure and counts, and no values. Then
sign in as someone who is not on the permitted list and try to change it. Read
the record the refusal leaves in the Audit chain. That is the interaction to show
your security lead.

### Step four: have someone else request a deployment

Ask someone outside the platform team to request one. It arrives with an owner,
an initiative for its cost, and a lease. Watch it remove itself when the lease
ends.

### Step five: switch on the helpers, one at a time

Start with the reviewer on one repository. Read what it would have said. Then
arm it. Add the others in the order that matches your pain: report sorting if
your inbound queue is the problem, the dependency sweep if outdated components
are, the compliance check if written rules and real controls have drifted apart.

### What you need on your side

- Machines you control, with room for the model. Ordinary processors work;
  specialist accelerator chips are used where they are present.
- One named person to own the platform. The operating model is built so that one
  owner and the console are enough for ordinary running.
- Your sign-in arrangement and the list of people allowed in.
- A decision about who may change data connections and who may arm agents. These
  are the policy decisions CORE asks you to make explicitly, and they are best
  made in the first week.

### How to see the value in your own records

Write down four readings in the first week, before anything changes, because
they cannot be recovered once CORE is running:

- **Specialist time.** For each person who is the only one who understands part
  of your estate, have them tally for one week the requests nobody else could
  answer. This should fall as Overview, Instances and the assistant take the
  routine questions.
- **Evidence effort.** The person-days your most recent audit or security
  questionnaire took to answer "who did what, and on whose authority". This
  should fall because the Audit chain collects that evidence as the work
  happens.
- **Forgotten capacity.** The environments running today, each with the date it
  was last used. This should fall because every deployment now carries a lease.
- **Security review length.** From your sales records, how long your recent
  security reviews ran from first questionnaire to sign-off. This should shorten
  because the question of where information goes has a short answer.

## The commercial model

Runink publishes its prices on the [pricing page](/pricing/). You pay for the
number of people who use the platform, and each person comes with an allowance
of computing capacity included. The console counts that allowance in its own
unit, so what you have and what you have used are stated in the same terms.

There are three levels: a shared level for a first team, a dedicated level for a
company running its estate on CORE, and an enterprise level for deployments you
host yourself on your own premises.

Two things follow from charging per person with capacity included.

**Using the software more does not cost more.** The model runs on the company's
own hardware, so a team that finds heavy use for the assistant, the helpers or
FORGE is not billed by the question.

**Capacity is tied to a purpose.** Every deployment carries an initiative and an
owner from the moment it is requested, so a finance conversation and an
engineering conversation can use the same figure.

## Answers to the questions we are usually asked

**Where does our information go?**
To machines you own. The model, the records, the files and the certificate
authority all run on your hardware. No outside service is called for AI.

**Is our material used to train anything?**
No. Nothing is sent out to be trained on, and there is no account with an
outside model provider for it to be sent to. What makes an answer specific to
you is that your own material is indexed on your machines and the relevant parts
are placed into the question when it is asked. Deleting a document removes its
influence completely, because nothing is left behind in the model.

**Do the automated helpers change anything without us?**
No. Each helper has its own switch. Each publishes only after a person has armed
it. The Harness takes an action only after a person confirms it, and records it
before it happens. FORGE files nothing until a person presses send.

**Who can change a connection to one of our systems?**
Only people on the list shown in Policy & ReBAC. Everyone else is refused, and
the refusal is recorded in the Audit chain with their name.

**How do we know the record has not been altered?**
Open the Audit chain and press *Verify now*. The console walks every record and
names the first one that was edited, removed, inserted or moved.

**How do we know what is actually running?**
GitOps shows, for every managed application, whether what is running matches
what was written down. Deploy lineage shows whether a given change reached
production.

**Which AI models do you use?**
Model cards list each one: where it came from, its exact version, its licence,
its intended use and the evidence from testing it, checked against what is live.

**Why should we trust a finding?**
Because you can check it. Every reading carries the moment it was taken and a
plain sentence explaining it. Remedies carry their reasoning. The assistant
shows each step it took. And an independent assessor gives its own verdict on
findings, and says when it was unable to judge rather than agreeing by default.

**What happens when it cannot work something out?**
It says so, and that is a distinct state. A figure that could not be read is
shown as not known. An assessment that could not be completed says so, and says
that this is not the same as a clean result.

**Can we try it without buying anything?**
Yes. One downloaded file and one command run the whole platform on a
workstation.

**Does it need special hardware?**
No. Ordinary processors work, and accelerator chips are used where present. What
a machine needs is room for the model, and the Model cards and Inference pages
show how much is reserved and used, so sizing is a reading.

**Can a company without a large platform team run it?**
Yes, and the operating model assumes it. One named owner and the console are
enough for ordinary running. Deployments come from a request and remove
themselves when their lease ends.

**How does it grow as we grow?**
By adding machines. A new machine joins the installation and starts taking
work, and the Namespaces page shows what landed where. A machine can be set
aside for one application so its work does not compete with anything else.

**What do we need to decide before starting?**
Who may change data connections, and who may arm agents. Everything else can be
decided as you go.

## The next step

The most useful thing to do with this paper is to see CORE running.

CORE runs on one machine, from one downloaded file, with one command. There is
no environment to set up for you and nothing to sign before you see it work. The
version on your workstation is the version that runs on your machines.

**In an afternoon,** open Overview and notice which readings say they have not
been measured. Open the Harness and read a remedy. Open the Audit chain and press
*Verify now*.

**In a day,** add one real data source. Try to change it as somebody who is not
on the permitted list, and read the record that refusal leaves.

**In a week,** put it on machines you own. Have somebody outside the platform
team request a deployment and watch it expire. Switch on one helper and read
what it would have published.

At the end of that week you will have your own answers, from your own hardware,
in your own words. That is the basis on which we would like to be judged.

### Talk to us

To see CORE on your own hardware, or to talk about your estate,
[book a consultation](/#contact) at runink.org/#contact, or write to
paes@runink.org.
