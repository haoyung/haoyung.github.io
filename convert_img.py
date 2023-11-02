import subprocess
import os
from PIL import Image

def check_webp_counterpart(image_path):
    # Check if the .webp counterpart exists
    return os.path.isfile(image_path.rsplit('.', 1)[0] + '.webp')

def has_multiple_layers(image_path):
    # Use identify command to get the number of layers
    result = subprocess.run(['identify', '-format', '%n', image_path], capture_output=True, text=True)
    return int(result.stdout.strip()) > 1

def convert_image(image_path):
    # Get the image size
    with Image.open(image_path) as img:
        width, height = img.size
    
    # Determine the narrower side
    narrower_side = min(width, height)
    
    # Prepare the conversion command
    convert_command = ['convert', image_path]
    
    if narrower_side > 1500:
        # Add resize flag if the narrower side is larger than 1500 pixels
        convert_command.extend(['-resize', '50%'])
    
    # Add output file to the command
    convert_command.append(image_path.rsplit('.', 1)[0] + '.webp')
    
    # Execute the conversion command
    subprocess.run(convert_command)

def main(image_dir):
    # Define the allowed extensions
    extensions = ('.jpg', '.JPG', '.png', '.PNG')
    
    # Walk through the directory and convert images
    for root, dirs, files in os.walk(image_dir):
        for file in files:
            if file.endswith(extensions) and not check_webp_counterpart(os.path.join(root, file)):
                if has_multiple_layers(os.path.join(root, file)):
                    convert_image(os.path.join(root, file))
                else:
                    convert_image(os.path.join(root, file))
                print(f"Converted {file} to WEBP.")

if __name__ == "__main__":
    image_directory = 'assets/img'  # Replace with your directory
    main(image_directory)
