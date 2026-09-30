// Generates the site icons from the portrait (face crop). Usage: node scripts/make-favicons.mjs
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
const SRC = 'src/assets/sobre/foto-lumi.png';
const crop = { left: 140, top: 150, width: 720, height: 720 }; // face area in the 1000x1333 photo
const face = (size) => sharp(SRC).extract(crop).resize(size, size);
const circle = (size) => Buffer.from(`<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}"/></svg>`);
const round = async (size) => face(size).composite([{ input: circle(size), blend: 'dest-in' }]).png().toBuffer();

// Browser tab icons (round, transparent corners)
const png32 = await round(32), png48 = await round(48);
writeFileSync('public/favicon-32.png', png32);
writeFileSync('public/favicon.png', await round(192));
// favicon.ico with embedded PNGs (supported by all current browsers)
const imgs = [[16, await round(16)], [32, png32], [48, png48]];
const header = Buffer.alloc(6); header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(imgs.length, 4);
let offset = 6 + 16 * imgs.length; const dir = [];
for (const [s, buf] of imgs) { const e = Buffer.alloc(16); e.writeUInt8(s, 0); e.writeUInt8(s, 1); e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6); e.writeUInt32LE(buf.length, 8); e.writeUInt32LE(offset, 12); offset += buf.length; dir.push(e); }
writeFileSync('public/favicon.ico', Buffer.concat([header, ...dir, ...imgs.map(([, b]) => b)]));
// iPhone/iPad home screen icon (square; the system rounds the corners)
await face(180).png().toFile('public/apple-touch-icon.png');
console.log('icons written');
