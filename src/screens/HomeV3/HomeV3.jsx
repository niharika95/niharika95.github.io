import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectIndex from './components/ProjectIndex';
import HeroCard from './components/HeroCard';
import './HomeV3.css';
import ramenNagiImg from '../../assets/RamenNagiCaseStudy/Ramen nagi app in hand.png';

const PROJECTS = [
  {
    id: 1,
    sidebarTitle: 'Eliminating the wait',
    cardTitle: 'Eliminating the 2 hour wait at Ramen Nagi',
    description: 'Redesigned the queue and reservation experience for a high-traffic restaurant, cutting average wait time by 40%.',
    image: ramenNagiImg,
    link: '/ramen-nagi'
  },
  {
    id: 2,
    sidebarTitle: 'Public facing website redesign',
    cardTitle: 'Public facing website redesign',
    description: 'End-to-end redesign of a B2B SaaS marketing site, improving lead conversion by 28%.',
    image: '/insurance-company-website-design/hero.png',
    link: '/insurance-company-website-redesign'
  },
  {
    id: 3,
    sidebarTitle: 'Optimizing Loan Application Process',
    cardTitle: 'Optimizing the loan application process',
    description: 'Simplified a complex multi-step flow for a fintech client, reducing drop-off by 34%.',
    image: '/loan-app-experience-optimization/hero.png',
    link: '/loan-app-experience-optimization'
  },
  {
    id: 4,
    sidebarTitle: 'Accelerating Application Processing',
    cardTitle: 'Accelerating university application processing',
    description: 'Redesigned the counselor dashboard, resulting in a 60% boost in productivity.',
    image: '/admissions-process-acceleration/image 28.png',
    link: '/admissions-process-acceleration'
  }
];

const AUTO_CYCLE_TIME = 5000;

export default function HomeV3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % PROJECTS.length);
    }, AUTO_CYCLE_TIME);

    return () => clearTimeout(timer);
  }, [activeIndex, isHovered]);

  const activeProject = PROJECTS[activeIndex];

  return (
    <div className="home-v3">
      <header className="home-v3-header">
        <Link to="/" className="home-v3-logo">Niharika Dalal</Link>
        <div className="home-v3-nav">
          <Link to="/about" className="home-v3-link">About</Link>
          <Link to="/resume" className="home-v3-link">Resume</Link>
        </div>
      </header>
      
      <main className="home-v3-main">
        <div className="home-v3-left">
          <ProjectIndex 
            projects={PROJECTS}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </div>
        <div 
          className="home-v3-right"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <HeroCard project={activeProject} isHovered={isHovered} />
        </div>
      </main>
    </div>
  );
}
