# Fonts shipped with @runink/ui

## Figtree

- `Figtree-var.woff2` — upright, variable, `wght` 300–900
- `Figtree-Italic-var.woff2` — italic, variable, `wght` 300–900

Copyright 2022 The Figtree Project Authors — https://github.com/erikdkennedy/figtree

Licensed under the **SIL Open Font Licence, Version 1.1**.
Full text: https://openfontlicense.org/

### Provenance

The **upright** is converted from `face/flutter/fonts/Figtree.ttf`, the same file the
FACE Flutter app bundles, so the web and the product render the identical face.

The **italic** is the upstream Google Fonts OFL release
(`google/fonts` → `ofl/figtree/Figtree-Italic[wght].ttf`). FACE's bundled upright has
no italic axis and `italicAngle 0`, so both Flutter and the browser were synthesising
an oblique. The real italic should be back-ported into `face/flutter/fonts/` and
declared in `pubspec.yaml` so the two surfaces stay one decision.

### Verified

- Variable axis `wght` 300–900 on both faces, default instance 300 — hence the
  `font-weight: 300 900` range in `src/fonts.css`. Without it every weight renders Light.
- Italic reports `italicAngle -9.5` (a real italic, not a synthesised slant).
- 391 codepoints; covers `en`, `fr`, `es`, `pt` — the four locales the site ships —
  including every diacritic those locales use.
