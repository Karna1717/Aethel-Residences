# Aethel Residences — Luxury Real Estate & Architectural Showcase Template

**Aethel Residences** is an ultra-luxury real estate and architectural landing page template crafted for flagship residential developments, penthouses, high-end condominiums, and boutique architectural firms.

Built with **React 19**, **Tailwind CSS v4**, **Three.js / React Three Fiber**, **Motion**, and **Lenis Scroll**, it delivers a cinematic, high-converting digital experience designed to impress affluent buyers and investors.

---

## ✨ Features

- **🏛️ Interactive 3D Architectural Maquette:** Embedded WebGL 3D architectural visualizer with Day & Night lighting modes, real-time reflection surfaces, and orbit camera controls powered by `@react-three/fiber` and `@react-three/drei`.
- **🌊 Ultra-Smooth Inertial Scrolling:** Integrated Lenis smooth scroll for a fluid, luxurious feel across desktop and mobile.
- **✨ Custom Luxury Cursor:** Smooth follower dot cursor with hover-expansion on interactive elements.
- **🎵 Built-in Ambient Soundscape:** Self-contained Web Audio API synthesizer delivering a warm, relaxing ambient drone without relying on external bandwidth or third-party audio servers.
- **📐 Interactive Floor Plans:** Seamless floor plan selector (Penthouse, Sky Villa, Signature Residence) with real-time specs, dimensions, and visual floor plans.
- **💎 Parallax Hero & Story Sections:** High-impact visual storytelling with scroll-driven parallax animations.
- **💰 Investment & Pricing Tiers:** Clean financial overview, ROI calculators, and global investor incentives.
- **📱 Fully Responsive:** Carefully optimized across ultra-wide monitors, laptops, tablets, and smartphones.
- **⚡ Blazing Fast Build & Performance:** Clean Vite 6 configuration with automatic vendor and 3D chunk splitting.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **3D Graphics:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations:** [Motion](https://motion.dev/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have **Node.js 18+** installed on your system.

### 2. Installation
Clone or extract the template folder, then install dependencies:

```bash
npm install
```

### 3. Development Server
Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
Compile and bundle the production-ready code:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🎨 Customization Guide

### 1. Color Palette & Typography
Global theme tokens are defined in [`src/index.css`](src/index.css):

```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, serif;
  --color-gold: #c5a059;         /* Primary brand accent */
  --color-gold-hover: #b38f48;   /* Hover state */
  --color-dark: #0a0a0a;         /* Deep luxury background */
  --color-surface: #141414;      /* Card surfaces */
  --color-border: #262626;       /* Subtle borders */
}
```
Simply edit these color values to adapt the entire site to any corporate identity.

### 2. Replacing Imagery
All high-resolution imagery is organized by section:
- **Hero Image:** [`src/components/sections/Hero.tsx`](src/components/sections/Hero.tsx)
- **Story / Philosophy:** [`src/components/sections/Story.tsx`](src/components/sections/Story.tsx)
- **Highlights & Gallery:** [`src/components/sections/Highlights.tsx`](src/components/sections/Highlights.tsx)
- **Floor Plans:** [`src/components/sections/FloorPlans.tsx`](src/components/sections/FloorPlans.tsx)
- **Neighborhood Map & Guide:** [`src/components/sections/Neighborhood.tsx`](src/components/sections/Neighborhood.tsx)

*Tip: Store local project images in the `public/images/` directory and reference them via `/images/your-image.jpg`.*

### 3. Contact Form & Lead Capture
The inquiry and private viewing booking form is located in [`src/components/sections/Contact.tsx`](src/components/sections/Contact.tsx). Connect it to your preferred backend, CRM, Formspree, or email service.

### 4. 3D Model Customization
The 3D interactive model is found in [`src/components/ui/ModelViewer.tsx`](src/components/ui/ModelViewer.tsx). You can:
- Modify colors, lighting, reflection strengths, and dimensions.
- Or replace the procedural geometry with a standard `.gltf` / `.glb` model using `useGLTF` from `@react-three/drei`.

---

## 🌐 1-Click Deployment

This project can be deployed instantly to modern hosting platforms:

### Deploy to Vercel
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository to [Netlify](https://www.netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish directory: `dist`
4. Click **Deploy Site**.

---

## 📄 Licensing & Credits

- **Template License:** Single Commercial / Extended Commercial License (as purchased).
- **Images:** Demo photos are provided courtesy of [Unsplash](https://unsplash.com) for demonstration and preview purposes only. Please replace them with your own licensed photography in your final production deployment.
- **Audio:** Synthesized in real-time via the browser's Web Audio API (100% royalty-free).
