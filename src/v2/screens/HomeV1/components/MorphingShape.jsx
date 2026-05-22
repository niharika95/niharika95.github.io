import React, { useState, useEffect } from 'react';

// Using 24 points for all shapes so CSS clip-path can animate seamlessly between them

const interp = (p1, p2, steps) => Array.from({length: steps}, (_, i) => [
  p1[0] + (p2[0]-p1[0])*(i/steps),
  p1[1] + (p2[1]-p1[1])*(i/steps)
]);

const circlePts = Array.from({length: 24}, (_, i) => {
  const a = (i / 24) * Math.PI * 2;
  return [50 + 50 * Math.sin(a), 50 - 50 * Math.cos(a)];
});

const squarePts = [
  ...interp([50,0], [100,0], 3),
  ...interp([100,0], [100,100], 6),
  ...interp([100,100], [0,100], 6),
  ...interp([0,100], [0,0], 6),
  ...interp([0,0], [50,0], 3)
];

const triPts = [
  ...interp([50,0], [100,100], 8),
  ...interp([100,100], [0,100], 8),
  ...interp([0,100], [50,0], 8)
];

const hexPts = [
  ...interp([50,0], [100,25], 4),
  ...interp([100,25], [100,75], 4),
  ...interp([100,75], [50,100], 4),
  ...interp([50,100], [0,75], 4),
  ...interp([0,75], [0,25], 4),
  ...interp([0,25], [50,0], 4)
];

const semiPts = [];
// Right arc from top-center (50, 25) to right-bottom (100, 75). center (50, 75), r=50.
for(let i=0; i<8; i++){
  let a = (i/8) * (Math.PI/2);
  semiPts.push([50 + 50*Math.sin(a), 75 - 50*Math.cos(a)]);
}
// Flat bottom from (100,75) to (0,75)
for(let i=0; i<8; i++){
  semiPts.push([100 - 100*(i/8), 75]);
}
// Left arc from (0,75) to (50,25)  
for(let i=0; i<8; i++){
  let a = -Math.PI/2 + (i/8)*(Math.PI/2);
  semiPts.push([50 + 50*Math.sin(a), 75 - 50*Math.cos(a)]);
}

const formatPolygon = (pts) => pts.map(p => `${p[0].toFixed(2)}% ${p[1].toFixed(2)}%`).join(', ');

const shapes = {
  circle: formatPolygon(circlePts),
  square: formatPolygon(squarePts),
  triangle: formatPolygon(triPts),
  hexagon: formatPolygon(hexPts),
  semicircle: formatPolygon(semiPts)
};

const shapeKeys = Object.keys(shapes);

const MorphingShape = () => {
  const [shapeIndex, setShapeIndex] = useState(0);
  const [hue, setHue] = useState(150);

  useEffect(() => {
    // Randomize shape and color every 2.1 seconds so transitions flow continuously
    const interval = setInterval(() => {
      setShapeIndex(Math.floor(Math.random() * shapeKeys.length));
      setHue(Math.floor(Math.random() * 360));
    }, 2100);
    return () => clearInterval(interval);
  }, []);

  const currentPolygon = shapes[shapeKeys[shapeIndex]];

  return (
    <span 
      className="morphing-shape"
      style={{
        display: 'inline-block',
        width: '24px',
        height: '24px',
        backgroundColor: `hsl(${hue}, 70%, 80%)`,
        clipPath: `polygon(${currentPolygon})`,
        WebkitClipPath: `polygon(${currentPolygon})`,
        transition: 'clip-path 2s ease-in-out, -webkit-clip-path 2s ease-in-out, background-color 2s ease-in-out',
        // Slight margin to act as a punctuation mark
        marginLeft: '6px',
        verticalAlign: 'middle',
        position: 'relative',
        top: '-2px'
      }}
    />
  );
};

export default MorphingShape;
