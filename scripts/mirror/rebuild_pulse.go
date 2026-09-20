package mirror

// Rebuild the runink-pulse PRINT MIRROR from the SITE SOURCE body.
// Ported from scripts/mirror/rebuild-runink-pulse.py.
//
// The mirror is the site body with print furniture wrapped round it:
//
//	<cover block>              bespoke, kept verbatim from the old mirror
//	## Contents                furniture, REGENERATED from the front-matter register
//	---  /  *Page N — Title*  /  ---     page marker after every chapter
//	## Chapter                 plain heading, exactly as the site writes it
//
// Nothing in the body is authored here: every chapter is copied out of the
// site source, which is the single source of truth.
//
// PULSE is the only one of the four that generates a table of contents, the
// only one whose cover boundary is a literal page marker rather than a
// structural feature, the only one that writes NO trailing newline, and the
// only one with no --dry-run and no pre-write validation at all. See
// rebuild_core.go for why the four were not collapsed.

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
	"unicode"
)

const (
	enDash = "–" // – used between the two numbers of a page span
	emDash = "—" // — used between page number and title
)

var (
	pulseRegisterRe = regexp.MustCompile(`\A\s*-\s*\{\s*page:\s*(\d+)\s*,` +
		`(?:\s*page_end:\s*(\d+)\s*,)?` +
		`\s*title:\s*"(.*?)"\s*\}\s*\z`)
	pulseChapterRe = regexp.MustCompile(`(?m)^(## .+)$`)
	pulseCoverRe   = regexp.MustCompile(`(?m)^\*Page 1 ` + emDash + ` Cover\*\n\n---\n`)
)

// PulseStats is what the script reported after writing.
type PulseStats struct {
	Chapters      int
	RegisterCount int
	CoverLines    int // cover.count('\n'), i.e. newlines, not lines
	ContentsCount int
}

// BuildPulse assembles the new PULSE mirror from the site source and the
// existing mirror (which supplies the cover verbatim).
func BuildPulse(site, old string) (string, PulseStats, error) {
	var st PulseStats
	front, body, ok := SplitFrontMatter(site)
	if !ok {
		return "", st, fmt.Errorf("site source: no front matter")
	}

	// register: - { page: 3,  title: "Summary" }  /  - { page: 17, page_end: 18, ... }
	type reg struct {
		page, pageEnd int
		title         string
	}
	var register []reg
	for _, line := range strings.Split(front, "\n") {
		m := pulseRegisterRe.FindStringSubmatch(line)
		if m == nil {
			continue
		}
		p, _ := strconv.Atoi(m[1])
		e := 0
		if m[2] != "" {
			e, _ = strconv.Atoi(m[2])
		}
		register = append(register, reg{p, e, m[3]})
	}
	if len(register) == 0 {
		return "", st, fmt.Errorf("site source: no register entries parsed")
	}

	// ------------------------------------------------------- site chapters
	// split the body on level-2 headings; anything before the first one would
	// be stray preamble (there is none, but fail loudly rather than silently
	// drop it).
	parts := SplitCaptured(pulseChapterRe, body)
	if preamble := strings.TrimSpace(parts[0]); preamble != "" {
		return "", st, fmt.Errorf("site source: unexpected text before the first chapter:\n%s",
			Truncate(preamble, 200))
	}

	type chapter struct{ title, text string }
	var chapters []chapter
	for i := 1; i < len(parts); i += 2 {
		heading := strings.TrimSpace(parts[i])
		text := strings.TrimRightFunc(parts[i+1], unicode.IsSpace)
		// exactly one blank line between the heading and the chapter's first
		// paragraph; everything after that is the site body's own spacing.
		chapters = append(chapters, chapter{
			title: strings.TrimSpace(dropRunes(heading, 3)),
			text:  heading + "\n\n" + strings.TrimLeft(text, "\n"),
		})
	}

	// ------------------------------------------- register / chapter agreement
	if len(chapters) != len(register) {
		rt := make([]string, len(register))
		for i, r := range register {
			rt[i] = PyRepr(r.title)
		}
		ct := make([]string, len(chapters))
		for i, c := range chapters {
			ct[i] = PyRepr(c.title)
		}
		return "", st, fmt.Errorf("register has %d entries but the body has %d chapters:\n  register: [%s]\n  body:     [%s]",
			len(register), len(chapters), strings.Join(rt, ", "), strings.Join(ct, ", "))
	}
	for i := range register {
		if register[i].title != chapters[i].title {
			return "", st, fmt.Errorf("register/body title mismatch: %s vs %s",
				PyRepr(register[i].title), PyRepr(chapters[i].title))
		}
	}

	// ------------------------------------------------------- cover (verbatim)
	cm := pulseCoverRe.FindStringIndex(old)
	if cm == nil {
		return "", st, fmt.Errorf("old mirror: could not find the end of the cover block")
	}
	cover := strings.TrimRight(old[:cm[1]], "\n")

	// --------------------------------------------------------------- furniture
	label := func(page, pageEnd int, title string) string {
		if pageEnd != 0 {
			return fmt.Sprintf("Pages %d%s%d %s %s", page, enDash, pageEnd, emDash, title)
		}
		return fmt.Sprintf("Page %d %s %s", page, emDash, title)
	}
	// every page marker is fenced above and below, except the final one, which
	// the old mirror closed on — the file end is the fence.
	marker := func(page, pageEnd int, title string, last bool) string {
		fence := "\n\n---"
		if last {
			fence = ""
		}
		return fmt.Sprintf("---\n\n*%s*%s", label(page, pageEnd, title), fence)
	}
	contentsLine := func(page, pageEnd int, title string) string {
		if pageEnd != 0 {
			return fmt.Sprintf("- **Pages %d%s%d** %s %s", page, enDash, pageEnd, emDash, title)
		}
		return fmt.Sprintf("- **Page %d** %s %s", page, emDash, title)
	}

	// --------------------------------------------------------------- assemble
	out := []string{cover, ""}

	toc := []string{"## Contents", "",
		"- **Page 1** " + emDash + " Cover",
		"- **Page 2** " + emDash + " Contents"}
	for _, r := range register {
		toc = append(toc, contentsLine(r.page, r.pageEnd, r.title))
	}
	out = append(out, strings.Join(toc, "\n"), "", marker(2, 0, "Contents", false), "")

	for n, r := range register {
		out = append(out, chapters[n].text, "", marker(r.page, r.pageEnd, r.title, n == len(register)-1), "")
	}

	// old mirror carried no trailing newline
	newText := strings.TrimRight(strings.Join(out, "\n"), "\n")
	st = PulseStats{
		Chapters:      len(chapters),
		RegisterCount: len(register),
		CoverLines:    strings.Count(cover, "\n"),
		ContentsCount: len(register) + 2,
	}
	return newText, st, nil
}
