import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { PrimaryButton, GhostButton, TextButton } from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import FloatingBlob from '../common/FloatingBlob';
import HeroTitleAnimated from '../common/HeroTitleAnimated';
import { assetPath } from '../../utils/assetPath';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.01, ease: 'easeOut' } } };

export default function Hero({ typedText }) {
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, 0],
      transition: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
    },
  };

  const tags = ['Mobile apps devlopment', 'System Analysis', 'UI/UX', 'Web development', 'Project Management', 'Content creation'];

  return (
    <section className="home section hero" id="home">
      <div className="hero__bg" />
      <FloatingBlob className="blob blob--left" />
      <FloatingBlob className="blob blob--right" delay={1.3} />
      <div className="home__container container grid hero__grid">
        <motion.div className="hero__intro" variants={container} initial="hidden" animate="visible">
          <motion.p className="eyebrow" variants={fadeUp}>
            Based in Damascus, Syria
          </motion.p>
          <HeroTitleAnimated>
            Hi, I&apos;m Yamen Alkuify
          </HeroTitleAnimated>
          <motion.p className="hero__subtitle" id="text" variants={fadeUp}>
            {typedText}
            <span className="typing-caret">|</span>
          </motion.p>

          <motion.div className="hero__cta" variants={fadeUp}>
            <PrimaryButton href={assetPath('assets/img/cv/yamenCV.pdf')} target="_blank" rel="noreferrer">
              Download CV
            </PrimaryButton>
            <GhostButton as="a" href="/#projects">
              View Projects
            </GhostButton>
            <TextButton as={NavLink} to="/#contact" className="hero__text-link">
              Contact Me <i className="ri-arrow-right-up-line" />
            </TextButton>
          </motion.div>

          <SocialLinks
            links={[
              { href: 'https://www.instagram.com/eng_yamen_alkuify/', icon: 'ri-instagram-line', label: 'Instagram' },
              { href: 'https://www.linkedin.com/in/yamen-alkuify-0128142bb/', icon: 'ri-linkedin-box-line', label: 'LinkedIn' },
              { href: 'https://www.facebook.com/yamen.alkuify/', icon: 'ri-facebook-box-line', label: 'Facebook' },
              { href: 'https://gitlab.com/alyameen1354', icon: 'ri-github-line', label: 'GitLab' },
            ]}
            className="hero__socials"
          />
        </motion.div>

        <motion.div className="hero__visual" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.1 }}>
          <div className="hero__card">
            <div className="hero__image-wrap">
              <img src={assetPath('assets/img/about-perfill.png')} alt="Profile" className="home__img" />
              <div className="hero__glow" />
              <motion.div className="hero__shape hero__shape--1" variants={floatingVariants} animate="animate" />
              <motion.div className="hero__shape hero__shape--2" variants={floatingVariants} animate="animate" transition={{ delay: 1 }} />
            </div>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Available for freelance
            </div>
            <div className="hero__tags">
              {tags.map((tag) => (
                <motion.span key={tag} className="hero__tag" variants={floatingVariants} animate="animate" transition={{ delay: Math.random() * 2 }}>
                  {tag}
                </motion.span>
              ))}
            </div>
            <NavLink to="/#about" className="home__scroll hero__scroll">
              <div className="home__scroll-box">
                <i className="ri-arrow-down-s-line" />
              </div>
              <span className="home__scroll-text">Scroll to know more</span>
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
