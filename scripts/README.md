# Image Conversion to WebP

This directory contains scripts to convert school images from JPG to WebP format for better performance.

## Option 1: Using Shell Script (Recommended for macOS/Linux)

### Prerequisites
Install WebP tools:
```bash
# macOS
brew install webp

# Ubuntu/Debian
sudo apt-get install webp
```

### Usage
```bash
./scripts/convert-to-webp.sh
```

This will convert all JPG images in `src/assets/school-image/` to WebP format and save them in `src/assets/school-image/webp/`.

## Option 2: Using Node.js Script

### Prerequisites
Install sharp package:
```bash
npm install sharp --save-dev
```

### Usage
```bash
npm run convert:webp
```

## Option 3: Online Tools or Image Editors

You can also use online tools like:
- [Squoosh](https://squoosh.app/) - Google's image compression tool
- [CloudConvert](https://cloudconvert.com/jpg-to-webp)
- Or any image editor that supports WebP export

## After Conversion

Once you have WebP images, you can update the Gallery component to use them by:
1. Importing WebP images instead of JPG
2. Or using a conditional import that prefers WebP but falls back to JPG

Example:
```typescript
// Try to import WebP, fallback to JPG
import img1Webp from "@/assets/school-image/webp/IMG-20251217-WA0016.webp";
import img1Jpg from "@/assets/school-image/IMG-20251217-WA0016.jpg";
const img1 = img1Webp || img1Jpg;
```

## Benefits of WebP

- **Smaller file sizes**: Typically 25-35% smaller than JPG
- **Better quality**: Better compression algorithm
- **Faster loading**: Reduces page load time
- **Modern format**: Supported by all modern browsers
