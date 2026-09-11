---
date: 2026-09-07T00:00:00Z
title: "Marketing"
description: "Weeks-long turnaround, a stack that does not talk to itself, and effort that never compounds. Runink PULSE puts one diagnosis behind every channel, with a named person approving every draft."
# Everything described on this page is Runink PULSE, the market-analysis and
# marketing product. It is NOT Runink FACE. The distinction matters here more
# than on any other industry page, because Marketing is also one of the business
# domains FACE classifies records into (campaign, click, impression, conversion,
# channel, audience, keyword, engagement, reach, spend, ads, analytics — see
# face/grpc/internal/ai/business_domains.go). A marketing record being read is
# therefore not automatically this product. Attribute by product, not by topic:
# the capabilities below are PULSE services (DiagnosticService.AuditURL,
# RadarService, ContentService, StudioService, LeadService), and the two
# foundations at the bottom belong to the CORE platform and the shared web
# engine that PULSE runs on.
#
# `product` is not rendered by layouts/industries/single.html today. It is set so
# the attribution is recorded in the file rather than only in prose, and so a
# later layout can surface it the way layouts/whitepapers/ already does.
product: "Runink PULSE"
weight: 50
# category: binds this page to the palette's category tokens via the
# .rk-cat-* class the layout emits. It replaces an `accent:` hex, which
# went dead when the stylesheets moved to --rk-accent: the hex was still
# injected into a style attribute that nothing read any more. A class can
# follow the ground; a literal cannot.
category: "marketing"
# The card now leads with the product name, as every card in this section does,
# so the switchboard page answers "which product is this?" before the click.
card: "Runink PULSE — a stack that does not talk to itself, weeks-long turnaround, and effort that never compounds."
headline: "The tools each hold a fragment. None of them holds the picture."
deck: "The audit tool knows the site is slow. The content tool does not, so it keeps writing posts that land on a page nobody stays on. The customer system knows a lead went quiet in week three; the scheduler does not."

problems_heading: "Where it goes wrong"
problems:
  - title: "Every step waits for the one before it"
    body: "Brief, draft, review, schedule. Turnaround runs in weeks and the market moves in days — which decides whether you can answer a competitor's announcement at all."
  - title: "Generic in, generic out"
    body: "A writer without your customer records, your positioning history or your pipeline works from your website and their own sense of the sector. That produces competent, forgettable copy."
  - title: "The effort does not compound"
    body: "Every campaign starts from a blank page, because nothing learned in the last one was written down where the next one could read it."
  - title: "The brief is the exposure"
    body: "To write well about you, whatever is writing needs your pricing logic, the competitor you actually lose to, the names in your pipeline. The better the brief, the more sensitive material sits inside it."

owners_heading: "Who owns this"
owners_intro: "A team of one to five marketers with more to say than hands to say it. These are the people Runink PULSE is built to change the week of."
owners:
  - role: "The marketing lead"
    line: "Your time moves from producing material to deciding about it. PULSE's approval queue becomes the surface you work on."
  - role: "IT and information security"
    line: "The reasoning and the writing run on machines you control. That is a property of the Runink CORE platform PULSE runs on, not a setting somebody in the marketing team has to remember to honour."
  - role: "Sales"
    line: "PULSE researches a prospect and drafts a cold email, a call script and a direct message per company, and leads synchronise to the customer-record system the team already works in."
  - role: "The board"
    line: "PULSE's multichannel analysis comes out as a written document you can put in front of people, not a dashboard somebody has to narrate."

outcomes_heading: "What Runink PULSE changes"
outcomes:
  - "One PULSE diagnosis feeds the channel analysis, the content plan, the schedule and every draft, so what goes out carries one argument rather than four versions of it."
  # Narrowed for the same reason as the FACE approval claim in
  # content/use-cases/_index.md. The review queue and the approve/reject are real
  # (ContentService.ApproveContent / RejectContent), and the six statuses in the
  # next line are a real column. What is NOT real is an interlock:
  # PublishingService.SchedulePost (pulse/grpc/cmd/publishing_server.go:27) inserts
  # into scheduled_posts without checking that the content it references is in
  # `approved`. So this may be claimed as a discipline the queue supports, never as
  # a guarantee that nothing can reach a customer unapproved.
  - "Every draft — post, whitepaper, cold email, call script — lands in a review queue with an approve and a reject, and approving is a step a named person takes rather than a formality the system performs for them. Read it as the place the work is cleared, not as an interlock wired across every route something could leave by."
  - "Every piece has one stated status: draft, waiting for review, approved, rejected, published, archived. Those six are the statuses PULSE actually keeps, so what is waiting on you and what actually went out are both visible."
  - "Marking a PULSE result useful or not carries into the next round, so understanding accumulates in a system instead of in one person's head."

measures_heading: "How you will know it worked"
measures_intro: "These numbers are yours, not ours. Write down where you stand in the first week — once the working rhythm changes, the thing that would tell you where you started is the thing that changed."
measures:
  - metric: "Cost per published piece"
    today: "Last twelve months: agency retainer and project fees, the salary cost of hours spent briefing, reviewing and chasing, and per-seat tool costs. Divide by the pieces actually published, not the pieces commissioned."
    moves: "Down on both halves of the fraction — producing a draft stops being the expensive step, and fewer commissioned pieces die before they reach a page."
  - metric: "Commissioned but never published"
    today: "The same twelve months, from your brief log or project tool: briefs that died in revision, pieces abandoned when the moment passed. Cost with no output against it."
    moves: "Down, because a draft exists the same day the brief does, and each one then sits in a queue with a stated status instead of going quiet."
  - metric: "Median days from decision to publication"
    today: "Take five recent pieces: the date somebody decided to say the thing, and the date it went out. Use the median, not the average."
    moves: "Down, because the elapsed time becomes the time a person needs to read and approve rather than the time a piece needs to be produced."
  - metric: "Coverage against the questions buyers actually ask"
    today: "The channels and formats you agreed are worth being present in, with pieces published against each last year — plus the questions sales gets asked that no page on your site answers."
    moves: "The near-empty rows fill. Those rows were a decision your production capacity made on your behalf; the mechanism is that the decision comes back to you."
  - metric: "Qualified pipeline sourced, and time to qualify an inbound lead"
    today: "Your customer-record system, over a quarter: the gap between a lead arriving and the stage change marking it qualified or disqualified, and the share of sales hours spent on leads that never qualified."
    moves: "Time to qualify down, qualified share up, because PULSE attaches research on that specific company to the outreach instead of leaving it to be assembled by hand afterwards."
  - metric: "Organic visibility, and how the site reads to search engines"
    today: "Impressions and clicks from your search console for the trailing quarter, alongside a scored audit of the site kept from your first day, before anything is changed."
    moves: "Up, because PULSE's audit returns its recommendations ranked and applies them from the same screen rather than exporting them to a ticket somebody opens in a fortnight."

foundations_heading: "Two things that make the above possible — and neither is a marketing feature"
foundations:
  - name: "Your material stays on machines you own"
    plain: "The analysis and the writing happen on hardware inside your own network. Customer lists, pricing logic, unpublished plans and positioning you have not announced are processed there, not handed to an outside model provider to learn from. This comes from the Runink CORE platform that PULSE is deployed on — the layer that runs the software and holds the connections to your own data — rather than from anything in the marketing product itself."
    measured_by: "The review that stands between a marketing team and a new tool. When legal or security asks where company material is processed, the answer is the name of a machine, given once and in writing — the same answer a customer's security questionnaire and a data-residency clause need."
  - name: "Open-web research that does not announce itself"
    plain: "PULSE reads the public web directly, through Runink's own headless-browser engine driven over ordinary public search results and the pages behind them, rather than putting your questions through a search company's paid service. The engine is shared Runink infrastructure, not a PULSE feature — PULSE is one of the products that uses it."
    measured_by: "Competitor and pricing research is where the question gives away the plan: asking a vendor about a rival's pricing tells that vendor you are working on pricing, and that record sits outside your control. It also means how much research a campaign gets is decided by the campaign, not by a per-question bill or a monthly cap."

next_heading: "See whether it fits"
next_body: "Bring your website and the channels you publish on. Reading them and telling you where you stand is the first thing PULSE does, which is also the fastest way to judge whether the rest is for you."
cta_text: "Book a consultation"
paper:
  text: "Read the PULSE paper"
  url: "/blog/whitepapers/runink-pulse/"
  note: "Runink PULSE is the product behind this page, and it is a different product from Runink FACE — nothing described above is a FACE capability, and nothing on the FACE pages is a PULSE one. Runink's own website and the content work behind it run on PULSE; that is a first-party claim, offered as exactly that and not as a customer result. The paper carries no case studies, no customer names and no return-on-investment figures."
---
