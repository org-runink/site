---
title: "Runink PULSE Pricing"
# Search and share-card text (CONTENT.md rules 1 and 3 apply): the <title> is
# seo_title verbatim, at most 60 characters; seo_description is the meta and card
# description, at most 155. Visible copy on the page is unchanged by these two.
seo_title: "Runink PULSE pricing: per seat, run where you choose"
seo_description: "What a Runink PULSE licence costs: per seat on Runink's shared machines, in your own cloud account, or priced with you. One seat price, no fee on results."
description: "What a licence to run Runink PULSE costs. You pay for each person who uses it, and you choose where it runs: on Runink's shared machines, in your own cloud account, or inside your own estate, priced with you."
layout: "pricing"
date: "2026-11-06T00:00:00Z"
author: "Runink"
product_name: "Runink PULSE"
product_url: "products/pulse/"
product_subcategory: "Marketing, lead generation and sales outreach"
# WHERE EVERY CLAIM ON THIS PAGE COMES FROM.
#
# PRICES ARE THE PRICE BOOK OF 2026-11-06 (billing#36, data/pricing.json "pulse"):
# PULSE Lite (1-9 seats, Runink's shared machines) $55 a seat a month yearly, $65
# month to month, 10 tasks a seat a day at full speed, then a slower pace until
# midnight; Dedicated (10+ seats, runners in the customer's own cloud account) $109 a
# seat a month, yearly; Enterprise priced with you. PULSE is seat-only: no compute
# meter, no overage, no runner fee. Change billing first, then data/pricing.json,
# then the cards here and in the three translations;
# assets/js/__tests__/tide-pulse-pricing.test.js fails when they disagree.
#
# Every other sentence is lifted from content/products/pulse.md (its FAQ answers on
# cost, where the data goes and the quota) or from /pricing/ (the services answer).
# SERVICES: the landscape audit and roadmap at $200 or EUR 200 an hour in 50-hour
# blocks is the only services figure; the rest is "Upon request".
#
# THE VOICE SECTION quotes each vendor's price from the vendor's own pricing page,
# read on 2026-11-06, with a link; vendors whose price could not be confirmed are
# not named. It makes no claim about how PULSE itself places calls.
#
# Four languages (pulse-pricing.fr/.es/.pt.md): a change lands in all four in the
# same commit (CONTENT.md rule 12). content/products/pulse.md stays English only.
---

This is the price of Runink PULSE. You pay for each person who uses it, and the seat covers the work that person puts through it. You choose where it runs: on Runink's shared machines, in your own cloud account, or inside your own estate. Writing a second version of a campaign does not add to the price.

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Pay Monthly", "value": "monthly" },
    { "label": "Pay Yearly (About 15% Less)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "ON RUNINK'S SHARED MACHINES",
      "pill_color": "stone",
      "name": "LITE LICENCE",
      "subtitle": "FOR TEAMS OF 1 TO 9 PEOPLE",
      "price_color": "stone",
      "price_monthly": "65",
      "price_yearly": "55",
      "price_subtitle": "PER PERSON, PER MONTH",
      "credits": "10 TASKS A DAY AT FULL SPEED<br>PER PERSON",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "How many people you licence. Nothing else."},
        {"label": "SHORTEST COMMITMENT", "value": "One month."},
        {"label": "AFTER THE DAILY TASKS", "value": "Tasks keep running at a slower pace until midnight in your time zone, when the count starts again."},
        {"label": "FEES ON RESULTS", "value": "None."}
      ],
      "features": [
        "RUNS ON RUNINK'S SHARED MACHINES, WHERE YOUR WORK TAKES ITS TURN",
        "CHECK-UP, LEADS, CAMPAIGNS AND STUDIO",
        "EVERY DRAFT WAITS FOR YOUR APPROVAL",
        "THE SEAT PRICE STAYS THE SAME HOWEVER MANY PIECES YOU WRITE"
      ],
      "button": {
        "text": "START WITH LITE",
        "url": "/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "IN YOUR OWN CLOUD ACCOUNT",
      "pill_color": "orange",
      "name": "DEDICATED LICENCE",
      "subtitle": "FOR 10 PEOPLE AND UP",
      "price_color": "orange",
      "price_monthly": "109",
      "price_yearly": "109",
      "price_subtitle": "PER PERSON, PER MONTH, ON A YEARLY CONTRACT",
      "credits": "NO DAILY LIMIT<br>ON YOUR OWN CLOUD",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "How many people you licence. Your cloud bills you for the compute directly."},
        {"label": "SHORTEST COMMITMENT", "value": "One year."},
        {"label": "DAILY LIMIT", "value": "None."},
        {"label": "FEES ON RESULTS", "value": "None."}
      ],
      "features": [
        "RUNNERS IN YOUR OWN CLOUD ACCOUNT",
        "CHECK-UP, LEADS, CAMPAIGNS AND STUDIO",
        "EVERY DRAFT WAITS FOR YOUR APPROVAL",
        "NO DAILY LIMIT ON TASKS"
      ],
      "button": {
        "text": "TALK ABOUT DEDICATED",
        "url": "/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "ON YOUR PREMISES OR YOUR CLOUD",
      "pill_color": "stone",
      "name": "ENTERPRISE LICENCE",
      "subtitle": "FOR RUNNING IT WHERE YOU CHOOSE",
      "price_monthly": "CUSTOM",
      "price_yearly": "CUSTOM",
      "price_subtitle": "PRICED WITH YOU",
      "credits": "NO DAILY LIMIT<br>WHERE YOU RUN IT",
      "outcome_strategies": [
        {"label": "WHAT SETS THE BILL", "value": "Where it runs and the service levels you set."},
        {"label": "SHORTEST COMMITMENT", "value": "Agreed with you."},
        {"label": "DAILY LIMIT", "value": "None."},
        {"label": "ONBOARDING & CONSULTING", "value": "Upon request."}
      ],
      "features": [
        "INSIDE YOUR OWN ESTATE, INCLUDING SITES WITH NO CONNECTION TO THE OUTSIDE WORLD",
        "OR IN YOUR OWN CLOUD ACCOUNT",
        "ORDINARY PROCESSORS, NO GRAPHICS CARD REQUIRED",
        "NO OUTSIDE AI SERVICE IS CALLED"
      ],
      "button": {
        "text": "TALK TO US",
        "url": "/#contact",
        "style": "outline"
      }
    }
  ]
}
{{< /pricing-table-1 >}}

## What automated voice agents cost

Many teams follow up leads with an AI voice agent, billed by the minute. These are the prices on each vendor's own pricing page, in US dollars, as published on 6 November 2026:

- [Retell AI](https://www.retellai.com/pricing) lists $0.07 to $0.31 a minute for its voice agents, and $0.015 a minute for US calls on its phone numbers.
- [Bland AI](https://www.bland.ai/pricing) lists $0.14 a minute on its Start plan, and $0.12 a minute plus $299 a month on its Build plan. Phone charges are billed on top.
- [ElevenLabs](https://elevenlabs.io/pricing/api) lists $0.08 a minute for its agents. The page does not say whether the language model is included.
- [Twilio](https://www.twilio.com/en-us/voice/pricing/us) lists the phone line on its own: $0.014 a minute for an outbound US call, and $1.15 a month for a local number.

Three hundred calls of three minutes each is 900 minutes a month. At those rates, an AI voice agent costs $63 to $279 on Retell's published range, or $126 on Bland's Start plan before phone charges, or $72 on ElevenLabs. The phone line alone, on Twilio, costs $13.75: 900 minutes at $0.014, plus one local number. An agency calling for five clients pays five times as much.

Runink PULSE is priced by the seat, never by the minute. It drafts a call script for each lead, and a person on your team can make the call with it.

There is also a rule to know. In the US, the FCC has ruled that a call made with an AI-generated voice needs the prior express consent of the person called, and written consent for a marketing call ([FCC 24-17](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf), adopted 2 February 2024). A call where a person speaks is not an artificial-voice call under that ruling.

{{< faq >}}
{
  "title": "Questions Before You Sign",
  "description": "What the seat covers, where it runs, and what you are charged for.",
  "questions": [
    {
      "question": "What does it cost?",
      "answer": "PULSE is priced by the seat: you pay for each person who uses it, and the seat covers the work that person puts through it. PULSE Lite runs on Runink's shared machines, where your work takes its turn: $65 a seat a month, or $55 a seat a month on an annual plan, for teams of one to nine. Each Lite seat gets 10 tasks a day at full speed; after that, tasks keep running at a slower pace until midnight in your time zone, when the count starts again. Dedicated is $109 a seat a month, for ten seats and up, running on runners in your own cloud account, which bills you for that compute directly. Enterprise, including deployments with no connection to the outside world, is quoted with you. PULSE, FACE and TIDE are each sold on their own subscription, so a PULSE seat is a seat in PULSE."
    },
    {
      "question": "Which licence fits us?",
      "answer": "Count the people who will use PULSE, then decide where it should run.\n\nUnder ten people, the **Lite Licence** is the fit. It runs on Runink's shared machines at the lowest price, and it is the only one you can take a month at a time, so a trial does not need a year's commitment.\n\nFrom ten people, **Dedicated** runs PULSE on runners in your own cloud account, with no daily limit. It is taken a year at a time.\n\nIf it has to run inside your own estate, including sites with no connection to the outside world, that is **Enterprise**, and the conversation starts with where it has to run."
    },
    {
      "question": "Do we have to sign for a year?",
      "answer": "Only for Dedicated and Enterprise. The **Lite Licence** can be taken month by month at $65 per person, or a year at a time at $55: the same difference, about 15%, shown by the toggle above."
    },
    {
      "question": "Where does our data go?",
      "answer": "Onto the machines your plan names: your own servers or cloud account on Dedicated and Enterprise, Runink's shared machines on Lite. No outside company runs a database holding your positioning, your customer records or your pipeline. No material is sent out to be trained on, and there is no account with an outside AI provider for it to be sent to."
    },
    {
      "question": "How does a PULSE project start, and what do the services cost?",
      "answer": "With a **landscape audit and roadmap**. We start by looking, not selling: an audit of your current channels, marketing tools and lead sources, then an implementation roadmap built on it. It is **$200 or €200 an hour, in 50-hour blocks**: one block for the audit, one for the roadmap.\n\nThe Enterprise engagement packages add the following, each priced **Upon request**: a paid pilot (60 days of proof of value on your own brand, run from the roadmap), onboarding and consulting, and support and updates (passive plans for updates and fixes, active plans with named engineers and response times). They are delivered by Runink and its partners."
    }
  ]
}
{{< /faq >}}
