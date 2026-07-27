# Content Migration Guide

This site uses Astro Content Collections for `blog`, `projects`, and `work`.
You can paste your Markdown into these folders following the frontmatter below.

## Blog posts

Place under: `src/content/blog/<slug>/index.md`

Frontmatter template:

```md
---
title: "Post title"
description: "Short description"
date: YYYY-MM-DD
# draft: true  # optional
---

Your content here...
```

## Projects

Place under: `src/content/projects/<slug>/index.md`

Frontmatter template:

```md
---
title: "Project title"
description: "Short description"
date: YYYY-MM-DD
demoURL: "https://demo.example.com" # optional
repoURL: "https://github.com/user/repo" # optional
# draft: true  # optional
---

Your content here...
```

## Work Experience

Place under: `src/content/work/<company>.md`

Frontmatter template:

```md
---
company: "Company Name"
role: "Your Role"
dateStart: YYYY-MM-DD
# For ongoing roles you can set a string like "Present"
dateEnd: YYYY-MM-DD | "Present"
---

Brief responsibilities or highlights in Markdown.
```

## About page

A starter lives at: `src/pages/about.md`. Edit it directly or replace its content with your own Markdown.

## External sections (Publications, Teaching, Portfolio)

For now the header links point to your existing pages on `carluve.github.io`.
If you prefer to migrate them here, we can:
- Create content collections (e.g. `publications`, `teaching`) with custom schemas; or
- Add simple Markdown pages under `src/pages/publications.md` and `src/pages/teaching.md`.

## Validate types

Run one of the following to generate content collection types and catch issues:

```bash
pnpm dev
# or
pnpm build
# or
pnpm astro sync
```
