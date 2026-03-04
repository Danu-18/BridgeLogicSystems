import { useState, useEffect } from 'react';

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fn = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  return (
    <div style={{
      position: 'fixed', pointerEvents: 'none', zIndex: 9999,
      left: pos.x - 200, top: pos.y - 200,
      width: 400, height: 400, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(233,30,140,0.06) 0%, transparent 70%)',
      transition: 'left 0.15s ease, top 0.15s ease',
    }} />
  );
};
