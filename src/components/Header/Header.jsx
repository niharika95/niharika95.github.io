import React, { useEffect, useState } from 'react';

import { Icon } from '@iconify/react';
import { HashLink as RHashLink } from 'react-router-hash-link';
import { Link as RLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import niharikaLogo from '/niharikaLogo.png';

const Link = ({ className = '', smooth, ...rest }) => (
  <RLink
    {...rest}
    className={`text-[20px] no-underline hover:no-underline text-black visited:text-black ${className}`}
  />
);

const HashLink = ({ className = '', ...rest }) => (
  <RHashLink
    {...rest}
    className={`text-[20px] no-underline hover:no-underline text-black visited:text-black ${className}`}
  />
);

const links = [
  { href: '/#projects', label: 'Projects', component: HashLink },
  { href: '/resume', label: 'Resume', component: Link },
  { href: '/#about', label: 'About', component: HashLink },
];

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

  const toggleNav = () => setIsNavVisible(!isNavVisible);

  return (
    <header className="fixed top-0 left-0 bg-white border-b border-[#cecece] w-full z-50">
      <div className="flex justify-between items-center px-[100px] max-[600px]:px-[12px] py-[8px] min-h-[72px] max-[600px]:grid max-[600px]:grid-cols-[auto_1fr_auto] max-[600px]:gap-x-[12px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-[600px]:col-start-1"
        >
          <HashLink smooth to="/#">
            <img src={niharikaLogo} alt="logo" className="h-[56px]" />
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
    </header>
  );
}

export default Header;
