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

      {/* Mobile Floating Pill Navigation */}
      <div className="fixed md:hidden bottom-5 left-5 right-5 bg-white rounded-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-6 py-4 flex items-center justify-between z-[1000] border border-gray-100">
        <Link to="/v2/about" className={`text-[15px] font-light no-underline relative transition-colors duration-200 ${isAboutActive ? 'text-gray-900' : 'text-gray-600'}`}>
          About
          {isAboutActive && <span className="absolute -bottom-2.5 left-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full animate-[pop-dot_0.3s_cubic-bezier(0.23,1,0.32,1)_forwards]" style={{ transform: 'translateX(-50%) scale(0)' }}></span>}
        </Link>
        <Link to="/v2/resume" className={`text-[15px] font-light no-underline relative transition-colors duration-200 ${isResumeActive ? 'text-gray-900' : 'text-gray-600'}`}>
          Resume
          {isResumeActive && <span className="absolute -bottom-2.5 left-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full animate-[pop-dot_0.3s_cubic-bezier(0.23,1,0.32,1)_forwards]" style={{ transform: 'translateX(-50%) scale(0)' }}></span>}
        </Link>
        <a href="https://www.linkedin.com/in/niharikadalal" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-[15px] font-light no-underline">LinkedIn</a>
        <a href="mailto:niharika95@gmail.com" className="text-gray-600 text-[15px] font-light no-underline">Email</a>
      </div>
    </>
  );
}
