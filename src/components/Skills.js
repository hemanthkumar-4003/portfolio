import { Row, Col, Card } from "react-bootstrap";
import { usePortfolio, SKILL_ICONS } from "../context/PortfolioContext";

function getSkillMeta(skill) {
  return SKILL_ICONS[skill.toLowerCase().trim()] ?? SKILL_ICONS._fallback;
}

function getAllSkills(skills) {
  const seen = new Set();
  return Object.values(skills)
    .flatMap((v) => v.split(",").map((s) => s.trim()))
    .filter((s) => { if (seen.has(s)) return false; seen.add(s); return true; });
}

export default function Skills() {
  const { skills } = usePortfolio();
  const marqueeItems = [...getAllSkills(skills), ...getAllSkills(skills)];

  return (
    <section className="section" id="skills">
      <h3 className="section-title">Skills</h3>

      <div className="skills-layout">
        <div className="skills-marquee-wrapper">
          <div className="skills-marquee">
            {marqueeItems.map((s, i) => {
              const { icon: Icon, color } = getSkillMeta(s);
              return (
                <div key={i} className="marquee-item">
                  <Icon size={36} color={color} />
                  <span>{s}</span>
                </div>
              );
            })}
          </div>
        </div>

        <Row xs={1} sm={2} md={3} lg={4} className="g-3 flex-grow-1">
          {Object.entries(skills).map(([category, value]) => (
            <Col key={category}>
              <Card className="custom-card h-100">
                <Card.Body>
                  <p className="skill-category-label">{category}</p>
                  <div className="skill-pills">
                    {value.split(",").map((s) => {
                      const { icon: Icon, color } = getSkillMeta(s.trim());
                      return (
                        <span key={s} className="skill-pill">
                          <Icon size={14} color={color} />
                          {s.trim()}
                        </span>
                      );
                    })}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
