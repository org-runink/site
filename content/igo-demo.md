---
title: "React IGO Demo"
description: "Internal demo of the IGO React component."
# WITHDRAWN FROM PUBLICATION, and it should not come back without a decision.
#
# CONTENT.md rule 10 — never publish the mechanics of how the site treats the
# reader — names this page by name, and it was live and indexed. Its body told
# visitors, in prose, that it "infers your persona" from their user journey, that
# "in production, this module also checks your referral source (e.g., WSJ vs.
# SupplyChainDive)" and that it "persists the state across your session via
# localStorage". Whether or not the code does any of that, saying it is a trust
# cost with no offsetting benefit, and it is the first thing a security-minded
# buyer would quote back at a company whose whole argument is that your data
# should stay where you put it.
#
# Rule 9 is the other half: anything under content/ renders, enters sitemap.xml
# and is crawled, whether or not a human can find it — and nothing linked here.
# The two questions rule 9 asks are what links to it and what is it for. The
# answers were "nothing" and "our own QA". So it is a draft, robots.txt
# disallows /igo-demo/, and the robots key below is the third layer in case
# somebody undrafts it without reading this.
#
# If the demo is wanted for internal use, it belongs in layouts/ as a fixture,
# not in content/.
draft: true
robots: "noindex, nofollow"
---

An internal demo of the IGO React component.

{{< igo-demo >}}

### Testing

The component accepts a persona directly, which is how to exercise each branch:

- Finance: [`/igo-demo/?persona=cfo`](/igo-demo/?persona=cfo)
- Operations: [`/igo-demo/?persona=logistics`](/igo-demo/?persona=logistics)
- Default: [`/igo-demo/`](/igo-demo/)
