export default function OtherSkills({ otherSkills }) {
  return (
    <section className="services section" id="other">
      <div>
        <h2 style={{ textAlign: 'center', fontSize: '46px', paddingBottom: '10px' }}>
          <span>Other.</span>
        </h2>
        <div className="skill-container">
          {otherSkills.map((skill) => (
            <div className="skill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
