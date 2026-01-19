import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://ipao.com.ua',
  base: '/',
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
