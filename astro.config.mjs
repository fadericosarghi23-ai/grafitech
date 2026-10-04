// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical su un solo host, con convenzione slash finale coerente.
  // Deve combaciare con `site.dominio` in src/data/landing.ts.
  site: 'https://grafitech.vda.it',
  trailingSlash: 'always',
  server: { port: 4600 },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
