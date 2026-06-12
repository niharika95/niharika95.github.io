import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProjectIndex from './components/ProjectIndex';
import HeroCard from './components/HeroCard';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import './HomeV2LargeThumbnails.css';

const PROJECTS = [
  {
    id: 1,
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
    id: 2,
    sidebarTitle: 'Insurance exposure tool restructure',
    cardTitle: 'Eliminating context switching across 3 fragmented views.',
    description: 'An audit-led redesign of an internal insurance exposure management tool, uncovering a structural problem beneath a UI brief.',
    image: '/v2/images/projects/exposure-tool/exposure-tool-thumbnail.png',
    link: '/exposure-tool',
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
    link: '/ramen-nagi',
    contentCols: 4
  },
  {
    id: 4,
    sidebarTitle: 'Loan application optimization',
    cardTitle: '36% faster digital loan application experience',
    description: 'Streamlined a flow that was losing users it had already pre-approved, using progressive disclosure and smart defaults.',
    image: '/v2/images/projects/loan-app-experience-optimization/panel-3-loan-application.png',
    link: '/loan-app-experience-optimization',
    buttonStyle: 'light',
    contentCols: 5
  }
];

export default function HomeV2LargeThumbnails() {
  const [isInitialLoad] = useState(() => !sessionStorage.getItem('homeV2LargeThumbnailsLoaded'));
  const [timerActive, setTimerActive] = useState(!isInitialLoad);

  const [[activeIndex, direction], setPage] = useState([0, 1]);
  const handleSelect = useCallback((index) => {
    if (!timerActive) {
      setTimerActive(true);
      sessionStorage.setItem('homeV2LargeThumbnailsLoaded', 'true');
    }
    setPage(prev => {
      const prevIndex = prev[0];
      let newDirection = index > prevIndex ? 1 : -1;
      if (prevIndex === PROJECTS.length - 1 && index === 0) newDirection = 1;
      if (prevIndex === 0 && index === PROJECTS.length - 1) newDirection = -1;
      return [index, newDirection];
    });
  }, [timerActive]);

  const [isHovered, setIsHovered] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const rightPanelRef = useRef(null);

  const handleSwipe = (dir) => {
    handleSelect((activeIndex + dir + PROJECTS.length) % PROJECTS.length);
  };

  useEffect(() => {
    if (isInitialLoad && !timerActive) {
      const timer = setTimeout(() => {
        setTimerActive(true);
        sessionStorage.setItem('homeV2LargeThumbnailsLoaded', 'true');
      }, 1700);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad, timerActive]);

  useEffect(() => {
    const el = rightPanelRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) >= 30) {
        e.preventDefault();
      } else {
        return;
      }

      if (scrollTimeoutRef.current) return;

      setTimerActive(active => {
        if (!active) sessionStorage.setItem('homeV2LargeThumbnailsLoaded', 'true');
        return true;
      });

      setPage(prev => {
        const currentIndex = prev[0];
        if (e.deltaY > 0) {
          return [(currentIndex + 1) % PROJECTS.length, 1];
        } else if (e.deltaY < 0) {
          return [(currentIndex - 1 + PROJECTS.length) % PROJECTS.length, -1];
        }
        return prev;
      });

      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 700);
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [setPage]);

  const activeProject = PROJECTS[activeIndex];

  return (
    <div className="home-v2-large-thumbnails">
      <HeaderV2 isInitialLoad={isInitialLoad} />

      <main className="home-v2-large-thumbnails-main">
        <div className="home-v2-large-thumbnails-left">
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
          className={`home-v2-large-thumbnails-right ${isInitialLoad ? 'anim-panel-up' : ''}`}
          style={isInitialLoad ? { animationDelay: '900ms', animationDuration: '800ms', animationTimingFunction: 'ease-out' } : {}}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <HeroCard 
            project={activeProject} 
            projects={PROJECTS}
            activeIndex={activeIndex}
            onSelect={handleSelect}
            isHovered={isHovered} 
            direction={direction} 
            onSwipe={handleSwipe}
            setTimerActive={setTimerActive}
          />
          
          <div className="flex md:hidden justify-center items-center gap-2 mt-6">
            {PROJECTS.map((_, idx) => (
              <div 
                key={idx} 
                onClick={() => handleSelect(idx)}
                className={`relative h-[6px] rounded-full overflow-hidden transition-all duration-300 cursor-pointer bg-[#bfbfbf] ${idx === activeIndex ? 'w-10' : 'w-[6px]'}`}
              >
                {idx === activeIndex && (
                  <div 
                    key={timerActive ? 'active' : 'paused'}
                    className="absolute top-0 left-0 h-full w-full bg-[#808080] origin-left"
                    style={{
                      animation: timerActive ? 'fillProgress 5s linear forwards' : 'none',
                      animationPlayState: (!timerActive || isHovered) ? 'paused' : 'running'
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
