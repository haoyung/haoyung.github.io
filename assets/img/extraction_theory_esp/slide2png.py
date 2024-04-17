import os
from pdf2image import convert_from_path
import PyPDF2

def convert_pdf_to_images(pdf_path, output_folder):
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        num_pages = len(reader.pages)
        # Convert each page directly from the PDF file
        images = convert_from_path(pdf_path, dpi=300, first_page=1, last_page=num_pages)
        for i, image in enumerate(images):
            image.save(f"{output_folder}/slide_page{i + 1}.jpg", "JPEG")
        return num_pages

def create_markdown_file(output_folder, num_pages, md_file_path):
    with open(md_file_path, "w") as md_file:
        for i in range(1, num_pages + 1):
            md_file.write(f"""<div class="row mt-md-5 mt-4 mb-md-5 mb-4 justify-content-center text-center">
    <div class="col-md-12">
        <img src="{{{{ site.github.url }}}}/assets/img/{{{{ page.imgfolder }}}}/slide_page{i}.webp" alt="" class="img-fluid responsive-image-horizontal" style="border:1px var(--main-text-color) solid;">
    </div>
</div>

""")

pdf_path = '26義式修正/義式修正投影片.pdf'
output_folder = '.'  # Ensure this folder exists
md_file_path = 'slide_imgs.md'

num_pages = convert_pdf_to_images(pdf_path, output_folder)
create_markdown_file(output_folder, num_pages, md_file_path)
