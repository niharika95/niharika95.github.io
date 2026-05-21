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
        className={`header-v2-logo flex items-center gap-3 ${isInitialLoad ? 'anim-fade-in' : ''}`} 
        style={isInitialLoad ? { animationDelay: '0ms', animationDuration: '600ms', animationTimingFunction: 'ease-out' } : {}}
      >
        <img src="/v2/images/home/niharika-round.png" alt="Niharika Dalal" className="w-[36px] h-[36px] rounded-full object-cover" />
        <Typography as="span" variant="bodyLight" className="nav-text">Niharika Dalal</Typography>
      </Link>
      <div className="header-v2-nav hidden md:flex">
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
