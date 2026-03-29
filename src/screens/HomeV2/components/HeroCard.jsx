import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroCard.css';

export default function HeroCard({ project, isHovered, direction = 1 }) {
  if (!project) return null;

  const variants = {
    enter: (dir) => ({
      y: dir > 0 ? "-100%" : "100%",
      opacity: 0
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: (dir) => ({
      zIndex: 0,
      y: dir > 0 ? "100%" : "-100%",
      opacity: 0
    })
  };

  return (
    <div className="hero-card-layout">
      <div className="hero-card-viewport">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div 
            key={project.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="hero-card"
            style={{ 
              backgroundImage: `url("${project.image}")`,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <div className="hero-gradient-overlay" />
            
            <div className="hero-content">
              <h1 className="hero-title">{project.cardTitle}</h1>
              <p className="hero-desc">{project.description}</p>
              <Link to={project.link} className="hero-btn">
                View case study <Icon icon="material-symbols:arrow-forward" width="20" height="20" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="external-progress-track">
        <div 
          className={`external-progress-fill ${isHovered ? 'paused' : ''}`}
          key={`progress-${project.id}`} 
        />
      </div>
    </div>
  );
}
