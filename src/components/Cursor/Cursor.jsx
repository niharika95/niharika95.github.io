import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import cursorAnimationData from './cursor-animation.json';
import './Cursor.css';

export default function Cursor() {
  const cursorRipplesRef = useRef(null);

  const mouse = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  const isHoveringRef = useRef(false);
  const lottieRef = useRef(null);



  // Instant native 1:1 hardware pass-through binding mouse deltas directly to GPU translate pipelines securely masking lag completely
  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      const target = e.target;
      if (!target) return;

      // Determine if interactive element visually mapped bounds natively
      const isInteractive = target.closest('a, button, input, select, textarea, [role="button"], [role="link"], .cursor-pointer, .interactive, .panel, .intro-link, .index-item');

      if (isHoveringRef.current !== !!isInteractive) {
        isHoveringRef.current = !!isInteractive;
        if (isHoveringRef.current) {
          // Speed up playback by 60% and skip the slow buildup frames on entry so the pulse hits instantly
          lottieRef.current?.setSpeed(1.4);
          lottieRef.current?.goToAndPlay(15, true);
        } else {
          // Reset to default absolute pause state on exit
          lottieRef.current?.goToAndStop(0, true);
        }
      }

      // Execute immediate paint transformations directly off mouse-move unrolling the old 0.15 physics limits directly seamlessly
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (cursorRipplesRef.current) {
          cursorRipplesRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
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
    <>
      <div ref={cursorRipplesRef} className="cursor-ripples-container">
        <Lottie
          lottieRef={lottieRef}
          animationData={cursorAnimationData}
          loop={true}
          autoplay={false}
          style={{ width: '100%', height: '100%', transform: 'scale(0.4)' }}
        />
      </div>
    </>
  );
}
