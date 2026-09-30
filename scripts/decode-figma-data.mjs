// Decodes a layout tree exported from Figma as an SVG text node (base64 JSON)
// Usage: node scripts/decode-figma-data.mjs <input.svg> <output.json>
import { readFileSync, writeFileSync } from 'node:fs';

const [, , input, output] = process.argv;
const svg = readFileSync(input, 'utf8');
const chunks = [...svg.matchAll(/<tspan[^>]*>([^<]*)<\/tspan>/g)].map((m) => m[1]);
const b64 = (chunks.length ? chunks.join('') : svg.replace(/<[^>]+>/g, '')).replace(/[^A-Za-z0-9+/=]/g, '');
const json = Buffer.from(b64, 'base64').toString('utf8');
const data = JSON.parse(json);
writeFileSync(output, JSON.stringify(data));
console.log(`${output}: ${json.length} chars, ${data.c.length} sections`);
