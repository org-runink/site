import os
import shutil
import re
from datetime import datetime

brain_dir = "/home/me/.gemini/antigravity/brain/0871e87f-f93f-4837-a226-817cf22f2c10"
site_dir = "/home/me/Documents/site"
blog_dir = os.path.join(site_dir, "content/blog")
img_dest_dir = os.path.join(site_dir, "static/images/blog")

os.makedirs(blog_dir, exist_ok=True)
os.makedirs(img_dest_dir, exist_ok=True)

file_mapping = {
    "article_vaporware_scm.md": "vaporware-part-1-hidden-threat",
    "article_vaporware_spotting.md": "vaporware-part-2-spotting",
    "article_vaporware_financial.md": "vaporware-part-3-financial",
    "article_vaporware_operational.md": "vaporware-part-4-operational",
    "article_vaporware_legal.md": "vaporware-part-5-legal",
    "article_vaporware_resilience.md": "vaporware-part-6-resilience",
}

for src_file, slug in file_mapping.items():
    src_path = os.path.join(brain_dir, src_file)
    if not os.path.exists(src_path):
        continue
    
    with open(src_path, "r") as f:
        content = f.read()
        
    # Extract Title (from first H1)
    title_match = re.search(r'^#\s+(.+)$', content, flags=re.MULTILINE)
    title = title_match.group(1).strip() if title_match else "Vaporware in SCM"
    
    # Remove H1 from content to avoid duplicate titles in Hugo
    content = re.sub(r'^#\s+(.+)$\n+', '', content, count=1, flags=re.MULTILINE)

    # Find image paths and copy them
    def replace_image(match):
        img_url = match.group(2)
        if img_url.startswith(brain_dir):
            img_filename = os.path.basename(img_url)
            shutil.copy2(img_url, os.path.join(img_dest_dir, img_filename))
            new_url = f"/images/blog/{img_filename}"
            return f"![{match.group(1)}]({new_url})"
        return match.group(0)

    content = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', replace_image, content)
    
    # Add Frontmatter
    frontmatter = f"""---
title: "{title.replace('"', '')}"
author: "Runink Logistics Operations Team"
date: {datetime.now().strftime('%Y-%m-%dT%H:%M:%SZ')}
draft: false
description: "Part of the 6-part series on the dangers of SCM Vaporware."
slug: {slug}
categories: ["Supply Chain Strategy", "Risk Management"]
tags: ["Vaporware", "SCM", "Procurement"]
robots: index, follow
---

"""
    final_content = frontmatter + content
    
    dest_path = os.path.join(blog_dir, f"{slug}.md")
    with open(dest_path, "w") as f:
        f.write(final_content)
        
print("Migration completed successfully.")
