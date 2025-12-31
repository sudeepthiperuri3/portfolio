import type { Project } from '../components/ProjectCard';

export const projects: Project[] = [
  {
    id: 'user-management-app',
    title: 'User Management Dashboard',
    description:
      'A futuristic admin dashboard with comprehensive CRUD operations, real-time search with debouncing, smart filters, sortable tables, and pagination. Features glassmorphism design, smooth animations, and a custom MUI dark theme with neon accents.',
    tags: ['React', 'TypeScript', 'Material-UI', 'Vite'],
    githubUrl: 'https://github.com/sudeepthiperuri3/user-management-app',
    featured: true,
  },
  {
    id: 'shop-sphere',
    title: 'ShopSphere E-Commerce',
    description:
      'A rich, responsive e-commerce application with product listing, category filters, price range slider, debounced search, shopping cart with localStorage persistence, and multi-step checkout. Built with real API integration from Fake Store API.',
    tags: ['React', 'TypeScript', 'Material-UI', 'Axios'],
    githubUrl: 'https://github.com/sudeepthiperuri3/shop-sphere',
    featured: true,
  },
];

export const skills = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive, accessible interfaces with React, TypeScript, and modern CSS. Focused on performance and user experience.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description:
      'Creating intuitive user experiences and beautiful interfaces. Proficient in Figma, design systems, and prototyping.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    description:
      'Optimizing web applications for speed and efficiency. Experience with code splitting, lazy loading, and caching strategies.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Modern Tooling',
    description:
      'Working with modern build tools and workflows. Proficient in Vite, Webpack, Git, and CI/CD pipelines.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export const experience = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description:
      'Leading frontend development for a SaaS platform. Architecting scalable solutions and mentoring junior developers.',
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description:
      'Built responsive web applications for diverse clients. Collaborated with designers to implement pixel-perfect interfaces.',
  },
  {
    role: 'Junior Developer',
    company: 'Startup',
    period: '2018 - 2020',
    description:
      'Started my journey in web development. Worked on various projects using React and learned modern development practices.',
  },
];
