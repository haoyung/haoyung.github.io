import os

def process_file(filepath):
    # Extract date and title from filename
    filename = os.path.basename(filepath)

    # Split based on hyphens and check if there are at least 3 splits (indicating a date)
    parts = filename.split("-", 3)
    if len(parts) < 4:
        print(f"Skipping file {filename} as it doesn't match the expected pattern.")
        return

    title_part = parts[3].replace('.md', '')
    year, month, day = "-".join(parts[:3]).split("-")

    # Read the file content
    with open(filepath, 'r') as f:
        content = f.readlines()

    # Extract categories from the content
    category_line = next((line for line in content if line.startswith('category:')), None)
    if not category_line:
        print(f"Couldn't find category in {filename}. Skipping.")
        return
    category = category_line.split(":")[1].strip()

    # Create the old permalink based on the filename and category
    old_permalink = f"/{category}/{year}/{month}/{day}/{title_part}"

    # Find the end of the front matter and insert the redirect_from line there
    end_of_front_matter = content.index("---\n", 1)  # The start is the first ---, we find the next one
    if end_of_front_matter:
        content.insert(end_of_front_matter, f"redirect_from: {old_permalink}\n")
    else:
        print(f"Couldn't find end of front matter in {filename}. Skipping.")

    # Write the modified content back to the file
    with open(filepath, 'w') as f:
        f.writelines(content)

def main():
    directory = "."  # Current directory. Change this if needed.

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
