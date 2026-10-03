import "./Projects.css";
import { projects } from "../../data/portfolio";
import { ExternalIcon, GitHubIcon } from "../Icons";

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-sub">
            Applications I've designed and built, from responsive frontends to
            full-stack MERN systems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="card project-card reveal" key={project.title}>
              <div className="project-top">
                <span className="project-num">0{index + 1}</span>
                <span className="badge badge-accent">{project.tag}</span>
              </div>

              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <ul className="project-tech" aria-label="Technologies">
                {project.tech.map((tech) => (
                  <li className="badge" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>

              {(project.github || project.live) && (
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <GitHubIcon />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalIcon />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
