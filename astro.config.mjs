import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ganti dengan domain final Anda agar canonical, Open Graph, dan sitemap benar.
export default defineConfig({
  site: 'https://cava-perfume.example.com',
  integrations: [sitemap()],
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
