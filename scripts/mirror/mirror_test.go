package mirror

import "testing"

// These cover the helpers where Go and Python disagree by default. Each one is
// a place the port could have been silently wrong: the diff against the
// Python's real output would have caught most of them, but only on the corpus
// that happened to be there on the day.

func TestFloorDiv(t *testing.T) {
	// mirror-verify prints (now-was)*100 // was. Python floors; Go's /
	// truncates towards zero, so they disagree on every negative non-exact
	// division — which is every mirror that shrank.
	cases := []struct{ a, b, want int }{
		{-470600, 72962, -7}, // runink-core: -6.449… -> -7, NOT -6
		{-374900, 62572, -6}, // runink-pulse
		{-1645800, 93517, -18},
		{547700, 95430, 5}, // runink-face, positive: both agree
		{-16600, 700, -24},
		{33900, 300, 113},
		{0, 5, 0},
		{-100, 10, -10}, // exact: no adjustment
	}
	for _, c := range cases {
		if got := FloorDiv(c.a, c.b); got != c.want {
			t.Errorf("FloorDiv(%d, %d) = %d, want %d (Go's / would give %d)",
				c.a, c.b, got, c.want, c.a/c.b)
		}
	}
}

func TestTruncateCountsRunesNotBytes(t *testing.T) {
	// The prose is full of em dashes. A byte slice would cut one in half.
	s := "Runink CORE — page 7 of 21"
	if got := Truncate(s, 14); got != "Runink CORE — " {
		t.Errorf("Truncate = %q, want %q", got, "Runink CORE — ")
	}
	if got := Truncate(s, 13); got != "Runink CORE —" {
		t.Errorf("Truncate = %q, want %q", got, "Runink CORE —")
	}
	if got := Truncate("abc", 10); got != "abc" {
		t.Errorf("Truncate past the end = %q, want %q", got, "abc")
	}
	if got := Truncate("", 3); got != "" {
		t.Errorf("Truncate empty = %q", got)
	}
}

func TestSquash(t *testing.T) {
	if got := Squash("## Page 7 — Executive Summary!"); got != "page7executivesummary" {
		t.Errorf("Squash = %q", got)
	}
	if got := Squash("— · ---"); got != "" {
		t.Errorf("Squash of pure punctuation = %q, want empty", got)
	}
}

func TestParagraphs(t *testing.T) {
	got := Paragraphs("one\nline\n\n  \n two \n\n\n\nthree\n")
	want := []string{"one\nline", "two", "three"}
	if len(got) != len(want) {
		t.Fatalf("Paragraphs = %q, want %q", got, want)
	}
	for i := range want {
		if got[i] != want[i] {
			t.Errorf("Paragraphs[%d] = %q, want %q", i, got[i], want[i])
		}
	}
}

func TestPyRepr(t *testing.T) {
	cases := []struct{ in, want string }{
		{"plain", "'plain'"},
		{"it's", `"it's"`},                      // has ' and no " -> double-quoted
		{`it's a "quote"`, `'it\'s a "quote"'`}, // both -> single, escape the '
		{"line\nbreak", `'line\nbreak'`},        // \n escaped, not literal
		{`back\slash`, `'back\\slash'`},         //
		{"*Runink CORE — page 1 of 21*", "'*Runink CORE — page 1 of 21*'"}, // em dash passes through
	}
	for _, c := range cases {
		if got := PyRepr(c.in); got != c.want {
			t.Errorf("PyRepr(%q) = %s, want %s", c.in, got, c.want)
		}
	}
}

func TestPyBracketSpaceBugIsANoOp(t *testing.T) {
	// mirror-audit.py's r'[[:space:]]+' does NOT collapse whitespace: Python
	// reads it as the class [ [ : s p a c e ] plus a literal ']'. Go's regexp
	// WOULD honour the POSIX class, so a naive port would quietly change the
	// --excluded output. This pins the Python behaviour.
	in := "Runink FACE reads your data,\nand drafts the fix — the order\tmoved."
	if got := pyBracketSpaceBug(in); got != in {
		t.Errorf("expected a no-op, got %q", got)
	}
	// It is not a no-op on the one shape it does match: a member of that class
	// followed by ']'.
	if got := pyBracketSpaceBug("a]b"); got != " b" {
		t.Errorf(`pyBracketSpaceBug("a]b") = %q, want " b"`, got)
	}
}

func TestFaceExtractDeck(t *testing.T) {
	front := "title: \"T\"\ndeck: |\n  One.\n\n  Two.\nregister:\n  - { page: 2, title: \"A\" }\n"
	got, ok := faceExtractDeck(front)
	if !ok {
		t.Fatal("no deck found")
	}
	if got != "  One.\n\n  Two.\n" {
		t.Errorf("deck = %q", got)
	}
	// A deck that runs to the end of the string does not match: the Python's
	// (?=^\S) lookahead cannot be satisfied there either.
	if _, ok := faceExtractDeck("deck: |\n  One.\n"); ok {
		t.Error("deck with no following unindented line should not match")
	}
	// A single-space line is not part of the block.
	if _, ok := faceExtractDeck("deck: |\n One.\nregister:\n"); ok {
		t.Error("a one-space line should not be accepted as deck body")
	}
}

func TestSplitFrontMatter(t *testing.T) {
	front, body, ok := SplitFrontMatter("---\na: 1\nb: 2\n---\n## Chapter\n\ntext\n")
	if !ok {
		t.Fatal("no front matter found")
	}
	if front != "a: 1\nb: 2\n" {
		t.Errorf("front = %q", front)
	}
	if body != "## Chapter\n\ntext\n" {
		t.Errorf("body = %q", body)
	}
	if _, _, ok := SplitFrontMatter("# No front matter\n"); ok {
		t.Error("expected no front matter")
	}
}
