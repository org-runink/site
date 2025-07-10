---
title: "Runink Data Integrator"
description: "Simplify your data pipelines with a Go-native orchestration and governance platform featuring robust isolation, resource control, and streamlined execution."
layout: "feature"
badge: "Data Integration"
badgeColor: "#16a34a"
features:
  - title: "Go-Native Orchestration"
    description: "Leverage Go’s efficiency for fast pipeline execution, eliminating complex infrastructure dependencies like Kubernetes."
  - title: "Robust Isolation"
    description: "Ensure secure, isolated pipeline execution using Linux primitives for resource control and per-slice isolation."
  - title: "Centralized Governance"
    description: "Manage metadata, governance, and data lineage with a distributed, Raft-backed metadata store for high consistency."
  - title: "Simplified Execution"
    description: "Easily compile, manage, and execute pipelines using intuitive CLI commands for streamlined development and operations."
demo:
  description: "See how Runink Data Integrator streamlines pipeline orchestration and governance."
  image: "/images/components.png"
---

## Optimized Data Integration & Orchestration

Runink Data Integrator provides a powerful, lightweight alternative to traditional orchestration systems, leveraging Go-native technologies and Linux isolation for enhanced pipeline management and governance.

### System Highlights

#### Core Architecture
- Self-contained, distributed runtime environment
- Go-based scheduling and execution
- Linux-based resource isolation (`cgroups`, `namespaces`, `exec`)

#### Execution Management
- Fast, secure, and isolated pipeline steps (Slices)
- Logical grouping for multi-tenancy (Herds)
- Serverless-style execution

### Developer-Friendly Workflow

#### Efficient Pipeline Management
- Easy-to-use CLI for pipeline setup and execution
- Straightforward compilation of scenarios into executable DAGs
- Automated audit and testing capabilities

#### Governance & Compliance
- Centralized metadata management (Barn)
- Built-in data lineage and contract enforcement
- Strong consistency through Raft consensus

### Seamless Integration

#### Quick Start Commands
```bash
# Initialize pipeline environment
runi herd init my-data-herd

# Compile scenario into DAG
runi compile --scenario scenario.dsl --contract contract.go --out dag.go

# Generate and audit test data
runi synth --scenario scenario.dsl --contract contract.go --golden data.json
runi audit --scenario scenario.dsl --contract contract.go --golden data.json

# Execute pipeline
runi run --dag dag.go
```

Runink Data Integrator makes data pipeline management efficient, secure, and straightforward, allowing you to focus more on insights and less on infrastructure.