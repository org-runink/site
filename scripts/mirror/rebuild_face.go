package mirror

// Rebuild the runink-face PRINT MIRROR from the SITE SOURCE body.
// Ported from scripts/mirror/rebuild-runink-face.py.
//
// The site source is the single truth. The mirror = that body, plus print
// furniture:
//
//   - a bespoke cover block (preserved verbatim from the existing mirror:
//     everything before the first page-break div),
//   - a page-break div before every chapter,
//   - chapter headings renumbered "## Page N — Title", N taken from the
//     `register:` list in the site front matter,
//   - a bespoke back-matter contact block (preserved verbatim).
//
// Everything between those is copied byte-for-byte from the site body, which
// is the only way stale prose is guaranteed gone.
//
// FACE is the only one of the four that refuses to write when a site paragraph
// would be lost or an image line would change, and the only one that leaves a
// .bak behind. See rebuild_core.go for why the four were not collapsed.

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
	"unicode"
	"unicode/utf8"
)

// FaceDiv is the page-break div the FACE mirror puts before every chapter.
const FaceDiv = `<div style="page-break-after: always;"></div>`

var (
	faceRegisterRe = regexp.MustCompile(`\A\s*-\s*\{\s*page:\s*(\d+)\s*,` +
		`\s*(?:page_end:\s*(\d+)\s*,)?` +
		`\s*title:\s*"(.*?)"\s*\}\s*\z`)
	// The Python wrote ^##(?!#)[ \t]+(.*)$. RE2 has no lookahead, and it did
	// not need one: [ \t]+ already refuses a third '#', so the negative
	// lookahead was redundant and dropping it changes nothing.
	faceChapterRe   = regexp.MustCompile(`(?m)^##[ \t]+(.*)$`)
	faceDeckHeadRe  = regexp.MustCompile(`(?m)^deck:\s*\|\s*\n`)
	faceCoverDeckRe = regexp.MustCompile(`(?s)\n---\n\n(.*?)\n\n---\n`)
	faceBackRe      = regexp.MustCompile(`(?s)\n---\n\n### Contact\n.*\z`)
	faceImageRe     = regexp.MustCompile(`(?m)^!\[.*$`)
)

// FaceStats is what the script reports about what it wrote, in the Python's
// own (mislabelled) units — see BuildFace.
type FaceStats struct {
	Chars      int // Python's len(new): CODE POINTS, printed as "bytes"
	Lines      int
	Chapters   int
	PageBreaks int
	Images     int
}

// BuildFace assembles the new FACE mirror. It is a pure function of the site
// source and the existing mirror so the acceptance diff can run it without
// touching a file.
func BuildFace(site, old string) (string, FaceStats, error) {
	var st FaceStats
	front, body, ok := SplitFrontMatter(site)
	if !ok {
		return "", st, fmt.Errorf("site source has no front matter")
	}

	// --- the register: page number per chapter title, in document order -----
	type reg struct {
		page, pageEnd int
		title         string
	}
	var register []reg
	for _, line := range strings.Split(front, "\n") {
		m := faceRegisterRe.FindStringSubmatch(line)
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

	// --- split the site body on its chapter headings ------------------------
	chunks := SplitCaptured(faceChapterRe, body)
	preamble := chunks[0]
	type chapter struct{ title, content string }
	var chapters []chapter
	for i := 1; i < len(chunks); i += 2 {
		chapters = append(chapters, chapter{chunks[i], chunks[i+1]})
	}

	if strings.TrimSpace(preamble) != "" {
		return "", st, fmt.Errorf("unexpected prose before the first chapter: %s",
			PyRepr(Truncate(strings.TrimSpace(preamble), 200)))
	}
	if len(chapters) != len(register) {
		return "", st, fmt.Errorf("%d chapters vs %d register entries", len(chapters), len(register))
	}
	for i, ch := range chapters {
		if strings.TrimSpace(ch.title) != register[i].title {
			return "", st, fmt.Errorf("heading %s != register title %s",
				PyRepr(strings.TrimSpace(ch.title)), PyRepr(register[i].title))
		}
	}

	// --- furniture lifted verbatim from the existing mirror -----------------
	divAt := strings.Index(old, FaceDiv)
	if divAt < 0 {
		return "", st, fmt.Errorf("mirror has no %s", FaceDiv)
	}
	cover := strings.TrimRight(old[:divAt], "\n")

	// The cover is bespoke print furniture and is kept verbatim -- except the
	// deck, which is a second copy of the site front matter's `deck:` and had
	// drifted from it. Neither checker can see the cover, so nothing else will
	// ever catch that; re-derive it here instead.
	deckRaw, okDeck := faceExtractDeck(front)
	if !okDeck {
		return "", st, fmt.Errorf("no `deck:` block in the site front matter")
	}
	var deckLines []string
	for _, l := range strings.Split(strings.TrimRight(deckRaw, "\n"), "\n") {
		deckLines = append(deckLines, dropRunes(l, 2))
	}
	siteDeck := strings.Join(deckLines, "\n")

	cm := faceCoverDeckRe.FindStringSubmatchIndex(cover)
	if cm == nil {
		return "", st, fmt.Errorf("could not find the deck region of the mirror cover")
	}
	if firstPara(cover[cm[2]:cm[3]]) != firstPara(siteDeck) {
		return "", st, fmt.Errorf("cover deck opening paragraph does not match the site deck; " +
			"refusing to guess which region of the cover is the deck")
	}
	cover = cover[:cm[2]] + siteDeck + cover[cm[3]:]

	back := faceBackRe.FindString(old)
	if back == "" {
		return "", st, fmt.Errorf("could not find the back-matter contact block in the mirror")
	}

	// --- assemble ----------------------------------------------------------
	var out strings.Builder
	out.WriteString(cover)
	for i, ch := range chapters {
		// The paper's own convention: a chapter that spans pages names the
		// span ("## Pages 21–23 —"), so the printed sequence has no gaps in
		// it for a reader to mistake for an error. En dash between the
		// numbers, em dash before the title.
		var heading string
		if register[i].pageEnd != 0 {
			heading = fmt.Sprintf("## Pages %d–%d — %s", register[i].page, register[i].pageEnd,
				strings.TrimSpace(ch.title))
		} else {
			heading = fmt.Sprintf("## Page %d — %s", register[i].page, strings.TrimSpace(ch.title))
		}
		// `content` already opens with the newline that ends the heading
		// line, so it is appended directly -- no extra blank line.
		out.WriteString("\n\n\n" + FaceDiv + "\n\n" + heading + strings.TrimRight(ch.content, "\n"))
	}
	// `back` opens with a single newline; the chapter body was rstripped of
	// its own, so one more is needed or the closing rule would be read as a
	// setext heading on the last line of prose.
	newText := out.String() + "\n" + back

	// --- sanity, before anything is written --------------------------------
	stream := Squash(newText)
	lost := 0
	for _, p := range keepSquashable(Paragraphs(body)) {
		if !strings.Contains(stream, Squash(p)) {
			lost++
		}
	}
	if lost > 0 {
		return "", st, fmt.Errorf("refusing to write: %d site paragraph(s) would be lost", lost)
	}

	imgsSite := faceImageRe.FindAllString(body, -1)
	imgsNew := faceImageRe.FindAllString(newText, -1)
	if !slicesEqual(imgsSite, imgsNew) {
		return "", st, fmt.Errorf("image lines differ between site body and rebuilt mirror")
	}

	st = FaceStats{
		// len(new) in Python is a COUNT OF CODE POINTS, and the message calls
		// them bytes. It is off by the number of multi-byte characters in the
		// document — 345 of them, so the script reports 100562 for a file that
		// is 100907 bytes on disk. Reproduced rather than corrected: the
		// acceptance test for this port was a byte-for-byte diff against the
		// Python's output, and quietly changing a printed number would have
		// been a second, unmeasured change riding along with the port.
		Chars:      utf8.RuneCountInString(newText),
		Lines:      strings.Count(newText, "\n") + 1,
		Chapters:   len(chapters),
		PageBreaks: strings.Count(newText, FaceDiv),
		Images:     len(imgsNew),
	}
	return newText, st, nil
}

// faceExtractDeck returns the raw indented body of the front matter's
// `deck: |` block, newlines and two-space indent still on it.
//
// The Python used r'((?:(?:  .*)?\n)+?)(?=^\S)' — a non-greedy repetition
// terminated by a multiline lookahead. RE2 has no lookahead, so the same
// semantics are spelled out: consume lines that are either empty or start with
// two spaces, and stop at the first line boundary where the NEXT line begins
// with a non-whitespace character. End of string does not satisfy ^\S, so a
// deck block that runs to the end of the front matter is not matched — which
// is the Python's behaviour too.
func faceExtractDeck(front string) (string, bool) {
	loc := faceDeckHeadRe.FindStringIndex(front)
	if loc == nil {
		return "", false
	}
	start, pos := loc[1], loc[1]
	for {
		nl := strings.IndexByte(front[pos:], '\n')
		if nl < 0 {
			return "", false
		}
		line := front[pos : pos+nl]
		if line != "" && !strings.HasPrefix(line, "  ") {
			return "", false
		}
		pos += nl + 1
		if pos >= len(front) {
			return "", false
		}
		if r, _ := utf8.DecodeRuneInString(front[pos:]); !unicode.IsSpace(r) {
			return front[start:pos], true
		}
	}
}

// dropRunes is Python's s[n:] — by code point, not by byte.
func dropRunes(s string, n int) string {
	count := 0
	for i := range s {
		if count == n {
			return s[i:]
		}
		count++
	}
	return ""
}

// firstPara is Python's s.split('\n\n')[0].
func firstPara(s string) string {
	if i := strings.Index(s, "\n\n"); i >= 0 {
		return s[:i]
	}
	return s
}
