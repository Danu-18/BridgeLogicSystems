import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Particles = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} />;
  }

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
    color: i % 3 === 0 ? '#e91e8c' : i % 3 === 1 ? '#7c3aed' : '#f5c518',
  }));
  
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map(p => (
        <motion.div key={p.id}
          style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, borderRadius: '50%', background: p.color, opacity: 0.4 }}
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};
