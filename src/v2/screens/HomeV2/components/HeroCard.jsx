import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Typography from '../../../components/Typography';
import './HeroCard.css';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function HeroCard({ project, isHovered, direction = 1, onSwipe }) {
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
      <Link to={project.link} style={{ textDecoration: 'none', color: 'inherit' }} className="md:hidden grid w-full relative overflow-hidden">
        <AnimatePresence custom={direction}>
          <motion.div
            key={`mob-${project.id}`}
            custom={direction}
            initial={{ opacity: 0, x: direction === 1 ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? '-100%' : '100%' }}
            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="flex flex-col w-full col-start-1 row-start-1"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold && onSwipe) {
                onSwipe(1);
              } else if (swipe > swipeConfidenceThreshold && onSwipe) {
                onSwipe(-1);
              }
            }}
          >
            <Typography variant="extraSmallRegular" className="text-[#808080] mb-3">Case study</Typography>
            <Typography as="h2" variant="h6Medium" className="text-[#1A1A1A] mb-3">{project.cardTitle}</Typography>
            <Typography variant="bodyRegular" className="text-[#4D4D4D] mb-6 leading-[1.6]">{project.description}</Typography>
            <img src={project.image} alt={project.sidebarTitle} draggable={false} className="w-full aspect-[4/3] object-cover rounded-[20px] shadow-sm" />
          </motion.div>
        </AnimatePresence>
      </Link>
    </div>
  );
}
