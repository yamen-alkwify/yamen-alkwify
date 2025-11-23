import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <ul className="footer__links">
          <li>
            <NavLink to="/#about" className="footer__link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/#services" className="footer__link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/#projects" className="footer__link">
              Projects
            </NavLink>
          </li>
        </ul>

        <span className="footer__copy">
          &#169; All Rights Reserved By{' '}
          <a href="https://github.com/AbdullahAljojo" target="_blank" rel="noreferrer">
            Abdullah Al Joujou
          </a>
        </span>
      </div>
    </footer>
  );
}
