cat << 'INNER' > layouts/shortcodes/test-url.html
{{ $url := .Get 0 }}
{{ $parsed := urls.Parse $url }}
Scheme: {{ $parsed.Scheme }}
INNER
cat << 'INNER' > content/test_parse.md
---
title: "Test Parse"
---
{{< test-url "javascript:alert(1)" >}}
{{< test-url "https://example.com" >}}
{{< test-url "/relative/path" >}}
INNER
hugo --buildDrafts
cat public/test_parse/index.html
