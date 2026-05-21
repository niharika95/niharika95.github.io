import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProjectIndex from './components/ProjectIndex';
import HeroCard from './components/HeroCard';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import './HomeV2.css';

const PROJECTS = [
  {
    id: 1,
    sidebarTitle: 'Insurance company website redesign',
    cardTitle: 'Redesigning the digital face of a $1 billion-bound insurer',
    description: 'A full redesign serving two distinct audiences, built to scale with the business.',
    image: '/images/projects/insurance-company-website-design/panel-2-insurance-website.png',
    link: '/v2/insurance-company-website-redesign',
    buttonStyle: 'dark',
    contentCols: 4,
    hasBorder: true
  },
  {
    id: 2,
    sidebarTitle: 'Insurance exposure tool restructure',
    cardTitle: 'Eliminating context switching across 3 fragmented views.',
    description: 'An audit-led redesign of an internal insurance exposure management tool, uncovering a structural problem beneath a UI brief.',
    image: '/v2/images/projects/exposure-tool/exposure-tool-thumbnail.png',
    link: '/v2/exposure-tool',
    buttonStyle: 'dark',
    contentCols: 6,
    hasBorder: true
  },
  {
    id: 3,
    sidebarTitle: 'Waitlist system for Ramen Nagi',
    cardTitle: <>Eliminating the 2 hour wait at Ramen Nagi</>,
    description: 'A hybrid system that eliminates physical waiting without sacrificing the walk-in culture of a successful restaurant.',
    image: "/v2/images/projects/ramen-nagi/panel-1-ramen-nagi.png",
    link: '/v2/ramen-nagi',
    contentCols: 4
  },
  {
    id: 4,
    sidebarTitle: 'Loan application optimization',
    cardTitle: '36% faster digital loan application experience',
    description: 'Streamlined a flow that was losing users it had already pre-approved, using progressive disclosure and smart defaults.',
    image: '/v2/images/projects/loan-app-experience-optimization/panel-3-loan-application.png',
    link: '/v2/loan-app-experience-optimization',
    buttonStyle: 'light',
    contentCols: 5
  }
];

export default function HomeV2() {
  const [isInitialLoad] = useState(() => !sessionStorage.getItem('homeV2Loaded'));
  const [timerActive, setTimerActive] = useState(!isInitialLoad);

  const [[activeIndex, direction], setPage] = useState([0, 1]);
  const handleSelect = useCallback((index) => {
    if (!timerActive) {
      setTimerActive(true);
      sessionStorage.setItem('homeV2Loaded', 'true');
    }
    setPage(prev => [index, index > prev[0] ? 1 : -1]);
  }, [timerActive]);

  const [isHovered, setIsHovered] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    if (isInitialLoad && !timerActive) {
      const timer = setTimeout(() => {
        setTimerActive(true);
        sessionStorage.setItem('homeV2Loaded', 'true');
      }, 1700);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad, timerActive]);

  // Auto-cycle is now driven visually by the RAF timer in ProjectIndex.jsx

  useEffect(() => {
    const el = rightPanelRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // Only intercept wheel events if they hit the deltaY threshold
      if (Math.abs(e.deltaY) >= 30) {
        e.preventDefault(); // Do not hijack page scroll globally, just over the panel
      } else {
        return; // Ignore micro-scrolls
      }

      // Ignore further scroll events if in cooldown
      if (scrollTimeoutRef.current) return;

      // Break initial load sequence locks identically to a sidebar click natively
      setTimerActive(active => {
        if (!active) sessionStorage.setItem('homeV2Loaded', 'true');
        return true;
      });

      setPage(prev => {
        const currentIndex = prev[0];
        if (e.deltaY > 0) {
          // User scrolls down -> advance to next panel
          return [(currentIndex + 1) % PROJECTS.length, 1];
        } else if (e.deltaY < 0) {
          // User scrolls up -> go to previous panel
          return [(currentIndex - 1 + PROJECTS.length) % PROJECTS.length, -1];
        }
        return prev;
      });

      // 700ms cooldown
      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 700);
    };

    // Localized interception on the panel area only
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [setPage]);

  const activeProject = PROJECTS[activeIndex];

  return (
    <div className="home-v2">
      <HeaderV2 isInitialLoad={isInitialLoad} />

      <main className="home-v2-main">
        <div className="home-v2-left">
          <ProjectIndex
            projects={PROJECTS}
            activeIndex={activeIndex}
            onSelect={handleSelect}
            isHovered={isHovered}
            isInitialLoad={isInitialLoad}
            timerActive={timerActive}
          />
        </div>
        <div
          ref={rightPanelRef}
          className={`home-v2-right ${isInitialLoad ? 'anim-panel-up' : ''}`}
          style={isInitialLoad ? { animationDelay: '900ms', animationDuration: '800ms', animationTimingFunction: 'ease-out' } : {}}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <HeroCard project={activeProject} isHovered={isHovered} direction={direction} />
          
          {/* Mobile Dots Indicator */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-6">
            {PROJECTS.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-[6px] rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-10 bg-[#B3B3B3]' : 'w-[6px] bg-[#E6E6E6]'}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Mobile Floating Pill Navigation */}
      <div className="fixed md:hidden bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-8 py-4 flex items-center justify-between gap-6 z-[1000] border border-gray-100 w-[max-content]">
        <Link to="/v2/about" className="text-gray-500 text-[15px] font-light no-underline">About</Link>
        <Link to="/v2/resume" className="text-gray-500 text-[15px] font-light no-underline">Resume</Link>
        <a href="https://www.linkedin.com/in/niharikadalal" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-[15px] font-light no-underline">LinkedIn</a>
        <a href="mailto:niharika95@gmail.com" className="text-gray-500 text-[15px] font-light no-underline">Email</a>
      </div>
    </div>
  );
}
