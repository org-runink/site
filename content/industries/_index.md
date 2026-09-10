---
date: 2026-09-07T00:00:00Z
title: "Industries"
description: "Five industries, three products. Runink FACE covers logistics and supply chain and insurance; Runink PULSE covers marketing; banking and telecom describe the Runink CORE and Atlas oversight arrangement. Find the one that reads like your week, and see which product it is."
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
# The deck now carries the attribution, because the layout has no slot for it
# and the page previously had none at all: it said "the five industries Runink
# is built around" and left a reader unable to tell that four of these pages
# describe three different things. Two of them are not even the same product,
# and one of them — banking and telecom — is a platform-plus-partner
# arrangement rather than a product you buy. Naming that here is the point of
# this section, not a footnote to it.
deck: "A logistics director does not go looking for a product name. So pick the one that reads like your week first — but each card now opens with the product it is, because these five are not one product. Two of them are Runink FACE, one is Runink PULSE, and two describe an arrangement between our platform and a partner's rather than something you can buy from us."
card_cta: "See the fit"
next_heading: "Not sure which one is you?"
next_body: "Plenty of operations sit across two of these, or across none of them cleanly. That is a normal answer, and a short conversation sorts it out faster than any page will. Worth knowing before you start: Runink FACE is the product this company is built around and the one with the most behind it. Runink PULSE is a separate product. The banking and telecom pages describe an arrangement between the Runink CORE platform and a partner's assessment product rather than something you can buy from us today, and those two pages say so at the top."
cta_text: "Book a consultation"
---
