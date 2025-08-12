import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
    output: 'server',         // Activa runtime serverless (SSR)
    adapter: vercel(),        // Adaptador Vercel Serverless
    integrations: [react()],
});
