import React from 'react';

/**
 * DecorativeDots - A reusable decorative pattern component
 *
 * @param {string} color - Hex color code (without #) for the dots pattern
 * @param {string} position - Position of the dots: 'top-left' or 'top-right'
 * @param {number} opacity - Opacity value (0-1), default is 0.6
 * @param {string} className - Additional CSS classes
 */
const DecorativeDots = ({
  color = 'E8DEF7',
  position = 'top-right',
  opacity = 0.6,
  className = ''
}) => {
  // Determine which SVG pattern to use based on color brightness
  // White dots for dark backgrounds, colored dots for light backgrounds
  const isDarkColor = (hexColor) => {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  const patternSvg = isDarkColor(color)
    ? '/pattern-diamond-white.svg'
    : '/pattern-diamond-purple.svg';

  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0'
  };

  const dotsStyle = {
    backgroundImage: `url(${patternSvg})`,
    backgroundSize: '242px 242px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: position === 'top-left' ? 'top left' : 'top right',
  };

  return (
    <div
      className={`absolute w-[242px] h-[242px] pointer-events-none ${positionClasses[position]} ${className}`}
      style={{ ...dotsStyle, opacity }}
      aria-hidden="true"
    />
  );
};

export default DecorativeDots;