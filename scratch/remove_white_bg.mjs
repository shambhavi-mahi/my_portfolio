import { createCanvas, loadImage } from 'canvas';
import { writeFileSync } from 'fs';

const inputPath = 'C:/Users/SHAMBHAVI/.gemini/antigravity/brain/b24ea5b3-3c12-4aea-9eaf-a87860e6b151/shambhavi_cutout_clean_1788610699579.jpg';
const outputPath = 'd:/my_portfolio/public/shambhavi_cutout_final.png';

console.log('Loading AI generated image...');
const img = await loadImage(inputPath);
const W = img.width;
const H = img.height;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');
ctx.drawImage(img, 0, 0);

const imgData = ctx.getImageData(0, 0, W, H);
const data = imgData.data;

const visited = new Uint8Array(W * H);
const isBg = new Uint8Array(W * H);
const queue = [];

// Start flood fill from the borders (which are pure white in the AI image)
for (let x = 0; x < W; x++) { queue.push(x, 0); queue.push(x, H - 1); }
for (let y = 1; y < H - 1; y++) { queue.push(0, y); queue.push(W - 1, y); }

let head = 0;
while (head < queue.length) {
  const x = queue[head++];
  const y = queue[head++];
  if (x < 0 || x >= W || y < 0 || y >= H) continue;
  
  const idx = y * W + x;
  if (visited[idx]) continue;
  visited[idx] = 1;

  const i = idx * 4;
  const r = data[i], g = data[i+1], b = data[i+2];
  
  // The AI replaced the background with pure/near white
  if (r > 240 && g > 240 && b > 240) {
    isBg[idx] = 1;
    queue.push(x+1, y, x-1, y, x, y+1, x, y-1);
  }
}

// Apply transparency and anti-aliasing/feathering on the edges
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const idx = y * W + x;
    if (isBg[idx]) {
      data[idx * 4 + 3] = 0; // Fully transparent
    } else {
      // Soften the edge by checking how many neighboring pixels are background
      let bgCount = 0;
      let r = 2; // feather radius
      let total = 0;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          let nx = x + dx, ny = y + dy;
          if (nx >= 0 && nx < W && ny >= 0 && ny < H) {
            total++;
            if (isBg[ny * W + nx]) bgCount++;
          }
        }
      }
      if (bgCount > 0) {
        // Decrease alpha based on proximity to the background
        const alphaRatio = 1 - (bgCount / total);
        data[idx * 4 + 3] = Math.max(0, Math.round(255 * alphaRatio));
        
        // Slightly clean up any residual white fringing on semi-transparent pixels
        if (alphaRatio < 0.8) {
             data[idx*4] = Math.max(0, data[idx*4] - 20);
             data[idx*4+1] = Math.max(0, data[idx*4+1] - 20);
             data[idx*4+2] = Math.max(0, data[idx*4+2] - 20);
        }
      }
    }
  }
}

ctx.putImageData(imgData, 0, 0);
writeFileSync(outputPath, canvas.toBuffer('image/png'));
console.log('Successfully saved transparent cutout to public/shambhavi_cutout_final.png');
