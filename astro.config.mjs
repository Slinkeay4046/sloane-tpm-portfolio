import { defineConfig } from 'astro/config';

// Vercel detects Astro automatically. Static output is the default and keeps
// this portfolio deployable without a server runtime.
export default defineConfig({ output: 'static', site: 'https://portfolio.vercel.app' });
