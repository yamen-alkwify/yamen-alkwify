import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function GooeyMetaball() {
  const targetX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const targetY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 3 : 0);

  const x = useSpring(targetX, { stiffness: 70, damping: 20, mass: 0.4 });
  const y = useSpring(targetY, { stiffness: 70, damping: 20, mass: 0.4 });

  const orbit1X = useTransform(x, (value) => value + 140);
  const orbit1Y = useTransform(y, (value) => value - 60);
  const orbit2X = useTransform(x, (value) => value - 120);
  const orbit2Y = useTransform(y, (value) => value + 80);

  useEffect(() => {
    const handleMove = (event) => {
      targetX.set(event.clientX);
      targetY.set(event.clientY * 0.85);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [targetX, targetY]);

  return (
    <div className="gooey-layer" aria-hidden>
      <motion.div
        className="gooey-shape gooey-shape--main"
        style={{ x, y }}
        animate={{ scale: [1, 1.04, 0.98, 1], rotate: [0, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />
      <motion.div
        className="gooey-shape gooey-shape--orbit"
        style={{ x: orbit1X, y: orbit1Y }}
        animate={{ scale: [0.9, 1.1, 0.95], rotate: 360 }}
        transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
      />
      <motion.div
        className="gooey-shape gooey-shape--orbit2"
        style={{ x: orbit2X, y: orbit2Y }}
        animate={{ scale: [1.1, 0.95, 1.08], rotate: -360 }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      />
    </div>
  );
}
