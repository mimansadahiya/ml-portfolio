# Mimansa Dahiya — Portfolio

Personal, recruiter-oriented portfolio for a Business Analytics graduate working
across data science, machine learning, applied AI, financial analytics, and data
engineering.

**Live site:** https://mimansadahiya.github.io/ml-portfolio/

---

## Stack

Plain HTML, CSS, and vanilla JavaScript. No build step, no framework — keeps the
site fast and compatible with GitHub Pages (served from the `main` branch under
`/ml-portfolio/`). All paths are relative.

- **Fonts:** Fraunces (display), Inter (body), JetBrains Mono (labels/data)
- **Data:** `js/data.js` — single source of truth for projects, experience, skills
- **Logic:** `js/app.js` — renderers, case-study template engine, charts
- **Styles:** `assets/css/style.css` — design system

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Home — hero, featured work, more work, contact |
| `about.html` | Personal intro, education, student-athlete story |
| `projects.html` | Filterable + searchable project index |
| `project.html?project=<id>` | Reusable case-study template |
| `experience.html` | Employment, client-sponsored projects, skills |

## Adding a project

1. Add an entry to `window.PROJECTS` in `js/data.js`.
2. If it deserves a full case study, add a `caseStudy` object with `blocks`
   (see existing entries for the supported block types).
3. Drop any diagram SVGs into `assets/diagrams/` and reference them by path.

The homepage, project filters, project pages, and related-project links update
automatically — no changes to the reusable components are required.

### Project fields

```js
{
  id: "my-project",              // slug, used in ?project=my-project
  title: "Project title",
  org: "Organization",           // shown as eyebrow
  category: "data-science",      // key in window.CATEGORIES
  status: "completed",           // "completed" | "in-progress"
  type: "independent",           // "academic" | "independent" | "professional"
  client: "Cal Poly · X (client-sponsored)",  // optional
  featured: true,                // show on homepage
  accent: "#hex",                // cover-art accent
  summary: "One or two sentences.",
  shortRole: "What I owned, briefly.",
  tech: ["Python", "pandas"],
  links: { code: "...", live: "...", video: "..." },
  caseStudy: { lead: "...", blocks: [ /* ... */ ] }
}
```

### Case-study block types

`text`, `list`, `kpis`, `roleSplit`, `diagram`, `callout`, `panel`,
`panelList`, `progress`, `chart` (bar / donut), `links`.

## Local development

Any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

## License

Copyright (c) 2026 Mimansa Dahiya. All rights reserved.
