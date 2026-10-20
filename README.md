# Sloane Keay Davidson — TPM / Product Portfolio

A static portfolio for Technical Program Management, Product Strategy, and Software Engineering. It is based on the official [Astro Portfolio Starter](https://github.com/withastro/astro/tree/main/examples/portfolio), adapted with original professional content. The upstream starter is available under the MIT License.

## Local development

Use Node.js 22.22 or later.

```sh
npm install
npm run dev
```

Astro serves the site locally, normally at `http://localhost:4321`.

## Production build

```sh
npm run build
npm run preview
```

The static site is generated in `dist/`.

## Vercel deployment

Vercel detects Astro automatically. If settings are requested, configure:

- Framework Preset: **Astro**
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js: **22.22+**

No server-side environment variables are required for this static deployment.

## Content and assets

- Case studies live in `src/content/work/` and generate individual project pages.
- The resume download is `public/Sloane_Davidson_Resume.pdf`.
- The public contact path is LinkedIn; no email address is displayed on the site.

## Accuracy and privacy

Case studies intentionally exclude confidential client details, unverified metrics, financial impact, and claims of formal ownership not supported by the source material.
