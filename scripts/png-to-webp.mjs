// Converts the exported case PNGs to high quality WebP (smaller repository, same look)
// Usage: node scripts/png-to-webp.mjs src/assets/cases
import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
let before = 0, after = 0;
for (const f of walk(process.argv[2]).filter((f) => f.endsWith('.png'))) {
  const out = f.replace(/\.png$/, '.webp');
  before += statSync(f).size;
  await sharp(f).webp({ quality: 90, effort: 5, smartSubsample: true }).toFile(out);
  after += statSync(out).size;
  unlinkSync(f);
}
console.log(`PNG ${(before / 1e6).toFixed(1)} MB -> WebP ${(after / 1e6).toFixed(1)} MB`);
