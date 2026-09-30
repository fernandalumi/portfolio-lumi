// Page screenshots with the local Microsoft Edge (no browser download needed), split in parts.
// Usage: node scripts/shot.mjs <url> <outPrefix> [width] [partHeight]
import { chromium } from 'playwright-core';
const [, , url, out, width = '1440', part = '2400'] = process.argv;
const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({ viewport: { width: Number(width), height: 900 }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(() => document.querySelectorAll('img[loading=lazy]').forEach(i => i.loading = 'eager'));
await page.evaluate(async () => { await Promise.all([...document.images].filter(i => !i.complete).map(i => new Promise(r => { i.onload = i.onerror = r; }))); for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 250)); } window.scrollTo(0, 0); });
await page.waitForLoadState('networkidle');
await page.waitForFunction(() => [...document.images].filter(i => i.offsetParent).every(i => i.complete && i.naturalWidth > 0), null, { timeout: 60000 }).catch(() => console.log('some images did not load'));
await page.waitForTimeout(500);
const H = await page.evaluate(() => document.documentElement.scrollHeight);
const W = Number(width), P = Number(part);
let i = 0;
for (let y = 0; y < H; y += P) {
  await page.screenshot({ path: `${out}-${++i}.png`, fullPage: true, clip: { x: 0, y, width: W, height: Math.min(P, H - y) } });
}
await browser.close();
console.log(`${i} parts, height ${H}`);
