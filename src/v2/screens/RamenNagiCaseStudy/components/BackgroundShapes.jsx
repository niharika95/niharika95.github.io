import { motion } from 'framer-motion';

const shapes = [
  { type: 'circle', size: 300, x: '10%', y: '10%', color: '#DC0411', delay: 0 },
  { type: 'square', size: 200, x: '80%', y: '20%', color: '#333', delay: 2 },
  { type: 'triangle', size: 250, x: '20%', y: '60%', color: '#DC0411', delay: 4 },
  { type: 'circle', size: 400, x: '70%', y: '80%', color: '#eee', delay: 1 },
];

const BackgroundShapes = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-40">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            width: shape.size,
            height: shape.size,
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'triangle' ? '0' : '20px',
            background: shape.type === 'triangle' ? 'transparent' : shape.color,
            borderBottom: shape.type === 'triangle' ? `${shape.size}px solid ${shape.color}` : 'none',
            borderLeft: shape.type === 'triangle' ? `${shape.size / 2}px solid transparent` : 'none',
            borderRight: shape.type === 'triangle' ? `${shape.size / 2}px solid transparent` : 'none',
            left: shape.x,
            top: shape.y,
            filter: 'blur(60px)',
          }}
          className="opacity-10"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15 + index * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundShapes;
