import os
import re

def add_space_between_chinese_and_english(text):
    # Regular expression to match Chinese character followed by English/number or vice versa
    pattern = r'([\u4e00-\u9fff])([A-Za-z0-9])|([A-Za-z0-9])([\u4e00-\u9fff])'
    def replacement(match):
        # Groups: Chinese before, English/number after, English/number before, Chinese after
        chinese_before, english_after, english_before, chinese_after = match.groups()
        return f'{chinese_before or ""}{english_before or ""} {english_after or ""}{chinese_after or ""}'

    # Find all matches and their start positions
    changes = []
    for match in re.finditer(pattern, text):
        start_pos = match.start()
        original_text = match.group(0)
        new_text = replacement(match)
        changes.append((start_pos, original_text, new_text))

    # Apply the replacements
    modified_text = re.sub(pattern, replacement, text)
    return modified_text, changes

def process_markdown_files(directory):
    for filename in os.listdir(directory):
        if filename.endswith('.md'):
            filepath = os.path.join(directory, filename)
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()

            modified_content, changes = add_space_between_chinese_and_english(content)

            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(modified_content)
            
            if changes:
                print(f"Processed {filename}:")
                for pos, original, new in changes:
                    print(f"  At position {pos}: '{original}' -> '{new}'")
            else:
                print(f"No changes made to {filename}")

# Get the root directory (2 levels up from script location)
script_directory = os.path.dirname(os.path.abspath(__file__))
root_directory = os.path.dirname(os.path.dirname(script_directory))

# Process the Markdown files in _posts directories
posts_directory = os.path.join(root_directory, '_posts')
if os.path.exists(posts_directory):
    print(f"Processing files in {posts_directory}")
    process_markdown_files(posts_directory)

# Also process English posts
posts_en_directory = os.path.join(root_directory, '_posts', 'en')
if os.path.exists(posts_en_directory):
    print(f"Processing files in {posts_en_directory}")
    process_markdown_files(posts_en_directory)
