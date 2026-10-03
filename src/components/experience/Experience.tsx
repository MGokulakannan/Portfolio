import "./Experience.css";
import { experience } from "../../data/portfolio";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Internships</h2>
          <p className="section-sub">
            Hands-on experience building and shipping web projects alongside
            development teams.
          </p>
        </div>

        <ol className="timeline">
          {experience.map((item) => (
            <li className="timeline-item reveal" key={item.role}>
              <span className="timeline-dot" aria-hidden />
              <div className="card">
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
