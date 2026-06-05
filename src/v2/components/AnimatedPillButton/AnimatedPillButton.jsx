import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AnimatedPillButton.css';

export default function AnimatedPillButton({
  as = 'button',
  className = '',
  style = {},
  strokeColor = '#1A1A1A',
  offset = 3,
  children,
  ...props
}) {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSize({
          width: entry.target.offsetWidth,
          height: entry.target.offsetHeight
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const Component = as === 'link' ? Link : as === 'a' ? 'a' : as === 'div' ? 'div' : 'button';

  const totalW = size.width > 0 ? size.width + offset * 2 : 0;
  const totalH = size.height > 0 ? size.height + offset * 2 : 0;

  const drawReady = totalW > 0 && totalH > 0;
  const r = totalH / 2;
  const straightLength = Math.max(totalW - 2 * r, 0);

  // SVG arcs: A rx ry x-axis-rotation large-arc-flag sweep-flag x y
  // Top path sweeps right along top
  const topPath = `M 0,${r} A ${r},${r} 0 0 1 ${r},0 L ${r + straightLength},0 A ${r},${r} 0 0 1 ${totalW},${r}`;
  // Bottom path sweeps right along bottom
  const bottomPath = `M 0,${r} A ${r},${r} 0 0 0 ${r},${totalH} L ${r + straightLength},${totalH} A ${r},${r} 0 0 0 ${totalW},${r}`;

  const pathLen = Math.PI * r + straightLength;

  return (
    <Component
      ref={containerRef}
      className={`animated-pill-btn relative ${className}`}
      style={style}
      {...props}
    >
      {children}
      {drawReady && (
        <svg
          className="absolute pointer-events-none stroke-anim"
          style={{
            top: -offset,
            left: -offset,
            width: totalW,
            height: totalH,
            overflow: 'visible',
            zIndex: 10
          }}
        >
          <path
            d={topPath}
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            strokeDasharray={pathLen}
            strokeDashoffset={pathLen}
            className="pill-stroke"
          />
          <path
            d={bottomPath}
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            strokeDasharray={pathLen}
            strokeDashoffset={pathLen}
            className="pill-stroke"
          />
        </svg>
      )}
    </Component>
  );
}
