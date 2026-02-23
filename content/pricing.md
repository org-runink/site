---
title: "Pricing"
description: "Pay for protection, not features. Transparent infrastructure + outcome-based value."
layout: "pricing"
---

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Monthly Commitment", "value": "monthly" },
    { "label": "Annual Contract (Save 15%)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "STANDARD PROTOCOL",
      "pill_color": "stone",
      "name": "MONITOR",
      "subtitle": "FULL-SPECTRUM INTELLIGENCE",
      "price_monthly": "18",
      "price_yearly": "15",
      "price_subtitle": "VISIBILITY & RISK CONTAINMENT",
      "credits": "1,000 ELITE CREDITS",
      "features": [
        "GLOBAL OPERATIONAL RADAR",
        "DEEP RISK & DISCREPANCY INGESTION",
        "RULES RECONCILIATION ENGINE",
        "PREDICTIVE HYPOTHESIS SIMULATOR",
        "READ-ONLY INTELLIGENCE SUITE"
      ],
      "button": {
        "text": "INITIALIZE MONITOR",
        "url": "/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "ELITE PRIORITY",
      "pill_color": "orange",
      "name": "AGENTIC",
      "subtitle": "AUTONOMOUS EXCELLENCE",
      "price_color": "orange",
      "price_monthly": "95",
      "price_yearly": "80",
      "price_subtitle": "FULL-STACK AGENCY & EXECUTION",
      "credits": "3,000 ELITE CREDITS",
      "outcome_strategies": [
        {"label": "OUTCOME STRATEGY", "value": "20% of Recovered Claims"},
        {"label": "OUTCOME STRATEGY", "value": "3% of Auto-Provisioned POs"}
      ],
      "features": [
        "EVERYTHING IN MONITOR +",
        "AUTONOMOUS PROVISIONING AGENT",
        "CLAIMS & REVENUE RECOVERY NODE",
        "MARKET SIGNAL INTELLIGENCE",
        "PRIORITY COMMAND INTERFACE"
      ],
      "button": {
        "text": "DEPLOY AGENTIC",
        "url": "/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "STANDARD PROTOCOL",
      "pill_color": "stone",
      "name": "ENTERPRISE",
      "subtitle": "SOVEREIGN INFRASTRUCTURE",
      "price_monthly": "CUSTOM",
      "price_yearly": "CUSTOM",
      "price_subtitle": "CUSTOM RUNNERS",
      "credits": "10,000 ELITE CREDITS<br>(MANAGED)",
      "outcome_strategies": [
        {"label": "OUTCOME STRATEGY", "value": "20% of Recovered Claims"},
        {"label": "OUTCOME STRATEGY", "value": "3% of Auto-Provisioned POs"}
      ],
      "features": [
        "SELF-HOSTED CUSTOM RUNNERS ENABLED",
        "EVERYTHING IN AGENTIC +",
        "ADVANCED SSO & AUDIT LAYER",
        "STRATEGIC SUCCESS GOVERNANCE",
        "AIR-GAPPED DEPLOYMENT OPTIONS"
      ],
      "button": {
        "text": "CONSULT SALES",
        "url": "/#contact",
        "style": "outline"
      }
    }
  ]
}
{{< /pricing-table-1 >}}

<div class="py-12"></div>

{{< enterprise-a2a >}}
{{< faq >}}
{
  "title": "Billing Logic. No Surprises.",
  "description": "Low barrier to entry. Revenue scales with your actual infrastructure usage.",
  "questions": [
    {
      "question": "How are Ops Credits calculated for usage?",
      "answer": "**Ops Credits dynamically wrap usage.**<br>They are calculated by tracking CPU usage, rounded up per 60-second window. For example, if a process runs on a 4vCPU node and takes 45 seconds to complete, it will consume **4 Ops Credits**. You automatically draw from your tier's monthly Elite Credits allocation for these operations."
    },
    {
      "question": "What happens if my operations exceed my credit limit?",
      "answer": "We ensure continuity. If you run out of credits, agents will pause to prevent overages. You can instantly restore operations with a **Fuel Canister top-up ($15 for +1,000 credits)** without needing to upgrade your base tier."
    },
    {
      "question": "How are Success Fees managed?",
      "answer": "Success fees only apply to capital recovery workflows (e.g., claims and fraud detection). We take a 20% commission on recovered funds—meaning we only win when you win. Strategic auto-provisioning is capped at 3% per PO."
    },
    {
      "question": "Is my data secure in an automated environment?",
      "answer": "Security is our baseline. All data is encrypted at rest and in transit. For high-security environments, our Enterprise tier offers **Air-Gapped Deployment** and **Bring Your Own Runner (BYOR)** options to keep data inside your private cloud."
    },
    {
      "question": "What's the difference between Monitor and Agentic roles?",
      "answer": "**Monitor ($18/mo):** All the visibility and testing.<br>• Operational Radar (see what's breaking)<br>• Rules Reconciliation (flag bad decisions)<br>• Predictive Simulator (test changes)<br><br>**Agentic ($95/mo):** Adds autonomous execution.<br>• Agents that auto-file claims<br>• Auto-provision purchase orders<br>• Resolve business exceptions<br><br>Monitor shows you problems. Agentic fixes them."
    },
    {
      "question": "Do I have to commit to an annual plan?",
      "answer": "No. Monthly commitments are perfectly fine. However, annual contracts save you 15%."
    }
  ]
}
{{< /faq >}}
