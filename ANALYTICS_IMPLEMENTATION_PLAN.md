# Google Analytics 4 Enhanced Tracking Implementation Plan

## Executive Summary

This plan outlines a comprehensive Google Analytics 4 (GA4) implementation for your portfolio website to track:
- **Project engagement**: Which projects are viewed and clicked most (all 7 projects)
- **Navigation patterns**: User journey through the site
- **User engagement**: Scroll depth, time on page, interactions
- **External link clicks**: LinkedIn, email, resume downloads
- **Conversion funnel**: Homepage → Project card click → Project detail view

## Current State Analysis

### Existing Setup
- ✅ GA4 tracking ID: `G-2K28L93XWR`
- ✅ Basic pageview tracking configured in [`index.html`](index.html:5-12)
- ❌ No custom event tracking
- ❌ No enhanced measurement for user interactions
- ❌ No project-specific tracking
- ❌ No external link tracking

### Key Pages & Components to Track
1. **Home Pages**: [`Home.jsx`](src/screens/Home/Home.jsx), [`HomeV2.jsx`](src/screens/Home/HomeV2.jsx)
2. **Project Pages**: [`Project.jsx`](src/screens/Project/Project.jsx)
3. **Project Cards**: [`ProjectCard.jsx`](src/components/ProjectCard/ProjectCard.jsx), [`ProjectGrid.jsx`](src/components/ProjectGrid/ProjectGrid.jsx)
4. **Navigation**: [`Header.jsx`](src/components/Header/Header.jsx)
5. **About Page**: [`About.jsx`](src/screens/About/About.jsx)

### All Projects to Track (7 Total)

**Personal Projects (from Home.jsx):**
1. **FemHealth** - Women's health platform
2. **Swift Bikes** - Custom bike e-commerce
3. **Svaasthya** - Hospital chatbot app

**Professional Projects (from ProjectGrid.jsx):**
4. **Insurance Company Website Redesign** - 44% SEO boost, 37% performance increase
5. **Loan App Experience Optimization** - 40% reduction in application time
6. **Admissions Process Acceleration** - 60% productivity gain for counselors
7. **Intelligent Campaign Builder Overhaul** - Data-driven lead generation engine

## Proposed Event Tracking Strategy

### 1. Project Engagement Events

#### Event: `view_project`
**Trigger**: When a user views a project detail page
**Parameters**:
- `project_name`: String (e.g., "femhealth", "swiftbikes", "svaasthya", "insurance-company-website-redesign", "loan-app-experience-optimization", "admissions-process-acceleration", "intelligent-campaign-builder")
- `project_title`: String (e.g., "FemHealth", "Insurance Company Website Redesign")
- `project_type`: String ("personal" or "professional")
- `project_color`: String (hex color)
- `page_location`: String (full URL)
- `referrer`: String (where user came from)

#### Event: `click_project_card`
**Trigger**: When a user clicks on a project card
**Parameters**:
- `project_name`: String
- `project_title`: String
- `project_type`: String ("personal" or "professional")
- `card_location`: String ("home_v1", "home_v2", "project_grid")
- `card_position`: Number (index in grid, 0-based)
- `image_position`: String ("left", "right") - for Home.jsx cards only
- `is_mobile_layout`: Boolean - for ProjectGrid.jsx cards

#### Event: `view_project_section`
**Trigger**: When user scrolls to specific sections in project detail
**Parameters**:
- `project_name`: String
- `section_name`: String ("personas", "wireframes", "prototype", etc.)
- `scroll_depth`: Number (percentage)

### 2. Navigation Events

#### Event: `navigation_click`
**Trigger**: When user clicks navigation links
**Parameters**:
- `link_text`: String ("Projects", "About Me")
- `link_url`: String
- `navigation_type`: String ("header", "footer", "inline")
- `from_page`: String (current page)

#### Event: `logo_click`
**Trigger**: When user clicks the logo to return home
**Parameters**:
- `from_page`: String

### 3. External Link Events

#### Event: `external_link_click`
**Trigger**: When user clicks external links
**Parameters**:
- `link_type`: String ("email", "linkedin", "resume", "figma_prototype")
- `link_url`: String
- `link_text`: String
- `from_page`: String

### 4. User Engagement Events

#### Event: `scroll_depth`
**Trigger**: At 25%, 50%, 75%, 90% scroll milestones
**Parameters**:
- `page_path`: String
- `scroll_percentage`: Number
- `time_to_depth`: Number (seconds)

#### Event: `time_on_page`
**Trigger**: At 10s, 30s, 60s, 120s, 300s milestones
**Parameters**:
- `page_path`: String
- `time_seconds`: Number
- `engaged`: Boolean (user actively interacting)

#### Event: `page_engagement`
**Trigger**: When user performs meaningful interactions
**Parameters**:
- `engagement_type`: String ("hover_project", "expand_section", "view_image")
- `element_id`: String
- `page_path`: String

### 5. Enhanced Page View Events

#### Event: `enhanced_page_view`
**Trigger**: On every page load (in addition to default pageview)
**Parameters**:
- `page_title`: String
- `page_type`: String ("home", "project_detail", "about", "resume")
- `project_name`: String (if applicable)
- `user_type`: String ("new_visitor", "returning_visitor")
- `session_number`: Number
- `viewport_size`: String ("mobile", "tablet", "desktop")

### 6. User Journey Events

#### Event: `user_journey_step`
**Trigger**: At key points in user journey
**Parameters**:
- `journey_step`: String ("landed", "viewed_projects", "clicked_project", "viewed_details", "clicked_external")
- `step_number`: Number
- `time_from_start`: Number (seconds)
- `previous_step`: String

## Implementation Architecture

### File Structure
```
src/
├── utils/
│   ├── analytics.js          # Main analytics utility
│   ├── scrollTracking.js     # Scroll depth tracking
│   └── timeTracking.js       # Time on page tracking
├── hooks/
│   ├── useAnalytics.js       # React hook for analytics
│   ├── useScrollTracking.js  # Hook for scroll tracking
│   └── useTimeTracking.js    # Hook for time tracking
└── config/
    └── analyticsConfig.js    # Configuration constants
```

### Core Analytics Utility (`src/utils/analytics.js`)

```javascript
// Helper to safely call gtag
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...eventParams,
      timestamp: new Date().toISOString(),
    });
  }
};

// Project tracking
export const trackProjectView = (projectName, projectData) => {
  trackEvent('view_project', {
    project_name: projectName,
    project_title: projectData.title,
    project_color: projectData.color,
    page_location: window.location.href,
    referrer: document.referrer,
  });
};

export const trackProjectCardClick = (projectName, projectData, location, position) => {
  trackEvent('click_project_card', {
    project_name: projectName,
    project_title: projectData.title,
    card_location: location,
    card_position: position,
  });
};

// Navigation tracking
export const trackNavigation = (linkText, linkUrl, navigationType, fromPage) => {
  trackEvent('navigation_click', {
    link_text: linkText,
    link_url: linkUrl,
    navigation_type: navigationType,
    from_page: fromPage,
  });
};

// External link tracking
export const trackExternalLink = (linkType, linkUrl, linkText, fromPage) => {
  trackEvent('external_link_click', {
    link_type: linkType,
    link_url: linkUrl,
    link_text: linkText,
    from_page: fromPage,
  });
};

// Scroll tracking
export const trackScrollDepth = (percentage, timeToDepth) => {
  trackEvent('scroll_depth', {
    page_path: window.location.pathname,
    scroll_percentage: percentage,
    time_to_depth: timeToDepth,
  });
};

// Time tracking
export const trackTimeOnPage = (seconds, engaged) => {
  trackEvent('time_on_page', {
    page_path: window.location.pathname,
    time_seconds: seconds,
    engaged: engaged,
  });
};

// Enhanced page view
export const trackEnhancedPageView = (pageData) => {
  trackEvent('enhanced_page_view', {
    page_title: document.title,
    page_type: pageData.pageType,
    project_name: pageData.projectName || null,
    viewport_size: getViewportSize(),
    ...pageData,
  });
};

// User journey tracking
export const trackJourneyStep = (step, stepNumber, previousStep) => {
  const startTime = sessionStorage.getItem('journey_start_time');
  const timeFromStart = startTime ? (Date.now() - parseInt(startTime)) / 1000 : 0;
  
  trackEvent('user_journey_step', {
    journey_step: step,
    step_number: stepNumber,
    time_from_start: timeFromStart,
    previous_step: previousStep,
  });
};

// Helper functions
const getViewportSize = () => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};
```

### React Hook (`src/hooks/useAnalytics.js`)

```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEnhancedPageView } from '../utils/analytics';

export const useAnalytics = (pageType, additionalData = {}) => {
  const location = useLocation();

  useEffect(() => {
    trackEnhancedPageView({
      pageType,
      ...additionalData,
    });
  }, [location.pathname, pageType]);
};
```

### Scroll Tracking Hook (`src/hooks/useScrollTracking.js`)

```javascript
import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '../utils/analytics';

export const useScrollTracking = () => {
  const milestones = useRef(new Set());
  const startTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      [25, 50, 75, 90].forEach(milestone => {
        if (scrollPercentage >= milestone && !milestones.current.has(milestone)) {
          milestones.current.add(milestone);
          const timeToDepth = Math.round((Date.now() - startTime.current) / 1000);
          trackScrollDepth(milestone, timeToDepth);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
```

### Time Tracking Hook (`src/hooks/useTimeTracking.js`)

```javascript
import { useEffect, useRef } from 'react';
import { trackTimeOnPage } from '../utils/analytics';

export const useTimeTracking = () => {
  const startTime = useRef(Date.now());
  const milestones = useRef(new Set());
  const isEngaged = useRef(true);

  useEffect(() => {
    const checkTime = () => {
      const elapsed = Math.round((Date.now() - startTime.current) / 1000);
      
      [10, 30, 60, 120, 300].forEach(milestone => {
        if (elapsed >= milestone && !milestones.current.has(milestone)) {
          milestones.current.add(milestone);
          trackTimeOnPage(milestone, isEngaged.current);
        }
      });
    };

    const handleVisibilityChange = () => {
      isEngaged.current = !document.hidden;
    };

    const interval = setInterval(checkTime, 1000);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};
```

## Implementation Steps by Component

### 1. Project.jsx
```javascript
import { useEffect } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useScrollTracking } from '../../hooks/useScrollTracking';
import { useTimeTracking } from '../../hooks/useTimeTracking';
import { trackProjectView } from '../../utils/analytics';

function Project() {
  const { pathname } = useLocation();
  const projectName = pathname.split('/').pop();
  const currentProject = caseStudyData[projectName];
  
  // Determine project type
  const personalProjects = ['femhealth', 'swiftbikes', 'svaasthya'];
  const projectType = personalProjects.includes(projectName) ? 'personal' : 'professional';

  // Track page view with project context
  useAnalytics('project_detail', { projectName, projectType });
  
  // Track scroll and time
  useScrollTracking();
  useTimeTracking();

  // Track project view
  useEffect(() => {
    if (currentProject) {
      trackProjectView(projectName, {
        ...currentProject,
        project_type: projectType
      });
    }
  }, [projectName, currentProject, projectType]);

  // ... rest of component
}
```

**Note**: This handles all 7 projects:
- 3 personal projects (femhealth, swiftbikes, svaasthya) from caseStudyData
- 4 professional projects (insurance-company-website-redesign, loan-app-experience-optimization, admissions-process-acceleration, intelligent-campaign-builder)

### 2. ProjectCard.jsx
```javascript
import { trackProjectCardClick } from '../../utils/analytics';

function ProjectCard({
  image,
  title,
  color,
  caseStudyLink,
  imagePosition,
  cardIndex // Add this prop to track position
}) {
  const handleClick = () => {
    const projectName = caseStudyLink.replace('#/project/', '');
    trackProjectCardClick(
      projectName,
      {
        title,
        color,
        project_type: 'personal'
      },
      'home_v1',
      cardIndex
    );
  };

  return (
    <motion.a
      onClick={handleClick}
      href={caseStudyLink}
      // ... rest of props
    >
      {/* ... component content */}
    </motion.a>
  );
}
```

**Note**: ProjectCard.jsx is used in Home.jsx for 3 personal projects:
- FemHealth (index 0)
- Swift Bikes (index 1)
- Svaasthya (index 2)

### 3. ProjectGrid.jsx
```javascript
import { trackProjectCardClick } from '../../utils/analytics';

// Inside the projects array mapping
<motion.a
  href={link}
  onClick={() => {
    const projectName = link.replace('#/', '');
    trackProjectCardClick(
      projectName,
      {
        title,
        color,
        project_type: 'professional'
      },
      'project_grid',
      index
    );
  }}
  onMouseEnter={() => !isMobileView && setHoveredIndex(index)}
  onMouseLeave={() => !isMobileView && setHoveredIndex(null)}
  // ... rest of props
>
```

**Note**: ProjectGrid.jsx contains 4 professional projects:
- Insurance Company Website Redesign (index 0)
- Loan App Experience Optimization (index 1)
- Admissions Process Acceleration (index 2)
- Intelligent Campaign Builder Overhaul (index 3)

### 4. Header.jsx
```javascript
import { trackNavigation, trackExternalLink } from '../../utils/analytics';

// For navigation links
<Element
  onClick={() => {
    trackNavigation(label, href, 'header', window.location.pathname);
    setIsNavVisible(false);
  }}
  to={href}
>
```

### 5. Home.jsx (External Links)
```javascript
import { trackExternalLink } from '../../utils/analytics';

// Email link
<motion.a
  onClick={() => trackExternalLink('email', 'mailto:niharika13dalal@gmail.com', 'Email', '/home')}
  href="mailto:niharika13dalal@gmail.com"
>

// LinkedIn link
<motion.a
  onClick={() => trackExternalLink('linkedin', 'https://www.linkedin.com/in/niharikadalal/', 'LinkedIn', '/home')}
  href="https://www.linkedin.com/in/niharikadalal/"
>

// Resume link
<motion.a
  onClick={() => trackExternalLink('resume', '#/resume', 'Resume', '/home')}
  href="#/resume"
>
```

## GA4 Dashboard Configuration

### Custom Reports to Create

1. **Project Performance Report**
   - Metrics: Project views, card clicks, click-through rate
   - Dimensions: Project name, project type (personal/professional), card location
   - Visualization: Bar chart + table
   - Comparison: Personal vs Professional projects

2. **User Journey Funnel**
   - Steps: Landing → Project card click → Project view → External link click
   - Conversion rate at each step
   - Drop-off analysis

3. **Engagement Report**
   - Metrics: Avg time on page, scroll depth, engaged sessions
   - Dimensions: Page type, viewport size
   - Segmentation: New vs returning visitors

4. **Navigation Flow**
   - Path analysis showing user navigation patterns
   - Entry/exit pages
   - Most common paths

5. **External Link Performance**
   - Metrics: Click count, click rate
   - Dimensions: Link type (email, LinkedIn, resume)
   - Comparison across pages

### Custom Dimensions to Configure in GA4

1. `project_name` - Text
2. `project_title` - Text
3. `project_type` - Text (personal/professional)
4. `card_location` - Text
5. `page_type` - Text
6. `viewport_size` - Text
7. `link_type` - Text
8. `journey_step` - Text
9. `is_mobile_layout` - Boolean

### Custom Metrics to Configure

1. `scroll_percentage` - Number
2. `time_to_depth` - Number
3. `time_seconds` - Number
4. `card_position` - Number
5. `step_number` - Number

## Testing Strategy

### Development Testing
1. Enable GA4 Debug Mode in browser
2. Use GA4 DebugView in real-time
3. Test each event type manually
4. Verify all parameters are captured correctly

### Test Scenarios
- [ ] Navigate from home to project detail
- [ ] Click each project card type
- [ ] Scroll through project pages
- [ ] Click all external links
- [ ] Navigate using header links
- [ ] Test on mobile, tablet, desktop viewports
- [ ] Test with ad blockers enabled
- [ ] Test journey from landing to conversion

### Validation Checklist
- [ ] All events fire correctly
- [ ] Parameters are accurate
- [ ] No duplicate events
- [ ] Events fire on all browsers
- [ ] Mobile tracking works
- [ ] No console errors
- [ ] Performance impact is minimal

## Privacy & Compliance

### Considerations
- ✅ No PII (Personally Identifiable Information) collected
- ✅ IP anonymization enabled by default in GA4
- ✅ No sensitive user data in event parameters
- ⚠️ Consider adding cookie consent banner (optional)
- ⚠️ Update privacy policy to mention analytics (recommended)

### Data Retention
- Set GA4 data retention to 14 months (recommended)
- Configure user deletion requests process
- Document what data is collected

## Performance Impact

### Optimization Strategies
1. **Lazy load analytics**: Load gtag.js asynchronously
2. **Debounce scroll events**: Track milestones only, not continuous scroll
3. **Batch events**: Group related events when possible
4. **Use passive event listeners**: For scroll and touch events
5. **Minimize payload**: Only send necessary parameters

### Expected Impact
- Additional JS: ~45KB (gtag.js already loaded)
- Event overhead: <1ms per event
- Network requests: ~10-20 per session
- Overall performance impact: Negligible

## Maintenance & Monitoring

### Regular Reviews
- **Weekly**: Check for tracking errors in GA4
- **Monthly**: Review top projects and user journeys
- **Quarterly**: Analyze trends and optimize tracking

### Alerts to Set Up
1. Sudden drop in events (>50%)
2. Spike in errors
3. New traffic sources
4. Unusual user behavior patterns

## Success Metrics

### Key Questions This Implementation Answers
1. ✅ Which projects get the most views? (All 7 projects tracked)
2. ✅ Which projects get the most clicks from homepage?
3. ✅ Do personal projects (FemHealth, Swift Bikes, Svaasthya) or professional projects (Insurance, Loan App, Admissions, Campaign Builder) perform better?
4. ✅ What's the conversion rate from card click to project view?
5. ✅ How long do users spend on each project?
6. ✅ What percentage of users scroll through entire projects?
7. ✅ Which external links get clicked most?
8. ✅ What's the typical user journey through the site?
9. ✅ Where do users drop off?
10. ✅ What's the engagement rate by device type?
11. ✅ Which navigation paths are most common?
12. ✅ Which project card location (home_v1, home_v2, project_grid) drives more engagement?

## Timeline Estimate

- **Setup & Configuration**: 1-2 hours
- **Core Implementation**: 4-6 hours
- **Testing & Debugging**: 2-3 hours
- **Documentation**: 1 hour
- **Total**: 8-12 hours

## Next Steps

1. ✅ Review and approve this plan
2. Create analytics utility files
3. Implement tracking in components
4. Test in development environment
5. Deploy to production
6. Configure GA4 custom reports
7. Monitor for 1 week
8. Optimize based on data

---

## Appendix: Event Reference

### Quick Reference Table

| Event Name | Trigger | Key Parameters | Priority |
|------------|---------|----------------|----------|
| `view_project` | Project page load | project_name, project_title, project_type | High |
| `click_project_card` | Card click | project_name, project_type, card_location, card_position | High |
| `navigation_click` | Nav link click | link_text, link_url, from_page | Medium |
| `external_link_click` | External link click | link_type, link_url | High |
| `scroll_depth` | Scroll milestones | scroll_percentage, time_to_depth | Medium |
| `time_on_page` | Time milestones | time_seconds, engaged | Medium |
| `enhanced_page_view` | Page load | page_type, project_type, viewport_size | High |
| `user_journey_step` | Journey milestones | journey_step, step_number | Low |

### Sample GA4 Queries

```sql
-- Top projects by type (Personal vs Professional)
SELECT
  event_params.value.string_value AS project_type,
  event_params.value.string_value AS project_name,
  COUNT(*) AS views
FROM `your-project.analytics_XXXXX.events_*`
WHERE event_name = 'view_project'
GROUP BY project_type, project_name
ORDER BY project_type, views DESC

-- All 7 projects ranked by views
SELECT
  event_params.value.string_value AS project_name,
  event_params.value.string_value AS project_title,
  COUNT(*) AS views
FROM `your-project.analytics_XXXXX.events_*`
WHERE event_name = 'view_project'
GROUP BY project_name, project_title
ORDER BY views DESC
LIMIT 7

-- Project card click-through rate by location
SELECT
  card_location,
  COUNT(DISTINCT CASE WHEN event_name = 'click_project_card' THEN user_pseudo_id END) AS clicks,
  COUNT(DISTINCT CASE WHEN event_name = 'view_project' THEN user_pseudo_id END) AS views,
  SAFE_DIVIDE(
    COUNT(DISTINCT CASE WHEN event_name = 'view_project' THEN user_pseudo_id END),
    COUNT(DISTINCT CASE WHEN event_name = 'click_project_card' THEN user_pseudo_id END)
  ) AS ctr
FROM `your-project.analytics_XXXXX.events_*`
GROUP BY card_location
```

---

**Document Version**: 1.0  
**Last Updated**: 2025-10-15  
**Author**: Kilo Code (Architect Mode)