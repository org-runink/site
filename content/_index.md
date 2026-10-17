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
  sub: "Runink FACE checks every freight bill against your rates and records, drafts the dispute with the evidence attached, and sends it when you approve."
  cta_primary: "Send one month of invoices"
  cta_secondary: "See how it works"
  note: "Runink FACE: Fulfilment Autonomous Claims Engine. Runs on your servers, your cloud account or ours."
  # Set src to a real FACE screenshot under static/images/home/ to replace the
  # drawn card below. Until then the card is drawn in HTML and labelled.
  shot:
    src: ""
    alt: ""
    caption: ""
  card:
    alt: "A drafted freight dispute in Runink FACE, with the rule it broke, the three records behind it, the likely cause, and Approve, Edit and Reject buttons."
    title: "runink face · today's command"
    status: "WAITING ON YOU"
    kind: "Drafted dispute · carrier invoice"
    head: "Billed weight is higher than the weight on the scale ticket."
    rule_label: "Rule:"
    rule: "bill at the weight recorded at pickup, at the rate in the agreement."
    records_label: "Records attached"
    records:
      - { tag: "INV", name: "carrier_invoice_7731.pdf", state: "read" }
      - { tag: "BOL", name: "bill_of_lading_MSKU4419.pdf", state: "read" }
      - { tag: "RATE", name: "rate_agreement_2026.xlsx", state: "compared" }
    cause_label: "Likely cause"
    cause: "The carrier re-weighed at the hub and billed the hub weight. Same lane, same pattern on earlier invoices."
    acts: ["Approve", "Edit", "Reject"]
    stamp: "Approved by A. Morgan · 09:14 · dispute sent with three records"
    caption: "Drawn example of a drafted dispute. The names and records are illustrative."

problem:
  heading: "Disputing one invoice takes a morning. So most get paid."
  before_label: "Today"
  before:
    - "Someone pulls the receipt, the weight and the rate for one invoice."
    - "Only the big overcharges are worth that morning."
    - "Small claims run out of time inside the filing window."
    - "The same carrier makes the same error next month."
  after_label: "With Runink FACE"
  after:
    - "Every invoice is checked against your rates and records."
    - "Each overcharge arrives as a drafted dispute, records attached."
    - "Claims are drafted while the window is still open."
    - "The cause is ranked, so you can fix it at the source."

how:
  heading: "How it works"
  steps:
    - title: "It reads what you already keep"
      body: "Invoices, orders, proofs of delivery, claim files, port records and sensor feeds, from the systems you run today. Nothing to replace."
    - title: "It drafts the action"
      body: "A dispute, a claim or a fulfilment order, with the rule it broke, the records behind it and the likely cause."
    - title: "You approve it"
      body: "One click sends it. Your name, the time and any edit stay on the record, so the reason holds up later."
  more: { text: "See everything FACE does", url: "/products/face/" }

leaks:
  heading: "Six places revenue leaks"
  items:
    - verb: "Catch it"
      title: "Carrier overcharges and duplicate bills"
      line: "Every invoice checked against your rates, not just the big ones."
      owner: "Freight audit · Finance"
    - verb: "File it"
      title: "Damage, shortage and late-delivery claims"
      line: "Drafted inside the carrier's filing window, with the evidence attached."
      owner: "Claims desk"
    - verb: "Clear it"
      title: "Demurrage and detention"
      line: "The held container and the missing paper, named while the charge runs."
      owner: "Operations · Trade compliance"
    - verb: "Redraft it"
      title: "Fulfilment plans that go stale"
      line: "Fulfilment orders drafted from live records when the morning plan stops fitting."
      owner: "Field operations"
    - verb: "Prove it"
      title: "Cold-chain loss"
      line: "The photo from the door read beside the papers, and the claim drafted."
      owner: "Field operations · Quality"
    - verb: "Fix it"
      title: "The same loss every month"
      line: "Causes ranked by how much fixing each one would change."
      owner: "CRO · Revenue operations"
  more: { text: "Walk through a claim, from record to approval", url: "/use-cases/claims-recovery/" }

machines:
  heading: "It runs on your machines"
  lead: "Most tools in this market are a hosted service. FACE can run on your own servers or in your own cloud account, so invoices, claim files and customs papers stay where they are."
  facts:
    - title: "Your servers or your cloud"
      body: "On the Dedicated and Enterprise licences, the work runs on machines you control. Lite runs on Runink's shared machines."
    - title: "No outside AI service"
      body: "The language model runs where FACE runs. On every licence, nothing is sent to an outside model provider."
    - title: "Your systems stay as they are"
      body: "FACE reads your records and leaves them as they are. Nothing to migrate, and no new system of record."
    - title: "A record of every decision"
      body: "Who approved, when and what they changed is kept with each action, ready when an auditor asks."
  more: { text: "Trust and compliance", url: "/trust/" }

compare:
  heading: "Software you run, not a service that files for you"
  col_topic: "Question"
  col_them: "An outside recovery service"
  col_us: "Runink FACE"
  rows:
    - topic: "What it reads"
      them: "The invoices you hand over, often with your carrier logins."
      us: "The records your systems already hold: orders, invoices, claim files, documents, photos and live feeds."
    - topic: "What comes back"
      them: "A credit, and a list of what was filed."
      us: "A drafted dispute, claim or order, with the cause and the records behind it."
    - topic: "Who decides"
      them: "The service files on your behalf."
      us: "A named person on your team approves each one."
    - topic: "Where your records go"
      them: "Into the provider's systems."
      us: "Onto machines your licence names. No outside AI service sees them."
  note: "Prices, including the success fee on recovered claims, are on the [pricing page](/pricing/)."

offer:
  heading: "Start with one month of invoices"
  lead: "The fastest way to know if this fits is your own records. We put no figure on this page; your month will show you yours."
  steps:
    - title: "You send one month"
      body: "Freight invoices or claims, and the rate sheet they should match."
    - title: "We read it in FACE"
      body: "Every invoice against its rate and its records. Nothing goes to an outside AI service."
    - title: "We walk it with you"
      body: "Half an hour with whoever owns the problem: what was found, the drafted actions and their causes."
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

more:
  label: "More from Runink"
  groups:
    - label: "Industries"
      links:
        - { text: "Logistics & Supply Chain", url: "/industries/logistics-supply-chain/" }
        - { text: "Insurance", url: "/industries/insurance/" }
        - { text: "Banking & Financial Services", url: "/industries/banking-financial-services/" }
        - { text: "Telecom", url: "/industries/telecom/" }
        - { text: "Marketing", url: "/industries/marketing/" }
    - label: "Products"
      links:
        - { text: "Runink FACE: Fulfilment Autonomous Claims Engine", url: "/products/face/" }
        - { text: "Runink PULSE: Prescriptive Unified Lead & Social Engine", url: "/products/pulse/" }
        - { text: "Runink TIDE: Trusted Intelligence for Developer & Data Experience", url: "/products/tide/" }
        - { text: "Runink River", url: "/river/" }
    - label: "Company"
      links:
        - { text: "Who builds it", url: "/company/" }
        - { text: "Pricing", url: "/pricing/" }
        - { text: "The FACE paper", url: "/blog/whitepapers/runink-face/" }
        - { text: "Library", url: "/library/" }
        - { text: "Trust and compliance", url: "/trust/" }

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
