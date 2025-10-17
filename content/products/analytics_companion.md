---
title: "Runink Analytics Companion"
description: "Predictive signals, governed triggers, and real-time workflows—built to onboard fast and scale securely across supply chain, retail, insurance, and finance."
layout: "feature"
badge: "Analytics Companion"
badgeColor: "#7c3aed"
features:
  - title: "Domain-Driven Context Modeling"
    description: "Auto-builds knowledge graphs per data domain so every team sees how data flows, who owns it, and which metrics matter."
  - title: "Decision-Ready Analytics"
    description: "Semantic layers regenerate per business domain, exposing trusted SQL, confidence scores, and cross-department perspectives."
  - title: "Analytics Stage Transparency"
    description: "Score data maturity, AI readiness, and quality across ingestion, transformation, and activation stages while highlighting freshness and utilization.."
  - title: "Extensible ML Runtime"
    description: "Run managed models out of the box or extend with local, fine-tuned agentic models under enterprise controls."
---

## Your AI-Powered Analytics Companion

Runink Analytics Companion turns raw events, telemetry, and forecasts into **actionable workflows** your operations, finance, and customer teams can trust.

It now executes end-to-end analytics operations—from connecting sources and modeling domain contexts to deploying governed policies—within a single command-line and UI experience.

Companion runs **in your environment**, applies domain-driven context modeling automatically, and keeps governance front and center. Machine learning insights, knowledge graphs, and the interactive node canvas update in real time as you iterate—delivering decision-ready intelligence without losing control of your data estate.

{{< section-container class="py-20" >}}
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {{< value-card
      title="Planners"
      icon="chart-bar"
      description="Establishes a governed semantic layer with color‑tagged lineage, freshness scores, and usage insights; surfaces the real source of truth for KPIs and AI‑ready datasets; presents stage‑by‑stage data lifecycle views for ingestion, transformation, and activation."
    >}}
    {{< value-card
      title="Merch Ops"
      icon="tag"
      description="Sequence promotions based on omni‑channel readiness by tapping into governed sources of truth and automated semantic layers that generate domain‑specific metrics and keep dashboards in sync."
    >}}
    {{< value-card
      title="Risk Teams"
      icon="shield-check"
      description="Packages policy‑ready playbooks tied to domain contracts and SLA expectations; coordinates decisions across operations, finance, compliance, and customer care with shared context; enables rapid scenario simulation to test interventions before production."
    >}}
    {{< value-card
      title="Claims Analysts"
      icon="clipboard-list"
      description="Renders an explorable node graph that clusters domains, relationships, and semantic views by color; lets users inspect generated SQL, adjust relationships, and publish changes directly from the UI; supports local editing, version control, and governance approvals before going live."
    >}}
    {{< value-card
      title="Data Engineers"
      icon="code-bracket-square"
      description="Generates domain‑specific SQL, metric definitions, and business glossary entries on demand; assigns confidence scores and usage analytics to semantic artifacts; keeps dashboards, APIs, and copilots synchronized when schemas or contracts change."
    >}}
   {{< value-card
      title="Domain-Driven Knowledge Graphs"
      icon="collection"
      description="Auto‑discovers business domains and builds contextual knowledge graphs; cross‑references departmental data usage to identify collaboration gaps; applies data mesh ownership so stewards certify domain facts before downstream automation."
    >}}
  </div>
{{< /section-container >}}

---

## How It Works

```bash
# Connect a source (e.g., Snowflake)
export set RUNI_USER_SFCONN=Analyst
export set RUNI_PWD_SFCONN=SuperSecurePwd1!
runink config add-conn sfconn --type snowflake --url <account> --user $RUNI_USER_SFCONN --pwd $RUNI_PWD_SFCONN --database supply_chain

# Get your Current Domain State
runink fetch --source sfconn

# Create Recommendations per domain
runink herd --source sfconn

# Author a policy
runink herd rule create --name low_stock --source sfconn --file low_stock.yaml --domain 'finance'

# Test & simulate triggers (synthetic data renders in the UI)
runink herd --name low_stock --dry-run

# Deploy
runink push --domain 'finance' --ruleset low_stock
````

---

{{< faq >}}
{
    "title": "Companion Capabilities",
    "description": "Experience how knowledge-graph automation turns logistics signals into a shared source of truth.",
    "questions": [
        {
            "question": "How does the Companion assemble knowledge graphs per logistics domain?",
            "answer": "Domain-specific knowledge graphs weave manifests, IoT streams, and partner records into contextual nodes so yard, berth, and fleet teams reason from the same data fabric."
        },
        {
            "question": "What cross-department visibility do we gain?",
            "answer": "Operations, finance, compliance, and customer teams co-navigate the same graph, seeing how events impact cost centers, service levels, and contractual obligations in real time."
        },
        {
            "question": "How is a real source of truth maintained across regions?",
            "answer": "A data-mesh approach assigns domain ownership, while automated reconciliations surface conflicts and certify a unified data view before plans or forecasts are approved."
        },
        {
            "question": "Where do data contracts fit in the workflow?",
            "answer": "Executable data contracts validate units, timestamps, and SLA clauses as data moves between partners, ensuring each graph node reflects compliant, trusted information."
        },
        {
            "question": "How do teams self-serve insights without new dashboards?",
            "answer": "An automated semantic layer regenerates domain metrics, hierarchies, and relationship maps so analysts and co-pilots can publish decision-ready views instantly."
        }
    ]
}
{{< /faq >}}

{{< faq >}}
{
    "title": "AI-Driven Features",
    "description": "Guided intelligence keeps the knowledge graph current and every stakeholder aligned.",
    "questions": [
        {
            "question": "Which AI engines curate the logistics knowledge graphs?",
            "answer": "Production-grade ML models—graph neural nets, temporal transformers, and large-language models—collaborate to enrich entities, infer relationships, and spotlight dependencies across every domain."
        },
        {
            "question": "What model options come ready to deploy?",
            "answer": "Out-of-the-box anomaly, demand, ETA, and language models are pre-tuned for logistics vocabularies, giving teams immediate predictive coverage without a lengthy setup."
        },
        {
            "question": "How does AI uphold the unified source of truth?",
            "answer": "Continuous data-quality scoring flags anomalies, while lineage-aware reconciliation aligns duplicate events so the canonical view driving decisions stays accurate."
        },
        {
            "question": "Can departments receive tailored insights from the same graph?",
            "answer": "Yes. Role-specific semantic slices project the shared data mesh into finance, operations, and customer-care narratives without duplicating pipelines."
        },
        {
            "question": "How are data contracts and mesh policies enforced automatically?",
            "answer": "Policy agents monitor every ingestion path, applying contract tests, residency rules, and retention policies before graph updates are approved."
        },
        {
            "question": "Can enterprise plans run agentic models locally?",
            "answer": "Enterprise customers extend Companion with isolated, agentic model runtimes that execute near operational systems, including support for bringing your own fine-tuned models alongside managed baselines."
        },
        {
            "question": "What keeps the semantic layer and dashboards in sync?",
            "answer": "Automated semantic-layer generation rebuilds metrics and exposure models whenever domains change, refreshing BI layers, APIs, and copilots with governed definitions."
        }
    ]
}
{{< /faq >}}
