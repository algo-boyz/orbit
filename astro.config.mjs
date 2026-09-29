// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
// Static sitemap.xml is served from /public.
// Optional: npm i @astrojs/sitemap and re-enable the integration for auto-generation.
export default defineConfig({
  site: 'https://www.agentjetson.ai',
  adapter: cloudflare(),
  i18n: {
    defaultLocale: 'en',
    locales: ['ar', 'en', 'es', 'fr', 'de', 'nl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
