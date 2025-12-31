import Hero from '../components/Hero';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <Hero
        eyebrow="Frontend Developer"
        title="I craft beautiful digital experiences that users love"
        description="Passionate about building elegant, performant, and accessible web applications. Turning complex problems into simple, intuitive interfaces."
        primaryCta={{ label: 'View My Work', href: '/projects' }}
        secondaryCta={{ label: 'About Me', href: '/about' }}
        showScrollIndicator={false}
      />
    </div>
  );
}
