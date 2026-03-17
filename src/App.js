import { useState, useEffect } from "react";
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
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <span className="navbar-name">{portfolioData.name}</span>
        {NAV.map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>
        ))}
        <button className="theme-toggle" onClick={() => setDark(!dark)} title={dark ? "Switch to Light" : "Switch to Dark"}>
          {dark ? <><FaMoon className="toggle-icon" /><FaToggleOff /></> : <><FaSun className="toggle-icon" /><FaToggleOn /></>}
        </button>
      </nav>
      <div className="portfolio">
        <Hero />
        <main>
          <Experience />
          <Skills />
          <Projects />
          <Education />
        </main>
        <footer className="footer">
          <p>Built with ReactJs · {new Date().getFullYear()}</p>
        </footer>
      </div>
    </PortfolioContext.Provider>
  );
}
