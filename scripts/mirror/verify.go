package mirror

// Post-sync structural check on all four print mirrors.
// Ported from scripts/mirror/mirror-verify.py.
//
// Audit answers "do the words match". This answers "is it still a document" —
// the failure mode a paragraph-level word comparison cannot see, because a
// rebuild that duplicates a chapter or loses the cover still passes a
// one-directional substring test.

import (
	"fmt"
	"io"
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

// VerifyNames is the paper order mirror-verify.py reported in.
var VerifyNames = []string{"runink-face", "runink-core", "runink-pulse", "runink-core-atlas"}

// DefaultBackupDir is where mirror-verify.py looked for a pre-sync copy to
// compare sizes against. It is ~/.cache, not the repo and not /tmp.
func DefaultBackupDir() string {
	home, err := os.UserHomeDir()
	if err != nil {
		return ".cache/rk-mirror-backup"
	}
	return filepath.Join(home, ".cache", "rk-mirror-backup")
}

var (
	topH1Re     = regexp.MustCompile(`\A\s*#\s+\S`)
	firstH2Re   = regexp.MustCompile(`(?m)^##\s+`)
	h2TitleRe   = regexp.MustCompile(`(?m)^##\s+(.+?)\s*$`)
	figureLineR = regexp.MustCompile(`(?m)^!\[.*$`)
)

// Verify runs the structural check over every paper and writes the report to
// w. It returns the Python's exit status: 1 if any paper had a problem.
func Verify(w io.Writer, siteDir, mirrorDir, backupDir string, names []string) (int, error) {
	fails := 0
	for _, name := range names {
		mp := filepath.Join(mirrorDir, name+"-whitepaper.md")
		sp := filepath.Join(siteDir, name+".md")
		mirRaw, err := os.ReadFile(mp)
		if err != nil {
			return 0, err
		}
		srcRaw, err := os.ReadFile(sp)
		if err != nil {
			return 0, err
		}
		mir := string(mirRaw)
		body := string(srcRaw)
		if _, b, ok := SplitFrontMatter(body); ok {
			body = b
		}
		var problems []string

		// 1. the cover survived: an H1 in the first few lines
		if !topH1Re.MatchString(mir) {
			problems = append(problems, "no H1 at the top — cover block lost")
		}

		// 2. every site chapter appears exactly once as a heading — or, for a
		//    chapter the mirror folds into its cover, once in the cover block
		//    as running text. runink-core-atlas folds its whole first chapter
		//    that way, which the shipped checker names in its own header as a
		//    known, legitimate difference; demanding a heading for it would
		//    push a correct mirror into failing, and the only way to satisfy
		//    it would be to unfold the cover. The words must still be there:
		//    the fold is accepted only when the cover itself carries the
		//    chapter's title.
		coverSquash := ""
		if loc := firstH2Re.FindStringIndex(mir); loc != nil {
			coverSquash = Squash(mir[:loc[0]])
		}
		siteCh := captures(h2TitleRe, body)
		mirCh := captures(h2TitleRe, mir)
		for _, t := range siteCh {
			// the mirror may prefix "Page N — "; match on the squashed tail
			k := Squash(t)
			hits := 0
			for _, h := range mirCh {
				if strings.HasSuffix(Squash(h), k) {
					hits++
				}
			}
			switch {
			case hits == 0:
				if strings.Contains(coverSquash, k) {
					continue // folded into the cover, not lost
				}
				problems = append(problems, fmt.Sprintf("chapter heading missing: %q", t))
			case hits > 1:
				problems = append(problems, fmt.Sprintf("chapter heading appears %dx: %q", hits, t))
			}
		}

		// 3. no chapter body duplicated (the folded-cover hazard)
		seen := map[string]bool{}
		var dupes []string
		for _, p := range paraSplit.Split(mir, -1) {
			p = strings.TrimSpace(p)
			k := Squash(p)
			if len(k) <= 120 {
				continue
			}
			if seen[k] {
				dupes = append(dupes, Truncate(p, 70))
			}
			seen[k] = true
		}
		if len(dupes) > 0 {
			problems = append(problems, fmt.Sprintf(
				"%d substantial paragraph(s) appear twice, e.g. %s", len(dupes), PyRepr(dupes[0])))
		}

		// 4. the figure line survived, byte-identical to the source's
		figS := figureLineR.FindAllString(body, -1)
		figM := figureLineR.FindAllString(mir, -1)
		if len(figS) > 0 && !slicesEqual(figS, figM) {
			problems = append(problems, fmt.Sprintf(
				"figure line differs: source %s vs mirror %s", pyList(figS), pyList(figM)))
		}

		// 5. it did not shrink to nothing / grow absurdly vs the backup
		note := "no backup to compare"
		if bi, err := os.Stat(filepath.Join(backupDir, name+"-whitepaper.md")); err == nil {
			mi, err := os.Stat(mp)
			if err != nil {
				return 0, err
			}
			was, now := int(bi.Size()), int(mi.Size())
			den := was
			if den < 1 {
				den = 1
			}
			// Python's // floors; Go's / truncates. Every mirror that shrank
			// has a negative numerator here, so the two disagree on three of
			// the four papers.
			pct := FloorDiv((now-was)*100, den)
			note = fmt.Sprintf("%d -> %d bytes (%+d%%)", was, now, pct)
			if float64(now) < float64(was)*0.4 {
				problems = append(problems, "lost more than 60% of the file: "+note)
			}
		}

		status := "ok  "
		if len(problems) > 0 {
			status = "FAIL"
			fails++
		}
		fmt.Fprintf(w, "%s %-18s %d chapters, %s\n", status, name, len(siteCh), note)
		for _, p := range problems {
			fmt.Fprintf(w, "       - %s\n", p)
		}
	}
	if fails > 0 {
		return 1, nil
	}
	return 0, nil
}

func captures(re *regexp.Regexp, s string) []string {
	out := []string{}
	for _, m := range re.FindAllStringSubmatch(s, -1) {
		out = append(out, m[1])
	}
	return out
}

func slicesEqual(a, b []string) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}

// pyList renders []string the way Python prints a list of str inside an
// f-string: repr of each element, ", " between, in square brackets.
func pyList(xs []string) string {
	parts := make([]string, len(xs))
	for i, x := range xs {
		parts[i] = PyRepr(x)
	}
	return "[" + strings.Join(parts, ", ") + "]"
}
