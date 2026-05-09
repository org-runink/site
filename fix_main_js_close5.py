with open("assets/js/main.js", "r") as f:
    lines = f.readlines()

new_lines = lines[:-2] + ["});\n"]

with open("assets/js/main.js", "w") as f:
    f.writelines(new_lines)
