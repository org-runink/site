# Fonts bundled with this site

These faces are self-hosted deliberately. Runink argues that a company's material
should be processed on hardware it controls; a request to a third-party font host
while serving that argument would contradict it. Nothing that uses these faces is
fetched from another origin.

The Fira superfamily is the site's typeface — see `DESIGN.md` §3. Sans, Sans
Condensed and Code are drawn to one skeleton, which is what lets one identity serve
a marketing page, a 12,000-word paper and a data table without a second brand.

## Fira Sans / Fira Sans Condensed

Copyright (c) 2014, Mozilla Foundation and Telefonica S.A.
Designed by Erik Spiekermann and Ralph du Carrois.
Licensed under the SIL Open Font License, Version 1.1 — https://scripts.sil.org/OFL

Files:
`FiraSans-Book.woff2`, `FiraSans-BookItalic.woff2`, `FiraSans-Medium.woff2`,
`FiraSans-SemiBold.woff2`, `FiraSansCondensed-SemiBold.woff2`,
`FiraSansCondensed-Heavy.woff2`

## Fira Code

Copyright (c) 2014, The Fira Code Project Authors.
Licensed under the SIL Open Font License, Version 1.1 — https://scripts.sil.org/OFL

Files: `FiraCode-Regular.woff2`, `FiraCode-Medium.woff2`

## Licence terms relied on

The OFL permits redistribution, modification (subsetting counts) and embedding in a
web page. It requires the copyright notice and licence to travel with the files —
this file — and forbids selling the fonts on their own. Neither restriction is
engaged by serving them as part of this site.

## Provenance

Subset and converted to WOFF2 from the upstream TTFs as packaged in
`ttf-fira-sans 1:4.301-3` and `ttf-fira-code 6.2-4`. Upstream licence texts ship with
those packages at `/usr/share/licenses/ttf-fira-sans/OFL.txt` and
`/usr/share/licenses/ttf-fira-code/LICENSE`.

Subset range: Latin-1, punctuation, currency, super/subscripts, arrows and geometric
shapes — `U+0020-007E, U+00A0-00FF, U+0131, U+0152-0153, U+0178, U+02BB-02BC,
U+02C6, U+02DA, U+02DC, U+2007-2008, U+200B-2016, U+2018-201A, U+201C-201E,
U+2020-2022, U+2026, U+2030, U+2039-203A, U+203F, U+2044, U+204A, U+2070,
U+2074-208E, U+20A1, U+20A6, U+20A9-20AC, U+20AF, U+20B4, U+20B9-20BA, U+20BD,
U+2122, U+2190-2193, U+2212, U+2215, U+25A0-25A1, U+25AF, U+25B2, U+25B4, U+25B6,
U+25B8, U+25BA, U+25BC, U+25BE, U+25C0, U+25C2, U+25C4, U+25CA, U+25CF`.

This covers the site's English, Spanish, French and Portuguese content in full.
`U+0178` (Ÿ) and `U+25A0-25A1` (■ □) were added to the range the whitepaper faces
were originally cut with: the first for French proper names, the second so a standing
mark is expressible in plain text.

Eight faces, 222 KB total.

## Adding a face

A `@font-face` rule in `assets/css/tokens.css` does not cause Hugo to publish the
file — see the trap in `DESIGN.md` §10. Every face must also be listed in
`layouts/partials/rk-fonts.html`, which fails the build if a declared file is
missing. Then check `public/fonts/`.
