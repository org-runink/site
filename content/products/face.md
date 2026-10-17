---
title: "Runink FACE"
# Rebuilt 2026-10-17 on layouts/_default/v2.html, the homepage's blocks. The old
# page ran long, repeated itself and held placeholder comments where screenshots
# were meant to go. Every sentence below is carried over from the verified copy
# it replaces or from FACE on origin/main (CONTENT.md rule 4); none carries a
# figure (rule 1). Sections follow the FACE left rail as it is today: Reconcile,
# Fetch, Simulate, Twins. If the rail changes, change the tour with it.
seo_title: "Runink FACE: freight overcharges and claims, caught in time"
seo_description: "For freight, claims and field operations teams. Runink FACE reads your invoices and claim files, finds the overcharge and the expiring claim, and drafts the fix."
description: "Runink FACE: Fulfilment Autonomous Claims Engine. It reads the invoices, orders, carrier records and claim files you already keep, finds the overcharge, the claim about to expire and the broken rule, and drafts the next step for a named person to approve. It runs on your own servers or cloud account, or on Runink's shared machines, and no outside AI service is called."
layout: "v2"
badge: "FACE"

hero:
  eyebrow: "Runink FACE: Fulfilment Autonomous Claims Engine"
  h1: "Every overcharge, claim and stale order, drafted for one approval."
  sub: "FACE reads the invoices, orders, carrier records and claim files you already keep. It finds what you are owed and what broke, and drafts the next step. A named person approves it."
  cta_primary: "Send one month of invoices"
  cta_primary_url: "/#offer"
  cta_secondary: "See prices"
  cta_secondary_url: "/pricing/"
  note: "Runs on your servers, your cloud account or Runink's shared machines. No outside AI service."
  shot:
    src: ""
  card:
    alt: "A drafted damage claim in Runink FACE, with the rule it rests on, the three records behind it, the likely cause, and Approve, Edit and Reject buttons."
    title: "runink face · today's command"
    status: "WAITING ON YOU"
    kind: "Drafted claim · damaged load"
    head: "A pallet arrived crushed. The filing window is still open."
    rule_label: "Rule:"
    rule: "file inside the carrier's claim window, with the proof of delivery and the photo."
    records_label: "Records attached"
    records:
      - { tag: "POD", name: "proof_of_delivery_SO8821.pdf", state: "read" }
      - { tag: "IMG", name: "dock_photo_door3.jpg", state: "read" }
      - { tag: "BOL", name: "bill_of_lading_MSKU4419.pdf", state: "compared" }
    cause_label: "Likely cause"
    cause: "The load shifted in transit. Earlier deliveries on the same lane show the same damage."
    acts: ["Approve", "Edit", "Reject"]
    stamp: "Approved by J. Rivera · 10:02 · claim filed with three records"
    caption: "Drawn example of a drafted claim. The names and records are illustrative."

problem:
  heading: "Your operation already wrote down what went wrong."
  before_label: "Today"
  before:
    - "A disputed invoice takes most of a morning, so only the big ones get done."
    - "A small claim costs more to build than it returns, so it expires."
    - "Scanned pages and spreadsheets are typed into another system by hand."
    - "The same report is rebuilt every Monday from the same exports."
  after_label: "With Runink FACE"
  after:
    - "Every invoice is read against the records behind it and your rates."
    - "Each claim file is assembled and drafted while the window is open."
    - "Spreadsheets are read with their formulas, and scanned pages are transcribed."
    - "A question set up once runs on your schedule, with a record of what it read."

jobs:
  heading: "What it takes off the desk"
  items:
    - verb: "Catch it"
      title: "Overcharges nobody challenges"
      line: "Every invoice read against the receipt, the weight and your rates, and the dispute assembled with each record."
      owner: "Freight audit · Finance"
    - verb: "File it"
      title: "Claims that run out of time"
      line: "The claim, the policy, the reserve and the records gathered, and the action drafted inside the window."
      owner: "Claims desk"
    - verb: "Stop retyping"
      title: "Paperwork typed in twice"
      line: "Spreadsheets read with their formulas. Scanned pages transcribed on FACE's own machines, and an unusable page says so."
      owner: "Operations"
    - verb: "Schedule it"
      title: "The Monday report, rebuilt by hand"
      line: "Set the question up once. It runs when you choose and keeps a record of what it read."
      owner: "Analysts"
    - verb: "Check it"
      title: "Carrier checks in a spreadsheet"
      line: "Web research run from FACE's own machines, with the pages it read attached to the finding."
      owner: "Procurement · Compliance"
    - verb: "Re-run it"
      title: "The consultant hired twice"
      line: "Forecasts and what-if studies run again on your own records, with the method stated."
      owner: "Planning"

tour:
  id: "inside-face"
  heading: "Inside FACE: Reconcile, Fetch, Simulate, Twins"
  lead: "One menu down the left of the screen. Reconcile shows where your records stand, Fetch brings them in, Simulate tests a change before you make it, and Twins puts the result in front of the person who approves it."
  areas:
    - id: "reconcile"
      tag: "Reconcile"
      title: "Where your records stand, on one page."
      body: "The page FACE opens on. Its first line says how many business areas were read, what was found and what to do about it."
      parts:
        - { name: "Business area health", text: "Each area is scored on six counts: sound data, filled fields, traceable figures, freshness, policy cover and the cost to keep it." }
        - { name: "Entities", text: "Orders, suppliers, sites, shipments and assets, joined into one list even when the systems behind them never were." }
    - id: "fetch"
      tag: "Fetch"
      title: "Bring in what you already run."
      body: "Ask a question in plain words, or start from a suggested one. You choose which sources it reads and which machines do the work."
      parts:
        - { name: "Connections", text: "Databases, business software, logistics systems, files, web pages and live feeds from trackers, RFID tags and sensors." }
        - { name: "Knowledge", text: "Your documents in one place: spreadsheets with their formulas, and the tables and filled-in fields from scanned pages." }
        - { name: "Schedules", text: "Set a fetch up once and it runs when you choose, with the same record as one you start yourself." }
    - id: "simulate"
      tag: "Simulate"
      title: "Test a change before you commit to it."
      body: "Nothing here changes your systems. It keeps the records a decision rests on joined up, before the change and after it."
      parts:
        - { name: "What-if scenarios", text: "A lane a week late, a supplier dropped, a different reserve: worked through from several angles, with reasoning you can argue with." }
        - { name: "Rules", text: "The rules you already work to, written down once, checked against every record and held up against your policy documents." }
        - { name: "What drives what", text: "Change one thing and see what it would move, and which rules it would run into." }
        - { name: "Demand forecasting", text: "Two kinds of forecast tried on your own order history. The one that did better wins, and the method is named." }
    - id: "twins"
      tag: "Twins"
      title: "Your operation on a map, and the orders waiting on a decision."
      body: "A twin is a live copy of something real, such as a site, an asset or an order, kept current from your own records."
      parts:
        - { name: "Map", text: "Your assets at their real locations, routes in the proposed stop order, and live layers from anything that reports a position." }
        - { name: "Today's command", text: "The proposed actions as a list of orders with their line items. A person approves or rejects each one." }
        - { name: "Routes", text: "Distance and time from the routing service you configure. If none answers, the answer is the word unavailable, never a zero." }

gate:
  heading: "The drafted action waits. Approving is what sends it."
  lead: "Every section ends in the same place: one proposed action, with the rule and the records attached, in front of a named person."
  facts:
    - title: "Why it fired, on which records"
      body: "Open any finding and read the rule, the records under it and the reasoning that joined them."
    - title: "The reply says what ran"
      body: "After approval, the reply names which parts ran. A step that could not run is named, with its reason."
    - title: "Could not check is an answer"
      body: "Where a check could not run, the result says unable to assess. It never reads as compliant."
    - title: "The decision stays with a person"
      body: "FACE assembles a claims or underwriting file and drafts the action. An adjuster decides, on the file in front of them."

machines:
  heading: "It runs on your machines"
  lead: "For many freight and claims teams, customer files, customs papers and claim records cannot go to somebody else's servers. FACE is built for that."
  facts:
    - title: "Your servers or your cloud"
      body: "On the Dedicated and Enterprise licences, the work runs on machines you control. Lite runs on Runink's shared machines."
    - title: "No outside AI service"
      body: "The language model runs where FACE runs. On every licence, nothing is sent to an outside model provider."
    - title: "Open-web research with no account attached"
      body: "When web research is on, FACE searches from its own machines through a public search page and reads the pages itself."
    - title: "A record of every decision"
      body: "Who approved, when and what they changed is kept with each action, ready when an auditor asks."
  more: { text: "Trust and compliance", url: "/trust/" }

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
  cta_url: "/#contact-form"

faq:
  heading: "Questions"
  groups:
    - label: "The product"
      items:
        - q: "Is FACE the same thing as Runink PULSE?"
          a: "No. They are separate products, each sold on its own. FACE is for freight, fulfilment, claims and the compliance work around them. PULSE is for marketing teams."
        - q: "Does FACE decide, or do we?"
          a: "You do. FACE drafts an action with the rule and the records attached, and a named person approves or rejects it."
        - q: "Do we have to replace our WMS, ERP or claims system?"
          a: "No. FACE reads from the systems you already run, such as SAP, Dynamics 365, Salesforce, HubSpot, ServiceNow, Guidewire, SharePoint, your spreadsheets and your file storage. It is not a system of record."
    - label: "Your data"
      items:
        - q: "Can we run it on our own servers, with no outside AI service?"
          a: "Yes. On the Dedicated and Enterprise licences FACE runs on your own servers or in your own cloud account. Lite runs on Runink's shared machines. On every licence, nothing goes to an outside model provider."
        - q: "What happens when it cannot check something?"
          a: "It says so. The result is unable to assess, and the wording makes clear that this is not a finding that the thing is compliant."
    - label: "Buying"
      items:
        - q: "Is there anything we can put in someone's hands today?"
          a: "Yes. An Android build of FACE, with the actions waiting on a decision and the approve or reject, is on the [downloads page](/downloads/)."
        - q: "What does it cost?"
          a: "You pay per person who uses it. Prices, including the success fee on recovered claims, are on the [pricing page](/pricing/)."

more:
  label: "More about FACE"
  groups:
    - label: "Read further"
      links:
        - { text: "The FACE paper", url: "/blog/whitepapers/runink-face/" }
        - { text: "A claim, from record to approval", url: "/use-cases/claims-recovery/" }
        - { text: "Logistics & Supply Chain", url: "/industries/logistics-supply-chain/" }
    - label: "Buying"
      links:
        - { text: "Pricing", url: "/pricing/" }
        - { text: "Downloads", url: "/downloads/" }
        - { text: "Trust and compliance", url: "/trust/" }
        - { text: "Technical reference", url: "https://docs.runink.org/tide/docs/devex/" }
    - label: "Other Runink products"
      links:
        - { text: "Runink PULSE: Prescriptive Unified Lead & Social Engine", url: "/products/pulse/" }
        - { text: "Runink TIDE: Trusted Intelligence for Developer & Data Experience", url: "/products/tide/" }
        - { text: "Runink River", url: "/river/" }
---
