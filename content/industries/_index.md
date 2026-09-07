---
date: 2026-09-07T00:00:00Z
title: "Industries"
description: "The five industries Runink is built around — logistics and supply chain, insurance, banking and financial services, telecom, and marketing. Find the one that reads like your week."
# Hugo resolves layouts by TYPE. The section directory is already named
# "industries", so type defaults correctly, but it is set explicitly here and
# cascaded so a later rename of the directory cannot silently drop these pages
# into _default/single.html — which is exactly what happened to
# content/use-cases/, whose `layout: "use_case"` never resolved to
# layouts/use_cases/single.html and left its badge params inert.
type: industries
cascade:
  type: industries
# No aliases anywhere in this section, in any language. An alias declared in a
# localised file writes to the same output path as the English one, the two race,
# and the last language built wins — /whitepapers/ shipped pointing at the
# Portuguese page that way. Nothing has ever linked to another path for this
# section, so there is nothing to keep resolving and no reason to take the risk.
accent: "#ea580c"
headline: "Find your operation, not our product names."
deck: "A logistics director does not go looking for a product name. These are the five industries whose decisions Runink is built around — pick the one that reads like your week, and see in half a minute whether the problems are yours."
card_cta: "See the fit"
next_heading: "Not sure which one is you?"
next_body: "Plenty of operations sit across two of these, or across none of them cleanly. That is a normal answer, and a short conversation sorts it out faster than any page will."
cta_text: "Book a consultation"
---
