import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import profilePhoto from './profile.jpg';
import userManagementPreview from './user-management.png';
import shopSpherePreview from './shop-sphere.png';

const projects = [
  { title: 'User Management Dashboard', kind: 'SAAS PLATFORM', description: 'A focused admin experience with scalable CRUD flows, quick search, smart filtering, sorting and pagination.', tags: ['React', 'TypeScript', 'MUI', 'Vite'], live: 'https://user-management-app-xi-seven.vercel.app', source: 'https://github.com/sudeepthiperuri3/user-management-app', tone: 'violet', image: userManagementPreview },
  { title: 'ShopSphere E-Commerce', kind: 'COMMERCE', description: 'A polished shopping journey with catalog filters, persistent cart state and a streamlined multi-step checkout.', tags: ['React', 'TypeScript', 'REST API', 'Axios'], live: 'https://shop-sphere-beige.vercel.app/', source: 'https://github.com/sudeepthiperuri3/shop-sphere', tone: 'blue', image: shopSpherePreview },
];

const skills = [
  ['Applied AI experiences', 'Conversational product flows, streamed model output, tool execution, and human-in-the-loop interactions.'],
  ['Frontend architecture', 'Scalable React and TypeScript interfaces with clear component boundaries and maintainable state.'],
  ['Design systems', 'Reusable UI patterns that make accessible, high-quality product delivery repeatable.'],
  ['Product collaboration', 'Pragmatic partnership across design, backend, and product to make complex behavior feel clear.'],
];

const tech = ['React', 'TypeScript', 'JavaScript', 'Java', 'Node.js', 'Modern CSS', 'REST APIs', 'SSE', 'Playwright', 'Git', 'Figma', 'Applied AI'];

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light');
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('portfolio-theme', theme); }, [theme]);
  return <header className="site-header"><div className="shell nav-wrap">
    <Link to="/" className="brand" aria-label="Sudeepthi Peruri home"><span>SP</span><b>Sudeepthi Peruri</b></Link>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><i></i><i></i></button>
    <nav className={open ? 'nav-links open' : 'nav-links'}>
      <NavLink to="/" end>Home</NavLink><NavLink to="/about">About</NavLink><NavLink to="/projects">Projects</NavLink>
      <button className="theme-switch" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}><span aria-hidden="true">{theme === 'light' ? '◐' : '☼'}</span></button>
      <a className="nav-contact" href="mailto:sudeepthi.peruri@gmail.com">Let's talk <Arrow /></a>
    </nav>
  </div></header>;
}

function Footer() { return <footer><div className="shell footer-wrap"><span>© {new Date().getFullYear()} Sudeepthi Peruri</span><div><a href="https://www.linkedin.com/in/sudeepthi-peruri-ba391a204/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/sudeepthiperuri3" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:sudeepthi.peruri@gmail.com">Email</a></div><span>Built with intent.</span></div></footer>; }

function Eyebrow({ children }: { children: React.ReactNode }) { return <span className="eyebrow"><i></i>{children}</span>; }
function PageIntro({ eyebrow, title, copy }: { eyebrow: string, title: string, copy: string }) { return <section className="page-intro shell"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{copy}</p></section>; }

function Home() { return <>
  <section className="hero"><div className="shell hero-grid"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
    <Eyebrow>Software engineer · Applied AI &amp; Full-Stack</Eyebrow><h1>Making complex AI products feel <em>clear.</em></h1><p>I’m Sudeepthi, a software engineer with nearly five years of experience building polished, production-ready web experiences for enterprise users.</p>
    <div className="button-row"><Link className="button primary" to="/projects">Explore my work <Arrow /></Link><Link className="text-link" to="/about">More about me <span>→</span></Link></div>
  </motion.div><motion.aside className="hero-note" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .13 }}><div className="profile-summary"><img src={profilePhoto} alt="Sudeepthi Peruri" /><div><strong>Sudeepthi Peruri</strong><span>Software Engineer</span></div></div><p>Currently focused on</p><strong>AI-enabled user experiences,<br />React systems<br />&amp; usable workflows.</strong><span className="note-index">01 / 03</span></motion.aside></div></section>
  <section className="featured shell"><div className="section-heading"><div><Eyebrow>Selected work</Eyebrow><h2>Made to solve real problems.</h2></div><Link to="/projects" className="text-link">All projects <span>→</span></Link></div><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></section>
</> }

function ProjectCard({ project, index }: { project: typeof projects[number], index: number }) { return <motion.article className="project-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}><div className={`project-art ${project.tone}`}><span>{project.kind}</span><img src={project.image} alt={`${project.title} preview`} /></div><div className="project-body"><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-actions"><a href={project.live} target="_blank" rel="noreferrer">Live site <Arrow /></a><a href={project.source} target="_blank" rel="noreferrer">Source</a></div></div></motion.article>; }

function Projects() { return <><PageIntro eyebrow="Selected work" title="A few things I’ve helped bring to life." copy="Practical interfaces with the visual clarity and interaction quality people expect from modern products." /><main className="shell projects-list">{projects.map((p, i) => <ProjectCard project={p} index={i} key={p.title} />)}</main><section className="closing shell"><Eyebrow>Have something in mind?</Eyebrow><h2>Let’s create an experience people want to use.</h2><a className="button primary" href="mailto:sudeepthi.peruri@gmail.com">Start a conversation <Arrow /></a></section></> }

function About() { return <><PageIntro eyebrow="About me" title="I build products at the intersection of AI and human experience." copy="I’m a software engineer with nearly five years of experience building production web applications and AI-enabled experiences for enterprise users." /><main className="shell about-content"><section className="about-story"><h2>Complex systems, made usable.</h2><div><p>My work spans React, TypeScript, JavaScript, Java, Node.js, REST APIs, and real-time streaming interfaces. I enjoy working across the product stack—from accessible frontends to service integration and AI-enabled workflows.</p><p>I’m especially interested in Applied AI Frontend Engineer, AI Product Engineer, and Senior Frontend Engineer roles where strong product thinking and useful AI experiences matter.</p><a href="mailto:sudeepthi.peruri@gmail.com" className="text-link">Get in touch <span>→</span></a></div></section><section className="experience"><Eyebrow>Experience</Eyebrow><h2>Five years building enterprise products.</h2><div className="timeline"><Timeline period="Jul 2024 — Present" role="Software Engineer" company="JPMorganChase" text="Engineering enterprise AI-assistant experiences with conversational workflows, streamed responses, reusable UI patterns, and human-in-the-loop interactions." /><Timeline period="Nov 2021 — Jul 2024" role="Software Analyst" company="HCL Technologies" text="Built modular React components, integrated REST APIs, and strengthened production features through performance work, reviews, and technical-debt reduction." /></div></section><section className="capabilities"><Eyebrow>Capabilities</Eyebrow><h2>A reliable toolkit for product teams.</h2><div className="skills-grid">{skills.map(([title, description], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section><section className="stack"><Eyebrow>Tools I use</Eyebrow><div>{tech.map(item => <span key={item}>{item}</span>)}</div></section></main></> }
function Timeline({ period, role, company, text }: { period:string, role:string, company:string, text:string }) { return <article><span>{period}</span><div><h3>{role}</h3><b>{company}</b><p>{text}</p></div></article>; }

function App() { const location = useLocation(); return <div className="app"><Header /><AnimatePresence mode="wait"><motion.main key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .22 }}><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/projects" element={<Projects />} /></Routes></motion.main></AnimatePresence><Footer /></div>; }
export default App;
