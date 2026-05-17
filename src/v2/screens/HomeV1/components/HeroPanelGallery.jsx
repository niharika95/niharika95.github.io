import React, { useState, useEffect, useRef } from 'react';
import MorphingShape from './MorphingShape';
import './HeroPanelGallery.css';

const PANELS = [
  {
    id: 1,
    type: 'intro',
    title: '',
    content: (
      <>
        I started as a front-end developer<br />
        before moving into design.<br />
        That changes how I work. <MorphingShape />
      </>
    ),
    stats: [
      { number: '17', label: 'Projects shipped' },
      { number: '13', label: 'Clients' }
    ],
    tag: 'Product designer | San Jose, CA',
    background: '#FFFFFF',
    color: '#333333'
  },
  {
    id: 2,
    type: 'project',
    title: (
      <span style={{ display: 'inline-block', maxWidth: '80%', lineHeight: '1.2' }}>
        Eliminating the<br />
        2 hour wait at<br />
        Ramen Nagi <MorphingShape />
      </span>
    ),
    content: '',
    tag: '',
    backgroundImage: "/v2/images/projects/ramen-nagi/Ramen-nagi-app-in-hand.png",
    background: '#1A1A1A', // Fallback color
    color: '#FFFFFF'
  },
  {
    id: 3,
    type: 'project',
    title: 'Design System at Scale',
    content: 'Built a token-based system used across 6 product teams, cutting design debt significantly.',
    tag: 'Systems · 2023',
    background: 'linear-gradient(to top, #4A1A2C, #1A1A1A)',
    color: '#FFFFFF'
  },
  {
    id: 4,
    type: 'project',
    title: 'AI-Powered Search UX',
    content: 'Explored zero-query and intent-based search patterns for a B2B SaaS platform.',
    tag: 'Research · 2024',
    background: 'linear-gradient(to top, #3A6B88, #16243A)',
    color: '#FFFFFF'
  },
  {
    id: 5,
    type: 'project',
    title: 'Mobile Checkout Overhaul',
    content: 'End-to-end redesign of the checkout experience, improving conversion on mobile.',
    tag: 'Product · 2023',
    background: 'linear-gradient(to top, #432C7A, #C85A3C)',
    color: '#FFFFFF'
  }
];

const AUTO_CYCLE_TIME = 5000;

const HeroPanelGallery = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1); // -1 keeps all panels collapsed initially
  const [isInitializing, setIsInitializing] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // Initial staggered entry sequence
  useEffect(() => {
    // Wait for all 5 panels to enter (150ms stagger + 800ms animation duration)
    const introTimer = setTimeout(() => {
      setIsInitializing(false);

      // A tiny delay before expanding ensures the "entering" animation classes
      // are fully removed from the DOM before we trigger the flex transition
      setTimeout(() => {
        setExpandedIndex(0); // Finally expand the 1st panel
      }, 100);
    }, 1500);

    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    // Only run the auto-cycle timer if we are fully initialized and not hovering
    if (isHovered || isInitializing || expandedIndex === -1) {
      return;
    }

    timerRef.current = setTimeout(() => {
      setExpandedIndex((prev) => (prev + 1) % PANELS.length);
    }, AUTO_CYCLE_TIME);

    return () => clearTimeout(timerRef.current);
  }, [expandedIndex, isHovered]);

  const handlePanelClick = (index) => {
    if (expandedIndex !== index) {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="hero-gallery">
      {PANELS.map((panel, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <div
            key={panel.id}
            className={`panel ${isExpanded ? 'expanded' : 'collapsed'} ${isInitializing ? 'entering' : ''}`}
            style={{
              background: panel.backgroundImage ? `url("${panel.backgroundImage}") center/cover no-repeat` : panel.background,
              color: panel.color,
              animationDelay: isInitializing ? `${index * 0.15}s` : '0s'
            }}
            onClick={() => handlePanelClick(index)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`panel-inner ${isExpanded ? 'visible' : ''}`}>
              {panel.type === 'intro' ? (
                <div className="panel-content-intro">
                  <div>
                    <div className="intro-text">{panel.content}</div>

                    {panel.stats && (
                      <div className="intro-stats">
                        {panel.stats.map((stat, i) => (
                          <div key={i} className="stat-item">
                            <h4 className="stat-number">{stat.number}</h4>
                            <span className="stat-label">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="intro-footer">
                    <span className="intro-tag">{panel.tag}</span>
                    {panel.link && <span className="intro-link">{panel.link}</span>}
                  </div>
                </div>
              ) : (
                <div className="panel-content-project">
                  <div className="project-title-desc">
                    <h3 className="project-title">{panel.title}</h3>
                    <p className="project-desc">{panel.content}</p>
                  </div>
                  <div className="project-footer">
                    <span className="project-tag">{panel.tag}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Expand Hint Icon -> only visible on hover of collapsed panel */}
            {!isExpanded && (
              <div className="expand-hint">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            )}

            {/* Progress Bar -> only on expanded panel */}
            {isExpanded && (
              <div
                className={`progress-bar ${isHovered ? 'paused' : ''}`}
                // key helps restart the CSS animation when the expanded panel changes
                key={`progress-${index}`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HeroPanelGallery;
