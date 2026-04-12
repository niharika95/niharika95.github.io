import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroSlide from './slides/IntroSlide';
import AgendaSlide from './slides/AgendaSlide';
import ProjectSlide from './slides/ProjectSlide';
import PitchSlide from './slides/PitchSlide';
import { allProjects } from './presentationData';

const PresentationMode = ({ config, onExit }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Flatten the selected sections into a sequential array of project slides
  const projectSlidesData = [];
  allProjects.forEach(project => {
    project.sections.forEach(section => {
      if (config.selectedSections?.includes(section.id)) {
        projectSlidesData.push({
          id: `section-${section.id}`,
          component: <ProjectSlide project={project} section={section} />
        });
      }
    });
  });
  
  const slides = [
    { id: 'intro', component: <IntroSlide config={config} /> },
    { id: 'agenda', component: <AgendaSlide config={config} /> },
    ...projectSlidesData,
    { id: 'pitch', component: <PitchSlide config={config} /> }
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          prevSlide();
          break;
        case 'Escape':
          onExit();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, onExit]);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#111] z-50 flex items-center justify-center overflow-hidden font-mulish">
      {/* 16:9 Aspect Ratio Container */}
      <div 
        className="relative bg-black w-full shadow-2xl overflow-hidden" 
        style={{ aspectRatio: '16/9', maxHeight: '100vh', maxWidth: '177.77vh' }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {slides[currentSlideIndex].component}
          </motion.div>
        </AnimatePresence>

        {/* Global Presentation HUD - Top Right Exit */}
        <button 
          onClick={onExit}
          className="absolute top-6 right-8 text-gray-500 hover:text-white transition-colors z-50 flex items-center gap-2 group"
          aria-label="Exit Presentation"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[14px]">Exit</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Global Presentation HUD - Bottom Controls */}
        <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center z-50 text-gray-500">
          <div className="text-[14px] font-playfair tracking-widest text-[#D97706] uppercase">
            NIHARIKA DALAL <span className="text-gray-600 mx-2">|</span> {config.companyName || 'PRESENTATION'}
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className={`transition-colors ${currentSlideIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-white'}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            
            <span className="text-[14px] tabular-nums tracking-widest text-gray-400">
              {String(currentSlideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>

            <button 
              onClick={nextSlide}
              disabled={currentSlideIndex === totalSlides - 1}
              className={`transition-colors ${currentSlideIndex === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-white'}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-1 bg-[#222] w-full z-50">
          <motion.div 
            className="h-full bg-[#D97706]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default PresentationMode;
