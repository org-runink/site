package mirror

// Rebuild the runink-core PRINT MIRROR from the runink-core SITE SOURCE.
// Ported from scripts/mirror/rebuild-runink-core.py.
//
// The mirror is the site body with print furniture wrapped round it. This
// rebuilds it from scratch rather than patching, which is the only way stale
// prose struck from the site actually leaves the handout.
//
// Furniture convention found in pitch-decks/runink-core-whitepaper.md
// (verified, not assumed):
//
//   - a cover block: everything before the first "## " chapter heading
//   - chapter headings are PLAIN "## Title", identical to the site source
//     (no "## Page N — Title" as in the FACE mirror)
//   - NO <div style="page-break"> divs (the FACE mirror has 28; this one has 0)
//   - a page footer after every chapter:   *Runink CORE — page N of T*
//     followed by a "---" rule, then the next chapter
//   - a closing colophon before the final footer
//
// Page numbers come from the site front matter `register:`, which is the
// register the site prints and the numbers the body's own cross-references
// ("published on page 17") point at. The old mirror numbered to 22 because it
// carried a chapter ("What a working day looks like") that the site no longer
// has; the register is 21 pages, so the rebuilt mirror is 21.
//
// # Why this is not one parameterised rebuilder shared with the other three
//
// Because almost nothing above is shared. CORE takes its cover from the first
// "## " in the old mirror; FACE takes it from the first page-break div, PULSE
// from a literal "*Page 1 — Cover*" marker, ATLAS from a fixed sixteen-line
// slice. CORE finds its colophon by scanning backwards for the last non-footer
// paragraph; ATLAS reads the third line from the end; FACE keeps a whole
// "### Contact" block; PULSE has none. CORE collapses runs of blank lines at
// the end and PULSE writes no trailing newline at all. Those are four
// different algorithms wearing the same job title, and a single function with
// a paper-shaped config struct would have had a branch at every one of them.

import (
	"fmt"
	"io"
	"regexp"
	"strconv"
	"strings"
)

const coreFooterFmt = "*Runink CORE — page %d of %d*"

var (
	coreFooterRe   = regexp.MustCompile(`\A\*Runink CORE — page \d+ of \d+\*\z`)
	coreRuleRe     = regexp.MustCompile(`\A-{3,}\z`)
	coreRegisterRe = regexp.MustCompile(`(?m)^register:\n((?:  - .*\n)+)`)
	coreRegPageRe  = regexp.MustCompile(`page:\s*(\d+)`)
	coreRegEndRe   = regexp.MustCompile(`page_end:\s*(\d+)`)
	coreRegTitleRe = regexp.MustCompile(`title:\s*"([^"]*)"`)
	coreChapterRe  = regexp.MustCompile(`(?m)^(## .+)$`)
	coreFirstH2Re  = regexp.MustCompile(`(?m)^## `)
	coreCoverPg1Re = regexp.MustCompile(`(?m)^\*Runink CORE — page 1 of \d+\*$`)
	coreBlankRunRe = regexp.MustCompile(`\n{3,}`)
)

// RegEntry is one `register:` row: the page it starts on, the page it ends on
// (equal to page when there is no page_end) and its title.
type RegEntry struct {
	Page  int
	Last  int
	Title string
}

// Chapter is a "## " heading and the text under it.
type Chapter struct {
	Heading string // the full "## Title" line, or just the title — see each caller
	Text    string
}

// coreParseRegister reads the `register:` list of {page, title} /
// {page, page_end, title}.
//
// Note this is NOT the same parser the other three use. It finds the register
// block as a whole and then picks each field out of a line with three
// independent searches, so it accepts any field order and any spacing. FACE
// and PULSE instead demand the whole line match one strict
// "- { page: N, page_end: M, title: "..." }" shape and silently skip a line
// that does not; ATLAS demands the same shape but STOPS at the first line that
// does not match. Those three behaviours differ on malformed input, which is
// exactly when it matters, so they are not merged.
func coreParseRegister(front string) ([]RegEntry, error) {
	block := coreRegisterRe.FindStringSubmatch(front)
	if block == nil {
		return nil, fmt.Errorf("site front matter has no register:")
	}
	var entries []RegEntry
	for _, line := range strings.Split(strings.TrimSuffix(block[1], "\n"), "\n") {
		page := coreRegPageRe.FindStringSubmatch(line)
		end := coreRegEndRe.FindStringSubmatch(line)
		title := coreRegTitleRe.FindStringSubmatch(line)
		if page == nil || title == nil {
			return nil, fmt.Errorf("unparsable register line: %s", line)
		}
		p, _ := strconv.Atoi(page[1])
		last := p
		if end != nil {
			last, _ = strconv.Atoi(end[1])
		}
		entries = append(entries, RegEntry{Page: p, Last: last, Title: title[1]})
	}
	return entries, nil
}

// coreSplitChapters splits a body into [(heading, text_after_heading), ...] on
// "## " lines.
func coreSplitChapters(body string) ([]Chapter, error) {
	parts := SplitCaptured(coreChapterRe, body)
	if strings.TrimSpace(parts[0]) != "" {
		return nil, fmt.Errorf("site body has prose before its first chapter heading")
	}
	var out []Chapter
	for i := 1; i < len(parts); i += 2 {
		out = append(out, Chapter{
			Heading: strings.TrimSpace(parts[i]),
			Text:    strings.Trim(parts[i+1], "\n"),
		})
	}
	return out, nil
}

// CoreStats is what the script reports after writing.
type CoreStats struct {
	Lines    int // len(new.splitlines())
	Chapters int
	Pages    int
}

// BuildCore assembles the new mirror from the site source and the existing
// mirror (which supplies the cover and the colophon, the two pieces of
// bespoke print furniture with no counterpart in the site source).
//
// It is a pure function of its two inputs so the acceptance diff can run it
// without touching a file.
func BuildCore(site, old string) (string, CoreStats, error) {
	var st CoreStats
	front, body, ok := SplitFrontMatter(site)
	if !ok {
		return "", st, fmt.Errorf("site source has no front matter")
	}
	register, err := coreParseRegister(front)
	if err != nil {
		return "", st, err
	}
	chapters, err := coreSplitChapters(body)
	if err != nil {
		return "", st, err
	}
	cover, colophon, total, err := coreFurniture(old, register, chapters)
	if err != nil {
		return "", st, err
	}

	// ---- rewrite the cover's own page-1 footer to the new page total.
	cover = coreCoverPg1Re.ReplaceAllLiteralString(cover, fmt.Sprintf(coreFooterFmt, 1, total))

	out := []string{cover, ""}
	for i, ch := range chapters {
		reg := register[i]
		out = append(out, ch.Heading, "", ch.Text, "")
		if i == len(chapters)-1 {
			// last chapter: rule, colophon, final footer, no trailing rule.
			out = append(out, "---", "", colophon, "", fmt.Sprintf(coreFooterFmt, reg.Last, total))
		} else {
			out = append(out, fmt.Sprintf(coreFooterFmt, reg.Last, total), "", "---", "")
		}
	}

	newText := strings.TrimRight(strings.Join(out, "\n"), "\n") + "\n"
	newText = coreBlankRunRe.ReplaceAllLiteralString(newText, "\n\n")
	// newText always ends in exactly one "\n", so splitlines() counts the same
	// as the newlines do.
	st = CoreStats{Lines: strings.Count(newText, "\n"), Chapters: len(chapters), Pages: total}
	return newText, st, nil
}

// coreFurniture pulls the cover and colophon out of the old mirror and checks
// the register against the body. Split out so BuildCore and the --dry-run
// summary agree by construction.
func coreFurniture(old string, register []RegEntry, chapters []Chapter) (cover, colophon string, total int, err error) {
	// ---- the cover block: everything before the mirror's first "## " heading.
	loc := coreFirstH2Re.FindStringIndex(old)
	if loc == nil {
		return "", "", 0, fmt.Errorf(`mirror has no "## " chapter heading; refusing to guess a cover`)
	}
	cover = strings.TrimRight(old[:loc[0]], "\n")

	// ---- the closing colophon: the last non-footer paragraph of the old mirror.
	tail := Paragraphs(old)
	found := false
	for i := len(tail) - 1; i >= 0; i-- {
		p := tail[i]
		if !coreFooterRe.MatchString(p) && !coreRuleRe.MatchString(p) {
			colophon, found = p, true
			break
		}
	}
	if !found || strings.Contains(colophon, "\n") || !strings.HasPrefix(colophon, "*") {
		return "", "", 0, fmt.Errorf("could not identify the closing colophon in the old mirror")
	}

	// ---- sanity: the register must describe exactly the chapters in the body.
	if len(register) != len(chapters) {
		return "", "", 0, fmt.Errorf("register has %d entries but the body has %d chapters",
			len(register), len(chapters))
	}
	for i, reg := range register {
		if Squash(reg.Title) != Squash(chapters[i].Heading) {
			return "", "", 0, fmt.Errorf("register/body mismatch: %s vs %s",
				PyRepr(reg.Title), PyRepr(chapters[i].Heading))
		}
	}
	return cover, colophon, register[len(register)-1].Last, nil
}

// CoreDryRun prints the structural summary rebuild-runink-core.py --dry-run
// printed, and writes nothing.
func CoreDryRun(w io.Writer, site, old string) error {
	front, body, ok := SplitFrontMatter(site)
	if !ok {
		return fmt.Errorf("site source has no front matter")
	}
	register, err := coreParseRegister(front)
	if err != nil {
		return err
	}
	chapters, err := coreSplitChapters(body)
	if err != nil {
		return err
	}
	cover, colophon, total, err := coreFurniture(old, register, chapters)
	if err != nil {
		return err
	}
	lines := strings.Split(cover, "\n")
	fmt.Fprintf(w, "cover: %d lines, ending %s\n", len(lines), PyRepr(lines[len(lines)-1]))
	fmt.Fprintf(w, "colophon: %s\n", PyRepr(colophon))
	fmt.Fprintf(w, "%d chapters, %d pages\n", len(chapters), total)
	for i, reg := range register {
		span := "  "
		if reg.Last != reg.Page {
			span = "-" + strconv.Itoa(reg.Last)
		}
		fmt.Fprintf(w, "  p%2d%s  %s\n", reg.Page, span, chapters[i].Heading)
	}
	return nil
}
