import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SocialLinks from '../common/SocialLinks';

export default function Footer() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.footer className="footer" variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <div className="footer__container container grid footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="nav__logo-circle footer__logo-circle">YK</span>
            <div>
              <p className="footer__logo-name">Yamen Alkuify</p>
              <p className="footer__tagline">Frontend Engineer</p>
            </div>
          </div>
          <p className="footer__note">Designing seamless experiences with clean code and thoughtful interfaces.</p>
          <SocialLinks
            className="footer__socials"
            links={[
              { href: 'https://www.linkedin.com/in/yamen-alkuify-0128142bb/', icon: 'ri-linkedin-line', label: 'LinkedIn' },
              { href: 'https://gitlab.com/alyameen1354', icon: 'ri-github-line', label: 'GitLab' },
              { href: 'https://www.instagram.com/eng_yamen_alkuify/', icon: 'ri-instagram-line', label: 'Instagram' },
            ]}
          />
        </div>

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
          <li>
            <NavLink to="/#contact" className="footer__link">
              Contact
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
    </motion.footer>
  );
}
