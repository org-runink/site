# CLAUDE.md — site (runink.org)

Workspace map and cross-repo rules: `../CLAUDE.md` (the org-runink workspace root). This
file covers this repo only.

## What this is

The public marketing site **runink.org**: Hugo + the vendored `hugo-saasify-theme`,
Tailwind CSS, four languages (en, es, fr, pt). CI builds it and force-pushes the result to
the `gh-pages` branch, which GitHub Pages serves. Readers are prospective buyers; the
repo is **public**. It must never publish an invented figure, a product gap, a private
app endpoint, or anything not backed by a Runink repository (see `CONTENT.md`).

## Place in the ecosystem

- **No code dependencies.** No `go.mod` at the root; the root `.go` files are stdlib-only
  `//go:build ignore` scripts. It imports nothing from core/face/pulse.
- **Content is sourced from** the product repos: claims must be backed by `../face`,
  `../pulse`, `../core`, `../river` (verify against their `origin/main`, not a checkout).
- **Product pages here:** `content/products/{tide,tide-pricing,face,pulse}.md`,
  `content/river.md` (Runink River, layout `product`), `content/pricing*.md`,
  `content/downloads.md`, `content/luna-privacy.md`.
- **Not here:** the Runink River documentation site lives in the river repo
  (`river/website/`, Hugo + Hextra); `content/river.md` does not link to it until river is
  public. The Flutter shared UI is `org-runink/ui`; `packages/runink-ui` here is the
  site's own web token/component package, unrelated.
- **Local-only siblings used by checks:** `../pitch-decks/` (whitepaper print mirrors, not
  a repo) and `../pulse/grpc` (`disclosurecheck`). Neither exists in CI.

## Map

| Path | What |
|---|---|
| `hugo.toml` | site config, menus, languages, params (`pulseAppURL`/`demoAppURL`/`coreAppURL` overridden by env) |
| `content/` | pages; `blog/` (incl. `blog/whitepapers/`), `products/`, `industries/`, `use-cases/`, `library/`, `design/` (token specimen), `tests/` (draft fixtures — must stay `draft: true`) |
| `layouts/` | site overrides of the theme (`_default/product.html`, `app/`, `products/`, `shortcodes/`, `index.llms.txt`, `*.toon.toon`) |
| `themes/hugo-saasify-theme/` | vendored theme (not a submodule); `assets/css/main.css` is the Tailwind input |
| `assets/`, `static/`, `data/` | figures/CSS tokens, static files, generated data (`data/contrast_proof.json`) |
| `packages/runink-ui/` | design-token package with its own checks (`npm run check` there) |
| `scripts/*.mjs` | CI gates (content doctrine, tokens, rendered output, nav, orphans) |
| `scripts/mirror/` | Go module: whitepaper mirror rebuild/audit tools (own `README.md`) |
| `serve.go`, `linkcheck.go`, `readability.go` | local dev server wrapper, link+fragment checker, Flesch/banned-word gate |
| `check-whitepaper-mirrors.sh` | site papers vs `../pitch-decks/` mirrors (local only) |
| `.github/workflows/deploy.yaml` | the only workflow: gates → build → deploy |
| `docs/` | **build output** (gitignored) — except the force-added `docs/audits/`, `docs/release-notes.md`, `docs/curation-report.md` (CORE curator output) |

## Build / test / lint

Prereqs: Node 24, pnpm 9.15.9 (`packageManager`), Hugo **extended**, Go (stdlib only).

```sh
pnpm install --frozen-lockfile          # needed for Tailwind, jest, check-dead-states
pnpm run build                          # Tailwind: theme main.css -> static/css/style.css
HUGO_ENV=production hugo -d ~/.cache/site-build/docs   # CI builds to docs/
go run serve.go --css                   # local dev server (= pnpm run serve); private URLs via gitignored serve.env
```

The CI gates, in order (run from the repo root; `<out>` = the build dir):

```sh
node packages/runink-ui/scripts/check-contrast.mjs
node packages/runink-ui/scripts/check-usage.mjs
node scripts/check-content-doctrine.mjs
node scripts/check-content-template-syntax.mjs
node scripts/gen-contrast-proof.mjs --check
node scripts/check-token-syntax.mjs
node scripts/check-token-channels.mjs
node scripts/check-token-contrast.mjs
node scripts/check-dead-states.mjs      # imports tailwindcss: needs pnpm install
node scripts/check-design-doc.mjs
node scripts/check-content-doctrine.mjs --rendered <out>
node scripts/check-rendered-output.mjs <out>
GOTOOLCHAIN=local GOPROXY=off go run readability.go -min 45 -banned-fatal -exclude /tags/,/categories/,/es/,/fr/,/pt/ <out>
node scripts/check-nav-distinct.mjs <out>
GOTOOLCHAIN=local GOPROXY=off go run linkcheck.go <out>   # --all for body links too
node scripts/check-orphan-pages.mjs <out>
```

Local-only: `./check-whitepaper-mirrors.sh` (after editing `content/blog/whitepapers/`),
`cd ../pulse/grpc && go run ./internal/openbias/cmd/disclosurecheck FILE...` (CONTENT.md
rule 2), `pnpm test` (jest; not run in CI), `go test ./...` in `scripts/mirror`.

Verified here 2026-09-27 (no `node_modules` in the worktree): `go vet` on the three root
`.go` files; the nine zero-dependency node checks above exit 0. **Not verified here:**
`pnpm install`, `pnpm run build`, the Hugo build and every `<out>` check, jest,
`check-dead-states.mjs` (fails with `ERR_MODULE_NOT_FOUND: tailwindcss` without an install).

## Invariants / never do

- **CONTENT.md rules 1–13 are the law for copy** — no invented figures, never state what a
  product lacks, plain language (Flesch ≥ 45), self-hosted assets, one hostname.
- **No private endpoints in the repo** — app URLs come from Actions secrets
  (`PULSE_APP_URL`, `DEMO_APP_URL`, `CORE_APP_URL`) or local `serve.env`.
- **Never commit `disablePostCSS = true`** in `hugo.toml` — CI rejects it; it ships a site
  with no stylesheet.
- **Pagination keys stay under `[pagination]`**, never bare under `[taxonomies]` (they
  become taxonomies and publish `/6/`, `/page/`).
- **Test fixtures under `content/tests/` stay `draft: true`** — CI fails if they publish.
- **Colours are tokens**, never raw hex or `text-white` (`DESIGN.md`, `check-usage`); a
  `var()` in a `style` attribute needs `| safeCSS`.
- **A fix lands in every language** (en/es/fr/pt) in the same change, or the translation is
  withdrawn (rule 12).
- Product names: "Runink TIDE" (formerly CORE) at the first mention on a page, then "TIDE",
  never a bare "Tide"; FORGE is served inside TIDE (no forge domain); "Runink River" in prose;
  River is the developer workstation, the Server ISO is a separate downstream image.
- No Python in this repo.

## How changes ship

Branch → PR against `main`. `deploy.yaml` runs every gate and the full build on the PR.
**Runners (owner decision 2026-09-28, replacing the earlier self-hosted `public-ci` plan):**
this is a PUBLIC repository, so every job runs on GitHub-hosted `ubuntu-latest`. Only the
private Runink repositories use the self-hosted runners; public code never runs on them.
PRs from forks run the same steps (a YAML anchor) in the job `build-fork-pr`, read-only and
never deploying. Keep that split in any new job.
Merge to `main` deploys: `peaceiris/actions-gh-pages` **force-pushes an orphan** `gh-pages`
from `docs/`. Only a push to `main` deploys; PR runs never touch `gh-pages`. Setting the repo
variable `SITE_PAGES_SOURCE=actions` (together with Pages source "GitHub Actions") switches to
`actions/deploy-pages`, which drops GitHub's own hosted `pages build and deployment` run.

## Traps

- **CI pins Hugo 0.147.3**; local is newer (0.166 here). A clean local build is not proof
  the deploy passes — check the PR run.
- **Build to `~/.cache`, never `/tmp`** — `/tmp` is a small tmpfs; a full one shows up as
  "Page crashed"/exit 144, not a disk error.
- **`hugo` exits 0 on junk.** Confirm the page count and look at the page; the rendered
  checks exist because source checks missed things (CONTENT.md rule 13).
- **`ZgotmplZ` in output** = a value Go's escaper refused (usually `var(...)` in a `style`
  attribute without `| safeCSS`). `check-rendered-output` fails on it.
  As of 2026-09-27 `main` is red for exactly this on `/pricing/` (run 36346806271).
- **`enableGitInfo` needs full history** — a shallow clone silently re-dates every page.
- **`docs/` is gitignored but has tracked files** — use `git add -f` only for those; never
  commit a build.
- **`../pitch-decks` and `../pulse` are absent in CI**, so mirror and disclosure checks only
  run when someone runs them.
- `.jules/herald.md` holds older agent learnings (GEO/SEO notes); some advice there (e.g.
  bolding statistics) predates and conflicts with CONTENT.md — CONTENT.md wins.

## Deeper docs

| Doc | Status |
|---|---|
| `CONTENT.md` | current — what a page may say; the end-to-end check list |
| `DESIGN.md` | current — tokens, type, palette, traps (§10); gated by `check-design-doc` |
| `scripts/mirror/README.md` | current — whitepaper mirror tooling |
| `packages/runink-ui/CONTRIBUTING.md` | token package workflow |
| `.design-sync/` | claude.ai/design sync inputs and notes |
| `HANDOFF-product-attribution.md`, `HANDOFF-restyle-decisions.md` | dated handoffs (2026-09); open owner decisions, read before redoing that work |
| `docs/release-notes.md`, `docs/curation-report.md` | generated by the CORE curator; the curation report references a README this repo does not have |
| `themes/hugo-saasify-theme/README.md` | upstream theme docs; site overrides in `layouts/` win |
