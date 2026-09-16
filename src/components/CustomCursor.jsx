import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ cursorText }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full bg-brandPrimary text-brandBg text-xs font-mono font-bold tracking-widest uppercase transition-colors"
      animate={{
        x: mousePosition.x - (cursorText ? 32 : 8),
        y: mousePosition.y - (cursorText ? 32 : 8),
        width: cursorText ? 64 : 16,
        height: cursorText ? 64 : 16,
        opacity: 0.85
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.1 }}
    >
      {cursorText}
    </motion.div>
  );
}