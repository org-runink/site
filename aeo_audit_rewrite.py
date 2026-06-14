import os
import re

CONTENT_DIR = "content"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    new_lines = []
    
    i = 0
    modified = False
    
    while i < len(lines):
        line = lines[i]
        new_lines.append(line)
        
        # Check if current line is an H2 question
        if re.match(r'^##\s+.*?\?$', line.strip()):
            # Find the next non-empty line
            j = i + 1
            while j < len(lines) and lines[j].strip() == '':
                new_lines.append(lines[j])
                j += 1
            
            # If we reached the end of the file, break
            if j >= len(lines):
                break
                
            next_line = lines[j]
            
            # Check if the next line is already a direct-answer shortcode
            if '{{< direct-answer' not in next_line:
                # INSERT the AEO block BEFORE the existing paragraph
                new_lines.append('{{< direct-answer >}}')
                new_lines.append('**[TODO: AEO Analyst to write a concise, 40-60 word direct answer summarizing this section.]**')
                new_lines.append('{{< /direct-answer >}}')
                new_lines.append('') # Add an empty line for spacing before the original content
                
                # We do not skip any lines; we let the loop continue from j,
                # which means the original first paragraph gets pushed down and preserved!
                modified = True
                i = j - 1 # update i to process the line at j next
            else:
                # If already contains shortcode, skip ahead to avoid double inserting
                i = j - 1
        i += 1

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        print(f"Updated: {filepath}")

def main():
    if not os.path.isdir(CONTENT_DIR):
        print(f"Error: Directory '{CONTENT_DIR}' not found. Make sure you are running this from the Hugo project root.")
        return
        
    for root, dirs, files in os.walk(CONTENT_DIR):
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                process_file(filepath)

if __name__ == '__main__':
    main()
