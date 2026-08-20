# CAVA PERFUME — Astro

Situs brand parfum CAVA (4 halaman) dalam framework **Astro**.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output statis di dist/
```

## Struktur

- `src/layouts/BaseLayout.astro` — head bersama: SEO, Open Graph, Twitter card, canonical, JSON-LD, preconnect font, preload gambar hero, skip-link.
- `src/pages/index.astro`, `varian-aroma.astro`, `katalog.astro`, `kontak.astro` — halaman (rute: `/`, `/varian-aroma`, `/katalog`, `/kontak`).
- `public/images`, `public/media` — foto produk, editorial, dan video hero.

## Optimasi yang sudah diterapkan

- **SEO**: title & description unik, canonical, robots, sitemap otomatis (`@astrojs/sitemap`), robots.txt, JSON-LD (Organization / WebPage).
- **Open Graph & Twitter**: og:title/description/url/image/type + twitter summary_large_image, URL absolut dari `site`.
- **Performa**: `loading="lazy"` + `decoding="async"` untuk semua gambar bawah layar, `fetchpriority="high"` + preload untuk gambar hero, `preload="metadata"` pada video, preconnect font, HTML/CSS diminifikasi Astro, nol JavaScript framework.
- **Aksesibilitas**: skip-link, `:focus-visible` yang jelas, aria-label pada tombol/tautan ikonik dan tombol kuis, landmark `<main>`, dan `prefers-reduced-motion` yang mematikan parallax, video hero, serta animasi berat.

Setelah deploy, ubah `site` di `astro.config.mjs` ke domain Anda.
