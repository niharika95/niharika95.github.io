import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Typography from '../Typography';
import './HeaderV2.css';

export default function HeaderV2({ isInitialLoad = false, style = {} }) {
  const location = useLocation();
  const isHomeActive = location.pathname === '/' || location.pathname === '';
  const isAboutActive = location.pathname.includes('/about');
  const isResumeActive = location.pathname.includes('/resume');

  return (
    <>
      <header className="header-v2" style={style}>
        <div className="header-v2-inner">
          <Link
            to="/"
            className={`header-v2-logo flex items-center gap-3 ${isInitialLoad ? 'anim-fade-in' : ''}`}
            style={isInitialLoad ? { animationDelay: '0ms', animationDuration: '600ms', animationTimingFunction: 'ease-out' } : {}}
          >
            <img src="/v2/images/home/niharika-round.png" alt="Niharika Dalal" className="w-[36px] h-[36px] rounded-full object-cover" />
            <Typography as="span" variant="bodyLight" className="nav-text">Niharika Dalal</Typography>
          </Link>
          <div className="header-v2-nav hidden md:flex">
            <Link
              to="/about"
              className={`header-v2-link ${isInitialLoad ? 'anim-fade-in' : ''} ${isAboutActive ? 'active' : ''}`}
              style={isInitialLoad ? { animationDelay: '200ms', animationDuration: '600ms', animationTimingFunction: 'ease-out' } : {}}
            >
              <Typography as="span" variant="bodyLight" className="nav-text">About</Typography>
            </Link>
            <Link
              to="/resume"
              className={`header-v2-link ${isInitialLoad ? 'anim-fade-in' : ''} ${isResumeActive ? 'active' : ''}`}
              style={isInitialLoad ? { animationDelay: '200ms', animationDuration: '600ms', animationTimingFunction: 'ease-out' } : {}}
            >
              <Typography as="span" variant="bodyLight" className="nav-text">Resume</Typography>
            </Link>
            <a
              href="https://www.linkedin.com/in/niharikadalal"
              target="_blank"
              rel="noopener noreferrer"
              className={`header-v2-link ${isInitialLoad ? 'anim-fade-in' : ''}`}
              style={isInitialLoad ? { animationDelay: '200ms', animationDuration: '600ms', animationTimingFunction: 'ease-out' } : {}}
            >
              <Typography as="span" variant="bodyLight" className="nav-text">LinkedIn</Typography>
            </a>
            <a
              href="mailto:niharika13dalal@gmail.com"
              className={`header-v2-link ${isInitialLoad ? 'anim-fade-in' : ''}`}
              style={isInitialLoad ? { animationDelay: '200ms', animationDuration: '600ms', animationTimingFunction: 'ease-out' } : {}}
            >
              <Typography as="span" variant="bodyLight" className="nav-text">Email</Typography>
            </a>
          </div>
        </div>
      </header>
      <div className="header-v2-spacer" />

      {/* Mobile Floating Pill Navigation */}
      <div className="fixed md:hidden bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] px-6 sm:px-8 py-3 flex items-center gap-8 z-[1000] border border-gray-100 w-max max-w-[90%]">
        <Link to="/" aria-label="Home" className={`flex items-center justify-center w-[32px] h-[32px] no-underline relative transition-colors duration-200 ${isHomeActive ? 'text-gray-900' : 'text-gray-400'}`}>
          <span className={`material-symbols-outlined nav-icon-material select-none text-[32px] block ${isHomeActive ? 'nav-icon-material-active' : ''}`}>home</span>
        </Link>
        <Link to="/about" aria-label="About" className={`flex items-center justify-center w-[32px] h-[32px] no-underline relative transition-colors duration-200 ${isAboutActive ? 'text-gray-900' : 'text-gray-400'}`}>
          <span className={`material-symbols-outlined nav-icon-material select-none text-[32px] block ${isAboutActive ? 'nav-icon-material-active' : ''}`}>person</span>
        </Link>
        <Link to="/resume" aria-label="Resume" className={`flex items-center justify-center w-[32px] h-[32px] no-underline relative transition-colors duration-200 ${isResumeActive ? 'text-gray-900' : 'text-gray-400'}`}>
          <span className={`material-symbols-outlined nav-icon-material select-none text-[32px] block ${isResumeActive ? 'nav-icon-material-active' : ''}`}>description</span>
        </Link>
        <a href="https://www.linkedin.com/in/niharikadalal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 no-underline transition-colors duration-200 hover:text-gray-900 flex items-center justify-center w-[32px] h-[32px]">
          <Icon icon="mdi:linkedin" className="text-[32px] block" />
        </a>
        <a href="mailto:niharika13dalal@gmail.com" aria-label="Email" className="text-gray-400 no-underline transition-colors duration-200 hover:text-gray-900 flex items-center justify-center w-[32px] h-[32px]">
          <span className="material-symbols-outlined nav-icon-material select-none text-[32px] block">mail</span>
        </a>
      </div>
    </>
  );
}
