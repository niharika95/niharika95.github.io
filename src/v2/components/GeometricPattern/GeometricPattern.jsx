import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { gsap } from 'gsap';

// Register the plugin
gsap.registerPlugin(MorphSVGPlugin);

// Grid size
const BOX_SIZE = 90;

// Colors
const defaultTiles = [
  { bg: '#313C5F', pathFill: '#F7B000' },
  { bg: '#DCD7E8', pathFill: '#E3F3EE' },
  { bg: '#313C5F', pathFill: '#E3F3EE' },
  { bg: '#F7B000', pathFill: '#E3F3EE' },
  { bg: '#FF4C4C', pathFill: '#F47A2D' },
  { bg: '#8fdfc6', pathFill: '#313C5F' },
  { bg: '#e3f3ee', pathFill: '#313C5F' },
  { bg: '#F7B000', pathFill: '#313C5F' },
  { bg: '#FF4C4C', pathFill: '#F47A2D' },
  { bg: '#f7b000', pathFill: '#313C5F' },
  { bg: '#F47A2D', pathFill: '#DCD7E8' },
  { bg: '#313C5F', pathFill: '#E3F3EE' },
  { bg: '#8fdfc6', pathFill: '#313C5F' },
  { bg: '#DCD7E8', pathFill: '#E3F3EE' },
  { bg: '#FF4C4C', pathFill: '#313C5F' },
  { bg: '#313C5F', pathFill: '#E3F3EE' },
  { bg: '#FF4C4C', pathFill: '#F47A2D' },
];

// Helper: sample unique indices
function sampleUniqueIndices(n, max) {
  const result = new Set();
  if (n <= 0) return [];
  const count = Math.min(n, max);
  while (result.size < count) {
    result.add(Math.floor(Math.random() * max));
  }
  return Array.from(result);
}

// --- UPDATED SHAPES (v4) ---
// Fixes the broken 'half' paths and correctly implements 'quarter' paths.
const SHAPES = {
  slash: {
    forward: 'M 0 90 L 90 0 L 90 90 Z',
    backward: 'M 0 0 L 0 90 L 90 90 Z',
  },
  quarter: {
    // Concave Notch: Fills the remaining 3/4 area, leaving a concave notch at the corner.
    // tl: Notch at (0, 0). Path goes clockwise around the perimeter.
    tl: 'M 45 0 L 90 0 L 90 90 L 0 90 L 0 45 A 45 45 0 0 0 45 0 Z',
    // tr: Notch at (90, 0). Path goes clockwise around the perimeter.
    tr: 'M 90 45 L 90 90 L 0 90 L 0 0 L 45 0 A 45 45 0 0 0 90 45 Z',
    // br: Notch at (90, 90). Refactored for stability.
    br: 'M 0 0 L 90 0 L 90 45 A 45 45 0 0 0 45 90 L 0 90 Z',
    // bl: Notch at (0, 90). Path goes clockwise around the perimeter.
    bl: 'M 0 45 L 0 0 L 90 0 L 90 90 L 45 90 A 45 45 0 0 0 0 45 Z',
  },
  half: {
    // These semi-circles have their straight edge on the perimeter (y=0 for top).
    top: 'M 0 0 A 45 45 0 0 0 90 0 Z',
    right: 'M 90 0 A 45 45 0 0 0 90 90 Z',
    bottom: 'M 90 90 A 45 45 0 0 0 0 90 Z',
    left: 'M 0 90 A 45 45 0 0 0 0 0 Z',
  },
};
// --- END UPDATED SHAPES ---

// Group orders for cyc transitions
const GROUP_KEYS = {
  slash: ['forward', 'backward'],
  quarter: ['tl', 'tr', 'br', 'bl'],
  half: ['top', 'right', 'bottom', 'left'],
};

const GROUP_NAMES = Object.keys(GROUP_KEYS);

// Helper: pick random element
function randomOf(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Helper: initial random state
function randomInitialState() {
  const group = randomOf(GROUP_NAMES);
  const subKeys = GROUP_KEYS[group];
  const subIndex = Math.floor(Math.random() * subKeys.length);
  return { group, subIndex };
}

// Tile that can morph imperatively
const MorphingTile = forwardRef(function MorphingTile(
  {
    bg,
    pathFill,
    initialD,
    morphDuration = 0.35, // quick
    morphEase = 'elastic.out(1, 0.5)', // springy
  },
  ref
) {
  const pathRef = useRef(null);

  useLayoutEffect(() => {
    if (pathRef.current && initialD) {
      // ensure starting path matches initial
      gsap.set(pathRef.current, { attr: { d: initialD } });
    }
  }, [initialD]);

  // Expose imperative morph method
  useImperativeHandle(ref, () => ({
    morphToD: (d) => {
      if (!pathRef.current || !d) return;
      gsap.to(pathRef.current, {
        morphSVG: d,
        duration: morphDuration,
        ease: morphEase,
      });
    },
  }));

  return (
    <div
      className="relative"
      style={{
        width: `${BOX_SIZE}px`,
        height: `${BOX_SIZE}px`,
      }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 90 90"
      >
        <rect fill={bg} height="90" width="90" />
        <path
          ref={pathRef}
          d={initialD}
          fill={pathFill}
          style={{ transformOrigin: '45px 45px' }}
        />
      </svg>
    </div>
  );
});

// The main grid with global orchestration
function GeometricPattern({
  tiles = defaultTiles,
  className = '',
  totalTilesToGenerate = 50,

  // Orchestration controls
  tickMs = 2000, // equal intervals
  tilesPerTick = null, // if null, derived from grid size
  changeGroupProbability = 0.15, // sometimes flip group for variety

  // Animation feel
  morphDuration = 0.35,
  morphEase = 'elastic.out(1, 0.5)',
}) {
  // Build initial tiles with randomized states
  const initialTileData = useMemo(() => {
    const instances = [];
    // --- THIS IS THE FIX ---
    for (let i = 0; i < totalTilesToGenerate; i += 1) {
    // --- END FIX ---
      const base = tiles[i % tiles.length];
      const bg = base.bg || '#313C5F';
      let pathFill = base.pathFill || '#E3F3EE';
      if (pathFill === bg) {
        pathFill = bg === '#313C5F' ? '#E3F3EE' : '#313C5F';
      }
      const state = randomInitialState();
      const subKey = GROUP_KEYS[state.group][state.subIndex];
      const initialD = SHAPES[state.group][subKey];

      instances.push({
        key: i,
        bg,
        pathFill,
        state, // { group, subIndex }
        initialD,
      });
    }
    return instances;
  }, [tiles, totalTilesToGenerate]);

  // Imperative refs to children
  const tileRefs = useRef([]);
  const setTileRef = (idx) => (el) => {
    tileRefs.current[idx] = el;
  };

  // Keep state objects in a ref so we can mutate without re-render spam
  const tileStatesRef = useRef(initialTileData.map((t) => ({ ...t.state })));

  // Derived tiles per tick if not provided
  const tilesPerTickResolved = useMemo(() => {
    if (typeof tilesPerTick === 'number' && tilesPerTick >= 0) return tilesPerTick;
    // default to about 12% of tiles, at least 1
    return Math.max(1, Math.round(initialTileData.length * 0.12));
  }, [tilesPerTick, initialTileData.length]);

  useEffect(() => {
    if (initialTileData.length === 0) return undefined;

    const handleTick = () => {
      const indices = sampleUniqueIndices(tilesPerTickResolved, initialTileData.length);

      indices.forEach((i) => {
        const ref = tileRefs.current[i];
        if (!ref || !ref.morphToD) return;

        const s = tileStatesRef.current[i];

        // Possibly change the group randomly for variety
        if (Math.random() < changeGroupProbability) {
          const newGroupCandidates = GROUP_NAMES.filter((g) => g !== s.group);
          s.group = randomOf(newGroupCandidates);
          s.subIndex = 0; // reset sub-index on group change
        } else {
          // advance to next sub-index within same group
          const subKeys = GROUP_KEYS[s.group];
          s.subIndex = (s.subIndex + 1) % subKeys.length;
        }

        const subKey = GROUP_KEYS[s.group][s.subIndex];
        const targetD = SHAPES[s.group][subKey];

        ref.morphToD(targetD);
      });
    };

    const id = window.setInterval(handleTick, tickMs);
    return () => {
      window.clearInterval(id);
    };
  }, [tickMs, tilesPerTickResolved, initialTileData.length, changeGroupProbability]);

  return (
    <div
      className={`w-full h-full overflow-hidden ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, ${BOX_SIZE}px)`,
        gridAutoRows: `${BOX_SIZE}px`,
        gridAutoFlow: 'row',
      }}
    >
      {initialTileData.map((tile, idx) => (
        <MorphingTile
          key={tile.key}
          ref={setTileRef(idx)}
          bg={tile.bg}
          pathFill={tile.pathFill}
          initialD={tile.initialD}
          morphDuration={morphDuration}
          morphEase={morphEase}
        />
      ))}
    </div>
  );
}

export default GeometricPattern;