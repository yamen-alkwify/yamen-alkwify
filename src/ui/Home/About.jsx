import { NavLink } from 'react-router-dom';
import { PrimaryButton, GhostButton } from '../common/Button';
import { assetPath } from '../../utils/assetPath';
import { hashPath } from '../../utils/hashPath';

const signals = ['Tech Lead', 'System Analyst', 'Project Advisory', 'Flutter + Swift Native'];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <div className="about__media">
          <div className="about__image">
            <img src={assetPath('assets/img/home-perfill.png')} alt="Yamen Alkuify portrait" className="about__img" />

            <div className="about__plaque">
              <span className="about__plaque-label">Primary Positioning</span>
              <strong>Tech Lead + System Analyst</strong>
            </div>
          </div>
        </div>

        <div className="about__info">
          <p className="about__eyebrow">Executive Overview</p>

          <h2 className="about__title">
            Technical leadership,
            <span className="about__title-accent"> systems analysis,</span>
            and refined project advisory.
          </h2>

          <p className="about__description">
            I work primarily as a <strong>Tech Lead</strong> and <strong>System Analyst</strong>, helping organizations define
            technical direction, structure delivery, and turn business needs into execution-ready systems.
          </p>

          <p className="about__description about__description--secondary">
            I also consult on <strong>projects</strong>, <strong>software products</strong>, and
            <strong> technical systems</strong>, with a strong focus on project management, governance, and clear technical
            decision-making, while still delivering mobile products with <strong>Flutter</strong> and
            <strong> Swift Native</strong> when needed.
          </p>

          <div className="about__signals">
            {signals.map((signal) => (
              <span className="about__signal" key={signal}>
                {signal}
              </span>
            ))}
          </div>

          <div className="about__buttons">
            <PrimaryButton as={NavLink} to={hashPath('contact')}>
              Discuss Advisory Work
              <i className="ri-arrow-right-up-line" />
            </PrimaryButton>
            <GhostButton
              href="https://www.linkedin.com/in/yamen-alkuify-0128142bb/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <i className="ri-linkedin-box-line" />
            </GhostButton>
          </div>
        </div>
      </div>
    </section>
  );
}
