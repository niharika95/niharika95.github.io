import React from 'react';
import { Link } from 'react-router-dom';
import './HeroCard.css';

export default function HeroCard({ project, isHovered }) {
  if (!project) return null;

  return (
    <div 
      className="hero-card"
      style={{ backgroundImage: `url("${project.image}")` }}
    >
      <div className="hero-gradient-overlay" />
      
      <div className="hero-content">
        <h1 className="hero-title">{project.cardTitle}</h1>
        <p className="hero-desc">{project.description}</p>
        <Link to={project.link} className="hero-btn">
          View case study &rarr;
        </Link>
      </div>

      <div 
        className={`hero-progress-bar ${isHovered ? 'paused' : ''}`}
        key={`progress-${project.id}`} 
      />
    </div>
  );
}
