/**
 * Upload images from public/activities to Cloudinary and add them to cloudinary-urls.json.
 * Run: node --env-file=.env scripts/upload-activities-to-cloudinary.js
 *
 * Prerequisites: npm install cloudinary
 * Set CLOUDINARY_URL in .env
 *
 * Add --delete to remove local files after upload.
 */

import { readdir, readFile, writeFile, unlink, rmdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ACTIVITIES_DIR = join(__dirname, "../public/activities");
const OUTPUT_FILE = join(__dirname, "../src/lib/cloudinary-urls.json");
const FOLDER_PREFIX = "siddharth-miracles";

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
  return `activities/${base}${ext}`;
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

  const files = await readdir(ACTIVITIES_DIR);
  const imageFiles = files.filter((f) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
  imageFiles.sort();

  if (imageFiles.length === 0) {
    console.log("No image files found in public/activities");
    return;
  }

  let urlMap = {};
  try {
    const existing = await readFile(OUTPUT_FILE, "utf8");
    urlMap = JSON.parse(existing);
  } catch {
    console.log("No existing cloudinary-urls.json found.");
  }

  console.log(`Uploading ${imageFiles.length} images from public/activities to Cloudinary...\n`);

  for (const file of imageFiles) {
    const fullPath = join(ACTIVITIES_DIR, file);
    const key = keyFor(file);
    const publicId = `${FOLDER_PREFIX}/${key.replace(/\.[^.]+$/, "")}`;
    try {
      const result = await cloudinary.uploader.upload(fullPath, {
        public_id: publicId,
        overwrite: true,
      });
      urlMap[key] = result.secure_url;
      console.log(`  ✓ ${file} → ${key}`);
    } catch (err) {
      console.error(`  ✗ ${file}:`, err.message);
    }
  }

  await writeFile(OUTPUT_FILE, JSON.stringify(urlMap, null, 2), "utf8");
  console.log(`\nUpdated ${OUTPUT_FILE}.`);

  const deleteAfter = process.argv.includes("--delete");
  if (deleteAfter && imageFiles.length > 0) {
    console.log("\nRemoving local files from public/activities...");
    for (const file of imageFiles) {
      try {
        await unlink(join(ACTIVITIES_DIR, file));
        console.log(`  ✓ Removed ${file}`);
      } catch (e) {
        console.error(`  ✗ Could not remove ${file}:`, e.message);
      }
    }
    try {
      await rmdir(ACTIVITIES_DIR);
      console.log("  ✓ Removed public/activities folder.");
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
