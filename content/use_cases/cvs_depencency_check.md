---
title: "DevSecOps Use Case: Automated CVS Dependency Monitoring"
slug: "use-cases/cvs-dependency-check"
description: "Runink detects, scores, and routes vulnerability alerts in your package and infrastructure dependencies—triggered by CVE change events."
layout: "use-case"
industries: ["DevSecOps", "SaaS", "Compliance"]
tags: ["Dependency Monitoring", "CVEs", "SBOM", "Security Workflow", "CICD Trigger Routing"]
---

## Know When a Package Becomes a Liability

Modern teams manage hundreds of dependencies—across Python, Go, NPM, Terraform, and Docker. But when a new CVE is published, who’s notified? What builds are blocked? What reports are filed?

Runink helps engineering and security teams **automate trigger routing** when a dependency risk appears—without manual scans or unreliable spreadsheets.

---

## 📦 Sample Use Case: CVE on Production Image Detected

- Monitor SBOM or lockfile for every package or version  
- Auto-detect CVE updates via vulnerability feed (e.g. OSV, GHSA, CVE.org)  
- Trigger alert and route based on severity, env, or team  
- Audit all decisions and blocked deploys  

### Example: Critical CVE in `openssl` v3

```yaml
trigger:
  when: cve.score >= 8 AND cve.package = "openssl" AND image.environment = "prod"
  then:
    - action: notify
      who: "security@org.com"
    - action: block_deploy
      policy: "require patched version"
    - action: log
      entry: "blocked deploy due to CVE"
````

---

## 🔍 What Runink Automates

* Match CVE with your `go.mod`, `package.json`, `requirements.txt`, etc.
* Score and route alerts based on version, team, environment
* Block builds or enforce workflow policies in GitHub Actions
* Maintain a full audit trail of dependency decisions

---

## ⚙️ Dev & Security Teams Use Runink To:

| Goal                     | Runink Delivers                        |
| ------------------------ | -------------------------------------- |
| Alert on dependency risk | Trigger alert when CVE is published    |
| Route to right owner     | Use `maintainer_email` or `team_label` |
| Stop unsafe deploys      | Trigger blocks via GitHub workflow     |
| Prove SBOM audit trail   | Export history per repo or artifact    |

---

🔐 [Explore security triggers with Runink](/products/analytics_companion)
📬 [Connect with our platform engineering team](/contact)