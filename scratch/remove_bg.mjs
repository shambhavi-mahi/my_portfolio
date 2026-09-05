// Background removal script using @imgly/background-removal-node
// Run from d:\my_portfolio with: node scratch/remove_bg.mjs

import { removeBackground } from '@imgly/background-removal-node';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath  = path.join(__dirname, '..', 'public', 'shambhavi.jpg');
const outputPath = path.join(__dirname, '..', 'public', 'shambhavi_cutout.png');

console.log('⏳ Removing background from shambhavi.jpg...');
console.log('   (First run downloads ~100MB AI model — please wait)\n');

const imageData = readFileSync(inputPath);
const blob = new Blob([imageData], { type: 'image/jpeg' });

const result = await removeBackground(blob, {
  model: 'medium',
  output: { format: 'image/png', quality: 1 },
});

const buffer = Buffer.from(await result.arrayBuffer());
writeFileSync(outputPath, buffer);

console.log('✅ Done! Saved to public/shambhavi_cutout.png');
