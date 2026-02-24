# 🌍 WildSphere — Premium Biodiversity Visualizer

<p align="left">
  <a href="https://wildsphere.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/LIVE%20DEMO-brightgreen?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://github.com/J-Jill/wildsphere" target="_blank">
    <img src="https://img.shields.io/badge/GITHUB%20REPO-white?style=for-the-badge&logo=github&logoColor=black" alt="GitHub Repo" />
  </a>
</p>

WildSphere is an interactive, data-driven web application that visualizes real-world wildlife observations on a 3D globe. Built with **React**, **TypeScript**, and **Three.js**, it transforms raw biodiversity data from the iNaturalist API into a cinematic, documentary-level exploratory experience.

## 🚀 Key Technical Features

### 1. Architectural Patterns
- **App Shell Model:** Designed a stable application shell that keeps the 3D experience persistent while allowing contextual UI panels to slide in/out without interrupting the render loop.
- **Declarative 3D:** Used **React Three Fiber (R3F)** and **Drei** to keep the 3D layer aligned with React’s component mental model.
- **Decoupled Logic:** Geographic-to-Cartesian conversion logic is decoupled from the rendering layer to accurately map real-world coordinates onto the 3D sphere.

### 2. Performance & Optimization
- **Render Loop Efficiency:** Hotspots animate via scale interpolation inside the render loop to avoid costly React re-renders, ensuring 60 FPS.
- **Perceived Performance:** Replaced standard spinners with **custom skeletons** and staggered entrance animations via **Framer Motion** to guide user focus.
- **Camera Orchestration:** Intentionally constrained camera controls using OrbitControls targets to preserve a focused UX and avoid abrupt transitions.

### 3. Data Architecture
- **iNaturalist Integration:** Consumes real-world, geo-referenced biodiversity data. 
- **Type-Safe Models:** Modeled only necessary fields from the API to keep TypeScript definitions focused and maintainable.
- **State Management:** Used a lightweight context to manage UI-level state without polluting the data layer.

## 🎨 Design System (Premium Aesthetic)
- **Visual Identity:** A "documentary-style" UI using **Playfair Display** (Serif) for elegance and **Inter** (Sans-serif) for readability.
- **Motion Design:** Cinematic fade-ups and zoom transitions that introduce the user to the globe through an onboarding flow.
- **Interactive Hotspots:** Amber-colored markers with a pulse/glow animation that reveal detailed observation cards on hover/click.

## 🛠️ Tech Stack
- **Frontend:** React 18, TypeScript, Tailwind CSS.
- **3D Engine:** Three.js, React Three Fiber, @react-three/drei.
- **Animation:** Framer Motion.
- **UI Components:** Radix UI / Shadcn.
- **Data:** iNaturalist API.

## 📜 Credits & Attributions
- **Earth Textures:** Courtesy of NASA Visible Earth (Blue Marble: Next Generation).
- **Data Source:** Biodiversity data provided by the iNaturalist open API.

---
*Developed by [Jillian Ramirez](https://github.com/J-Jill)*
