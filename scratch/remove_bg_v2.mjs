// Improved background removal using flood-fill from image edges
// Run from d:\my_portfolio with: node scratch/remove_bg_v2.mjs

import { createCanvas, loadImage } from 'canvas';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath  = path.join(__dirname, '..', 'public', 'shambhavi.jpg');
const outputPath = path.join(__dirname, '..', 'public', 'shambhavi_cutout.png');

console.log('⏳ Loading image...');
const img = await loadImage(inputPath);
const W = img.width, H = img.height;

const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');
ctx.drawImage(img, 0, 0);

const imageData = ctx.getImageData(0, 0, W, H);
const data = imageData.data;

function getPixel(x, y) {
  const i = (y * W + x) * 4;
  return [data[i], data[i+1], data[i+2], data[i+3]];
}

function colorDist(r1,g1,b1, r2,g2,b2) {
  return Math.sqrt((r1-r2)**2 + (g1-g2)**2 + (b1-b2)**2);
}

// ── Step 1: Sample background color from all 4 corners + edges ──────────────
const edgeSamples = [];
const EDGE = 8; // sample first/last 8px of edges
for (let x = 0; x < W; x += 10) {
  edgeSamples.push(getPixel(x, 0));
  edgeSamples.push(getPixel(x, Math.min(H-1, EDGE)));
}
for (let y = 0; y < H; y += 10) {
  edgeSamples.push(getPixel(0, y));
  edgeSamples.push(getPixel(Math.min(W-1, EDGE), y));
  edgeSamples.push(getPixel(Math.max(0, W-1-EDGE), y));
}

// Average background color
let sumR = 0, sumG = 0, sumB = 0;
for (const [r,g,b] of edgeSamples) { sumR+=r; sumG+=g; sumB+=b; }
const bgR = sumR / edgeSamples.length;
const bgG = sumG / edgeSamples.length;
const bgB = sumB / edgeSamples.length;
console.log(`Background color detected: rgb(${Math.round(bgR)}, ${Math.round(bgG)}, ${Math.round(bgB)})`);

// ── Step 2: Flood fill from ALL border pixels ────────────────────────────────
const TOLERANCE = 60;
const visited  = new Uint8Array(W * H);
const isBg     = new Uint8Array(W * H);
const queue    = [];

// Seed from all 4 borders
for (let x = 0; x < W; x++) {
  queue.push(x, 0);
  queue.push(x, H - 1);
}
for (let y = 1; y < H - 1; y++) {
  queue.push(0, y);
  queue.push(W - 1, y);
}

let qi = 0;
while (qi < queue.length) {
  const x = queue[qi++];
  const y = queue[qi++];
  if (x < 0 || x >= W || y < 0 || y >= H) continue;
  const idx = y * W + x;
  if (visited[idx]) continue;
  visited[idx] = 1;

  const pi = idx * 4;
  const r = data[pi], g = data[pi+1], b = data[pi+2];
  const dist = colorDist(r, g, b, bgR, bgG, bgB);

  if (dist < TOLERANCE) {
    isBg[idx] = 1;
    queue.push(x-1, y, x+1, y, x, y-1, x, y+1);
  }
}

// ── Step 3: Apply transparency with soft edge feathering ─────────────────────
// First pass: mark removed pixels
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const idx = y * W + x;
    if (isBg[idx]) {
      data[idx * 4 + 3] = 0; // fully transparent
    }
  }
}

// Second pass: feather edges (check neighbors for smooth transition)
const FEATHER = 4;
for (let y = FEATHER; y < H - FEATHER; y++) {
  for (let x = FEATHER; x < W - FEATHER; x++) {
    const idx = y * W + x;
    if (isBg[idx]) continue; // already transparent
    
    // Count how many bg pixels are in neighborhood
    let bgCount = 0, total = 0;
    for (let dy = -FEATHER; dy <= FEATHER; dy++) {
      for (let dx = -FEATHER; dx <= FEATHER; dx++) {
        const ni = (y+dy) * W + (x+dx);
        if (ni >= 0 && ni < W*H) {
          total++;
          if (isBg[ni]) bgCount++;
        }
      }
    }
    
    const ratio = bgCount / total;
    if (ratio > 0) {
      // Reduce alpha proportionally for edge pixels
      const currentAlpha = data[idx * 4 + 3];
      data[idx * 4 + 3] = Math.round(currentAlpha * (1 - ratio * 0.85));
    }
  }
}

ctx.putImageData(imageData, 0, 0);
const buffer = canvas.toBuffer('image/png');
writeFileSync(outputPath, buffer);
console.log(`✅ Done! Saved ${W}×${H}px cutout to public/shambhavi_cutout.png`);
