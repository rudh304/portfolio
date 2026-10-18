# Raghd Al-Marshidi — Portfolio

Bilingual (Arabic / English) portfolio with light and dark modes, built with React, Vite and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the build
```

## Edit content

All text in both languages lives in `src/i18n/content.js`:

- `links`: LinkedIn, X, an optional GitHub link (hidden while empty) and the photo path.
- `projectList`: tags, links and an optional screenshot (`image`) for each project.
- `certificateList`: icon and an optional PDF (`file`) for each certificate.
- `content.en` / `content.ar`: every heading, paragraph and button label.

## Files

| File | Purpose |
|---|---|
| `public/raghd.jpg` | Portrait for the About section (a monogram shows until it exists) |
| `public/projects/jarir-loyalty-system.pdf` | Jarir loyalty project report |
| `public/certificates/*.pdf` | Certificates linked from the Certificates section |

## Deploy

Import the repo into Vercel or Netlify. The defaults work: build command `npm run build`, output folder `dist`.
