# Restore script
import sys

with open('crm-pipeline.html', 'r') as f:
    content = f.read()

# We need to replace in reverse order of modifications or replace current blocks with original blocks
