import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { PrimaryButton, GhostButton, TextButton } from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import { assetPath } from '../../utils/assetPath';
import { hashPath } from '../../utils/hashPath';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const portraitPrimary = assetPath('assets/img/hero-yellow.jpg');
const portraitFallback = assetPath('assets/img/about-perfill.png');

export default function Hero({ typedText }) {
  const [portraitSrc, setPortraitSrc] = useState(portraitPrimary);

  return (
    <section className="home section hero" id="home">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__mesh" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="home__container container grid hero__grid">
        <motion.div className="hero__intro" variants={container} initial="hidden" animate="visible">
          <motion.div className="hero__meta" variants={fadeUp}>
            <span className="hero__pill hero__pill--status">
              <span className="hero__pill-dot" />
              Available for select freelance work
            </span>
            <span className="hero__pill hero__pill--ghost">
              <i className="ri-map-pin-2-line" />
              Damascus, Syria
            </span>
          </motion.div>

          <motion.p className="hero__kicker" variants={fadeUp}>
            Software engineer, systems analyst, and product-minded builder
          </motion.p>

          <motion.h1 className="hero__title" variants={fadeUp}>
            <span className="hero__title-line">Yamen</span>
            <span className="hero__title-line hero__title-line--offset">Alkuify</span>
          </motion.h1>

          <motion.div className="hero__dynamic-panel" variants={fadeUp}>
            <span className="hero__dynamic-label">CURRENT TRACK</span>
            <p className="hero__dynamic-text">
              {typedText}
              <span className="typing-caret" aria-hidden="true" />
            </p>
          </motion.div>

          <motion.p className="hero__lede" variants={fadeUp}>
            I build refined mobile and web products with clear architecture, confident execution, and interfaces that feel
            calm, premium, and intentional.
          </motion.p>

          <motion.div className="hero__cta" variants={fadeUp}>
            <PrimaryButton href={assetPath('assets/img/cv/yamenCV.pdf')} target="_blank" rel="noreferrer">
              Download CV
              <i className="ri-download-line" />
            </PrimaryButton>
            <GhostButton as="a" href={hashPath('projects')}>
              Explore Projects
              <i className="ri-arrow-right-up-line" />
            </GhostButton>
            <TextButton as={NavLink} to={hashPath('contact')} className="hero__text-link">
              Start a conversation
              <i className="ri-arrow-right-up-line" />
            </TextButton>
          </motion.div>

          <motion.div className="hero__social-row" variants={fadeUp}>
            <SocialLinks
              links={[
                { href: 'https://www.instagram.com/eng_yamen_alkwify/', icon: 'ri-instagram-line', label: 'Instagram' },
                { href: 'https://www.linkedin.com/in/yamen-alkuify-0128142bb/', icon: 'ri-linkedin-box-line', label: 'LinkedIn' },
                { href: 'https://www.facebook.com/yamen.alkuify/', icon: 'ri-facebook-box-line', label: 'Facebook' },
                { href: 'https://gitlab.com/alyameen1354', icon: 'ri-github-line', label: 'GitLab' },
              ]}
              className="hero__socials"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.96, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
        >
          <div className="hero__stage">
            <div className="hero__stage-glow" aria-hidden="true" />

            <div className="hero__frame hero__frame--clean">
              <div className="hero__portrait-shell hero__portrait-shell--large">
                <div className="hero__portrait-overlay" aria-hidden="true" />
                <img
                  src={portraitSrc}
                  alt="Yamen Alkuify portrait"
                  className="hero__portrait hero__portrait--warm"
                  onError={() => {
                    if (portraitSrc !== portraitFallback) {
                      setPortraitSrc(portraitFallback);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-wrap"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <NavLink to={hashPath('about')} className="hero__scroll">
          <span className="hero__scroll-text">Scroll for the full profile</span>
          <span className="hero__scroll-box">
            <i className="ri-arrow-down-line" />
          </span>
        </NavLink>
      </motion.div>
    </section>
  );
}
