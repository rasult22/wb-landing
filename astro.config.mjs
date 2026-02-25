import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rasult22.github.io',
  base: '/wb-landing/',
  vite: {
    plugins: [tailwindcss()]
  }
});
