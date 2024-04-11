import os
import re
from pathlib import Path

# Define the paths
posts_dir = '_posts'
tags_dir = 'tag'

# Make sure the tag directory exists
Path(tags_dir).mkdir(exist_ok=True)

# Collect all tags
all_tags = set()

# Regular expression to match YAML front matter
yaml_front_matter_re = re.compile(r'^---\s+(.*?)\s+---', re.DOTALL | re.MULTILINE)

# Loop through all .md files in the _posts directory
for md_file in Path(posts_dir).glob('*.md'):
    with open(md_file, 'r', encoding='utf-8') as file:
        content = file.read()
        front_matter_match = yaml_front_matter_re.search(content)
        if front_matter_match:
            front_matter = front_matter_match.group(1)
            # Look for the tag or tags line
            tag_line_match = re.search(r'^tag: \[(.*?)\]', front_matter, re.MULTILINE)
            if tag_line_match:
                # Split the tags and add to the set
                tags = tag_line_match.group(1).split(', ')
                all_tags.update(tags)

# Remove all files in the "tag" folder
for tag_file in Path(tags_dir).glob('*.md'):
    tag_file.unlink()

# Create new .md files for each tag
for tag in all_tags:
    tag_filename = f"{tag}.md"
    tag_filepath = Path(tags_dir) / tag_filename
    with open(tag_filepath, 'w', encoding='utf-8') as file:
        file_content = f"""---
layout: tag
title: "tag: {tag}"
tag: {tag}
---"""
        file.write(file_content)

print("Tags processed and .md files created in the 'tag' directory.")
