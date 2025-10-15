import React, { useEffect, useRef, useState } from 'react';

import ContentContainer from '../../common/ContentContainer';
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

// Component for adaptive hamburger icon
const HamburgerIcon = ({ isNavVisible, containerRef }) => {
  const [iconColor, setIconColor] = useState('black');

  useEffect(() => {
    const checkIconColor = () => {
      try {
        if (!containerRef?.current) return;

        const header = containerRef.current.closest('header');
        const originalPointerEvents = header ? header.style.pointerEvents : null;
        
        if (header) {
          header.style.pointerEvents = 'none';
        }

        const rect = containerRef.current.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const elementBelow = document.elementFromPoint(x, y);
        
        if (header) {
          header.style.pointerEvents = originalPointerEvents || '';
        }

        if (!elementBelow) {
          setIconColor('black');
          return;
        }

        const bgColor = getEffectiveBackgroundColor(elementBelow);
        if (!bgColor) {
          setIconColor('black');
          return;
        }

        const luminance = calculateRelativeLuminance(bgColor);
        setIconColor(luminance > 0.179 ? 'black' : 'white');
      } catch (e) {
        console.error('Error checking icon color:', e);
        setIconColor('black');
      }
    };

    const getEffectiveBackgroundColor = (element) => {
      let current = element;
      
      while (current && current !== document.body) {
        const bgColor = window.getComputedStyle(current).backgroundColor;
        
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const rgb = parseRgbColor(bgColor);
          if (rgb) {
            if (rgb.a < 1 && current.parentElement) {
              const parentColor = getEffectiveBackgroundColor(current.parentElement);
              if (parentColor) {
                return blendColors(rgb, parentColor);
              }
            }
            return rgb;
          }
        }
        
        current = current.parentElement;
      }
      
      return { r: 255, g: 255, b: 255, a: 1 };
    };

    const parseRgbColor = (colorString) => {
      const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (match) {
        return {
          r: parseInt(match[1]),
          g: parseInt(match[2]),
          b: parseInt(match[3]),
          a: match[4] ? parseFloat(match[4]) : 1
        };
      }
      return null;
    };

    const blendColors = (foreground, background) => {
      const alpha = foreground.a;
      return {
        r: Math.round(foreground.r * alpha + background.r * (1 - alpha)),
        g: Math.round(foreground.g * alpha + background.g * (1 - alpha)),
        b: Math.round(foreground.b * alpha + background.b * (1 - alpha)),
        a: 1
      };
    };

    const calculateRelativeLuminance = (color) => {
      const rsRGB = color.r / 255;
      const gsRGB = color.g / 255;
      const bsRGB = color.b / 255;

      const r = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
      const g = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
      const b = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    checkIconColor();
    
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkIconColor, 50);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkIconColor);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIconColor);
      clearTimeout(scrollTimeout);
    };
  }, [containerRef]);

  return (
    <>
      <motion.path
        d="M 3 6 L 21 6"
        stroke={iconColor}
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
        stroke={iconColor}
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
        stroke={iconColor}
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
    </>
  );
};

// Component to render text with per-character adaptive colors
const AdaptiveText = ({ text, className = '', containerRef }) => {
  const [charColors, setCharColors] = useState([]);
  const charRefs = useRef([]);

  useEffect(() => {
    const checkCharacterColors = () => {
      try {
        if (!containerRef?.current) return;

        const header = containerRef.current.closest('header');
        const originalPointerEvents = header ? header.style.pointerEvents : null;
        
        // Temporarily disable pointer events to detect background
        if (header) {
          header.style.pointerEvents = 'none';
        }

        const colors = charRefs.current.map((charRef) => {
          if (!charRef) return 'black';

          const rect = charRef.getBoundingClientRect();
          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;

          const elementBelow = document.elementFromPoint(x, y);
          if (!elementBelow) return 'black';

          const bgColor = getEffectiveBackgroundColor(elementBelow);
          if (!bgColor) return 'black';

          const luminance = calculateRelativeLuminance(bgColor);
          return luminance > 0.179 ? 'black' : 'white';
        });

        // Restore pointer events
        if (header) {
          header.style.pointerEvents = originalPointerEvents || '';
        }

        setCharColors(colors);
      } catch (e) {
        console.error('Error checking character colors:', e);
      }
    };

    // Helper functions
    const getEffectiveBackgroundColor = (element) => {
      let current = element;
      
      while (current && current !== document.body) {
        const bgColor = window.getComputedStyle(current).backgroundColor;
        
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const rgb = parseRgbColor(bgColor);
          if (rgb) {
            if (rgb.a < 1 && current.parentElement) {
              const parentColor = getEffectiveBackgroundColor(current.parentElement);
              if (parentColor) {
                return blendColors(rgb, parentColor);
              }
            }
            return rgb;
          }
        }
        
        current = current.parentElement;
      }
      
      return { r: 255, g: 255, b: 255, a: 1 };
    };

    const parseRgbColor = (colorString) => {
      const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (match) {
        return {
          r: parseInt(match[1]),
          g: parseInt(match[2]),
          b: parseInt(match[3]),
          a: match[4] ? parseFloat(match[4]) : 1
        };
      }
      return null;
    };

    const blendColors = (foreground, background) => {
      const alpha = foreground.a;
      return {
        r: Math.round(foreground.r * alpha + background.r * (1 - alpha)),
        g: Math.round(foreground.g * alpha + background.g * (1 - alpha)),
        b: Math.round(foreground.b * alpha + background.b * (1 - alpha)),
        a: 1
      };
    };

    const calculateRelativeLuminance = (color) => {
      const rsRGB = color.r / 255;
      const gsRGB = color.g / 255;
      const bsRGB = color.b / 255;

      const r = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
      const g = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
      const b = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    checkCharacterColors();
    
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkCharacterColors, 50);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkCharacterColors);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkCharacterColors);
      clearTimeout(scrollTimeout);
    };
  }, [containerRef, text]);

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          ref={(el) => (charRefs.current[index] = el)}
          style={{
            color: charColors[index] || 'black',
            transition: 'color 0.3s ease'
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBubbleMode, setIsBubbleMode] = useState(false);
  const [morphProgress, setMorphProgress] = useState(0);

  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

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
      
      // Calculate smooth morph progress between scroll positions 20-100
      const morphStart = 20;
      const morphEnd = 100;
      const progress = Math.min(Math.max((offset - morphStart) / (morphEnd - morphStart), 0), 1);
      setMorphProgress(progress);
      setIsBubbleMode(offset > 72);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => setIsNavVisible(!isNavVisible);

  // Calculate border radius with smooth easing
  const getBorderRadius = () => {
    const maxRadius = 9999;
    // Smooth ease-in-out curve
    const eased = morphProgress < 0.5
      ? 4 * morphProgress * morphProgress * morphProgress
      : 1 - Math.pow(-2 * morphProgress + 2, 3) / 2;
    return `${eased * maxRadius}px`;
  };

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'url(#liquidGlass) blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    borderRadius: getBorderRadius(),
    padding: '12px 24px',
    border: `1px solid rgba(255, 255, 255, ${0.3 * (1 - morphProgress)})`,
    boxShadow: morphProgress > 0.3 ? `
      inset 2px 2px 1px 0 rgba(255, 255, 255, ${0.3 * morphProgress}),
      inset -2px -2px 2px 1px rgba(255, 255, 255, ${0.3 * morphProgress}),
      0 ${4 * morphProgress}px ${8 * morphProgress}px 0 rgba(0, 0, 0, ${0.2 * morphProgress}),
      0 ${6 * morphProgress}px ${20 * morphProgress}px 0 rgba(0, 0, 0, ${0.2 * morphProgress})
    ` : 'none',
    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
  };

  const headerBarStyle = {
    background: morphProgress > 0.7 ? 'transparent' : `rgba(255, 255, 255, ${0.05 * (1 - morphProgress)})`,
    backdropFilter: morphProgress > 0.7 ? 'none' : `url(#liquidGlass) blur(${4 * (1 - morphProgress)}px)`,
    WebkitBackdropFilter: morphProgress > 0.7 ? 'none' : `blur(${4 * (1 - morphProgress)}px)`,
    borderBottom: `1px solid rgba(255, 255, 255, ${0.3 * (1 - morphProgress)})`,
    boxShadow: morphProgress > 0.7 ? 'none' : `
      inset 0 1px 0 0 rgba(255, 255, 255, ${0.3 * (1 - morphProgress)}),
      0 4px 8px 0 rgba(0, 0, 0, ${0.2 * (1 - morphProgress)})
    `,
    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
  };

  const linkRefs = [projectsRef, aboutRef];

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
        <ContentContainer className="px-[80px] max-md:px-[20px]">
          <div className="flex justify-between items-center py-[16px] min-h-[88px] max-[600px]:grid max-[600px]:grid-cols-[auto_1fr_auto] max-[600px]:gap-x-[12px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-[600px]:col-start-1"
          >
            <HashLink to="/#" className="no-underline">
              <div
                ref={logoRef}
                style={glassStyle}
                className="hover:scale-105 active:scale-95"
              >
                <h1 className="font-['Playfair_Display',serif] text-[24px] m-0 font-normal drop-shadow-lg">
                  <AdaptiveText
                    text="Niharika Dalal"
                    containerRef={logoRef}
                  />
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
                <HamburgerIcon
                  isNavVisible={isNavVisible}
                  containerRef={hamburgerRef}
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
                    to={href}
                    className="max-[600px]:block max-[600px]:w-full"
                  >
                    <div
                      ref={linkRefs[index]}
                      style={glassStyle}
                      className="hover:scale-105 active:scale-95 max-[600px]:w-full max-[600px]:text-center"
                    >
                      <AdaptiveText
                        text={label}
                        className="drop-shadow-lg font-['Playfair_Display',serif]"
                        containerRef={linkRefs[index]}
                      />
                    </div>
                  </Element>
                </motion.div>
              ))}
            </nav>
          )}
          </div>
        </ContentContainer>
      </motion.header>
    </>
  );
}

export default Header;
