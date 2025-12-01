import { motion } from 'framer-motion';

const baseMotionProps = {
  whileHover: { y: -1, scale: 1.01 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 320, damping: 20 },
};

function ButtonBase({ as = 'a', className = '', children, ...rest }) {
  const MotionComponent = typeof as === 'string' ? motion[as] || motion.a : motion(as);
  return (
    <MotionComponent className={`btn ${className}`.trim()} {...baseMotionProps} {...rest}>
      {children}
    </MotionComponent>
  );
}

export function PrimaryButton({ children, className = '', ...props }) {
  return (
    <ButtonBase className={`btn--primary ${className}`} {...props}>
      {children}
    </ButtonBase>
  );
}

export function GhostButton({ children, className = '', ...props }) {
  return (
    <ButtonBase className={`btn--ghost ${className}`} {...props}>
      {children}
    </ButtonBase>
  );
}
 
export function TextButton({ children, className = '', ...props }) {
  return (
    <ButtonBase className={`btn--text ${className}`} {...props}>
      {children}
    </ButtonBase>
  );
}
