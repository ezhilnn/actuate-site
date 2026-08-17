# actuate-site

The marketing and documentation website for [`actuate-ai`](https://pypi.org/project/actuate-ai/), built with Next.js and deployed as a static site to GitHub Pages.

This repo is the **website only**. It doesn't contain the `actuate` Python package itself — that lives at [actuate-ai/actuate](https://github.com/actuate-ai/actuate) and ships as [`actuate-ai` on PyPI](https://pypi.org/project/actuate-ai/).

## Stack

- **Next.js 14** (App Router), exported as a fully static site (`output: "export"`)
- **TypeScript**
- **Framer Motion** for scroll reveals and hero animation
- Hand-written CSS design system (no Tailwind) — see `app/globals.css`
- Zero backend, zero database — everything ships as static HTML/CSS/JS


