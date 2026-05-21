import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Typography from '../../../components/Typography';
import './HeroCard.css';

export default function HeroCard({ project, isHovered }) {
  if (!project) return null;

  return (
    <div className="hero-card-layout">
      {/* DESKTOP LAYOUT */}
      <Link to={project.link} style={{ textDecoration: 'none', color: 'inherit' }} className={`hero-card-viewport hidden md:block ${project.hasBorder ? 'panel-border' : ''}`}>
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

      {/* MOBILE LAYOUT */}
      <Link to={project.link} style={{ textDecoration: 'none', color: 'inherit' }} className="md:hidden flex flex-col w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`mob-${project.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-full"
          >
            <Typography variant="smallLight" className="text-[#808080] mb-3">Case study</Typography>
            <Typography as="h2" variant="h3Medium" className="text-[#1A1A1A] mb-4">{project.cardTitle}</Typography>
            <Typography variant="bodyRegular" className="text-[#4D4D4D] mb-6 leading-[1.6]">{project.description}</Typography>
            <img src={project.image} alt={project.sidebarTitle} className="w-full aspect-[4/3] object-cover rounded-[20px] shadow-sm" />
          </motion.div>
        </AnimatePresence>
      </Link>
    </div>
  );
}
