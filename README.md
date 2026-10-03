# AgentJetson Cinematic (Space + Orbit)

Combined experience: **Orbit** (AgentJetson.ai product site) + cinematic intro mechanics from **Space** (Astro particle / wormhole theme).


## Cinematic intro (Space-faithful)

The intro matches the original Space theme interaction model:

1. **Full Wormhole Extreme WebGL scene** in an iframe (`public/wormhole-home.html` + `public/vendor/wormhole-extreme/`)
2. **Large particle title** “AGENT JETSON” via `src/scripts/title-particles.ts` (Three.js) — **hover/touch disrupts particles**
3. **Veruvian Man** as the only enter control — **click** starts hyper-travel (not hover)
4. Original 3D wormhole acceleration in the scene (~2.5s), then the intro dismisses into the Orbit landing page
5. Once per session; Skip available; reduced-motion skips entirely

## Concept

```
PARTICLES  →  AGENT JETSON identity  →  wormhole acceleration  →  main site
```

- **Particle field** = intelligence layer (observe)
- **Wormhole** = transition from signals → operational intelligence
- **Landing page** = real-world action (existing Orbit site)

The intro is **not** a separate splash route. It boots on `/` (and localized home routes), plays **once per browser session**, stays under ~5 seconds, and always offers **Skip**.

## What was borrowed from Space

| Asset | Role |
| --- | --- |
| `src/scripts/wormhole-transition.ts` | Short canvas wormhole tunnel (adapted for in-page complete) |
| `src/scripts/title-particles.ts` | Original particle title system (available for further work) |
| `src/scripts/wormhole-space.ts` | Full Three.js space scene (optional, not used in the default intro) |
| `public/media/space/wormhole-*.webp` | Texture assets if you expand the Three.js scene |
| Visual language | Near-black, blue/white particles, restrained HUD feel |

What was **not** carried over: book metaphor, floating cover CTA, editorial dossier UI, bilingual book data model.

## New pieces

| Path | Purpose |
| --- | --- |
| `src/components/intro/IntroExperience.astro` | Session-gated intro shell + styles |
| `src/scripts/aj-intro.ts` | Lightweight particle field + converge + wormhole handoff |

## Behaviour

1. First visit in a session → full-screen intro (particles + “AGENT JETSON”).
2. Visitor clicks **Enter**, or waits ~4.5s → particles converge → brief wormhole → site reveals.
3. **Skip intro** dismisses immediately (no wormhole).
4. `prefers-reduced-motion: reduce` → intro skipped entirely.
5. Subsequent visits in the same session → no intro (`sessionStorage`).

## Stack

- Astro 7 + Cloudflare adapter (from Orbit)
- three.js (available; default intro uses 2D canvas for performance)
- Existing Orbit i18n, blog, investors, forms

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:4321/`. To re-see the intro, clear session storage or use a private window.

```bash
npm run build
npm run deploy   # Cloudflare via wrangler
```

## Design notes (AgentJetson)

- Near-black background (`#02050c` / Orbit `--bg`)
- Blue/white accent language aligned with product UI
- Subtle particles — not a sci-fi game aesthetic
- Restrained typography (Space Grotesk / Inter already on the site)
- Wormhole as **transition mechanism**, not destination
- Serious infrastructure / public-safety tone

## Third-party

See `THIRD_PARTY_NOTICES.md` for Wormhole Extreme (MIT) and three.js (MIT) attribution from the Space theme.

## Source repos

- Space theme: https://github.com/algo-boyz/space  
- Orbit (AgentJetson site): https://github.com/algo-boyz/orbit  

## Media stripped for distribution size

Large Orbit demo videos (Hero, Demo1/2, CTA) and heavy PNGs were removed so the zip stays under typical download limits.

See `public/_media_stripped/README.md` for the full list and how to restore from the Orbit repo.

The **cinematic intro** (particles + wormhole) does not depend on those assets.
