# Hypothesis Lab (Semantic Analysis)

## Overview
The Hypothesis Lab uses AI-powered semantic analysis to generate testable hypotheses about data relationships, quality issues, and optimization opportunities.

## Page Location
`cli/console/herd/datalab.go`

## Shepherd Model
**`cli/sprdsvc/models/shepherd-herd-hypothesis-v2.yaml`** - Hypothesis generation and refinement

## Page Layout - "What Decisions Can We Test Right Now?"

> **What you see**: Business questions you can answer today—not dashboards or raw data.

```
┌────────────────────────────────────────────────────────────────────┐
│ HYPOTHESIS LAB - Decision Scenarios                       [Export] │
├──────────────────┬─────────────────────────────────────────────────┤
│ DECISION TEMPLATES│ SCENARIO CANVAS (What-If Testing)              │
│ (Outcome-Oriented)│ ┌─────────────────────────────────────────────┐ │
│                   │ │ Template: "Pricing for Margin"              │ │
│ 💰 Pricing        │ │                                             │ │
│ • Margin impact   │ │ Business Inputs:                            │ │
│ • Conversion      │ │ • Product: Top SKUs (confidence: 89%)       │ │
│   Confidence: 85% │ │ • Demand elasticity: -1.2 to -0.8           │ │
│                   │ │ • Margin target: +5%                        │ │
│ 📦 Inventory      │ │                                             │ │
│ • Stockout risk   │ │ Impact Tiles:                               │ │
│ • Reorder timing  │ │ ┌─────────┬─────────┬─────────┬──────────┐ │ │
│   Confidence: 92% │ │ │ Margin  │ Volume  │ Risk    │ Speed    │ │ │
│                   │ │ │ +4.2%   │ -8%     │ Low     │ 2 weeks  │ │ │
│ 🚚 Fulfillment    │ │ └─────────┴─────────┴─────────┴──────────┘ │ │
│ • Lead time var   │ │                                             │ │
│ • SLA impact      │ │ Evidence \u0026 Assumptions:                     │ │
│   Confidence: 78% │ │ • 6 months telemetry data                   │ │
│                   │ │ • Assumes stable demand seasonality         │ │
│ 📊 Demand Shift   │ │ • Gap: No competitor pricing data           │ │
│ • Volume forecast │ │ Confidence: 7/10                            │ │
│ • Ops readiness   │ │                                             │ │
│   Confidence: 71% │ │ [Adjust Levers] [Promote to Action]         │ │
│                   │ └─────────────────────────────────────────────┘ │
│ [Custom Question] │                                                 │
└──────────────────┴─────────────────────────────────────────────────┘
```

### Layout Components

**Top Banner - MoE Found Scenarios**
- AI-identified business scenarios (Margin Erosion, Supply Chain Risk, etc.)
- Confidence badges show prediction reliability

**Left Panel - Data Parameters**
- Interactive sliders (Volatility, Velocity, Sensitivity) for simulation
- Read-only data context (Entity Domain, Time Horizon)
- "Run Simulation" initiates Shepherd refinement

**Center Panel - Scenario Canvas**
- Dynamic Impact Grid showing predicted outcomes
- Visual feedback on simulation results
- "Save to Knowledge Graph" promotes results to system-wide metadata

**Right Panel - Trace Evidence**
- Detailed evidence trace supporting the hypothesis
- Prediction Confidence meter (0-100%)

## Purpose
- Generate data quality hypotheses
- Test semantic relationships
- Identify optimization opportunities
- **Validate against Rules Enforcer**: Support "Rules Recon" by testing scenarios against active business value gates.
- **Feed Decision Cockpit**: Proven hypotheses become automation triggers.

## Workflow Integration

1.  **Context Ingestion**: AI consumes **Knowledge Base Context** (from [AI Posture Center](./AI_POSTURE_CENTER.md)) to understand "normal" vs. "anomalous".
2.  **Hypothesis Generation**: AI suggests a scenario grounded in **Real Telemetry** (e.g., "Pricing impact on Stockouts options, validated by 6mo inventory data").
3.  **Rules Recon Validation**: Test against [Rules Recon](./RULES_STUDIO.md) gates (e.g., "Does this violate the Margin Kill Switch?").
4.  **Automation**: Validated hypotheses flow to [Decision Cockpit](../shepherd/DECISION_COCKPIT.md).

## Data Sources (Ground Truth)

- **Knowledge Base**: Semantic meaning of tables/columns (from Posture Center).
- **Live Telemetry**: Real-time query logs and cost metrics (Input for Evidence Traces).
- **Historical Trends**: 90-day incident history (for pattern matching).

## Internal Functions & Algorithms

### HDBSCAN Clustering
- **`hdbscan.Cluster(points, minPts, minClusterSize)`** - Core clustering algorithm
- **`buildMutualReachabilityGraph(points, k)`** - Construct reachability graph
- **`computeCoreDistances(points, minPts)`** - Distance to k-th neighbor
- **`extractStableClusters(tree, minClusterSize)`** - Extract flat clusters from hierarchy
- **`computeGLOSH(points, clusters)`** - Global-Local Outlier Score from Hierarchies

### Hypothesis Generation
- **`inferPKCandidates(table)`** - Detect columns with PK-like properties
  - Uniqueness check: `COUNT(DISTINCT col) / COUNT(*) > 0.999`
  - Null check: `COUNT(*) - COUNT(col) == 0`
- **`detectFKRelationships(tables)`** - Find foreign key candidates
  - Cardinality analysis: 1:1, 1:N, M:N detection
  - Referential integrity test
- **`findDataAnomalies(column)`** - Outlier detection using Z-score or IQR
- **`suggestIndexes(queryLog)`** - Index recommendations from query patterns

### Semantic Enrichment (Shepherd)
- **`classifyColumnPurpose(columnName, samples)`** - NLP-based purpose detection
  - Examples: email, phone, address, price, quantity
- **`generateHypothesisNarrative(hypothesis, evidence)`** - Natural language explanation
- **`scoreHypothesisConfidence(tests)`** - Aggregate confidence (0-100)

## Key SQL Statements (Generic)

### Relationship Discovery
```sql
-- Foreign key candidate detection
SELECT
    fk_table.table_name as child_table,
    fk_col.column_name as fk_column,
    COUNT(DISTINCT fk_table.{column}) as fk_cardinality,
    pk_table.table_name as parent_table,
    pk_col.column_name as pk_column,
    COUNT(DISTINCT pk_table.{column}) as pk_cardinality
FROM information_schema.columns fk_col
JOIN {schema}.{fk_table} fk_data ON 1=1
LEFT JOIN {schema}.{pk_table} pk_data
    ON fk_data.{column} = pk_data.{column}
GROUP BY fk_table.table_name, fk_col.column_name,
         pk_table.table_name, pk_col.column_name;
```

### Data Distribution Analysis
```sql
-- Value frequency distribution
SELECT
    {column},
    COUNT(*) as frequency,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM {table}), 2) as percentage
FROM {schema}.{table}
GROUP BY {column}
ORDER BY frequency DESC
LIMIT 100;
```

### Outlier Detection (Z-Score Method)
```sql
-- Statistical outliers using Z-score
WITH stats AS (
    SELECT
        AVG({column}) as mean,
        STDDEV({column}) as stddev
    FROM {schema}.{table}
)
SELECT {column},
    ABS(({column} - stats.mean) / stats.stddev) as z_score
FROM {schema}.{table}, stats
WHERE ABS(({column} - stats.mean) / stats.stddev) > 3.0;
```

### Cardinality Analysis
```sql
-- Detect 1:1, 1:N, or M:N relationships
SELECT
    a.{join_column},
    COUNT(DISTINCT a.{id_column}) as table_a_count,
    COUNT(DISTINCT b.{id_column}) as table_b_count,
    CASE
        WHEN MAX(a_cnt) = 1 AND MAX(b_cnt) = 1 THEN '1:1'
        WHEN MAX(a_cnt) = 1 AND MAX(b_cnt) > 1 THEN '1:N'
        WHEN MAX(a_cnt) > 1 AND MAX(b_cnt) = 1 THEN 'N:1'
        ELSE 'M:N'
    END as relationship_type
FROM (
    SELECT {join_column}, COUNT(*) as a_cnt
    FROM {schema}.{table_a}
    GROUP BY {join_column}
) a
JOIN (
    SELECT {join_column}, COUNT(*) as b_cnt
    FROM {schema}.{table_b}
    GROUP BY {join_column}
) b ON a.{join_column} = b.{join_column}
GROUP BY a.{join_column};
```

## Backend Components

- **`herdsvc`** - Semantic analysis engine
- **Shepherd (sprdsvc)** - Hypothesis generation
- **`barnsvc`** - Result storage
- **`cli/security/dns/proxy.go`** - REST API proxy

### REST Endpoints (via proxy.go)
- `/api/herd/hypothesize` - Generate hypotheses
- `/api/herd/test` - Validate hypothesis
- `/api/chat/completions` - Shepherd refinement

## User Interactions

1. **Generate Hypotheses**: Select connection/schema → Click "Generate" → AI analyzes metadata
2. **Test Hypothesis**: Select hypothesis → Click "Test" → View evidence and confidence score
3. **Accept/Reject**: Review evidence → Accept (apply recommendations) or Reject (mark false positive)

## RBAC Permissions

- **Admin**: Full hypothesis generation and testing, can apply recommendations
- **Writer**: Generate and test, cannot modify system hypotheses
- **Reader**: View results only

## Performance Considerations

- **Sampling**: Large tables sampled (default: 10,000 rows) for hypothesis generation
- **Parallel testing**: Up to 5 hypotheses tested concurrently
- **Caching**: Hypothesis results cached for 30 minutes

## Related Pages

- [Recon Center](../fetch/RECON_CENTER.md)
- [AI Posture Center](./AI_POSTURE_CENTER.md)
- [Decision Cockpit](../shepherd/DECISION_COCKPIT.md)
