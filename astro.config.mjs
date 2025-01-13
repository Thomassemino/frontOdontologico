import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Necesario para SSR en Vercel
  adapter: vercel(), // Añadimos el adaptador de Vercel

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
