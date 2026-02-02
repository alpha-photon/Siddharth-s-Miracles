# Scripts

## Cloudinary Upload (images hosted on Cloudinary)

**No backend:** All images are served from Cloudinary via links. Local copies in `src/assets/` are not kept; the app uses only `cloudinary-urls.json`. Run the upload script when you add new images.

### Setup

1. Create a `.env` file in the project root (do **not** commit it; it contains your secret):
   ```bash
   CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
   ```
   Get these from [Cloudinary Console](https://console.cloudinary.com/).

2. Install the Cloudinary package (if not already):
   ```bash
   npm install cloudinary --save-dev
   ```

### Usage

```bash
npm run upload:cloudinary
```

Or with Node 20+ env file:

```bash
node --env-file=.env scripts/upload-to-cloudinary.js
```

This will:
- Find all images in `src/assets/` (jpg, jpeg, png, gif, webp, JPG, etc.)
- Upload each to Cloudinary under folder `siddharth-miracles/`
- Write `src/lib/cloudinary-urls.json` with path → URL mapping

Commit `src/lib/cloudinary-urls.json` (it only contains public URLs, no secrets). The app uses these URLs only (no local image fallback).

### Adding new images

1. Add the image file under `src/assets/` (e.g. `src/assets/herosection/new-photo.jpg`).
2. In `src/lib/cloudinary-images.ts`: add the path to `KEY_TO_PATH` and export the key (see existing entries).
3. Run `npm run upload:cloudinary`.
4. Use the new key in your component: `import { newPhoto } from "@/lib/cloudinary-images";`
5. Optionally delete the local file from `src/assets/` after upload (images are served from Cloudinary links).

---

## Image Conversion to WebP

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
