import { useState } from 'react';

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openDetails = (project) => {
    setSelectedProject(project);
    if (project.video) {
      setSelectedMedia('video');
    } else {
      const firstImage = project.gallery?.[0] || project.image;
      setSelectedMedia(firstImage);
    }
  };

  const closeDetails = () => {
    setSelectedProject(null);
    setSelectedMedia(null);
  };

  const handleSelectMedia = (media) => setSelectedMedia(media);

  return (
    <section className="projects section" id="projects">
      <div className="projects__header container">
        <div>
          {/* <p className="projects__eyebrow">immersive builds</p> */}
          <h2 className="section__title-1">
            <span>Projects.</span>
          </h2>
        </div>
        {/* <p className="projects__lede">
          قسم المشاريع رجّعناه من الصفر كأنه بوابة فضائية: بطاقات زجاجية هادئة، حركة مدروسة، وضو خفيف يخلي كل مشروع يلمع
          بدون ما يوجع العين.
        </p> */}
      </div>

      <div className="projects__atmosphere" aria-hidden="true">
        <span className="projects__ring projects__ring--left" />
        <span className="projects__ring projects__ring--right" />
        <span className="projects__grid" />
      </div>

      <div className="projects__container container">
        {projects.map((project, index) => {
          const downloadIcons = ['ri-google-play-line', 'ri-apple-fill'];
          const websiteIcons = ['ri-globe-line', 'ri-bank-line', 'ri-code-box-line'];
          const downloadLinks = project.links.filter((link) => downloadIcons.includes(link.icon));
          const websiteLinks = project.links.filter((link) => !downloadIcons.includes(link.icon) && websiteIcons.includes(link.icon));
          const seen = new Set();
          const ordered = [];
          const pushLinks = (list) =>
            list.forEach((link) => {
              if (!seen.has(link.href)) {
                ordered.push(link);
                seen.add(link.href);
              }
            });
          if (downloadLinks.length) {
            pushLinks(downloadLinks);
            pushLinks(project.links.filter((link) => !downloadIcons.includes(link.icon)));
          } else if (websiteLinks.length) {
            pushLinks(websiteLinks);
            pushLinks(project.links.filter((link) => !websiteLinks.includes(link)));
          } else {
            pushLinks(project.links);
          }
          const orderedLinks = ordered;

          return (
          <article
            className="projects__card"
            key={project.title}
            onClick={(e) => {
              if (e.target.closest('a')) return;
              openDetails(project);
            }}
          >
            <span className="projects__halo" aria-hidden="true" />

            <div className="projects__image">
              <img src={project.image} alt={project.title} className="projects__img" />
              <span className="projects__pill">{project.subtitle}</span>
              {project.buttonOverlay && (
                <a href={project.buttonOverlay.href} className="projects__button" target="_blank" rel="noreferrer">
                  <i className={project.buttonOverlay.icon} />
                </a>
              )}
            </div>

            <div className="projects__content">
              <div className="projects__tap-hint">
                <i className="ri-hand-pointer-line" />
                اضغط لعرض التفاصيل
              </div>

              <div className="projects__meta">
                <span className="projects__index">#{String(index + 1).padStart(2, '0')}</span>
                <span className="projects__subtitle">{project.subtitle}</span>
              </div>

              <h3 className="projects__title">{project.title}</h3>
              <div className="projects__description">
                {typeof project.description === 'string' ? <p>{project.description}</p> : project.description}
              </div>

              {(project.tags || project.secondaryTags) && (
                <div className="projects__tags">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="projects__tag">
                      {tag}
                    </span>
                  ))}
                  {project.secondaryTags?.map((tag) => (
                    <span key={tag} className="projects__tag projects__tag--muted">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="projects__buttons">
                {(orderedLinks || project.links).map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="projects__link">
                    <i className={link.icon} />
                    {link.label}
                  </a>
                ))}
              </div>

              {project.note && <p className="projects__note">{project.note}</p>}
            </div>
          </article>
          );
        })}
      </div>

      {selectedProject && (
        <div className="project-modal" role="dialog" aria-modal="true">
          <div className="project-modal__backdrop" onClick={closeDetails} />
          <div className="project-modal__dialog">
            <button type="button" className="project-modal__close" onClick={closeDetails}>
              <i className="ri-close-line" />
            </button>
            <div className="project-modal__body">
              <div className="project-modal__media">
                {selectedProject.video && selectedMedia === 'video' ? (
                  <video className="project-modal__video" src={selectedProject.video} controls autoPlay playsInline />
                ) : (
                  <img src={selectedMedia || selectedProject.image} alt={selectedProject.title} />
                )}
              </div>

              <div className="project-modal__info">
                <p className="project-modal__subtitle">{selectedProject.subtitle}</p>
                <h3 className="project-modal__title">{selectedProject.title}</h3>
                <div className="project-modal__description">
                  {typeof selectedProject.description === 'string' ? <p>{selectedProject.description}</p> : selectedProject.description}
                </div>
                {(selectedProject.tags || selectedProject.secondaryTags) && (
                  <div className="project-modal__tags">
                    {selectedProject.tags?.map((tag) => (
                      <span key={tag} className="projects__tag">
                        {tag}
                      </span>
                    ))}
                    {selectedProject.secondaryTags?.map((tag) => (
                      <span key={tag} className="projects__tag projects__tag--muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="project-modal__links">
                  {(selectedProject.links || []).map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="projects__link">
                      <i className={link.icon} />
                      {link.label}
                    </a>
                  ))}
                </div>
                {(selectedProject.gallery || selectedProject.video) && (
                  <div className="project-modal__thumbs">
                    {selectedProject.video && (
                      <button
                        type="button"
                        className={`project-modal__thumb project-modal__thumb--video ${selectedMedia === 'video' ? 'project-modal__thumb--active' : ''}`}
                        onClick={() => handleSelectMedia('video')}
                      >
                        <i className="ri-play-circle-line" />
                        <span>فيديو</span>
                      </button>
                    )}
                    {selectedProject.gallery?.map((media) => (
                      <button
                        key={media}
                        type="button"
                        className={`project-modal__thumb ${selectedMedia === media ? 'project-modal__thumb--active' : ''}`}
                        onClick={() => handleSelectMedia(media)}
                      >
                        <img src={media} alt={`${selectedProject.title} preview`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
