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
date: "2024-05-20T00:00:00Z"
author: "Runink"
hero:
  eyebrow: "Supply chain, fulfilment, claims and underwriting"
  line1: "You find out when"
  line2: "it is too late to argue."
  deck: "A reefer drifts warm overnight. A return sits ungraded while its value falls. A claim runs out its filing window. Every one of them was written down somewhere before it cost you anything."
  stance_label: "Where we stand"
  stance:
    - "An action software takes on its own leaves nobody to ask afterwards."
    - "So this one drafts, and waits."
    - "The approval is the record: a name, a time, and the reason it was sent, kept together."
  cta_primary: "Find your industry"
  cta_secondary: "Book a consultation"


# The six jobs, named the way an operations team names them.
#
# WHY THIS BLOCK EXISTS AND WHY IT IS THIS HIGH. The hero is a hook and the
# industries ledger further down answers "who has this problem". Neither answers
# the question a supply-chain reader asks in the first fifteen seconds, which is
# "is this pointed at anything I recognise". Before this block the page went from
# a sentence about arguing straight to an abstract figure, and a reader scanning
# for cold chain or returns or claims found nothing to catch on.
#
# It is a DIFFERENT AXIS from the industries ledger, not a second copy of it.
# Industries are who; these are what. Logistics & Supply Chain is one row down
# there and six rows up here.
#
# EVERY ROW LINKS TO A PAGE THAT ALREADY EXISTS and describes the mechanism. The
# copy here is the loss in the reader's own vocabulary, taken from that page's
# own description, so the band cannot drift from what the page goes on to say.
# Nothing here claims a capability: each line is a sentence about the reader's
# week, not about the software.
domains_heading: "Six jobs it is pointed at"
domains_intro: "Named the way an operations team names them. Open the one that reads like your week and it walks the whole job, start to finish."
domains_cta: "See how"
domains:
  - page: "cold-chain-safety"
    name: "Cold chain"
    line: "A container drifts warm overnight and nobody opens the door until morning."
  - page: "responsive-reverse-logistics"
    name: "Reverse logistics"
    line: "A return is worth the most on the day it comes back, and the grading call waits."
  - page: "route-optimization"
    name: "Reactive logistics"
    line: "The plan that was right at six in the morning is wrong by ten, and nobody re-runs it."
  - page: "demand-forecasting"
    name: "Demand and fulfilment"
    line: "A line starts moving weeks before the reorder point does, and the plan catches up after the stockout."
  - page: "insurance-underwriting"
    name: "Underwriting"
    line: "The wording, the loss report, the reserve history and the authority limit sit in four places."
  - page: "claims-recovery"
    name: "Claims and disputes"
    line: "A claim expires because assembling one takes a morning nobody had that week."

# Where it shows up in the operating numbers.
#
# WHY THIS BLOCK EXISTS. The page told a reader what happens in their week and
# what the software does about it, and never once named the line on which any of
# it costs money. An operations director can recognise a warm reefer and still
# not have a reason to forward the page to a finance director.
#
# HOW IT STAYS INSIDE RULE 1. It names a measure and says where in the reader's
# own systems to find it, and it puts no number on anything. That is the exact
# permission rule 1 grants and the exact line it draws: naming demurrage is a
# neutral domain fact; asserting what you would save is not. Every "where yours
# is" points at a document the reader already owns — a carrier invoice, a
# write-off account, a credit note — so the figure that ends the sentence is
# theirs and is checkable the same afternoon.
#
# The five lines map onto the six jobs above: cold chain, reverse, reactive,
# demand and fulfilment, and the claims/underwriting pair share the last row
# because they share the file.
opex_heading: "Where it shows up in your operating numbers"
opex_intro: "No figure here is ours to give you. Each of these is a line you already carry, with what drives it and where to find your own number for it. If a page tells you what you will save, it is guessing about an operation it has never seen."
opex_col_line: "The line"
opex_col_driver: "What drives it"
opex_col_where: "Where yours is"
opex:
  - line: "Demurrage and detention"
    driver: "A container sitting on a hold that nobody has joined to the document it is waiting for, while free time runs out."
    where: "The accessorial lines on the carrier invoice, against the free-time clock on the entry."
  - line: "Spoilage and rejected loads"
    driver: "A temperature excursion that nobody saw until the door was opened, by which time the consignee decides what it is worth."
    where: "The write-off account, and the credits raised against rejected deliveries."
  - line: "Returns handling, and the recovery a delay costs you"
    driver: "A grading call that waits. The item is worth the most on the day it comes back and less on every day after it."
    where: "Cost per return, against the difference between the recovery you took and the one available on day one."
  - line: "Expedite freight and stockout"
    driver: "A plan that caught up after the fact, so the fix had to be bought at short notice."
    where: "Premium freight as a share of the lane, and the service credits raised against the misses."
  - line: "Claim leakage, and the hours to assemble one"
    driver: "A filing window that ran out while the evidence sat in four systems, and a file that takes a morning to put together."
    where: "Claims filed against claims available, and adjuster or paralegal hours per file."
opex_note: "Bring one of these and one month of the records behind it. That is enough to tell whether the losses you carry are the shape this addresses, and it is the only honest way either of us finds out."

figure:
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

industries_heading: "Five industries, one shape of problem"
industries_intro: "Find the line that reads like your week. Each one opens onto a page written for that industry, including the measures to write your own figures against."
industries_cta: "See the fit"
industries_columns:
  name: "Industry"
  cost: "What it is quietly costing"
  owner: "Who owns it in your building"
industries:
  - page: "logistics-supply-chain"
    name: "Logistics & Supply Chain"
    cost: "An entry held at the port for a missing paper while the daily charge runs. A freight claim still inside its filing window that nobody had the morning to assemble."
    owners:
      - "Operations director"
      - "Chief financial officer"
      - "Trade compliance"
  - page: "insurance"
    name: "Insurance"
    cost: "A review threshold raised to clear a backlog, meant to be temporary, never put back and never decided either way. Reserve movements checked by sample because the stream is too long to read."
    owners:
      - "Claims operations"
      - "Compliance and risk"
      - "Internal audit"
  - page: "banking-financial-services"
    name: "Banking & Financial Services"
    cost: "A break that grows inside the range you always clear, so no single month escalates and nobody reads the sequence. A supplier contract nobody has opened since signature."
    owners:
      - "Compliance and risk"
      - "Internal audit"
      - "Finance"
  - page: "telecom"
    name: "Telecom"
    cost: "A rating change that is right for the promotion and wrong for a legacy plan, too small to move an aggregate. A sweep that returns an error rate when operations needs the accounts by name."
    owners:
      - "Revenue assurance"
      - "Interconnect settlement"
      - "Finance and procurement"
  - page: "marketing"
    name: "Marketing"
    cost: "The audit tool knows the site is slow. The content tool does not, so it keeps writing for a page nobody stays on. Every campaign starts again from a blank page."
    owners:
      - "The marketing lead"
      - "Sales"
      - "IT and information security"

# The one block that names the product. It sits here, after the industries and
# before the reasons, because this is the earliest point the page's own order
# allows a product name: everything above it is in the buyer's vocabulary, and a
# reader who has just found their own line in the ledger is exactly where the
# question "so what is it called" arrives. Until this slot existed the page
# answered it only in the paper link near the bottom, so a reader could finish
# the whole page without learning the product's name.
#
# It is one heading, one paragraph and one footnote on purpose, and no call to
# action of its own. Naming the product is not a licence to start describing it
# — that is the essay this page was rebuilt to get away from, and the depth
# belongs in /blog/whitepapers/runink-face/.
#
# The three translations do not carry this key yet. The layout guards the whole
# band with `with .Params.product` and the footnote again with `with .note`, so
# they drop the section rather than render an empty one. They will each need
# `heading`, `deck` and `note` translated, with "Runink FACE" left as it stands,
# before the name reaches those locales — and the `description` above, which now
# names the product where a search result or a shared link will show it.
product:
  heading: "The product is Runink FACE"
  deck: "Runink FACE is the product behind every line above. It reads the records your systems already hold, compares each one against the rule that governs it, and puts a drafted action in front of the person who owns the decision. What changes between industries is which records matter and which rule applies; the reading, the drafting and the approval do not."
  parts:
    - name: "The agents that read"
      body: "They run against every record rather than a sample, on a schedule you set. Each one compares what a record says against the rule that governs it, and what comes out is one item with the rule it invoked and the records it cited attached to it."
    - name: "The screen where it waits"
      body: "One queue, ranked, of things somebody has to decide. Approving is what sends anything, and who approved it, when, and what they changed stays on the record."
    - name: "Where it sits"
      body: "It reads from the systems you already run — the order system, the carrier records, the claim files — and leaves them as they are. What it adds is one record for each decision: what was found, which rule, which records, and who signed it off."
  more:
    text: "What FACE reads, and what it produces"
    url: "/products/face/"

# A single scenario, walked end to end.
#
# WHY THIS BLOCK EXISTS. The hero names a held customs entry in one clause and the
# industry ledger names it again in one line, and neither shows what actually
# happens. A reader who is deciding whether to spend half an hour on a call needs
# one concrete case, in their own vocabulary, with the arithmetic visible.
#
# WHY CUSTOMS AND NOT SOMETHING ELSE. Because it is the case where what the
# software does is entirely deterministic and can be described exactly. The two
# artifacts behind this — the held-entry card and the importer-of-record card —
# are derived by fixed rules with no model involved at any step, so every line
# below can be defended from the code rather than from a demo.
#
# WHAT IS DELIBERATELY NOT HERE. No figure, no rate, no saving, and no
# percentage: rule 1. Every number on this block is one the READER supplies from
# their own entry and their own tariff — the per-day rate is the one on their
# agreement, the duty is the one on their entry. And nothing here says the
# software files, clears, classifies or calculates anything, because it does
# none of those and the page describes what is there and stops (rule 2).
scenario_heading: "Two of them, walked end to end"
scenario_intro: "A container held at the port, and a reefer that drifted warm at the door. Each one from the moment it happens to the moment somebody acts on it, in order, with the middle left in."
scenario_note: "Both end the same way: a named person with the evidence already assembled in front of them, on the day it still counts. The first is arithmetic over your own records. The second reads a photograph and then does the same thing with the answer. Every figure in either one is yours — the daily rate from your agreement, the duty from your entry, the days from your own records."
scenario_label: "A container held at the port, from hold to cleared"
scenario:
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

scenario_b_label: "A reefer that drifted warm, from the door to a filed claim"
scenario_b:
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
