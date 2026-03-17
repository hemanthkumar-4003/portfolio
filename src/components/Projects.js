import { usePortfolio } from "../context/PortfolioContext";

export default function Projects() {
  const { projects } = usePortfolio();
  return (
    <section className="section" id="projects">
      <h3 className="section-title">Projects</h3>
      {projects.map((project, i) => (
        <div key={i} className="card">
          <p className="project-num">PROJECT {String(i + 1).padStart(2, "0")}</p>
          <div className="card-header">
            <strong>{project.name}</strong>
          </div>
          <ul>
            {project.points.map((p, j) => <li key={j}>{p}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
