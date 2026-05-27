import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Typography from '../../../components/Typography';
import './MobileCarousel.css';

export default function MobileCarousel({
  projects = [],
  activeIndex = 0,
  onSelect,
  setTimerActive
}) {
  if (projects.length === 0) return null;

  // Initialize Embla Carousel with looping and centered alignment
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false
  });

  // 1. Embla selection change -> Parent State Sync
  const onSelectSlide = useCallback(() => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    if (onSelect) {
      onSelect(selectedIndex);
    }
  }, [emblaApi, onSelect]);

  // 2. Parent activeIndex -> Embla programmatically scroll
  useEffect(() => {
    if (!emblaApi) return;
    // Only scroll programmatically if target slide is different from currently active snap index
    if (emblaApi.selectedScrollSnap() !== activeIndex) {
      emblaApi.scrollTo(activeIndex);
    }
  }, [emblaApi, activeIndex]);

  // 3. Setup Embla event listeners for select, interaction pause, and settle resume
  const handlePointerDown = useCallback(() => {
    if (setTimerActive) setTimerActive(false);
  }, [setTimerActive]);

  const handleSettle = useCallback(() => {
    if (setTimerActive) setTimerActive(true);
  }, [setTimerActive]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelectSlide);
    emblaApi.on('pointerDown', handlePointerDown);
    emblaApi.on('settle', handleSettle);
    
    return () => {
      emblaApi.off('select', onSelectSlide);
      emblaApi.off('pointerDown', handlePointerDown);
      emblaApi.off('settle', handleSettle);
    };
  }, [emblaApi, onSelectSlide, handlePointerDown, handleSettle]);

  return (
    <div className="mobile-carousel-container">
      <div 
        ref={emblaRef}
        className="mobile-carousel-viewport"
      >
        <div className="mobile-carousel-track">
          {projects.map((proj) => (
            <div 
              key={proj.id}
              className="mobile-carousel-slide"
            >
              <Link to={proj.link} style={{ textDecoration: 'none', color: 'inherit' }} className="w-full block">
                {/* 1. Hardware Accelerated Image Container */}
                <div className="mobile-carousel-image-wrapper">
                  <img 
                    src={proj.image} 
                    alt={proj.sidebarTitle} 
                    draggable={false} 
                    className="mobile-carousel-image" 
                  />
                </div>

                {/* 2. Unified Text Content */}
                <div className="mobile-carousel-content">
                  <Typography as="h2" variant="h3Medium" className="mobile-carousel-title">
                    {proj.cardTitle}
                  </Typography>
                  <Typography variant="bodyRegular" className="mobile-carousel-desc">
                    {proj.description}
                  </Typography>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
