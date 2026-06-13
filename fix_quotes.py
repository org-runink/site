import re

app_js_path = "/home/me/Documents/companion/demo/app.js"

with open(app_js_path, "r") as f:
    content = f.read()

# The pattern finds the dictionary keys and their values, and if the value spans multiple lines, wraps it in backticks instead of double quotes.
# Wait, let's just replace all occurrences of:
# "Columns:
# ...
# "
# with
# `Columns:
# ...
# `

pattern = re.compile(r'"Columns:\n(.*?)"', re.DOTALL)
fixed_content = pattern.sub(r'`Columns:\n\1`', content)

with open(app_js_path, "w") as f:
    f.write(fixed_content)

print("Fixed newlines in app.js")
