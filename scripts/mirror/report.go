package mirror

// The lines each rebuilder prints when it finishes, kept in the package rather
// than in the cmd/ main so a test can check them without exec'ing a binary.
// Each reproduces its Python original exactly, mislabels included.

import "fmt"

// Report is the line rebuild-runink-core.py printed after writing.
func (s CoreStats) Report(path string) string {
	return fmt.Sprintf("rebuilt %s: %d lines, %d chapters, %d pages\n",
		path, s.Lines, s.Chapters, s.Pages)
}

// Report is the line rebuild-runink-face.py printed after writing. "bytes" is
// Python's len(new) — a count of CODE POINTS. See FaceStats.Chars.
func (s FaceStats) Report(path string) string {
	return fmt.Sprintf("wrote %s: %d bytes, %d chapters, %d page breaks, %d image line(s)\n",
		path, s.Chars, s.Chapters, s.PageBreaks, s.Images)
}

// DryRunReport is the line rebuild-runink-face.py --dry-run printed instead.
func (s FaceStats) DryRunReport() string {
	return fmt.Sprintf("would write %d bytes, %d lines, %d chapters, %d page breaks, %d image line(s)\n",
		s.Chars, s.Lines, s.Chapters, s.PageBreaks, s.Images)
}

// Report is the four lines rebuild-runink-pulse.py printed after writing.
func (s PulseStats) Report(path string) string {
	return fmt.Sprintf("rebuilt %s\n  chapters: %d   register entries: %d\n"+
		"  cover block: %d lines kept verbatim\n  contents block: %d entries\n",
		path, s.Chapters, s.RegisterCount, s.CoverLines, s.ContentsCount)
}

// AtlasReport is the line rebuild-runink-core-atlas.py printed after writing.
func AtlasReport(path string, pages, chapters int) string {
	return fmt.Sprintf("wrote %s (%d pages, %d chapters)\n", path, pages, chapters)
}
