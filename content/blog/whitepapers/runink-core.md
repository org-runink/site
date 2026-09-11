---
title: "Runink CORE — The operations layer for companies that keep their own data"
headline: "One operations layer, on hardware you already own."
product: "Runink CORE"
subtitle: "The operations layer for companies that keep their own data"
description: "A whitepaper for executive, technology and risk stakeholders. What Runink CORE is for, who needs it, what it does, and what adopting it involves."
weight: 20
date: 2026-09-03T00:00:00Z
source_pages: 21
audience: "Executive, technology and risk stakeholders"
blurb: "The layer beneath a company's software that runs it, shows a named person what is happening across all of it from one screen, holds the connections that software uses to reach the company's own information, and carries changes from written to running."
deck: |
  Runink CORE runs your software, shows one named person what is happening
  across all of it from a single screen, holds the connections that software
  uses to reach your own information, and carries changes from written to
  running.

  **It runs on hardware the company already owns. The language model it reasons
  with is one the company runs itself.**
register:
  - { page: 2,  title: "Executive summary" }
  - { page: 3,  title: "The problem, in your terms" }
  - { page: 4,  title: "Who has this problem, and what it costs them" }
  - { page: 5,  title: "What CORE does about it" }
  - { page: 6,  title: "How it works, part one: running the software" }
  - { page: 7,  title: "How it works, part two: seeing what is happening" }
  - { page: 8,  title: "How it works, part three: asking the platform" }
  - { page: 9,  title: "How it works, part four: turning observation into work" }
  - { page: 10, title: "How it works, part five: your data connections" }
  - { page: 11, title: "How it works, part six: governing the estate" }
  - { page: 12, title: "How it works, part seven: getting changes made" }
  - { page: 13, title: "The console, screen by screen" }
  - { page: 14, title: "What it is built on, and why that matters commercially" }
  - { page: 15, title: "Who CORE is for" }
  - { page: 16, title: "What adopting CORE involves" }
  - { page: 17, title: "The commercial model" }
  - { page: 18, title: "What it is worth, computed on your own numbers" }
  - { page: 19, page_end: 20, title: "Answers to the questions we are usually asked" }
  - { page: 21, title: "The next step" }
---

## Executive summary

Most companies now run more software than any one person can hold in their head. The
applications came from different places and different years. Each one has its own way of
being started, its own way of being watched, its own way of being changed, and its own idea
of who is allowed to touch the information it reads. When something goes wrong at four in
the morning, the first hour is spent working out where to look.

Runink CORE replaces that scatter with a single operations layer.

**It runs the software.** One command brings up everything on a laptop for evaluation. One
command puts it onto the machines a company owns. A new deployment for a new team is a
filled-in form, not a project.

**It shows one picture.** One screen answers what is running, on which machine, how healthy
it is, what it costs, which team that cost belongs to, what changed most recently, and who
changed it. Every panel says the moment its figures were taken, and says plainly when a
figure has not been read rather than drawing a zero.

**It turns observation into work.** CORE does not stop at a red light. For each thing that
needs attention it states the reason, the severity, and the specific remedy — and where the
judgement belongs to a person rather than a machine, it files the item under a heading that
says so.

**It holds the data connections.** The links to a company's own systems — its databases, its
warehouses, its business applications, its files, its cameras and its connected devices —
are created, tested and stored in one place, from a published catalogue of twenty-three
kinds of system. Credentials are held separately from settings and encrypted with a key that
is itself encrypted.

**It governs who may touch them.** A connection cannot be created, changed or removed by
anyone CORE cannot name. The set of people permitted to make those changes can be listed
explicitly. Every attempt, whether allowed or refused, is recorded with the person, the time,
the thing acted on, the outcome and the source it came from — and each record carries a
fingerprint computed over the record before it, so the whole sequence can be checked from end
to end.

**It helps get changes made.** A roster of automated helpers reviews proposed changes,
drafts corrections, sorts incoming reports, works out why an attempt to assemble the software
failed, sweeps the outside components the software relies on for known problems, checks the
rules a company has written down against what is actually in place, writes release notes, and
works longer coding tasks turn by turn. Each one is listed in the console, and
each one is switched on or off by a person.

All of it runs on a language model — the kind of system that reads and writes ordinary
English — that the company runs on its own machines. That single property is what turns a
security review from a negotiation into a description.

## The problem, in your terms

Ask three different people in the same company where a particular piece of software runs and
you will get three different answers, each partly right.

This is not incompetence. It is the ordinary result of software arriving over a decade from
different teams, different vendors and different decades of practice. Each arrival brought
its own way of being started and stopped, its own dashboard, its own alerting, its own
account model, and its own set of credentials for reaching the company's information.

The costs of that arrangement are specific, and they are borne by different people.

### The first cost: nobody has the whole picture

The person on duty at night has a screen for each system and no screen for the whole. When a
customer reports that something is slow, finding out whether it is slow, and where, takes
longer than fixing it. The evidence is spread across tools that do not agree on vocabulary,
and half of the tools show a zero when what they mean is that they did not manage to look.

A dashboard that renders an unread figure as zero is worse than no dashboard, because it
converts a failure to observe into a confident statement that nothing is happening. Decisions
get made on it. Capacity that was never measured gets reported as headroom. Work that was
never counted gets reported as idle.

### The second cost: every new thing rebuilds the same plumbing

When a team wants to ship something new, they discover that the new thing needs sign-in,
needs somewhere to keep its secrets, needs a way to reach the company's data, needs somewhere
to run, needs to be watched, and needs a way to be updated. None of that is the thing they
set out to build. All of it has been built before, several times, in the same building.

So the calendar for a new capability is dominated by work that produces no customer value,
and the company's estate grows another slightly different way of doing the same five things.

### The third cost: your data leaves the building

The obvious way to add reasoning to software today is to send the material out to somebody
else's service and read back the answer. That is a fast way to a demonstration and a slow way
to a contract. The moment a real customer's records, a real contract, a real claim or a real
patient file is involved, a security review begins, and the review asks a question the design
cannot answer: where does our information go, who else can see it, and what happens to it
after.

Deals stall there. Not because the software is bad, but because the architecture makes a
promise the company cannot keep on its own behalf.

## Who has this problem, and what it costs them

The pattern shows up wherever three conditions meet: information that must stay under the
company's control, a number of separate applications that must keep running, and a team small
enough that no one person can be the specialist for all of it.

### The logistics and supply-chain business

Shipment records, customs entries, carrier contracts and claims files are commercially
sensitive and often contractually confined. The operations centre runs continuously. A
warehouse system, a transport system, a yard system, an order system and a finance system all
hold part of the same truth, and reconciling them is a person's full-time job. When one of
them stops, freight stops.

The cost here is measured in decisions not taken in time: a temperature excursion noticed at
the end of the run instead of during it; a customs hold discovered when the demurrage invoice
arrives; a consolidation opportunity that expired before anybody saw it.

### The insurer and the regulated financial firm

Claims data, policy data and payment data sit under explicit rules about residency, retention
and access. Every reasoning step applied to them must be explainable after the fact, to
somebody who was not in the room.

The cost here is the audit. Not the annual event, but the standing overhead of being able to
answer, at any moment, who touched what, when, under whose authority, and on what basis. When
the answer must be assembled by hand from several systems, the assembly cost is paid every
time the question is asked.

### The public body and the defence supplier

Some information cannot leave a defined boundary at all. For these buyers the question is not
whether a capability is attractive but whether it can exist inside the boundary. Anything
that requires an outside service is excluded before evaluation begins.

The cost here is capability foregone. The organisation watches commercial peers adopt tools
it cannot consider.

### The software company selling into any of the above

This buyer has the problem twice over: once for their own operations, and once because their
customers ask them the same questions. Every enterprise sale runs through a security
questionnaire, and the questionnaire is where the momentum goes.

The cost here is sales cycle length, and it compounds. Each additional application in the
product line means another set of the same answers, another set of the same plumbing, and
another quarter before the thing is in front of a customer.

### What they all pay

Across these four, the recurring costs are the same three:

- **Time to the first useful thing.** Weeks spent rebuilding foundations before anybody sees
  a result.
- **Attention.** A permanent tax on the few people who understand how it all fits, who are
  therefore never available for the next thing.
- **Deals that do not close.** Not lost on price or features, but stalled on a question about
  where information goes.

## What CORE does about it

CORE takes the five things every application needs — somewhere to run, an identity, a way to
reach company data, a way to be watched, and a way to be changed — and provides them once,
for everything.

That is the whole idea, and everything below is a consequence of it.

### It provides somewhere to run

A deployment for a team, a customer or an evaluation is created from a request. The requester
names the application, the team it is for, the initiative the cost belongs to, an owner, and
how long it should exist. CORE creates it, attributes its cost to that initiative and owner,
stamps it with an expiry, and reports the address and the expiry time back on the request.

Two kinds are available. One carries sample information and seeds it on start, so a person
can log in and begin working immediately — useful for a demonstration, a trial or a training
session. The other is clean, for real work.

A tidying routine runs every fifteen minutes. It removes anything past its expiry, reports
that it did, and closes the request. When nothing is left in use, it removes the deployment
entirely. Idle capacity does not run overnight because nobody remembered it. Ending something
early is done by closing the request.

### It provides one identity system

Every service inside the platform proves who it is to every other service before any
information moves between them, using short-lived credentials that are replaced
automatically and issued from one shared authority. The console shows which authority each
part of the platform trusts, when it was issued, when it expires, how many days remain, and
whether every part agrees on the same one.

People sign in with a company Google identity, an administrator password, or both, and access
can be restricted to a named list of addresses. Everything a person does in the console is
recorded against them.

### It provides the connections to your data

The links to a company's own systems live in one place, described in one vocabulary, with
their credentials held separately from their settings and encrypted with a key that is itself
encrypted. This is covered in full on pages 10 and 11.

### It provides one place to look

One screen, described on pages 7, 9 and 13, answers the health, the placement, the cost, the
recent history and the current worry list for everything at once.

### It provides a way to get changes made

A roster of automated helpers, described on page 12, covers the repetitive parts of turning
an intention into running software: reviewing a proposed change, drafting a correction from
that review, sorting an incoming report, diagnosing a failed build, sweeping for risky
dependencies, checking claimed controls against actual ones, and working a longer coding task
turn by turn.

Each helper is listed in the console with what triggers it, and each is switched on or off
individually. None of them publishes anything until a person has armed it by typing its name.

## How it works, part one: running the software

### On one machine, in one command

CORE is built to run on one machine first. A single command brings up the whole thing on a
workstation: both applications and the server halves behind them, the shared model, the web
consoles and the full security arrangement, running directly on the machine. Nothing has to
be packaged up first, and the everyday commands do not ask for administrator rights.

So an evaluation costs nothing and needs no procurement. A developer's local setup is the
same shape as production rather than a simplified imitation of it, so what works locally is
far more likely to work when deployed. And a sales conversation can be followed by a working
system on the prospect's own laptop the same afternoon.

Naming one application instead of both runs only that one. One more command stops everything.

### On the machines you own

For shared use, one command sets up machines and installs the platform and the
applications onto them. The same command shape works whether those machines are in a company
building or rented from a cloud provider — the difference is a single option, not a different
procedure.

A rented set of machines can be brought up deliberately for a demonstration or a review
session and removed afterwards. CORE removes its own, which is the part usually left to a
person and therefore usually forgotten.

For the strictest environments, the platform runs entirely on the company's own premises,
including where there is no outside network connection at all.

### Where things land, and why

The console has a screen dedicated to placement, because "where does this run" is the
question that precedes almost every other operational question.

For each machine it reports whether it is available, whether it has been set aside for a
particular application, how many accelerator chips it carries — the specialist parts that
make model work faster — how much processing power and memory it has in total, how much of
that has already been claimed, and how many free slots remain.

Beneath each machine it lists what is running there — the platform's own services, and the
work belonging to each team — and for every single one it gives the reason that item landed
on that machine rather than another: the priority it was given, the reservations it was
permitted to cross, whether it was pinned to a specific machine, and any preference it
expressed for or against one.

Work that is waiting for a machine is listed separately, in the platform's own words, with
the reason it is waiting.

The result is that "why is this here" and "why is this not running" are questions with
printed answers rather than questions that start an investigation.

## How it works, part two: seeing what is happening

### One screen, honestly drawn

The console's first screen answers the state of everything.

It reports how many of the platform's own services are healthy against how many exist. It
lists the deployments belonging to each team, their state, the computing allowance each
holds, and when each expires. It shows what the automated helpers have been doing: how many
runs in the last seven days, how many succeeded, how many produced a finished piece of work,
and how long recovery took after a failure. It shows spending on computing capacity grouped
two ways — by initiative and by team — so a finance conversation and an engineering
conversation can use the same figure.

It reports the state of every connection to a company data system. It reports which models
are loaded, on what kind of hardware, with how much room to work. And it carries the
assistant described on page 8.

### The honesty rule

Every panel states the moment its figures were gathered, taken from the figures themselves
rather than from the clock on the screen. And every panel distinguishes between a measured
zero and a figure it did not manage to read.

This is a small design decision with a large consequence. A capacity figure that was never
read is displayed as not known, not as full headroom. A team's workload that could not be
listed is displayed as unknown, not as empty. A trend that has never been refreshed is
displayed as unmeasured, not as flat.

The effect is that the screen can be trusted for a decision. Nobody has to hold a private
mental list of which numbers on this dashboard are real.

### The detail behind each number

Each headline figure opens onto its own screen.

**Services.** Whether each of the platform's services is genuinely answering requests, rather
than merely started, plus the console's own working figures — how much memory it is using,
how much it has reserved, how many files it has open and how many tasks it is running at
once.

**Models.** For each loaded model: its name, the engine and version serving it, the exact
build running, the model itself, how it was compressed, how much text it can consider at
once and where that setting came from, whether it runs on ordinary processors or on
accelerator chips,
the memory and processing power reserved for it against the amount actually in use, how many
copies are ready against how many were asked for, and how many times it has restarted.

**Trust.** Which issuing authority each part of the platform trusts, its subject, its
fingerprint, its validity window, and how many days remain. A single line at the top states
whether every part of the platform agrees on the same authority, and if a read was partial it
says so rather than generalising from what it saw.

**Convergence.** For every managed application, whether what is running matches what was
written down, naming the source, the path, the intended revision and the exact change in
force.

## How it works, part three: asking the platform

The first screen carries an assistant.

A person types — or speaks — a request in ordinary language. Create a deployment of this
application for this team. List what exists. Tell me the state of that one. The assistant
carries the request out, using the same controls a person would use, and shows the steps it
took and how many tools it called on the way.

Two things about it matter commercially.

**It shows its working.** The reply is not a paragraph asserting that something was done. It
is the sequence of actions taken, visible, in order. A person can read it, check it, and
learn from it. Somebody unfamiliar with the platform can accomplish a real task on their
first day and see exactly what that task consisted of.

**It runs on the company's own model.** The request, and everything it touches, stays on the
company's hardware. Asking the assistant about a customer deployment does not send that
customer's name anywhere.

Spoken replies can be switched on and off. The assistant is reached from the same screen as
everything else, so the question and the evidence are side by side.

### What this replaces

In most companies, the equivalent of this assistant is a person: the one who knows the
commands. Requests queue behind them. They are interrupted constantly, which is why the
backlog of work only they can do never shrinks.

Two things change when the platform can be asked directly. Routine requests stop queueing
behind a specialist. And the specialist's knowledge stops being tacit — every action the
assistant takes is written down where the next person can read it.

### The same idea, applied to code

The same model that answers questions on the console also works longer tasks. A coding
session takes a code repository — the place a team keeps the source of its software — and a
task, works it turn by turn, records what it finds, and opens a draft change for a person to
review. It keeps its state, so a session can be paused
and resumed.

Every action that would alter something outside its working area — running a command, opening
a report, reaching out to a page — stops and asks a person first. If there is nobody to ask,
it declines. The default is refusal, not permission.

## How it works, part four: turning observation into work

A screen full of amber lights is not an operations practice. Somebody still has to decide
what to do about each one, and that decision is where the expertise is.

CORE has a screen for exactly that. It reports every category it watches as one of four
states — fine, worth attention, wrong, or not known — with a plain sentence explaining the
current reading. Where a category is not fine, it proposes a specific remedy, and the remedy
carries four things:

- **A title** — what to do, in one line.
- **The reasoning** — why that is the right thing to do given what was observed.
- **A severity** — high, medium or low, so a queue can be ordered.
- **An action label** — the name of the step a person takes.

And where CORE judges that the decision belongs to a person rather than to a machine, it says
so explicitly and files the item under a heading that reads "Needs a human".

That last category is the one that changes how the screen is used. A recommendation engine
that always recommends is quickly ignored, because its confident answers and its guesses look
identical. One that separates "here is the fix" from "this needs your judgement, and here is
why" earns the attention it asks for.

### What is watched

The categories cover the ground an operations lead would cover by hand:

- Whether the platform's own services are ready, and whether each application's own health
  checks are passing.
- Whether the machines have capacity, and whether machines set aside for one application are
  actually available to it.
- Whether the console itself requires sign-in.
- Whether every part of the platform agrees on the same issuing authority, and whether that
  authority's validity window is comfortable.
- Whether the models are ready, whether one of every size is available, and whether each has
  room to work.
- Whether what is running matches what was written down.
- Whether the standing health check is in place.
- Which automated helpers are switched on.

### Why this is the commercially interesting screen

Operations knowledge in most companies lives in a few heads and a wiki nobody updates. The
value of writing the remedy next to the reading is that the knowledge becomes property of the
company rather than of the person on call.

It also changes who can be on call. A rota that requires the deepest expertise on every shift
is a rota that burns people out and cannot be grown. A rota where the screen states the
observation, the reasoning, the severity and the remedy is a rota that a wider group can
staff — and where the escalations that do happen are the ones that genuinely need the
specialist.

## How it works, part five: your data connections

The applications above CORE are only as useful as their reach into the company's own systems.
CORE holds those connections, and it holds them in one place with one vocabulary.

### What a connection is

A connection has a name, a kind, the environment it belongs to — production, staging,
whatever the company calls them — the worker that uses it, and its settings. Its credentials
are stored separately from its settings, under a reference, and encrypted with a key that is
itself encrypted.

That separation is not decoration. It means the settings of a connection can be listed,
reviewed and reasoned about by people who are not entitled to the credentials, which is the
normal case: an architect wants to know that a warehouse system is connected and to which
account, and does not need the password to know it.

### The published catalogue

CORE publishes a catalogue of every kind of system it understands. For each kind it states
the settings that kind takes and the credential fields it expects. A person creating a
connection is therefore told what will be required before they start, rather than discovering
it one error message at a time.

Twenty-three kinds are in the catalogue today:

**Databases and analytical stores** — PostgreSQL, MySQL, Google BigQuery, Snowflake,
Databricks.

**Business systems** — SAP, Microsoft Dynamics 365, Salesforce, ServiceNow, HubSpot,
Guidewire.

**Operational systems** — inventory systems, inventory-management systems, order-management
systems, warehouse-management systems, transport-management systems, yard-management systems.

**Documents and files** — Microsoft Excel and spreadsheet files, Microsoft SharePoint,
document stores.

**Object storage** — Amazon S3, Google Cloud Storage, Azure Blob Storage, MinIO, Ceph and the
platform's own storage service, all under one kind, so moving between them is a settings
change rather than a rebuild.

**Live signals** — connected-device streams and camera feeds.

### Why one catalogue matters

When each application carries its own way of reaching the company's systems, the same
warehouse database ends up connected four times with four sets of credentials, four
expiry dates, and four people who each believe someone else is looking after it. Nobody can
answer "what reaches this system, and under whose account" without a survey.

With one catalogue and one place to hold them, that question is a screen. Which systems are
connected, of what kind, in which environment, using which named credential reference,
and whether each connection's kind is one the platform recognises and can describe.

## How it works, part six: governing the estate

Holding the connections in one place is the mechanical half. The governing half is who is
permitted to change them, and what record survives afterwards.

### Nothing anonymous

A connection cannot be created, changed or removed unless CORE can name the person doing it.
If the console has no sign-in configured, a connection change is refused outright, with the
reason stated: a change nobody can be named for would be unattributable, and an
unattributable change to a credential is not a change CORE will make.

This is a refusal, not a warning. The system declines to enter a state it cannot account for.

### An explicit list of who may

Beyond requiring a name, the set of people permitted to change connections can be listed
explicitly. Anyone outside that list is refused, by name, with the reason given.

The distinction between "signed in" and "permitted" is the distinction between an audience
and an authority. Plenty of people should be able to see that a connection to the finance
warehouse exists. Far fewer should be able to repoint it.

### A record of every attempt

Every attempt is recorded — the ones that succeeded, the ones that were refused, and the ones
that failed. Each record carries:

- the exact time and a sequence number,
- the person, by verified identity,
- the action, named,
- the thing acted upon,
- the outcome — success, refused, or failed,
- a detail line explaining it,
- and the address the request came from.

Each record also carries a fingerprint computed over the record before it. The records
therefore form a sequence that can be checked from end to end: given the first record and the
last, the intervening ones can be confirmed to be the ones that were written, in the order
they were written.

### The whole rule, on one page

![Somebody asks to change a connection, and the request meets two gates drawn as the same ring twice. The first ring holds a figure of a person: can CORE name this person? The second holds a tick: are they permitted to make this change? Each gate can refuse, and the two refusals are drawn as the same ring again — empty at the first gate, because a change nobody can be named for would be unattributable, and still holding the person at the second, because that one is refused by name. Where both gates pass, the settings and the credential are drawn as two shapes with a gap between them and only a dashed tie across it, the credential hatched over because it is encrypted. From all three outcomes a line runs down to the same place: a row of records, each joined to the one before it by a small ring, which is the fingerprint that lets the sequence be checked from end to end.](figures/whitepapers/core-authority-record.svg "Two gates, three outcomes, one record. Both refusals and the success land in the same place, and each record is fingerprinted against the one before it.")

The shape worth noticing is that both refusals and the success land in the same place. Most
systems record what happened; this one records what was attempted. In an incident
conversation the refused attempts are frequently the more interesting half, and they only
exist if something wrote them down at the time.

### What this is worth

Three conversations get shorter.

**The audit conversation.** "Show me every change to the connection into the claims system in
the last quarter, who made it and under what authority" is a query, not a project. The
evidence was collected as a by-product of doing the work, not assembled afterwards from
memory and log files.

**The incident conversation.** When something changed and nobody can remember what, the
record says. Including the refused attempts, which are frequently the more interesting half.

**The joining and leaving conversation.** When somebody joins, they are added to a list. When
somebody leaves, they are removed from a list, and everything they did remains attributed to
them. There is no shared account to rotate and no institutional memory of who knew which
password.

### The same discipline, applied to delivery

CORE keeps the same kind of record for its own changes: for each delivery, the exact change
it came from, what was intended, what was built — by name and content fingerprint — and what
actually ended up running, with a verdict for each target and the state before and after.
Records are kept for sixty days. "What is actually running, and which change produced it"
therefore has a printed answer.

## How it works, part seven: getting changes made

The last of the five common needs is the one that is usually left entirely to people: turning
an intention into running software.

CORE ships a roster of automated helpers for the repetitive parts of that. They run on the
company's own model. Each is listed in the console with what sets it off, how it is delivered,
and a switch of its own.

**reviewer** — reads a proposed change and posts what it found.

**fixer** — takes the reviewer's findings and opens a draft correction. It never puts a
change into the software itself; a person does that.

**triage** — reads a newly opened report, categorises it and labels it, so the morning queue
arrives sorted.

**self-heal** — when an attempt to assemble the software fails, reads the failing steps and
their output and posts one note naming the underlying cause. It advises; it changes nothing.

**risk** — sweeps every part of the platform daily for outside components the software
relies on that have known problems, and keeps one report current, ranked by what moving to a
newer version would resolve.

**compliance** — checks the applications weekly against the sets of rules the company says it
follows, and flags where a rule written down and the thing that actually enforces it have
drifted apart.

**curator** — produces release notes, documentation corrections, replies on open threads,
test scenarios, and security and compliance reviews, grounded in the actual state of the
software and remembering what it covered last time.

**deployer** — carries out the task an issue describes and posts the finished piece of work
back on that issue.

**users** — grants and revokes access to deployments.

**opsdoctor** — a standing health check every thirty minutes, with one specific, limited
repair it is permitted to perform.

**eval** — scores recorded runs against a set of answers already known to be right, judging
both the route taken and the result reached, and stops a change that would score worse than
the one before it.

**forger** — takes the oldest open brief for a new application, works it, and opens a draft
change on that application.

**session** — the longer-form coding session described on page 8.

### The arming rule

A helper's schedule is set from the console, and the console shows when each will next run.
A helper is permitted to publish its work only after a person has armed it by typing its name
to confirm. Until then it runs on its schedule and reports what it would have done.

That ordering — run first, publish only on explicit confirmation — is deliberate. It means a
team can watch a helper for a week and see exactly what it would have produced before any of
it reaches a colleague.

### What this changes about capacity

The work these helpers do is real work that somebody was doing. A first-pass review on every
proposed change. Sorting the inbound queue. Reading a failed assembly of the software closely
enough to name the cause. Checking the outside components for known problems. Keeping release
notes current. Checking that a rule written down still points at something real.

None of it is the interesting part of anybody's job, and all of it degrades quietly when the
team is busy — which is precisely when it matters. Handing it to something that runs on a
schedule and reports honestly means it happens in the weeks when nobody has time.

## The console, screen by screen

The console groups its screens under three headings, because the three answer different
people's questions.

### Platform

**Overview** — the state of everything, with the honesty rule of page 7 applied to every
panel.

**Models** — which models are loaded, on what hardware, with how much room to work, and how
what is running compares with what was reserved for it.

**Deployments** — the deployments belonging to each team: which application, which team, what
role, which stage of work, what state, what computing allowance, and when each expires, with
expiry shown in days or hours when it is near.

**Placement** — what runs on which machine, and why there, as described on page 6.

**Services** — whether each service is genuinely serving, plus the console's own working
figures.

### Delivery

**Create** — a name and a sentence describing what an application should do. That is the
whole form.

**Helper activity** — every run each automated helper has made, its output, the standing
health check, and the queue of coding sessions, grouped by how each helper is delivered.

**Helper schedules** — when each runs, whether it may publish, and what its last run
delivered, with the arming step described on page 12.

### Trust

**Security** — which issuing authority each part of the platform trusts, its fingerprint and
validity window, and whether every part agrees on the same authority.

**Convergence** — whether what is running matches what was written down, for every managed
application, naming the exact change in force.

**Measures** — the worry list with its remedies, as described on page 9.

### And on every screen

**Account** — who is signed in, which repositories are managed, which helpers are switched
on, and which cloud accounts are attached.

**Language** — the console ships in English, Spanish, French and Portuguese, chosen from a
picker on the frame rather than set at installation.

The console is available in a browser and as an Android application, so the deployment list
and the worry list are legible from a phone.

## What it is built on, and why that matters commercially

Every property in this section is a description of how CORE is built. Each one has a
commercial consequence, and the consequence is the reason to care.

### The model is yours

CORE runs its own model on the company's own hardware. Every automated helper, the console
assistant, and the coding sessions are served by it. No outside service is called and no
outside account is required.

**The commercial consequence is that the security review becomes a description.** The
question that stalls these deals — where does our information go — has a one-sentence answer
that survives scrutiny: it goes to a machine you own, in a building you control, and it stays
there. That answer opens categories of buyer that are otherwise closed: the regulated
insurer, the public body, the defence supplier, and the enterprise whose contracts confine
their data.

**The second consequence is the shape of the cost.** Because the model runs on hardware the
company already owns, the cost of reasoning does not rise with every question asked. A team
that finds a heavy use for it does not discover a new line item that grows with success.
Budgeting is a capacity conversation, held once, rather than a consumption conversation held
every month.

### Everything else is yours too

The same property extends through the platform. Records, files, the authority that issues the
platform's credentials, the secrets and the index that makes the company's own material
searchable are all held on the company's own machines. There is no outside database, run by
somebody else, holding company information.

**The commercial consequence is that the boundary is real.** A single outside service holding
company data would make the whole claim conditional, and a claim that everything stays inside
the company does not survive a procurement questionnaire if it has an exception in it. Making
the property complete is what makes it usable in a sales conversation.

### It runs the same way everywhere

The arrangement that runs on a laptop is the arrangement that runs on the company's machines.

**The commercial consequence is a shorter evaluation.** A prospect can be running the real
thing on their own hardware the same day, without procurement, without a rented environment,
and without a simplified version whose differences have to be explained later. What they
evaluate is what they buy.

### It removes what it created

Deployments carry an expiry. Rented machines are brought up on intent and taken down by the
platform. Environments created for a proposal are removed when the proposal closes.

**The commercial consequence is that the running cost stays tied to use.** The usual pattern
— a fleet sized for a peak that happened once, still running because removing it is somebody's
unscheduled job — does not establish itself, because removal is the platform's job and it is
on a schedule.

### It records what it does

Attribution on every change, a sequenced record with each entry fingerprinted against the one
before it, and a sixty-day delivery history.

**The commercial consequence is that assurance is a by-product rather than a project.** The
standing cost of being able to answer who did what, when and why is paid by the system as it
works, not by a person assembling evidence after the question is asked.

## Who CORE is for

### The company that runs several applications and a small platform team

If a handful of people are responsible for keeping everything running, and each of them is
the only one who understands part of it, CORE's value arrives immediately. One screen,
written remedies next to the observations, and a helper roster that covers the repetitive
work.

The measure of fit: if your operations knowledge is mostly in people's heads and the on-call
rota can only be staffed by three names, this is the problem CORE addresses.

### The company whose data cannot leave

Regulated financial services, insurance, healthcare, public bodies, defence suppliers, and
any company under a customer contract that confines their records. For these buyers, keeping
everything on their own machines is not a preference; it is the condition of the conversation
existing at all.

The measure of fit: if a promising evaluation has ever ended at the question "and where does
that run", CORE is built for the answer.

### The software company shipping more than one product

If your roadmap has a second and a third product on it, and each will need sign-in, secrets,
data connections, somewhere to run and something watching it, CORE provides all five once.
Each new product is then the part that is actually new.

The measure of fit: count how much of your last launch's calendar went to foundations rather
than to the thing being launched. That is the portion CORE addresses.

### The operations leader inheriting an estate

Where several systems have arrived over several years and no one document describes them,
CORE's placement and connection screens produce the inventory as a by-product of running the
estate, rather than as a survey that is out of date before it is finished.

The measure of fit: if you cannot currently answer "what reaches our finance warehouse, and
under whose account" without asking three people, CORE turns that into a screen.

### Who owns it, who sponsors it, and who signs it off

Those four descriptions are of companies. A purchase of this kind involves three people who
are almost never the same person, and the commonest way a promising evaluation dies is that
the case is made to one of the three in the language of another.

**The person who feels it** carries the estate in their head and is interrupted all day
because of it. They can describe the problem better than anyone and are usually too busy to
be in the room.

**The person who sponsors it** carries the budget and the consequence, and meets the problem
as a number in a monthly report rather than as an interrupted afternoon.

**The person who signs it off** can stop the purchase and cannot start it. They are answering
a question they will personally be held to, which is why they ask it the way they do.

| | Feels it daily | Sponsors it | Signs it off |
|---|---|---|---|
| **Several applications, small platform team** | The people on the on-call rota | The engineering or technology lead | The security lead |
| **Data that cannot leave** | Whoever answers the residency question each time it is asked | The executive who answers the regulator | Compliance, data protection and the security lead |
| **A software company shipping more than one product** | The team rebuilding the same five foundations | The engineering lead — but see below | The customer's security team, by proxy |
| **An inherited estate** | The operations lead who cannot answer "what reaches this system" | The operations or technology director | Internal audit and the security lead |

The third row carries the exception worth naming. In a company that sells software, the
largest term in the method on page 18 is not engineering time. It is the length of a security
review and the deals that stall inside one. That term lands on the commercial lead's number,
which frequently makes the commercial lead the real sponsor even though the purchase looks
technical from the outside. An evaluation run entirely inside engineering will measure the
smaller half of the benefit and conclude, reasonably, that it is smaller.

### What each one should look at

- **The operations lead** looks at the Measures screen and asks whether the remedies are the
  ones they would have written.
- **The security lead** looks at the attribution rule, the permitted-changer list, the record
  format, and where the model runs. The specific thing to do is on page 16: try to change a
  connection as somebody not on the list, and read the record the refusal leaves.
- **The finance lead** looks at computing capacity attributed by initiative and by team, and
  at the expiry rules that keep idle capacity from accumulating.
- **The engineering lead** looks at the helper roster, the arming rule, and at how long it
  takes to have the whole thing running on a laptop.
- **The commercial lead** looks at what running everything on your own machines does to the
  length of a security review, and runs the fifth input of the method on page 18 before
  anybody else runs the other four.

Each of those five can reach their own answer in an afternoon, on their own hardware, without
committing to anything.

## What adopting CORE involves

Five steps, in this order. The order is the useful part: each one is worth doing on its own,
and each one answers a question the next step assumes.

| | What you bring | The step | What it settles |
| --- | --- | --- | --- |
| 1 | One machine, a workstation | Run it here: one command, the whole platform natively | Whether the screen can be trusted — which panels say they did not measure |
| 2 | One credential, read-only, to a system you would like to stop worrying about | Connect one real system, then try to change it as somebody not on the list | Whether the governance is a control or a policy. Show this one to your security lead |
| 3 | Machines you own, plus a sign-in arrangement | Put it there: one command, same shape as step 1 | Nothing new. Same arrangement, same screens, more scale |
| 4 | Somebody outside the platform team | Have them request a deployment, and watch it expire | Whether useful work happens without the platform team being in the loop |
| 5 | One repository | Switch on one helper. Watch it for a week before arming it | Whether the helpers save real time — judged on what it would have published |

Nothing in that sequence requires the previous step to have been bought, and the first two
cost nothing and need no procurement.

### Step one: run it on one machine

Download the control tool — a single file for Linux, on both Intel and Arm — and run one
command. The whole platform comes up natively on the machine: the application back ends, the
model, the consoles and the security arrangement.

This costs nothing, requires no procurement, and involves no commitment. It is the honest
first step, and most of the questions in this paper can be answered from it.

What to look at first: the Overview screen, the Measures screen, and the connection
catalogue. Between them they demonstrate the honesty rule, the remedy discipline and the
governance model, which are the three things that distinguish CORE from a dashboard.

### Step two: connect one real system

Pick one system whose connection you would like to stop worrying about, and create it in
CORE. The catalogue tells you what the form needs before you start.

Then exercise the governance: sign in as somebody not on the permitted list and try to change
it. Watch the refusal, and read the record it left. That interaction is the one to show your
security lead, because it is the difference between a policy and a control.

### Step three: put it on machines you own

One command sets the machines up and installs onto them. The same command shape works for
machines in your own building and for rented ones; the difference is a single option.

At this point the platform is running the software it will run in production, in the same
arrangement, with the same screens. What changes from here is scale and who has access, not
shape.

### Step four: create a deployment from a request

Have somebody who is not on the platform team request one. They fill a form: the application,
the team, the initiative the cost belongs to, an owner, and how long it should live. They get
back an address and an expiry.

This is the step that demonstrates the operating model, because it is the first time
something useful happens without the platform team being in the loop. Watch it remove itself
afterwards.

### Step five: switch on the helpers, one at a time

Start with the reviewer on one repository. Watch it for a week before arming it to publish.
Read what it would have said. Then arm it by typing its name.

Add the others in the order that matches your pain: triage if your inbound queue is the
problem, the risk sweep if dependency currency is, compliance if control drift is, the curator
if documentation is.

The arming rule means every one of these can be watched before it is trusted, and the order
is yours.

### What you need on your side

- Machines you control, with room for the model. Ordinary processors are supported; where
  accelerated hardware is present it is used.
- A named person to own the platform. Not a team — CORE's operating model is designed so that
  one owner plus the console is sufficient for ordinary running.
- A decision about who is permitted to change data connections. This is the one policy
  decision CORE requires you to make explicitly, and it is better made in week one than in
  month six.
- Your sign-in arrangement: company Google identity, an administrator password, or both, and
  the list of addresses permitted.

## The commercial model

Runink publishes its list pricing. It is per seat — one seat for each person who uses the
platform — with an allowance of computing capacity included. That allowance is counted in a
unit the console calls a Compute Unit, so what you have and what you have used are both
stated in the same terms.

### Lite

For one to nine seats. Eighty-six US dollars per seat per month on a monthly commitment, or
seventy-five per seat per month on an annual contract. It includes a shared pool of computing
capacity on a machine used by more than one customer, the standard set of automated helpers,
and standard priority for that capacity.

This is the level for a first team, an evaluation that has outgrown a laptop, or a company
whose whole platform group fits in a room.

### Dedicated

For ten seats and above. Seventy-five US dollars per seat per month on an annual contract. It
includes computing capacity reserved for you alone, your own web address, first call on that
capacity, and an allowance of one thousand units per seat plus a two-thousand-unit bonus for
every ten seats.

This is the level for a company running its estate on CORE rather than trialling it.

### Enterprise

Custom pricing, for deployments you host yourself on your own premises, including those with
no outside network connection. It includes capacity managed for you, everything in Dedicated, the
ability to run on machines close to where the work happens, and service levels agreed with
the customer.

This is the level for the buyers on page 4 whose information cannot leave a defined boundary.

### How computing capacity is counted and reported

Capacity is counted in Compute Units. Every deployment carries an allowance, shown in the
console next to its expiry. Usage is attributed to an initiative and an owner, both captured
at the moment the deployment is requested.

The console reports the capacity given out in two ways: grouped by initiative, and grouped by
team.
That is a deliberate pairing. The first is the view a finance conversation needs — what is
this programme costing. The second is the view an engineering conversation needs — which team
is consuming it. Both come from the same figures, so the two conversations do not have to be
reconciled.

### What the pricing shape means

Two things follow from charging per seat with an allowance of capacity included.

**Using the software more does not cost more.** Because the model runs on the company's own
hardware, a team that finds heavy use for the assistant, the helpers or the coding sessions
is not billed by the question. The natural incentive is to use it, which is the incentive you
want.

**The cost of an evaluation is bounded and known.** A demonstration deployment has an expiry
measured in minutes and an initiative tag from the moment it is created. The cost of finding
out whether CORE is right for you is a figure you can state in advance.

## What it is worth, computed on your own numbers

The figure depends on how many applications you run, how many people understand
them, how often you are asked to prove something, and how long your last
security review took. All four are yours. Here is the arithmetic instead, with
each input named and each one read from something you already have.

### What actually changes

CORE does not make your applications better. It does not reduce the number of
things you run or change what any of them does. What it changes is **how many
times the same five things get built, watched and governed** — somewhere to
run, an identity, a way to reach company data, a way to be watched, a way to be
changed — and **how much of your specialists' week is spent on work only they
can do.** Those two, plus one commercial effect larger than either, are what
the method below measures.

### Five inputs, and where each is read

**One — what foundations cost you per launch.** Take your last two things that
shipped. For each, the elapsed calendar from the decision to build to the first
customer seeing it, and inside that, the portion spent on sign-in, secrets,
data connections, somewhere to run, and something watching it. The sprint
record will settle it. Then multiply by how many further applications your plan
actually contains — that last multiplier is the one people forget, and it is
where most of the figure lives.

**Two — the specialist tax.** For each person who is the only one who
understands part of the estate, the hours per week they spend on requests
nobody else can serve: create this environment, what is running where, why is
this slow, who has access to that. Have them keep a tally for one week rather
than estimate it. The estimate is always lower than the tally.

**Three — what evidence assembly costs.** Count the times in the last four
quarters you were asked to demonstrate who did what, when and under whose
authority — an audit, a certification, a customer's security questionnaire, an
incident review. For each: person-days consumed, and the seniority consumed.
Then count how many of those days made the next request shorter. That second
count is usually close to nothing, and the difference between the two is a
standing overhead rather than a project cost.

**Four — capacity that is running because removing it is nobody's job.**
List the environments currently running. For each, when it was last used for
anything. The ones with no answer are the figure, priced at whatever your
machines cost you.

**Five — the deals that stall on a data question.** This is the largest term
for anybody who sells software, and the one almost nobody measures. From the
last four quarters of opportunities: how many had a security review, how many
days each review took from first questionnaire to sign-off, how many stalled
or were lost at a question about where information is processed, and what
those were worth. If you sell into regulated buyers, run this input first —
it will usually be larger than the other four together, and it is the one
your commercial lead can produce in an afternoon.

### How they combine

| | What it is | How you get it |
| --- | --- | --- |
| Add | **Build saving** | Foundation weeks per launch × applications still to come × loaded cost per week |
| Add | **Attention returned to the next thing** | Specialist hours per week × 52 × loaded cost |
| Add | **Assurance overhead removed** | Person-days on evidence per request × requests per year × loaded cost |
| Add | **Capacity no longer running unwatched** | Idle environments × monthly cost each |
| Add | **Pipeline effect** | Stalled or lost opportunities × value each × the share the data answer unblocks |
| Subtract | **Cost side** | Seats × the published price on page 17 + the machines you already run |

Sum the five, subtract the sixth, and divide the annual result by the monthly
cost. The quotient is a payback period in months, and every term in it is yours.

The cost side is the one term you can price today without measuring anything:
the per-seat price is published on page 17, and the machines are ones you
already own. A cost side that can only be discovered through a sales process is
a cost side designed not to be compared.

### Four ways the answer comes out wrong

**Counting foundation work that would not have been rebuilt anyway.** If your
second application would have reused the first one's sign-in regardless, that
saving was already yours. Count only what genuinely gets rebuilt.

**Treating returned specialist hours as cash.** They are capacity that moves to
something else, and they are worth something only if there is a something else
worth doing. If the person would simply be less busy, value it at nothing.

**Assuming a security review shortens to nothing.** It does not. It shortens
because one question — where does our information go — has a one-sentence
answer instead of a negotiation. The rest of the questionnaire is unchanged.
Use the share of review time that question actually consumed in your last three
reviews.

**Comparing across a period when something else changed.** A quarter that also
carried a reorganisation, a platform migration or a new hire is not a clean
comparison. Choose a period in which this is the change.

### Record the baseline before you start

Four numbers, written down in the first week: the specialist tally, the
person-days on your most recent evidence request, the current count of running
environments with a last-used date against each, and the current median length
of a security review. All four become unrecoverable once CORE is running,
because the thing that would tell you is now the thing that changed.

## Answers to the questions we are usually asked

**Where does our information go?**
To machines you own. The model runs on your hardware, the records are stored on your
hardware, the files are stored on your hardware, and the identity authority runs on your
hardware. No outside service is called for reasoning.

**Can it run with no outside network connection at all?**
Yes. Enterprise deployments run on your own premises, including on sites with no connection
to the outside world at all.

**Who can change a connection to one of our systems?**
Only somebody CORE can name. If sign-in is not configured, a connection change is refused
outright. Beyond requiring a name, the set of people permitted to make those changes can be
listed explicitly, and anybody outside that list is refused by name.

**What record survives a change?**
Time, sequence number, person, action, thing acted upon, outcome, an explanatory detail and
the source address — for every attempt, including refusals. Each record carries a fingerprint
computed over the one before it, so the sequence can be checked from end to end.

**How do we know what is actually running?**
The convergence screen states, for every managed application, whether what is running matches
what was written down and names the exact change in force. The delivery history keeps sixty
days of what was built and what was rolled out, with the before-and-after state of each
target.

**Can we try it without buying anything?**
Yes. One downloaded file and one command runs the whole platform on a workstation.

**How long until we see something real?**
The laptop step is an afternoon. Connecting one real system is the same day. Putting it on
your own machines is one command once you have the machines.

**Do the automated helpers change anything without us?**
No. Each is switched on individually, and each publishes only after a person has armed it by
typing its name. The reviewer posts findings; a person decides. The fixer opens drafts; a
person merges. The coding session asks before every action outside its working area, and
declines if there is nobody to ask.

**What if we only want part of it?**
Every helper has its own switch, every screen is read-only until a person acts, and the
connection governance can be as tight or as broad as the list you write. The parts are
independent.

**What languages does the console speak?**
English, Spanish, French and Portuguese, chosen from the frame.

**Does the model have to be trained on our material first?**
No, and there is nothing for you to label. The model is a set of weight files held on your
own machine, identical on your first day and your five hundredth — you can compare them and
confirm that. What makes an answer specific to you is that your own material is indexed on
your machine and the relevant parts are retrieved and placed into the question at the moment
it is asked, with the source of each part travelling alongside it. That is also why deleting
a document removes its influence completely: there is nothing left behind in a set of
weights.

**Is our material used to train anything, ours or anyone else's?**
No. Nothing is sent out to be trained on and there is no account with an outside model
provider for it to be sent to. This is enforced mechanically rather than promised: a
published list of outside model libraries and their network addresses is checked against the
software before any change is accepted, and a change that introduced one would be refused
rather than reviewed.

**How does it get better over time, then?**
By reading more, not by changing the model. Each connection and each indexed document widens
what a question can be answered from. Where automated work is scored, it is scored against a
set of answers already known to be right, on both the route taken and the result reached, and
a change that would score worse than the one before it is stopped rather than shipped. The
weightings and thresholds behind scoring are settings you can read and adjust, not judgements
buried in the software.

**What happens when it cannot work something out?**
It says so, and that is a distinct state rather than a quiet pass. The operational screen
reports four states, and *not known* is one of them — a figure that could not be read is shown
as not known rather than drawn as a zero. Where a proposal falls below its confidence bar it
is recorded with the reason and not carried out. Where the judgement belongs to a person
rather than a machine, the item is filed under a heading that says exactly that. An assessment
that could not be completed reports that it could not be completed, and states that this is
not a finding that the thing was fine. Those are different sentences and the software keeps
them different.

**How does it reach SAP, Oracle and the systems we already run?**
Three doors. Where a system offers a database or a query interface, CORE holds a connection to
it that reads in place, under an account you issue. Where a business application publishes a
service interface, it is read through that, with credentials you can revoke. And where neither
applies, it reads the extract the system already produces — a nightly export, a monthly
workbook, a file landing in storage you own. That third door matters more than it sounds,
because an extract you already produce is a working connection this week rather than an
integration project next quarter. Whichever door a system uses, the catalogue on page 10
states what that kind of system will ask for before anybody starts filling in a form.

**Does it need special hardware?**
No. Ordinary processors are supported and are what most installations run on; accelerator
chips are used where they are present. What a machine does need is room for the model, and
the console reports for each loaded model how much memory and processing power is reserved
for it against how much is actually in use, so sizing is a reading rather than a guess.

**What do you actually need from us, and who usually sponsors it?**
Machines you control with room for the model; one named person to own the platform; your
sign-in arrangement and the list of addresses permitted to use it; and one policy decision —
who may change a data connection. The sponsor is usually whoever carries the consequence of
the estate not being understood: in most companies the engineering or technology lead, and in
companies that sell software, frequently the commercial lead, because the security-review term
in the method on page 18 lands on their number rather than anybody else's.

**Can a company without a large platform team run this?**
Yes, and the operating model assumes it. One named owner plus the console is sufficient for
ordinary running. Deployments are created from a form by people outside the platform team and
remove themselves at expiry. Every automated helper has its own switch and publishes nothing
until a person has armed it by typing its name, so the amount of automation in use is a dial
rather than a decision made once at installation.

**How does it grow as we grow?**
By adding machines rather than by being rebuilt. A new machine joins an existing installation
and starts taking work; the placement screen then shows what landed where and why. Capacity
for the reasoning is added the same way, and a machine can be set aside for one application or
one team so that its work does not compete with anything else. Nothing about the arrangement
changes shape between one machine and several — what changes is scale and who has access.

**Why should we trust what it recommends?**
Because you can check it rather than accept it. Every reading carries the moment it was
taken, a plain sentence explaining it, and — where it is not fine — a remedy with the
reasoning for why that is the right remedy. The assistant shows the sequence of actions it
took rather than asserting that something was done. Automated work is scored against known-good
answers on both route and result. And where the decision belongs to a person, the system says
so instead of producing a confident recommendation, which is the discipline that makes the
confident ones worth reading.

**What do we need to decide before starting?**
One thing: who is permitted to change data connections. Everything else can be decided as you
go.

## The next step

The most useful thing you can do with this paper is stop reading it.

CORE runs on one machine, from one downloaded file, with one command. There is no
environment to be set up for you, no trial account to be created, and nothing to sign
before you see it working. The version that runs on your workstation is the version that runs
on your machines.

**An afternoon.** Download the control tool, run one command, and open the console. Look at
the Overview screen and notice which panels tell you they have not measured something. Open
Measures and read a remedy. Open the connection catalogue and see what the system you care
about will ask you for.

**A day.** Connect one real system. Then try to change it as somebody who is not on the
permitted list, and read the record that refusal leaves. Show that to your security lead.

**A week.** Put it on machines you own. Have somebody outside the platform team request a
deployment and watch it expire on its own. Switch on the reviewer for one repository and
read, for five days, what it would have published.

At the end of that week you will have five answers, from your own hardware, with your own
data, in your own words: whether the screen can be trusted, whether the remedies are the ones
you would have written, whether the governance is a control rather than a policy, whether the
helpers save real time, and whether keeping everything on your own machines does what we say
it does to a security review.

That is the entire basis on which we would like to be judged.

### Talk to us

For a guided walk-through, a conversation about your estate, or Enterprise pricing for a
deployment you host yourself, including one with no connection to the outside world:

**paes@runink.org**
**runink.org**
**core.runink.org**
