//go:build ignore

// linkcheck.go verifies that every internal link in the built site actually
// resolves — both halves of it.
//
//	go run linkcheck.go            # checks ./public
//	go run linkcheck.go docs       # checks ./docs (what CI builds)
//	go run linkcheck.go --all      # also report links outside the site chrome
//
// # Why this exists
//
// A link whose page is fine but whose "#fragment" points at no element is
// invisible to everything: the anchor is well-formed, the server returns 200,
// the browser scrolls nowhere and says nothing. Hugo does not resolve
// fragments, so the build stays green. Four of the seven header links on
// runink.org were dead this way for weeks — /#painkiller and /#use-cases named
// ids that no longer existed on the home page, /#contact named one that never
// did, and "Check it out" pointed at /demo/, a page deleted in July.
//
// So this checks the two things a browser checks and a build does not:
//
//  1. the path exists in the rendered output, and
//  2. if the link carries a #fragment, the target page really contains an
//     element with that id.
//
// # Scope
//
// By default it checks the links in the site chrome — the header nav, its
// dropdowns, the header/footer buttons and the language switcher — on every
// rendered page, in every language. Those are site-wide navigation: one wrong
// entry in hugo.toml breaks the same link on all 692 pages, and nobody notices
// because nothing errors. Body copy is checked with --all, which is useful to
// run by hand but is not what gates a deploy: an editorial typo in one blog
// post should not block the whole site from shipping.
//
// Nothing here reaches the network. External links are listed, never fetched.
package main

import (
	"fmt"
	"html"
	"net/url"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
)

// The site chrome is everything the shared partials emit: <head> (canonical,
// hreflang alternates, preloads) and the header nav down to </header>, plus the
// footer block when one is rendered. Everything in between is authored body
// copy. Matching on tags rather than on class names keeps this working under
// --minify, which strips the quotes off attributes.
const (
	chromeClose = `</header>`
	footerOpen  = `<footer`
	footerClose = `</footer>`
)

// hrefRe matches href="…", href='…' and the bare href=… that --minify emits.
var hrefRe = regexp.MustCompile(`href=("[^"]*"|'[^']*'|[^\s>]+)`)

// idRe matches id="…", id='…' and the bare id=… that --minify emits.
var idRe = regexp.MustCompile(`id=("[^"]*"|'[^']*'|[^\s>]+)`)

type problem struct {
	page   string // page the bad link was found on
	link   string // the link as written
	reason string
}

func main() {
	root := "public"
	all := false
	for _, arg := range os.Args[1:] {
		switch arg {
		case "--all":
			all = true
		case "-h", "--help":
			fmt.Println("usage: go run linkcheck.go [--all] [built-site-dir]")
			return
		default:
			root = arg
		}
	}

	info, err := os.Stat(root)
	if err != nil || !info.IsDir() {
		fatalf("no built site at %q — run `hugo` first, or pass the output dir", root)
	}

	pages, canonical, files, err := index(root)
	if err != nil {
		fatalf("indexing %s: %v", root, err)
	}
	if len(canonical) == 0 {
		// An empty tree is the failure mode of a build that ran in the wrong
		// directory: exit 0, no output, nothing rendered. Never call that a pass.
		fatalf("%s contains no HTML pages — the build produced nothing", root)
	}

	ids := map[string]map[string]bool{} // page url -> set of element ids
	var problems []problem
	checked := 0

	for _, pageURL := range canonical {
		path := pages[pageURL]
		body, err := os.ReadFile(path)
		if err != nil {
			fatalf("reading %s: %v", path, err)
		}
		html := string(body)
		region := html
		if !all {
			region = chrome(html)
		}
		for _, link := range hrefs(region) {
			target, frag, ok := internal(link)
			if !ok {
				continue
			}
			checked++
			if target == "" {
				target = pageURL // a bare "#id" means this page
			}
			targetPage, isPage := pages[target]
			if !isPage {
				if files[target] {
					continue // a real asset: css, image, pdf
				}
				problems = append(problems, problem{pageURL, link, "no such page in the built site"})
				continue
			}
			if frag == "" {
				continue
			}
			if _, seen := ids[target]; !seen {
				b, err := os.ReadFile(targetPage)
				if err != nil {
					fatalf("reading %s: %v", targetPage, err)
				}
				ids[target] = elementIDs(string(b))
			}
			if !ids[target][frag] {
				problems = append(problems, problem{pageURL, link,
					fmt.Sprintf("%s renders no element with id %q", target, frag)})
			}
		}
	}

	scope := "site chrome (header, footer, language switcher)"
	if all {
		scope = "every link, chrome and body copy"
	}
	fmt.Printf("linkcheck: %d pages, %d internal links checked — %s\n", len(canonical), checked, scope)

	if len(problems) == 0 {
		fmt.Println("linkcheck: OK")
		return
	}

	// One line per distinct breakage, with a sample page and how often it
	// occurs — a bad menu entry appears in the desktop nav and again in the
	// mobile one, on every page, and would otherwise bury everything else.
	type agg struct {
		reason string
		sample string
		count  int
	}
	byLink := map[string]*agg{}
	for _, p := range problems {
		a, ok := byLink[p.link]
		if !ok {
			a = &agg{reason: p.reason, sample: p.page}
			byLink[p.link] = a
		}
		a.count++
	}
	links := make([]string, 0, len(byLink))
	for l := range byLink {
		links = append(links, l)
	}
	sort.Strings(links)

	fmt.Fprintf(os.Stderr, "\nlinkcheck: %d broken link(s):\n\n", len(byLink))
	for _, l := range links {
		a := byLink[l]
		fmt.Fprintf(os.Stderr, "  %s\n      %s\n      %d occurrence(s), e.g. on %s\n\n", l, a.reason, a.count, a.sample)
	}
	fmt.Fprintln(os.Stderr, "A link like this returns 200 and scrolls nowhere, so nothing else will")
	fmt.Fprintln(os.Stderr, "report it. Fix the target, or point the link at a page that exists.")
	os.Exit(1)
}

// index maps every URL path the built site serves to the file behind it.
//
// pages is the lookup table and holds both forms of a directory URL (/blog/ and
// /blog) because the site links to both. canonical is the sorted, de-duplicated
// list of pages to walk — using pages for that would read every file twice and
// double-count every breakage. files records the non-page assets (css, images,
// fonts, pdfs) so a link to one is not reported as a missing page.
func index(root string) (pages map[string]string, canonical []string, files map[string]bool, err error) {
	pages = map[string]string{}
	files = map[string]bool{}
	err = filepath.WalkDir(root, func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if d.IsDir() {
			return nil
		}
		rel, err := filepath.Rel(root, path)
		if err != nil {
			return err
		}
		rel = filepath.ToSlash(rel)
		switch {
		case rel == "index.html":
			pages["/"] = path
			canonical = append(canonical, "/")
		case strings.HasSuffix(rel, "/index.html"):
			dir := "/" + strings.TrimSuffix(rel, "index.html")
			pages[dir] = path
			pages[strings.TrimSuffix(dir, "/")] = path
			canonical = append(canonical, dir)
		case strings.HasSuffix(rel, ".html"):
			pages["/"+rel] = path
			canonical = append(canonical, "/"+rel)
		default:
			files["/"+rel] = true
		}
		return nil
	})
	sort.Strings(canonical)
	return pages, canonical, files, err
}

// chrome returns the parts of a rendered page that come from the shared
// partials rather than from an author's markdown.
func chrome(html string) string {
	i := strings.Index(html, chromeClose)
	if i < 0 {
		// No header at all: this is one of Hugo's alias stubs, whose entire
		// body is a redirect to another page. Check the whole thing — a stub
		// pointing at a path that no longer renders is exactly this bug class.
		return html
	}
	var b strings.Builder
	b.WriteString(html[:i+len(chromeClose)])
	if j := strings.Index(html, footerOpen); j >= 0 {
		if k := strings.Index(html[j:], footerClose); k >= 0 {
			b.WriteString(html[j : j+k])
		}
	}
	return b.String()
}

// hrefs pulls every href out of a region, decoded the way a browser decodes it.
//
// THE UNESCAPE IS LOAD-BEARING. This reads the HTML with a regex, so what comes
// back is the raw attribute text — entities and all. Hugo writes a "+" in a URL
// attribute as "&#43;", and that entity contains a "#", so internal() split the
// link there and reported a fragment of "43;Chain+Logistics#contact-form" on a
// link that is perfectly good. Worse than the noise: the same bug hides a real
// dead fragment behind a bogus one, in the checker whose entire job is to catch
// dead fragments. A browser decodes the attribute before parsing the URL, so
// this does too.
func hrefs(htmlText string) []string {
	var out []string
	for _, m := range hrefRe.FindAllStringSubmatch(htmlText, -1) {
		out = append(out, html.UnescapeString(unquote(m[1])))
	}
	return out
}

func elementIDs(html string) map[string]bool {
	out := map[string]bool{}
	for _, m := range idRe.FindAllStringSubmatch(html, -1) {
		if v := unquote(m[1]); v != "" {
			out[v] = true
		}
	}
	// name="…" on an <a> is still a valid scroll target in every browser.
	for _, m := range regexp.MustCompile(`<a[^>]*\sname=("[^"]*"|'[^']*'|[^\s>]+)`).FindAllStringSubmatch(html, -1) {
		if v := unquote(m[1]); v != "" {
			out[v] = true
		}
	}
	return out
}

func unquote(s string) string {
	if len(s) >= 2 && (s[0] == '"' || s[0] == '\'') && s[len(s)-1] == s[0] {
		return s[1 : len(s)-1]
	}
	return s
}

// internal splits a link into a site-absolute path and a fragment, reporting
// false for anything this checker does not own: other hosts, mailto:, tel:,
// javascript:, data: and relative paths (the site emits absolute ones).
func internal(link string) (path, frag string, ok bool) {
	link = strings.TrimSpace(link)
	if link == "" || link == "#" {
		return "", "", false
	}
	// runink.org's own absolute URLs are ours; every other scheme or host is not.
	for _, self := range []string{"https://runink.org", "http://runink.org"} {
		if strings.HasPrefix(link, self) {
			link = strings.TrimPrefix(link, self)
			if link == "" {
				link = "/"
			}
		}
	}
	if strings.Contains(link, "://") || strings.HasPrefix(link, "//") {
		return "", "", false
	}
	for _, scheme := range []string{"mailto:", "tel:", "javascript:", "data:"} {
		if strings.HasPrefix(link, scheme) {
			return "", "", false
		}
	}
	if !strings.HasPrefix(link, "/") && !strings.HasPrefix(link, "#") {
		return "", "", false
	}
	if i := strings.Index(link, "#"); i >= 0 {
		path, frag = link[:i], link[i+1:]
	} else {
		path = link
	}
	if i := strings.Index(path, "?"); i >= 0 {
		path = path[:i]
	}
	// Hugo percent-encodes non-ASCII in canonical URLs (…/automação-logística/
	// is emitted as …/automa%C3%A7%C3%A3o-log%C3%ADstica/) but writes the
	// directory to disk decoded. Compare decoded, or every accented Portuguese
	// taxonomy page reads as missing.
	if decoded, err := url.PathUnescape(path); err == nil {
		path = decoded
	}
	return path, frag, true
}

func fatalf(format string, args ...any) {
	fmt.Fprintf(os.Stderr, "linkcheck: "+format+"\n", args...)
	os.Exit(1)
}
