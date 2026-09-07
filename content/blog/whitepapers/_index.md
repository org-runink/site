---
title: "Whitepapers"
# This section lives under content/blog/ so it sits inside the Blog, which is
# what the header nav actually links to — a top-level /whitepapers/ was
# reachable only by direct link. The blog's own subtitle in hugo.toml already
# says "Explore whitepapers…", so this is where a reader is told to look.
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
aliases:
  - /whitepapers/
headline: "Papers that open with what can be proven."
description: "Long-form documents on Runink CORE, FACE and PULSE. No case studies, no customer names and no return-on-investment figures — the mechanism instead, and where every claim stands."
deck: |
  Four long-form documents on the Runink platform and the products built on it.

  They carry no case studies, no customer names and no return-on-investment
  figures. Those things are easy to write and impossible to check, and a buyer
  who has read three vendor decks this month has learned to discount them. What
  these papers explain instead is the mechanism: what the software looks at,
  what it produces, who approves it, and where it all runs.

  **Each paper marks its own claims wherever the footing changes** — where
  something runs, where a passage is an illustration rather than a record, and
  where the paper is describing architecture. The marks are the papers' own
  words, and they are used only where the footing genuinely differs.
---
