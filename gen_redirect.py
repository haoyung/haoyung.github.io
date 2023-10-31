import os

def process_file(filepath):
    # Extract date and title from filename
    filename = os.path.basename(filepath)
    date_part, title_part = filename.split("-", 1)
    year, month, day = date_part.split("-")

    # Create the old and new permalinks based on the filename
    old_permalink = f"/:categories/{year}/{month}/{day}/{title_part.replace('.md', '')}"
    new_permalink = f"/{year}/{month}/{day}/{title_part.replace('.md', '')}"

    # Read the file content
    with open(filepath, 'r') as f:
        content = f.readlines()

    # Add the permalinks at the top of the file
    content.insert(0, f"redirect_from: {old_permalink}\n")
    content.insert(1, f"permalink: {new_permalink}\n")

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
