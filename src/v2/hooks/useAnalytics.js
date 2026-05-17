/**
 * useAnalytics Hook
 * 
 * React hook for tracking enhanced page views with custom dimensions
 */

import { getSessionNumber, getUserType, trackEnhancedPageView } from '../utils/analytics';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Track enhanced page view on route change
 * @param {string} pageType - Type of page (home, project_detail, about, resume)
 * @param {object} additionalData - Additional tracking data
 */
export const useAnalytics = (pageType, additionalData = {}) => {
  const location = useLocation();

  useEffect(() => {
    // Track enhanced page view with all context
    trackEnhancedPageView({
      pageType,
      user_type: getUserType(),
      session_number: getSessionNumber(),
      ...additionalData,
    });
  }, [location.pathname, pageType, additionalData]);
};

export default useAnalytics;