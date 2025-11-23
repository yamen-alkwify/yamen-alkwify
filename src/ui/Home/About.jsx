import { NavLink } from 'react-router-dom';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1">
          <span> Overview .</span>
        </h2>

        <div className="about__perfil">
          <div className="about__image">
            <img src="/assets/img/about-perfill.jpeg" alt="About" className="about__img" />
            <div className="about__shadow" />
            <div className="geometric-box" />
            <img src="/assets/img/random-lines.svg" alt="lines" className="about__line" />
            <div className="about__box" />
          </div>
        </div>

        <div className="about__info">
          <p className="about__description">
            <b>Yamen Alkuify</b>, from the countryside of Damascus, Information technology engineer, specializing in artificial
            intelligence, Fronend Developer with 3 years of work experience using various techniques such as Flutter , Dart,
            React, Vue js, HTML, CSS . . .
          </p>

          <ul className="about__list">
            <li className="about__item">
              <b>
                <i className="ri-arrow-right-s-line" style={{ color: 'hsla(212, 89%, 61%, 0.687)' }} />
                {' '}
                Birthday:
              </b>
              {' '}
              4 April 2000
            </li>
            <li className="about__item">
              <b>
                <i className="ri-arrow-right-s-line" style={{ color: 'hsla(212, 89%, 61%, 0.687)' }} />
                {' '}
                Phone:
              </b>
              +963 992 373 318
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
            <a href="https://www.linkedin.com/in/abdullah-al-joujou-a24962185/" target="_blank" rel="noreferrer" className="button__ghost">
              <i className="ri-linkedin-box-line" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
