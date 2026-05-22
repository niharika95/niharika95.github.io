import React, { useEffect, useRef, useState } from 'react';
import './Cursor.css';
import Typography from '../Typography/Typography';
import { Icon } from '@iconify/react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const [activeState, setActiveState] = useState(''); // '' or 'project'
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Detect fine pointer and hover support
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsSupported(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsSupported(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!isSupported) return;

    let rafId;

    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        }
      });

      // Discover hover targets
      const target = e.target;
      if (!target) return;

      const isProjectPanel = !!target.closest('.hero-card-viewport');
      const isInteractive = !!target.closest('a, button, [role="button"], .interactive-element, .index-item');

      if (isProjectPanel) {
        if (activeState !== 'project') setActiveState('project');
      } else if (isInteractive) {
        if (activeState !== 'hover') setActiveState('hover');
      } else {
        if (activeState !== '') setActiveState('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [activeState, isSupported]);

  if (!isSupported) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${activeState}`}
    >
      <Typography as="div" variant="smallRegular" className="cursor-tooltip" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>View case study <Icon icon="material-symbols:arrow-right-alt-rounded" width="20" className="cursor-nudge-arrow" /></Typography>
    </div>
  );
}
