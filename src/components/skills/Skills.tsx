import "./Skills.css";
import { skillGroups } from "../../data/portfolio";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Technical skills</h2>
          <p className="section-sub">
            The languages, frameworks and tools I use to build and ship web
            applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="card skill-group reveal" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li className="badge" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
