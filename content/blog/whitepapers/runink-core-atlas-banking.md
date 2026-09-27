---
title: "Runink CORE and Atlas for Banking"
headline: "You are not asked whether the control exists. You are asked to show that it operated."
# The label the closing ask carries into the contact form, so an enquiry
# arrives naming the paper it came from.
next_about: "The CORE and Atlas banking paper"
product: "Runink CORE"
subtitle: "Four banking problems, and the console pages that answer them"
description: "How a bank's payments, third-party risk, model risk, audit, finance and security teams use the Runink CORE console on four problems: payment instruction integrity, third-party risk, decision governance, and fee and interest calculation."
weight: 30
date: 2026-09-26T00:00:00Z
audience: "Payments, risk, audit, finance and security leaders at banks"
blurb: "Four problems every bank carries, and for each one the CORE console pages its people would open: who owns the problem, what each page gives them, and where in their own systems they find today's baseline."
deck: |
  Payment instructions, suppliers, automated decisions, fees and interest.
  Each is a written rule applied to a flow of work, under a supervisor who
  expects the rule to be shown working rather than described.

  This paper takes those four problems in turn. For each one it names the
  person who owns it, the Runink CORE console pages that person would open,
  and what each page puts in front of them.

  **CORE runs on hardware the bank owns, and so does the AI model it reasons
  with.**
register:
  - { page: 1, title: "Executive summary" }
  - { page: 2, title: "How the console is laid out" }
  - { page: 3, title: "Payment instruction integrity" }
  - { page: 4, title: "Third-party risk" }
  - { page: 5, title: "Decision governance" }
  - { page: 6, title: "Fee and interest calculation" }
  - { page: 7, title: "What Internal Audit and the CISO hold across all four" }
  - { page: 8, title: "Where to go from here" }
---

## Executive summary

A bank does not fail an examination because it lacked a control. It fails because it
cannot show that the control ran, on which items, what it found, and who decided what to do
about it. The evidence exists somewhere. It is spread across the payment system, the
supplier file, the model inventory, the finance ledger and a shared drive, and it is
assembled by hand when somebody asks.

Runink CORE is the operations layer a company runs on its own hardware to keep its software
and its data healthy, governed and explainable. Its console is where a bank's people would
look at that evidence in one place, act on it, and leave a record of what they did.

This paper does not describe CORE in general. The
[Runink CORE paper](/blog/whitepapers/runink-core/) does that. It takes four problems a bank
already owns and, for each one, walks through the console pages the owner would open:

- **Payment instruction integrity**, owned by Payments Operations: does every payment
  trace back to an approval, and would we know if one did not?
- **Third-party risk**, owned by Third-Party Risk: which suppliers touch which of our
  systems and data, and what do we know about the AI we have bought?
- **Decision governance**, owned by Model Risk: what are our models and automated agents,
  what are they allowed to do, and who approved each change to the rules they apply?
- **Fee and interest calculation**, owned by Finance and Product Control: when somebody
  says a rate was applied wrongly, can we check the arithmetic before we act on it?

Internal Audit and the CISO appear in all four, so a short chapter near the end covers what
they hold across the whole console.

Three properties run through every page described here.

**Nothing is shown as known when it is not.** A figure the console could not measure is
drawn as absent, with the reason, and never as a zero. A dashboard that shows zero when it
means "we did not look" turns a failure to observe into a confident statement, and
decisions get made on it.

**Nobody grades their own work.** A change to a business rule is proposed by one person and
decided by another. A finding submitted for judgement is judged by an assessor that the
submitter cannot speak for.

**Every change leaves a record that can be checked.** Each change a person makes in the
console is written to an audit chain in which any later edit shows, and anyone signed in can
check that chain from end to end.

## How the console is laid out

The console has a left-hand menu grouped into categories. Each category answers one
question, and knowing the question tells a reader where to look.

| Category | The question it answers |
| --- | --- |
| **Overview** | Is anything wrong right now, and where do I go next? |
| **Intelligence** | What does our data estate hold, how good is it, and where are spending or controls going wrong? |
| **DataEx** (data experience) | What are our AI models and agents, what may they do, and can their work be trusted? |
| **DevEx** (developer experience) | Is the platform running as intended, and did our changes ship? |

Intelligence carries the Atlas oversight pages, built with Logical Leap, alongside CORE's own
pages for mapping the data estate. The
[CORE and Atlas paper](/blog/whitepapers/runink-core-atlas/) explains that arrangement in
depth.

### Where findings come from

A finding is a statement that something is wrong, with the evidence behind it. In the pages
below, findings reach a person from three places.

1. **The spending rule book.** CORE checks a company's capital plan, its capital requests
   and its spend against a book of approval controls. Every spend line must carry an
   approval that points to a real request. A purchase order must not be dated before its
   approval. Spend above the approved amount, beyond the margin the rule sets, needs a
   second approver. A request must name its supplier. The feeds are uploaded, or pulled
   from a registered source, and in both cases a person previews them before they are
   committed.
2. **Governance reviews of the bank's own sources.** CORE reviews each registered data
   source against governance and risk controls and publishes what it finds. Where it
   cannot assess something, it says so for that source, with the reason, rather than
   guessing.
3. **Findings an assessment platform submits for judgement.** A platform the bank runs can
   send its findings to CORE through a dedicated, credentialed door. CORE forms its own
   verdict on each one. The chapter on decision governance explains how.

## Payment instruction integrity

**Who owns it:** Payments Operations, with Internal Audit testing the control and Finance
owning the ledger.

A payment is a written rule applied to money leaving the bank. It should follow an
approval. The approval should come before the order. A payment above what was approved
should have a second signature. And a change to where money goes should be verified before
it is used.

The trouble is rarely that the rule is missing. It is that nobody can say, for a given
month, whether the rule was applied to every payment or only to the ones somebody looked
at. Testing is done on a sample, after the fact, for the same reason every control in a
bank is sampled: volume.

### What Payments Operations would open

| Page | What it gives them |
| --- | --- |
| **Intelligence › Sources** | The systems CORE is allowed to read, one card each: the payment system, the supplier file, the ledger. Each card says whether the source was reachable when last checked, or that it has not been checked. Each system is added and changed on DataEx › Connections, where its credentials are held apart from its settings and encrypted, and where changes can be limited to a named list of administrators. |
| **Intelligence › Resolve** | What those systems actually hold. On an administrator's explicit action, Resolve tests each connection, explores its structure (tables, columns, types and declared keys) and counts how many distinct accounts use each dataset. It keeps the structure and the counts. It never keeps customer values, sample rows or the names of the accounts. This is how Payments Operations learns which systems hold payee details before anyone claims a control covers them. |
| **Intelligence › CapEx monitor** | The spending rule book run over every line of the plan, request and spend feeds the bank has loaded, not over a sample. Each finding names the rule, the record and the remedy the rule book gives. |
| **Intelligence › CapEx lineage** | Any finding traced along its chain: this payment, the approval it cites, the plan line that approval belongs to. A payment with no approval behind it shows as an orphan. |
| **Intelligence › CFO dashboard** | Planned, approved and actual spend side by side, and a risk summary that totals spend without authorisation and spend beyond its approval. A figure the feeds cannot answer is drawn with its reason, not as zero. |
| **Intelligence › Analyst dashboard** | The same feeds from the working analyst's side: open findings by severity, and a health scorecard where an area with nothing to measure reads "not assessed" rather than green. |
| **Intelligence › Remediation** | The queue of findings, each with the rule book's remedy. A person can dry-run a fix against a copy of the feeds to see the before and after, then approve it or dismiss it. The decision is made by the rule's owner or an administrator, never by the person who proposed it. An approved fix is recorded as a decision and applied in the source system, and the finding clears on the next load. |
| **DataEx › Judgements** | Where the bank's own monitoring raises a finding, such as a payee's bank details changed without call-back, the finding can be submitted with its evidence and CORE returns its own verdict. More on this under decision governance. |
| **DevEx › Audit chain** | Every approval, dismissal and change of rule owner, with the person, the time and the outcome. |

### What changes, and why

The control stops being a sample and becomes the population. Every line in every feed that
is loaded is checked against the rule book, so the question "was the rule applied to every
payment this month?" has a list for an answer: the lines that passed, the lines that did
not, and what was decided about each.

Detection moves closer to the payment. Today a payment released without a matching
approval is usually found at the next audit sample. Here it is found when the feed it sits
in is next loaded.

The fix is recorded where the auditor will look for it. The decision to approve or dismiss
a remedy, and the name of the person who made it, is in the decision log and in the audit
chain, not in an email thread.

### Your baseline

Find these before anything changes, because the starting point is lost once things
improve.

- **Payments released without a matching approval** found in your last two audit or
  control-testing cycles. Your internal audit workpapers hold the count and the sample size.
- **Days from payment to detection** for each of those. Take the payment date from the
  payment system and the date the item first appears in your issue register.
- **Payments above their approved amount with no second signature**, from your accounts
  payable exception report for the last quarter.

All three should move down, and for a stated reason: each line is checked when it is
loaded, rather than when a sample happens to include it.

## Third-party risk

**Who owns it:** Third-Party Risk, with the CISO and Procurement.

Rules on the oversight of outside providers ask a bank to know which suppliers it depends
on, what those suppliers can reach, and what happens if one fails. The EU's Digital
Operational Resilience Act (DORA), for example, sets out how financial firms should manage
the risk of the technology providers they rely on.

In practice the supplier inventory, the vendor master and the list of systems each supplier
can reach are kept in different places by different teams. And every AI tool a bank buys
adds a new third party: the vendor, and often the vendor's own model provider behind it.

### What Third-Party Risk would open

| Page | What it gives them |
| --- | --- |
| **Intelligence › CapEx monitor** | Spend and requests checked against the rule book, including the rule that a request must name its supplier and the rule that spend must match the type of item that was planned. A request to pay nobody in particular shows up as a finding. |
| **Intelligence › Resolve** | The estate grouped into business domains, with every link between datasets marked as declared by the source, inferred from the data, or named as a guess. It also shows where what a source declares about itself disagrees with what its data shows. For a supplier question such as "which datasets could this provider's systems read?", this is where the answer starts. |
| **Intelligence › Lineage** | Where data moves: from each registered source, through the application that extracts it, to where it lands. A link is drawn only where movement was observed, never guessed, and governance findings sit on the nodes they concern. |
| **DataEx › Model cards** | The AI inside CORE, described the way a supplier review asks: where the model came from, its licence, its intended use, its known limits and the evidence for them, beside what is actually running. The health mark is green only when the two agree. |
| **DataEx › Policy & ReBAC** | The access lists for each kind of privileged change, such as changing a data connection or ending someone else's session, how many people are on each, and whether you are one of them. |
| **DataEx › Secrets & PKI** | The certificate authority that vouches for each of the platform's internal services, and the console's own sign-in settings. |
| **DevEx › Audit chain** | Every connection added, changed or removed, and every attempt that was refused, with the person and the time. |

### What changes, and why

The AI stops being a third party. CORE's model runs on the bank's own hardware. There is no
outside AI service in the path, so no payment record, supplier contract or draft finding is
sent to one to be read. A third-party review of CORE's AI becomes a review of software the
bank runs, described by its model card, rather than a negotiation over another company's
data handling.

The supplier question gets a structural answer. Resolve and Lineage show which systems hold
which data and where it moves, from what was observed. That is the map a third-party review
needs, and it is built from the systems themselves rather than from a questionnaire.

A request with no named supplier stops being invisible. It becomes a finding with an owner and
a decision recorded against it.

### Your baseline

- **Time to answer "which of our systems can this supplier reach?"** for the last supplier
  review that asked it. Your third-party risk case file holds the request and response dates.
- **Purchase requests with no named supplier**, or with a supplier missing from the vendor
  master, from last quarter's procurement data.
- **Length of your last third-party review of an AI tool**, from intake to sign-off, in your
  third-party risk system.

The first and third should move down because the evidence is produced by the platform
rather than gathered from the vendor. The second should move down because each line is
checked on every load.

## Decision governance

**Who owns it:** Model Risk, with Internal Audit and the CISO.

Supervisors expect a bank to keep an inventory of its models, to know what each one is for
and where it falls short, and to control changes to the rules they apply. Automated agents
add a harder question: not just what the model says, but what the agent is allowed to do
with it, and who switched it on.

The weak point is usually the change, not the model. A threshold is moved, a rule is
relaxed, a new agent is enabled, and the approval sits in a ticket or an email. When a
supervisor asks who approved it, the answer has to be rebuilt.

### What Model Risk would open

| Page | What it gives them |
| --- | --- |
| **DataEx › Model cards** | The model inventory for CORE's own AI: one card per model tier, with its source, licence, intended use, known limits and evidence, beside what is running now. |
| **DataEx › Agents** | Every automated agent CORE knows, each fact stated once: what it is, whether it is switched on, which model it uses, what gate it must pass and how much it may do on its own. |
| **DataEx › Guardrails & autonomy** | Each class of action the Harness can take, set to off or to wait for a person, with overrides per business domain and hard limits above them. Every class starts with a person in the loop. Recent activity for each class is read from the audit chain. |
| **DataEx › Harness** | Findings about the platform's own risk and compliance, each with a proposed remedy and only the actions CORE can really take: start a named automated agent, file a tracking issue, or acknowledge. Each act is confirmed, then written to the audit chain before it happens. |
| **DataEx › Judgements** | The independent second opinion. It is described in full below. |
| **Intelligence › Business rules** | The rule book, with a named owner and a status for every rule. A change is proposed by one person and decided by the rule's owner or an administrator, never by the proposer. A rule not yet approved still runs, but its findings are shown as a dry run and kept out of every score, and the scores say which rules they leave out. A rejected rule produces nothing. |
| **Intelligence › Playbooks** | Step-by-step responses to findings, such as "start this reviewer, then wait for this approver". A playbook is switched on by an administrator who did not write it, and an approval step is decided by its named approver, never by the person who started the run. |
| **DevEx › Reviews** | What each review the platform runs has found, whether code, risk, compliance, data quality, data consistency or maturity, with its history and its findings by severity and evidence. |

### How a judgement is formed

A judgement answers one question: does the evidence behind this finding carry its claim?

**The submitter cannot grade itself.** Findings arrive through one door, on the submitting
platform's credential, and any verdict sent with them is thrown away. Verdicts enter
through a second door, on a different credential. That separation is decided by which
credential was presented, not by a field in the message that a sender could fill in.

**Numbers are checked with arithmetic, not opinion.** Where a finding claims a rate, the
counts behind it travel with it, and CORE works the rate out again. If the counts do not
give the claimed figure, the verdict is a disagreement, with the arithmetic shown. A count
divided by nothing is "unable to judge", never a rate of zero. A claim that carries a number
never reaches the AI model at all.

**The model is never told what the submitter concluded.** A claim in words is put to the
model as one question, with the evidence. The submitter's own conclusion is joined back on
afterwards, so the model cannot simply agree with it. If the model cannot be reached, the
verdict is "unable to judge", with that stated as the reason.

**The verdicts are words, not a score.** Each finding gets one: agrees, disagrees, unable to
judge, or outside what CORE can assess. "Unable to judge" is never counted as agreement,
and "nothing has been submitted" is said as that, never as a clean result.

### What changes, and why

Self-approval is refused rather than discouraged. The console will not let the person who
proposed a rule change, or a remedy, decide it. That turns a policy statement into a
property of the system that an auditor can test.

The change history already exists when the supervisor asks. The proposal, the decision, the
decider and the time are in the decision log and in the audit chain, written when the
change was made.

A second opinion arrives before a person acts. A finding from an assessment platform
reaches the bank's people with CORE's own verdict beside it, including the ones CORE could
not judge, named as such.

### Your baseline

- **Rule and threshold changes in the last year where the proposer and the approver were
  the same person.** Your change management system or model change log holds both names.
- **Time to answer a supervisor's "who approved this change?"**, for the last time it was
  asked. Your regulatory correspondence file holds the dates.
- **Share of models and automated tools in your inventory with an intended use and known
  limits written down.** Your model inventory holds it.

The first should fall to nothing, because the console refuses the combination. The second
should move down because the record is written at the time of the decision.

## Fee and interest calculation

**Who owns it:** Finance and Product Control, with Compliance for customer outcomes.

Tiers, thresholds, product terms and rate cards are rules applied across a whole portfolio.
Checking that what was charged matches what the terms say is a reconciliation, and it is
done periodically, for the same reason as everything else in this paper: volume.

When a check does find a problem, the next risk is acting on a figure that is wrong. A
finding that says "this share of accounts was charged at the wrong tier" can start a
customer remediation programme. If the arithmetic behind it does not hold, the bank pays
twice: once for the error it fixed and once for the error it made.

### What Finance and Product Control would open

| Page | What it gives them |
| --- | --- |
| **DataEx › Judgements** | For each rate claimed in a finding, the claim worked out again from the counts it carries. A figure the evidence does not reproduce comes back as a disagreement with the arithmetic named. |
| **Intelligence › Resolve** | Which registered systems hold the rate tables and product terms, what their structure is, and how many distinct accounts use each one. Where what a source declares about itself disagrees with what its data shows, that is listed. |
| **Intelligence › Lineage** | Where rate data moves after it leaves its source, drawn only from observed movement, so Product Control can see which applications take data from the system that holds the rate card they reconcile against. |
| **Intelligence › DQ overview** | The data-quality score for the spending feeds the bank has loaded, beside the latest governance review of each registered source, including the systems that hold rate tables. A count that could not be read is left out of the summary rather than written as zero. |
| **Intelligence › Business rules** | Who owns each rule, what state it is in, and every proposed and decided change to its threshold. A figure never quietly changes meaning, because the scores name every rule they leave out. |
| **DevEx › Audit chain** | Every decision taken in the console, so a remediation decision can be traced to a person and a time. |

### What changes, and why

The figure is checked before it is acted on. The arithmetic in a finding is recomputed from
its own evidence, so a rate that does not hold is caught before it becomes a remediation
programme, and a rate that cannot be computed is named as that rather than reported as zero.

The source is known before the reconciliation starts. Resolve and Lineage show where the
rate tables live and what reads them, so a reconciliation can be run against the table the
charging system actually uses.

Thresholds stop drifting silently. A threshold change is a proposal with a decision, a
decider and a date, and the scores say which rules were in or out when they were computed.

### Your baseline

- **Fee and interest breaks found by Product Control** over the last four quarters, and how
  many were cleared with no cause recorded. Your reconciliation break report holds both.
- **Customer remediation cases opened for fee or interest errors**, and how many were later
  re-scoped because the first figure was wrong. Your complaints and remediation register
  holds them.
- **Time to reproduce the figure in a finding**, from the day it is raised to the day
  Finance agrees the number, for your last few findings. Your issue register holds the dates.

The second and third should move down, because the arithmetic is checked on arrival rather
than argued afterwards.

## What Internal Audit and the CISO hold across all four

Internal Audit and the CISO do not own one of the four problems. They own the question of
whether the answers can be trusted. Three DevEx pages and one DataEx page serve them in
every chapter above.

| Page | What it gives them |
| --- | --- |
| **DevEx › Audit chain** | Every privileged change in the console, whether it was allowed, refused or failed, with the person, the time, the action and the outcome. Each entry carries a fingerprint computed over the one before it, so a later edit to any entry shows. "Verify now" walks the whole chain link by link and says where a break is. Anyone signed in can run that check, even a person who is not allowed to read the entries themselves. |
| **DevEx › Session admins** | The short list of people who may read the full audit trail and end another person's session. The list cannot be emptied, since nobody could then undo it, and every change to it is recorded before it takes effect. |
| **DevEx › Reviews** | The history of every review the platform runs, with findings by severity and the evidence for each, so a reviewer can see what was found and when without asking. |
| **DataEx › Policy & ReBAC** | For each kind of privileged change, how many people may make it, and whether the reader is one of them. |

Two points matter most to these readers.

**The record is written as the work happens.** An evidence pack built after the event
describes a decision. A record written at the time of the decision is the decision. The
audit chain and the decision logs are the second kind.

**The record is held by the bank.** CORE and its AI model run on hardware the bank owns.
The audit chain, the findings, the verdicts and the credentials stay on the bank's systems.

We have not been audited against SOX, DORA or any other banking regulation. What this paper
describes is what the console does, and a bank's own control framework decides what that
evidence is worth to it.

## Where to go from here

This paper is deliberately narrow. For depth, two longer papers sit behind it.

- The [Runink CORE paper](/blog/whitepapers/runink-core/) covers the whole platform: how it
  runs the software, holds the data connections, governs who may touch them and carries
  changes from written to running. It is at runink.org/blog/whitepapers/runink-core/.
- The [CORE and Atlas paper](/blog/whitepapers/runink-core-atlas/), written with Logical
  Leap, covers the oversight arrangement: what a finding contains, how it is checked, and
  why an independent assessor matters. It is at runink.org/blog/whitepapers/runink-core-atlas/.

The quickest test of fit is one control. Bring the approval rule on supplier payments, a
supplier agreement, or a rate card, together with the person who owns it. In a short
session we can open the console pages in this paper against that one example, and you can
judge whether the evidence it produces is the evidence your supervisor asks for.
