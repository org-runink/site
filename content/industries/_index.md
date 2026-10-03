---
date: 2026-09-07T00:00:00Z
title: "Industries"
# Search and share-card text (CONTENT.md rules 1 and 3 apply): the <title> is
# seo_title verbatim, at most 60 characters; seo_description is the meta and card
# description, at most 155. Visible copy on the page is unchanged by these two.
seo_title: "Runink by industry: logistics, insurance, banking, telecom"
seo_description: "Five industries, three Runink products. Find the page that reads like your week, see which product fits it, and the measures to track your own figures."
description: "Five industries, three products. Runink FACE covers logistics and supply chain and insurance; Runink PULSE covers marketing; banking and telecom describe the Runink TIDE and Atlas oversight arrangement. Find the one that reads like your week, and see which product it is."
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
headline: "Find your operation, not our product names."
# The deck now carries the attribution, because the layout has no slot for it
# and the page previously had none at all: it said "the five industries Runink
# is built around" and left a reader unable to tell that four of these pages
# describe three different things. Two of them are not even the same product,
# and one of them — banking and telecom — is Runink TIDE, a separate product,
# working with a partner's product. Naming that here is the point of
# this section, not a footnote to it.
deck: "A logistics director does not go looking for a product name. So pick the one that reads like your week first — but each card now opens with the product it is, because these five are not one product. Two of them are Runink FACE, one is Runink PULSE, and two describe Runink TIDE, a separate product, working with a partner's assessment product."
card_cta: "See the fit"
next_heading: "Not sure which one is you?"
next_body: "Plenty of operations sit across two of these, or across none of them cleanly. That is a normal answer, and a short conversation sorts it out faster than any page will. Worth knowing before you start: Runink FACE is the product this company is built around and the one with the most behind it. Runink PULSE and Runink TIDE are separate products. The banking and telecom pages describe Runink TIDE working with a partner's assessment product, and those two pages say so at the top."
cta_text: "Book a consultation"
---
