package mirror

// Golden tests against output produced by the Python these tools replaced.
//
// # What the goldens are, and what they are not
//
// testdata/site/ holds four synthetic papers — one per paper CONVENTION, not
// the real whitepapers, which live under content/blog/whitepapers/ and whose
// mirrors live in ../pitch-decks/, a sibling directory that is deliberately
// not part of this repository. testdata/mirror-drift/ holds a deliberately
// stale mirror for each, testdata/mirror-clean/ holds what the PYTHON produced
// from those two, and testdata/golden/ holds what the Python PRINTED.
//
// Every file under testdata/golden/ and testdata/mirror-clean/ was generated
// by running the Python scripts, before they were deleted. Nothing in them was
// written by hand or adjusted to match the Go. If one of these ever has to
// change, that is a behaviour change and it needs saying out loud in the
// commit that makes it.
//
// # What these do NOT establish
//
//   - Not that the port is right on the REAL papers. That was checked
//     separately and by hand — rebuilding all four real mirrors with the
//     Python and with the Go from the same inputs and diffing the results byte
//     for byte, twice: once from the committed mirrors and once from the
//     pre-sync September copies in ~/.cache/rk-mirror-backup. It cannot be
//     re-run here, because the real mirrors are not in this repository. The
//     live-file half of that is TestLiveMirrorsAreIdempotent below, which
//     skips when the sibling directory is absent — which is always, in CI.
//   - Not that the Python was right. These pin the port to the Python's
//     behaviour, defects included. Two known defects are pinned on purpose and
//     named where they live: the [[:space:]] no-op in audit.go and the
//     code-points-labelled-bytes count in rebuild_face.go.
//   - Not that the mirrors on anyone's disk are currently faithful. That is
//     what mirror-audit and mirror-verify are for, and neither runs in CI
//     because a CI checkout has nothing to compare against.

import (
	"bytes"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"testing"
)

const (
	tdSite   = "testdata/site"
	tdDrift  = "testdata/mirror-drift"
	tdClean  = "testdata/mirror-clean"
	tdBackup = "testdata/backup"
	tdGolden = "testdata/golden"
)

func read(t *testing.T, path string) string {
	t.Helper()
	b, err := os.ReadFile(path)
	if err != nil {
		t.Fatalf("read %s: %v", path, err)
	}
	return string(b)
}

func site(t *testing.T, name string) string {
	return read(t, filepath.Join(tdSite, name+".md"))
}

func mirrorFile(t *testing.T, dir, name string) string {
	return read(t, filepath.Join(dir, name+"-whitepaper.md"))
}

// diffLine reports the first line at which two strings differ, so a failure
// names what broke instead of dumping two documents.
func diffLine(got, want string) string {
	g, w := strings.Split(got, "\n"), strings.Split(want, "\n")
	for i := 0; i < len(g) && i < len(w); i++ {
		if g[i] != w[i] {
			return "line " + itoa(i+1) + ":\n   got: " + quote(g[i]) + "\n  want: " + quote(w[i])
		}
	}
	if len(g) != len(w) {
		return "line counts differ: got " + itoa(len(g)) + ", want " + itoa(len(w))
	}
	return "identical by line but not by bytes (trailing newline?): got " +
		itoa(len(got)) + " bytes, want " + itoa(len(want)) + " bytes"
}

func itoa(n int) string     { return strconv.Itoa(n) }
func quote(s string) string { return PyRepr(s) }

// --------------------------------------------------------------- rebuilders

func TestRebuildMatchesPythonGolden(t *testing.T) {
	for _, tc := range []struct {
		name   string
		build  func(site, old string) (string, string, error)
		stdout string
	}{
		{"runink-core", func(s, o string) (string, string, error) {
			out, st, err := BuildCore(s, o)
			return out, st.Report("MIRRORDIR/runink-core-whitepaper.md"), err
		}, "rebuild-core.stdout"},
		{"runink-face", func(s, o string) (string, string, error) {
			out, st, err := BuildFace(s, o)
			return out, st.Report("MIRRORDIR/runink-face-whitepaper.md"), err
		}, "rebuild-face.stdout"},
		{"runink-pulse", func(s, o string) (string, string, error) {
			out, st, err := BuildPulse(s, o)
			return out, st.Report("MIRRORDIR/runink-pulse-whitepaper.md"), err
		}, "rebuild-pulse.stdout"},
		{"runink-core-atlas", func(s, o string) (string, string, error) {
			out, pages, chapters, err := BuildAtlas(s, o)
			return out, AtlasReport("MIRRORDIR/runink-core-atlas-whitepaper.md", pages, chapters), err
		}, "rebuild-core-atlas.stdout"},
	} {
		t.Run(tc.name, func(t *testing.T) {
			got, report, err := tc.build(site(t, tc.name), mirrorFile(t, tdDrift, tc.name))
			if err != nil {
				t.Fatalf("rebuild failed: %v", err)
			}
			want := mirrorFile(t, tdClean, tc.name)
			if got != want {
				t.Errorf("rebuilt mirror differs from the Python's output at %s", diffLine(got, want))
			}
			if wantReport := read(t, filepath.Join(tdGolden, tc.stdout)); report != wantReport {
				t.Errorf("report line differs:\n   got: %q\n  want: %q", report, wantReport)
			}
		})
	}
}

// TestRebuildIsIdempotent pins the claim scripts/mirror/README.md makes about
// all four: re-running one reproduces its own output byte for byte. It is the
// property that lets a developer run a rebuild without first checking whether
// it has already been run.
func TestRebuildIsIdempotent(t *testing.T) {
	for _, name := range []string{"runink-core", "runink-face", "runink-pulse", "runink-core-atlas"} {
		t.Run(name, func(t *testing.T) {
			clean := mirrorFile(t, tdClean, name)
			got, err := rebuildByName(name, site(t, name), clean)
			if err != nil {
				t.Fatalf("rebuild failed: %v", err)
			}
			if got != clean {
				t.Errorf("not idempotent: rebuilding a clean mirror changed it at %s",
					diffLine(got, clean))
			}
		})
	}
}

func rebuildByName(name, siteText, old string) (string, error) {
	switch name {
	case "runink-core":
		out, _, err := BuildCore(siteText, old)
		return out, err
	case "runink-face":
		out, _, err := BuildFace(siteText, old)
		return out, err
	case "runink-pulse":
		out, _, err := BuildPulse(siteText, old)
		return out, err
	case "runink-core-atlas":
		out, _, _, err := BuildAtlas(siteText, old)
		return out, err
	}
	panic("unknown paper " + name)
}

// ------------------------------------------------------------------- audit

func TestAuditMatchesPythonGolden(t *testing.T) {
	// Slices, not maps: ranging a Go map is randomised, which would shuffle
	// the subtest order from run to run and make a failure list harder to
	// compare against the last one. Nothing here builds OUTPUT from a map —
	// that would be the version of this trap that actually corrupts a golden.
	dirs := []struct{ label, dir string }{
		{"decks", tdClean},
		{"decks-drift", tdDrift},
	}
	modes := []struct {
		tag  string
		mode AuditMode
	}{
		{"summary", AuditSummary},
		{"missing", AuditMissing},
		{"orphan", AuditOrphan},
		{"excluded", AuditExcluded},
	}
	for _, d := range dirs {
		label, dir := d.label, d.dir
		for _, name := range []string{"runink-face", "runink-core", "runink-pulse", "runink-core-atlas"} {
			for _, mm := range modes {
				tag, mode := mm.tag, mm.mode
				t.Run(label+"/"+name+"/"+tag, func(t *testing.T) {
					var buf bytes.Buffer
					if _, err := Audit(&buf, tdSite, dir, name, mode); err != nil {
						t.Fatalf("audit failed: %v", err)
					}
					want := read(t, filepath.Join(tdGolden, "audit-"+label+"-"+name+"-"+tag+".txt"))
					if buf.String() != want {
						t.Errorf("audit output differs from the Python's at %s",
							diffLine(buf.String(), want))
					}
				})
			}
		}
	}
}

// TestAuditExitCode pins the status the shell sees: 1 when a paper has drifted
// in EITHER direction, 0 when it has not.
func TestAuditExitCode(t *testing.T) {
	var buf bytes.Buffer
	code, err := Audit(&buf, tdSite, tdDrift, "runink-core", AuditSummary)
	if err != nil {
		t.Fatal(err)
	}
	if code != 1 {
		t.Errorf("drifted mirror: exit %d, want 1", code)
	}
	buf.Reset()
	code, err = Audit(&buf, tdSite, tdClean, "runink-core", AuditSummary)
	if err != nil {
		t.Fatal(err)
	}
	if code != 0 {
		t.Errorf("clean mirror: exit %d, want 0", code)
	}
}

// ------------------------------------------------------------------ verify

func TestVerifyMatchesPythonGolden(t *testing.T) {
	names := []string{"runink-face", "runink-core", "runink-pulse", "runink-core-atlas"}
	for _, tc := range []struct {
		golden          string
		mirrorDir, back string
		wantCode        int
	}{
		// No backup directory: every paper reports "no backup to compare".
		{"verify-decks.txt", tdClean, "testdata/no-such-backup-dir", 0},
		// A stale mirror: missing chapters and a lost figure line.
		{"verify-decks-drift.txt", tdDrift, "testdata/no-such-backup-dir", 1},
		// Backups present. This is the case that exercises Python's floor
		// division: two of the three percentages here differ from what Go's
		// truncating / would print.
		{"verify-backup.txt", tdClean, tdBackup, 1},
	} {
		t.Run(tc.golden, func(t *testing.T) {
			var buf bytes.Buffer
			code, err := Verify(&buf, tdSite, tc.mirrorDir, tc.back, names)
			if err != nil {
				t.Fatalf("verify failed: %v", err)
			}
			want := read(t, filepath.Join(tdGolden, tc.golden))
			if buf.String() != want {
				t.Errorf("verify output differs from the Python's at %s", diffLine(buf.String(), want))
			}
			if code != tc.wantCode {
				t.Errorf("exit %d, want %d", code, tc.wantCode)
			}
		})
	}
}

// ------------------------------------------------------- the real documents

// TestLiveMirrorsAreIdempotent runs the rebuilders against the REAL papers and
// the REAL mirrors, and checks that each reproduces the mirror already on
// disk. It is the only test here that touches the actual documents.
//
// It skips unless ../pitch-decks exists, which is the same condition under
// which check-whitepaper-mirrors.sh can run: that directory is a sibling on a
// developer's machine and is not part of this repository, so in CI this test
// always skips. A green CI therefore says nothing whatsoever about the live
// mirrors.
//
// A failure here does NOT necessarily mean the Go is wrong. It means the
// mirror on disk is not what the rebuilder would write — which is exactly the
// drift this tooling exists to find, and is the expected result if somebody
// edited a paper and did not re-run its rebuild.
func TestLiveMirrorsAreIdempotent(t *testing.T) {
	const liveSite = "../../content/blog/whitepapers"
	liveMirror := os.Getenv("MIRROR_DIR")
	if liveMirror == "" {
		liveMirror = "../../../pitch-decks"
	}
	if _, err := os.Stat(liveMirror); err != nil {
		t.Skipf("no mirror directory at %s: %v", liveMirror, err)
	}
	for _, name := range []string{"runink-core", "runink-face", "runink-pulse", "runink-core-atlas"} {
		t.Run(name, func(t *testing.T) {
			s, err := os.ReadFile(filepath.Join(liveSite, name+".md"))
			if err != nil {
				t.Skipf("no site source: %v", err)
			}
			m, err := os.ReadFile(filepath.Join(liveMirror, name+"-whitepaper.md"))
			if err != nil {
				t.Skipf("no mirror: %v", err)
			}
			got, err := rebuildByName(name, string(s), string(m))
			if err != nil {
				t.Fatalf("rebuild failed: %v", err)
			}
			if got != string(m) {
				t.Errorf("the mirror on disk is not what a rebuild would write, at %s\n"+
					"(run the rebuild for this paper, then re-read its cover by eye)",
					diffLine(got, string(m)))
			}
		})
	}
}
