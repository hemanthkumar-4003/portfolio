import { usePortfolio } from "../context/PortfolioContext";

export default function Education() {
  const { education } = usePortfolio();
  return (
    <section className="section" id="education">
      <h3 className="section-title">Education</h3>
      {education.map((edu, i) => (
        <div key={i} className="card">
          <div className="card-header">
            <strong>{edu.institution}</strong>
            <span className="badge">{edu.period}</span>
          </div>
          <p className="edu-degree">{edu.degree}</p>
          <p className="edu-cgpa">⭐ CGPA: {edu.cgpa}</p>
        </div>
      ))}
    </section>
  );
}
