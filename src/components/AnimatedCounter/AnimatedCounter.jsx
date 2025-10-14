import React, { useEffect, useRef, useState } from 'react';

import { useInView } from 'framer-motion';

function AnimatedCounter({ value, duration = 2 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric value from string (e.g., "4.5+" -> 4.5, "17" -> 17, "60%" -> 60)
    const valueStr = value.toString();
    const numericValue = parseFloat(valueStr.replace(/[^0-9.]/g, ''));
    
    // Determine if it's a decimal number
    const isDecimal = valueStr.includes('.');
    const decimalPlaces = isDecimal ? 1 : 0;

    // Animation parameters
    const startTime = Date.now();
    const animationDuration = duration * 1000; // Convert to milliseconds

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      // Easing function for smooth animation (easeOutExpo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentCount = easeOutExpo * numericValue;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  // Format the displayed value
  const valueStr = value.toString();
  const isDecimal = valueStr.includes('.');
  let displayValue = isDecimal ? count.toFixed(1) : Math.round(count).toString();

  // Add back any suffix (like + or %)
  if (valueStr.includes('+')) {
    displayValue += '+';
  } else if (valueStr.includes('%')) {
    displayValue += '%';
  }

  return <span ref={ref}>{displayValue}</span>;
}

export default AnimatedCounter;