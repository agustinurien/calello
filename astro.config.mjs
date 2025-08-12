import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercelAdapter from '@astrojs/vercel';


export default defineConfig({
    integrations: [react()],
    adapter: vercelAdapter(),
});
