# Vysakh P — Portfolio Website

A modern, production-ready portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icons

## Setup

### 1. Install Node.js

Download and install Node.js (v18 or later) from: https://nodejs.org

### 2. Install dependencies

Open a terminal in this folder and run:

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 4. Build for production

```bash
npm run build
```

The output will be in the `dist/` folder — ready to deploy to Vercel, Netlify, or any static host.

## Deployment (Vercel — recommended)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com and import the repo
3. Vercel auto-detects Vite — just click Deploy

## Customization

All personal data is in `src/data/portfolio.js` — update:
- Email, phone, LinkedIn, GitHub links
- Resume URL (place your resume.pdf in the `public/` folder)
- Project GitHub/demo links
- Any text content

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── AnimatedSection.jsx
│       ├── LoadingScreen.jsx
│       ├── ScrollProgress.jsx
│       └── SectionHeader.jsx
├── data/
│   └── portfolio.js
├── hooks/
│   ├── useTheme.js
│   ├── useScrollSpy.js
│   └── useScrollProgress.js
├── App.jsx
├── main.jsx
└── index.css
```
