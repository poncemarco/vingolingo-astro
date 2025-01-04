// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercelServerless from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercelServerless(),
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false
    })]
});