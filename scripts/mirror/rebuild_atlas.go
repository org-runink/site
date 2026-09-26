package mirror

// Rebuild pitch-decks/runink-core-atlas-whitepaper.md from the site source.
// Ported from scripts/mirror/rebuild-runink-core-atlas.py.
//
// The site source is the truth. The mirror is that body with print furniture
// wrapped round it:
//
//   - a bespoke cover block (title, headline, audience line, the two deck
//     paragraphs, chapter one folded in as bold running text, contacts, a page
//     marker), preserved from the current mirror;
//   - one page per register entry, in register order, with the register's own
//     page numbers -- the paper's prose cross-references ("pages 11 to 13",
//     "page 21", "page 8", "page 16") are written against the register, so the
//     mirror has to paginate the same way or the handout points at the wrong
//     sheets;
//   - a horizontal rule between pages and an italic page marker at the foot of
//     each one.
//
// Chapter one is NOT emitted in the body: it lives in the cover, folded. That
// fold is the single largest reason the four rebuilders are four rebuilders
// and not one — see rebuild_core.go.

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
)

// atlasLegacyFold is how chapter one was titled when it was first folded into
// the cover; a mirror older than the current site source still starts its fold
// with it.
const atlasLegacyFold = "**What this paper is, and which part of it runs.**"

// AtlasPaper is the name the mirror prints in its own page markers.
const AtlasPaper = "Runink CORE and Atlas"

var (
	atlasRegHeadRe = regexp.MustCompile(`\Aregister:\s*\z`)
	atlasRegLineRe = regexp.MustCompile(`\A\s*-\s*\{\s*page:\s*(\d+),\s*(?:page_end:\s*(\d+),\s*)?` +
		`title:\s*"(.*)"\s*\}\s*\z`)
	atlasChapterRe = regexp.MustCompile(`(?m)^(##\s+.+?)\s*$`)
	atlasHeadTrim  = regexp.MustCompile(`\A##\s+`)
)

// BuildAtlas assembles the new Atlas mirror.
//
// orig is where the cover furniture is read from. It defaults to the mirror
// being written, and every anchor below is content-based, so a synced file
// yields the same cover a pre-sync one does — which is what makes the script
// re-runnable against its own output. Point ATLAS_COVER_SRC at a pre-sync copy
// if the live cover has been damaged.
func BuildAtlas(site, orig string) (text string, totalPages, chapterCount int, err error) {
	front, body, ok := SplitFrontMatter(site)
	if !ok {
		return "", 0, 0, fmt.Errorf("no front matter in the site source")
	}

	// register: the paper's own pagination map
	//
	// This parser STOPS at the first line after `register:` that does not
	// match, where core's skips such a line and face's and pulse's scan the
	// whole front matter. Kept as it was: on a malformed register the three
	// behaviours diverge, and that is precisely when the difference matters.
	var register []RegEntry
	inReg := false
	for _, line := range strings.Split(front, "\n") {
		if !inReg {
			if atlasRegHeadRe.MatchString(line) {
				inReg = true
			}
			continue
		}
		m := atlasRegLineRe.FindStringSubmatch(line)
		if m == nil {
			break
		}
		p, _ := strconv.Atoi(m[1])
		last := p
		if m[2] != "" {
			last, _ = strconv.Atoi(m[2])
		}
		register = append(register, RegEntry{Page: p, Last: last, Title: strings.ReplaceAll(m[3], `\"`, `"`)})
	}
	if len(register) == 0 {
		return "", 0, 0, fmt.Errorf("no register parsed")
	}
	totalPages = 0
	for _, e := range register {
		if e.Last > totalPages {
			totalPages = e.Last
		}
	}

	// chapters, in source order
	parts := SplitCaptured(atlasChapterRe, body)
	if strings.TrimSpace(parts[0]) != "" {
		return "", 0, 0, fmt.Errorf("stray text before the first chapter: %s",
			PyRepr(Truncate(parts[0], 200)))
	}
	var chapters []Chapter
	for i := 1; i < len(parts); i += 2 {
		chapters = append(chapters, Chapter{
			Heading: strings.TrimSpace(atlasHeadTrim.ReplaceAllString(parts[i], "")),
			Text:    strings.Trim(parts[i+1], "\n"),
		})
	}
	if len(chapters) != len(register) {
		return "", 0, 0, fmt.Errorf("%d chapters vs %d register entries", len(chapters), len(register))
	}
	for i := range chapters {
		if chapters[i].Heading != register[i].Title {
			return "", 0, 0, fmt.Errorf("register/body order differs: %s vs %s",
				PyRepr(register[i].Title), PyRepr(chapters[i].Heading))
		}
	}

	// --------------------------------------------------------- current cover
	old := strings.Split(orig, "\n")
	if len(old) > 0 && old[len(old)-1] == "" {
		old = old[:len(old)-1] // Python's splitlines() drops the final empty field
	}
	if len(old) < 18 {
		return "", 0, 0, fmt.Errorf("unexpected first line in the mirror")
	}
	if old[0] != "# "+AtlasPaper {
		return "", 0, 0, fmt.Errorf("unexpected first line in the mirror")
	}
	// The title block (H1, headline, audience, rule, deck) is everything above
	// the folded chapter one, found by content. It used to be a fixed
	// sixteen-line slice, which broke the moment the deck changed length.
	foldAt := -1
	foldHead := "**" + chapters[0].Heading + ".**"
	for i, l := range old {
		if strings.HasPrefix(l, foldHead) || strings.HasPrefix(l, atlasLegacyFold) {
			foldAt = i
			break
		}
	}
	if foldAt < 1 {
		return "", 0, 0, fmt.Errorf("the folded chapter one is not where it was")
	}
	// Less the one blank line that separates it from the fold, which the join
	// below puts back: the slice the fixed offset took, byte for byte.
	titleBlock := strings.Join(old[0:foldAt-1], "\n")

	// Anchored on content, not on a line offset. old[30:32] worked against the
	// pre-sync file and silently stopped pointing at the contacts once the
	// folded chapter one changed length — which is the whole failure mode this
	// script exists to repair, reproduced inside the repair.
	ci := -1
	for i, l := range old {
		if strings.HasPrefix(l, "Runink · runink.org") {
			ci = i
			break
		}
	}
	if ci < 0 {
		return "", 0, 0, fmt.Errorf("contacts moved")
	}
	end := ci + 2
	if end > len(old) {
		end = len(old)
	}
	contacts := strings.Join(old[ci:end], "\n") // Runink / Logical Leap contact lines
	if len(old) < 3 {
		return "", 0, 0, fmt.Errorf("the closing colophon moved")
	}
	colophon := old[len(old)-3] // the closing sign-off line
	if !strings.HasPrefix(colophon, "*Runink CORE and Atlas. Continuous oversight") {
		return "", 0, 0, fmt.Errorf("the closing colophon moved")
	}

	// Chapter one, folded into the cover: its heading kept as bold running
	// text with a full stop, its paragraphs taken verbatim from the site
	// source so the cover says what the site says.
	ch1 := chapters[0]
	fold := fmt.Sprintf("**%s.**\n\n%s", ch1.Heading, ch1.Text)

	// the mirror's own foot-of-page wording, renumbered to the register
	marker := func(page int) string {
		return fmt.Sprintf("*%s — page %d of %d*", AtlasPaper, page, totalPages)
	}

	out := []string{titleBlock, fold, contacts, marker(register[0].Last), "---"}

	// ------------------------------------------------------------- the body
	for i := 1; i < len(chapters); i++ {
		out = append(out, "## "+chapters[i].Heading, chapters[i].Text)
		if i == len(chapters)-1 {
			out = append(out, "---", colophon, marker(register[i].Last))
		} else {
			out = append(out, marker(register[i].Last), "---")
		}
	}

	return strings.Join(out, "\n\n") + "\n", totalPages, len(chapters), nil
}
