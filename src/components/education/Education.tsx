import "./Education.css";
import { education } from "../../data/portfolio";
import { GradIcon } from "../Icons";

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Academic background</h2>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <div className="card education-card reveal" key={item.degree}>
              <span className="education-icon">
                <GradIcon />
              </span>
              <div className="education-main">
                <h3>{item.degree}</h3>
                <p className="education-school">{item.school}</p>
                {item.detail && <p className="education-detail">{item.detail}</p>}
              </div>
              <div className="education-meta">
                <span className="education-period">{item.period}</span>
                <span className="education-score">{item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
