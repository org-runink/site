---
# The homepage is front matter only; layouts/index.html draws it. See the head
# of that file for the order and the reasons. NO NUMBERS ANYWHERE ON THIS PAGE
# (CONTENT.md rule 1). NO ALIASES in this file or its translations.
title: "Runink"
seo_title: "Runink FACE | Dispute every freight overcharge"
seo_description: "Runink FACE checks every freight bill against your rates and records, drafts the dispute or claim with evidence attached, and sends it when you approve."
image: "/images/og/home-og.jpg"
description: "Runink FACE: Fulfilment Autonomous Claims Engine. It checks every freight bill against your rates and records, drafts the dispute or claim with the evidence attached, and sends it when a named person approves. It runs on your own servers or cloud account, with no outside AI service."
ground: "console"
date: "2024-05-20T00:00:00Z"
author: "Runink"

hero:
  eyebrow: "For field operations and revenue leaders"
  line1: "Dispute every overcharge."
  line2: "Not just the big ones."
  sub: "Runink FACE checks every freight bill against your rates and records, drafts the dispute, and sends it when you approve."
  cta_primary: "Send one month of invoices"
  cta_secondary: "See how it works"
  note: "Runink FACE: Fulfilment Autonomous Claims Engine. Runs on your servers or ours. No outside AI service."
  shot:
    src: ""
    alt: ""
    caption: ""
  card:
    alt: "A drafted freight dispute in Runink FACE, with the rule it broke, the three records behind it, the likely cause, and Approve, Edit and Reject buttons."
    title: "runink face · today's command"
    status: "WAITING ON YOU"
    kind: "Drafted dispute · carrier invoice"
    head: "Billed weight is higher than the scale ticket."
    rule_label: "Rule:"
    rule: "bill the pickup weight at the agreed rate."
    records_label: "Records attached"
    records:
      - { tag: "INV", name: "carrier_invoice_7731.pdf", state: "read" }
      - { tag: "BOL", name: "bill_of_lading_MSKU4419.pdf", state: "read" }
      - { tag: "RATE", name: "rate_agreement_2026.xlsx", state: "compared" }
    cause_label: "Likely cause"
    cause: "Re-weighed at the hub. Same lane, same pattern before."
    acts: ["Approve", "Edit", "Reject"]
    stamp: "Approved by A. Morgan · 09:14 · sent with three records"
    caption: "Drawn example. Names and records are illustrative."

how:
  heading: "How it works"
  steps:
    - title: "It reads what you keep"
      body: "Invoices, orders, claims, port records and sensors. Nothing to replace."
    - title: "It drafts the action"
      body: "A dispute, claim or order, with the rule, the records and the likely cause."
    - title: "You approve it"
      body: "One click sends it. Your name and the time stay on the record."
  more: { text: "See everything FACE does", url: "/products/face/" }

leaks:
  heading: "Six places revenue leaks"
  items:
    - { verb: "Catch it", title: "Overcharges and duplicate bills", line: "Every invoice checked against your rates.", owner: "Freight audit · Finance" }
    - { verb: "File it", title: "Damage, shortage and late claims", line: "Drafted inside the filing window, evidence attached.", owner: "Claims desk" }
    - { verb: "Clear it", title: "Demurrage and detention", line: "The held container and the missing paper, named early.", owner: "Operations · Trade compliance" }
    - { verb: "Redraft it", title: "Fulfilment plans that go stale", line: "New orders drafted when the morning plan breaks.", owner: "Field operations" }
    - { verb: "Prove it", title: "Cold-chain loss", line: "Door photo and papers read together, claim drafted.", owner: "Field operations · Quality" }
    - { verb: "Fix it", title: "The same loss every month", line: "Causes ranked by the fix that matters most.", owner: "CRO · Revenue operations" }
  more: { text: "How a freight claim is filed in time", url: "/use-cases/claims-recovery/" }

machines:
  heading: "It runs on your machines"
  facts:
    - { title: "Your servers or your cloud", body: "Dedicated and Enterprise run on machines you control." }
    - { title: "No outside AI service", body: "The model runs where FACE runs, on every licence." }
    - { title: "Every decision on record", body: "Who approved, when, and what they changed." }
  more: { text: "Trust and compliance", url: "/trust/" }

compare:
  heading: "Software you run, not a service that files for you"
  col_topic: "Question"
  col_them: "Outside recovery service"
  col_us: "Runink FACE"
  rows:
    - { topic: "What it reads", them: "Invoices you hand over, often with your logins.", us: "Every record your systems already hold." }
    - { topic: "What comes back", them: "A credit.", us: "A drafted action, its cause and its records." }
    - { topic: "Who decides", them: "The service.", us: "A named person on your team." }
    - { topic: "Where records go", them: "The provider's systems.", us: "Machines your licence names." }
  note: "Prices, including the success fee on recovered claims: [pricing](/pricing/)."

offer:
  heading: "Start with one month of invoices"
  steps:
    - { title: "Send one month", body: "Invoices or claims, plus your rate sheet." }
    - { title: "We read it in FACE", body: "Every line, against its rate and records." }
    - { title: "We walk it with you", body: "Half an hour: findings, drafts and causes." }
  cta: "Send one month of invoices"

faq:
  heading: "Questions"
  groups:
    - label: "Recovery"
      items:
        - q: "What is revenue leakage in logistics?"
          a: "Money a shipper was owed, or should never have paid, and did not get back: carrier overcharges, bills paid twice, claims left to expire, demurrage on a held container and orders that miss their window."
        - q: "How do I find freight overcharges without checking every invoice by hand?"
          a: "Compare each invoice with the records behind it: the receipt, the weight and the rate that applied that day. Runink FACE does that for every invoice and drafts the dispute for your analyst to approve."
        - q: "How do I stop freight claims from expiring?"
          a: "Make each claim cheap to build. FACE gathers the freight bill, the proof of delivery and your service terms, and drafts the claim inside the carrier's filing window."
    - label: "How it works"
      items:
        - q: "What is an actionable twin?"
          a: "A live copy of a site, an asset or an order, kept current from your own records. FACE checks each twin against your rules and turns what differs into a drafted action for a person to approve."
        - q: "How does FACE find the root cause of a loss?"
          a: "For each claim it lists the causes and estimates how much fixing each one would change the outcome, then ranks them, with the records behind each."
        - q: "Do we need to replace our TMS, WMS or ERP?"
          a: "No. FACE reads from the systems you already run and leaves your records as they are."
    - label: "Buying"
      items:
        - q: "Is FACE an outsourced recovery service?"
          a: "No. It is software your team runs, and a named person approves every dispute, claim and order. Prices, including the success fee on recovered claims, are on the [pricing page](/pricing/)."
        - q: "Does our data leave our servers?"
          a: "On the Dedicated and Enterprise licences FACE runs on your own servers or cloud account. On every licence, nothing is sent to an outside AI model provider."
        - q: "Who in the company uses it?"
          a: "Field operations managers for fulfilment orders and exceptions, claims and freight audit teams for disputes and claims, and revenue leaders for what was recovered and why it was lost."

contact:
  heading: "Send one month of invoices."
  deck: "Freight invoices or claims, and the rate sheet they should match. If the losses you carry are not the shape FACE addresses, we will say so."
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
