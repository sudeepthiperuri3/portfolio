import { motion } from 'framer-motion';
import './SectionHeader.css';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`section-header section-header--${align}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {eyebrow && <span className="section-header-eyebrow">{eyebrow}</span>}
      <h2 className="section-header-title">{title}</h2>
      {description && <p className="section-header-description">{description}</p>}
    </motion.div>
  );
}
