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
description: "Held customs entries, claims decided without the evidence already in the file, traffic carried and never rated. The answer is usually already in your own records. Runink FACE reads all of them, and puts one specific proposed action in front of the person who can approve it."
date: "2024-05-20T00:00:00Z"
author: "Runink"
hero:
  eyebrow: "For operations, finance and compliance"
  line1: "The answer is already in your records."
  line2: "There was never time to read all of them."
  deck: "A customs entry held for a missing paper while the charge runs. A claim decided without the evidence that was already in the file. Traffic carried and never rated. In every case it was written down somewhere first — and then read by sample, late, or not at all."
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
  note: "Under the name: agents that read the records and draft the action, a review screen for the person who owns the decision, and the platform underneath that keeps both inside your own network."

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
  message_label: "What is the problem you are trying to solve?"
  message_placeholder: "One example is enough — a held entry, a claim, a reconciliation that takes a week."
  submit: "Send message"
  note: "We use what you send here to reply to you and for nothing else."
  done_title: "Message received"
  done_body: "Thank you. We will reply within one working day."
---
