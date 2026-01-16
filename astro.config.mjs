import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://example.com', // TODO: Update this to your custom domain (e.g. https://unga.org.ua)
  integrations: [tailwind()],
  // Uncomment below if deploying to a subdirectory on GitHub Pages
  // base: '/ipao',
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
