// Captures the project screenshots shown on the site from the live demos.
//
// Not part of the build. Run it by hand when a demo changes:
//
//   npm install --no-save playwright-core
//   node scripts/capture-screenshots.mjs              (all three)
//   node scripts/capture-screenshots.mjs trainingark  (only the ones named)
//
// It drives the Microsoft Edge already installed on this machine. Set
// PLAYWRIGHT_CHANNEL=chrome to use Chrome instead.
// Output: public/shots/<name>-{480,800,1200}.webp, all 16:10.
//
// Look at each image before committing it. A demo that is asleep, erroring or
// showing a sign-in page will be captured exactly as it looks.

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import sharp from "sharp";

const SHOTS = [
  { name: "trainingark", url: "https://trainingark.vercel.app" },
  { name: "finsight", url: "https://eshaan-finsight.vercel.app" },
  // Hosted on a free tier that sleeps, so the first load can take a minute.
  { name: "mod-the-agents", url: "https://mod-the-agents-front.onrender.com" },
];

const VIEWPORT = { width: 1280, height: 800 };
const WIDTHS = [480, 800, 1200];

const only = process.argv.slice(2);
const wanted = only.length ? SHOTS.filter((shot) => only.includes(shot.name)) : SHOTS;
if (!wanted.length) {
  console.error(`No screenshot named ${only.join(", ")}. Known names: ${SHOTS.map((shot) => shot.name).join(", ")}`);
  process.exit(1);
}

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "shots");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL ?? "msedge", headless: true });
// 2x so the 1200px file is downscaled from a sharper source.
const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2, colorScheme: "light" });

for (const { name, url } of wanted) {
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
