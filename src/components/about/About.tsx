import "./About.css";
import { profile } from "../../data/portfolio";
import { BriefcaseIcon, GradIcon, PinIcon } from "../Icons";

const facts = [
  { icon: <PinIcon />, label: "Location", value: profile.location },
  {
    icon: <GradIcon />,
    label: "Education",
    value: "B.E. Computer Science and Engineering, 2026",
  },
  { icon: <BriefcaseIcon />, label: "Role", value: profile.title },
  { icon: <PinIcon />, label: "Open to Relocate", value: profile.openToRelocate },
];

function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <div className="reveal">
          <span className="eyebrow">About</span>
          <h2 className="section-title">A developer who enjoys building things people use</h2>
        </div>

        <div className="about-body reveal">
          <p>
            I'm <strong>{profile.name}</strong>, a Computer Science and
            Engineering graduate (2022 – 2026) from Akshaya College of
            Engineering and Technology, with a strong interest in software and
            web development.
          </p>
          <p>
            I build responsive, user-friendly applications using React,
            TypeScript, Node.js, Express.js and MongoDB. Through internships and
            projects I've worked on authentication, CRUD workflows, REST API
            integration and reusable UI components.
          </p>
          <p>
            I'm looking for a Software Developer role where I can contribute to a
            product team, write clean and maintainable code, and keep learning
            new technologies.
          </p>

          <ul className="about-facts">
            {facts.map((fact) => (
              <li key={fact.label}>
                <span className="fact-icon">{fact.icon}</span>
                <div>
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
