import { NavLink } from 'react-router-dom';

export default function Hero({ typedText }) {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <h1 className="home__name">
          Hi I&apos;m <span style={{ color: 'hsla(212, 89%, 61%, 0.687)' }}>Yamen</span>
        </h1>

        <div className="home__perfil">
          <img src="/assets/img/home-perfill.png" alt="Profile" className="home__img" />
          <div className="home__shadow" />
          <img src="/assets/img/curved-arrow.svg" alt="arrow" className="home__arrow" />
          <img src="/assets/img/random-lines.svg" alt="lines" className="home__line" />
          <div className="geometric-box" />

          <div className="home__social">
            <a href="https://www.instagram.com/eng_yamen_alkuify/" target="_blank" rel="noreferrer" className="home__social-link">
              <i className="ri-instagram-line" />
            </a>
            <a href="https://www.linkedin.com/in/yamen-alkuify-0128142bb/" target="_blank" rel="noreferrer" className="home__social-link">
              <i className="ri-linkedin-box-line" />
            </a>
            <a href="https://www.facebook.com/yamen.alkuify/" target="_blank" rel="noreferrer" className="home__social-link">
              <i className="ri-facebook-box-line" />
            </a>
            <a href="https://gitlab.com/alyameen1354" target="_blank" rel="noreferrer" className="home__social-link">
              <i className="ri-github-line" />
            </a>
          </div>
        </div>

        <div className="home__info">
          <p className="home__description" id="text">
            {typedText}
            <span className="typing-caret">|</span>
          </p>
          <div style={{ textAlign: 'center' }}>
            <a href="/assets/img/cv/yamenCV.pdf" className="download-button" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>

          <NavLink to="/#about" className="home__scroll">
            <div className="home__scroll-box">
              <i className="ri-arrow-down-s-line" />
            </div>
            <span className="home__scroll-text">
              <span style={{ color: 'hsla(212, 89%, 61%, 0.687)' }}>welcome to my portfolio</span> <br /> Scroll Down
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
