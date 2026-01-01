---
title: "Pricing"
description: "Transparent, usage-based pricing — pay only for what your team actually uses."
layout: "pricing"
---

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Monthly Commitment", "value": "monthly" },
    { "label": "Annual Contract (Save 25%)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "title": "Invest in Outcome Certainty",
  "description": "Stop paying for shelfware. Pay for the engine that protects your P&L.",
  "plans": [
    {
      "name": "Core",
      "price_monthly": "$20",
      "price_yearly": "$15",
      "description": "For Ops Teams Demanding Visibility",
      "features": [
        "Rules/Data Reconciliations",
        "Hypothesis Labs",
        "Data Maturity AI Posture Center"
      ],
      "usage": [
        "Data and Compute usage-based scale ($0.01/unit)"
      ],
      "button": {
        "text": "Start Core",
        "url": "/contact"
      }
    },
    {
      "name": "Cockpit",
      "price_monthly": "$80",
      "price_yearly": "$60",
      "featured": true,
      "description": "For Leaders Who Demand Control",
      "features": [
        "Everything in Core",
        "AI-Driven Execution Agents",
        "Advanced Risk Simulation"
      ],
      "usage": [
        "Auto-Provisioning: 3% per PO (capped at $50/order)",
        "Claims Recovery: 20% Success Fee",
        "Data and Compute usage-based scale ($0.01/unit)"
      ],
      "button": {
        "text": "Deploy Cockpit",
        "url": "/contact"
      }
    }
  ]
}
{{< /pricing-table-1 >}}


{{< faq >}}
{
  "title": "Billing Logic. No Surprises.",
  "description": "How we charge for high-performance execution.",
  "questions": [
    {
      "question": "Why the split between Core and Cockpit?",
      "answer": "Core gives you the eyes ($20/mo). Cockpit gives you the hands ($80/mo). If you just want to see problems, buy Core. If you want us to fix them, buy Cockpit."
    },
    {
      "question": "How does the granular pricing work?",
      "answer": "We charge separately for **Data Units (DU)** and **Compute Units (CU)**. Each costs **$0.01 per unit** (rounded up):<br>• **1 DU = 1GB of data processed**<br>• **1 CU = 60 seconds of compute time**<br>These are direct pass-through costs from cloud providers with zero markup."
    },
    {
      "question": "Why charge for Data and Compute separately?",
      "answer": "Transparency. We run on multiple cloud providers (AWS, GCP, Azure). Each has different infrastructure costs. By separating DU and CU, you see exactly what you're paying for: data movement vs. actual computation. No hidden fees, no inflated margins."
    },
    {
      "question": "Pricing Simulation: Small Base (2GB/day)",
      "answer": "**Daily:** 2GB data + 2 min compute<br>**Monthly:** 60 DU + 60 CU = **$1.20/mo**<br><br>60 DU × $0.01 = $0.60<br>60 CU × $0.01 = $0.60<br><br>Less than a cup of coffee for daily reconciliation automation."
    },
    {
      "question": "Pricing Simulation: Medium Base (10GB/day)",
      "answer": "**Daily:** 10GB data + 4 min compute<br>**Monthly:** 300 DU + 120 CU = **$4.20/mo**<br><br>300 DU × $0.01 = $3.00<br>120 CU × $0.01 = $1.20<br><br>The cost of a single lunch for enterprise-grade automation."
    },
    {
      "question": "Pricing Simulation: Large Base (50GB/day)",
      "answer": "**Daily:** 50GB data + 10 min compute<br>**Monthly:** 1,500 DU + 300 CU = **$18.00/mo**<br><br>1,500 DU × $0.01 = $15.00<br>300 CU × $0.01 = $3.00<br><br>High-volume operations at a fraction of competitor pricing."
    },
    {
      "question": "Auto-Provisioning ROI Example",
      "answer": "**Scenario:** You place 100 purchase orders/month averaging $5,000 each.<br>**Cost:** 100 orders × $50 (capped) = **$5,000/mo**<br>**Value:** We handle vendor communications, shipment tracking, and exception management automatically. Your team saves 80 hours/month. At $50/hr = **$4,000 saved** in labor alone.<br><br>Net cost after labor savings: **$1,000/mo** for full procurement automation."
    },
    {
      "question": "Claims Recovery ROI Example",
      "answer": "**Scenario:** We identify $50,000 in lost inventory and billing errors.<br>**Recovery:** We file claims and recover $40,000.<br>**Our Fee:** 20% × $40,000 = **$8,000**<br>**You Keep:** **$32,000**<br><br>If we recover nothing, you pay nothing. It's pure found money with zero downside risk."
    },
    {
      "question": "Explain the 'Success Fee' again.",
      "answer": "It's simple. We identify lost inventory and claims. When we recover the capital, we keep 20% as our fee. You keep 80%. It is strictly performance-based."
    }
  ]
}
{{< /faq >}}
