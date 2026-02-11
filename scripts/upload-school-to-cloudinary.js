/**
 * Upload images from public/school to Cloudinary and add them to cloudinary-urls.json.
 * Run: node --env-file=.env scripts/upload-school-to-cloudinary.js
 *
 * Prerequisites: npm install cloudinary
 * Set CLOUDINARY_URL in .env (e.g. cloudinary://API_KEY:API_SECRET@CLOUD_NAME)
 *
 * After running, you can delete the public/school folder; images will be served from Cloudinary.
 */

import { readdir, readFile, writeFile, unlink, rmdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SCHOOL_DIR = join(__dirname, "../public/school");
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

async function main() {
  const url = process.env.CLOUDINARY_URL;
  const config = parseCloudinaryUrl(url);

  const cloudinary = (await import("cloudinary")).v2;
  cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.api_key,
    api_secret: config.api_secret,
  });

  const files = await readdir(SCHOOL_DIR);
  const jpgFiles = files.filter((f) => /\.(jpg|jpeg|JPG|JPEG)$/i.test(f));
  if (jpgFiles.length === 0) {
    console.log("No JPG files found in public/school");
    return;
  }

  let urlMap = {};
  try {
    const existing = await readFile(OUTPUT_FILE, "utf8");
    urlMap = JSON.parse(existing);
  } catch {
    console.log("No existing cloudinary-urls.json found, creating new.");
  }

  console.log(`Uploading ${jpgFiles.length} images from public/school to Cloudinary...\n`);

  for (const file of jpgFiles) {
    const fullPath = join(SCHOOL_DIR, file);
    const key = `school/${file.replace(/\.[^.]+$/, "").toUpperCase()}.jpg`;
    const publicId = `${FOLDER_PREFIX}/school/${file.replace(/\.[^.]+$/, "")}`;
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
  if (deleteAfter && jpgFiles.length > 0) {
    console.log("\nRemoving local files from public/school...");
    for (const file of jpgFiles) {
      try {
        await unlink(join(SCHOOL_DIR, file));
        console.log(`  ✓ Removed ${file}`);
      } catch (e) {
        console.error(`  ✗ Could not remove ${file}:`, e.message);
      }
    }
    try {
      await rmdir(SCHOOL_DIR);
      console.log("  ✓ Removed public/school folder.");
    } catch (e) {
      if (e.code !== "ENOTEMPTY") console.error("  ✗ Could not remove folder:", e.message);
    }
  } else {
    console.log("Run with --delete to remove local files after upload: node --env-file=.env scripts/upload-school-to-cloudinary.js --delete");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
