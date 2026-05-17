import React from 'react';
import { motion } from 'framer-motion';

/**
 * StrokeAnimation component - adds an animated underline stroke effect to text
 * @param {Object} props
 * @param {React.ReactNode} props.children - The text content to wrap
 * @param {string} props.strokeColor - Hex color for the stroke (without #)
 * @param {number} props.delay - Delay before animation starts in seconds (default: 0.8)
 * @param {number} props.duration - Duration of the animation in seconds (default: 0.4)
 */
const StrokeAnimation = ({ 
  children, 
  strokeColor, 
  delay = 0.8,
  duration = 0.4 
}) => {
  const strongStyle = {
    position: 'relative',
    display: 'inline',
    padding: '0 2px',
    backgroundImage: `linear-gradient(transparent calc(100% - 12px), #${strokeColor} 12px)`,
    backgroundSize: '0% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left bottom',
  };

  return (
    <motion.strong
      style={strongStyle}
      initial={{ backgroundSize: '0% 100%' }}
      animate={{ backgroundSize: '100% 100%' }}
      transition={{
        duration: duration,
        ease: 'easeOut',
        delay: delay
      }}
    >
      {children}
    </motion.strong>
  );
};

export default StrokeAnimation;