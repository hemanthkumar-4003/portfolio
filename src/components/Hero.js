import { Container, Row, Col } from "react-bootstrap";
import { usePortfolio } from "../context/PortfolioContext";

export default function Hero() {
  const { name, title, contact } = usePortfolio();
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  return (
    <section className="hero">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto" className="text-center">
            <div className="hero-avatar">{initials}</div>
            <h1>{name}</h1>
            <p className="hero-title">{title}</p>
            <div className="contact-links justify-content-center d-flex flex-wrap gap-2">
              {contact.map(({ icon: Icon, href, title: tip }) =>
                href ? (
                  <a key={tip} href={href} target="_blank" rel="noreferrer" title={tip}><Icon /></a>
                ) : (
                  <span key={tip} title={tip}><Icon /></span>
                )
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
