/**
 * Script to convert all JPG images to WebP format
 * 
 * Prerequisites:
 *   npm install sharp --save-dev
 * 
 * Usage:
 *   npm run convert:webp
 *   or
 *   node scripts/convert-to-webp.js
 */

import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';
import { join, dirname, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = join(__dirname, '../src/assets/school-image');
const outputDir = join(__dirname, '../src/assets/school-image/webp');

async function convertToWebP() {
  try {
    // Check if sharp is installed
    try {
      await import('sharp');
    } catch (error) {
      console.error('❌ Error: sharp package is not installed.');
      console.log('\nPlease install it with:');
      console.log('  npm install sharp --save-dev\n');
      process.exit(1);
    }

    // Create output directory if it doesn't exist
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
      console.log(`Created output directory: ${outputDir}\n`);
    }

    const files = await readdir(sourceDir);
    const jpgFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
    );

    if (jpgFiles.length === 0) {
      console.log('No JPG files found in:', sourceDir);
      return;
    }

    console.log(`Found ${jpgFiles.length} images to convert...\n`);

    let successCount = 0;
    let failCount = 0;

    for (const file of jpgFiles) {
      const inputPath = join(sourceDir, file);
      const outputName = basename(file, extname(file)) + '.webp';
      const outputPath = join(outputDir, outputName);

      try {
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);
        
        console.log(`✓ Converted: ${file} → ${outputName}`);
        successCount++;
      } catch (error) {
        console.error(`✗ Failed to convert ${file}:`, error.message);
        failCount++;
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log(`✅ Conversion complete!`);
    console.log(`   Success: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    console.log(`   WebP images saved to: ${outputDir}`);
    console.log('='.repeat(50));
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

convertToWebP();
