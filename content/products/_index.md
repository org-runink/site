---
# NOT RENDERED. /products/ was an auto-generated section list: 95 words, almost
# all of it navigation chrome, carrying "1 article" and a date of "1 January
# 0001" because a generated section page has no date of its own. It was
# indexable, it had no inbound link in a 433-page build, and it said nothing
# /products/face/ does not say better.
#
# Rather than 404 a URL that may be indexed, `build.render: never` removes the thin
# page and content/products/face.md claims /products/ as an alias, so the URL
# still resolves and now redirects to the product itself. CONTENT.md rule 9:
# nothing publishes by accident, and this page had been publishing by accident
# since the section was created.
#
# If a second product ever gets a page here, this file is where the real index
# goes: delete the _build block and write one.
title: "Products"
build:
  render: never
  list: never
  publishResources: false
---
