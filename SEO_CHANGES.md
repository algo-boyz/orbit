# SEO & Discoverability Changes

Implemented against the previous audit recommendations.

## What changed

### 1. `src/layouts/Layout.astro` (major update)
- Canonical URL (`<link rel="canonical">`)
- Full Open Graph set: `og:url`, `og:site_name`, `og:locale`, `og:locale:alternate`, `og:image` (+ width/height/alt)
- Twitter Card tags (`summary_large_image`)
- Hreflang alternates for `en / es / fr / de / nl` + `x-default`
- JSON-LD: `Organization` + `WebSite` on every page; `BlogPosting` when `ogType="article"`
- Props for articles: `ogType`, `publishedTime`, `modifiedTime`, `author`, `image`
- Icons: favicon.ico + apple-touch-icon + theme-color

### 2. `src/pages/blog/[...slug].astro`
- Passes `ogType="article"`, `publishedTime`, `modifiedTime`, `author` into Layout
- Safer title fallback if frontmatter title is empty

### 3. `src/content/blog/traffic-enforcement-as-a-service-en.md`
- Fixed empty `title: ""` → proper title (was causing blank LinkedIn/OG titles)

### 4. `src/components/Header.astro`
- Logo `alt=""` → `alt="AgentJetson"`

### 5. `public/robots.txt` (new)
```
User-agent: *
Allow: /
Sitemap: https://www.agentjetson.ai/sitemap.xml
```

### 6. `public/sitemap.xml` (new)
Static sitemap covering homepage locales, blog indexes, all posts, investors pages, with hreflang annotations on the homepage set.

### 7. `public/llms.txt` (new)
Lightweight discovery file for AI crawlers.

### 8. `astro.config.mjs`
- Added `site: 'https://www.agentjetson.ai'` (required for correct absolute URLs)

### 9. `public/og-image.png`
- Already present from your previous push (kept as-is)

## After deploy

1. `npm install && npm run deploy`
2. Re-scrape in [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
3. Submit `https://www.agentjetson.ai/sitemap.xml` in Google Search Console + Bing Webmaster Tools
4. Optional later: `npm i @astrojs/sitemap` and wire it in `astro.config.mjs` for auto-generated sitemaps on every build

## Note on OG image size
Current `og-image.png` is 1536×1024. LinkedIn prefers ~1200×627. It will still work; for best crop, export a 1200×627 version when convenient.
