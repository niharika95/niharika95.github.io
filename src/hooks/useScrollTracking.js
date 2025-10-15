/**
 * useScrollTracking Hook
 * 
 * React hook for tracking scroll depth milestones
 * Tracks at 25%, 50%, 75%, and 90% scroll depth
 */

import { useEffect, useRef } from 'react';

import { trackScrollDepth } from '../utils/analytics';

/**
 * Track scroll depth milestones
 */
export const useScrollTracking = () => {
  const milestones = useRef(new Set());
  const startTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate scroll percentage
      const scrollPercentage = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      );

      // Track milestones: 25%, 50%, 75%, 90%
      [25, 50, 75, 90].forEach(milestone => {
        if (scrollPercentage >= milestone && !milestones.current.has(milestone)) {
          milestones.current.add(milestone);
          const timeToDepth = Math.round((Date.now() - startTime.current) / 1000);
          trackScrollDepth(milestone, timeToDepth);
        }
      });
    };

    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScrollTracking;