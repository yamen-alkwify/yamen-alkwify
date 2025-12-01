import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

export default function AnimatedSection({ children, className = '', as: Component = 'section', ...rest }) {
  return (
    <motion.section
      as={Component}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
