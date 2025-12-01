import AnimatedSection from '../common/AnimatedSection';

export default function Experience({ experiences }) {
  return (
    <AnimatedSection className="experience section" id="experience">
      <div className="experience__header container">
        <p className="eyebrow">Track record</p>
        <h2 className="section__title-1">
          <span>Experience.</span>
        </h2>
        <p className="experience__lead">
          Product thinking, architecture, and UI craft come together here. Highlights from roles where delivery velocity,
          resilience, and design quality mattered the most.
        </p>
      </div>

      <div className="experience__list container">
        {experiences.map((item) => (
          <article className="experience__card" key={`${item.company}-${item.role}`}>
            <div className="experience__rail" aria-hidden />
            <div className="experience__top">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="experience__logo-link">
                  <div className="experience__logo" style={{ background: item.accent }}>
                    {item.logo ? (
                      <img src={item.logo} alt={`${item.company} logo`} />
                    ) : (
                      <span>{item.company.slice(0, 2).toUpperCase()}</span>
                    )}
                  </div>
                </a>
              ) : (
                <div className="experience__logo" style={{ background: item.accent }}>
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.company} logo`} />
                  ) : (
                    <span>{item.company.slice(0, 2).toUpperCase()}</span>
                  )}
                </div>
              )}
              <div className="experience__meta">
                <span className="experience__period">{item.period}</span>
                <span className="experience__location">{item.location}</span>
              </div>
              {item.href && (
                <a className="experience__visit" href={item.href} target="_blank" rel="noreferrer">
                  <i className="ri-external-link-line" />
                  <span>Visit</span>
                </a>
              )}
            </div>

            <div className="experience__title">
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </div>

            <p className="experience__summary">{item.summary}</p>

            <ul className="experience__highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>
                  <i className="ri-flashlight-line" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="experience__footer">
              <div className="experience__tags">
                {item.stack.map((tech) => (
                  <span className="experience__tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
