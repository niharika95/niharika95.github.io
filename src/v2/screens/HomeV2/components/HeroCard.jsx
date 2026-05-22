import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Typography from '../../../components/Typography';
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
      <Link 
        to={project.link} 
        style={{ textDecoration: 'none', color: 'inherit' }} 
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
            </div>
          </motion.div>
        </AnimatePresence>
      </Link>

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
