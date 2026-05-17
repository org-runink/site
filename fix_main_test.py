import re

file_path = "assets/js/main.test.js"
with open(file_path, "r") as f:
    content = f.read()

content = content.replace("eval(mainJsCode);", "eval(`(function() { ${mainJsCode} })();`);")

with open(file_path, "w") as f:
    f.write(content)
