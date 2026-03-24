import React from 'react';
import './ProjectIndex.css';

export default function ProjectIndex({ projects, activeIndex, onSelect }) {
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
                onClick={() => onSelect(index)}
              >
                {project.sidebarTitle}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="index-bottom">
        <div className="personal-stats">
          <div className="stat">
            <span className="stat-num">17</span>
            <span className="stat-lbl">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-num">13</span>
            <span className="stat-lbl">Clients</span>
          </div>
        </div>

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
