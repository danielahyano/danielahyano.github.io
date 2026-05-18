import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: './docs',
  base: '/',
  build: {
    // Forces Astro to use a clean "assets" folder instead of "_astro"
    assets: 'assets'
  }
});