import "./Contact.css";
import { profile } from "../../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from "../Icons";

const channels = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <PhoneIcon />,
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: "Gokulakannan M",
    href: profile.linkedin,
    external: true,
  },
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    value: "MGokulakannan",
    href: profile.github,
    external: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-grid">
        <div className="reveal">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-sub">
            I'm open to full-time Software Developer roles and internships. The
            quickest way to reach me is by email — I'll get back to you soon.
          </p>

          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <MailIcon />
              Email Me
            </a>
          </div>

          <p className="contact-location">
            <PinIcon />
            {profile.location}
          </p>
        </div>

        <ul className="contact-list reveal">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                className="card contact-card"
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="contact-icon">{channel.icon}</span>
                <span>
                  <span className="contact-label">{channel.label}</span>
                  <span className="contact-value">{channel.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
