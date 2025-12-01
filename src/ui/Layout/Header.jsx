import { motion } from 'framer-motion';
import NavLinkAnimated from '../common/NavLinkAnimated';

export default function Header({
  navLinks,
  activeSection,
  menuOpen,
  headerShadow,
  onOpenMenu,
  onCloseMenu,
  theme,
  onToggleTheme,
}) {
  const headerVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.header
      className={`header ${headerShadow ? 'shadow-header' : ''}`}
      id="header"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="nav container">
        <motion.a whileHover={{ y: -1 }} href="/#home" className="nav__logo" onClick={onCloseMenu}>
          <span className="nav__logo-circle">YK</span>
          <div className="nav__brand">
            <span className="nav__logo-name">Yamen Alkuify</span>
            <span className="nav__logo-role"> Software engineer</span>
          </div>
        </motion.a>

        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <span className="nav__title">Menu</span>
          <h3 className="nav__name">Yamen</h3>
          <ul className="nav__list">
            {navLinks.map(({ id, label, isButton }) => (
              <li className="nav__item" key={id}>
                <NavLinkAnimated to={`/#${id}`} isActive={activeSection === id} onClick={onCloseMenu} className={isButton ? 'nav__link-button' : ''}>
                  {label}
                </NavLinkAnimated>
              </li>
            ))}
          </ul>

          <div className="nav__close" id="nav-close" onClick={onCloseMenu} role="button" tabIndex={0}>
            <i className="ri-close-line" />
          </div>
        </div>

        <div className="nav__buttons">
          <i
            className={`${theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'} change-theme`}
            id="theme-button"
            onClick={onToggleTheme}
            role="button"
            tabIndex={0}
          />
          <div className="nav__toggle" id="nav-toggle" onClick={onOpenMenu} role="button" tabIndex={0}>
            <i className="ri-menu-4-line" />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}