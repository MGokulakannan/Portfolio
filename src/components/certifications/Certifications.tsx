import "./Certifications.css";
import { achievements, certifications } from "../../data/portfolio";
import { AwardIcon, TrophyIcon } from "../Icons";

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Certifications & Achievements</span>
          <h2 className="section-title">Recognition</h2>
        </div>

        <div className="recognition-grid">
          <div className="card reveal">
            <h3 className="recognition-title">Certifications</h3>
            <ul className="recognition-list">
              {certifications.map((item) => (
                <li key={item}>
                  <span className="recognition-icon">
                    <AwardIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card reveal" id="achievements">
            <h3 className="recognition-title">Achievements</h3>
            <ul className="recognition-list">
              {achievements.map((item) => (
                <li key={item}>
                  <span className="recognition-icon">
                    <TrophyIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
