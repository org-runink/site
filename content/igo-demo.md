---
title: "React IGO Demo"
description: "Intent-Graph Optimization React application demo."
---

Welcome to the Intent-Graph Optimization (IGO) interactive demo. This React application dynamically renders its layout and core components based on the psychological context inferred from your user journey.

{{< igo-demo >}}

### How to Test
The application infers your persona from multiple signals:
- **Finance (CFO)**: Test by visiting [`/igo-demo/?persona=cfo`](/igo-demo/?persona=cfo)
- **Operations (Logistics Director)**: Test by visiting [`/igo-demo/?persona=logistics`](/igo-demo/?persona=logistics)
- **Compliance (Default)**: Test by visiting without parameters, or click [`/igo-demo/`](/igo-demo/)

*Note: In production, this module also checks your referral source (e.g., WSJ vs. SupplyChainDive) and persists the state across your session via `localStorage`.*
