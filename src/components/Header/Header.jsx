import React, { useEffect, useState } from 'react';

import { Icon } from '@iconify/react';
import { HashLink as RHashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const HashLink = ({ className = '', ...rest }) => (
  <RHashLink
    {...rest}
    className={`text-[20px] no-underline hover:no-underline text-black visited:text-black ${className}`}
  />
);

const links = [
  { href: '/#projects', label: 'Projects', component: HashLink },
  { href: '/#about', label: 'About Me', component: HashLink },
];

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => setIsNavVisible(!isNavVisible);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-white/40 backdrop-blur-2xl border-b border-white/30 shadow-2xl shadow-black/10'
          : 'bg-white border-b border-[#cecece]'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backdropFilter: scrolled ? 'blur(32px) saturate(200%) brightness(1.05)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(32px) saturate(200%) brightness(1.05)' : 'none',
        boxShadow: scrolled ? '0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)' : 'none',
      }}
    >
      <div className="flex justify-between items-center px-[100px] max-[600px]:px-[12px] py-[8px] min-h-[72px] max-[600px]:grid max-[600px]:grid-cols-[auto_1fr_auto] max-[600px]:gap-x-[12px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-[600px]:col-start-1"
        >
          <HashLink smooth to="/#" className="no-underline">
            <h1 className="font-['Playfair_Display',serif] text-[24px] text-black m-0 font-normal">
              Niharika Dalal
            </h1>
          </HashLink>
        </motion.div>
        <Icon
          onClick={toggleNav}
          color="#000000"
          icon="icon-park:hamburger-button"
          className="hidden max-[600px]:block col-start-3 justify-self-end self-center text-[30px] cursor-pointer"
          role="button"
          tabIndex={0}
          aria-expanded={isNavVisible}
          aria-label="Toggle navigation"
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleNav()}
        />
        {(!isSmallScreen || isNavVisible) && (
          <nav className="flex items-center gap-x-[60px] max-[600px]:grid max-[600px]:grid-cols-1 max-[600px]:gap-y-[40px] max-[600px]:mt-[20px] max-[600px]:mb-[20px] max-[600px]:col-span-3 max-[600px]:justify-items-center">
          {links.map(({ href, label, component: Element }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + (index * 0.1),
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Element
                onClick={() => setIsNavVisible(false)}
                smooth
                to={href}
              >
                {label}
              </Element>
            </motion.div>
          ))}
          </nav>
        )}
      </div>
    </motion.header>
  );
}

export default Header;
