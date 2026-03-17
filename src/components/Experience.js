import { usePortfolio } from "../context/PortfolioContext";

export default function Experience() {
  const { experience } = usePortfolio();
  return (
    <section className="section" id="experience">
      <h3 className="section-title">Experience</h3>
      <div className="timeline">
        {experience.map((job, i) => (
          <div key={i} className="timeline-item">
            <div className="card">
              <div className="card-header">
                <strong>{job.company}</strong>
                <span className="badge">{job.period}</span>
              </div>
              <ul>
                {job.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
