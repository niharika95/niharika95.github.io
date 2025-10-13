import React from 'react';

const svgPaths = {
  p11dd1a80: "M-1.96701e-06 45C5.90948 45 11.7611 43.8361 17.2208 41.5746C22.6804 39.3131 27.6412 35.9985 31.8198 31.8198C35.9984 27.6412 39.3131 22.6804 41.5746 17.2208C43.836 11.7611 45 5.90949 45 9.5964e-06L0 9.5964e-06L-1.96701e-06 45Z",
  p13416900: "M5.66238e-06 45.0004C5.90949 45.0004 11.7611 43.8364 17.2208 41.5749C22.6804 39.3135 27.6412 35.9988 31.8198 31.8202C35.9984 27.6415 39.3131 22.6808 41.5746 17.2211C43.836 11.7615 45 5.90985 45 0.000366211L7.62939e-06 0.000366211L5.66238e-06 45.0004Z",
  p2012a640: "M-9.59641e-06 45C5.90947 45 11.7611 43.836 17.2207 41.5746C22.6804 39.3131 27.6412 35.9984 31.8198 31.8198C35.9984 27.6412 39.3131 22.6804 41.5746 17.2208C43.836 11.7611 45 5.90948 45 0L-7.62939e-06 0L-9.59641e-06 45Z",
  p204a6cf0: "M-9.59641e-06 45.0004C5.90947 45.0004 11.7611 43.8364 17.2207 41.5749C22.6804 39.3135 27.6412 35.9988 31.8198 31.8202C35.9984 27.6415 39.3131 22.6808 41.5746 17.2211C43.836 11.7615 45 5.90985 45 0.000366211L-7.62939e-06 0.000366211L-9.59641e-06 45.0004Z",
  p3658de00: "M45 45.0012C20.1472 45.0012 -1.0864e-06 24.854 0 0.00118566C37.125 0.00265212 20.1472 8.51005e-06 45 9.59641e-06C69.8528 1.06828e-05 53.25 0.00118798 90 0.00118959C90 24.854 69.8528 45.0012 45 45.0012Z",
  p38a39500: "M45.375 45.375L90 0V90H0L45.375 45.375Z",
  p3caaa200: "M0.000242174 45C5.90973 45 11.7613 43.8361 17.221 41.5746C22.6806 39.3131 27.6414 35.9985 31.82 31.8198C35.9987 27.6412 39.3134 22.6804 41.5748 17.2208C43.8363 11.7611 45.0002 5.90949 45.0002 9.59641e-06L0.000244141 9.59641e-06L0.000242174 45Z",
  p3dabb800: "M-1.96701e-06 45C5.90948 45 11.7611 43.8361 17.2208 41.5746C22.6804 39.3131 27.6412 35.9985 31.8198 31.8198C35.9984 27.6412 39.3131 22.6804 41.5746 17.2208C43.836 11.7611 45 5.90949 45 9.5964e-06L0 9.59641e-06L-1.96701e-06 45Z",
  p6152200: "M5.66238e-06 45C5.90949 45 11.7611 43.836 17.2208 41.5746C22.6804 39.3131 27.6412 35.9984 31.8198 31.8198C35.9984 27.6412 39.3131 22.6804 41.5746 17.2208C43.836 11.7611 45 5.90948 45 0L7.62939e-06 0L5.66238e-06 45Z",
};

// Default tile definitions - can be customized via props
const defaultTiles = [
  { type: 'svg', bg: '#313C5F', path: 'p38a39500', pathFill: '#F7B000', rotate: 0, scaleY: 1 },
  { type: 'solid', bg: '#dcd7e8' },
  { type: 'svg', bg: '#DCD7E8', path: 'p6152200', pathFill: '#E3F3EE', rotate: 0, scaleY: 1 },
  { type: 'svg', bg: '#313C5F', path: 'p3dabb800', pathFill: '#E3F3EE', rotate: 270, scaleY: 1 },
  { type: 'svg', bg: '#F7B000', path: 'p2012a640', pathFill: '#E3F3EE', rotate: 180, scaleY: -1 },
  { type: 'svg', bg: '#FF4C4C', path: 'p38a39500', pathFill: '#F47A2D', rotate: 270, scaleY: 1 },
  { type: 'solid', bg: '#8fdfc6' },
  { type: 'solid', bg: '#e3f3ee' },
  { type: 'svg', bg: '#F7B000', path: 'p3caaa200', pathFill: '#313C5F', rotate: 270, scaleY: 1 },
  { type: 'svg', bg: '#FF4C4C', path: 'p204a6cf0', pathFill: '#F47A2D', rotate: 180, scaleY: -1 },
  { type: 'solid', bg: '#f7b000' },
  { type: 'svg', bg: '#F47A2D', path: 'p13416900', pathFill: '#DCD7E8', rotate: 0, scaleY: 1 },
  { type: 'svg', bg: '#313C5F', path: 'p3658de00', pathFill: '#E3F3EE', rotate: 270, scaleY: 1 },
  { type: 'solid', bg: '#8fdfc6' },
  { type: 'svg', bg: '#313C5F', path: 'p38a39500', pathFill: '#E3F3EE', rotate: 180, scaleY: -1 },
  { type: 'svg', bg: '#DCD7E8', path: 'p3dabb800', pathFill: '#E3F3EE', rotate: 270, scaleY: 1 },
  { type: 'svg', bg: '#313C5F', path: 'p3658de00', pathFill: '#E3F3EE', rotate: 270, scaleY: 1 },
  { type: 'solid', bg: '#ff4c4c' },
  { type: 'svg', bg: '#DCD7E8', path: 'p3dabb800', pathFill: '#E3F3EE', rotate: 90, scaleY: -1 },
  { type: 'svg', bg: '#F7B000', path: 'p38a39500', pathFill: '#8FDFC6', rotate: 270, scaleY: 1 },
  { type: 'svg', bg: '#DCD7E8', path: 'p38a39500', pathFill: '#E3F3EE', rotate: 180, scaleY: -1 },
  { type: 'svg', bg: '#FF4C4C', path: 'p38a39500', pathFill: '#313C5F', rotate: 0, scaleY: 1 },
  { type: 'svg', bg: '#313C5F', path: 'p38a39500', pathFill: '#E3F3EE', rotate: 180, scaleY: -1 },
  { type: 'svg', bg: '#FF4C4C', path: 'p11dd1a80', pathFill: '#F47A2D', rotate: 90, scaleY: -1 },
];

function GeometricPattern({ 
  tiles = defaultTiles, 
  maxRows = null, // null = fill available height, number = limit rows
  className = '' 
}) {
  const BOX_SIZE = 90;
  
  // Generate enough tiles to fill a large area (will be clipped by CSS grid)
  // We generate 200 tiles which should be more than enough for most screens
  const repeatedTiles = [];
  const totalTilesToGenerate = 200;
  
  for (let i = 0; i < totalTilesToGenerate; i++) {
    const tile = tiles[i % tiles.length];
    repeatedTiles.push({ ...tile, key: i });
  }
  
  return (
    <div 
      className={`w-full h-full overflow-hidden ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(15, ${BOX_SIZE}px)`,
        gridAutoRows: `${BOX_SIZE}px`,
        gridAutoFlow: 'row',
        ...(maxRows && { maxHeight: `${maxRows * BOX_SIZE}px` })
      }}
    >
      {repeatedTiles.map((tile) => {
        if (tile.type === 'solid') {
          return (
            <div
              key={tile.key}
              style={{
                backgroundColor: tile.bg,
                width: `${BOX_SIZE}px`,
                height: `${BOX_SIZE}px`
              }}
            />
          );
        }
        
        // SVG tile
        const transform = `rotate(${tile.rotate}deg) scaleY(${tile.scaleY})`;
        
        return (
          <div
            key={tile.key}
            className="relative"
            style={{
              width: `${BOX_SIZE}px`,
              height: `${BOX_SIZE}px`,
              transform: tile.rotate !== 0 || tile.scaleY !== 1 ? transform : undefined
            }}
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
              <rect fill={tile.bg} height="90" width="90" />
              <path d={svgPaths[tile.path]} fill={tile.pathFill} />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

export default GeometricPattern;