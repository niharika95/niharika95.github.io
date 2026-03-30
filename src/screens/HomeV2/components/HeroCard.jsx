import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroCard.css';
import AnimatedPillButton from '../../../components/AnimatedPillButton/AnimatedPillButton';

export default function HeroCard({ project, isHovered }) {
  if (!project) return null;

  return (
    <div className="hero-card-layout">
      <div className={`hero-card-viewport ${project.hasBorder ? 'panel-border' : ''}`}>
        <AnimatePresence initial={false}>
          <motion.div
            key={`img-${project.id}`}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="hero-card"
            style={{ 
              backgroundImage: `url("${project.image}")`,
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0
            }}
          />
          <motion.div
            key={`txt-${project.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.3, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.1, ease: "easeOut" } }}
            className="hero-card"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              pointerEvents: 'none'
            }}
          >
            <div 
              className={`hero-content ${project.buttonStyle === 'dark' ? 'text-dark' : ''} ${project.contentCols ? 'col-' + project.contentCols : ''}`}
              style={{ pointerEvents: 'auto' }}
            >
              <h1 className="hero-title">{project.cardTitle}</h1>
              <p className="hero-desc">{project.description}</p>
              <AnimatedPillButton 
                as="link"
                to={project.link} 
                className={`hero-btn ${project.buttonStyle === 'dark' ? 'dark' : 'light'}`}
                strokeColor={project.buttonStyle === 'dark' ? '#1A1A1A' : '#FFFFFF'}
              >
                <span>View case study</span>
                <Icon icon="material-symbols:arrow-forward" width="20" height="20" className="hero-btn-arrow" />
              </AnimatedPillButton>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
