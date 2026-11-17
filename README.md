# Eshaan Singh - Portfolio

Personal portfolio website built with Next.js and TypeScript.

Live at [eshaans.github.io](https://eshaans.github.io)

## About

Software developer in the Seattle area, open to relocating to San Francisco.

## What is on the site

- **Experience** - Software Developer at TechMagnet
- **Projects** - signal-router, TrainingARK, FinSight, MarketMind, Mod the Agents
- **Also** - OpenWillis, ClubHub
- **Skills**

All of the copy lives in [`app/content.ts`](app/content.ts). Edit that file to change what the page says.

## Resume (action needed)

The Resume button on the site links to `/resume.pdf`. That file is not in the repo yet, so the button returns a 404 until you add it.

Drop your resume at:

```
public/resume.pdf
```

The filename has to be exactly `resume.pdf`. Commit it and push to `main`, and the button works.

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
