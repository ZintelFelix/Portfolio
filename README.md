````md
# Felix.dev — Portfolio

[![Live](https://img.shields.io/website?url=https%3A%2F%2Fportfolio-ten-zeta-70.vercel.app&label=Live%20Demo)](https://portfolio-ten-zeta-70.vercel.app)
![Last Commit](https://img.shields.io/github/last-commit/ZintelFelix/Portfolio)
![Repo Size](https://img.shields.io/github/repo-size/ZintelFelix/Portfolio)
![Top Language](https://img.shields.io/github/languages/top/ZintelFelix/Portfolio)

Personal portfolio website built with React/Vite featuring a 3D hero scene, project showcase, timeline, and a contact form.

**Live Demo:** https://portfolio-ten-zeta-70.vercel.app

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Performance](#performance)
- [Quality & Tooling](#quality--tooling)
- [Roadmap](#roadmap)
- [Credits](#credits)
- [License](#license)

---

## Overview

This repository contains my personal portfolio site. The goal is to present projects, experience, and a direct contact option in a clean, modern UI with an optional interactive 3D hero scene.

---

## Features

- Interactive **3D hero** (astronaut) with optional user interaction (“Activate”)
- **About** section with photo carousel, stack overview, and interactive globe
- **Projects** list with hover preview / highlight transitions
- **Experience** timeline
- **Contact** form powered by EmailJS with UI alerts

---

## Tech Stack

**Core**

- React
- Vite

**UI**

- Tailwind CSS
- Motion / animation utilities (`motion/react`)

**3D**

- three.js via `@react-three/fiber` and `@react-three/drei`
- `maath` helpers

**Messaging**

- EmailJS (`@emailjs/browser`)

---

## Architecture

High-level page flow:

```mermaid
flowchart TD
  A[App] --> N[Navbar]
  A --> H[Hero]
  H --> H3D[3D Scene (Astronaut)]
  A --> AB[About]
  A --> PR[Projects]
  A --> EX[Experience]
  A --> CO[Contact]
  A --> F[Footer]
```
````

Navigation anchors:

- `#home`
- `#about`
- `#projects`
- `#experience`
- `#contact`

---

## Project Structure

Typical layout (may evolve as features grow):

```
src/
  components/        # reusable UI components
  constants/         # data-driven content (projects, slides, links)
  sections/          # page sections: Hero, About, Projects, Experience, Contact
  styles/            # global styles (if applicable)
  main.jsx
  App.jsx
public/
  assets/            # images, icons, possibly 3D assets
```

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install

```bash
npm install
```

### Run locally (dev)

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## Configuration

### EmailJS

If you use EmailJS, it’s best practice to keep IDs/keys out of the code and use environment variables.

1. Create `.env.local` in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Use them in the contact form:

```js
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

3. Do not commit `.env.local` (keep it in `.gitignore`)

---

## Deployment

This portfolio is deployable as a static web app.

Current live deployment:

- [https://portfolio-ten-zeta-70.vercel.app](https://portfolio-ten-zeta-70.vercel.app)

---

## Performance

Common performance levers for portfolio sites with 3D + media:

### Recommended optimizations

- **Code-split the 3D scene** using `dynamic import()` (lazy-load heavy `three` dependencies)
- **Defer below-the-fold sections** (IntersectionObserver / lazy mount)
- **Optimize images** (AVIF/WebP, correct sizing, lazy-load below-the-fold)
- Avoid unnecessary main-thread work (heavy scroll handlers, forced reflow patterns)

### Practical measurement

- Run Lighthouse on `npm run preview` (production build)
- Prefer Incognito / extensions disabled for reliable numbers

---

## Quality & Tooling

Ideas that work well for professional GitHub presentation:

### Badges

- Shields.io badges for:
  - Live demo availability
  - Last commit
  - Repo size
  - Top language

### Optional automated reporting

- Lighthouse CI / Lighthouse Badges (automated performance tracking in PRs)
- Bundle visualization (`rollup-plugin-visualizer`) to identify big dependencies

---

## Roadmap

- [ ] Lighthouse/Performance pass (image delivery + lazy-load 3D + below-the-fold sections)
- [ ] Add sitemap + validated robots.txt
- [ ] Improve SEO metadata per route (title/description, OpenGraph)
- [ ] Optional: Lighthouse CI badge + report artifacts

---

## Credits

### 3D Model

- “Tenhun Falling spaceman (FanArt)” by wallmasterr (Sketchfab)
- License: CC-BY-4.0

---

## License

© 2025 Felix. All rights reserved.

```
::contentReference[oaicite:0]{index=0}
```
