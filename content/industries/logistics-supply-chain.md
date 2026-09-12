---
date: 2026-09-07T00:00:00Z
title: "Logistics & Supply Chain"
description: "Held customs entries, freight claims that expire unfiled, cold chain read after the write-off, and demand that grew on the way up the chain. How Runink puts the evidence in front of the person who can act on it."
# Everything on this page is Runink FACE — the Fulfilment Autonomous Claims
# Engine, and the product this company is built around. Logistics is FACE's home
# domain: `Logistics` is one of the business domains it types records into, and
# the fulfilment, returns, claims and customs work below maps to named RPCs.
# Nothing here is Runink PULSE, and nothing here is the CORE-and-Atlas
# arrangement described on the banking and telecom pages.
product: "Runink FACE"
weight: 10
# category: binds this page to the palette's category tokens via the
# .rk-cat-* class the layout emits. It replaces an `accent:` hex, which
# went dead when the stylesheets moved to --rk-accent: the hex was still
# injected into a style attribute that nothing read any more. A class can
# follow the ground; a literal cannot.
category: "logistics"
card: "Runink FACE — held entries, expiring claims, cold chain and demand that grew on the way up the chain."
headline: "The evidence of your next loss is already in your systems."
deck: "An entry held for a missing paper while the port charge runs. A refrigerated load drifting warm overnight. A claim still inside its filing window. All recorded somewhere already, and nobody with the hours to assemble it. This page is Runink FACE, the product this company is built around."

problems_heading: "Where it goes wrong"
problems:
  - title: "The hold nobody joined to the cost"
    body: "An entry sits at the port for a missing paper. The notice arrives with everything else from overnight, and the daily charge runs until somebody joins it to the invoice."
  - title: "Claims that expire quietly"
    body: "One claim means the carrier's receipt, the weighbridge reading, the rate on the date, the deadline and a drafted letter. Only the largest are worth the morning."
  - title: "Temperature you read after the write-off"
    body: "A container drifts out of range overnight and the reading is already in the sensor data. The window between saving the load and writing it off is hours."
  - title: "Demand that grew on the way up the chain"
    body: "Every stage rounds up to a full case and adds a safety margin, so the plant builds for demand that never existed. The amplification lives in the sequence, across four systems."

owners_heading: "Who owns this"
owners_intro: "The people whose week it changes."
owners:
  - role: "Operations director"
    line: "You find out before your customer does, and the fix is drafted when you do."
  - role: "Chief financial officer"
    line: "Recoveries stop being a heroic effort and become a pipeline you can read."
  - role: "Head of planning"
    line: "Safety margins are argued from your own numbers, not by seniority."
  - role: "Trade compliance"
    line: "A held entry arrives with the reason, the papers that release it and the charge accruing."
  - role: "Chief information officer"
    line: "A shorter security review, because the data stays on your machines."

outcomes_heading: "What Runink FACE changes"
# Four corrections in this block, all of the same kind.
#
# 1. "Findings arrive" implied the queue fills itself. A new instance derives
#    nothing and shows an empty queue — every card the old derivation produced
#    came from *_mock.json seeds behind a demo flag. So the first line now says
#    what the queue does before anything is connected, which is the more useful
#    sentence anyway.
# 2. "Nothing leaves before it" was the blanket approval gate. REQUIRE_HITL is
#    read by nothing in FACE except the function that reports it, so it gates
#    nothing. The drafted action waiting in the queue is real; the blanket is
#    not.
# 3. "the update to your system of record follow[s] from it" — write-back into
#    an ERP is not implemented. ExecuteAction returns a typed skip token
#    (`erp:not_implemented`) saying so. Claiming it was the load-bearing false
#    sentence on this page.
# 4. Added the absence line, because it is the strongest true thing here and
#    was missing entirely.
outcomes:
  - "A new instance shows you an empty queue. FACE arrives holding no findings about your operation and does not manufacture any — what appears is what it read once you connected it to something."
  - "What does appear is a specific proposed action with the rule it invoked and the records it cited attached, in one queue, rather than a dashboard for somebody to interpret."
  - "A named person approves, edits or rejects each one, and the decision is written down as an event carrying who decided and what they changed."
  - "Approving is what sends it — and the reply names the parts that did not go. No mail connector configured, no write-back into your ERP: each is returned as a named skipped step with its reason, on every reply, including one where half the work went out. Write-back into an ERP is not built today, and it is worth asking us which of your systems FACE can write to before planning around it."
  - "Where a check could not run, the answer is that it could not run — written out as not a finding that the thing is compliant. A quantity nobody measured is kept as unmeasured with a reason rather than rounded to zero, and a connection nobody has contacted is never reported as verified."
  - "Later, why a claim was filed or an entry held is answered from the record."

# THE COVERAGE BLOCK — the named jobs, and the page that sets each one out.
#
# WHY IT EXISTS. Nothing on this page told a reader that reverse logistics, cold
# chain, routing, stock cover, demand, freight claims and the reporting jobs
# each already have a page of their own. The scenarios were written; the route
# from this page to them was not, so an operations director could read the whole
# page without learning how much of their week is already covered.
#
# WHAT IS IN IT, AND WHAT IS DELIBERATELY NOT. Ten of the twelve scenario pages
# describe logistics work and are listed. The two that do not — underwriting and
# contract review — are listed on the insurance page instead. A page earns a
# place here by being this industry's work, not by making the list longer.
#
# Judgements worth recording, because the next person will re-open them:
#   * cold chain is named the way content/use-cases/cold-chain-safety.md names
#     itself — the yard frame read against the handover record. Nothing here
#     says live telemetry, because that page does not.
#   * compliance is listed for both halves it actually carries, personal detail
#     kept out of log output and a road lane's emissions figure, stated as the
#     method that produces them.
#   * the emissions, routing and forecasting lines each describe a mechanism and
#     no result. Every figure on this page belongs to the reader, and that rule
#     does not stop at the measures sheet.
#
# RENDERING, AND THE NAME. The keys are `coverage_*` because that is what
# content/use-cases/_index.md already calls the same idea — a heading, an intro,
# and a list of named jobs — and one vocabulary across the two files is worth
# more than a key that reads better alone. The one difference is the item: the
# use-cases index names a child of its own section by slug and reads that page's
# title at render time, while an industry page points into another section, so
# each item carries the path itself. A path is also the form linkcheck can see
# once an anchor is rendered from it.
#
# layouts/industries/single.html has one slot per block and does not have one
# for this yet, so these three keys are inert until it does — the same state
# `product:` is in on content/industries/marketing.md. Every url below resolves
# to a page that builds today; that was checked against the 0.147.3 build the
# deploy pins, not against the local Hugo.
coverage_heading: "The jobs this covers"
coverage_intro: "Each one has a page of its own: what it reads, what it hands to a person, and how you would know it worked."
coverage:
  - name: "Reverse logistics — returns, and what to do with them"
    line: "Where a return goes — shelf, refurbishment, recycling or disposal — drafted at the scan, from a policy written down so that the same grade gets the same answer every time."
    url: "/use-cases/responsive-reverse-logistics/"
  - name: "Cold chain, and what the yard camera already sees"
    line: "A frame from a yard or infrared camera, checked to be an image and read by a vision model on hardware you control, against the handover record and the paperwork the load travels with."
    url: "/use-cases/cold-chain-safety/"
  - name: "Route planning that keeps up with the day"
    line: "The plan that was right at six in the morning is not right by ten, and nobody re-runs it because re-running it means planning a day by hand. This is about making the second run cost nothing."
    url: "/use-cases/route-optimization/"
  - name: "Stock cover and supplier planning"
    line: "Seeing a stockout while there is still time to order normally, rather than after the safety stock has gone and the difference is being paid in air freight."
    url: "/use-cases/fulfillment-optimization/"
  - name: "Demand forecasting"
    line: "A line starts moving weeks before the reorder point does. Reading that turn out of your own order history while it is still a forecasting problem."
    url: "/use-cases/demand-forecasting/"
  - name: "Freight claims and port charges"
    line: "The entry, the hold, the reason, the documents missing from the file, the days held and the per-day charge, gathered and joined, so a reviewer is left judging whether the case holds."
    url: "/use-cases/claims-recovery/"
  - name: "Seeing the whole chain, not your end of it"
    line: "Each supplier, carrier and warehouse holds one piece of the picture, in its own format. The picture itself is not held anywhere, and assembling it is the morning nobody has."
    url: "/use-cases/supply-chain-visibility/"
  - name: "Hands-free dispatch, for drivers without a screen"
    line: "The person who knows a load is late is driving. Asking and answering out loud puts the fact on the record while the truck keeps moving, and the desk still makes the change."
    url: "/use-cases/voice-dispatch/"
  - name: "Testing a plan before you commit to it"
    line: "A port shuts and you have a day to pick a new route. State the change and the rules it touches — reorder points, lead times, service commitments — and read back which rules it collides with, in what order."
    url: "/use-cases/hypothesis-lab/"
  - name: "Customer data privacy and emissions reporting"
    line: "Personal details stripped out of log and diagnostic output before it is written, and a lane's emissions worked out from one published road factor and the distance, with the method written on the figure."
    url: "/use-cases/compliance/"

measures_heading: "How you will know it worked"
measures_intro: "Every figure below is yours, not ours. Write down where you stand today — the baseline stops being recoverable the moment things improve."
measures:
  - metric: "Demurrage and detention days"
    today: "Terminal and carrier invoices and the per-diem lines your forwarder passes through. A full quarter, by port, separating document-caused days from congestion."
    moves: "Down on the document-caused share. A hold arrives as a running clock: the entry, the port, the reason, which papers would release it, how long it has sat."
  - metric: "Claim filing rate, and days from event to filing"
    today: "From carrier exception records and freight audit: claim-eligible events in a quarter, how many were filed, and where each filing fell inside the carrier's window."
    moves: "Rate up, days-to-file down. The receipt, the reading, the rate on the date and the deadline arrive assembled from the records FACE could reach — and the pieces it could not reach are named rather than left as a gap the reviewer has to notice. The reviewer judges whether the case holds, which is the part that needs a person."
  - metric: "Days from event to detection"
    today: "Sample last quarter's holds, excursions and late vessels: when each was recorded, against when a person first acted. Few operations have counted this gap."
    moves: "Down, and the rest depend on it. Checks run against every record you have connected rather than a sample somebody had time for, on a schedule you set rather than at period end."
  - metric: "Spoilage and write-off on temperature-controlled stock"
    today: "The write-off account in your ledger and the quality rejection log for the same period, with temperature excursions separated from other causes."
    moves: "Down, by moving loads back inside the window where an excursion is still a save. Be exact about the plumbing: FACE has no live sensor or telemetry connector, so it reads the readings where your own systems have already landed them — the database, the warehouse, the object store — and drafts the corrective dispatch from there. If your excursions are not written down anywhere FACE can read, this measure will not move, and that is the first thing to establish."
  - metric: "OTIF, or DIFOT if that is your term"
    today: "Your transport or warehouse system: confirmed delivery against the date and quantity promised on the order line, monthly and by customer."
    moves: "Up, through the avoidable failures. A disruption still running arrives with the orders and customers it touches identified. A lane can then be put to the routing service you configure, and comes back with the distance and duration it returned — or with the word unavailable, which is the honest answer and the one a dispatcher can act on, rather than a blank card that reads like a measured route of zero."
  - metric: "Forecast error and days of stock cover"
    today: "Your planning system's forecast against actuals by line, days of cover per line, and expedited freight coded as premium or air in accounts payable."
    moves: "Error stated instead of assumed. Your order history goes through the sequence a statistician would run by hand — describe it, test whether it is stationary, read the autocorrelation, fit both a decomposition and an ARIMA, choose between them by backtest — and what comes back names the model that won and the test it was chosen against. Under five observations it declines to forecast rather than drawing a line through them."

foundations_heading: "Two things that make the above possible"
foundations:
  - name: "Your data stays on your machines"
    plain: "The order files, the customs papers, the readings and the reasoning about them stay on hardware you control, and the model FACE reasons with is one you run: no third-party model dependency, and exactly one inference endpoint — the one you point it at. Two paths do deliberately reach outside, because they must: a route request goes to the routing service you configure, and open-web research puts a query to a public search endpoint. Neither carries your records."
    measured_by: "The security review a shipper runs before it will let you hold its order data, and the customer-data clauses that today need an exception. With no model provider in the path, both have less to argue with. Ask us to walk the boundary rather than taking the sentence: this is how the software is built, not something a test enforces, so it is a code review you can run and not a certificate we hold."
  # Corrected. This used to say the question "stays with you" and set that
  # against "asking a search company". The shared engine puts the query to
  # DuckDuckGo's public HTML endpoint and then fetches the result pages itself
  # (web/metasearch/metasearch.go), so a search engine does see the query. What
  # is genuinely different is that there is no account it is filed under — and
  # that is the part a confidentiality argument actually turns on.
  - name: "Open-web research with no account attached to it"
    plain: "When an answer needs the open web — a carrier's standing, a customs ruling, a published rate, a party you are unsure about shipping to — the search runs from your own infrastructure through a public search endpoint, and your own browser then fetches and reads the pages behind the results."
    measured_by: "Not secrecy from the search engine, which sees the query as it would from any browser. What you get is the absence of an account: no API key, no vendor contract, no per-question bill, so no supplier is accumulating a searchable history of the consignees your company has been asking about, filed under your company's name. It also means how much checking a shipment gets is decided by the shipment rather than by a monthly query cap."

next_heading: "See whether it fits"
next_body: "Bring one lane, one carrier, or one month of returns. A short conversation is usually enough to tell whether the losses you carry are the shape this addresses. It is built around freight forwarders and third-party logistics providers, manufacturers with international inbound flows, and food, pharmaceutical and chemical distributors."
cta_text: "Book a consultation"
paper:
  text: "Read the FACE paper"
  url: "/blog/whitepapers/runink-face/"
  note: "Runink FACE is the product behind this page. The paper is the long version — what it reads, what it produces, who approves it and where it runs. It carries no case studies, no customer names and no return-on-investment figures."
---
