import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/shadow-gaming-cafe/',
  output: 'static',
  site: 'https://shadow-gaming-cafe.netlify.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
      config: './tailwind.config.cjs',
    }),
  ],
});