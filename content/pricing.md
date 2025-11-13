---
title: "Pricing"
description: "Transparent, usage-based pricing — pay only for what your team actually uses."
layout: "pricing"
---

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Monthly", "value": "monthly" },
    { "label": "Yearly (save 10%)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "title": "Flexible plans that scale with your data maturity",
  "description": "All plans include automatic semantic generation, data quality scoring, and policy governance. Pay by seats, connections, or usage — not by vanity features.",
  "plans": [
    {
      "name": "Standard",
      "price_monthly": "$20 / seat",
      "price_yearly": "$15 / seat",
      "description": "Perfect for small data teams starting their semantic and governance journey.",
      "features": [
        "Up to 3 data connections (Snowflake, BigQuery, Databricks, Postgres)",
        "Up to 15 GB analyzed per month (metadata + lineage)",
        "Automatic schemas.yml generation + PRs to github",
        "Data maturity and AI-readiness scoring"
      ],
      "usage": [
        "$0.001 / query analyzed beyond 50K per month",
        "$5 / month for each extra connection",
        "$0.05 / GB beyond 20 GB"
      ],
      "button": {
        "text": "Start free trial",
        "url": "/contact"
      }
    },
    {
      "name": "AI-Enhanced",
      "price_monthly": "$80 / seat",
      "price_yearly": "$60 / seat",
      "featured": true,
      "description": "For data teams that need LLM-safe copilots, graph memory, and smart optimizations.",
      "features": [
        "Everything in Standard, plus:",
        "AI Copilot for semantic Q&A and explanation tracing",
        "Automated PRs for model optimizations & cost tuning",
        "Metric API Publisher (REST/GraphQL endpoints)"
      ],
      "usage": [
        "$0.0008 / query analyzed beyond 250K",
        "$10 / month for each extra connection",
        "$0.04 / GB beyond 250 GB"
      ],
      "button": {
        "text": "Book a demo",
        "url": "/contact"
      }
    },
    {
      "name": "Enterprise",
      "price_monthly": "Custom",
      "price_yearly": "Custom",
      "description": "For larger or regulated teams needing private deployments and unlimited usage.",
      "features": [
        "Unlimited connections, data, and queries",
        "Private/on-prem deployment (VPC, SOC2, HIPAA-ready)",
        "Dedicated governance graph & local agent runtimes",
        "Custom connectors & security policies",
        "SSO, audit exports, and SLA guarantees",
        "White-glove onboarding & governance workshops"
      ],
      "button": {
        "text": "Talk to sales",
        "url": "/contact"
      }
    }
  ]
}
{{< /pricing-table-1 >}}

{{< usage-section >}}
{
  "title": "Usage-based billing — pay only for what you analyze",
  "description": "Runink charges only for what you actually process. Every query scanned, data connection added, and GB analyzed counts toward your usage credits.",
  "steps": [
    {
      "icon": "plug",
      "title": "Connect your data sources",
      "text": "Each source (Snowflake, BigQuery, Databricks, etc.) counts as a connection. The first 3 are included; extras are billed monthly."
    },
    {
      "icon": "bar-chart",
      "title": "We monitor and analyze your queries",
      "text": "Each query inspected or optimized by Runink counts toward your usage limit. Dashboards show your monthly and annual usage."
    },
    {
      "icon": "credit-card",
      "title": "Pay only for overages",
      "text": "If you exceed your plan’s limits, small overage rates apply for queries, GB analyzed, or connections. Annual plans include pooled usage across all teams."
    }
  ]
}
{{< /usage-section >}}

{{< faq >}}
{
  "title": "Pricing & Billing FAQs",
  "description": "Everything you need to know about Runink’s usage-based pricing model.",
  "questions": [
    {
      "question": "What’s included in the seat price?",
      "answer": "Seats are for active users (engineers, analysts, or AI copilots) accessing Runink’s semantic dashboard or API. You can start with a single seat and add more anytime."
    },
    {
      "question": "How is data usage measured?",
      "answer": "Runink counts GB analyzed when scanning metadata, lineage, and query logs — not full table data. It’s lightweight and safe for regulated environments."
    },
    {
      "question": "Can we switch between monthly and yearly plans?",
      "answer": "Yes — you can switch anytime. Yearly plans offer a 15% discount and pool your query credits across all projects."
    },
    {
      "question": "Do you charge for AI copilots separately?",
      "answer": "Only the AI-Enhanced tier includes copilots and optimization features. You’re charged per seat, with optional usage credits for high-volume copilots."
    },
    {
      "question": "Can we buy usage credits upfront?",
      "answer": "Yes. Credits start at $100 for 100K queries or 50 GB analyzed. Unused credits roll over for 12 months."
    }
  ]
}
{{< /faq >}}
