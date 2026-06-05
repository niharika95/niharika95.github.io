import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Typography from '../../../components/Typography';
import AnimatedPillButton from '../../../components/AnimatedPillButton/AnimatedPillButton';
import { Icon } from '@iconify/react';
import MobileCarousel from './MobileCarousel';
import './HeroCard.css';

export default function HeroCard({ 
  project, 
  projects = [], 
  activeIndex = 0, 
  onSelect,
  isHovered, 
  direction = 1, 
  onSwipe,
  setTimerActive
}) {
  if (!project || projects.length === 0) return null;

  return (
    <div className="hero-card-layout">
      {/* DESKTOP LAYOUT */}
      <div 
        className={`hero-card-viewport hidden md:block ${project.hasBorder ? 'panel-border' : ''}`}
      >
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
              <Typography as="h1" variant="h2Medium" className="hero-title">{project.cardTitle}</Typography>
              <Typography variant="bodyRegular" className="hero-desc">{project.description}</Typography>
              <AnimatedPillButton
                as="link"
                to={project.link}
                style={{ textDecoration: 'none' }}
                strokeColor={project.buttonStyle === 'dark' ? '#111827' : '#FFFFFF'}
                className={`hero-card-button ${project.buttonStyle === 'dark' ? 'dark-theme' : 'light-theme'}`}
              >
                <span>View case study</span>
                <Icon icon="material-symbols:arrow-right-alt-rounded" width="20" className="hero-card-button-icon" />
              </AnimatedPillButton>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MOBILE LAYOUT - Scoped GPU-accelerated CSS scroll snap carousel */}
      <div className="md:hidden w-full">
        <MobileCarousel 
          projects={projects}
          activeIndex={activeIndex}
          onSelect={onSelect}
          setTimerActive={setTimerActive}
        />
      </div>
    </div>
  );
}
