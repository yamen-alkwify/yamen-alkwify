import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SocialLinks from '../common/SocialLinks';
import BrandLockup from '../common/BrandLockup';
import { hashPath } from '../../utils/hashPath';

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
            <BrandLockup className="brand-lockup--footer" />
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
            <NavLink to={hashPath('about')} className="footer__link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={hashPath('services')} className="footer__link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to={hashPath('projects')} className="footer__link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to={hashPath('contact')} className="footer__link">
              Contact
            </NavLink>
          </li>
        </ul>

        <span className="footer__copy">
          &#169; All Rights Reserved By{' '}
          <a href="www.linkedin.com/in/yamen-alkuify-0128142bb" target="_blank" rel="noreferrer">
           Eng Yamen alkuify
          </a>
        </span> 
      </div>
    </motion.footer>
  );
}
