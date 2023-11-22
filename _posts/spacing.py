import os
import re

# Define a function to add spaces between Chinese and English characters
def add_spaces_to_md_files():
    # Get a list of all .md files in the current directory
    md_files = [f for f in os.listdir() if f.endswith('.md')]

    # Define a regular expression pattern to match Chinese characters
    chinese_pattern = r'[\u4e00-\u9fff]+'

    # Iterate through each .md file
    for md_file in md_files:
        with open(md_file, 'r', encoding='utf-8') as file:
            content = file.read()

        # Use regex to find Chinese characters followed by English characters
        updated_content = re.sub(f'({chinese_pattern})([a-zA-Z]+)', r'\1 \2', content)

        # Write the updated content back to the file
        with open(md_file, 'w', encoding='utf-8') as file:
            file.write(updated_content)

if __name__ == "__main__":
    add_spaces_to_md_files()
    print("Spaces added between Chinese and English characters in .md files.")
