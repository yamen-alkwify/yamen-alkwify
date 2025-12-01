import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.08 } },
};

const item = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };

export default function SocialLinks({ links = [], className = '' }) {
  return (
    <motion.div className={`social-links ${className}`.trim()} variants={variants} initial="hidden" animate="visible">
      {links.map(({ href, icon, label }) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="social-links__item"
          variants={item}
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <i className={icon} aria-hidden />
          <span className="sr-only">{label}</span>
        </motion.a>
      ))}
    </motion.div>
  );
}
