# actuate-site

The marketing and documentation website for [`actuate-ai`](https://pypi.org/project/actuate-ai/), built with Next.js and deployed as a static site to GitHub Pages.

This repo is the **website only**. It doesn't contain the `actuate` Python package itself — that lives at [actuate-ai/actuate](https://github.com/actuate-ai/actuate) and ships as [`actuate-ai` on PyPI](https://pypi.org/project/actuate-ai/).

## Stack

- **Next.js 14** (App Router), exported as a fully static site (`output: "export"`)
- **TypeScript**
- **Framer Motion** for scroll reveals and hero animation
- Hand-written CSS design system (no Tailwind) — see `app/globals.css`
- Zero backend, zero database — everything ships as static HTML/CSS/JS

## Run it locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Edit content

Almost everything you'd want to change lives in two places:

- **`lib/site-config.ts`** — package links, install commands, badges, and your author details (name, role, bio, links). Edit this file first.
- **`components/*.tsx`** — one file per section of the page (`Hero.tsx`, `Architecture.tsx`, `QuickStart.tsx`, `About.tsx`, `Footer.tsx`, etc). Section order is assembled in `app/page.tsx`.

## Build

```bash
npm run build
```

Static output lands in `out/`. Open `out/index.html` directly, or serve the folder with any static file server, to preview the production build.

## Deploy to GitHub Pages

This repo ships with `.github/workflows/deploy.yml`, which builds the site and publishes `out/` to GitHub Pages automatically on every push to `main`.

One-time setup on GitHub:

1. Push this repo to `github.com/ezhilnn/actuate` (or whatever you name it).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically. Watch progress under the **Actions** tab.
4. Your site will be live at `https://ezhilnn.github.io/actuate/`.

If the repo is **private**, GitHub Pages served from a private repo requires **GitHub Pro, Team, or Enterprise** — GitHub Free does not serve Pages sites from private repositories. If you're on the Free plan, either flip the repo to public before enabling Pages, or upgrade your plan.

### Renaming the repo

The site is configured as a GitHub **project page** (`https://<user>.github.io/<repo>/`), which needs a `basePath` matching the repo name. If you rename the repo away from `actuate`, update `REPO_NAME` in `next.config.mjs` to match.

### Deploying manually (no Actions)

```bash
npm run build
touch out/.nojekyll
npx gh-pages -d out
```

(`gh-pages` pushes the `out/` folder to a `gh-pages` branch — requires `npm i -D gh-pages` first, and Pages source set to "Deploy from a branch" → `gh-pages` instead of GitHub Actions.)

## License

Site content describes the `actuate-ai` package, which is licensed Apache-2.0. This site's own code is provided as-is for the maintainer's use.
