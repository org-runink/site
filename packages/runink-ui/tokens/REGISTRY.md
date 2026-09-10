# Runink web tokens

_Generated from `tokens/registry.json`. Do not edit._

Palette source: FACE `fef45f6ccdc1` — `flutter/lib/core/theme/runink_theme.dart`.

`tier` is the WCAG floor the token clears, and it decides which utilities exist:
a **fill** has no `text-*` utility at all, a **mark** clears 3:1 but not 4.5:1,
an **ink** clears 4.5:1 as text on all four surfaces of its ramp.

| utility | FACE token | tier | console | sheet |
|---|---|---|---|---|
| `canvas` | `backgroundDark` | fill | `#FF1A1614` | `#FFFBF7F1` |
| `surface` | `surfaceDark` | fill | `#FF241F1C` | `#FFFFFDFA` |
| `surface-raised` | `surfaceElevated` | fill | `#FF2A2320` | `#FFF6EFE4` |
| `surface-well` | `surfaceHighlight` | fill | `#FF352E29` | `#FFEDE2D3` |
| `hairline` | `surfaceHighlight` | mark | `#FF352E29` | `#FFEDE2D3` |
| `edge` | `ink @ 0.40 console / 0.55 sheet` | mark | `—` | `—` |
| `primary` | `textPrimary` | ink | `#FFF2EBE3` | `#FF2E2620` |
| `secondary` | `textSecondary` | ink | `#99F2EBE3` | `#B32E2620` |
| `ink-accent` | `technicalOrangeLight` | ink | `#FFE89B75` | `#FF8B4024` |
| `ink-success` | `oliveInk` | ink | `#FF8FA85C` | `#FF4A5D23` |
| `ink-provenance` | `wineProvenanceLight` | ink | `#FFD4869A` | `#FF802E42` |
| `ink-ice` | `markIce` | ink | `#FF1CC2E0` | `#FF054B58` |
| `ink-violet` | `markViolet` | ink | `#FFB4A1FC` | `#FF5A4396` |
| `fill-accent` | `technicalOrange` | mark | `#FFD9764E` | `#FFC4693B` |
| `fill-accent-deep` | `technicalOrangeMuted` | fill | `#FF9E4A2A` | `#FF9E4A2A` |
| `accent-lift` | `brandGradientTop` | fill | `#FFE89B75` | `#FFD9764E` |
| `fill-success` | `oliveSuccess` | fill | `#FF4A5D23` | `#FF4A5D23` |
| `fill-success-glow` | `oliveGlow` | fill | `#FF607338` | `#FF56692B` |
| `fill-provenance` | `wineProvenance` | fill | `#FF7A293E` | `#FF7A293E` |
| `on-accent` | `onAccent` | ink | `#FF1A1614` | `#FF1A1614` |
| `on-success` | `RuninkColors.onOlive` | ink | `#FFF2EBE3` | `#FFF2EBE3` |
| `on-provenance` | `ColorScheme.onSecondary` | ink | `#FFF2EBE3` | `#FFF2EBE3` |
| `fill-severity` | `severityWash` | fill | `#FF6B5848` | `#FF9E7E60` |
| `ink-severity-critical` | `severityCritical` | ink | `#FFF37988` | `#FF530017` |
| `ink-severity-high` | `severityHigh` | ink | `#FFFF8D65` | `#FF621D00` |
| `ink-severity-medium` | `severityMedium` | ink | `#FFFCA942` | `#FF5F3900` |
| `ink-severity-low` | `severityLow` | ink | `#FFD9CD48` | `#FF565000` |
| `ink-severity-ok` | `severityOk` | ink | `#FFB5EA7C` | `#FF416500` |

## Rules that are not negotiable

- **Fills never carry text.** `fill-accent-deep`, `fill-success`, `fill-success-glow`,
  `fill-provenance` and `fill-severity` have no `text-*` utility by construction.
- **`ink-success` is the only olive that may carry text.**
- **`on-accent` inks `fill-accent` only** — it is not valid on `ink-accent`.
- **Severity is its own family.** Do not colour a status with accent/olive/wine.
  All five bands share one wash, and because adjacent bands cannot exceed ~1.17:1,
  every severity mark also carries a glyph or the word.
- **`hairline` is invisible on `surface-well`** (same value). Use `edge` there.
