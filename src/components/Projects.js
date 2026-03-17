import { Row, Col, Card } from "react-bootstrap";
import { usePortfolio } from "../context/PortfolioContext";

export default function Projects() {
  const { projects } = usePortfolio();
  return (
    <section className="section" id="projects">
      <h3 className="section-title">Projects</h3>
      <Row xs={1} md={2} lg={3} className="g-3">
        {projects.map((project, i) => (
          <Col key={i}>
            <Card className="custom-card h-100">
              <Card.Body>
                <p className="project-num">PROJECT {String(i + 1).padStart(2, "0")}</p>
                <Card.Title className="fw-semibold mb-3">{project.name}</Card.Title>
                <ul className="custom-list">
                  {project.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
