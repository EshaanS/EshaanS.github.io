# Eshaan Singh - Portfolio

Personal portfolio website built with Next.js and TypeScript.

Live at [eshaans.github.io](https://eshaans.github.io)

## About

Software developer in the Seattle area, open to relocating.

## What is on the site

- **Experience** - one card per role, newest first, with a date column
- **Projects** - signal-router, TrainingARK, FinSight, Mod the Agents, MarketMind, SentiPulse, ClubHub, OpenWillis
- **Skills**

Each card shows its first 4 bullets. Any further bullets sit behind a "Show more" toggle built on `<details>`, so it works without JavaScript.

All of the copy lives in [`app/content.ts`](app/content.ts). Edit that file to change what the page says.

## Design

The design tokens (colors, type, spacing, the one radius and the one shadow) are documented at the top of [`app/globals.css`](app/globals.css).

### Fonts

Two families, both loaded and self-hosted at build time by `next/font` in [`app/layout.tsx`](app/layout.tsx):

- **Archivo** for display: the name, headings, role and project names, and figures. Its width axis is loaded so the CSS can set it slightly wide (`font-stretch: 112%`).
- **Public Sans** for all other text.

To change either, swap the import in `app/layout.tsx`. The CSS reads them through `--font-display` and `--font-text`.

### Project screenshots

The screenshots in the Projects section are real captures of the live demos, stored as WebP in `public/shots/` at 480, 800 and 1200 pixels wide.

To recapture them after a demo changes:

```bash
npm install --no-save playwright-core
node scripts/capture-screenshots.mjs              # all three
node scripts/capture-screenshots.mjs trainingark  # only the ones named
```

The script drives the Microsoft Edge already installed on the machine (set `PLAYWRIGHT_CHANNEL=chrome` for Chrome). `--no-save` keeps Playwright out of `package.json`, so the site's own install and the deploy are unaffected.

Look at each image before committing it: a demo that is asleep, erroring or showing a sign-in page is captured exactly as it looks. If what a screenshot shows has changed, update its alt text in [`app/screens.ts`](app/screens.ts). That file also decides which projects get the large cards.

## Resume

The Resume buttons link to `/resume.pdf`, which is `public/resume.pdf` in this repo. To update it, replace that file. The filename has to stay exactly `resume.pdf`.

## Link preview image

`public/og.png` (1200x630) is the image shown when the site is shared on LinkedIn, Slack, X and similar. It shows the name and role only, so it does not need to change when the summary does. Replace it if the name, role or the look of the site changes.

## Tech Stack

Next.js, TypeScript, React, CSS

## Running Locally

```bash
cd EshaanS.github.io
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds a static export (`npm run build` writes it to `out/`) and publishes it to GitHub Pages.

## Contact

- Email: eshaan.singh09@gmail.com
- LinkedIn: [linkedin.com/in/eshaan-singh-72306021a](https://linkedin.com/in/eshaan-singh-72306021a)
- GitHub: [github.com/EshaanS](https://github.com/EshaanS)
