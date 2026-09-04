//go:build ignore

// serve.go is the local Hugo dev-server wrapper for the runink.org site.
//
//	go run serve.go            # hugo server with drafts + fast render disabled
//	go run serve.go --css      # also run the Tailwind watcher (npx tailwindcss)
//	go run serve.go --help
//
// Private app endpoints (params.pulseAppURL / demoAppURL / coreAppURL) are NOT
// hardcoded here: this repo is public and CI injects those from repo secrets.
// Put them in a gitignored serve.env next to this file, one KEY=VALUE per line:
//
//	HUGO_PARAMS_PULSEAPPURL=https://…
//	HUGO_PARAMS_DEMOAPPURL=https://…
//	HUGO_PARAMS_COREAPPURL=https://…
//
// Anything already exported in the real environment wins over serve.env.
package main

import (
	"bufio"
	"flag"
	"fmt"
	"io"
	"os"
	"os/exec"
	"os/signal"
	"path/filepath"
	"strings"
	"sync"
	"syscall"
	"time"
)

const envFile = "serve.env"

// endpointKeys are the params the site templates read for the private apps.
var endpointKeys = []string{
	"HUGO_PARAMS_PULSEAPPURL",
	"HUGO_PARAMS_DEMOAPPURL",
	"HUGO_PARAMS_COREAPPURL",
}

const (
	cssIn  = "themes/hugo-saasify-theme/assets/css/main.css"
	cssOut = "static/css/style.css"
)

func main() {
	var (
		port     = flag.Int("port", 1313, "port for hugo server")
		bind     = flag.String("bind", "127.0.0.1", "interface for hugo server to bind to")
		drafts   = flag.Bool("drafts", true, "render draft content (hugo -D)")
		fast     = flag.Bool("fast-render", false, "leave hugo's fast render on (off by default, like the old serve.sh)")
		withCSS  = flag.Bool("css", false, "also run the Tailwind CSS watcher via npx")
		showHelp = flag.Bool("help", false, "show this help")
	)
	flag.Usage = usage
	flag.Parse()
	if *showHelp {
		usage()
		return
	}

	// Anchor on the site root so hugo.toml, serve.env and the theme resolve
	// regardless of how the command was invoked.
	root, err := repoRoot()
	if err != nil {
		fatal(err)
	}
	if err := os.Chdir(root); err != nil {
		fatal(err)
	}

	env, err := loadEnvFile(filepath.Join(root, envFile))
	if err != nil {
		fatal(err)
	}
	applyEnv(env)
	reportEndpoints()

	hugoArgs := []string{"server", "--bind", *bind, "--port", fmt.Sprint(*port)}
	if !*fast {
		hugoArgs = append(hugoArgs, "--disableFastRender")
	}
	if *drafts {
		hugoArgs = append(hugoArgs, "-D")
	}

	procs := []*proc{{name: "hugo", bin: "hugo", args: hugoArgs}}
	if *withCSS {
		procs = append(procs, &proc{
			name: "css",
			bin:  "npx",
			args: []string{"tailwindcss", "-i", cssIn, "-o", cssOut, "--watch"},
		})
	}

	os.Exit(run(procs))
}

func usage() {
	out := flag.CommandLine.Output()
	fmt.Fprintf(out, `serve.go - local Hugo dev server for the runink.org site.

Usage:
  go run serve.go [flags]

Flags:
`)
	flag.PrintDefaults()
	fmt.Fprintf(out, `
Endpoint params are read from the environment, falling back to a gitignored
%s file next to this script (KEY=VALUE per line):
  %s

Ctrl-C stops every child process.
`, envFile, strings.Join(endpointKeys, "\n  "))
}

// proc is one streamed child process.
type proc struct {
	name string
	bin  string
	args []string
	cmd  *exec.Cmd
}

// run starts every proc, streams their output live, and shuts them all down on
// the first exit or on SIGINT/SIGTERM. Returns the exit code to use.
func run(procs []*proc) int {
	var streams sync.WaitGroup
	type result struct {
		name string
		err  error
	}
	done := make(chan result, len(procs))
	started := make([]*proc, 0, len(procs))

	// The children get a pipe we never write to and never close, rather than
	// os.Stdin or the /dev/null exec would hand them: tailwindcss --watch
	// treats stdin EOF as "shut down", so an inherited /dev/null makes the CSS
	// watcher exit the instant it starts.
	stdinR, stdinW, err := os.Pipe()
	if err != nil {
		warn("stdin pipe: %v", err)
		return 1
	}
	defer stdinW.Close()

	for _, p := range procs {
		cmd := exec.Command(p.bin, p.args...)
		cmd.Stdin = stdinR
		// Own process group so a Ctrl-C in the terminal is delivered by us,
		// once, rather than racing the shell's own signal to the group.
		cmd.SysProcAttr = &syscall.SysProcAttr{Setpgid: true}

		stdout, err := cmd.StdoutPipe()
		if err != nil {
			warn("%s: %v", p.name, err)
			signalAll(started, syscall.SIGTERM)
			return 1
		}
		stderr, err := cmd.StderrPipe()
		if err != nil {
			warn("%s: %v", p.name, err)
			signalAll(started, syscall.SIGTERM)
			return 1
		}
		if err := cmd.Start(); err != nil {
			warn("cannot start %s (%s): %v", p.name, p.bin, err)
			signalAll(started, syscall.SIGTERM)
			return 1
		}
		p.cmd = cmd
		started = append(started, p)

		streams.Add(2)
		go stream(&streams, p.name, stdout, os.Stdout)
		go stream(&streams, p.name, stderr, os.Stderr)

		go func(p *proc) {
			done <- result{p.name, p.cmd.Wait()}
		}(p)
	}

	sigs := make(chan os.Signal, 1)
	signal.Notify(sigs, syscall.SIGINT, syscall.SIGTERM)
	defer signal.Stop(sigs)

	code, outstanding := 0, len(started)
	select {
	case sig := <-sigs:
		fmt.Fprintf(os.Stderr, "\n[serve] %s - stopping\n", sig)
	case r := <-done:
		outstanding--
		if r.err != nil {
			warn("%s exited: %v", r.name, r.err)
			code = 1
		} else {
			fmt.Fprintf(os.Stderr, "[serve] %s exited\n", r.name)
		}
	}

	signalAll(started, syscall.SIGTERM)
	// Reap through the same done channel the Wait goroutines already own -
	// calling cmd.Wait twice would race and error.
	timeout := time.After(5 * time.Second)
	for outstanding > 0 {
		select {
		case <-done:
			outstanding--
		case <-timeout:
			warn("children did not stop in 5s - sending SIGKILL")
			signalAll(started, syscall.SIGKILL)
			timeout = nil // fall through to a blocking drain
		}
	}

	streams.Wait()
	return code
}

// signalAll sends sig to each child's process group, so hugo's own children die
// with it. A negative pid targets the group created by Setpgid.
func signalAll(procs []*proc, sig syscall.Signal) {
	for _, p := range procs {
		if p.cmd == nil || p.cmd.Process == nil {
			continue
		}
		_ = syscall.Kill(-p.cmd.Process.Pid, sig)
	}
}

// stream copies child output line by line as it arrives - no buffering until
// exit, so hugo's "Web Server is available at ..." shows up immediately.
func stream(wg *sync.WaitGroup, name string, r io.Reader, w io.Writer) {
	defer wg.Done()
	sc := bufio.NewScanner(r)
	sc.Buffer(make([]byte, 0, 64*1024), 1024*1024)
	for sc.Scan() {
		fmt.Fprintf(w, "[%s] %s\n", name, sc.Text())
	}
}

// repoRoot returns the site root. `go run` compiles into a temp dir, so
// os.Args[0] says nothing about where the source lives; the working directory
// is where the command was invoked, and hugo.toml is what identifies it.
func repoRoot() (string, error) {
	wd, err := os.Getwd()
	if err != nil {
		return "", err
	}
	if _, err := os.Stat(filepath.Join(wd, "hugo.toml")); err != nil {
		return "", fmt.Errorf("hugo.toml not found in %s - run this from the site repo root", wd)
	}
	return wd, nil
}

// loadEnvFile parses a trivial KEY=VALUE file. A missing file is not an error.
func loadEnvFile(path string) (map[string]string, error) {
	env := map[string]string{}
	f, err := os.Open(path)
	if err != nil {
		if os.IsNotExist(err) {
			return env, nil
		}
		return nil, err
	}
	defer f.Close()

	sc := bufio.NewScanner(f)
	for line := 1; sc.Scan(); line++ {
		text := strings.TrimSpace(sc.Text())
		if text == "" || strings.HasPrefix(text, "#") {
			continue
		}
		text = strings.TrimPrefix(text, "export ")
		key, value, ok := strings.Cut(text, "=")
		if !ok {
			return nil, fmt.Errorf("%s:%d: expected KEY=VALUE, got %q", path, line, text)
		}
		env[strings.TrimSpace(key)] = strings.Trim(strings.TrimSpace(value), `"'`)
	}
	return env, sc.Err()
}

// applyEnv sets the file's values only where the real environment is silent,
// so `HUGO_PARAMS_COREAPPURL=... go run serve.go` still overrides.
func applyEnv(env map[string]string) {
	for k, v := range env {
		if _, set := os.LookupEnv(k); set {
			continue
		}
		if err := os.Setenv(k, v); err != nil {
			warn("setenv %s: %v", k, err)
		}
	}
}

func reportEndpoints() {
	fmt.Fprintln(os.Stderr, "[serve] starting Hugo with local development endpoints injected")
	for _, k := range endpointKeys {
		if v := os.Getenv(k); v != "" {
			fmt.Fprintf(os.Stderr, "[serve]   %s=%s\n", k, v)
		} else {
			warn("%s is unset - the site will fall back to the hugo.toml default (add it to %s)", k, envFile)
		}
	}
}

func warn(format string, a ...any) {
	fmt.Fprintf(os.Stderr, "[serve] "+format+"\n", a...)
}

func fatal(err error) {
	fmt.Fprintf(os.Stderr, "[serve] %v\n", err)
	os.Exit(1)
}
