import { useMemo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';

function cleanText(value) {
  return String(value ?? '')
    .replace(/\u00c2\u00b7/g, ' - ')
    .replace(/\u2022\s*/g, '')
    .replace(/\u00e2\u20ac\u00a2\s*/g, '')
    .replace(/\u00e2\u20ac\u201d/g, ' - ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getInitials(value) {
  return cleanText(value)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function normalizeExperience(item) {
  const summary = cleanText(item.summary);

  return {
    ...item,
    company: cleanText(item.company),
    role: cleanText(item.role),
    period: cleanText(item.period),
    location: cleanText(item.location),
    summary,
    impact: cleanText(item.impact || summary),
    highlights: (item.highlights || []).map(cleanText).filter(Boolean),
    stack: (item.stack || []).map(cleanText).filter(Boolean),
  };
}

export default function Experience({ experiences = [] }) {
  const items = useMemo(() => experiences.map(normalizeExperience), [experiences]);

  return (
    <AnimatedSection className="experience section" id="experience">
      <div className="experience__header container">
        <p className="experience__eyebrow">Executive Track Record</p>
        <h2 className="section__title-1">
          <span>Experience.</span>
        </h2>
        <p className="experience__lead">
          Every role is expanded with the full summary, details, impact, and scope.
        </p>
      </div>

      <div className="experience__layout experience__layout--stacked container">
        <div className="experience__timeline" aria-label="Full experience timeline">
          {items.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}-${item.period}`}
              className="experience-detail experience-detail--timeline"
              style={{ '--experience-accent': item.accent }}
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: Math.min(index * 0.05, 0.2) }}
            >
              <span className="experience-detail__timeline-marker" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="experience-detail__glow" aria-hidden="true" />

              <div className="experience-detail__header">
                <div className="experience-detail__brand">
                  <div className="experience-detail__logo">
                    {item.logo ? (
                      <img src={item.logo} alt={`${item.company} logo`} loading="lazy" />
                    ) : (
                      <span>{getInitials(item.company)}</span>
                    )}
                  </div>

                  <div className="experience-detail__headline">
                    <p>{item.company}</p>
                    <h3>{item.role}</h3>
                  </div>
                </div>

                {item.href && (
                  <a href={item.href} target="_blank" rel="noreferrer" className="experience-detail__visit">
                    <span>Visit</span>
                    <i className="ri-arrow-right-up-line" aria-hidden="true" />
                  </a>
                )}
              </div>

              <div className="experience-detail__meta">
                <span>
                  <i className="ri-calendar-line" aria-hidden="true" />
                  {item.period}
                </span>
                <span>
                  <i className="ri-map-pin-2-line" aria-hidden="true" />
                  {item.location}
                </span>
              </div>

              <p className="experience-detail__summary">{item.summary}</p>

              <div className="experience-detail__content">
                <section className="experience-detail__block">
                  <p className="experience-detail__label">Full Details</p>
                  <ul className="experience-detail__list">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>
                        <i className="ri-sparkling-2-line" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="experience-detail__block experience-detail__block--impact">
                  <p className="experience-detail__label">Impact</p>
                  <p className="experience-detail__impact">{item.impact}</p>
                </section>
              </div>

              <div className="experience-detail__stack">
                <p className="experience-detail__label">Stack & Scope</p>
                <div className="experience-detail__tags">
                  {item.stack.map((tech) => (
                    <span className="experience-detail__tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
