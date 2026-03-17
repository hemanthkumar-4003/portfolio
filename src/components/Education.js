import { Card, Badge, Row } from "react-bootstrap";
import { usePortfolio } from "../context/PortfolioContext";

export default function Education() {
  const { education } = usePortfolio();
  return (
    <section className="section" id="education">
      <h3 className="section-title">Education</h3>
      <Row className="g-3">
        {education.map((edu, i) => (
          <Card key={i} className="custom-card">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                <Card.Title className="mb-0 fw-semibold">{edu.institution}</Card.Title>
                <Badge className="custom-badge">{edu.period}</Badge>
              </div>
              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-cgpa">⭐ CGPA: {edu.cgpa}</p>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </section>
  );
}
