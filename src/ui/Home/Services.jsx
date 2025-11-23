export default function Services({ services }) {
  return (
    <section className="services section" id="services">
      <h2 className="section__title-2">
        <span>Services.</span>
      </h2>
      <div className="services__container container grid">
        {services.map((service) => (
          <article className="services__card" key={service.title}>
            <div className="services__border" />
            <div className="services__content">
              <div className="services__icon">
                <div className="services__box" />
                <i className={service.icon} />
              </div>
              <h2 className="services__title">{service.title}</h2>
              <p className="services__description">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
