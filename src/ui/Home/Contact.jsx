export default function Contact({ formRef, formStatus, onSubmit }) {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container grid">
        <div className="contact__data">
          <h2 className="section__title-2">
            <span>Contact Me.</span>
          </h2>

          <p className="contact__description-1">
            Feel free to send me a message, and I&apos;ll get back to you as soon as possible.
          </p>
          <p className="contact__description-1">
            I need your <b>Name</b> and <b>Email Address</b>.
          </p>
          <div className="geometric-box" />
        </div>

        <div className="contact__mail">
          <h2 className="contact__title">Send Me A Message</h2>
          <form id="contact-form" className="contact__form" onSubmit={onSubmit} ref={formRef}>
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <div className="contact__group">
              <div className="contact__box">
                <input type="text" name="user_name" className="contact__input" id="name" required placeholder="First Name" />
                <label htmlFor="name" className="contact__label">
                  First Name
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
              <input type="text" name="subject" className="contact__input" id="subject" required placeholder="Subject" />
              <label htmlFor="subject" className="contact__label">
                Subject
              </label>
            </div>
            <div className="contact__box contact__area">
              <textarea name="message" id="message" className="contact__input" required placeholder="Message" />
              <label htmlFor="message" className="contact__label">
                Message
              </label>
            </div>
            {formStatus.text && (
              <p className="contact__message" id="contact-message" style={{ color: formStatus.color }}>
                {formStatus.text}
              </p>
            )}
            <button type="submit" className="contact__button button">
              <i className="ri-send-plane-line" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
