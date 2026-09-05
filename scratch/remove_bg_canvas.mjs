// Background removal via color thresholding (no external dependencies beyond canvas)
// Removes dark backgrounds from photos by making dark pixels transparent
// Run: node scratch/remove_bg_canvas.mjs

import { createCanvas, loadImage } from 'canvas';
import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath  = path.join(__dirname, '..', 'public', 'shambhavi.jpg');
const outputPath = path.join(__dirname, '..', 'public', 'shambhavi_cutout.png');

console.log('⏳ Processing image...');

const img = await loadImage(inputPath);
const canvas = createCanvas(img.width, img.height);
const ctx = canvas.getContext('2d');

ctx.drawImage(img, 0, 0);

const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const data = imageData.data;

// Detect the background color from corners (average of corner pixels)
function avg(pixels) {
  const total = pixels.reduce((a, b) => [a[0]+b[0], a[1]+b[1], a[2]+b[2]], [0,0,0]);
  return total.map(v => v / pixels.length);
}

const w = canvas.width, h = canvas.height;
const cornerPixels = [
  [data[0], data[1], data[2]],                                // TL
  [data[(w-1)*4], data[(w-1)*4+1], data[(w-1)*4+2]],         // TR
  [data[(h-1)*w*4], data[(h-1)*w*4+1], data[(h-1)*w*4+2]],   // BL
].filter(p => p[0] !== undefined);

const [bgR, bgG, bgB] = avg(cornerPixels);
console.log(`Detected background color: rgb(${Math.round(bgR)}, ${Math.round(bgG)}, ${Math.round(bgB)})`);

// Remove pixels similar to background (with tolerance)
const TOLERANCE = 55;

for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i+1], b = data[i+2];
  const dist = Math.sqrt(
    Math.pow(r - bgR, 2) +
    Math.pow(g - bgG, 2) +
    Math.pow(b - bgB, 2)
  );
  if (dist < TOLERANCE) {
    // Make transparent — with smooth edge feathering
    const alpha = Math.min(255, Math.round((dist / TOLERANCE) * 255));
    data[i+3] = alpha;
  }
}

ctx.putImageData(imageData, 0, 0);

const buffer = canvas.toBuffer('image/png');
writeFileSync(outputPath, buffer);
console.log(`✅ Saved to public/shambhavi_cutout.png  (${w}×${h}px)`);
