---
title: "Whitepapers"
# This section lives under content/blog/ because the papers ARE the substantive
# end of the blog and share its category system. The header links this page
# directly and no longer carries a separate "Blog" entry, so this page is now
# the way in to the shorter pieces as well — see `more` below, and the note in
# hugo.toml where that entry used to be.
#
# `type` is what keeps the design. Hugo resolves layouts by TYPE, and the
# section here is now "blog": without this the papers would render through
# layouts/blog/ and lose the register, the marks and the paper sheet. The
# cascade applies it to every child; the explicit one on this line is for this
# index page itself, which a cascade does not reach.
type: whitepapers
# Hugo's cascade applies to THIS page as well as its descendants, so without
# this override the section index picked up its own category and rendered as a
# fifth card inside /categories/whitepapers/ — titled "Whitepapers", 0 min
# read, linking to the list the reader is already on. An empty list here wins
# over the cascade and keeps the taxonomy to the actual documents.
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
# FACE first: it is `weight: 10`, and it is what the list sorts to the top.
# FACE, PULSE and CORE are named as three separate products, each sold on its
# own (the owner, 26 September 2026), so that nothing in one paper reads as
# another product's capability. CORE has no landing page: its paper IS its
# product home, so this deck is where a reader learns it is a product at all.
# The wording once said CORE was "not a product"; that was wrong.
description: "Long-form documents on Runink FACE, Runink PULSE and Runink CORE, three separate products. No case studies, no customer names and no return-on-investment figures — the mechanism instead, and where every claim stands."
deck: |
  Long-form documents, each about one Runink product or about an arrangement
  with a partner. The ones at the top are about **Runink FACE**. **Runink PULSE** is a different product, for market analysis and
  marketing, and its paper describes its own work rather than FACE's.
  **Runink CORE** is a product in its own right, sold separately. It is the
  operations layer you run on your own hardware to keep your Runink
  applications and your own data in order, and the honest answer to where your
  data is processed and who can see it. Its paper is where this site describes
  it. The joint papers with Logical Leap cover Atlas's oversight screens, which
  run inside CORE.

  They carry no case studies, no customer names and no return-on-investment
  figures. Those things are easy to write and impossible to check, and a buyer
  who has read three vendor decks this month has learned to discount them. What
  these papers explain instead is the mechanism: what the software looks at,
  what it produces, who approves it, and where it all runs.

  Where a paper describes something we have built, it says so plainly. Where it
  describes an arrangement with another company's product, it says which part of
  that arrangement is ours. We have not been audited against SOC 2 or ISO
  27001 by anyone, and the papers say that in their own sentences rather than in
  a footnote.
next:
  label: "One next step"
  title: "You have read the mechanism. The next step is one of yours."
  body: "Bring one lane, one claim, or one month of invoices. Half an hour, with whoever owns the problem in the room, and we walk that one example end to end. If the losses you carry are not the shape these papers describe, we will say so."
  cta: "Book a consultation"
  note: "The form opens with the papers already named, so you are not starting by explaining where you came from."
  about: "The whitepapers"

# The same ask, worded for ONE paper rather than for the shelf, and deliberately
# short. Every paper already closes with its own chapter making the case for a
# first step — "bring one export, then connect one system, then decide" — so a
# band repeating that argument under it would be the same content at a lower
# resolution, which is how a long document turns into a padded one. This is the
# door, not a second argument: a line and a button. It carries no `body`, and
# layouts/whitepapers/single.html renders that field only when it is there.
next_paper:
  label: "One next step"
  title: "Half an hour, and we read one of your own exports with you."
  cta: "Book a consultation"

---
