import { projectPortfolio } from './projectPortfolio';

function ProjectPlatformIcon({ kind }) {
  switch (kind) {
    case 'google-play':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#00D071" d="M3.7 2.8 13.9 13 3.7 21.2a2 2 0 0 1-.7-1.6V4.4c0-.6.3-1.2.7-1.6Z" />
          <path fill="#00A1FF" d="m16.8 10.2-2.9 2.8L3.7 2.8c.2-.2.4-.3.7-.4l12.4 7.8Z" />
          <path fill="#FFB300" d="m16.8 13.8-12.4 7.8c-.3-.1-.5-.2-.7-.4L13.9 13l2.9.8Z" />
          <path fill="#FF4D5A" d="M21 12c0 .5-.3.9-.8 1.2l-3.4 2.1-2.9-2.3 2.9-2.8 3.4 2.1c.5.3.8.7.8 1.2Z" />
        </svg>
      );
    case 'app-store':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.8 4.5c-1 .1-2.1.7-2.8 1.5-.6.7-1.1 1.8-.9 2.8 1.1.1 2.2-.5 2.9-1.3.7-.8 1.1-1.8.8-3Zm1.8 7.4c-.1-2-1.7-3-1.8-3.1-1-.6-2-.7-2.6-.7-1.1 0-2.1.6-2.7.6-.6 0-1.5-.6-2.5-.6-1.3 0-2.5.7-3.2 1.8-1.4 2.1-.4 5.2 1 7.2.7 1 1.5 2.1 2.6 2.1s1.5-.6 2.8-.6 1.7.6 2.8.6 1.9-1 2.6-2c.8-1.2 1.2-2.3 1.2-2.4-.1 0-2.2-.9-2.2-2.9Z"
          />
        </svg>
      );
    case 'website':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm6.7 8h-3.1a14.8 14.8 0 0 0-1.3-5A7.1 7.1 0 0 1 18.7 11ZM12 5.1c.8 1 1.8 3 2.2 5H9.8c.4-2 1.4-4 2.2-5ZM5.3 13h3.1c.2 1.8.7 3.6 1.4 5a7.1 7.1 0 0 1-4.5-5Zm3.1-2H5.3a7.1 7.1 0 0 1 4.5-5c-.7 1.4-1.2 3.2-1.4 5Zm1.4 2h4.4c-.4 2-1.4 4-2.2 5-.8-1-1.8-3-2.2-5Zm5.8 0h3.1a7.1 7.1 0 0 1-4.5 5c.7-1.4 1.2-3.2 1.4-5Z"
          />
        </svg>
      );
    case 'github':
      return <i className="ri-github-fill" aria-hidden="true" />;
    case 'private':
      return <i className="ri-lock-2-fill" aria-hidden="true" />;
    default:
      return <i className="ri-arrow-right-up-line" aria-hidden="true" />;
  }
}

function ProjectAction({ link }) {
  const isDisabled = !link.href;

  if (isDisabled) {
    return (
      <span className={`project-action project-action--${link.kind}`}>
        <span className="project-action__icon">
          <ProjectPlatformIcon kind={link.kind} />
        </span>
        <span className="project-action__label">{link.label}</span>
      </span>
    );
  }

  return (
    <a href={link.href} target="_blank" rel="noreferrer" className={`project-action project-action--${link.kind}`}>
      <span className="project-action__icon">
        <ProjectPlatformIcon kind={link.kind} />
      </span>
      <span className="project-action__label">{link.label}</span>
    </a>
  );
}

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="projects__showcase container">
        <div className="projects__header">
          <div className="projects__heading">
            <p className="projects__eyebrow">Selected Product Work</p>
            <h2 className="section__title-1">
              <span>Projects.</span>
            </h2>
          </div>

          <p className="projects__lede">
            Public launches, private systems, and delivery work presented in a cleaner product view with full technical
            context.
          </p>
        </div>

        <div className="projects__list">
          {projectPortfolio.map((project, index) => (
            <article className="projects__feature" style={{ '--project-accent': project.accent }} key={project.id}>
              <div className="projects__feature-visual">
                <div className="projects__feature-stage">
                  <div className="projects__feature-badges">
                    <span className="projects__feature-badge">#{String(index + 1).padStart(2, '0')}</span>
                    <span className="projects__feature-badge">{project.status}</span>
                    <span className="projects__feature-badge projects__feature-badge--ghost">{project.period}</span>
                  </div>

                  {project.image ? (
                    <img src={project.image} alt={project.title} className="projects__feature-image" />
                  ) : (
                    <div className="projects__feature-placeholder">
                      <span className="projects__feature-monogram">{project.placeholderMonogram}</span>
                      <p className="projects__feature-placeholder-label">{project.placeholderLabel}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="projects__feature-copy">
                <div className="projects__feature-shell">
                  <div className="projects__feature-topline">
                    <span className="projects__feature-subtitle">{project.subtitle}</span>
                    <span className="projects__feature-role">{project.role}</span>
                  </div>

                  <h3 className="projects__feature-title">{project.title}</h3>

                  <div className="projects__feature-meta">
                    <span>{project.company}</span>
                    <span>{project.role}</span>
                    <span>{project.period}</span>
                  </div>

                  <p className="projects__feature-summary">{project.summary}</p>

                  <div className="projects__feature-grid">
                    <div className="projects__feature-panel">
                      <p className="projects__feature-label">What Shipped</p>
                      <ul className="projects__feature-list">
                        {project.delivery.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="projects__feature-panel">
                      <p className="projects__feature-label">Senior Layer</p>
                      <ul className="projects__feature-list">
                        {project.seniorLayer.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="projects__feature-stack">
                    {project.stack.map((item) => (
                      <span className="projects__feature-chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="projects__feature-actions">
                    {project.links.map((link) => (
                      <ProjectAction key={`${project.id}-${link.label}`} link={link} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
