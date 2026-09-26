---
# The homepage is front matter only, on purpose.
#
# It used to be a stack of shortcodes in this file, and it grew into an essay:
# five long use cases, written in programming vocabulary, arguing the technology
# before the customer's problem. The review of the customer-facing material
# asked for the opposite — begin with the operational challenges the customer
# faces, say who in their organisation owns the problem, and draw people into a
# conversation instead of teaching them everything up front.
#
# So the page is a fixed set of slots in layouts/index.html. There is no body
# below this front matter and no {{ .Content }} slot in the layout: anything
# longer than these slots belongs in /industries/ or /blog/whitepapers/.
#
# NO NUMBERS ANYWHERE ON THIS PAGE. No percentages, no currency, no payback
# period, no customer count, no named customer, no claimed deployment. The
# figures that matter belong to the reader, and the measures worksheets on the
# industry pages are built to say so.
#
# NO ALIASES in this file or in any of its three translations. An alias declared
# in a localised file writes to the same output path as the English one, the two
# race, and the last language built wins — that is how /whitepapers/ once
# shipped pointing at the Portuguese page.
title: "Runink"
description: "You find out when it is too late to argue. A container sits because one form is wrong and the charge starts that day. Runink FACE reads the records your systems already hold, compares each one against the rule that governs it, and puts a drafted action in front of the person who owns the decision."
# THE HOME PAGE IS DARK, AND IT IS THE ONLY MARKETING PAGE THAT IS.
#
# `ground: console` puts data-ground on <html>, which re-binds every --rk-*
# token to the dark end of the same ramp — one identity, two registers
# (DESIGN.md 8), not a second palette. The rest of the site keeps the sheet.
#
# It is a default, not a lock: a reader who has used the switch in the header
# has their choice stored, and rk-ground-script.html overwrites this attribute
# with it before first paint. The printed sheet is unaffected either way —
# tokens.css binds the console ground to white and black under @media print.
ground: "console"
date: "2024-05-20T00:00:00Z"
author: "Runink"
hero:
  eyebrow: "Logistics · Insurance · Banking · Telecom · Marketing"
  line1: "You find out when"
  line2: "it is too late to argue."
  deck: "A reefer drifts warm overnight. A review threshold is raised to clear a backlog and never put back. A rating change is right for the promotion and wrong for a legacy plan. Every one of them was written down somewhere before it cost anything."
  fig_label: "Every record, read against its own rule"
  stance_label: "Where we stand"
  stance:
    - "An action software takes on its own leaves nobody to ask afterwards."
    - "So this one drafts, and waits."
    - "The approval is the record: a name, a time, and the reason it was sent, kept together."
  product_line: "**Runink FACE** is the product behind that: it reads the records your systems already hold, compares each one against the rule that governs it, and puts a drafted action in front of the person who owns the decision."
  cta_primary: "Find your industry"
  cta_secondary: "Book a consultation"



opex_heading: "Where it shows up in your operating numbers"
opex_intro: "No figure here is ours to give you. Each of these is a line you already carry, with what drives it and where to find your own number for it. If a page tells you what you will save, it is guessing about an operation it has never seen."
opex_col_industry: "Industry"
opex_col_line: "The line"
opex_col_driver: "What drives it"
opex_col_where: "Where yours is"
opex:
  - page: "logistics-supply-chain"
    industry: "Logistics & Supply Chain"
    line: "Demurrage, detention and the claims that expire"
    driver: "A container on a hold nobody has joined to the document it is waiting for, while free time runs out. A filing window that closes while the evidence sits in four systems."
    where: "The accessorial lines on the carrier invoice, against the free-time clock on the entry. Claims filed against claims available."
  - page: "insurance"
    industry: "Insurance"
    line: "Reserves and recoveries signed off on a sample"
    driver: "A review threshold raised to clear a backlog, with the policy document still carrying the old figure and nobody deciding either way."
    where: "The share of files that took a second review, against the figure your policy wording states."
  - page: "banking-financial-services"
    industry: "Banking & Financial Services"
    line: "Breaks that clear inside the range you always clear"
    driver: "A movement that sits inside the range every month, so nothing escalates and nobody reads the sequence the months make."
    where: "The age profile of open items, against how many months each one has been carried."
  - page: "telecom"
    industry: "Telecom"
    line: "Rating errors that arrive as a rate, not as accounts"
    driver: "A rating change right for the promotion and wrong for a legacy plan, too small to move an aggregate and too late to re-rate once it does."
    where: "The error rate revenue assurance reports upward, and the sample size and month behind it."
  - page: "marketing"
    industry: "Marketing"
    line: "Work that starts again from a blank page"
    driver: "The audit tool knows the site is slow; the tool that writes does not, so it keeps writing for a page nobody stays on. This one is Runink PULSE, not FACE."
    where: "How long a brief takes to become something published, and how much of last quarter's work the next one reused."
opex_note: "Bring one of these and one month of the records behind it. That is enough to tell whether the losses you carry are the shape this addresses, and it is the only honest way either of us finds out."

figure:
  console:
    # THE CONSOLE FIGURE'S OWN WORDS. Every locale carries this block; the
    # template's English defaults exist only so a half-translated file cannot
    # render a broken picture. No number may appear here — the figure is subject
    # to the no-figures rule at the head of this file exactly as the prose is.
    title: "runink face · reading"
    live: "READING"
    states: ["READ", "COMPARED", "READ", "QUEUED"]
    rule_name: "The rule that governs it"
    rule_terms: ["POLICY WORDING", "THRESHOLD", "AUTHORITY LIMIT"]
    gate_name: "Drafted action · waits for a name"
    acts: ["APPROVE", "EDIT", "REJECT"]
    alt: "Records held in the systems you already run are read one by one against the rule that governs them, and what differs arrives as a drafted action that waits for a named person to approve, edit or reject it."
  today_label: "How it is read today"
  today_note: "Volume defeated inspection, so a sample is read and the rest is assumed to look like it. The records that differ are already in the field."
  read_label: "How Runink reads it"
  read_note: "Every record is compared against the rule that governs it, overnight, on your own machines. What differs comes out by name."
  beats:
    - title: "The records already exist"
      body: "Orders, claims, payment instructions, call detail, contracts and sensor readings — in the systems you already run."
    - title: "Every one of them is read"
      body: "Not a monthly sweep over a sample. The comparison runs record by record, so an exception arrives as a named item rather than an estimated rate."
    - title: "A person decides what happens"
      body: "Each finding arrives with the rule it broke, the records behind it and a drafted action, for someone to approve, edit or reject."
  caption: "How long it takes in your operation between something being recorded and somebody acting on it is a number worth having. Few operations have ever counted it. That gap is usually where the cost sits, and it is a good first thing to measure together."

# THE CONSTELLATION — the band between the hero and the ledger.
#
# It draws the systems a company already runs and the lines between them, with
# one reader in the middle. Five named systems, one per industry, in the same
# five hues the ledger rows carry. No number appears in it, for the reason
# stated at the head of this file: the figures belong to the reader.
constellation:
  label: "Your systems, read together"
  intro: "Each of these already holds part of the answer, and none of them holds all of it. Runink FACE reads them against the rules that govern them, so a difference arrives as one item with the records behind it rather than as four screens somebody has to reconcile."
  eyebrow: "THE LINES ARE THE WORK"
  nodes: ["TMS", "ERP", "TRACKING", "CLAIMS", "LEDGER", "RATING", "CHANNELS"]
  spurs: ["GATE", "CAMERA", "EMAIL", "PORTAL"]
  hub: "READ TOGETHER"
  legend:
    - "The systems you already run"
    - "Records that arrive from outside them"
    - "One reader, and the rule it reads against"
  alt: "The systems a company already runs — its transport system, its claim files, its ledger, its rating configuration and the channels it publishes on — drawn as points joined by lines to one reader in the middle, which reads all of them against the rules that govern them."

industries_heading: "Five industries, one shape of problem"
industries_intro: "Find the line that reads like your week. Each one opens on the scenarios that industry actually runs — cold chain, a customs filing, an equipment limit, a loss file, a clause — each worked from the record that starts it to the person who approves what is done about it."
industries_open: "Open"
industries_cta: "See the fit"
industries_columns:
  name: "Industry"
  cost: "What it is quietly costing"
  owner: "Who owns it in your building"
industries:
  - page: "logistics-supply-chain"
    name: "Logistics & Supply Chain"
    cost: "An entry held at the port for a missing paper while the daily charge runs. A freight claim still inside its filing window that nobody had the morning to assemble."
    reads: "Every entry is compared against the rule that governs it — held, under examination or detained, with days held above zero — so a hold arrives as a named entry with the charge counted from your own rate."
    owners:
      - "Operations director"
      - "Chief financial officer"
      - "Trade compliance"
    flow:
      - when: "Before it ships"
        jobs:
          - name: "Demand and fulfilment"
            line: "A line starts moving weeks before the reorder point does, and the plan catches up after the stockout."
          - name: "Equipment limits"
            line: "The chiller, the conveyor and the lift write down what they are doing all day, and somebody reads it after the load is the evidence."
      - when: "In transit"
        jobs:
          - name: "Cold chain"
            line: "A container drifts warm overnight and nobody opens the door until morning."
          - name: "Reactive logistics"
            line: "The plan that was right at six in the morning is wrong by ten, and nobody re-runs it."
          - name: "Customs filing"
            line: "The box is stopped at the border and the filing it was declared under is a separate story in a separate system."
      - when: "After it comes back"
        jobs:
          - name: "Reverse logistics"
            line: "A return is worth the most on the day it comes back, and the grading call waits."
      - when: "When the money moves"
        jobs:
          - name: "Claims and disputes"
            line: "A claim expires because assembling one takes a morning nobody had that week."
          - name: "Underwriting"
            line: "The wording, the loss report, the reserve history and the authority limit sit in four places."
    cases:
      - label: "Customs hold · A container held at the port, from hold to cleared"
        steps:
          - step: "The hold shows up"
            body: "An entry comes back held, under examination or detained, and the count of days it has been held is above zero. That combination is the whole test — it is a fixed rule, not a judgement, and it runs against every entry rather than the ones somebody thought to check."
          - step: "The cost is counted from your own rate"
            body: "The days it has been held, multiplied by the per-day demurrage rate in your own agreement. That is the arithmetic in full. It is the figure that is already accruing while the entry sits in a queue nobody reads end to end."
          - step: "The missing paper is named"
            body: "The reason for the hold and the documents outstanding against it come off the entry record and are stated on the item, so the person who picks it up is not starting by finding out what is wrong."
          - step: "The accountable party is checked"
            body: "Separately, entries are read for an importer of record that is blank, or filled in with the consignee, or with a placeholder somebody typed once. Those carry duty and tax with nobody accountable for them, and they are raised as their own item with the amount at stake attached."
          - step: "Every pound is counted once"
            body: "Demurrage on a held entry and duty on an unattributed one are different money, and counting them as one number is the commonest way this sort of total gets inflated. They stay separate, deliberately, and there is a test that fails if they ever merge."
          - step: "A named person decides"
            body: "The item waits. Approving it is what sends anything, and who approved it, when, and what they changed is written down. If part of what was drafted could not be carried out, the result names that part rather than reporting success."
      - label: "Cold chain · A reefer that drifted warm, from the door to a filed claim"
        steps:
          - step: "The frame arrives"
            body: "A photograph taken on a handheld at the door, or a still pulled off a yard camera. Before anything reads it, it is checked to be an image: the header is decoded on its own, the format has to be one of two, and the size is capped both in bytes and in pixels. A PDF, a video container or raw bytes are refused at that step."
          - step: "A model reads it, on your hardware"
            body: "The frame is reduced to a size the model can take and read by a vision model running on machines you control. What comes back is a written observation tied to the exact frame it was read from, so the sentence and the evidence for it stay together."
          - step: "The paperwork is read beside it"
            body: "The consignment record, the handover, and the condition the documents say the load should be in. The observation is set against what was already written down rather than against a threshold somebody picked."
          - step: "What differs comes out named"
            body: "The pallet, the crate, the container door — named, in the words a person would use. A severity score cannot be argued with in front of a carrier. A named part of a named consignment can."
          - step: "The call reaches the person who owns it"
            body: "A cue can be broadcast to whatever is subscribed to the yard's event stream, and the record keeps it as what it is: requested. What happens next is somebody's decision, and the record says so rather than implying a movement was stopped."
          - step: "A named person decides"
            body: "The item waits, exactly as the held entry does. Approving it is what sends anything, and who approved it, when, and what they changed is written down."
      - label: "Customs filing · A manifest that came back rejected, from the filing to the paper it named"
        steps:
          - step: "The filing is read, not the clearance"
            body: "An entry can be stopped at the border on a manifest the authority accepted, and a filing can be rejected while the box is still moving. Held is a clearance state and rejected is a filing state. Each is read where it is written, and neither is ever read as the other."
          - step: "The code travels as it was written"
            body: "The exception code the rejection carried comes across word for word, with the manifest it belongs to, the port it was filed at and who filed it. Your broker gets the reference to quote back rather than somebody's paraphrase of it."
          - step: "Each missing paper is named on its own line"
            body: "Every document the filing named as outstanding comes out as its own item, carrying the record it was read from. What is waiting on whom is the first thing on the page rather than the thing somebody works out from it."
          - step: "Silence is written down as silence"
            body: "Where the records do not say what the filing came back as, that is raised as its own finding. Reading the clearance status as the filing status would assert a filing nobody declared, so it is never done — an entry can sit on a hold with its manifest accepted."
          - step: "The delay is counted once"
            body: "Demurrage running on that entry is already counted by the held-entry item above, so here it travels as what is at stake rather than as a second charge. One delay counted twice is the commonest way a total gets inflated, and there is a test that fails if the two ever merge."
          - step: "A named person decides"
            body: "What leaves is the document a broker or a port authority is shown, and it leaves when somebody approves it. Who approved it, when, and what they changed stays with it."
      - label: "Equipment limits · A machine drifting towards the limit its own feed states"
        steps:
          - step: "A limit nobody stated is not a limit"
            body: "The figure a reading is compared against is read out of the feed itself — an alarm temperature, a trip point, a replace-below level. Where the feed states only what the machine ran at when it was healthy, the drift is reported and nothing is projected against it, because a healthy baseline is not a point at which anything fails."
          - step: "The readings are compared in order"
            body: "The first reading in the window, the latest one, how many were comparable, and how far the latest sits from the stated limit. Each figure carries the reading it came from, so your engineer checks the arithmetic against the feed instead of taking it on trust."
          - step: "The line drawn through them is arithmetic, not a forecast"
            body: "Where the readings support it, a straight line through the first and the last says when it would reach the stated limit at that rate. That is a description of two readings, and every document of this kind says so on its face."
          - step: "No probability, no confidence, no remaining life"
            body: "None of the three is on the document, and that is structural rather than a matter of wording: there is no field for them to go in. A failure score fitted to a handful of readings reads as a measurement and is not one. A number a planner can recompute is worth more than a confident one they cannot."
          - step: "A named person schedules the work"
            body: "The item reaches maintenance with the machine, the channel, the stated limit and the readings behind it. Approving is what raises the job, and who approved it, when, and what they changed stays on the record."
  - page: "insurance"
    name: "Insurance"
    cost: "A review threshold raised to clear a backlog, meant to be temporary, never put back and never decided either way. Reserve movements checked by sample because the stream is too long to read."
    reads: "The figure that sets a second review is read out of the policy wording itself and compared against what the workflow applied, so a file reviewed on the wrong threshold comes back named rather than sampled."
    owners:
      - "Claims operations"
      - "Compliance and risk"
      - "Internal audit"
    flow:
      - when: "when authority is delegated"
        jobs:
          - name: "Delegated underwriting"
            line: "You still answer for what is decided under the agreement, and the reports the agent sends back have to be read against it."
      - when: "when a loss is notified"
        jobs:
          - name: "Cargo loss survey"
            line: "What was lost, what it was carried under and what the cover declares it to be worth sit in the claim file, the shipment record and the policy, and somebody assembles the three by hand."
          - name: "Clause and deadline review"
            line: "A paragraph settles the question and a date decides whether it is still worth asking, and both take an afternoon to find."
      - when: "while the file is open"
        jobs:
          - name: "Second review"
            line: "The workflow applies one figure while the policy document still carries another, and which of the two governs is settled the first time somebody is asked."
      - when: "at period end"
        jobs:
          - name: "Reserving and recovery"
            line: "Treaty terms set what you can recover, and whether a loss was presented under the right ones is a reading of the treaty against the file."
    cases:
      - label: "Policy drift · A second-review threshold, from raised in the workflow to decided on the record"
        steps:
          - step: "The policy wording is read"
            body: "The clause that sets the value at which a claim needs a second review is read out of the policy document. It comes back stated in plain English, with the document it was read from named beside it."
          - step: "The workflow's own rule is read"
            body: "Separately, the claims system is read for the threshold it actually applies to a file today. It is read where it sits: the connection to your claims data reads the records and leaves them as they are."
          - step: "The difference is named as drift"
            body: "Every rule lands in one of four states. Aligned: the policy says it and the systems do it. Drift: the systems do something adjacent. Shadow: logic is running that no policy describes. Missing: the policy describes a control nothing performs. A threshold raised in the workflow and left out of the document comes back as drift. Read that as a reconnaissance: the finding names the policy document and the implementation it was read out of, and carries a confidence, so a compliance officer is checking a specific claim against two named sources."
          - step: "The finding reaches one queue"
            body: "It carries the observation, the rule it invoked, the records it cited, a severity and one specific proposed action. This one turns on risk appetite — whether the raised threshold is the one you now want — so it waits, with the ambiguity named and the write-up already done."
          - step: "A named person decides"
            body: "Someone approves, edits or rejects the drafted action, and that decision is recorded as an event carrying who made it. Whether the wording is updated to the new figure or the workflow is put back to the old one, the observation, the rule, the records and the approval are kept as the work is done. When an auditor asks what this control did, answering is retrieval."
      - label: "Cargo underwriting · A loss file assembled for the underwriter who has to decide"
        steps:
          - step: "The file is built from the records, not from the account of them"
            body: "What the records say was short, what they say was damaged, which shipment it travelled on, and what the cover declares it to be worth. Every figure is cited at the moment it is read, so an underwriter opens one document instead of four systems."
          - step: "The deductible is stated and never subtracted"
            body: "Taking it off the loss produces a recoverable figure, and that arithmetic only means something once somebody has decided the policy responds. That decision belongs to the underwriter, so the figure is left where they can make it."
          - step: "The conditions the cover sets are audited on their own"
            body: "A temperature band, a packing standard, a security routing — each read against the records that either kept it or did not. The audit never reads the loss and the loss file never reads the audit. Putting the two in one paragraph composes a coverage defence, and composing one is an underwriter's act rather than software's."
          - step: "Could not look is not the same as no breach"
            body: "A condition the records say nothing about comes back as not evidenced, never as kept. A band written in one unit is not compared against a probe logging another, because converting invents precision the records never had. A claim declined on an assumed condition is paid for by the assured, who never learns why."
          - step: "A named person decides whether it responds"
            body: "Nothing here binds, settles or declines. The survey and the audit chain to the same shipment, arrive together, and wait for the person with authority over the file."
      - label: "Paralegal review · The clause that governs it, and the record it was held against"
        steps:
          - step: "The question is the ordinary one"
            body: "May they sub-contract this. Is the retention period we run the one we committed to. Somewhere in the agreement a paragraph settles it outright, and finding the paragraph is the whole cost."
          - step: "The passage comes back with the record beside it"
            body: "The clause is read out of the document and stated in plain English, with the document it came from named. The rule as it actually runs is read where it runs. The two arrive side by side, so the conversation starts at the difference rather than at the search."
          - step: "A date is computed by a named rule, and refuses to guess"
            body: "A notice period or a filing window is worked out from a date on the record by a rule that cites the authority it comes from, and it says which event it ran from — the day the goods arrived, or the day they should have. Where the record carries no usable date, no date is produced: the item says so and carries the warning instead."
          - step: "Checked and clean and could not check are different entries"
            body: "Most tools show both as a tick. Here the second is a state in its own right, with the reason it arrived written in a sentence — nothing came back, what came back could not be read, what came back was empty. It is the entry an audit is actually hunting for."
          - step: "It hands back a note, and the judgement stays yours"
            body: "What comes back is a next step in business language: draft this letter, raise this ticket, take this to the officer who owns the framework. The reading is the software's. Deciding what it means is the person's, and their name is on the record that says so."
  - page: "banking-financial-services"
    name: "Banking & Financial Services"
    cost: "A break that grows inside the range you always clear, so no single month escalates and nobody reads the sequence. A supplier contract nobody has opened since signature."
    reads: "Each break is read against the sequence its own months make rather than the range it sits inside, so a movement that clears every month stops disappearing into the aggregate."
    owners:
      - "Compliance and risk"
      - "Internal audit"
      - "Finance"
    flow:
      - when: "when a payment destination changes"
        jobs:
          - name: "Destination verification"
            line: "Whether the rule on a payment destination was enforced in the system or followed by a person has a habit of surfacing after the event rather than before it."
      - when: "after a contract is signed"
        jobs:
          - name: "Supplier obligations"
            line: "The agreement carries obligations on service levels, sub-contracting, data handling and notification, and reading it back against the relationship you actually have is a comparison that gets made when something has already gone wrong."
      - when: "when the fee is charged"
        jobs:
          - name: "Rate card check"
            line: "Tiers, thresholds and product terms make the fee a reconciliation between what the terms say and what was charged."
    cases:
      - label: "Open items · A reconciliation break, from a run of clearings to a decision on the record"
        steps:
          - step: "The month clears as usual"
            body: "The movement sits inside the range that has been cleared before. It is cleared the way the month before it was cleared, and on its own it reads like that month."
          - step: "The sequence is read, not the month"
            body: "The comparison runs over the series rather than the latest figure. What stands out is the shape of a run of movements, each of which sits inside the range on its own."
          - step: "The item is raised with its series"
            body: "The item says the sequence is unusual against the history available, and cites the series it was read from. The months, the values and the range they sat inside travel with it, so whoever opens it starts with the evidence in front of them."
          - step: "A named person decides"
            body: "The item waits in one queue with the series it cites already attached. Approving it, editing it or rejecting it is that person's decision, and the cause is theirs to write: naming one takes somebody who knows what changed in the operation that month."
          - step: "The record answers the next request"
            body: "Who decided, when, what was cited and what was changed stay together, each entry hashed against the one before it, so a later change to the record shows. When the supervisor or the internal reviewer asks, the answer is read rather than reassembled."
      - label: "Supplier obligations · Service levels the agreement prices, read against what was delivered"
        steps:
          - step: "The obligations are read out of the agreement"
            body: "Service levels, sub-contracting, data handling, notification. Each comes back stated in plain English with the clause it was read from named, so what you signed up for is legible without opening the file."
          - step: "What the supplier delivered is read where it is recorded"
            body: "The performance records are read where they already sit, and set against the level the agreement states. The comparison runs item by item rather than over a sample, so a miss arrives as a named item instead of a share."
          - step: "A miss the contract already prices carries that price"
            body: "Where the agreement sets a credit for the breach, the figure is the agreement's own arithmetic over the misses that were confirmed. It is money already owed under a document both parties signed, not a claim invented on top of one."
          - step: "A named person decides what is asked for"
            body: "Whether the credit is claimed, waived or raised at the next review is a commercial decision, and it stays one. The item waits with the clause, the records and the arithmetic attached, and the approval keeps who decided and why."
  - page: "telecom"
    name: "Telecom"
    cost: "A rating change that is right for the promotion and wrong for a legacy plan, too small to move an aggregate. A sweep that returns an error rate when operations needs the accounts by name."
    reads: "Each account's rated output is read against that subscriber's own plan terms, record by record rather than as a monthly sweep over a sample."
    owners:
      - "Revenue assurance"
      - "Interconnect settlement"
      - "Finance and procurement"
    flow:
      - when: "when usage is rated"
        jobs:
          - name: "Revenue assurance"
            line: "Rating is where the plan terms meet the usage, and a change made for one product lands on every account the configuration touches."
      - when: "at period end"
        jobs:
          - name: "Interconnect settlement"
            line: "Your traffic, the counterparty's record of the same traffic and the agreement that sets the rates are three sources, and the one difference that matters shows up at period end as an open item with an age on it."
      - when: "as sites are built"
        jobs:
          - name: "Network rollout"
            line: "Approved spend, purchase orders, equipment received and sites carrying traffic sit side by side only when somebody assembles that view by hand, and a site that took delivery but was never turned up sits inside it unnoticed."
    cases:
      - label: "Revenue assurance · A rating change wrong for one legacy plan, from the first wrongly rated call to an approved re-rate"
        steps:
          - step: "The rating is read against the plan"
            body: "Each account's rated output is read against that subscriber's own plan terms, and the comparison is per record rather than a monthly sweep over a sample. What comes back is the accounts by name, which is what a re-rate needs, rather than an error rate, which is what a report needs."
          - step: "The finding carries its evidence"
            body: "Before anything goes to a model, the finding is checked: complete enough to read, carrying evidence, with at least one piece of that evidence readable, about the account it names rather than something next to it, and dated recently enough to say something about now. Evidence that only writes the claim out a second time ends the matter there. Each check that fires states its own reason in a sentence a person reads."
          - step: "The rate is recomputed from counts"
            body: "A finding that claims a rate is settled by arithmetic on the raw counts, recomputed rather than accepted. A count divided by nothing comes back as unable to judge."
          - step: "A second credential forms the verdict"
            body: "The judging runs on a different credential from the submitting, and which credential a message carries is settled by the door it arrived at rather than by a field the sender fills in. A verdict of unable to judge is an answer in its own right: it arrives with its reason written next to it and goes to a person, exactly as a disagreement does."
          - step: "Revenue assurance approves the re-rate"
            body: "The item waits, with the account named, the plan terms it was read against, and the records it came from. Approving is what sends anything, and who approved it, when, and what they changed stays on the record. The remedy is a configuration correction and a re-rate, made while a re-rate still fixes it."
      - label: "Interconnect settlement · Two records of the same traffic that do not agree"
        steps:
          - step: "Both sides are read against the agreement"
            body: "Your record of the traffic, the counterparty's record of the same traffic, and the agreement that sets the rates. The reading happens while both sides still hold the detail rather than at the end of the cycle, when one of them no longer does."
          - step: "A disagreement is never averaged"
            body: "Two readings of the same traffic that differ come back as unable to judge, carrying both figures and where each was read. Splitting the difference produces a third figure neither party observed, and in a settlement argument that figure cannot be defended by either side."
          - step: "Unable to judge is an answer, with its reason attached"
            body: "No evidence, evidence that only writes the claim out a second time, evidence about a different account, evidence too old to say anything about now — each ends the matter there, states its own reason in a sentence a person reads, and goes to a person."
          - step: "A named person takes it to the counterparty"
            body: "The item carries the period, both records and the rate the agreement sets. Approving is what sends it, and what was cited and what was changed stay on the record for the next cycle to start from."
  - page: "marketing"
    name: "Marketing"
    cost: "The audit tool knows the site is slow. The content tool does not, so it keeps writing for a page nobody stays on. Every campaign starts again from a blank page."
    reads: "Your site and the channels you publish on are read first, so the next brief starts from where you actually stand instead of from a blank page."
    owners:
      - "The marketing lead"
      - "Sales"
      - "IT and information security"
    flow:
      - when: "before anything is written"
        jobs:
          - name: "Deciding what to say"
            line: "What to write next depends on what the site is already doing, and those two answers live in different tools."
      - when: "between brief and publication"
        jobs:
          - name: "Getting it out"
            line: "Brief, draft, review, schedule — each step waits for the one before it, so whether you can answer a competitor's announcement at all is decided by your own turnaround."
      - when: "when a lead arrives"
        jobs:
          - name: "Following up"
            line: "The customer system knows a lead went quiet in week three; the scheduler does not."
    cases:
      - label: "Site audit · A page nobody stays on, from the audit that finds it to an approved draft"
        steps:
          - step: "The audit reads your site"
            body: "You bring your website and the channels you publish on. Reading them and telling you where you stand is the first thing Runink PULSE does. What it finds comes back ranked, and it is applied from the same screen."
          - step: "One diagnosis feeds every channel"
            body: "That same diagnosis feeds the channel analysis, the content plan, the schedule and every draft. What goes out carries one argument rather than four versions of it."
          - step: "The brief becomes a draft"
            body: "The brief goes in and a draft comes back. From there it sits in a queue where you can see it, instead of going quiet between one step and the next."
          - step: "Each piece carries one status"
            body: "Draft, waiting for review, approved, rejected, published, archived. Those are the statuses PULSE keeps, so what is waiting on you and what actually went out are both visible."
          - step: "A named person approves it"
            body: "Every draft — post, whitepaper, cold email, call script — lands in a review queue with an approve and a reject. Approving is a step a named person takes rather than a formality the system performs for them."
      - label: "Lead follow-up · A lead that went quiet in week three"
        steps:
          - step: "The customer record is what says it went quiet"
            body: "The lead, the stage it reached and the day it last moved are read from the customer-record system the team already works in, rather than from a second list somebody keeps beside it."
          - step: "The company is researched before anything is written"
            body: "Runink PULSE reads what is public about that company first, so what it drafts starts from what it found rather than from a template with a name dropped into it."
          - step: "The follow-up comes back written for that one company"
            body: "A cold email, a call script and a direct message per company, and the leads synchronise back to the customer-record system, so sales keeps working where it already works."
          - step: "A named person sends it"
            body: "Every draft lands in a review queue with an approve and a reject, and carries one visible status while it waits. Approving is a step somebody takes rather than a formality the system performs for them."

why_heading: "What changes in the week"
why_intro: "Three changes, and they are the ones that move the lines above."
why:
  - glyph: "finding"
    title: "You get the finding, not the data"
    body: "A dashboard shows you a number and leaves the work to you. This arrives as one specific proposed action, ranked, with the rule it invoked and the records it cited attached to it."
  - glyph: "approve"
    title: "A named person decides"
    body: "A finding arrives as a drafted action and waits. Approving it is what sends it, and who approved it, when, and what they changed stays on the record — so the reason can be given later without assembling it again."
  - glyph: "held"
    title: "Your records stay on your machines"
    body: "The files and the reasoning about them run on hardware you control. Nothing is sent to an outside model provider, which is usually the shortest route through a security review."

paper:
  text: "Read the FACE paper"
  url: "/blog/whitepapers/runink-face/"
  note: "The long version: what it reads, what it produces, who approves it and where it runs."


# Runink products you may have heard of — this replaced the leadership block.
#
# WHAT IT REPLACED AND WHAT THAT COST. "Who you would be working with" rendered
# data/leadership.yaml and was the only place on this site where a person is
# named. Losing it is a real loss: an outside audit called a resolvable founder
# the highest-leverage credibility item this company has.
#
# So the person is not gone, he is one click away, and the LAST ROW of this block
# is what carries him. That row is also load-bearing for a different reason:
# /company/ had exactly one inbound link in a 433-page build and this was it.
# Remove the row and rule 9 breaks — a page with no inbound link is still
# published, and /company/ is the page rule 9 names by name.
#
# EVERY FIGURE HERE IS READ FROM THE PAPER IT DESCRIBES. The page counts come
# from each whitepaper's own source_pages, and the layout resolves the title and
# URL from the page itself rather than repeating them, so a renamed or moved
# paper cannot leave a wrong number or a dead row behind.
products_heading: "Runink products you may have heard of"
products_intro: "Three products and one joint paper. Each one is a long document that explains the mechanism rather than a brochure — what the software looks at, what it produces, who approves it, and where it runs."
products_cta: "Read the paper"
products:
  - paper: "runink-face"
    name: "Runink FACE"
    sub: "Fulfilment Autonomous Claims Engine"
    line: "The one this page is about. Held entries, claims still inside their window, cold chain read after the write-off, demand that grew on the way up the chain."
  - paper: "runink-pulse"
    name: "Runink PULSE"
    sub: "Prescriptive Unified Lead & Social Engine"
    line: "A separate product, not a FACE feature. The audit, the research, the prospecting and the material a marketing team publishes, on one application the team operates directly."
  - paper: "runink-core"
    name: "Runink CORE"
    sub: "The operations layer, on hardware you own"
    line: "A product in its own right, sold separately. It is the answer to where your data is processed and who can see it, which is the question every other page here eventually arrives at."
  - paper: "runink-core-atlas"
    name: "Runink CORE and Atlas"
    sub: "A joint paper with Logical Leap"
    line: "Atlas's oversight screens, running inside CORE on your own data, with a second opinion built in for the findings an outside platform submits. Written with Logical Leap rather than about them."
products_more_text: "How we build it, and who"
products_more_url: "/company"

contact:
  heading: "Bring one lane, one claim, or one month of invoices."
  deck: "A short conversation is usually enough to tell whether the losses you carry are the shape this addresses. If they are not, we will say so."
  book_title: "Book a consultation"
  book_body: "Half an hour, with whoever owns the problem in the room. We will walk one real example of yours end to end."
  book_cta: "Choose a time"
  form_title: "Or write to us"
  form_deck: "Tell us what is costing you, in your own words. We reply within one working day."
  name_label: "Full name"
  name_placeholder: "Jane Doe"
  email_label: "Work email"
  email_placeholder: "jane@company.com"
  company_label: "Company"
  company_placeholder: "Your organisation"
  source_label: "How did you hear about us?"
  source_default: "Select an option"
  source_options:
    - { value: "Referral", text: "Someone referred us" }
    - { value: "LinkedIn", text: "LinkedIn" }
    - { value: "Web Search", text: "Web search" }
    - { value: "Event", text: "An event" }
    - { value: "Other", text: "Other" }
  about_prefix: "About: "
  message_label: "What is the problem you are trying to solve?"
  message_placeholder: "One example is enough — a held entry, a claim, a reconciliation that takes a week."
  submit: "Send message"
  note: "We use what you send here to reply to you and for nothing else."
  done_title: "Message received"
  done_body: "Thank you. We will reply within one working day."
---
