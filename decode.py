import re
import base64

# Define a regular expression pattern to match <script> elements
script_pattern = r'<script.*?src="data:application/x-javascript; charset=utf-8;base64,([^"]+)".*?</script>'

# Read the input file
with open('input_file.html', 'r', encoding='utf-8') as file:
    file_content = file.read()

# Find all matching <script> elements
matches = re.findall(script_pattern, file_content, re.DOTALL)

# Iterate over the matches and decode the Base64 content
for match in matches:
    decoded_content = base64.b64decode(match).decode('utf-8')
    
    # Process the decoded content as needed
    # For example, you can print it or save it to another file
    print(decoded_content)
