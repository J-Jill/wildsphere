# WildSphere

**[Live demo → wildsphere.netlify.app](https://wildsphere.netlify.app/)**

An interactive 3D globe that visualizes real-time wildlife observations from around the world. Click any hotspot on Earth to explore the species observed at that location — photos, taxonomy, coordinates, and Wikipedia links included.

Data is sourced live from the [iNaturalist](https://www.inaturalist.org/) open API. Deployed on [Netlify](https://netlify.com).

---

## Features

- **Interactive 3D Earth** — rotate and zoom a textured globe rendered with Three.js
- **Live wildlife data** — 50 geolocated research-grade observations fetched on load
- **Hotspot markers** — animated, pulsing points placed at exact observation coordinates
- **Species panel** — tabbed detail view with Overview, Details, and Media tabs
- **Smooth transitions** — Framer Motion animations on panel content and intro overlay
- **Intro screen** — animated entry experience before the globe is revealed

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 7 |
| 3D Rendering | Three.js + React Three Fiber + Drei |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Data Fetching | TanStack Query v5 |
| UI Primitives | Radix UI |
| Icons | Lucide React |

---

## Architecture

The project follows [Feature-Sliced Design (FSD)](https://feature-sliced.design/), a scalable frontend architecture that organizes code by business domain rather than technical role.

```
src/
├── app/                         # App initialization, providers, global styles
│   ├── layout/                  # AppShell, Topbar, LeftPanel
│   ├── providers/               # QueryProvider
│   └── styles/globals.css       # Centralized global styles + Tailwind entry
├── features/
│   ├── globe/                   # 3D Earth scene
│   │   ├── model/               # TooltipContext
│   │   ├── lib/                 # Coordinate math (latLng → Vector3)
│   │   └── {GlobeScene, Earth, Hotspot, StarsBackground}.tsx
│   ├── observation-panel/       # Species detail panel
│   │   ├── api/                 # iNaturalist fetch function
│   │   ├── hooks/               # useObservations (TanStack Query)
│   │   ├── model/               # SelectionContext
│   │   ├── types/               # InatObservation, InatTaxon, InatPhoto
│   │   └── ui/                  # TabsPanel, tab content, skeletons
│   └── intro/                   # Animated intro overlay
└── shared/
    ├── lib/utils.ts             # cn() utility
    └── ui/                      # button, card, tabs, skeleton, scroll-area
```

---

## Getting Started

```bash
npm install
npm run dev
```

Requires Node 18+. No environment variables needed — the iNaturalist API is public.

---

## Credits

Wildlife observation data provided by [iNaturalist](https://www.inaturalist.org/) and its community of naturalists worldwide.
