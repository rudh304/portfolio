# Raghd Al-Marshidi — Portfolio

Bilingual (Arabic / English) portfolio built with React, Vite and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the build
```

## Edit content

All text in both languages lives in `src/i18n/content.js`:

- `links`: email, LinkedIn, GitHub, résumé and photo paths. Optional `tableau` and `calendly` links are hidden while empty.
- `projectList`: tags, links and an optional screenshot (`image`) for each project.
- `content.en` / `content.ar`: every heading, paragraph and button label.

Values marked **SAMPLE** or **TODO** are placeholders. Replace them before publishing.

## Add your files

| File | Purpose |
|---|---|
| `public/raghd.jpg` | Portrait for the About section (a monogram shows until it exists) |
| `public/resume.pdf` | Résumé download |
| `public/projects/*.png` | Optional project screenshots; set `image: '/projects/name.png'` |

## Contact form

There's no backend. The form opens the visitor's email app with the message pre-filled.
To receive messages directly, replace `onSubmit` in `src/components/Contact.jsx` with a request to a form service such as Formspree.

## Deploy

Push to GitHub and import the repo into Vercel or Netlify. The defaults work: build command `npm run build`, output folder `dist`.
