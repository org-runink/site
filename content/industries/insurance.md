---
date: 2026-09-07T00:00:00Z
title: "Insurance"
description: "Claims decisioning, reserving and reinsurance recovery, delegated authority and conduct evidence. How Runink FACE sets the rule as written beside the logic your systems actually run, and sorts every rule into aligned, drift, shadow or missing."
# This page is Runink FACE, and the attribution was previously absent — the
# page named no product and linked to the CORE-and-Atlas paper, which made it
# read as the platform arrangement described on the banking and telecom pages.
# It is not. Insurance is a FACE domain in the most literal sense: FACE's
# Finance domain types `claim`, `reserve`, `adjuster`, `premium`, `deductible`,
# `settlement`, `payout` and `underwrit` (internal/ai/business_domains.go, whose
# own comment is "a claim is a reserve against a policy"), the connector
# registry carries a real Guidewire connector alongside SAP, D365, Salesforce
# and the SQL engines, and the rules-as-written-against-rules-as-applied
# mechanism on this page is FACE's Rules Recon — four states named in
# grpc/agents/templates/rules_recon.jinja, not the CORE assessor.
#
# What was cut, and why the paper link moved: the outcomes claimed "a second,
# independent judgement" on every finding. That is CORE's assessor, which
# accepts findings from an outside submitting platform through a credentialed
# door and hands verdicts back. FACE does not submit its findings there — there
# is no wiring between the two — so the page was selling a join that does not
# exist. The paper link now points at the FACE paper, which is the product
# actually described here.
product: "Runink FACE"
weight: 20
# category: binds this page to the palette's category tokens via the
# .rk-cat-* class the layout emits. It replaces an `accent:` hex, which
# went dead when the stylesheets moved to --rk-accent: the hex was still
# injected into a style attribute that nothing read any more. A class can
# follow the ground; a literal cannot.
category: "insurance"
card: "Runink FACE — claims decisioning, reserving and recovery, delegated authority, and the evidence a supervisor asks for."
headline: "The rule is written down. The question is whether it is the one being applied."
deck: "Policy wording is a rule. So is a regulatory obligation, a delegated authority agreement, an internal limit. Each one is enforced in a system, performed by a person following a procedure, or neither — and which of the three tends to surface only when somebody goes looking. This page is Runink FACE, whose Finance domain models a claim as a reserve against a policy."

problems_heading: "Where it goes wrong"
problems:
  - title: "The threshold that drifted"
    body: "The value at which a claim needs a second review is raised in the workflow to clear a backlog. It is meant to be temporary. The policy document is never updated, and months later nobody has decided either way."
  - title: "Decisions explained to someone who was not in the room"
    body: "Every step applied to claims, policy and payment data has to be reconstructable afterwards. When the answer is assembled by hand across several systems, you pay the assembly cost every time the question is asked."
  - title: "Reconciliations done periodically because of volume"
    body: "Reserve movements follow rules. Reinsurance recoveries follow treaty terms. Both compare a written instrument against a stream of transactions, and both get sampled because the stream is too long to read."
  - title: "Authority you delegated and still answer for"
    body: "Where underwriting is delegated, you remain accountable for what is decided under it. Reading the delegation agreement against the bordereaux the agent reports back is a rules-against-records comparison at volume."

owners_heading: "Who owns this"
owners_intro: "The audit question is the same one in every function: not whether a control exists, but what it did."
owners:
  - role: "Claims operations"
    line: "A difference surfaces at the point of decision, not at period end — while the file is open and the payment has not gone out."
  - role: "Compliance and risk"
    line: "\"Controls were operating effectively during the period\" becomes a list: the exceptions found, when each was found, what was decided and by whom — and, named beside them, the controls that could not be checked at all."
  - role: "Internal audit"
    line: "Evidence is a by-product of the work, so demonstrating that a control operated stops being an assembly project."
  - role: "Finance"
    line: "Where the written terms and what was charged or accrued diverge is stated plainly, with the clause and the records behind it."
  - role: "IT and security"
    line: "The reasoning runs on your hardware and the records stay on your systems, so the security review is a description, not a negotiation."

outcomes_heading: "What Runink FACE changes"
outcomes:
  - "The rules as written — policy wording, regulatory text, a delegation agreement — are set beside the logic your systems actually run, and every rule lands in one of four states: aligned, the policy says it and the systems do it; drift, the systems do something adjacent; shadow, logic is running that no policy describes; missing, the policy describes a control nothing performs. Shadow is the one that surprises people."
  # The calibration sentence, which the page did not have. This classification
  # is a language model reading rules out of your documents and your system
  # logic, and it reports its own confidence. Selling it as a verdict would be
  # the same overclaim the second-judgement line was.
  - "Read that as a reconnaissance, not a ruling. Each rule comes back stated in plain English, naming the policy document and the implementation it was read out of, with a confidence attached — so a compliance officer is checking a specific claim against two named sources rather than accepting a score."
  - "Each finding carries the observation, the rule it invoked, the records it cited, a severity and one specific proposed action, in one queue."
  - "A finding that turns on risk appetite is not decided for you. It waits, with the ambiguity named and the write-up already done, which is the part that costs the morning."
  # "Nothing that cannot be undone proceeds without a named person" was a
  # blanket gate and is not true: FACE's REQUIRE_HITL variable is read by no
  # code except the function that reports it. What IS true and structural is
  # below — the queue, the recorded decision, and credentials-first connection
  # creation (config_server.go writes credentials before the connection, so a
  # credential failure leaves no row at all).
  - "A drafted action waits in the queue until a named person approves, edits or rejects it, and that decision is recorded as an event carrying the actor. A connection to your claims data cannot be created without its credentials — they are written first, so a half-made connection does not exist to be used later."
  - "Where a check could not run, the result says so in those words: not a finding that the thing is compliant. A quantity nobody measured is held as unmeasured with a reason rather than rounded to zero, and a connection nobody has contacted is never reported as verified. For a function whose product is evidence, being told what was not checked is worth more than a clean-looking pass."

measures_heading: "How you will know it worked"
measures_intro: "These figures are yours, not ours. Write down where each stands today, and over what period, before anything changes — once it moves, the baseline is gone."
measures:
  - metric: "Claims cycle time"
    today: "Claims system, last four completed quarters: median days from first notification of loss to settlement, by product."
    moves: "Down. The wait is mostly evidence being gathered; here the supporting documents are read against each other as the file is built."
  - metric: "Leakage"
    today: "Your last file-review cycle: amounts paid beyond what the wording, the authority limit or the procedure required. Note the sample size beside it."
    moves: "Down, and the sample stops being the limit — every file FACE can reach is read against the wording and the authority for its value, rather than the hundred somebody had time for. Reaching them is the part to check first: the claims and policy systems FACE connects to are named ones — Guidewire, SAP, Dynamics 365, Salesforce, ServiceNow, SharePoint, your databases and warehouses, your spreadsheets and object storage — and every one of those reads is read-only by construction."
  - metric: "Loss adjustment expense"
    today: "Ledger, last twelve months: allocated and unallocated loss adjustment expense per closed claim, by class."
    moves: "Down, because the assembly is the cost — finding the report, matching it to the schedule, checking the invoice against both."
  - metric: "Straight-through handling, read with reopen rate"
    today: "Claims workflow, same period for both: the share of closed claims that needed no manual queue step, and the share reopened inside your standard window."
    moves: "The first up, the second flat — but be clear where the mechanism sits. FACE does not settle claims and takes no settlement decision; it reads the file against the wording and the authority and drafts what it thinks should happen. What moves this pair is that the files whose documents disagree are the ones surfaced, with the disagreement named, so a handler's time goes to those instead of to the ones that were always going to be fine. Read alone the first figure is easy to game, which is why it is written here beside the second."
  - metric: "Subrogation recovery rate, and recoveries lost to time bar"
    today: "Recovery ledger: amounts recovered against amounts identified as recoverable, plus the files where the right to recover lapsed before anything was filed."
    moves: "Both by one mechanism. Small cases expire because assembling one costs more than it is worth, and that threshold follows the assembly cost."
  - metric: "Evidence-assembly time for an audit or a supervisory request"
    today: "Your last internal audit and your last supervisory request: elapsed days from question to answer, and the person-days inside that."
    moves: "Down. The observation, the rule it invoked, the records it cited and who approved it are kept as the work is done, so answering is retrieval."

foundations_heading: "Two things that make the above possible"
foundations:
  - name: "Claim files stay on your own machines"
    plain: "The reasoning runs on machines you own. Claimant details, medical evidence and adjuster notes are read where they already sit, and the model FACE reasons with is one you run: no third-party model dependency, one inference endpoint, the one you configure."
    measured_by: "The privacy assessment before any claims tooling goes live: no transfer out to a model provider to argue about. And when a supervisor asks who read a claimant's file, and under what authority, the answer is a record. Two things to hear from us rather than discover: this is how the software is built and not a property any test enforces, so it is a code review you can run; and personal detail is masked in transit by a redaction pass covering email addresses, card numbers, telephone numbers, national identification numbers and network addresses, plus named credential fields, called at more than thirty places — real code, and code that carries no tests of its own. We would rather tell you that than let you assume it was certified."
  # Corrected. This claimed "No outside search service sits in the path" and
  # "the question stays inside". The shared engine puts the query to a public
  # search endpoint (DuckDuckGo's HTML SERP) and then fetches the result pages
  # itself. A search engine does see the query. The real, defensible property
  # is the absence of a vendor account the query is filed under.
  - name: "Outside checks with no account attached to them"
    plain: "When a file needs public sources — adverse media on a claimant, a supplier's history, a court listing — the search runs from your own infrastructure through a public search endpoint, and your own browser fetches and reads the pages behind the results."
    measured_by: "Not invisibility: the search engine sees the query as it would from any browser, and anyone telling you otherwise is selling something. What is absent is the account. No API key, no vendor contract, no per-question bill — so no supplier is building a record of which claimants your firm has been asking about, filed under your firm's name and retained on their terms. That is the difference between a check you can run on a sensitive file and one your privacy officer stops."

next_heading: "See whether it fits"
next_body: "Bring one control and the systems it is meant to live in — a second-review threshold, a delegation agreement, a treaty term. Half an hour is usually enough to see whether what is written and what is applied still agree."
cta_text: "Book a consultation"
paper:
  text: "Read the FACE paper"
  url: "/blog/whitepapers/runink-face/"
  note: "Runink FACE is the product behind this page, and the link has been moved to match: it previously pointed at the CORE and Atlas paper, which describes a different arrangement — a partner's assessment platform submitting findings for the Runink CORE platform to judge. FACE does not submit findings there, so a second independent judgement is not something this page can offer you, and the claim has been removed rather than softened. The FACE paper is the long version of what is here: what gets read, what a finding contains, who approves it and where it runs. No case studies, no customer names and no return-on-investment figures — nothing on this page describes work performed for an insurer, because none has been."
---
