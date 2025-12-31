import { motion } from 'framer-motion';
import './SkillCard.css';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function SkillCard({ icon, title, description, index = 0 }: SkillCardProps) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="skill-card-icon">{icon}</div>
      <h3 className="skill-card-title">{title}</h3>
      <p className="skill-card-description">{description}</p>
    </motion.div>
  );
}
