# AI Posture Center (System Health Monitoring)

## Overview
The AI Posture Center provides comprehensive monitoring of data warehouse health, incident tracking, and automated runbook execution for operational resilience.

## Page Location
`cli/console/herd/ai_posture_enrichment.go`

## Shepherd Model
**`cli/sprdsvc/models/shepherd-ai-posture-v2.yaml`** - AI-powered health analysis and incident prediction

## Page Layout - "Can We Safely Trust AI Right Now?"

> **What you see**: AI readiness posture with incident command view—not just data quality scores.

```
┌────────────────────────────────────────────────────────────────────┐
│ AI POSTURE CENTER - Readiness Monitor                      [Export]│
├──────────────────┬─────────────────────────────────────────────────┤
│ READINESS         │ AI INCIDENT TIMELINE (Cause, Not Symptoms)     │
│ SCOREBOARD        │ ┌─────────────────────────────────────────────┐ │
│ (By Domain)       │ │ 🔴 2 days ago: Cost spike on analytics      │ │
│                   │ │    Cause: Unbounded query on low-quality    │ │
│ 📊 Commerce       │ │    Blast radius: 3 models, $850/day impact  │ │
│ ┌───────────────┐ │ │    [View Root Cause] [Apply Fix]            │ │
│ │Quality:    A- │ │ ├─────────────────────────────────────────────┤ │
│ │Risk:       Low│ │ │ 🟡 5 days ago: Schema drift on users_dim    │ │
│ │Lineage:    95%│ │ │    Cause: 3 columns added without migration │ │
│ │Cost/Answer:$  │ │ │    Blast radius: 2 features, 1 prediction   │ │
│ └───────────────┘ │ │    [Stabilize Schema] [Update Models]       │ │
│                   │ └─────────────────────────────────────────────┘ │
│ 📦 Inventory      │                                                 │
│ ┌───────────────┐ │ DATABASE OPTIMIZATION SOPs (Technical Fixes)    │
│ │Quality:    A  │ │ ┌─────────────────────────────────────────────┐ │
│ │Risk:       Low│ │ │ 🛠️ Operation SOP: Add Index to 'sales_fact'    │ │
│ │Cost/Answer:$$ │ │ │    Impact: Reduce scan by 90% ($200/mo)     │ │
│ └───────────────┘ │ │    [Execute]                                │ │
│                   │ │                                             │ │
│ 💰 Finance        │ │ ⚠️ Exception SOP: Defer 'users_raw' Cleanup    │ │
│ ┌───────────────┐ │ │    Reason: Deprecation planned for Q3       │ │
│ │Quality:    B+ │ │ │    [Approve Deferral]                       │ │
│ │Risk:   Medium│ │ │                                             │ │
│ │Cost/Answer:$$$│ │ │ 🏛️ Governance SOP: Schema Change Request      │ │
│ └───────────────┘ │ │    Reason: Breaking change detected         │ │
│                   │ │    [Open Request]                           │ │
│ [View All Domains]│ └─────────────────────────────────────────────┘ │
│                   │ ┌─────────────────────────────────────────────┐ │
│                   │ │ KNOWLEDGE BASE GENERATOR (Context Engine)   │ │
│                   │ │ ────────────────────────────────────┐       │ │
│                   │ │ [Graph] -> [Interpretation] -> [Base]    │   │
│                   │ │  • Inventory Context -> 📦 Provisioning  │   │
│                   │ │  • Compliance Context -> 💰 Claims       │   │
│                   |  └─────────────────────────────────────────────┘
└──────────────────┴─────────────────────────────────────────────────┘
```

### Cluster Semantics (Business Names)

The XGBoost/HDBSCAN clustering assigns domains to business-meaningful groups:

- **Fulfillment Operations**: Inventory, shipping, delivery tracking, warehouse management
- **Financial Transactions**: Claims, payments, billing, invoicing, accounts receivable
- **Customer Analytics**: User behavior, CRM, support tickets, marketing attribution
- **Uncategorized Data**: Tables that don't fit established patterns (noise cluster)

These semantic names are derived from:
1. **Domain name keywords** (e.g., "inventory" → Fulfillment Operations)
2. **Table-level signals** (e.g., financial columns → Financial Transactions)
3. **Usage patterns** (e.g., high JOIN activity → Customer Analytics)
4. **Cluster ID patterns** from training data when keywords aren't present

### Layout Components

**Top Panel - AI Readiness Scoreboard**
- Domain-level AI safety scores (Quality, Risk, Lineage, Freshness, Policy, Cost)

**Right Panel - Database Optimization SOPs (Technical)**
- **Operation SOP**: Execute immediate technical fix (e.g., "Add index on customer_id").
- **Exception SOP**: Document why fix is deferred (e.g., "Table deprecation planned").
- **Governance SOP**: Escalate for architectural decision (e.g., "Schema change required").
- *Note: These are technical database actions, separate from Business Value Gates in Rules Studio.*

**Bottom Panel - Knowledge Base Generator (The "Context Engine")**
- **Input**: Knowledge Graph (Raw Relationships from `HerdResult.DomainGraphs`)
  - **Nodes**: Domains (large violet hubs) + Tables (smaller cyan nodes)
  - **Edges**: JOIN relationships and lineage connections detected during Herd analysis
  - **Interactive**: Click any node to view detailed Data Quality & Profiling indicators (DAMA dimensions)
- **Process**: Semantic Interpretation & Domain Clustering
- **Output**: Curated **Knowledge Bases** for Decision Cockpit Agents
  - 📦 **To Provisioning Agent**: "Inventory Velocity + Supplier Risk Context"
  - 💰 **To Claims Agent**: "SLA Breaches + Shipping Anomalies Context"
- *Visual*: Shows the transformation of raw nodes into usable context for agents
- *If empty*: Ensure Herd has analyzed connection with lineage tracking enabled and Shepherd has processed graph relationships

**Right Panel - Response & Prevention (Technical Fixes)**
- Auto-generated runbooks for **database health and performance issues**
- **Fix Now**: Immediate technical actions (add indexes, kill runaway queries, apply schema fixes)
- **Prevent Recurrence**: Proactive measures (set query guardrails, enforce FinOps tags, schedule maintenance)
- Actionable steps with expected impact stated (cost savings, performance improvement)
- Direct link to execution through system-wide controllers
- **Source**: Query performance issues, schema drift, and cost anomalies detected by Herd telemetry
- *Note: This is separate from Business Value Gates in Rules Studio, which focus on operational opportunities*


## Purpose
- Monitor overall system health
- Track incidents and resolutions
- Execute automated runbooks
- Predict potential issues
- Generate readiness scorecards

## Internal Functions & Algorithms

### Health Monitoring
- **`computeOverallHealth(components)`** - Weighted average health score (0-100)
  - Fetch weight: 30%, Herd weight: 25%, Shepherd weight: 25%, Runners weight: 20%
- **`monitorServiceHealth(service)`** - Per-service health metrics
  - CPU usage, memory usage, request latency, error rate
- **`detectAnomalies(metrics, window)`** - Time-series anomaly detection
  - Uses Exponential Smoothing or ARIMA for prediction

### Incident Detection
- **`classifyIncident(metrics)`** - Severity classification
  - Critical: Service down, data unavailable
  - Warning: High resource usage, slow queries
  - Info: Scheduled maintenance, minor issues
- **`predictIncidents(historicalData)`** - ML-based incident prediction
  - Uses logistic regression on resource trends
- **`aggregateIncidentTrend(incidents, period)`** - Trend analysis (daily, weekly)

### GLOSH Outlier Scoring
- **`computeGLOSH(point, cluster)`** - Global-Local Outlier Score from Hierarchies
  - Measures how outlier-ish a point is relative to its cluster
  - Score 0-1: 0 = normal, 1 = strong outlier
- **`findIncidentOutliers(metrics)`** - Identify unusual incident patterns

### Runbook Execution
- **`executeRunbook(runbook, params)`** - Execute remediation workflow
- **`parseRunbookSteps(yaml)`** - Parse YAML runbook definition
- **`trackRunbookExecution(id, status)`** - Log execution progress

## Key SQL Statements (Generic)

### Query Performance Monitoring
```sql
-- Generic slow query detection (requires query log table)
SELECT
    query_text,
    execution_time_ms,
    rows_produced,
    bytes_scanned
FROM query_history
WHERE execution_time_ms > 300000  -- queries > 5 minutes
ORDER BY execution_time_ms DESC
LIMIT 50;
```

### Failed Query Detection
```sql
-- Detect failed queries
SELECT
    query_id,
    query_text,
    error_message,
    execution_timestamp
FROM query_history
WHERE error_code IS NOT NULL
    AND execution_timestamp >= NOW() - INTERVAL '24 HOURS'
ORDER BY execution_timestamp DESC;
```

### Resource Usage Analysis (Vendor-Specific)

#### Snowflake
```sql
SELECT
    warehouse_name,
    SUM(credits_used_compute) as total_credits,
    MAX(avg_queued_load) as max_queue_load
FROM snowflake.account_usage.warehouse_metering_history
WHERE start_time >= DATEADD(day, -1, CURRENT_TIMESTAMP())
GROUP BY warehouse_name;
```

#### BigQuery
```sql
SELECT
    project_id,
    user_email,
    SUM(total_slot_ms) / (1000 * 60 * 60) as slot_hours,
    SUM(total_bytes_processed) / POW(10, 12) as tb_processed
FROM `region-us`.INFORMATION_SCHEMA.JOBS_BY_PROJECT
WHERE creation_time >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 24 HOUR)
GROUP BY project_id, user_email;
```

#### PostgreSQL
```sql
SELECT
    datname as database,
    numbackends as connections,
    xact_commit as commits,
    xact_rollback as rollbacks,
    blks_hit / (blks_hit + blks_read) as cache_hit_ratio
FROM pg_stat_database
WHERE datname NOT IN ('template0', 'template1');
```

## Backend Components

- **`herdsvc`** - Health monitoring and incident detection
- **Shepherd (sprdsvc)** - Predictive analysis
- **`barnsvc`** - Incident storage
- **`cli/security/dns/proxy.go`** - REST API proxy

### REST Endpoints (via proxy.go)
- `/api/herd/health` - Get system health metrics
- `/api/herd/incidents` - List incidents
- `/api/herd/runbook/execute` - Run remediation workflow
- `/api/chat/completions` - Shepherd incident analysis

## User Interactions

1. **View Health**: Dashboard shows real-time health scoreboard and component status
2. **Respond to Incident**: Click incident → Review details → Select runbook → Execute
3. **Monitor Trends**: View incident timeline chart, analyze patterns
4. **Create Runbook**: Define YAML workflow → Test → Save for auto-execution

## RBAC Permissions

- **Admin**: Full incident management and runbook execution
- **Writer**: View incidents, execute approved runbooks
- **Reader**: View-only access

## Performance Considerations

- **Metric aggregation**: Health scores updated every 60 seconds
- **Incident polling**: Check for new incidents every 30 seconds
- **Runbook timeout**: Max execution time 10 minutes
- **History retention**: Incidents retained for 90 days

## Related Pages

- [Hypothesis Lab](./HYPOTHESIS_LAB.md)
- [Decision Cockpit](../shepherd/DECISION_COCKPIT.md)
- [Recon Center](../fetch/RECON_CENTER.md)
