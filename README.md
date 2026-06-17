# Eywal Research Group

Research site for the Eywal Research Group — an independent research initiative based in Madison, WI studying consciousness and intelligence as properties of living systems at every scale.

**Live site:** [eywal.com](https://eywal.com) <!-- update when deployed -->

---

## Focus

We work at the intersection of biology, computation, and consciousness, drawing from:

- **Bioelectricity** — how cells use electrical fields to encode body plans and coordinate behavior (Levin)
- **Basal cognition** — goal-directed behavior in non-neural systems
- **Morphogenetic fields** — field-based information beyond what DNA encodes (Sheldrake)
- **Collective intelligence** — how cell populations self-organize without central control
- **Cellular programming** — optogenetics, synthetic biology, programmable morphogenesis

---

## Stack

- [Next.js 15](https://nextjs.org) — App Router, TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [MDX + gray-matter](https://github.com/hashicorp/next-mdx-remote) — file-based content
- Deployed on [Vercel](https://vercel.com)

---

## Content

All posts live in `content/logs/` as Markdown files. A post tagged `report` automatically appears under `/reports` instead of `/logs`.

```
content/logs/
  YYYY-MM-DD-slug.md
```

**Frontmatter:**

```yaml
---
title: "Post title"
date: "2026-06-16"
tags: [bioelectricity, report]   # add "report" to promote to Reports
hidden: false                     # set true to hide from public
excerpt: "Optional custom excerpt"
---
```

---

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
```

**Admin mode** — go to `/admin` and enter the password from `.env.local`:

```bash
# .env.local
ADMIN_SECRET=yourpassword
```

When logged in, controls appear on each post to toggle visibility or promote to a report. A floating badge lets you exit.

---

## Deploy

Connect the repo to [Vercel](https://vercel.com). No configuration needed beyond setting `ADMIN_SECRET` as an environment variable in the Vercel dashboard if you want admin access on the live site.

---

*Nature. Technology. Discovery.*
