import subprocess
import os
from PIL import Image

def check_webp_counterpart(image_path):
    # Check if the .webp counterpart exists
    return os.path.isfile(image_path.rsplit('.', 1)[0] + '.webp')

def get_image_size(image_path):
    # Get the image size in bytes
    return os.path.getsize(image_path)

def has_multiple_layers(image_path):
    # Use identify command to get the number of layers
    result = subprocess.run(['identify', '-format', '%n', image_path], capture_output=True, text=True)
    return int(result.stdout.strip()) > 1

def convert_image(image_path):
    # Get the image size in bytes
    image_size = get_image_size(image_path)
    
    # Prepare the conversion command
    convert_command = ['convert', image_path]
    
    if image_size > 2 * 1024 * 1024:
        # Check if image size is greater than 2MB
        # Add resize flag if the image size is larger than 2MB
        convert_command.extend(['-resize', '50%'])
    
    # Add output file to the command
    convert_command.append(image_path.rsplit('.', 1)[0] + '.webp')
    
    # Execute the conversion command
    subprocess.run(convert_command)

def process_directory(directory):
    # Define the allowed extensions
    extensions = ('.jpg', '.JPG', '.png', '.PNG', '.jpeg', '.JPEG')
    
    # Walk through the directory and convert images
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(extensions):
                image_path = os.path.join(root, file)
                webp_path = image_path.rsplit('.', 1)[0] + '.webp'
                
                # Check if the .webp counterpart exists and if the image has been modified
                if not check_webp_counterpart(image_path) or os.path.getmtime(image_path) > os.path.getmtime(webp_path):
                    if has_multiple_layers(image_path):
                        convert_image(image_path)
                    else:
                        convert_image(image_path)
                        print(f"Converted {file} to WEBP.")

def main(image_dir):
    # Process the 'assets/img' directory itself
    process_directory(image_dir)
    
    # Traverse the directory tree recursively for subdirectories
    for root, dirs, files in os.walk(image_dir):
        for dir in dirs:
            process_directory(os.path.join(root, dir))

if __name__ == "__main__":
    image_directory = 'assets/img'  # Replace with your directory
    main(image_directory)