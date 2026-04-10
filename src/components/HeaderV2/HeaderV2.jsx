import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderV2.css';

export default function HeaderV2({ isInitialLoad = false, style = {} }) {
  return (
    <>
      <header className="header-v2" style={style}>
      <Link 
        to="/v2" 
        className={`header-v2-logo ${isInitialLoad ? 'anim-fade-in' : ''}`} 
        style={isInitialLoad ? { animationDelay: '0ms', animationDuration: '600ms', animationTimingFunction: 'ease-out' } : {}}
      >
        <span className="nav-text">Niharika Dalal</span>
      </Link>
      <div className="header-v2-nav">
        <Link 
          to="/about" 
          className={`header-v2-link ${isInitialLoad ? 'anim-fade-in' : ''}`} 
          style={isInitialLoad ? { animationDelay: '200ms', animationDuration: '600ms', animationTimingFunction: 'ease-out' } : {}}
        >
          <span className="nav-text">About</span>
        </Link>
        <Link 
          to="/resume" 
          className={`header-v2-link ${isInitialLoad ? 'anim-fade-in' : ''}`} 
          style={isInitialLoad ? { animationDelay: '200ms', animationDuration: '600ms', animationTimingFunction: 'ease-out' } : {}}
        >
          <span className="nav-text">Resume</span>
        </Link>
      </div>
    </header>
    <div className="header-v2-spacer" />
   </>
  );
}
