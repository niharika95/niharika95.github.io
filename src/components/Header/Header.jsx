import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { HashLink as RHashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const HashLink = ({ className = '', ...rest }) => (
  <RHashLink
    {...rest}
    className={`text-[20px] no-underline hover:no-underline text-black visited:text-black ${className}`}
  />
);

const StyledLink = ({ className = '', ...rest }) => (
  <Link
    {...rest}
    className={`text-[20px] no-underline hover:no-underline text-black visited:text-black ${className}`}
  />
);

const links = [
  { href: '/#projects', label: 'Projects', component: HashLink },
  { href: '/about', label: 'About Me', component: StyledLink },
];

// Custom hook to detect background brightness for individual elements
const useAdaptiveTextColor = (elementRef) => {
  const [textColor, setTextColor] = useState('black');

  useEffect(() => {
    const checkBackgroundBrightness = () => {
      try {
        const element = elementRef.current;
        if (!element) {
          setTextColor('black');
          return;
        }

        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const elementBelow = document.elementFromPoint(x, y);
        if (!elementBelow) {
          setTextColor('black');
          return;
        }

        const bgColor = window.getComputedStyle(elementBelow).backgroundColor;
        
        // Check if background is transparent or not set
        if (!bgColor || bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
          // Check parent elements
          let parent = elementBelow.parentElement;
          let foundColor = false;
          
          while (parent && !foundColor) {
            const parentBg = window.getComputedStyle(parent).backgroundColor;
            if (parentBg && parentBg !== 'rgba(0, 0, 0, 0)' && parentBg !== 'transparent') {
              const rgb = parentBg.match(/\d+/g);
              if (rgb && rgb.length >= 3) {
                const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
                setTextColor(brightness < 100 ? 'white' : 'black');
                foundColor = true;
              }
            }
            parent = parent.parentElement;
          }
          
          if (!foundColor) {
            setTextColor('black');
          }
        } else {
          const rgb = bgColor.match(/\d+/g);
          if (rgb && rgb.length >= 3) {
            const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
            setTextColor(brightness < 100 ? 'white' : 'black');
          } else {
            setTextColor('black');
          }
        }
      } catch (e) {
        setTextColor('black');
      }
    };

    checkBackgroundBrightness();
    
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkBackgroundBrightness, 50);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkBackgroundBrightness);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkBackgroundBrightness);
      clearTimeout(scrollTimeout);
    };
  }, [elementRef]);

  return textColor;
};

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBubbleMode, setIsBubbleMode] = useState(false);

  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  const logoTextColor = useAdaptiveTextColor(logoRef);
  const hamburgerTextColor = useAdaptiveTextColor(hamburgerRef);
  const projectsTextColor = useAdaptiveTextColor(projectsRef);
  const aboutTextColor = useAdaptiveTextColor(aboutRef);

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
      setIsBubbleMode(offset > 72);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => setIsNavVisible(!isNavVisible);

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'url(#liquidGlass) blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    borderRadius: isBubbleMode ? '9999px' : '0px',
    padding: '12px 24px',
    boxShadow: isBubbleMode ? `
      inset 2px 2px 1px 0 rgba(255, 255, 255, 0.3),
      inset -2px -2px 2px 1px rgba(255, 255, 255, 0.3),
      0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.2)
    ` : 'none',
    transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.5)',
  };

  const headerBarStyle = {
    background: isBubbleMode ? 'transparent' : 'rgba(255, 255, 255, 0.05)',
    backdropFilter: isBubbleMode ? 'none' : 'url(#liquidGlass) blur(4px)',
    WebkitBackdropFilter: isBubbleMode ? 'none' : 'blur(4px)',
    borderBottom: isBubbleMode ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: isBubbleMode ? 'none' : `
      inset 0 1px 0 0 rgba(255, 255, 255, 0.3),
      0 4px 8px 0 rgba(0, 0, 0, 0.2)
    `,
    transition: 'all 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.5)',
  };

  const linkRefs = [projectsRef, aboutRef];
  const linkColors = [projectsTextColor, aboutTextColor];

  return (
    <>
      {/* SVG Filter Definition */}
      <svg style={{ display: 'none' }}>
        <filter
          id="liquidGlass"
          colorInterpolationFilters="linearRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feDisplacementMap
            in="SourceGraphic"
            in2="SourceGraphic"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="displacementMap"
          />
          <feGaussianBlur
            stdDeviation="3 3"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="displacementMap"
            edgeMode="none"
            result="blur"
          />
        </filter>
      </svg>

      <motion.header
        className="fixed top-0 left-0 w-full z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={headerBarStyle}
      >
        <div className="flex justify-between items-center px-[100px] max-[600px]:px-[12px] py-[16px] min-h-[88px] max-[600px]:grid max-[600px]:grid-cols-[auto_1fr_auto] max-[600px]:gap-x-[12px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-[600px]:col-start-1"
          >
            <HashLink smooth to="/#" className="no-underline">
              <div
                ref={logoRef}
                style={glassStyle}
                className="hover:scale-105 active:scale-95"
              >
                <h1 className={`font-['Playfair_Display',serif] text-[24px] text-${logoTextColor} m-0 font-normal drop-shadow-lg transition-colors duration-300`}>
                  Niharika Dalal
                </h1>
              </div>
            </HashLink>
          </motion.div>
          
          <div
            className="hidden max-[600px]:block col-start-3 justify-self-end self-center"
          >
            <motion.div
              ref={hamburgerRef}
              style={glassStyle}
              className="hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center w-[72px] h-[48px]"
              onClick={toggleNav}
              role="button"
              tabIndex={0}
              aria-expanded={isNavVisible}
              aria-label="Toggle navigation"
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleNav()}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M 3 6 L 21 6"
                  stroke={hamburgerTextColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    d: isNavVisible ? "M 6 6 L 18 18" : "M 3 6 L 21 6"
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                />
                <motion.path
                  d="M 3 12 L 21 12"
                  stroke={hamburgerTextColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    opacity: isNavVisible ? 0 : 1
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut"
                  }}
                />
                <motion.path
                  d="M 3 18 L 21 18"
                  stroke={hamburgerTextColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    d: isNavVisible ? "M 6 18 L 18 6" : "M 3 18 L 21 18"
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                />
              </svg>
            </motion.div>
          </div>
          
          {(!isSmallScreen || isNavVisible) && (
            <nav className="flex items-center gap-x-[32px] max-[600px]:grid max-[600px]:grid-cols-1 max-[600px]:gap-y-[24px] max-[600px]:mt-[20px] max-[600px]:mb-[20px] max-[600px]:col-span-3 max-[600px]:w-full max-[600px]:px-[12px]">
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
                  className="max-[600px]:w-full"
                >
                  <Element
                    onClick={() => setIsNavVisible(false)}
                    smooth
                    to={href}
                    className="max-[600px]:block max-[600px]:w-full"
                  >
                    <div
                      ref={linkRefs[index]}
                      style={glassStyle}
                      className="hover:scale-105 active:scale-95 max-[600px]:w-full max-[600px]:text-center"
                    >
                      <span className={`drop-shadow-lg text-${linkColors[index]} transition-colors duration-300 font-['Playfair_Display',serif]`}>{label}</span>
                    </div>
                  </Element>
                </motion.div>
              ))}
            </nav>
          )}
        </div>
      </motion.header>
    </>
  );
}

export default Header;
