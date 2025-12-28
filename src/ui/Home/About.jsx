import { NavLink } from 'react-router-dom';
import { assetPath } from '../../utils/assetPath';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1">
          <span> Overview .</span>
        </h2>

        <div className="about__perfil">
          <div className="about__image">
            <img src={assetPath('assets/img/home-perfill.png')} alt="About" className="about__img" />
            <div className="about__shadow" />
            <div className="geometric-box" />
            <img src={assetPath('assets/img/random-lines.svg')} alt="lines" className="about__line" />
            <div className="about__box" />
          </div>
        </div>

        <div className="about__info">
          <p className="about__description">
            <b>Yamen Alkuify</b>,  Information technology engineer, specializing in Software
            Engineering, System analyst and Mobile Apps developer with 5 years of work experience using various techniques such as Flutter , Dart,
            React, C++, HTML, CSS . . .
          </p>

          <ul className="about__list">
            <li className="about__item">
              <b>
                <i className="ri-arrow-right-s-line" style={{ color: 'hsla(212, 89%, 61%, 0.687)' }} />
                {' '}
                Birthday:
              </b>
              {' '}
              10 April 2001
            </li>
            <li className="about__item">
              <b>
                <i className="ri-arrow-right-s-line" style={{ color: 'hsla(212, 89%, 61%, 0.687)' }} />
                {' '}
                Phone:
              </b>
              +963 983 089 150
            </li>
          </ul>

          <ul className="about__list">
            <li className="about__item">
              <b>
                <i className="ri-arrow-right-s-line" style={{ color: 'hsla(212, 89%, 61%, 0.687)' }} />
                {' '}
                City:
              </b>
              Damascus, Syria
            </li>
            <li className="about__item">
              <b>
                <i className="ri-arrow-right-s-line" style={{ color: 'hsla(212, 89%, 61%, 0.687)' }} />
                {' '}
                Freelance:
              </b>
              Available
            </li>
          </ul>

          <div className="about__buttons">
            <NavLink to="/#contact" className="button">
              <i className="ri-send-plane-line"> Contact Me</i>
            </NavLink>
            <a href="https://www.linkedin.com/in/yamen-alkuify-0128142bb/" target="_blank" rel="noreferrer" className="button__ghost">
              <i className="ri-linkedin-box-line" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
