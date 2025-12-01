export default function Skills({ skillRows }) {
  return (
    <section className="skills section" id="skills">
      <div className="skills__header container">
        {/* <p className="eyebrow">Stack in motion</p> */}
        <h2 className="section__title-2">
          <span>Skills.</span>
        </h2>
        {/* <p className="skills__hint">مسارين متحركين بستايل زجاجي ولمعة خفيفة على كل مهارة.</p> */}
      </div>

      <div className="skills__rails container">
        {skillRows.map((row, rowIdx) => {
          const loopedRow = [...row, ...row];
          const direction = rowIdx % 2 === 0 ? 'forward' : 'reverse';

          return (
            <div
              className="skills__rail"
              key={rowIdx}
              data-direction={direction}
              style={{ '--offset': `${rowIdx * 1.5}s` }}
            >
              <div className="skills__track">
                {loopedRow.map((skill, skillIdx) => (
                  <div className="skill-pill" key={`${skill.name}-${skillIdx}`} style={{ '--i': skillIdx }}>
                    <div className="skill-pill__icon">
                      <span className="skill-pill__glow" aria-hidden="true" />
                      <img src={skill.img} alt={skill.alt} loading="lazy" />
                    </div>
                    <span className="skill-pill__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
