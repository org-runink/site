with open('layouts/shortcodes/mermaid.html', 'r') as f:
    content = f.read()

content = content.replace('securityLevel: "loose"', 'securityLevel: "strict"')

with open('layouts/shortcodes/mermaid.html', 'w') as f:
    f.write(content)
