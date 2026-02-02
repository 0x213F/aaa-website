import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://0x213f.github.io',
  base: '/aaa-website',
  outDir: './docs',
  devToolbar: {
    enabled: false,
  },
});
