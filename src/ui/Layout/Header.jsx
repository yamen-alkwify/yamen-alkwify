import { NavLink } from 'react-router-dom';

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
  return (
    <header className={`header ${headerShadow ? 'shadow-header' : ''}`} id="header">
      <nav className="nav container">
        <NavLink to="/#home" className="nav__logo" onClick={onCloseMenu}>
          <span className="nav__logo-circle">YK</span>
          <span className="nav__logo-name">Yamen Alkuify</span>
        </NavLink>

        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <span className="nav__title">Menu</span>
          <h3 className="nav__name">Yamen</h3>
          <ul className="nav__list">
            {navLinks.map(({ id, label, isButton }) => (
              <li className="nav__item" key={id}>
                <NavLink
                  to={`/#${id}`}
                  className={`nav__link ${activeSection === id ? 'active-link' : ''} ${isButton ? 'nav__link-button' : ''}`}
                  onClick={onCloseMenu}
                >
                  {label}
                </NavLink>
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
    </header>
  );
}
