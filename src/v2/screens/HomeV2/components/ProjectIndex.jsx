import React, { useEffect, useRef, useState } from 'react';
import Typography from '../../../components/Typography';
import './ProjectIndex.css';

export default function ProjectIndex({ projects, activeIndex, onSelect, isHovered, isInitialLoad, timerActive }) {
  const [clickTrigger, setClickTrigger] = useState(0);
  const isHoveredRef = useRef(isHovered);
  const timerActiveRef = useRef(timerActive);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    timerActiveRef.current = timerActive;
  }, [timerActive]);

  const [activeVisualIndex, setActiveVisualIndex] = useState(activeIndex);
  const prevActiveRef = useRef(activeIndex);

  useEffect(() => {
    if (activeIndex !== prevActiveRef.current) {
      setActiveVisualIndex(null);
      let f1, f2;
      f1 = requestAnimationFrame(() => {
        f2 = requestAnimationFrame(() => {
          setActiveVisualIndex(activeIndex);
        });
      });
      prevActiveRef.current = activeIndex;
      return () => {
        cancelAnimationFrame(f1);
        cancelAnimationFrame(f2);
      };
    }
  }, [activeIndex]);
  const requestRef = useRef();
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);
  const activeIndexRef = useRef(activeIndex);
  
  const progressRefs = useRef([]);
  if (progressRefs.current.length !== projects.length) {
    progressRefs.current = Array(projects.length).fill().map((_, i) => progressRefs.current[i] || React.createRef());
  }

  const handleSelect = (index) => {
    onSelect(index);
    setClickTrigger(c => c + 1);
  };

  useEffect(() => {
    activeIndexRef.current = activeIndex;
    elapsedRef.current = 0;
    lastTimeRef.current = null;
    
    // Instantly reset all bars to 0% (Outgoing clears instantly)
    progressRefs.current.forEach(ref => {
      if (ref.current) {
        ref.current.style.width = '0%';
      }
    });

    const animate = (time) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time;
      
      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;
      
      if (!isHoveredRef.current && timerActiveRef.current) {
        elapsedRef.current += deltaTime;
      }

      const duration = 5000;
      let progress = Math.min(elapsedRef.current / duration, 1);
      
      const currentRef = progressRefs.current[activeIndexRef.current]?.current;
      if (currentRef) {
        currentRef.style.width = `${progress * 100}%`;
      }

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        const nextIndex = (activeIndexRef.current + 1) % projects.length;
        onSelect(nextIndex);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [activeIndex, clickTrigger, onSelect, projects.length]);

  return (
    <div className="project-index">
      <div className="index-top">
        <Typography
          as="h5"
          variant="extraSmallRegular"
          className={`index-label ${isInitialLoad ? 'anim-fade-in' : ''}`}
          style={isInitialLoad ? { animationDelay: '350ms', animationDuration: '500ms', animationTimingFunction: 'ease-out' } : {}}
        >
          Case studies
        </Typography>
        <ul className="index-list">
          {projects.map((project, index) => {
            const isLogicalActive = index === activeIndex;
            const isVisualActive = index === activeVisualIndex;
            return (
              <li 
                key={project.id} 
                className={`index-item ${isVisualActive ? 'active' : ''} ${isInitialLoad ? 'anim-fade-in' : ''}`}
                style={isInitialLoad ? { animationDelay: `${700 + 200 * index}ms`, animationDuration: '500ms', animationTimingFunction: 'ease-out' } : {}}
                onClick={() => handleSelect(index)}
              >
                <Typography as="span" variant="smallLight" className="index-item-text">
                  {project.sidebarTitle}
                  {isLogicalActive && (
                    <span className="indicator-track">
                      <span className="indicator-fill" ref={progressRefs.current[index]} />
                    </span>
                  )}
                </Typography>
              </li>
            );
          })}
        </ul>
      </div>

      <div 
        className={`index-bottom ${isInitialLoad ? 'anim-fade-in' : ''}`}
        style={isInitialLoad ? { animationDelay: '1300ms', animationDuration: '500ms', animationTimingFunction: 'ease-out' } : {}}
      >
        {/* <div className="personal-stats">
          <div className="stat">
            <span className="stat-num">17</span>
            <span className="stat-lbl">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-num">13</span>
            <span className="stat-lbl">Clients</span>
          </div>
        </div> */}

        <Typography variant="smallLight" className="personal-text">
          I started as a front-end developer<br/>before moving into design. That<br/>changes how I work.
        </Typography>

        <Typography variant="extraSmallRegular" className="personal-subtext">
          Product designer &bull; San Jose, CA
        </Typography>

        <div className="social-links-text">
          <a href="https://www.linkedin.com/in/niharikadalal" target="_blank" rel="noopener noreferrer">
            <Typography as="span" variant="bodyLight">LinkedIn</Typography>
          </a>
          <span className="separator">|</span>
          <a href="mailto:niharika95@gmail.com">
            <Typography as="span" variant="bodyLight">Email</Typography>
          </a>
        </div>
      </div>
    </div>
  );
}
