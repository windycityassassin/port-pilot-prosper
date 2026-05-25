# port-pilot-prosper

Interactive business plan generator for a virtual phone number arbitrage
operation. Hero, concept clarification, business model, and generated plan
on a single React page.

Originally scaffolded with [Lovable](https://lovable.dev). Frontend only,
no backend, no API keys.

**Live demo:** https://windycityassassin.github.io/port-pilot-prosper/

## Stack

- Vite + React + TypeScript
- shadcn-ui + Tailwind
- React Router (routed under `import.meta.env.BASE_URL` so the same bundle
  works at `/` locally and `/port-pilot-prosper/` on GitHub Pages)

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:8080`.

## Build for production

```bash
# Local preview path
npm run build

# GitHub Pages subpath
VITE_BASE_PATH=/port-pilot-prosper/ npm run build
```

The `gh-pages` branch in this repo holds the built `dist/` and is what
GitHub Pages serves.
