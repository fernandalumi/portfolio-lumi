// Downloads raw images exported from Figma and names them by matching pixel size.
// Usage: node scripts/fetch-figma-images.mjs <outDir> '<map json {key:"WxH"}>' <url1> <url2> ...
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [, , outDir, mapJson, ...urls] = process.argv;
const map = JSON.parse(mapJson);
const bySize = Object.fromEntries(Object.entries(map).map(([k, v]) => [v, k]));
mkdirSync(outDir, { recursive: true });
let ok = 0;
for (const url of urls) {
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  const w = buf.readUInt32BE(16), h = buf.readUInt32BE(20);
  const key = bySize[`${w}x${h}`];
  if (!key) { console.log(`no match for ${w}x${h}`); continue; }
  writeFileSync(join(outDir, key + '.png'), buf); // run scripts/png-to-webp.mjs afterwards
  ok++;
}
console.log(`${ok}/${Object.keys(map).length} saved to ${outDir}`);
