/**
 * Google Analytics 4 Tracking Utilities
 * 
 * Centralized analytics tracking for portfolio website
 * Tracks: project views, clicks, navigation, external links, engagement
 */

/**
 * Helper to safely call gtag
 * @param {string} eventName - GA4 event name
 * @param {object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...eventParams,
      timestamp: new Date().toISOString(),
    });
    
    // Log in development for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 GA4 Event:', eventName, eventParams);
    }
  }
};

/**
 * Track project page view
 * @param {string} projectName - Project identifier (e.g., "femhealth", "insurance-company-website-redesign")
 * @param {object} projectData - Project metadata
 */
export const trackProjectView = (projectName, projectData) => {
  trackEvent('view_project', {
    project_name: projectName,
    project_title: projectData.title,
    project_type: projectData.project_type || 'unknown',
    project_color: projectData.color,
    page_location: window.location.href,
    referrer: document.referrer,
  });
};

/**
 * Track project card click
 * @param {string} projectName - Project identifier
 * @param {object} projectData - Project metadata
 * @param {string} location - Card location (home_v1, home_v2, project_grid)
 * @param {number} position - Card position in grid (0-based index)
 */
export const trackProjectCardClick = (projectName, projectData, location, position) => {
  trackEvent('click_project_card', {
    project_name: projectName,
    project_title: projectData.title,
    project_type: projectData.project_type || 'unknown',
    card_location: location,
    card_position: position,
    image_position: projectData.image_position || null,
    is_mobile_layout: projectData.is_mobile_layout || false,
  });
};

/**
 * Track navigation link click
 * @param {string} linkText - Link text (e.g., "Projects", "About Me")
 * @param {string} linkUrl - Link URL
 * @param {string} navigationType - Navigation type (header, footer, inline)
 * @param {string} fromPage - Current page path
 */
export const trackNavigation = (linkText, linkUrl, navigationType, fromPage) => {
  trackEvent('navigation_click', {
    link_text: linkText,
    link_url: linkUrl,
    navigation_type: navigationType,
    from_page: fromPage,
  });
};

/**
 * Track logo click
 * @param {string} fromPage - Current page path
 */
export const trackLogoClick = (fromPage) => {
  trackEvent('logo_click', {
    from_page: fromPage,
  });
};

/**
 * Track external link click
 * @param {string} linkType - Link type (email, linkedin, resume, figma_prototype)
 * @param {string} linkUrl - Link URL
 * @param {string} linkText - Link text
 * @param {string} fromPage - Current page path
 */
export const trackExternalLink = (linkType, linkUrl, linkText, fromPage) => {
  trackEvent('external_link_click', {
    link_type: linkType,
    link_url: linkUrl,
    link_text: linkText,
    from_page: fromPage,
  });
};

/**
 * Track scroll depth milestone
 * @param {number} percentage - Scroll percentage (25, 50, 75, 90)
 * @param {number} timeToDepth - Time to reach depth in seconds
 */
export const trackScrollDepth = (percentage, timeToDepth) => {
  trackEvent('scroll_depth', {
    page_path: window.location.pathname,
    scroll_percentage: percentage,
    time_to_depth: timeToDepth,
  });
};

/**
 * Track time on page milestone
 * @param {number} seconds - Time in seconds (10, 30, 60, 120, 300)
 * @param {boolean} engaged - Whether user is actively engaged
 */
export const trackTimeOnPage = (seconds, engaged) => {
  trackEvent('time_on_page', {
    page_path: window.location.pathname,
    time_seconds: seconds,
    engaged: engaged,
  });
};

/**
 * Track enhanced page view with custom dimensions
 * @param {object} pageData - Page metadata
 */
export const trackEnhancedPageView = (pageData) => {
  trackEvent('enhanced_page_view', {
    page_title: document.title,
    page_type: pageData.pageType,
    project_name: pageData.projectName || null,
    project_type: pageData.projectType || null,
    viewport_size: getViewportSize(),
    ...pageData,
  });
};

/**
 * Track user journey step
 * @param {string} step - Journey step name
 * @param {number} stepNumber - Step number in sequence
 * @param {string} previousStep - Previous step name
 */
export const trackJourneyStep = (step, stepNumber, previousStep) => {
  // Initialize journey start time if not exists
  if (!sessionStorage.getItem('journey_start_time')) {
    sessionStorage.setItem('journey_start_time', Date.now().toString());
  }
  
  const startTime = sessionStorage.getItem('journey_start_time');
  const timeFromStart = startTime ? (Date.now() - parseInt(startTime)) / 1000 : 0;
  
  trackEvent('user_journey_step', {
    journey_step: step,
    step_number: stepNumber,
    time_from_start: timeFromStart,
    previous_step: previousStep || 'none',
  });
};

/**
 * Track project section view (when scrolling through project details)
 * @param {string} projectName - Project identifier
 * @param {string} sectionName - Section name (personas, wireframes, prototype, etc.)
 * @param {number} scrollDepth - Scroll depth percentage
 */
export const trackProjectSection = (projectName, sectionName, scrollDepth) => {
  trackEvent('view_project_section', {
    project_name: projectName,
    section_name: sectionName,
    scroll_depth: scrollDepth,
  });
};

/**
 * Track page engagement interaction
 * @param {string} engagementType - Type of engagement (hover_project, expand_section, view_image)
 * @param {string} elementId - Element identifier
 * @param {string} pagePath - Current page path
 */
export const trackPageEngagement = (engagementType, elementId, pagePath) => {
  trackEvent('page_engagement', {
    engagement_type: engagementType,
    element_id: elementId,
    page_path: pagePath || window.location.pathname,
  });
};

/**
 * Helper: Get viewport size category
 * @returns {string} - mobile, tablet, or desktop
 */
const getViewportSize = () => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * Helper: Get user type (new or returning)
 * @returns {string} - new_visitor or returning_visitor
 */
export const getUserType = () => {
  const hasVisited = localStorage.getItem('has_visited');
  if (!hasVisited) {
    localStorage.setItem('has_visited', 'true');
    return 'new_visitor';
  }
  return 'returning_visitor';
};

/**
 * Helper: Get session number
 * @returns {number} - Current session number
 */
export const getSessionNumber = () => {
  const sessionCount = sessionStorage.getItem('session_count');
  if (!sessionCount) {
    const count = (parseInt(localStorage.getItem('total_sessions') || '0') + 1).toString();
    localStorage.setItem('total_sessions', count);
    sessionStorage.setItem('session_count', count);
    return parseInt(count);
  }
  return parseInt(sessionCount);
};