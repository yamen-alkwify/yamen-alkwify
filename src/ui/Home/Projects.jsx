export default function Projects({ projects }) {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">
        <span>Projects.</span>
      </h2>

      <div className="projects__container container grid">
        {projects.map((project) => (
          <article className="projects__card" key={project.title}>
            <div className="projects__image" style={{ position: 'relative' }}>
              <img src={project.image} alt={project.title} className="projects__img" />
              {project.buttonOverlay && (
                <a
                  href={project.buttonOverlay.href}
                  className="projects__button button"
                  style={{ position: 'absolute', top: '155px', right: '10px', transform: 'scale(1.3)' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={project.buttonOverlay.icon} />
                </a>
              )}
            </div>

            <div className="projects__content">
              <h3 className="projects__subtitle">{project.subtitle}</h3>
              <h2 className="projects__title">{project.title}</h2>
              <div className="projects__description">
                {typeof project.description === 'string' ? <p>{project.description}</p> : project.description}
              </div>
            </div>

            <div className="projects__buttons">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="projects__link">
                  <i className={link.icon} />
                  {link.label}
                </a>
              ))}
            </div>

            {project.tags && (
              <p style={{ paddingTop: '10px', fontSize: '14px' }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{ color: 'hsla(212, 89%, 61%, 0.687)', marginRight: '6px' }}>
                    {tag}
                  </span>
                ))}
              </p>
            )}
            {project.secondaryTags && (
              <p style={{ color: 'hsla(0, 0%, 49%, 0.687)' }}>
                {project.secondaryTags.map((tag) => (
                  <span key={tag} style={{ marginRight: '10px' }}>
                    {tag}
                  </span>
                ))}
              </p>
            )}
            {project.note && (
              <p style={{ color: 'hsla(0, 0%, 49%, 0.687)', fontSize: '12px', paddingTop: '10px' }}>{project.note}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
