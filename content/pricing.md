---
title: "Pricing"
description: "Pay for protection, not features. Transparent infrastructure + outcome-based value."
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
  "title": "Platform Access + Usage-Based Infrastructure",
  "description": "Start cheap. Pay for what you use.",
  "plans": [
    {
      "name": "Core",
      "price_monthly": "$20",
      "price_yearly": "$15",
      "description": "See & Stop Problems",
      "features": [
        "Operational Radar (Daily Risk Dashboard)",
        "Rules Enforcer (Policy Blocking)",
        "Risk Simulation Engine (What-If Testing)",
        "Data Helper (Auto-Cleaning)",
        "Incident Detection (Blast Radius)"
      ],
      "usage": [
        "Data Units: $0.01/GB processed",
        "Compute Units: $0.01/60s runtime",
        "Unlimited team members"
      ],
      "button": {
        "text": "Start with Core",
        "url": "/contact"
      }
    },
    {
      "name": "Cockpit",
      "price_monthly": "$80",
      "price_yearly": "$60",
      "featured": true,
      "description": "Autonomous Execution",
      "features": [
        "Everything in Core",
        "Decision Cockpit (Autonomous Agents)",
        "Auto-Provisioning Workflows",
        "Autonomous Claims Processing",
        "Automated Exception Handling"
      ],
      "usage": [
        "Data Units: $0.01/GB processed",
        "Compute Units: $0.01/60s runtime",
        "Auto-Provisioning: 3% per PO (cap $50)",
        "Claims Recovery: 20% success fee"
      ],
      "button": {
        "text": "Add Cockpit",
        "url": "/contact"
      }
    },
    {
      "name": "Enterprise",
      "price_monthly": "Custom",
      "price_yearly": "Contact Sales",
      "description": "Dedicated Support & Custom SLAs",
      "features": [
        "Everything in Cockpit",
        "Bundled Infrastructure Options",
        "Dedicated Success Engineer",
        "Custom SLA & Response Times",
        "Multi-Region Deployment"
      ],
      "usage": [
        "Negotiable bundled pricing",
        "Volume discounts available",
        "Success fee models available",
        "White-glove onboarding"
      ],
      "button": {
        "text": "Talk to Sales",
        "url": "/contact"
      }
    }
  ]
}
{{< /pricing-table-1 >}}


{{< faq >}}
{
  "title": "Billing Logic. No Surprises.",
  "description": "Low barrier to entry. Revenue scales with your actual infrastructure usage.",
  "questions": [
    {
      "question": "How does Data Unit (DU) and Compute Unit (CU) billing work?",
      "answer": "**Infrastructure is pass-through at cost.**<br>• **1 DU = 1GB of data processed** = $0.01<br>• **1 CU = 60 seconds of compute time** = $0.01<br><br>You pay your base tier ($20 or $80/mo) for platform features. DU/CU scales with actual usage—no markup."
    },
    {
      "question": "What's the difference between Core and Cockpit?",
      "answer": "**Core ($20/mo):** All the visibility and testing.<br>• Operational Radar (see what's breaking)<br>• Rules Enforcer (block bad decisions)<br>• Risk Simulation Engine (test changes)<br>• Data Helper (clean your data)<br><br>**Cockpit ($80/mo):** Adds autonomous execution.<br>• Agents that auto-file claims<br>• Auto-provision purchase orders<br>• Resolve business exceptions<br><br>Core shows you problems. Cockpit fixes them."
    },
    {
      "question": "Pricing Example: Small Team (5GB/day processing, Core only)",
      "answer": "**Core:**<br>Base: $20/mo<br>Data: 150 DU × $0.01 = $1.50<br>Compute: 60 CU × $0.01 = $0.60<br>**Total: ~$22/mo**<br><br>Start cheaper than Netflix. Scale as you grow."
    },
    {
      "question": "Pricing Example: Growing Team (20GB/day, with Cockpit)",
      "answer": "**Cockpit:**<br>Base: $80/mo<br>Data: 600 DU × $0.01 = $6<br>Compute: 240 CU × $0.01 = $2.40<br>**Total: ~$88/mo**<br><br>Plus success fees on recoveries (20% of capital found). Most teams cover annual costs with one successful recovery."
    },
    {
      "question": "What if my data usage spikes?",
      "answer": "DU/CU billing is transparent and predictable. Monitor usage in real-time through the dashboard. For high-volume scenarios (100GB+/day), Enterprise tier offers bundled infrastructure pricing."
    },
    {
      "question": "What are 'Success Fee' options?",
      "answer": "**For claims recovery and fraud detection:**<br>When agents identify and recover capital (fraud, overpayments, subrogation), we charge 20% of recovered funds. You keep 80%. If we find nothing, you pay nothing beyond base platform fees.<br><br>Optional and only applies to recovery workflows."
    },
    {
      "question": "Can I start with Core and add Cockpit later?",
      "answer": "Yes. Start with **Core** ($20/mo) to get visibility and testing. Add **Cockpit** when you're ready to deploy autonomous agents. Your data/compute usage carries over."
    },
    {
      "question": "Do I have to commit to annual?",
      "answer": "No. Monthly is available. Annual contracts save 25%."
    }
  ]
}
{{< /faq >}}
