import fs from 'node:fs';
import sharp from 'sharp';

export async function optimizePng(filePath) {
  const input = fs.readFileSync(filePath);
  const optimized = await sharp(input)
    .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
    .toBuffer();

  if (optimized.length < input.length) {
    fs.writeFileSync(filePath, optimized);
  }
}