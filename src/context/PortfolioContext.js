import { createContext, useContext } from "react";
import {
  SiPython, SiMysql, SiPostgresql, SiReact,
  SiSpring, SiSpringboot, SiHibernate, SiGit, SiGithub,
  SiJson, SiJunit5, SiIntellijidea, SiEclipseide, SiDbeaver,
} from "react-icons/si";
import {
  FaDatabase, FaCode, FaTools, FaLayerGroup, FaGlobe,
  FaAws, FaJava, FaPhone, FaEnvelope, FaLinkedin, FaGithub,
} from "react-icons/fa";

export const NAV = ["Experience", "Skills", "Projects", "Education"];

export const SKILL_ICONS = {
  java:               { icon: FaJava,        color: "#f89820" },
  sql:                { icon: FaDatabase,     color: "#00758f" },
  python:             { icon: SiPython,       color: "#3776ab" },
  spring:             { icon: SiSpring,       color: "#6db33f" },
  "spring boot":      { icon: SiSpringboot,   color: "#6db33f" },
  hibernate:          { icon: SiHibernate,    color: "#a0aec0" },
  jpa:                { icon: FaLayerGroup,   color: "#818cf8" },
  reactjs:            { icon: SiReact,        color: "#61dafb" },
  mysql:              { icon: SiMysql,        color: "#00758f" },
  postgresql:         { icon: SiPostgresql,   color: "#336791" },
  "rest apis":        { icon: FaGlobe,        color: "#06b6d4" },
  json:               { icon: SiJson,         color: "#f5a623" },
  "web applications": { icon: FaCode,         color: "#818cf8" },
  junit:              { icon: SiJunit5,       color: "#25a162" },
  eclipse:            { icon: SiEclipseide,   color: "#7b5ea7" },
  myeclipse:          { icon: SiEclipseide,   color: "#7b5ea7" },
  intellij:           { icon: SiIntellijidea, color: "#fe315d" },
  dbeaver:            { icon: SiDbeaver,      color: "#5b8dd9" },
  git:                { icon: SiGit,          color: "#f05032" },
  github:             { icon: SiGithub,       color: "#e2e8f0" },
  aws:                { icon: FaAws,          color: "#ff9900" },
  _fallback:          { icon: FaTools,        color: "#94a3b8" },
};

export const portfolioData = {
  name: "Hemanth Kumar Venkatreddy",
  title: "Java Backend Developer",
  contact: [
    { icon: FaPhone,    href: null,                                          title: "+91-9704612325" },
    { icon: FaEnvelope, href: "mailto:tech.hemanthkumar@gmail.com",          title: "tech.hemanthkumar@gmail.com" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/hemanth-kumar-venkatreddy-523225189/", title: "LinkedIn" },
    { icon: FaGithub,   href: "https://github.com/hemanthkumar-4003",        title: "GitHub" },
  ],
  experience: [
    {
      period: "Jan 2023 – Present",
      company: "APCFSS",
      points: [
        "Designed and developed scalable microservices and RESTful APIs using Spring Boot.",
        "Leveraged Spring Data JPA for efficient data persistence and Spring Security for robust authentication and authorization.",
        "Implemented a layered architecture (Controller, Service, DAO) adhering to OOP principles and industry-standard design patterns.",
        "Identified and resolved application issues through effective debugging and logging using SLF4J.",
        "Designed and optimized relational databases with constraints and crafted complex SQL queries including JOINs and subqueries.",
        "Utilized Git for version control, enabling efficient collaboration and code management.",
      ],
    },
  ],
  skills: {
    "Programming Languages": "Java, SQL, Python",
    "Backend Frameworks":    "Spring, Spring Boot, Hibernate, JPA",
    Frontend:                "ReactJS",
    Databases:               "MySQL, PostgreSQL",
    "APIs & Integrations":   "REST APIs, JSON, Web Applications",
    "Testing & Quality":     "JUnit",
    "Dev Tools":             "Eclipse, MyEclipse, IntelliJ, DBeaver",
    "Version Control":       "Git, GitHub, AWS",
  },
  projects: [
    {
      name: "Budget (Andhra Pradesh State Budget)",
      points: [
        "Developed a centralized budgeting platform for the State Budget of Andhra Pradesh, enabling efficient planning, allocation, and monitoring of departmental expenditures.",
        "Implemented approval workflows, and variance analysis to ensure fiscal discipline and transparency across government departments.",
        "Implemented comprehensive financial reports for all departments to track fund allocation, utilization, and expenditure status.",
      ],
    },
    {
      name: "Employee Work Monitoring System (EWMS)",
      points: [
        "Developed an end-to-end task tracking system to manage requirements, development, testing, and production deployment.",
        "Implemented real-time progress tracking and a ticketing system for deployment operations (DOPS).",
        "Ensured transparency, accountability, and timely delivery across teams.",
      ],
    },
    {
      name: "Strong Room Management System",
      points: [
        "Built a secure asset management solution for Sub-Treasury strong rooms.",
        "Enabled accurate cataloguing, tracking, and safeguarding of sensitive government assets.",
        "Ensured high security standards and streamlined treasury operations.",
      ],
    },
    {
      name: "Procurement and Consultant Services System",
      points: [
        "Developed a system to manage government consultant onboarding and underdeveloped area initiatives.",
        "Tracked employee records, attendance, earnings, and deductions.",
        "Automated pay bill generation and salary processing.",
      ],
    },
  ],
  education: [
    {
      period: "2017 – 2021",
      institution: "Sphoorthy Engineering College",
      degree: "Bachelor of Technology",
      cgpa: "7.23",
    },
  ],
};

const PortfolioContext = createContext(portfolioData);
export const usePortfolio = () => useContext(PortfolioContext);
export default PortfolioContext;
