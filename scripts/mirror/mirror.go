// Package mirror rebuilds and audits the four whitepaper print mirrors.
//
// Each whitepaper exists twice: the site source under
// content/blog/whitepapers/, and a print mirror in ../pitch-decks/ — the
// document a salesperson hands to a prospect. The site source is the truth;
// the mirror is the same body with print furniture wrapped round it.
//
// This package holds only what all six tools genuinely share — squashing,
// paragraph splitting, front-matter splitting, the Python-re.split shim. The
// four rebuilders do NOT share a register parser or a chapter splitter even
// where theirs look alike, because theirs are not alike: see the file comment
// on each rebuild_*.go.
//
// # Ported from Python, and faithful on purpose
//
// This replaced six Python scripts (mirror-audit.py, mirror-verify.py and
// rebuild-runink-{core,face,pulse,core-atlas}.py). The acceptance test was a
// byte-for-byte diff of the rebuilt mirrors against the ones the Python
// produced, which are the files committed in ../pitch-decks/. That means the
// port reproduces the Python's defects as well as its intent. Where it does,
// the defect is named in a comment at the site of it, not quietly corrected —
// correcting one would have moved the target the diff was measured against.
package mirror

import (
	"fmt"
	"os"
	"regexp"
	"strings"
)

// SiteDir is repo-relative; every tool here runs from the site repo root, as
// check-whitepaper-mirrors.sh does.
const SiteDir = "content/blog/whitepapers"

const defaultMirrorDir = "../pitch-decks"

// MirrorDir mirrors os.environ.get('MIRROR_DIR', '../pitch-decks'): an
// explicitly empty MIRROR_DIR yields "", it does not fall back, because that
// is what the Python did and a caller who exports an empty value is asking a
// question the fallback would silently answer wrong.
func MirrorDir() string {
	if v, ok := os.LookupEnv("MIRROR_DIR"); ok {
		return v
	}
	return defaultMirrorDir
}

// Squash reduces a string to its lowercase letters and digits — the
// comparison key used by check-whitepaper-mirrors.sh and by everything here.
// Line wrapping, heading marks, bold, page numbering and punctuation fall
// away; the words do not.
//
// Python: re.sub(r'[^a-z0-9]', <empty>, s.lower()).
func Squash(s string) string {
	var b strings.Builder
	b.Grow(len(s))
	for _, r := range strings.ToLower(s) {
		if (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9') {
			b.WriteRune(r)
		}
	}
	return b.String()
}

// paraSplit is Python's r'\n\s*\n'. Go's \s omits the vertical tab that
// Python's includes, so it is spelled out; the corpus contains only U+0020 and
// U+000A, which was checked rather than assumed.
var paraSplit = regexp.MustCompile("\n[\t\n\v\f\r ]*\n")

// Paragraphs splits text into stripped, non-empty paragraphs.
//
// Python: [b.strip() for b in re.split(r'\n\s*\n', text) if b.strip()].
func Paragraphs(text string) []string {
	out := []string{}
	for _, b := range paraSplit.Split(text, -1) {
		if t := strings.TrimSpace(b); t != "" {
			out = append(out, t)
		}
	}
	return out
}

var frontRe = regexp.MustCompile(`(?s)\A---\n(.*?\n)---\n`)

// SplitFrontMatter separates the YAML front matter from the body. front keeps
// the trailing newline of its last line, which is what the register and deck
// patterns below are written against; body starts at the first character after
// the closing "---\n".
//
// The Python scripts spelled this two ways — r'^---\n(.*?\n)---\n' (core,
// face) and r'^---\n(.*?)\n---\n' (pulse, atlas) — which differ only by that
// newline and are otherwise the same match.
func SplitFrontMatter(src string) (front, body string, ok bool) {
	m := frontRe.FindStringSubmatchIndex(src)
	if m == nil {
		return "", "", false
	}
	return src[m[2]:m[3]], src[m[1]:], true
}

// SplitCaptured mimics Python's re.split() with a pattern carrying exactly one
// capture group: it returns [before, capture0, between0, capture1, ...]. Go's
// regexp.Split drops the captures, and every chapter splitter here depends on
// keeping them.
func SplitCaptured(re *regexp.Regexp, s string) []string {
	out := []string{}
	last := 0
	for _, m := range re.FindAllStringSubmatchIndex(s, -1) {
		out = append(out, s[last:m[0]])
		if m[2] >= 0 {
			out = append(out, s[m[2]:m[3]])
		} else {
			out = append(out, "")
		}
		last = m[1]
	}
	return append(out, s[last:])
}

// Truncate cuts to n CHARACTERS, not bytes. Python slices strings by code
// point, and every truncation in these tools ([:100], [:70], [:200]) lands in
// prose full of em dashes — a byte slice would cut one in half and emit
// invalid UTF-8.
func Truncate(s string, n int) string {
	count := 0
	for i := range s {
		if count == n {
			return s[:i]
		}
		count++
	}
	return s
}

// Fields is Python's ' '.join(p.split()): collapse every run of whitespace to
// a single space and drop leading/trailing whitespace.
func Fields(s string) string { return strings.Join(strings.Fields(s), " ") }

// FloorDiv is Python's // on ints: it rounds towards negative infinity, where
// Go's / truncates towards zero. mirror-verify reports a size delta as a
// percentage and every mirror that shrank has a negative one, so the two
// disagree on three of the four papers (-6.45% prints as -7, not -6).
func FloorDiv(a, b int) int {
	q := a / b
	if (a%b != 0) && ((a < 0) != (b < 0)) {
		q--
	}
	return q
}

// PyRepr renders a Go string the way Python's repr() renders a str. Only
// rebuild-runink-core --dry-run needs it, and only so that its output stays
// diffable against the Python's.
//
// Limits, stated rather than discovered later: it implements the ASCII rules
// and passes every non-ASCII rune through as printable. Python would escape a
// non-ASCII UNPRINTABLE rune (a combining mark's category is fine, but Cc, Cf,
// Cs, Co, Cn and the Unicode separators are not) as \xHH, \uHHHH or
// \UHHHHHHHH. The corpus is ASCII plus dashes and a middle dot, so that branch
// is unreachable here and is not implemented.
func PyRepr(s string) string {
	quote := byte('\'')
	if strings.Contains(s, "'") && !strings.Contains(s, `"`) {
		quote = '"'
	}
	var b strings.Builder
	b.WriteByte(quote)
	for _, r := range s {
		switch {
		case r == rune(quote) || r == '\\':
			b.WriteByte('\\')
			b.WriteRune(r)
		case r == '\n':
			b.WriteString(`\n`)
		case r == '\r':
			b.WriteString(`\r`)
		case r == '\t':
			b.WriteString(`\t`)
		case r < 0x20 || r == 0x7f:
			fmt.Fprintf(&b, `\x%02x`, r)
		default:
			b.WriteRune(r)
		}
	}
	b.WriteByte(quote)
	return b.String()
}
