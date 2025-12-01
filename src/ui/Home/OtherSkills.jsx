import AnimatedSection from '../common/AnimatedSection';

export default function OtherSkills({ otherSkills }) {
  return (
    <AnimatedSection className="other-skills section" id="other">
      <div className="other-skills__header container">
        {/* <p className="eyebrow">Mindset & craft</p> */}
        <h2 className="section__title-1">
          <span>Other Skills.</span>
        </h2>
        {/* <p className="other-skills__hint">مزيج من التحليل، التنظيم، ونظافة الكود بستايل حيوي.</p> */}
      </div>

      <div className="other-skills__grid container">
        {otherSkills.map((skill, idx) => (
          <div className="other-skill" key={skill}>
            <div className="other-skill__badge">
              <span>{String(idx + 1).padStart(2, '0')}</span>
            </div>
            <div className="other-skill__body">
              <p className="other-skill__name">{skill}</p>
              <span className="other-skill__dot" aria-hidden />
            </div>
            <span className="other-skill__shine" aria-hidden />
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
