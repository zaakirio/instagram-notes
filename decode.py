import re
import base64

# Define a regular expression pattern to match <script> elements
script_pattern = r'<script.*?src="data:application/x-javascript; charset=utf-8;base64,([^"]+)".*?</script>'

# Read the input file
with open('input_file.html', 'r', encoding='utf-8') as input_file:
    file_content = input_file.read()

# Find all matching <script> elements
matches = re.findall(script_pattern, file_content, re.DOTALL)

# Iterate over the matches and decode the Base64 content
for i, match in enumerate(matches):
    decoded_content = base64.b64decode(match).decode('utf-8')
    
    # Generate a unique file name based on the iteration
    filename = f'function_{i}.js'
    
    # Create and write the decoded content to the file
    with open(filename, 'w', encoding='utf-8') as output_file:
        output_file.write(decoded_content)
