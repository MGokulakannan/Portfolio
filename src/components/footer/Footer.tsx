import "./Footer.css";
import { profile } from "../../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "../Icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-role">{profile.title}</p>
        </div>

        <div className="footer-social">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={profile.phoneHref} aria-label="Phone">
            <PhoneIcon />
          </a>
        </div>
      </div>

      <div className="container">
        <p className="footer-copy">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
