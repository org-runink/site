---
title: "Healthcare Use Case: Escalation and Referral Coordination"
slug: "use-cases/healthcare"
description: "Runink enables clinical ops and care coordination teams to detect risk, escalate decisions, and route referrals—all with traceability and governance."
layout: "use-case"
industries: ["Healthcare", "Provider Ops", "Digital Health"]
tags: ["Care Escalation", "Referral Routing", "Clinical Triggers", "Workflow Governance"]
---

## From Care Lag to Real-Time Escalation

In hospitals, clinics, and virtual care, delays in responding to clinical signals—vitals, lab values, risk scores—can cost outcomes, dollars, and trust.

Care coordination teams are overloaded. Analysts can’t keep up with ad hoc dashboards. And workflows lack transparency when something’s missed.

---

## 🚨 The Challenge

- Abnormal vitals and labs surface but aren’t always routed to the right team  
- Escalations depend on paging trees or manual review  
- Referral logic is trapped in EMR configuration or spreadsheets  
- Ops leaders lack a reliable audit trail to know: “Was that handled?”  
- Care teams want to **define logic**, not code alerts  

---

## 🧠 Enter Runink

Runink Analytics Companion empowers clinical operations, social workers, referral managers, and nurses to define workflows that:

- Detect when patients cross thresholds  
- Escalate to nursing or specialty review  
- Route referrals to the right partner or intake queue  
- Log every action, user, and signal—with clear contract boundaries  
- Trigger workflows through Snowflake, PostgreSQL, or even Google Sheets

---

## 👩‍⚕️ Example Trigger: Escalation by Nurse Navigator

```yaml
trigger:
  when: patient.qsofa_score >= 2 OR lab.lactate > 3
  where: admission_type = "ED" AND age > 65
  then:
    - action: notify
      who: "navigator_team@provider.org"
    - action: route_referral
      service: "Sepsis Pathway Consult"
    - action: log
      entry: "escalation_triggered"
````

---

## ⚙️ Works With Your Stack

* Snowflake or Databricks for clinical signals and risk scores
* PostgreSQL for internal operations or referral tables
* CSV, FHIR API, or HL7 file drops for intake feeds
* Slack, Teams, or email for alerting
* GitHub CI/CD to review and version referral workflows

---

## 🧾 What Ops & Compliance Teams Get

* ✅ Transparent, testable logic
* ✅ Full audit logs and SLA timelines
* ✅ Self-service authoring for clinical triggers
* ✅ No vendor lock-in—use your data models
* ✅ Support for fast rollout with Runink Advisory

---

## 📈 Outcomes Realized

| Metric                      | Runink Impact                                     |
| --------------------------- | ------------------------------------------------- |
| Referral handoff accuracy   | +40% increase in correctly routed cases           |
| Time-to-escalation          | 60% faster recognition of high-risk vitals        |
| Manual follow-ups reduced   | 75% drop in missed or repeated referrals          |
| Ops-driven logic ownership  | Shifted from analyst to team coordinator level    |
| Audit and quality readiness | Instant access to decisions, triggers, and timing |

---

## Trust in Every Referral. Clarity in Every Escalation.

📍 [Talk to our healthcare ops team](/contact)
🩺 [Explore how Companion integrates into your existing workflows](/products/analytics_companion/)