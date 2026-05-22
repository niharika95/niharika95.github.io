import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '../../../components/Typography';
import './MobileCarousel.css';

export default function MobileCarousel({
  projects = [],
  activeIndex = 0,
  onSelect,
  setTimerActive
}) {
  if (projects.length === 0) return null;

  const containerRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // Clone 2 items on both sides to support smooth infinite snapping:
  // [P2, P3] ── [P0, P1, P2, P3] ── [P0, P1]
  // Slide indices:
  // 0, 1: Clones of P2, P3
  // 2, 3, 4, 5: Real P0, P1, P2, P3
  // 6, 7: Clones of P0, P1
  const clonedProjects = [
    projects[projects.length - 2], // index 0 (P2)
    projects[projects.length - 1], // index 1 (P3)
    ...projects,                   // index 2..5 (P0..P3)
    projects[0],                   // index 6 (P0)
    projects[1]                    // index 7 (P1)
  ];

  const cloneOffset = 2; // we have 2 clones at the beginning

  // Measurements
  const getCardMetrics = () => {
    if (!containerRef.current) return { cardWidth: 0, gap: 0, totalWidth: 0 };
    const container = containerRef.current;
    const card = container.firstElementChild?.firstElementChild; // .flex-shrink-0 card wrapper
    if (!card) return { cardWidth: 0, gap: 0, totalWidth: 0 };

    const cardWidth = card.offsetWidth;
    // Calculate gap from the grid/flex layout spacing
    const style = window.getComputedStyle(container.firstElementChild);
    const gap = parseFloat(style.columnGap || style.gap) || 20;

    return { cardWidth, gap, totalWidth: cardWidth + gap };
  };

  // 1. Initial Position Setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Run after a short paint delay to ensure layouts are computed
    const initTimer = setTimeout(() => {
      const { totalWidth } = getCardMetrics();
      if (totalWidth > 0) {
        isProgrammaticScrollRef.current = true;
        
        // Force instant scroll on mount
        container.style.scrollBehavior = 'auto';
        container.style.scrollSnapType = 'none';
        container.scrollLeft = cloneOffset * totalWidth;
        
        requestAnimationFrame(() => {
          container.style.scrollBehavior = '';
          container.style.scrollSnapType = '';
          setTimeout(() => {
            isProgrammaticScrollRef.current = false;
          }, 50);
        });
      }
    }, 100);

    return () => clearTimeout(initTimer);
  }, []);

  // 2. Sync from Parent (e.g. Autoplay or Sidebar clicks)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { totalWidth } = getCardMetrics();
    if (totalWidth === 0) return;

    // Check if the current visual card matches the target activeIndex
    const currentScrollIndex = Math.round(container.scrollLeft / totalWidth);
    const currentVisualIndex = (currentScrollIndex - cloneOffset + projects.length) % projects.length;
    const targetScrollIndex = activeIndex + cloneOffset;

    // Only scroll programmatically if the active card is visually a different project
    if (currentVisualIndex !== activeIndex) {
      isProgrammaticScrollRef.current = true;
      container.scrollTo({
        left: targetScrollIndex * totalWidth,
        behavior: 'smooth'
      });

      // Release programmatic lock after smooth scroll animation completes (approx 400ms)
      const lockTimer = setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 400);

      return () => clearTimeout(lockTimer);
    }
  }, [activeIndex]);

  // 3. Handle Native Scroll and Infinite Relocation
  const handleScrollAndRelocate = () => {
    const container = containerRef.current;
    if (!container) return;

    const { totalWidth } = getCardMetrics();
    if (totalWidth === 0) return;

    const scrollLeft = container.scrollLeft;
    const scrollIndex = Math.round(scrollLeft / totalWidth);

    // Only update parent activeIndex if this is a manual scroll
    if (!isProgrammaticScrollRef.current) {
      const realIndex = (scrollIndex - cloneOffset + projects.length) % projects.length;
      if (realIndex !== activeIndex && onSelect) {
        onSelect(realIndex);
      }
      // Pause autoplay timer during manual scroll movement and inertia
      if (setTimerActive) setTimerActive(false);
    }

    // Debounced Infinite Relocation on Scroll End (for inertia & snap settlement)
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    
    scrollTimeoutRef.current = setTimeout(() => {
      performInfiniteJump(container, totalWidth, scrollIndex);
      // Resume autoplay timer once scroll has completely settled
      if (!isProgrammaticScrollRef.current) {
        if (setTimerActive) setTimerActive(true);
      }
    }, 150); // Settlement window
  };

  const performInfiniteJump = (container, totalWidth, scrollIndex) => {
    let targetIndex = scrollIndex;

    if (scrollIndex <= 1) {
      // Swiped too far right (towards clones at start) -> Jump forward
      targetIndex = scrollIndex + projects.length;
    } else if (scrollIndex >= projects.length + cloneOffset) {
      // Swiped too far left (towards clones at end) -> Jump backward
      targetIndex = scrollIndex - projects.length;
    }

    if (targetIndex !== scrollIndex) {
      isProgrammaticScrollRef.current = true;
      
      // Temporarily disable smooth scroll and snapping in JS to force an instant relocation
      container.style.scrollBehavior = 'auto';
      container.style.scrollSnapType = 'none';
      
      container.scrollLeft = targetIndex * totalWidth;
      
      // Force layout reflow to make sure the jump applies instantly
      const _unused = container.offsetWidth;

      requestAnimationFrame(() => {
        // Restore CSS smooth scroll snap properties on next frame
        container.style.scrollBehavior = '';
        container.style.scrollSnapType = '';
        
        // Hold lock briefly to let the browser settle
        setTimeout(() => {
          isProgrammaticScrollRef.current = false;
        }, 80);
      });
    }
  };

  // Scroll event listeners (includes modern 'scrollend' for perfect settling)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      handleScrollAndRelocate();
    };

    const onScrollEnd = () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      const { totalWidth } = getCardMetrics();
      if (totalWidth > 0) {
        const scrollIndex = Math.round(container.scrollLeft / totalWidth);
        performInfiniteJump(container, totalWidth, scrollIndex);
        // Resume autoplay timer once scroll has completely settled
        if (!isProgrammaticScrollRef.current) {
          if (setTimerActive) setTimerActive(true);
        }
      }
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    container.addEventListener('scrollend', onScrollEnd, { passive: true });

    return () => {
      container.removeEventListener('scroll', onScroll);
      container.removeEventListener('scrollend', onScrollEnd);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [activeIndex, projects.length]);

  // Pause autoplay on touch/interact
  const handleTouchStart = () => {
    if (setTimerActive) setTimerActive(false);
  };

  const handleTouchEnd = () => {
    if (setTimerActive) setTimerActive(true);
  };

  return (
    <div 
      className="mobile-carousel-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
    >
      <div 
        ref={containerRef}
        className="mobile-carousel-viewport"
      >
        <div className="mobile-carousel-track">
          {clonedProjects.map((proj, idx) => (
            <div 
              key={`${proj.id}-mobile-slide-${idx}`}
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
                  <Typography as="h2" variant="h6Medium" className="mobile-carousel-title">
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
