import { defineConfig } from 'astro/config';

export default defineConfig({
  // Build into the docs folder for GitHub Pages
  outDir: './docs',
  // Sets the base root path for a user page portfolio
  base: '/',
});