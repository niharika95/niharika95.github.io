/**
 * useTimeTracking Hook
 * 
 * React hook for tracking time spent on page
 * Tracks at 10s, 30s, 60s, 120s, and 300s milestones
 */

import { useEffect, useRef } from 'react';

import { trackTimeOnPage } from '../utils/analytics';

/**
 * Track time on page milestones
 */
export const useTimeTracking = () => {
  const startTime = useRef(Date.now());
  const milestones = useRef(new Set());
  const isEngaged = useRef(true);

  useEffect(() => {
    // Check time elapsed and track milestones
    const checkTime = () => {
      const elapsed = Math.round((Date.now() - startTime.current) / 1000);
      
      // Track milestones: 10s, 30s, 60s, 120s, 300s
      [10, 30, 60, 120, 300].forEach(milestone => {
        if (elapsed >= milestone && !milestones.current.has(milestone)) {
          milestones.current.add(milestone);
          trackTimeOnPage(milestone, isEngaged.current);
        }
      });
    };

    // Track user engagement (tab visibility)
    const handleVisibilityChange = () => {
      isEngaged.current = !document.hidden;
    };

    // Check time every second
    const interval = setInterval(checkTime, 1000);
    
    // Listen for visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};

export default useTimeTracking;