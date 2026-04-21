import { NavLink } from 'react-router-dom';
import { PrimaryButton, GhostButton } from '../common/Button';
import { hashPath } from '../../utils/hashPath';

const advisorySignals = [
  'Software products of different scales',
  'Administrative and technical organization',
  'Consulting for systems and delivery programs',
];

const operatingSignals = ['Roadmaps', 'SRS + UML', 'Risk control', 'Stakeholder alignment'];

const spotlightTracks = [
  {
    label: 'Product Scope',
    title: 'Clear product framing',
    description: 'Roadmaps, priorities, and delivery phases built before execution expands.',
  },
  {
    label: 'System Blueprint',
    title: 'Build-ready analysis',
    description: 'Requirements, workflows, and logic mapped into a structure teams can implement.',
  },
  {
    label: 'Delivery Governance',
    title: 'Controlled execution',
    description: 'Risks, decisions, and reporting handled with more discipline and less noise.',
  },
  {
    label: 'Technical Direction',
    title: 'Leadership when needed',
    description: 'Architecture guidance and practical execution support across product teams.',
  },
];

const serviceCards = [
  {
    icon: 'ri-rocket-line',
    eyebrow: 'Software Product Production',
    title: 'I organize the product before the build accelerates.',
    description:
      'I turn raw software ideas into clearer product roadmaps, delivery phases, and execution priorities.',
    points: ['Scope, planning, and sequencing', 'Controlled delivery with clearer ownership'],
  },
  {
    icon: 'ri-flow-chart',
    eyebrow: 'Systems Analysis & Structuring',
    title: 'I convert business needs into build-ready systems.',
    description:
      'I map requirements, workflows, and technical logic so teams can build with more clarity and less rework.',
    points: ['Requirements, SRS, UML, and process mapping', 'System flows, data logic, and architecture direction'],
  },
  {
    icon: 'ri-briefcase-4-line',
    eyebrow: 'Project Management & Technical Leadership',
    title: 'I keep software delivery organized and decision-ready.',
    description:
      'I guide planning, reporting, risk control, and technical direction while stepping into Flutter and Swift Native delivery when needed.',
    points: ['Governance, reporting, and delivery control', 'Hands-on mobile execution when depth is required'],
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="services__shell container">
        <div className="services__intro">
          <div className="services__intro-copy">
            <p className="services__eyebrow">Operational Services</p>

            <h2 className="services__headline">
              Software products and technical systems delivered with
              <span> structure, analysis, and control.</span>
            </h2>
          </div>

          <div className="services__intro-side">
            <p className="services__lede">
              I help clients move software ideas into organized delivery models with clearer scope, stronger technical
              direction, and calmer execution.
            </p>

            <div className="services__signals">
              {advisorySignals.map((signal) => (
                <span className="services__signal" key={signal}>
                  {signal}
                </span>
              ))}
            </div>

            <div className="services__actions">
              <PrimaryButton as={NavLink} to={hashPath('contact')}>
                Discuss Your Product
                <i className="ri-arrow-right-up-line" />
              </PrimaryButton>

              <GhostButton as={NavLink} to={hashPath('projects')}>
                See Delivery Proof
                <i className="ri-layout-grid-line" />
              </GhostButton>
            </div>
          </div>
        </div>

        <div className="services__stage">
          <article className="services__spotlight">
            <div className="services__spotlight-panel">
              <p className="services__spotlight-kicker">Executive Delivery</p>

              <h3 className="services__spotlight-title">Products shaped with clarity, control, and technical direction.</h3>

              <p className="services__spotlight-copy">
                I step in where software work needs order: planning, analysis, governance, and practical execution.
              </p>

              <div className="services__spotlight-pills">
                {operatingSignals.map((signal) => (
                  <span className="services__spotlight-pill" key={signal}>
                    {signal}
                  </span>
                ))}
              </div>

              <div className="services__spotlight-grid">
                {spotlightTracks.map((track) => (
                  <article className="services__spotlight-card" key={track.label}>
                    <p className="services__spotlight-card-label">{track.label}</p>
                    <h4 className="services__spotlight-card-title">{track.title}</h4>
                    <p className="services__spotlight-card-copy">{track.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </article>

          <div className="services__grid">
            {serviceCards.map((service) => (
              <article className="services__card" key={service.title}>
                <div className="services__card-body">
                  <div className="services__card-header">
                    <div className="services__card-copy">
                      <p className="services__card-eyebrow">{service.eyebrow}</p>
                      <h3 className="services__card-title">{service.title}</h3>
                    </div>

                    <div className="services__card-icon" aria-hidden="true">
                      <i className={service.icon} />
                    </div>
                  </div>

                  <p className="services__card-description">{service.description}</p>

                  <ul className="services__card-points">
                    {service.points.map((point) => (
                      <li className="services__card-point" key={point}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
