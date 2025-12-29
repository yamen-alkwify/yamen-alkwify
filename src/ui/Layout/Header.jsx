import { useEffect } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';
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
  const isDesktop = useMediaQuery('(min-width: 1150px)');

  const headerVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  useEffect(() => {
    if (isDesktop && menuOpen) {
      onCloseMenu();
    }
  }, [isDesktop, menuOpen, onCloseMenu]);

  const handleToggleMenu = () => {
    if (menuOpen) {
      onCloseMenu();
    } else {
      onOpenMenu();
    }
  };

  const handleCloseMenuKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onCloseMenu();
    }
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

        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu" aria-hidden={isDesktop ? false : !menuOpen}>
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

          <div
            className="nav__close"
            id="nav-close"
            onClick={onCloseMenu}
            role="button"
            tabIndex={0}
            onKeyDown={handleCloseMenuKeyDown}
            aria-label="Close navigation menu"
          >
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
          {!isDesktop && (
            <button
              type="button"
              className="nav__toggle"
              id="nav-toggle"
              onClick={handleToggleMenu}
              aria-label={`${menuOpen ? 'Close' : 'Open'} navigation menu`}
              aria-expanded={menuOpen}
              aria-controls="nav-menu"
            >
              <i className={menuOpen ? 'ri-close-line' : 'ri-menu-4-line'} />
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
