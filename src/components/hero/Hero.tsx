import "./Hero.css";
import { profile } from "../../data/portfolio";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../Icons";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="hero-status">
            <span className="dot" aria-hidden />
            Open to Software Developer roles
          </span>

          <p className="hero-hello">Hi, I'm</p>
          <h1>{profile.name}</h1>
          <h2 className="hero-role">{profile.title}</h2>

          <p className="hero-intro">
            Computer Science graduate (Class of 2026) who builds responsive,
            user-focused web applications — from clean React interfaces to
            Node.js and Express.js APIs backed by MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowIcon />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-photo-frame">
            <img
              src={profile.photo}
              alt={`${profile.name}, ${profile.title}`}
              width={360}
              height={360}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
