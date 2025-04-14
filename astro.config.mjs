// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercelServerless from '@astrojs/vercel';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelServerless(),
  integrations: [
    react(), 
    tailwind({
      applyBaseStyles: false
    }),
    icon()
  ],
  env: {
    schema: {
      MERCADO_PAGO_PUBLIC_KEY: envField.string({ 
        context: 'client',
        access: 'public',
      }),
      BACK_URL: envField.string({
        context: 'client',
        access: 'public',
      }),
    }
  }
});