with open("assets/js/main.js", "r") as f:
    lines = f.readlines()

new_lines = lines[:-1] + ["  }\n", "});\n"]

with open("assets/js/main.js", "w") as f:
    f.writelines(new_lines)
