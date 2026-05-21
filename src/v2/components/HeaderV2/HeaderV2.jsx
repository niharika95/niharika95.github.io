import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typography from '../Typography';
import './HeaderV2.css';

export default function HeaderV2({ isInitialLoad = false, style = {} }) {
  const location = useLocation();
  const isAboutActive = location.pathname.includes('/v2/about');
  const isResumeActive = location.pathname.includes('/v2/resume');

  return (
    <>
      <header className="header-v2" style={style}>
      <Link 
        to="/v2" 
        className={`header-v2-logo ${isInitialLoad ? 'anim-fade-in' : ''}`} 
        style={isInitialLoad ? { animationDelay: '0ms', animationDuration: '600ms', animationTimingFunction: 'ease-out' } : {}}
      >
        <Typography as="span" variant="bodyLight" className="nav-text">Niharika Dalal</Typography>
      </Link>
      <div className="header-v2-nav">
        <Link 
          to="/v2/about" 
          className={`header-v2-link ${isInitialLoad ? 'anim-fade-in' : ''} ${isAboutActive ? 'active' : ''}`} 
          style={isInitialLoad ? { animationDelay: '200ms', animationDuration: '600ms', animationTimingFunction: 'ease-out' } : {}}
        >
          <Typography as="span" variant="bodyLight" className="nav-text">About</Typography>
        </Link>
        <Link 
          to="/v2/resume" 
          className={`header-v2-link ${isInitialLoad ? 'anim-fade-in' : ''} ${isResumeActive ? 'active' : ''}`} 
          style={isInitialLoad ? { animationDelay: '200ms', animationDuration: '600ms', animationTimingFunction: 'ease-out' } : {}}
        >
          <Typography as="span" variant="bodyLight" className="nav-text">Resume</Typography>
        </Link>
      </div>
    </header>
    <div className="header-v2-spacer" />
   </>
  );
}
