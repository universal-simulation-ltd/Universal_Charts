# Universal Charts

Turn CSV into clean, shareable charts — entirely in your browser. Part of the
[Universal Apps](https://opensource.unisim.co.uk) family from UNI·SIM.

**Not deployed yet.** The app is built and works, but there is no `charts`
Cloudflare Pages project and no `/charts` route in the opensource-portal
worker's `TARGETS`, so `opensource.unisim.co.uk/charts` currently 404s. This
file claimed it was live, which is how a dead link nearly reached the suite
switcher — it is listed there as "Coming soon" until the route exists.

To launch: create the Pages project, add `'/charts'` to `TARGETS` in
`backoffice/opensource-portal/src/worker.js`, drop `comingSoon` from the Charts
entry in the SDK's `DEFAULT_UNIVERSAL_APPS_PRODUCTS`, and add it to the portal's
own `APPS` list.

100% free, open source, works offline. Your data never leaves the browser.

## Features

- Paste CSV (or load a sample) — header + numeric columns auto-detected
- 9 chart types: bar, stacked bar, horizontal bar, line, area, pie, donut,
  scatter, radar
- Pick X (category) and one or more Y (value) series; custom colours;
  gridlines / legend / data labels / smooth-curve toggles
- Org brand colour applied automatically when you're signed in with a Universal ID
- Export **PNG** (1×/2×/3×), **SVG**, or copy to clipboard
- **Share link** — the chart config + data are LZ-compressed into the URL, so a
  recipient sees the exact chart with no server involved

## Stack

Vite 6 · React 18 · TypeScript · Tailwind v4 · zustand · recharts · papaparse ·
lz-string · html-to-image · `@unisim/sdk` (shared navbar + branding).

## Develop

```
cd /Users/jamesmarkey/Github/UNISIM/Universal_Apps/Universal_Charts
npm install
npm run dev -- --port 5185
```

`npm run build` runs `tsc -b && vite build` (strict TypeScript). Output is a
static `dist/` served by Cloudflare Pages under the `/charts/` base path.

## Privacy

No backend. CSV is parsed locally; charts render locally; exports are generated
locally; share links carry the data in the URL fragment. The app reads (never
writes) your organisation's brand colour if you're signed in on `.unisim.co.uk`.
