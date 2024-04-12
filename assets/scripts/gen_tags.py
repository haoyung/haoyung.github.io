import frontmatter
from pathlib import Path

# Define the paths and corresponding directories for tag generation
posts_dirs = {
    'tag': '_posts',
    'en/tag': '_posts/en'
}

# Ensure tag directories exist
for dir in posts_dirs.keys():
    Path(dir).mkdir(parents=True, exist_ok=True)

# Collect and process tags for each directory
for tag_dir, posts_dir in posts_dirs.items():
    all_tags = set()
    
    # Loop through all .md files in the specified posts directory
    for md_file in Path(posts_dir).glob('*.md'):
        # Use frontmatter to load the file and parse its content
        post = frontmatter.load(md_file)
        if 'tag' in post.metadata:  # Check if 'tag' key exists
            tags = post.metadata['tag']
            if isinstance(tags, list):
                all_tags.update(tags)
            else:
                all_tags.add(tags)
    
    # Remove all existing .md files in the current tag directory
    for tag_file in Path(tag_dir).glob('*.md'):
        tag_file.unlink()
    
    # Create new .md files for each tag in the current tag directory
    for tag in all_tags:
        # Manually construct the YAML content in the specified order
        yaml_content = f"""---
layout: tag
title: "#{tag}"
tag: {tag}
language_reference: "#{tag}"
---
"""
        tag_filepath = Path(tag_dir) / f'{tag}.md'
        with open(tag_filepath, 'w', encoding='utf-8') as file:
            file.write(yaml_content)

    print(f"Tags processed and .md files created in the '{tag_dir}' directory.")
