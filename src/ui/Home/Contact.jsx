import { useRef, useState } from 'react';

const inquiryTopics = ['Product Advisory', 'System Analysis', 'Mobile Build', 'Project Rescue'];

const channels = [
  {
    title: 'LinkedIn',
    description: 'For professional conversations, consulting inquiries, and direct business outreach.',
    href: 'https://www.linkedin.com/in/yamen-alkuify-0128142bb/',
    icon: 'ri-linkedin-box-fill',
  },
  {
    title: 'GitLab',
    description: 'For code background, delivery proof, and product implementation context.',
    href: 'https://gitlab.com/alyameen1354',
    icon: 'ri-gitlab-fill',
  },
  {
    title: 'Instagram',
    description: 'For lighter touchpoints and a faster informal connection path when needed.',
    href: 'https://www.instagram.com/eng_yamen_alkuify/',
    icon: 'ri-instagram-line',
  },
];

export default function Contact({ formRef, formStatus, onSubmit }) {
  const subjectRef = useRef(null);
  const [activeTopic, setActiveTopic] = useState('');

  const applyTopic = (topic) => {
    setActiveTopic(topic);
    if (subjectRef.current) {
      subjectRef.current.value = topic;
      subjectRef.current.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__shell container">
        <div className="contact__panel">
          <p className="contact__eyebrow">Start The Conversation</p>

          <h2 className="contact__headline">
            Let&apos;s turn the next product move into
            <span> a cleaner technical decision.</span>
          </h2>

          <p className="contact__lede">
            I usually help with product direction, systems analysis, technical execution, and projects that need more
            structure before the next release.
          </p>

          <div className="contact__topics">
            {inquiryTopics.map((topic) => (
              <button
                type="button"
                key={topic}
                className={`contact__topic${activeTopic === topic ? ' contact__topic--active' : ''}`}
                onClick={() => applyTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>

          <div className="contact__notes">
            <div className="contact__note-card">
              <span className="contact__note-label">Best Use</span>
              <strong>Product advisory, system planning, delivery rescue, and senior technical execution.</strong>
            </div>

            <div className="contact__note-card">
              <span className="contact__note-label">Location</span>
              <strong>Damascus, Syria</strong>
            </div>
          </div>

          <div className="contact__channels">
            {channels.map((channel) => (
              <a href={channel.href} target="_blank" rel="noreferrer" className="contact-channel" key={channel.title}>
                <span className="contact-channel__icon">
                  <i className={channel.icon} />
                </span>

                <span className="contact-channel__body">
                  <span className="contact-channel__title">{channel.title}</span>
                  <span className="contact-channel__description">{channel.description}</span>
                </span>

                <span className="contact-channel__arrow" aria-hidden="true">
                  <i className="ri-arrow-right-up-line" />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact__mail">
          <div className="contact__mail-head">
            <p className="contact__mail-kicker">Direct Form</p>
            <h3 className="contact__mail-title">Send a clear brief, question, or product need.</h3>
          </div>

          <form id="contact-form" className="contact__form" onSubmit={onSubmit} ref={formRef}>
            <input type="hidden" name="_subject" value="New Contact Form Submission" />

            <div className="contact__group">
              <div className="contact__box">
                <input type="text" name="user_name" className="contact__input" id="name" required placeholder="Your Name" />
                <label htmlFor="name" className="contact__label">
                  Your Name
                </label>
              </div>

              <div className="contact__box">
                <input type="email" name="email" className="contact__input" id="email" required placeholder="Email Address" />
                <label htmlFor="email" className="contact__label">
                  Email Address
                </label>
              </div>
            </div>

            <div className="contact__box">
              <input
                ref={subjectRef}
                type="text"
                name="subject"
                className="contact__input"
                id="subject"
                required
                placeholder="Subject"
              />
              <label htmlFor="subject" className="contact__label">
                Subject
              </label>
            </div>

            <div className="contact__box contact__area">
              <textarea
                name="message"
                id="message"
                className="contact__input"
                required
                placeholder="Tell me what you are building, where it is blocked, or what kind of support you need."
              />
              <label htmlFor="message" className="contact__label">
                Project Brief
              </label>
            </div>

            {formStatus.text && (
              <p className="contact__message" id="contact-message" style={{ color: formStatus.color }}>
                {formStatus.text}
              </p>
            )}

            <button type="submit" className="contact__button">
              <i className="ri-send-plane-line" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
