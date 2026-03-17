import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import PortfolioContext, { portfolioData, NAV } from "./context/PortfolioContext";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { FaToggleOn, FaToggleOff, FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <PortfolioContext.Provider value={portfolioData}>
      <Navbar className={`custom-navbar${scrolled ? " navbar--scrolled" : ""}`} fixed="top" expand="md" expanded={navOpen} onToggle={setNavOpen}>
        <Container fluid className="px-3 px-md-4">
          <Navbar.Brand
            className="navbar-name"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {portfolioData.name}
          </Navbar.Brand>

          <div className="d-flex align-items-center gap-2 ms-auto d-md-none">
            <button className="theme-toggle" onClick={() => setDark(!dark)} title={dark ? "Switch to Light" : "Switch to Dark"}>
              {dark ? <><FaMoon className="toggle-icon" /><FaToggleOff /></> : <><FaSun className="toggle-icon" /><FaToggleOn /></>}
            </button>
            <Navbar.Toggle aria-controls="main-nav" className="custom-toggler" />
          </div>

          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-center gap-1 py-2 py-md-0">
              {NAV.map((n) => (
                <Nav.Link key={n} href={`#${n.toLowerCase()}`} className="nav-link-custom" onClick={() => setNavOpen(false)}>{n}</Nav.Link>
              ))}
              <button className="theme-toggle ms-2 d-none d-md-flex" onClick={() => setDark(!dark)} title={dark ? "Switch to Light" : "Switch to Dark"}>
                {dark ? <><FaMoon className="toggle-icon" /><FaToggleOff /></> : <><FaSun className="toggle-icon" /><FaToggleOn /></>}
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="portfolio">
        <Hero />
        <div className="portfolio-content">
          <Container fluid className="px-3 px-md-4">
            <Experience />
            <Skills />
            <Projects />
            <Education />
          </Container>
        </div>
        <footer className="footer">
          <p>Crafted with ❤️ by Hemanth Kumar · {new Date().getFullYear()} · All rights reserved</p>
        </footer>
      </div>
    </PortfolioContext.Provider>
  );
}
