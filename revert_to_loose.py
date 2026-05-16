import re

with open('layouts/shortcodes/mermaid.html', 'r') as f:
    content = f.read()

new_script_block = """<script type="module">
  import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
  mermaid.initialize({ startOnLoad: false, securityLevel: "loose", theme: "dark" });

  document.addEventListener("DOMContentLoaded", async () => {
    await mermaid.run({
      querySelector: '.mermaid'
    });
  });
</script>"""

# Replace existing <script type="module"> block
content_new = re.sub(r'<script type="module">.*?</script>', new_script_block, content, flags=re.DOTALL)

with open('layouts/shortcodes/mermaid.html', 'w') as f:
    f.write(content_new)
