# Mochammad Dzikri Taufik — Portfolio

Personal portfolio / resume site built from the "Modernist" design in
`Personal Portfolio Website Design/`. Next.js (App Router) + Tailwind CSS v4 +
[motion](https://motion.dev) for animation. All content is hardcoded.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes are static)
npm run lint
```

## Structure

```
src/
  app/                 routes (/, /experience, /projects, /projects/[slug], /credentials, /contact)
    layout.tsx         Archivo font, providers, header + footer
    template.tsx       per-page enter animation
    globals.css        design tokens (@theme), .label / .display / .btn-* classes
  views/               client components that render each page from the data
  components/
    transition.tsx     red-curtain page transition + TransitionLink
    shell.tsx          sticky header, EN/ID toggle, full-screen menu
    split-text.tsx     word-by-word heading reveal
    reveal.tsx         fade-up on scroll
    counter.tsx        animated stat numbers
    engine-ornament.tsx  faded engine front view behind the hero headline
  data/content.ts      all copy (EN + ID), experience (incl. company logos),
                       projects, certs, education
  lib/i18n.tsx         language store (persisted in localStorage)
public/
  photo.jpg            hero portrait
  engine-frontview.png hero background ornament
  sanad.png, zeroonegroup.jpg, gmf.png, IMCP.png   company logos
  CV_Mochammad_Dzikri_Taufik.pdf
```

## Editing content

Everything textual lives in `src/data/content.ts`. Add a project by appending
to both `PROJECTS.en` and `PROJECTS.id` and adding its `slug` to `PROJECT_SLUGS`.
