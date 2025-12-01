import { motion } from 'framer-motion';

const wordVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.05, duration: 0, ease: 'easeOut' },
  }),
};

export default function HeroTitleAnimated({ children }) {
  const words = String(children).split(' ');
  return (
    <h1 className="hero__title">
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="hero__title-word"
          custom={index}
          variants={wordVariants}
          initial="hidden"
          animate="visible"

        >
          {word}
          {index < words.length - 2 ? ' ' : ''}
        </motion.span>
      ))}
    </h1>
  );
}
