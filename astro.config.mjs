import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    analytics: true,
    imageService: true,
    devMode: true, // Habilita el modo desarrollo
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [
    sitemap(),
    tailwind(),
  ],

  // Configuración para tu API
  vite: {
    define: {
      'process.env.API_URL': JSON.stringify('https://consultorio-odontologico-backend-production-b1c8.up.railway.app/api/')
    }
  }
});
