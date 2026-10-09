// Script to remove white background from portrait image
// Uses the 'canvas' package already in package.json
import { createCanvas, loadImage } from 'canvas';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, '../public/shambhavi_cutout_final.png');
const outputPath = path.join(__dirname, '../public/portrait.png');

console.log('Loading image...');
const img = await loadImage(inputPath);

const canvas = createCanvas(img.width, img.height);
const ctx = canvas.getContext('2d');
ctx.drawImage(img, 0, 0);

const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const data = imageData.data;

// Threshold: how close to white a pixel needs to be to become transparent
const THRESHOLD = 50;

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  // Calculate how white/grey this pixel is
  const brightness = (r + g + b) / 3;
  const colorfulness = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));

  // Near-white: bright AND not very colorful
  const isNearWhite = brightness > (255 - THRESHOLD) && colorfulness < 30;

  if (isNearWhite) {
    // Smooth fade at edges based on brightness
    const t = (brightness - (255 - THRESHOLD)) / THRESHOLD;
    data[i + 3] = Math.round((1 - t) * 255);
  }
}

ctx.putImageData(imageData, 0, 0);

const buffer = canvas.toBuffer('image/png');
writeFileSync(outputPath, buffer);
console.log(`Done! Saved to: ${outputPath}`);
console.log(`Image size: ${img.width}x${img.height}`);
