import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const underline = {
  rest: { width: 0, opacity: 0 },
  hover: { width: '100%', opacity: 1, transition: { duration: 0.2 } },
};

export default function NavLinkAnimated({ to, children, isActive, onClick, className = '' }) {
  return (
    <motion.div className="navlink-animated" whileHover="hover" initial="rest" animate="rest">
      <NavLink to={to} className={`nav__link ${isActive ? 'active-link' : ''} ${className}`} onClick={onClick}>
        {children}
        <motion.span className="navlink-underline" variants={underline} />
        {isActive ? <motion.span layoutId="nav-active-pill" className="navlink-pill" /> : null}
      </NavLink>
    </motion.div>
  );
}
