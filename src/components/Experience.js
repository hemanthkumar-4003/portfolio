import { Card, Badge } from "react-bootstrap";
import { usePortfolio } from "../context/PortfolioContext";

export default function Experience() {
  const { experience } = usePortfolio();
  return (
    <section className="section" id="experience">
      <h3 className="section-title">Experience</h3>
      <div className="timeline">
        {experience.map((job, i) => (
          <div key={i} className="timeline-item">
            <Card className="custom-card">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
                  <Card.Title className="mb-0 fw-semibold">{job.company}</Card.Title>
                  <Badge className="custom-badge">{job.period}</Badge>
                </div>
                <ul className="custom-list">
                  {job.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
