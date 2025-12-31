import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import SkillCard from '../components/SkillCard';
import { skills, experience } from '../data/content';
import './About.css';

const techStack = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Material-UI',
  'Vite',
  'Git',
  'Playwright',
  'GitHub Copilot',
  'REST APIs',
  'Figma',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="about-hero-eyebrow">About Me</span>
            <h1 className="about-hero-title">
              Building the web, one pixel at a time
            </h1>
            <p className="about-hero-description">
              I'm a frontend developer with a passion for creating beautiful, 
              functional, and accessible web experiences. With a keen eye for 
              design and a love for clean code, I bridge the gap between design 
              and development.
            </p>
            <p className="about-hero-description">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source, or enjoying a good cup of coffee while 
              reading about the latest in web development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills-section">
        <div className="container">
          <SectionHeader
            eyebrow="Expertise"
            title="Skills & Capabilities"
            description="A comprehensive toolkit for building modern web applications"
          />
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-experience-section">
        <div className="container">
          <SectionHeader
            eyebrow="Experience"
            title="Where I've Worked"
            description="A journey through my professional career"
          />
          <motion.div
            className="experience-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                variants={itemVariants}
              >
                <div className="experience-period">{exp.period}</div>
                <div className="experience-content">
                  <h3>{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <SectionHeader
            eyebrow="Tech Stack"
            title="Technologies I Work With"
            description="Tools and technologies I use to bring ideas to life"
          />
          <motion.div
            className="tech-stack-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="tech-stack-item"
                variants={itemVariants}
                custom={index}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-contact-section">
        <div className="container">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision.
            </p>
            <a href="mailto:sudeepthi.peruri@gmail.com" className="contact-email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sudeepthi.peruri@gmail.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
