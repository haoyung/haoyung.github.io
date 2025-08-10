import os

for file in os.listdir('.'):
  if file.split('.')[1] == 'jpg' or file.split('.')[1] == 'JPG' or file.split('.')[1] == 'png':
    os.system('convert ' + file + ' -quality 80 ' + file.split('.')[0] + '.webp')