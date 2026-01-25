#!/bin/bash

# Script to convert all JPG images to WebP format
# Requires: imagemagick or cwebp (from webp package)
# 
# Install webp tools:
# macOS: brew install webp
# Ubuntu/Debian: sudo apt-get install webp
# 
# Usage: ./scripts/convert-to-webp.sh

SOURCE_DIR="src/assets/school-image"
OUTPUT_DIR="src/assets/school-image/webp"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Check if cwebp is available
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp is not installed."
    echo "Install it with:"
    echo "  macOS: brew install webp"
    echo "  Ubuntu/Debian: sudo apt-get install webp"
    exit 1
fi

# Convert all JPG files to WebP
count=0
for file in "$SOURCE_DIR"/*.jpg "$SOURCE_DIR"/*.JPG; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        name="${filename%.*}"
        output="$OUTPUT_DIR/${name}.webp"
        
        echo "Converting: $filename → ${name}.webp"
        cwebp -q 85 "$file" -o "$output"
        
        if [ $? -eq 0 ]; then
            ((count++))
            echo "✓ Success"
        else
            echo "✗ Failed"
        fi
    fi
done

echo ""
echo "✅ Conversion complete! Converted $count images."
echo "WebP images saved to: $OUTPUT_DIR"
