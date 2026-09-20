package mirror

// Bidirectional audit of one whitepaper against its print mirror.
// Ported from scripts/mirror/mirror-audit.py.
//
// The shipped check-whitepaper-mirrors.sh compares in ONE direction only —
// every site paragraph must appear in the mirror — and says so in its own
// header. That catches a chapter added to the site and not carried over. It
// does NOT catch the opposite and more dangerous case: a claim struck from the
// site that is still sitting in the document a salesperson hands to a
// prospect.
//
// This reports both.

import (
	"fmt"
	"io"
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

// furnitureRe recognises a paragraph as print furniture rather than prose.
//
// Note there is no (?m): the Python compiled it without re.MULTILINE and
// matched it against a single already-stripped paragraph, so ^ and $ are the
// ends of that paragraph, not of a line inside it.
//
// "Pages?" matters: runink-face titles a chapter that spans pages with the
// plural, which is the paper's own convention and is more accurate than naming
// only the first page. The pattern used to demand a digit straight after
// "Page", so every ranged heading was reported as stale prose and this tool
// was quietly pushing the document towards the singular form. A checker that
// makes the thing it checks worse is worse than no checker.
var furnitureRe = regexp.MustCompile(`(?i)^(?:` +
	`<div style="page-break` + // the page break div
	`|---+\s*$` + // horizontal rules
	`|\*Pages? \d` + // *Page 1 — Cover* / *Pages 17–18 — ...*
	`|#{1,3} Pages? \d` + // ## Page 7 — Title / ## Pages 21–23 — Title
	`|!\[\]` + // bare images
	`|\*[^*\n]*page \d+[^*\n]*\*\s*$` + // *Runink CORE — page 7 of 21*
	`)`)

var colophonRe = regexp.MustCompile(`\A\*[^*]+\*\z`)

// AuditMode selects how much of the audit is printed. Anything other than the
// four values below prints the summary alone, which is what the Python did
// with an unrecognised argv[2].
type AuditMode string

const (
	AuditSummary  AuditMode = ""
	AuditMissing  AuditMode = "--missing"
	AuditOrphan   AuditMode = "--orphan"
	AuditExcluded AuditMode = "--excluded"
)

// Audit compares one paper against its mirror and writes the report to w. It
// returns the Python's exit status: 1 when anything is missing or orphaned, 0
// when the mirror is faithful.
func Audit(w io.Writer, siteDir, mirrorDir, name string, mode AuditMode) (int, error) {
	srcRaw, err := os.ReadFile(filepath.Join(siteDir, name+".md"))
	if err != nil {
		return 0, err
	}
	mirRaw, err := os.ReadFile(filepath.Join(mirrorDir, name+"-whitepaper.md"))
	if err != nil {
		return 0, err
	}

	// site_body(): the front matter is dropped when there is one, and the
	// whole file is used when there is not.
	src := string(srcRaw)
	if _, body, ok := SplitFrontMatter(src); ok {
		src = body
	}
	mir := string(mirRaw)

	sp := keepSquashable(Paragraphs(src))
	mp := keepSquashable(Paragraphs(mir))
	sstream, mstream := Squash(src), Squash(mir)

	// The bespoke COVER BLOCK is everything before the mirror's first chapter
	// — the heading whose words are one of the site body's "## " headings.
	// Keying on the words rather than on a literal "## Page " makes this work
	// for a mirror that numbers its chapters ("## Page 2 — Executive summary",
	// as runink-face does) and for one that does not ("## Executive summary",
	// as runink-core does). The old "## Page " test silently produced an EMPTY
	// cover for the three mirrors that title their chapters plainly, so their
	// covers were reported as stale prose.
	//
	// Keying on the FIRST site chapter alone was still wrong for one mirror:
	// runink-core-atlas folds its whole first chapter into the cover as bold
	// running text, so that chapter has no heading in the mirror at all and
	// the search fell through to 0 — an empty cover again, and the tool then
	// reported the cover as six paragraphs of stale prose. Its only fix would
	// have been to unfold the chapter, which is a real, documented difference
	// the shipped checker names in its own header. So: the cover ends at the
	// first mirror heading that carries ANY site chapter's words, whichever
	// chapter that turns out to be.
	var chapterKeys []string
	for _, p := range sp {
		if strings.HasPrefix(p, "## ") {
			chapterKeys = append(chapterKeys, Squash(p))
		}
	}
	// next((i for i, p in enumerate(mp) if ...), 0): the FIRST such index, or
	// 0 when there is none — which is an empty cover, not index zero.
	coverEnd := 0
search:
	for i, p := range mp {
		if !strings.HasPrefix(p, "#") {
			continue
		}
		q := Squash(p)
		for _, k := range chapterKeys {
			if strings.Contains(q, k) {
				coverEnd = i
				break search
			}
		}
	}
	coverSquash := Squash(strings.Join(mp[:coverEnd], "\n"))

	// Symmetrically, the BACK MATTER is the colophon a handout closes on: a
	// single wholly-italic line sitting after the last mirror paragraph that
	// is still site prose. Deliberately narrow — anything else after that
	// point is real prose that left the site, and is still reported.
	backStart := len(mp)
	for i, p := range mp {
		if strings.Contains(sstream, Squash(p)) {
			backStart = i + 1
		}
	}

	isColophon := func(i int, p string) bool {
		p = strings.TrimSpace(p)
		return i >= backStart && !strings.Contains(p, "\n") && colophonRe.MatchString(p)
	}
	isFurniture := func(p string) bool { return furnitureRe.MatchString(strings.TrimSpace(p)) }

	var missing []string
	for _, p := range sp {
		if !strings.Contains(mstream, Squash(p)) {
			missing = append(missing, p)
		}
	}
	var orphan []string
	for i, p := range mp {
		q := Squash(p)
		switch {
		case strings.Contains(sstream, q),
			isFurniture(p),
			i < coverEnd,
			strings.Contains(coverSquash, q), // a cover line repeated as back matter
			isColophon(i, p):
		default:
			orphan = append(orphan, p)
		}
	}

	fmt.Fprintf(w, "%s: site %d paras, mirror %d paras\n", name, len(sp), len(mp))
	fmt.Fprintf(w, "  site -> mirror MISSING : %d  (check-whitepaper-mirrors.sh fails on these)\n", len(missing))
	fmt.Fprintf(w, "  mirror -> site ORPHAN  : %d  (stale prose still in the handout, excl. cover + furniture)\n", len(orphan))

	switch mode {
	case AuditMissing:
		fmt.Fprintf(w, "\n--- %d paragraph(s) in the SITE but not the MIRROR ---\n", len(missing))
		for i, p := range missing {
			fmt.Fprintf(w, "\n[%d] %s\n", i+1, p)
		}

	// --excluded exists because every exclusion above is a place this tool can
	// be wrong in the direction that matters: silently calling stale prose
	// "furniture" and reporting a clean zero. The FACE back matter is the
	// worked example — "### Contact" survives the orphan filter only because
	// the site body happens to contain the word "contacted", and
	// "paes@runink.org" only because the paper prints the address somewhere.
	// That is coincidence, not correctness, and a zero resting on it is worth
	// less than it looks.
	//
	// So: print what was excluded and why, and read it. A short,
	// obviously-furniture list is the evidence the zero is real.
	case AuditExcluded:
		fmt.Fprintf(w, "\n--- cover block: mirror paragraphs 0..%d ---\n", coverEnd)
		for _, p := range mp[:coverEnd] {
			fmt.Fprintf(w, "  COVER    %s\n", Truncate(pyBracketSpaceBug(p), 100))
		}
		for i, p := range mp {
			q := Squash(p)
			if strings.Contains(sstream, q) {
				continue // real site prose, not excluded
			}
			if i < coverEnd {
				continue // already shown
			}
			var why string
			switch {
			case isFurniture(p):
				why = "FURNITURE"
			case isColophon(i, p):
				why = "COLOPHON"
			case strings.Contains(coverSquash, q):
				why = "COVER-DUP"
			default:
				continue
			}
			fmt.Fprintf(w, "  %-9s %s\n", why, Truncate(Fields(p), 100))
		}

	case AuditOrphan:
		fmt.Fprintf(w, "\n--- %d paragraph(s) in the MIRROR but not the SITE ---\n", len(orphan))
		for i, p := range orphan {
			fmt.Fprintf(w, "\n[%d] %s\n", i+1, p)
		}
	}

	if len(missing) > 0 || len(orphan) > 0 {
		return 1, nil
	}
	return 0, nil
}

// pyBracketSpaceBug reproduces a DEFECT in mirror-audit.py, on purpose.
//
// The Python wrote re.sub(r'[[:space:]]+', ' ', p) intending to fold a
// multi-line cover paragraph onto one line before truncating it to 100
// characters — which is what the sibling branch four lines below does
// correctly, with ' '.join(p.split()).
//
// But [[:space:]] is a POSIX bracket expression and Python's re does not
// support it. Python parses it as the class [ [ : s p a c e ] followed by a
// LITERAL ']' with the '+' bound to that ']'. So the pattern only matches one
// of those seven characters followed by one or more ']' — which occurs nowhere
// in these documents. The substitution is a no-op, Python emits a
// FutureWarning ("Possible nested set at position 1") on stderr, and the COVER
// lines print raw, with their newlines still in them and the 100-character cut
// landing part-way down a wrapped paragraph.
//
// Go's regexp DOES support [[:space:]], so copying the pattern across would
// have silently FIXED the bug and broken the byte-for-byte diff that is this
// port's only evidence of correctness. The Python's actual semantics are
// spelled out instead. Fixing it is a real improvement and a separate change:
// it alters the output of `mirror-audit <paper> --excluded` for every paper.
var pyBracketSpaceRe = regexp.MustCompile(`[\[:space]\]+`)

func pyBracketSpaceBug(p string) string {
	return pyBracketSpaceRe.ReplaceAllLiteralString(p, " ")
}

func keepSquashable(ps []string) []string {
	out := []string{}
	for _, p := range ps {
		if Squash(p) != "" {
			out = append(out, p)
		}
	}
	return out
}
