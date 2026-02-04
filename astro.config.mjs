import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aaabayarea.com',
  base: '/',
  outDir: './docs',
  devToolbar: {
    enabled: false,
  },
});
