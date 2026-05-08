mkdir -p test-hugo-site/layouts
cat << 'INNER_EOF' > test-hugo-site/config.toml
baseURL = "http://example.org/"
languageCode = "en-us"
title = "My New Hugo Site"
INNER_EOF
cat << 'INNER_EOF' > test-hugo-site/layouts/index.html
<!DOCTYPE html>
<html>
<body>
{{ $link := "javascript:alert(1)" }}
<a id="relURL" href="{{ $link | relURL }}">relURL</a>
<a id="safeURL" href="{{ $link | safeURL }}">safeURL</a>
<a id="plain" href="{{ $link }}">plain</a>
</body>
</html>
INNER_EOF
cd test-hugo-site
pnpm exec hugo
cat public/index.html
cd ..
