import re

html_path = "/home/me/Documents/companion/demo/index.html"
css_path = "/home/me/Documents/companion/demo/style.css"

# Update HTML
with open(html_path, "r") as f:
    html = f.read()

# Replace inline grid style with class
html = html.replace(
    '<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-bottom: 24px;">',
    '<div class="dashboard-top-grid">'
)

# Update Impact Potential Card
html = html.replace(
    '<!-- Impact Potential Card -->\n              <div class="flutter-card">',
    '<!-- Impact Potential Card -->\n              <div class="flutter-card" style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">'
)

# Update Provider Metasearch card to push WhatsApp button to bottom
html = html.replace(
    '<div style="border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 8px; display:flex; flex-direction:column; gap:6px;">',
    '<div style="border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 8px; display:flex; flex-direction:column; gap:6px; margin-top:auto;">'
)

# Update Twin Contact Lists card to take full height
html = html.replace(
    '<!-- Contacts quick view section on Twins page -->\n            <div class="flutter-card" style="display:flex; flex-direction:column; gap:10px;">',
    '<!-- Contacts quick view section on Twins page -->\n            <div class="flutter-card" style="display:flex; flex-direction:column; gap:10px; height:100%;">'
)

with open(html_path, "w") as f:
    f.write(html)

# Update CSS
with open(css_path, "r") as f:
    css = f.read()

if ".dashboard-top-grid" not in css:
    css = css + "\n\n/* Top Dashboard Stats Grid (Responsive) */\n.dashboard-top-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 14px;\n  margin-bottom: 24px;\n  align-items: stretch;\n}\n"

with open(css_path, "w") as f:
    f.write(css)

print("Updated UI layout in HTML and CSS.")
