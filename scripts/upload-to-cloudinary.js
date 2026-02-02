/**
 * Upload all images from src/assets to Cloudinary and generate cloudinary-urls.json.
 * Run once (or when you add new images): node --env-file=.env scripts/upload-to-cloudinary.js
 *
 * Prerequisites: npm install cloudinary
 * Set CLOUDINARY_URL in .env (copy from .env.example)
 */

import { readdir, writeFile } from "fs/promises";
import { join, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, "../src/assets");
const OUTPUT_FILE = join(__dirname, "../src/lib/cloudinary-urls.json");
const FOLDER_PREFIX = "siddharth-miracles";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".JPG", ".JPEG", ".PNG"]);

function parseCloudinaryUrl(url) {
  if (!url || !url.startsWith("cloudinary://")) {
    throw new Error("CLOUDINARY_URL must be set and start with cloudinary://");
  }
  const match = url.match(/cloudinary:\/\/([^:]+):([^@]+)@(.+)/);
  if (!match) throw new Error("Invalid CLOUDINARY_URL format");
  return { api_key: match[1], api_secret: match[2], cloud_name: match[3].trim() };
}

async function findImages(dir, base = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const images = [];
  for (const e of entries) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) {
      images.push(...(await findImages(join(dir, e.name), rel)));
    } else {
      const ext = e.name.includes(".") ? e.name.slice(e.name.lastIndexOf(".")) : "";
      if (IMAGE_EXT.has(ext)) images.push(rel);
    }
  }
  return images;
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

  const relativePaths = (await findImages(ASSETS_DIR)).map((p) => p.replace(/\\/g, "/"));

  console.log(`Found ${relativePaths.length} images. Uploading to Cloudinary...\n`);

  const urlMap = {};
  for (const relPath of relativePaths) {
    const fullPath = join(ASSETS_DIR, relPath);
    const publicId = `${FOLDER_PREFIX}/${relPath.replace(/\.[^.]+$/, "")}`;
    try {
      const result = await cloudinary.uploader.upload(fullPath, {
        public_id: publicId,
        overwrite: true,
      });
      urlMap[relPath] = result.secure_url;
      console.log(`  ✓ ${relPath}`);
    } catch (err) {
      console.error(`  ✗ ${relPath}:`, err.message);
    }
  }

  const outDir = dirname(OUTPUT_FILE);
  await import("fs").then((fs) => fs.promises.mkdir(outDir, { recursive: true }));
  await writeFile(OUTPUT_FILE, JSON.stringify(urlMap, null, 2), "utf8");
  console.log(`\nWrote ${relative(__dirname, OUTPUT_FILE)} with ${Object.keys(urlMap).length} URLs.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
