import './HomeV1.css';

import { Link } from 'react-router-dom';
import React from 'react';
import HeroPanelGallery from './components/HeroPanelGallery';
// Wait, I should import SVG or an arbitrary icon if I don't know the exact path. Let's use simple text or unicode, or check if we have icons. The user's prompt says "small icons: a LinkedIn icon + "LinkedIn" and an email icon + "Say hello!". I'll use standard <img> if they have it, but wait, let's check what icons exist in the project soon. I'll just use dummy icons for now.

const HomeV1 = () => {
  return (
    <div className="home-v1">
      <header className="home-v1-header">
        <div className="home-v1-header-left">
          <Link to="/" className="home-v1-name">Niharika Dalal</Link>
        </div>
        <div className="home-v1-header-right">
          <Link to="/about" className="home-v1-link">About</Link>
          <Link to="/resume" className="home-v1-link">Resume</Link>
        </div>
      </header>

      <main className="home-v1-main">
        <HeroPanelGallery />
      </main>

      <footer className="home-v1-footer">
        <a 
          href="https://www.linkedin.com/in/niharika-dalal-b47253b2/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="home-v1-social-link"
        >
          <i className="icon-linkedin"></i> LinkedIn
        </a>
        <span className="home-v1-footer-pipe">|</span>
        <a 
          href="mailto:niharika95@gmail.com" 
          className="home-v1-social-link"
        >
          <i className="icon-email"></i> Say hello!
        </a>
      </footer>
    </div>
  );
};

export default HomeV1;
