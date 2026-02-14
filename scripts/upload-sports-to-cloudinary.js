/**
 * Resize images from public/sports, then upload to Cloudinary and update cloudinary-urls.json.
 * Run: node --env-file=.env scripts/upload-sports-to-cloudinary.js
 *
 * Prerequisites: npm install cloudinary sharp
 * Set CLOUDINARY_URL in .env
 *
 * Add --delete to remove local files after upload.
 */

import { readdir, readFile, writeFile, unlink, rmdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SPORTS_DIR = join(__dirname, "../public/sports");
const OUTPUT_FILE = join(__dirname, "../src/lib/cloudinary-urls.json");
const FOLDER_PREFIX = "siddharth-miracles";

const MAX_FILE_BYTES = 10 * 1024 * 1024; // Cloudinary free tier 10MB
const MAX_DIMENSION = 1920; // max width or height in px
const JPEG_QUALITY = 85;

function parseCloudinaryUrl(url) {
  if (!url || !url.startsWith("cloudinary://")) {
    throw new Error("CLOUDINARY_URL must be set and start with cloudinary://");
  }
  const match = url.match(/cloudinary:\/\/([^:]+):([^@]+)@(.+)/);
  if (!match) throw new Error("Invalid CLOUDINARY_URL format");
  return { api_key: match[1], api_secret: match[2], cloud_name: match[3].trim() };
}

function keyFor(filename) {
  const sanitized = filename.replace(/\s+/g, "_").replace(/[()]/g, "");
  const lastDot = sanitized.lastIndexOf(".");
  const ext = lastDot >= 0 ? sanitized.slice(lastDot).toLowerCase() : "";
  const base = lastDot >= 0 ? sanitized.slice(0, lastDot) : sanitized;
  return `sports/${base}${ext}`;
}

/** Resize and compress image to stay under MAX_FILE_BYTES. Returns buffer. */
async function resizeImage(inputPath) {
  let buffer = await sharp(inputPath)
    .rotate() // respect EXIF orientation
    .resize(MAX_DIMENSION, MAX_DIMENSION, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer();

  let quality = JPEG_QUALITY;
  while (buffer.length > MAX_FILE_BYTES && quality > 30) {
    quality -= 10;
    buffer = await sharp(inputPath)
      .rotate()
      .resize(MAX_DIMENSION, MAX_DIMENSION, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
  }
  if (buffer.length > MAX_FILE_BYTES) {
    // shrink dimension further
    const smaller = Math.floor(MAX_DIMENSION * 0.75);
    buffer = await sharp(inputPath)
      .rotate()
      .resize(smaller, smaller, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 75, mozjpeg: true })
      .toBuffer();
  }
  return buffer;
}

function uploadBuffer(cloudinary, buffer, publicId) {
  return new Promise((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(
      { public_id: publicId, overwrite: true },
      (err, result) => (err ? reject(err) : resolve(result))
    );
    upload.end(buffer);
  });
}

async function main() {
  const url = process.env.CLOUDINARY_URL;
  const config = parseCloudinaryUrl(url);

  const cloudinary = (await import("cloudinary")).v2;
  cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret,
  });

  const files = await readdir(SPORTS_DIR);
  const imageFiles = files.filter((f) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
  imageFiles.sort();

  if (imageFiles.length === 0) {
    console.log("No image files found in public/sports");
    return;
  }

  let urlMap = {};
  try {
    const existing = await readFile(OUTPUT_FILE, "utf8");
    urlMap = JSON.parse(existing);
  } catch {
    console.log("No existing cloudinary-urls.json found.");
  }

  console.log(`Resizing and uploading ${imageFiles.length} images from public/sports to Cloudinary...\n`);

  for (const file of imageFiles) {
    const fullPath = join(SPORTS_DIR, file);
    const key = keyFor(file);
    const publicId = `${FOLDER_PREFIX}/${key.replace(/\.[^.]+$/, "")}`;
    try {
      const buffer = await resizeImage(fullPath);
      const sizeMB = (buffer.length / 1024 / 1024).toFixed(2);
      const result = await uploadBuffer(cloudinary, buffer, publicId);
      urlMap[key] = result.secure_url;
      console.log(`  ✓ ${file} → ${key} (${sizeMB}MB)`);
    } catch (err) {
      console.error(`  ✗ ${file}:`, err.message);
    }
  }

  await writeFile(OUTPUT_FILE, JSON.stringify(urlMap, null, 2), "utf8");
  console.log(`\nUpdated ${OUTPUT_FILE}.`);

  const deleteAfter = process.argv.includes("--delete");
  if (deleteAfter && imageFiles.length > 0) {
    console.log("\nRemoving local files from public/sports...");
    for (const file of imageFiles) {
      try {
        await unlink(join(SPORTS_DIR, file));
        console.log(`  ✓ Removed ${file}`);
      } catch (e) {
        console.error(`  ✗ Could not remove ${file}:`, e.message);
      }
    }
    try {
      await rmdir(SPORTS_DIR);
      console.log("  ✓ Removed public/sports folder.");
    } catch (e) {
      if (e.code !== "ENOTEMPTY") console.error("  ✗ Could not remove folder:", e.message);
    }
  } else {
    console.log("Run with --delete to remove local files after upload.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
