import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  showScrollIndicator?: boolean;
}

export default function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  showScrollIndicator = true,
}: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient hero-gradient-1" />
        <div className="hero-gradient hero-gradient-2" />
      </div>

      <motion.div
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {eyebrow && (
          <motion.span className="hero-eyebrow" variants={itemVariants}>
            {eyebrow}
          </motion.span>
        )}

        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="hero-title-highlight">{title}</span>
        </motion.h1>

        <motion.p className="hero-description" variants={itemVariants}>
          {description}
        </motion.p>

        <motion.div className="hero-cta" variants={itemVariants}>
          {primaryCta && (
            <Link to={primaryCta.href} className="hero-btn hero-btn-primary">
              {primaryCta.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
          {secondaryCta && (
            <Link to={secondaryCta.href} className="hero-btn hero-btn-secondary">
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>
      </motion.div>

      {showScrollIndicator && (
        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          Scroll
        </motion.div>
      )}
    </section>
  );
}
