# Portfolio

A sleek, modern portfolio website built with React, TypeScript, and Vite. Features an Apple-inspired design with glassmorphism effects and smooth animations.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Framer Motion** - Animations

## Features

- Responsive design for all devices
- Glassmorphism UI components
- Smooth page transitions and animations
- Dark theme with subtle accents
- Projects showcase
- About page with skills and experience

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for deployment on Vercel.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build settings
4. Click Deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── layouts/        # Layout components
├── data/           # Static content data
└── styles/         # Global styles and variables
```

## Customization

- Edit `src/data/content.tsx` to update projects and skills
- Modify `src/styles/variables.css` for colors and styling
- Update social links in `src/components/Footer.tsx`

## License

MIT
