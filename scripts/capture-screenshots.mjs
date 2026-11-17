// Captures the project screenshots shown on the site from the live demos.
//
// Not part of the build. Run it by hand when a demo changes:
//
//   npm install --no-save playwright-core
//   node scripts/capture-screenshots.mjs
//
// It drives the Microsoft Edge already installed on this machine (pass a
// different Playwright channel as the first argument, e.g. "chrome").
// Output: public/shots/<name>-{480,800,1200}.webp, all 16:10.

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import sharp from "sharp";

const SHOTS = [
  // TrainingARK is left out for now: its home page showed "Could not load scenarios"
  // (GET /api/scenarios returned 500) when these were captured. Once it loads again,
  // add it back here and add an entry for it in app/screens.ts.
  // { name: "trainingark", url: "https://trainingark.vercel.app" },
  { name: "finsight", url: "https://eshaan-finsight.vercel.app" },
  // Hosted on a free tier that sleeps, so the first load can take a minute.
  { name: "mod-the-agents", url: "https://mod-the-agents-front.onrender.com" },
];

const VIEWPORT = { width: 1280, height: 800 };
const WIDTHS = [480, 800, 1200];

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "shots");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ channel: process.argv[2] ?? "msedge", headless: true });
// 2x so the 1200px file is downscaled from a sharper source.
const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2, colorScheme: "light" });

for (const { name, url } of SHOTS) {
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120_000 });
  await page.waitForLoadState("networkidle", { timeout: 120_000 }).catch(() => {});
  await page.waitForTimeout(2500);

  const png = await page.screenshot({ type: "png" });
  for (const width of WIDTHS) {
    const file = path.join(outDir, `${name}-${width}.webp`);
    const info = await sharp(png).resize({ width }).webp({ quality: 74 }).toFile(file);
    console.log(`${name}-${width}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} KB`);
  }
  console.log(`  title: ${await page.title()}`);
  await page.close();
}

await browser.close();
