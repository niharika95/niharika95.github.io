import React, { useEffect, useRef, useState } from 'react';
import MorphingShape from '../../HomeV1/components/MorphingShape';
import './ProjectIndex.css';

export default function ProjectIndex({ projects, activeIndex, onSelect }) {
  const [clickTrigger, setClickTrigger] = useState(0);
  const requestRef = useRef();
  const startTimeRef = useRef(null);
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
    startTimeRef.current = null;
    
    // Instantly reset all bars to 0% (Outgoing clears instantly)
    progressRefs.current.forEach(ref => {
      if (ref.current) {
        ref.current.style.width = '0%';
      }
    });

    const animate = (time) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      
      const elapsed = time - startTimeRef.current;
      const duration = 5000;
      let progress = Math.min(elapsed / duration, 1);
      
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
        <h5 className="index-label">Case studies</h5>
        <ul className="index-list">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <li 
                key={project.id} 
                className={`index-item ${isActive ? 'active' : ''}`}
                onClick={() => handleSelect(index)}
              >
                <span className="index-item-text">
                  {project.sidebarTitle}
                  {isActive && (
                    <span className="indicator-track">
                      <span className="indicator-fill" ref={progressRefs.current[index]} />
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="index-bottom">
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

        <p className="personal-text">
          I started as a front-end developer<br/>before moving into design. That<br/>changes how I work.
        </p>

        <p className="personal-subtext">
          Product designer &bull; San Jose, CA
        </p>

        <div className="social-links-text">
          <a href="https://www.linkedin.com/in/niharika-dalal-b47253b2/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="separator">|</span>
          <a href="mailto:niharika95@gmail.com">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
