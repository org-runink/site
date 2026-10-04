# Share cards

The 1200x675 JPEG share cards (`og:image`) a page shows when it is shared or surfaced
in Google Discover. `card.html` is the template; `cards.json` lists each card's title,
subtitle, headline lines and output file.

Regenerate with `node scripts/og-cards/render.mjs [id ...]` (needs `google-chrome-stable`
or `$CHROME`, and ImageMagick's `magick`), then look at every card it wrote before
committing. Headlines are a page's own hero copy, under CONTENT.md like any body copy.
A card with `"markImage": true` shows its `mark` in its own colours (the River roundel)
instead of as a one-colour mask.
