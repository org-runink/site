---
date: 2026-09-07T00:00:00Z
title: "Insurance"
description: "Claims decisioning, reserving and reinsurance recovery, delegated authority and conduct evidence. How Runink compares the rule as written against the rule your systems actually apply."
weight: 20
accent: "#778fe6"
card: "Claims decisioning, reserving and recovery, delegated authority, and the evidence a supervisor asks for."
headline: "The rule is written down. The question is whether it is the one being applied."
deck: "Policy wording is a rule. So is a regulatory obligation, a delegated authority agreement, an internal limit. Each one is enforced in a system, performed by a person following a procedure, or neither — and which of the three tends to surface only when somebody goes looking."

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
    line: "\"Controls were operating effectively during the period\" becomes \"here is every exception, when it was found, what was decided and by whom\"."
  - role: "Internal audit"
    line: "Evidence is a by-product of the work, so demonstrating that a control operated stops being an assembly project."
  - role: "Finance"
    line: "Where the written terms and what was charged or accrued diverge is stated plainly, with the clause and the records behind it."
  - role: "IT and security"
    line: "The reasoning runs on your hardware and the records stay on your systems, so the security review is a description, not a negotiation."

outcomes_heading: "What changes"
outcomes:
  - "The rules as written — policy wording, regulatory text, a delegation agreement — are set beside the rules your systems apply, and every difference is sorted: aligned, drifted, running without a policy, written but unenforced."
  - "Each finding carries the observation, the rule it invoked, the records it cited, a severity and a proposed action — then a second, independent judgement on it, with the reason attached."
  - "Anything turning on a judgement about risk appetite is filed as needing a person, with the ambiguity named and the write-up done."
  - "Nothing that cannot be undone proceeds without a named person, and a change to a data connection cannot be made anonymously."

measures_heading: "How you will know it worked"
measures_intro: "These figures are yours, not ours. Write down where each stands today, and over what period, before anything changes — once it moves, the baseline is gone."
measures:
  - metric: "Claims cycle time"
    today: "Claims system, last four completed quarters: median days from first notification of loss to settlement, by product."
    moves: "Down. The wait is mostly evidence being gathered; here the supporting documents are read against each other as the file is built."
  - metric: "Leakage"
    today: "Your last file-review cycle: amounts paid beyond what the wording, the authority limit or the procedure required. Note the sample size beside it."
    moves: "Down, and the sample stops being the limit: every file is read against the wording and the authority for its value."
  - metric: "Loss adjustment expense"
    today: "Ledger, last twelve months: allocated and unallocated loss adjustment expense per closed claim, by class."
    moves: "Down, because the assembly is the cost — finding the report, matching it to the schedule, checking the invoice against both."
  - metric: "Touchless settlement rate, read with reopen rate"
    today: "Claims workflow, same period for both: the share of closed claims settled with no manual queue step, and the share reopened inside your standard window."
    moves: "The first up, the second flat. Alone the first is easy to game; here only files whose documents disagree stop for a person."
  - metric: "Subrogation recovery rate, and recoveries lost to time bar"
    today: "Recovery ledger: amounts recovered against amounts identified as recoverable, plus the files where the right to recover lapsed before anything was filed."
    moves: "Both by one mechanism. Small cases expire because assembling one costs more than it is worth, and that threshold follows the assembly cost."
  - metric: "Evidence-assembly time for an audit or a supervisory request"
    today: "Your last internal audit and your last supervisory request: elapsed days from question to answer, and the person-days inside that."
    moves: "Down. The observation, the rule it invoked, the records it cited and who approved it are kept as the work is done, so answering is retrieval."

foundations_heading: "Two things that make the above possible"
foundations:
  - name: "Claim files stay on your own machines"
    plain: "The reasoning runs on machines you own. Claimant details, medical evidence and adjuster notes are read where they already sit, and nothing goes to an outside model provider."
    measured_by: "The privacy assessment before any claims tooling goes live: no transfer out to argue about. And when a supervisor asks who read a claimant's file, and under what authority, the answer is a record."
  - name: "Outside checks that do not say what you are checking"
    plain: "When a file needs public sources — adverse media on a claimant, a supplier's history, a court listing — an ordinary browser reads the open web directly. No outside search service sits in the path."
    measured_by: "The query is the sensitive part. Asking a search vendor whether a claimant is under investigation tells that vendor who you are investigating, on a record you do not control. Here the question stays inside, so the check can run on files where sending the name out would not have been acceptable."

next_heading: "See whether it fits"
next_body: "Bring one control and the systems it is meant to live in — a second-review threshold, a delegation agreement, a treaty term. Half an hour is usually enough to see whether what is written and what is applied still agree."
cta_text: "Book a consultation"
paper:
  text: "Read the CORE paper"
  url: "/blog/whitepapers/runink-core-atlas/"
  note: "The long version of the mechanism on this page: what gets read, what a finding contains, how a second independent judgement is formed, and who approves. No case studies, no customer names, no return-on-investment figures."
---
