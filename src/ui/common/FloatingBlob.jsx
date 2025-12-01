import { motion } from 'framer-motion';

export default function FloatingBlob({ className = '', delay = 0 }) {
  return (
    <motion.div
      className={`floating-blob ${className}`.trim()}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.55, scale: 1, y: [0, -12, 0] }}
      transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity, delay }}
    />
  );
}
