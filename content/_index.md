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
  eyebrow: "Operations, finance, compliance"
  line1: "You find out when"
  line2: "it is too late to argue."
  deck: "A container sits because one form is wrong. The charge starts that day. Your version of that is already written down somewhere."
  stance_label: "Where we stand"
  stance:
    - "An action software takes on its own leaves nobody to ask afterwards."
    - "So this one drafts, and waits."
    - "The approval is the record: a name, a time, and the reason it was sent, kept together."
  cta_primary: "Find your industry"
  cta_secondary: "Book a consultation"

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
scenario_heading: "Two cases, from signal to decision"
scenario_intro: "One where no model is involved at any step, and one where a model reads a photograph and you can see exactly where its answer stops being taken on trust. Both are the whole of what the software does, in order, with nothing left out of the middle."
scenario_note: "The two are deliberately different in kind. The first is fixed arithmetic over your own records and there is no model anywhere in it. The second puts a model at one step and one only — reading a picture, which is the thing a model is genuinely good at — and everything after it is the document, the rule and the person. Where a figure cannot be worked out from what you supplied, the field is left empty rather than filled with a guess."
scenario_label: "A held entry — no model at any step"
scenario:
  - step: "The hold shows up"
    body: "An entry comes back held, under examination or detained, and the count of days it has been held is above zero. That combination is the whole test — it is a fixed rule, not a judgement, and it runs against every entry rather than the ones somebody thought to check."
  - step: "The cost is counted, not estimated"
    body: "The days it has been held, multiplied by the per-day demurrage rate in your own agreement. That is the arithmetic in full. It is the figure that is already accruing while the entry sits in a queue nobody reads end to end."
  - step: "The missing paper is named"
    body: "The reason for the hold and the documents outstanding against it come off the entry record and are stated on the item, so the person who picks it up is not starting by finding out what is wrong."
  - step: "The accountable party is checked"
    body: "Separately, entries are read for an importer of record that is blank, or filled in with the consignee, or with a placeholder somebody typed once. Those carry duty and tax with nobody accountable for them, and they are raised as their own item with the amount at stake attached."
  - step: "The two are never added together"
    body: "Demurrage on a held entry and duty on an unattributed one are different money, and counting them as one number is the commonest way this sort of total gets inflated. They stay separate, deliberately, and there is a test that fails if they ever merge."
  - step: "A named person decides"
    body: "The item waits. Approving it is what sends anything, and who approved it, when, and what they changed is written down. If part of what was drafted could not be carried out, the result names that part rather than reporting success."

scenario_b_label: "A cold-chain door — a model at one step, and only one"
scenario_b:
  - step: "The frame arrives"
    body: "A photograph taken on a handheld at the door, or a still pulled off a yard camera. Before anything reads it, it is checked to be an image: the header is decoded on its own, the format has to be one of two, and the size is capped both in bytes and in pixels. A PDF, a video container or raw bytes are refused at that step."
  - step: "A model reads it, on your hardware"
    body: "The frame is reduced to a size the model can take and read by a vision model running on machines you control. What comes back is a written observation tied to the exact frame it was read from, so the sentence and the evidence for it stay together."
  - step: "The paperwork is read beside it"
    body: "The consignment record, the handover, and the condition the documents say the load should be in. The observation is set against what was already written down rather than against a threshold somebody picked."
  - step: "What differs comes out named"
    body: "The pallet, the crate, the container door — named, in the words a person would use. A severity score cannot be argued with in front of a carrier. A named part of a named consignment can."
  - step: "A cue stays a request"
    body: "A cue can be broadcast to whatever is subscribed to the yard's event stream, and the record keeps it as what it is: requested. What happens next is somebody's decision, and the record says so rather than implying a movement was stopped."
  - step: "A named person decides"
    body: "The item waits, exactly as the held entry does. Approving it is what sends anything, and who approved it, when, and what they changed is written down."

why_heading: "Why this is not another dashboard"
why_intro: "Three things decide whether any of the above is worth your time."
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

# What it does when it does not know.
#
# WHY THIS BLOCK EXISTS. Every block above this one describes the software
# working. A buyer deciding whether they could put a drafted document in front
# of a carrier, an insurer or a customs broker is not asking about that case —
# they are asking what arrives when a record is unreadable, a connector is
# unconfigured, or the model overreaches. That is the question this page could
# not answer at all, and it is the one the whole argument rests on.
#
# EVERY `says:` VALUE IS A REAL STRING FROM THE SOURCE, not a summary of one.
# In order: domain_analysis_server.go:166-168 (with the two %s placeholders
# shown as an ellipsis), the not_executed contract at face.proto:966-983,
# claims.go:95, and the test name at standard_instance_empty_queue_test.go:27.
# If one of them is reworded in the code it must be reworded here or dropped —
# a quotation that has drifted is worse than no quotation.
#
# WHAT IS DELIBERATELY NOT HERE. `erp:not_implemented` is the vivid skip token
# and it is the wrong one to print: it names a capability that is absent, which
# is rule 2. `email:no_google_connector` makes the identical point about a
# connector the customer has not configured. The macro-inspection line
# (extractors/excel.go:104) was drafted into this block and cut for the same
# reason — extractVBA is unimplemented, so quoting it advertises the gap
# rather than the discipline.
#
# AND NOTHING HERE INVITES THE READER TO GO AND LOOK. Fourteen of the fifteen
# repositories are private; `site` is the only public one. "Read the code" would
# be an instruction a reader cannot follow, which is the exact defect this
# section is about. The note offers the file on the call instead, which is true
# and is also the most specific reason to book one that this page has.
proof_heading: "What it does when it does not know"
proof_intro: "Everything above is the software working. The answer that decides whether you could put its output in front of a carrier or a broker is a different one: what arrives when a record cannot be read, or a system cannot be reached. Four of those, in the words it prints."
proof:
  - when: "The check could not run"
    body: "If the records behind a control cannot be read, that is not a pass and it is not a fail. It is a third answer, and it goes to the audit log in these words rather than only to a screen. At three in the morning nobody is watching the screen."
    says: "This is NOT a finding that … is compliant."
  - when: "The step did not happen"
    body: "An approved action that could not reach one of your systems does not come back as done, and it does not come back as a plain error either. It names the step that did not run, so you are fixing one connection rather than hunting a fault."
    says: "email:no_google_connector"
  - when: "The model claimed too much"
    body: "Every sentence the drafting model writes is read before any of it reaches a document, and a claim to be certified is cut out whole. A rule that lives only in the instructions is a request. This one is in the code, and the attempt is kept, because a model that keeps reaching is something you want to be told about."
    says: "[claim removed: this agent may not assert a compliance or certification status]"
  - when: "Nothing is connected yet"
    body: "On the day it is installed, before it has been pointed at one of your systems, the first thing it shows you is nothing at all. An empty queue is the honest answer when there is nothing yet to read, and there is a test whose only job is to keep it that way."
    says: "TestStandardInstanceDerivesNoActionCards"
proof_note: "Those are lines from the source, not a description of it. The code is not public, so the offer is the plain one: name the one you want to see and we will open the file with you on the call."

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
