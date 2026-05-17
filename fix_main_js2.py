import re

file_path = "assets/js/main.js"
with open(file_path, "r") as f:
    content = f.read()

content = content.replace("  observer.observe(parallaxContainer);\n  return updateParallax;\n  }\n}", "  // observer.observe(parallaxContainer);\n  return updateParallax;\n  }\n}")
with open(file_path, "w") as f:
    f.write(content)
