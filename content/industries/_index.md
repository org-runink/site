---
date: 2026-09-07T00:00:00Z
title: "Industries"
# Search and share-card text (CONTENT.md rules 1 and 3 apply): the <title> is
# seo_title verbatim, at most 60 characters; seo_description is the meta and card
# description, at most 155. Visible copy on the page is unchanged by these two.
seo_title: "Runink by industry: logistics, insurance, marketing"
seo_description: "Three industries, two Runink products. Find the page that reads like your week, see which product fits it, and the measures to track your own figures."
# Share card (og:image), drawn by scripts/og-cards/render.mjs from this page's own
# `headline` below.
image: "/images/og/industries-og.jpg"
description: "Three industries, two products. Runink FACE covers logistics and supply chain and insurance; Runink PULSE covers marketing. Find the one that reads like your week, and see which product it is."
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
deck: "A logistics director does not go looking for a product name. So pick the one that reads like your week first — but each card now opens with the product it is, because these three are not one product. Two of them are Runink FACE and one is Runink PULSE."
card_cta: "See the fit"
next_heading: "Not sure which one is you?"
next_body: "Plenty of operations sit across two of these, or across none of them cleanly. That is a normal answer, and a short conversation sorts it out faster than any page will. Worth knowing before you start: Runink FACE is the product this company is built around and the one with the most behind it. Runink PULSE is a separate product."
cta_text: "Book a consultation"
---
