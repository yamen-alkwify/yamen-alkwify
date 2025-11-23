export default function Skills({ skillRows }) {
  return (
    <section className="services section" id="skills">
      <h2 className="section__title-2">
        <span>Skills.</span>
      </h2>

      {skillRows.map((row, idx) => (
        <div className="table-container" key={idx}>
          <table className="skills-table">
            <tbody>
              <tr>
                {row.map((skill) => (
                  <td className="skill-item" key={skill.name}>
                    <img src={skill.img} alt={skill.alt} />
                    <h2>{skill.name}</h2>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
}
