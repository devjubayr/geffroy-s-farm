# Rultiva — Agriculture Landing Page

A pixel-close recreation of the Rultiva landing page built with **Next.js 14 (App Router)** + **Framer Motion 11**.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  layout.tsx          # Root layout + metadata
  page.tsx            # Entry point → renders <RultivaLanding />
components/
  RultivaLanding.jsx  # All sections in one "use client" file
next.config.js
package.json
```

## Framer Motion Animations Used

| Section | Animation |
|---|---|
| Navbar | Slides down on mount, background crossfades on scroll |
| Hero | Staggered fade-up, parallax scroll on image |
| Stats | Counter reveal with stagger on scroll enter |
| Problem | Slide-in from sides |
| Gallery | Horizontal card slide-in with hover lift |
| Expert Banner | Parallax horizontal drift on scroll |
| Services | Staggered card reveal + hover float |
| Newsletter | Scale reveal |
| All sections | `useInView` + `once: true` for performant scroll triggers |

## Moving images to real ones
Replace the CSS gradient backgrounds in each section card with `<Image>` from `next/image` pointing to your real farm photos.
