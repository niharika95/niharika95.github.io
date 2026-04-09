import React, { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" />
  );
}
