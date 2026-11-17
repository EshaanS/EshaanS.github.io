# Eshaan Singh - Portfolio

Personal portfolio website built with Next.js and TypeScript.

Live at [eshaans.github.io](https://eshaans.github.io)

## About

Software developer in the Seattle area, open to relocating to San Francisco.

## What is on the site

- **Experience** - one card per role, newest first
- **Projects** - signal-router, TrainingARK, FinSight, Mod the Agents, MarketMind, SentiPulse, ClubHub, OpenWillis
- **Skills**

Each card shows its first 4 bullets. Any further bullets sit behind a "Show more" toggle built on `<details>`, so it works without JavaScript.

All of the copy lives in [`app/content.ts`](app/content.ts). Edit that file to change what the page says.

## Resume (action needed)

The Resume button on the site links to `/resume.pdf`. That file is not in the repo yet, so the button returns a 404 until you add it.

Drop your resume at:

```
public/resume.pdf
```

The filename has to be exactly `resume.pdf`. Commit it and push to `main`, and the button works.

## Link preview image

`public/og.png` (1200x630) is the image shown when the site is shared on LinkedIn, Slack, X and similar. It contains the name, role and the one-line summary as text, so if you change the summary in `app/content.ts`, replace this image too.

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
