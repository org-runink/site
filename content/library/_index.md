---
title: "Library"
# ONE ENTRY IN THE HEADER, TWO SECTIONS BEHIND IT.
#
# The header used to carry "Whitepapers" and "Use cases" as separate entries and
# they are two halves of one answer to the same question — what is this for, and
# how far can I read into it. This page is the single place that question is
# answered, and the header links here instead of into either half.
#
# NOTHING MOVED. The papers stay at /blog/whitepapers/ and the scenarios stay at
# /use-cases/, with the URLs, layouts and inbound links they already have. The
# alternative was folding one section into the other, which would have changed 52
# URLs — and 36 of those are localized paths that cannot carry a safe alias,
# because this site sets defaultContentLanguageInSubdir = false and four
# same-path aliases race. That failure has already shipped once here: the
# /whitepapers/ alias silently pointed at the Portuguese index. So this page is
# additive and the ranking of both sections is untouched.
#
# IT IS ALSO WHAT KEEPS /blog/ REACHABLE. There is no footer on this site
# (params.footer.enable = false), so the header is the only chrome, and /blog/
# has no entry in it. Until now the one chrome route was
# nav -> /blog/whitepapers/ -> the "Shorter pieces" band. With the header
# pointing here instead, that chain gains a hop, so this page links /blog/
# directly rather than relying on it. CONTENT.md rule 9: a page with no inbound
# link is still published. linkcheck.go cannot see this class of breakage.
type: library
layout: list
description: "Four long documents on what Runink FACE, PULSE and CORE do, twelve worked scenarios, and shorter notes on the operational problems behind them."
eyebrow: "For operations, supply chain, finance and compliance"
headline: "Everything we have written down, in the order to read it."
deck: "Start with a scenario if you want to know whether this fits your week, or with a paper if you want the mechanism in full. The scenarios are short and name the records involved; the papers are long and say where every claim stands."
papers_label: "The long documents"
cases_label: "Worked scenarios"
cases_note: "Each one names the records it reads, what it drafts, and who approves it. All twelve are Runink FACE."
more_label: "Shorter notes"
more_text: "Several dozen pieces on the operational problems behind the documents above — a customs entry held for a missing document, a freight claim still inside its filing window, a return that costs more to handle than the goods."
more_link_text: "All articles"
more_link_url: "/blog/"
next:
  label: "One next step"
  title: "Easier to answer against one of your own records than to read another page."
  body: "Bring one lane, one claim, or one month of invoices. Half an hour, with whoever owns the problem in the room, and we walk that one example end to end. If it is not the shape this addresses, we will say so."
  cta: "Book a consultation"
  note: "The form opens with the library already named, so you are not starting by explaining where you came from."
  about: "The library"

---
