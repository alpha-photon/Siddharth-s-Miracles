/**
 * Upload images from public/Activities, public/Celebrations, and public/Classrooms to Cloudinary
 * and add them to cloudinary-urls.json.
 * Run: node --env-file=.env scripts/upload-gallery-to-cloudinary.js
 *
 * Prerequisites: npm install cloudinary
 * Set CLOUDINARY_URL in .env
 */

import { readdir, readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ACTIVITIES_DIR = join(__dirname, "../public/Activities");
const CELEBRATIONS_DIR = join(__dirname, "../public/Celebrations");
const CLASSROOMS_DIR = join(__dirname, "../public/Classrooms");
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

function sanitizeFilename(filename) {
  // Replace spaces with underscores and remove special characters
  return filename.replace(/\s+/g, "_").replace(/[()]/g, "").replace(/-/g, "_");
}

function keyFor(filename, folder) {
  const sanitized = sanitizeFilename(filename);
  const lastDot = sanitized.lastIndexOf(".");
  const ext = lastDot >= 0 ? sanitized.slice(lastDot).toLowerCase() : "";
  const base = lastDot >= 0 ? sanitized.slice(0, lastDot) : sanitized;
  return `${folder}/${base}${ext}`;
}

async function uploadFolder(cloudinary, dir, folderName) {
  try {
    const files = await readdir(dir);
    const imageFiles = files.filter((f) => /\.(jpg|jpeg|png|gif|webp|JPG|JPEG|PNG)$/i.test(f));
    imageFiles.sort();
    
    if (imageFiles.length === 0) {
      console.log(`No image files found in public/${folderName}`);
      return {};
    }

    console.log(`\nUploading ${imageFiles.length} images from public/${folderName}...`);
    const urlMap = {};

    for (const file of imageFiles) {
      const fullPath = join(dir, file);
      const key = keyFor(file, folderName.toLowerCase());
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

    return urlMap;
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`Folder public/${folderName} does not exist, skipping...`);
      return {};
    }
    throw err;
  }
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

  // Load existing URLs
  let urlMap = {};
  try {
    const existing = await readFile(OUTPUT_FILE, "utf8");
    urlMap = JSON.parse(existing);
    console.log(`Loaded ${Object.keys(urlMap).length} existing URLs from cloudinary-urls.json`);
  } catch {
    console.log("No existing cloudinary-urls.json found, creating new one.");
  }

  // Upload from each folder
  const activitiesMap = await uploadFolder(cloudinary, ACTIVITIES_DIR, "Activities");
  const celebrationsMap = await uploadFolder(cloudinary, CELEBRATIONS_DIR, "Celebrations");
  const classroomsMap = await uploadFolder(cloudinary, CLASSROOMS_DIR, "Classrooms");

  // Merge all URLs
  urlMap = { ...urlMap, ...activitiesMap, ...celebrationsMap, ...classroomsMap };

  // Write updated URLs
  await writeFile(OUTPUT_FILE, JSON.stringify(urlMap, null, 2), "utf8");
  console.log(`\n✓ Updated ${OUTPUT_FILE} with ${Object.keys(urlMap).length} total URLs.`);
  console.log(`  - Activities: ${Object.keys(activitiesMap).length} images`);
  console.log(`  - Celebrations: ${Object.keys(celebrationsMap).length} images`);
  console.log(`  - Classrooms: ${Object.keys(classroomsMap).length} images`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
