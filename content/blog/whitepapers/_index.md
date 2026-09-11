---
title: "Whitepapers"
# This section lives under content/blog/ because the papers ARE the substantive
# end of the blog and share its category system. The header links this page
# directly and no longer carries a separate "Blog" entry, so this page is now
# the way in to the shorter pieces as well — see `more` below, and the note in
# hugo.toml where that entry used to be.
#
# `type` is what keeps the design. Hugo resolves layouts by TYPE, and the
# section here is now "blog": without this the four papers would render through
# layouts/blog/ and lose the register, the marks and the paper sheet. The
# cascade applies it to every child; the explicit one on this line is for this
# index page itself, which a cascade does not reach.
type: whitepapers
# Hugo's cascade applies to THIS page as well as its descendants, so without
# this override the section index picked up its own category and rendered as a
# fifth card inside /categories/whitepapers/ — titled "Whitepapers", 0 min
# read, linking to the list the reader is already on. An empty list here wins
# over the cascade and keeps the taxonomy to the four actual documents.
categories: []
cascade:
  type: whitepapers
  # Puts the papers in the blog's category system. /blog/ is built entirely
  # from categories — a chip per category, with the top four by count expanded
  # — so without this they would live under /blog/ and appear nowhere on it.
  # This also gives them /categories/whitepapers/ for free.
  categories: ["Whitepapers"]
# Nothing has ever linked to the old top-level path (the section was never
# deployed), but those URLs were quoted in review, so keep them resolving.
#
# ENGLISH ONLY — do not copy this alias into _index.es/fr/pt.md. This site sets
# defaultContentLanguageInSubdir = false, so an alias declared here writes to
# /whitepapers/index.html — and an identical alias in a localised file writes to
# the SAME path rather than a language-scoped one. All four then race, the last
# language built wins, and the redirect silently lands on whichever that was.
# It shipped pointing at the Portuguese index for exactly this reason.
aliases:
  - /whitepapers/
# The header has no "Blog" entry any more, so this is what keeps /blog/ reachable
# from the site chrome. CONTENT.md rule 9: a page with no inbound link is still
# published. Per-language, because rule 12 makes every translation its own page.
more:
  label: "Shorter pieces"
  text: "The papers are the long documents. The shorter pieces stay with the problems behind them — a customs entry held for a missing document, a freight claim still inside its filing window, a return that costs more to handle than the goods."
  link_text: "All articles"
  link_url: "/blog/"
headline: "Papers that open with what can be proven."
# FACE first, and named as the product: it is the flagship, it is `weight: 10`,
# and it is what the list sorts to the top. CORE is named as the platform the
# products run on, not as a third peer product, and PULSE is named as a separate
# product so that nothing in its paper reads as a FACE capability. The previous
# wording ("Runink CORE, FACE and PULSE") put them in one undifferentiated list
# with the platform at the front.
description: "Long-form documents on Runink FACE, on Runink PULSE — a separate product — and on the CORE platform the two of them run on. No case studies, no customer names and no return-on-investment figures — the mechanism instead, and where every claim stands."
deck: |
  Four long-form documents. **Runink FACE** is the product the first of them is
  about. **Runink PULSE** is a different product, for market analysis and
  marketing, and its paper describes its own work rather than FACE's.
  **Runink CORE** is not a product at all: it is the platform both run on, which
  is the honest answer to where your data is processed and who can see it. The
  fourth is a joint architecture paper with Logical Leap's Atlas.

  They carry no case studies, no customer names and no return-on-investment
  figures. Those things are easy to write and impossible to check, and a buyer
  who has read three vendor decks this month has learned to discount them. What
  these papers explain instead is the mechanism: what the software looks at,
  what it produces, who approves it, and where it all runs.

  Where a paper describes something we have built, it says so plainly. Where it
  describes an arrangement with another company's product, it says which half of
  that arrangement runs today. We have not been audited against SOC 2 or ISO
  27001 by anyone, and the papers say that in their own sentences rather than in
  a footnote.
next:
  label: "One next step"
  title: "You have read the mechanism. The next step is one of yours."
  body: "Bring one lane, one claim, or one month of invoices. Half an hour, with whoever owns the problem in the room, and we walk that one example end to end. If the losses you carry are not the shape these papers describe, we will say so."
  cta: "Book a consultation"
  note: "The form opens with the papers already named, so you are not starting by explaining where you came from."
  about: "The whitepapers"

---
