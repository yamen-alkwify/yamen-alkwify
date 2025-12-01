// import { useEffect, useMemo, useState } from 'react';
// import { motion, useMotionValue, useSpring } from 'framer-motion';

// const palettes = {
//   default: { ring: 'rgba(164, 105, 241, 0.35)', glow: 'rgba(255,255,255,0.12)', dot: 'rgba(255,255,255,0.6)' },
//   accent: { ring: 'rgba(164, 105, 241, 0.35)', glow: 'rgba(255,255,255,0.18)', dot: 'rgba(255,255,255,0.7)' },
//   magnet: { ring: 'rgba(164, 105, 241, 0.35)', glow: 'rgba(255,255,255,0.2)', dot: 'rgba(255,255,255,0.75)' },
// };

// export default function AnimatedCursor() {
//   const [mode, setMode] = useState('default');
//   const [pulse, setPulse] = useState(0);
//   const targetX = useMotionValue(-10);
//   const targetY = useMotionValue(-10);
//   const baseScale = useMotionValue(1);

//   const x = useSpring(targetX, { stiffness: 340, damping: 28, mass: 0.25 });
//   const y = useSpring(targetY, { stiffness: 340, damping: 28, mass: 0.25 });
//   const scale = useSpring(baseScale, { stiffness: 260, damping: 18, mass: 0.3 });

//   const activePalette = useMemo(() => palettes[mode] || palettes.default, [mode]);

//   useEffect(() => {
//     const handleMove = (event) => {
//       targetX.set(event.clientX);
//       targetY.set(event.clientY);
//     };

//     const handleEnter = (event) => {
//       const target = event.target.closest('[data-cursor]');
//       if (!target) return;
//       const nextMode = target.getAttribute('data-cursor') || 'default';
//       setMode(nextMode);
//       baseScale.set(nextMode === 'magnet' ? 1.8 : nextMode === 'accent' ? 1.4 : 1.1);
//     };

//     const handleLeave = () => {
//       setMode('default');
//       baseScale.set(1);
//     };

//     const handleDown = () => {
//       setPulse((prev) => prev + 1);
//       baseScale.set((current) => (typeof current === 'number' ? current * 0.9 : 0.9));
//     };

//     window.addEventListener('mousemove', handleMove);
//     window.addEventListener('mouseover', handleEnter);
//     window.addEventListener('mouseout', handleLeave);
//     window.addEventListener('mousedown', handleDown);

//     return () => {
//       window.removeEventListener('mousemove', handleMove);
//       window.removeEventListener('mouseover', handleEnter);
//       window.removeEventListener('mouseout', handleLeave);
//       window.removeEventListener('mousedown', handleDown);
//     };
//   }, [baseScale, targetX, targetY]);

//   return (
//     <>
//       <motion.div
//         className="cursor-ring"
//         style={{
//           translateX: x,
//           translateY: y,
//           scale,
//           borderColor: activePalette.ring,
//           boxShadow: `0 0 32px ${activePalette.glow}`,
//         }}
//       />
//       <motion.div
//         key={pulse}
//         className="cursor-pulse"
//         initial={{ scale: 0, opacity: 0.5 }}
//         animate={{ scale: 3, opacity: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         style={{ translateX: x, translateY: y, background: activePalette.glow }}
//       />
//       <motion.div
//         className="cursor-dot"
//         style={{
//           translateX: x,
//           translateY: y,
//           background: `radial-gradient(circle, ${activePalette.dot} 0%, ${activePalette.dot} 35%, transparent 70%)`,
//           boxShadow: `0 0 12px ${activePalette.ring}`,
//         }}
//       />
//     </>
//   );
// }
