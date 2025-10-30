---
title: "Pricing"
description: "Flexible plans based on seats, connections, and data usage."
layout: "pricing"
---

{{< pricing-table-1 >}}
{
    "title": "Simple, transparent pricing for your semantic and AI operations",
    "description": "Every plan includes governed semantics, data-maturity scoring, and connection-based scaling. Pay only for what you use — grow seamlessly as your warehouse expands.",
    "plans": [
        {
            "name": "Standard",
            "price": "$15 / seat",
            "description": "Perfect for teams getting started with semantic automation and data maturity insights.",
            "features": [
                "Includes up to 3 data connections",
                "Analyze up to 50 GB of metadata & data quality metrics",
                "Automatic semantic layer generation",
                "Data maturity & AI-readiness scoring",
                "GitHub Action integration for PR-based workflows",
                "Community & email support"
            ],
            "button": {
                "text": "Start free trial",
                "url": "/contact"
            }
        },
        {
            "name": "AI-Enhanced",
            "price": "$60 / seat",
            "featured": true,
            "description": "For teams that need LLM-safe insights, AI-driven recommendations, and graph automation.",
            "features": [
                "Everything in Standard, plus:",
                "AI Copilot with policy-aware semantic Q&A",
                "Automated recommendations for schema, lineage, and cost optimization",
                "Dgraph Graph Memory integration",
                "Metric API Publisher (REST/GraphQL)",
                "Priority email & Slack support"
            ],
            "button": {
                "text": "Book a demo",
                "url": "/contact"
            }
        },
        {
            "name": "Enterprise",
            "price": "Custom",
            "description": "For large organizations needing private deployment, unlimited data, and tailored governance.",
            "features": [
                "Private or on-prem deployment",
                "Unlimited connections and data volume",
                "Dedicated environment with local AI agents",
                "Custom connectors & APIs",
                "Advanced compliance (PII, residency, audit exports)",
                "White-glove onboarding and governance workshops"
            ],
            "button": {
                "text": "Talk to sales",
                "url": "/contact"
            }
        }
    ]
}
{{< /pricing-table-1 >}}

{{< faq >}}
{
    "title": "Pricing & Usage FAQs",
    "description": "Everything you need to know about connections, data, and scaling.",
    "questions": [
        {
            "question": "What counts as a connection?",
            "answer": "A connection represents one active integration — e.g., Snowflake, dbt, Postgres, or a BI tool. You can mix and match up to 6 in the base plan."
        },
        {
            "question": "What happens if we exceed 50 GB of analyzed data?",
            "answer": "Additional data volume is billed at $0.10/GB per month. Enterprise plans include unlimited data."
        },
        {
            "question": "Can we add more connections mid-term?",
            "answer": "Yes. Additional connections cost $10/month each on Standard and $20/month each on AI-Enhanced."
        },
        {
            "question": "Are AI features optional?",
            "answer": "Yes. AI-Enhanced plans activate LLM-safe copilots and graph reasoning layers. Standard plans use rule-based semantics only."
        },
        {
            "question": "Is there a minimum seat requirement?",
            "answer": "No. You can start with a single seat and add more anytime — volume discounts apply for 20+ seats."
        }
    ]
}
{{< /faq >}}
