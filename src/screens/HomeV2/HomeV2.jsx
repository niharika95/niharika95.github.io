import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProjectIndex from './components/ProjectIndex';
import HeroCard from './components/HeroCard';
import './HomeV2.css';

const PROJECTS = [
  {
    id: 1,
    sidebarTitle: 'Waitlist system for Ramen Nagi',
    cardTitle: <>Eliminating the 2 hour wait at Ramen Nagi</>,
    description: 'A hybrid system that eliminates physical waiting without sacrificing the walk-in culture of a successful restaurant.',
    image: "/images/projects/ramen-nagi/panel-1-ramen-nagi.png",
    link: '/v2/ramen-nagi',
    contentCols: 4
  },
  {
    id: 2,
    sidebarTitle: 'Insurance company website redesign',
    cardTitle: 'Redesigning the digital face of a $1 billion-bound insurer',
    description: 'A full redesign serving two distinct audiences, built to scale with the business.',
    image: '/images/projects/insurance-company-website-design/panel-2-insurance-website.png',
    link: '/insurance-company-website-redesign',
    buttonStyle: 'dark',
    contentCols: 4,
    hasBorder: true
  },
  {
    id: 3,
    sidebarTitle: 'Loan application optimization',
    cardTitle: '36% faster digital loan application experience',
    description: 'Streamlined a flow that was losing users it had already pre-approved, using progressive disclosure and smart defaults.',
    image: '/images/projects/loan-app-experience-optimization/panel-3-loan-application.png',
    link: '/loan-app-experience-optimization',
    buttonStyle: 'light',
    contentCols: 5
  },
  {
    id: 4,
    sidebarTitle: 'Credit evaluation tool for counselors',
    cardTitle: 'A 60% productivity gain for university counselors',
    description: 'Replaced a manual, error-prone transfer credit evaluation process with an intelligent tool that automated the heavy lifting.',
    image: '/images/projects/admissions-process-acceleration/panel-4-university-acceleration.png',
    link: '/admissions-process-acceleration',
    buttonStyle: 'dark',
    contentCols: 6
  }
];

export default function HomeV2() {
  const [[activeIndex, direction], setPage] = useState([0, 1]);
  const [isHovered, setIsHovered] = useState(false);
  const scrollTimeoutRef = useRef(null);

  // Auto-cycle is now driven visually by the RAF timer in ProjectIndex.jsx

  useEffect(() => {
    const handleWheel = (e) => {
      // Prevent whole page from scrolling on HomeV2
      if (Math.abs(e.deltaY) >= 10) {
        e.preventDefault();
      }

      // Use a timeout to debounce continuous trackpad scrolling
      if (scrollTimeoutRef.current) return;
      if (Math.abs(e.deltaY) < 10) return;

      if (e.deltaY < 0) {
        // User scrolls 'up' -> next panel (coming from top)
        setPage(prev => [(prev[0] + 1) % PROJECTS.length, 1]);
      } else if (e.deltaY > 0) {
        // User scrolls 'down' -> previous panel (coming from bottom)
        setPage(prev => [(prev[0] - 1 + PROJECTS.length) % PROJECTS.length, -1]);
      }

      // Add a debounce delay before the next scroll event can trigger
      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 800);
    };

    // Use passive: false so we can preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const activeProject = PROJECTS[activeIndex];

  return (
    <div className="home-v2">
      <header className="home-v2-header">
        <Link to="/" className="home-v2-logo">Niharika Dalal</Link>
        <div className="home-v2-nav">
          <Link to="/about" className="home-v2-link">About</Link>
          <Link to="/resume" className="home-v2-link">Resume</Link>
        </div>
      </header>

      <main className="home-v2-main">
        <div className="home-v2-left">
          <ProjectIndex
            projects={PROJECTS}
            activeIndex={activeIndex}
            onSelect={(index) => setPage(prev => [index, index > prev[0] ? 1 : -1])}
          />
        </div>
        <div
          className="home-v2-right"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <HeroCard project={activeProject} isHovered={isHovered} direction={direction} />
        </div>
      </main>
    </div>
  );
}
