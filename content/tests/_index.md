---
draft: true
title: "Shortcode fixtures"
# NOT PUBLISHED, ON PURPOSE.
#
# These are render fixtures for layouts/shortcodes/case-study-card.html and
# test-url.html: each one feeds the shortcode a hostile or borderline href and
# lets you read back what Hugo actually emitted. They used to live at the top of
# content/ as /test/ … /test7/, which meant they built with `index, follow`,
# entered the sitemap, and carried "#ff0000"/"Tag"/"Title"/"Description"
# placeholder copy onto a site shown to buyers. /test7/ published a working CTA
# pointing at //evil.com.
#
# `draft: true` on this index AND on every file in here is what keeps them off
# the site: the deploy workflow runs plain `hugo -d docs`, with no -D and no
# buildDrafts, so drafts are never built in CI. Set on each file individually
# rather than via `cascade` so that the reason is visible in the file you are
# reading, and so removing this index cannot silently publish the whole set.
#
# To actually run them: `pnpm start` (already `hugo server -D`), or
# `hugo -D` for a one-shot build, then read the CTA href on each page:
#
#   hugo -D --minify && grep -o 'href=[^ ]* class="inline-block px-6' public/tests/*/index.html
#
# What each fixture asserts, given the current shortcode:
#   test        javascript:alert(1)                     -> "#"
#   test2       https://example.com/javascript:alert(1) -> passes through (a
#                                                          normal https URL;
#                                                          the scheme is https)
#   test3       https://example.com                     -> passes through
#   test4       "  javascript:alert(1)" (leading space) -> "#"
#   test5       "\tjavascript:alert(1)"                 -> "#"   (see below)
#   test6       jAvascript:alert(1)     (mixed case)    -> "#"
#   test7       //evil.com              (protocol-rel.) -> "#"
#   test8       four LEGITIMATE hrefs, all must survive:
#                 /pricing/           -> /pricing/
#                 blog/whitepapers/   -> resolved relative to the page
#                 #anchor             -> #anchor
#                 mailto:…            -> passes through
#   test_parse  urls.Parse scheme readout for three inputs
#
# test5 is not what its name suggests. Hugo does not expand Go escape sequences
# inside a quoted shortcode argument, so this fixture does not send a TAB — it
# sends a literal backslash followed by "t". Left as-is, because it turned out
# to be the one input the scheme check alone did not catch; the shortcode now
# rejects backslashes and control characters for exactly this reason.
---
