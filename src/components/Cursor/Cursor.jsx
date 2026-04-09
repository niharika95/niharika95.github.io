import React, { useEffect, useRef, useState } from 'react';
import './Cursor.css';

export default function Cursor() {
  const cursorRef = useRef(null);
  const isHoveringPanelRef = useRef(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      // 1. Fast path transform for position
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
          
          // Edge detection for bottom overflow
          if (e.clientY > window.innerHeight - 50) {
            cursorRef.current.classList.add('tooltip-up');
          } else {
            cursorRef.current.classList.remove('tooltip-up');
          }

          // Edge detection for sides
          if (e.clientX > window.innerWidth - 160) {
            cursorRef.current.classList.add('tooltip-left');
          } else {
            cursorRef.current.classList.remove('tooltip-left');
          }
        }
      });

      // 2. Discover hover targets
      const target = e.target;
      if (!target) return;
      const isPanel = !!target.closest('.hero-card-viewport');
      if (isHoveringPanelRef.current !== isPanel) {
        isHoveringPanelRef.current = isPanel;
        setTooltipVisible(isPanel);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={cursorRef} className={`custom-cursor ${tooltipVisible ? 'show-tooltip' : ''}`}>
      <div className="cursor-tooltip">View case study</div>
    </div>
  );
}
