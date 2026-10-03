// Single source of content for the portfolio.

export const profile = {
  name: "Gokulakannan M",
  title: "Software Developer",
  location: "Chennai, Tamil Nadu",
  openToRelocate: "Yes",
  email: "mgokula52@gmail.com",
  phone: "+91 9597357020",
  phoneHref: "tel:+919597357020",
  github: "https://github.com/MGokulakannan",
  linkedin: "https://www.linkedin.com/in/gokulakannan-m-50551735a",
  photo: "/profile.png",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  { title: "Programming Languages", items: ["Python", "JavaScript", "C"] },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "React.js", "TypeScript", "Bootstrap"],
  },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Database", items: ["MongoDB", "SQL (MySQL)"] },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export type Project = {
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Cricket Academy Webpage",
    tag: "Frontend",
    description:
      "A responsive, multi-page website for a cricket academy that presents its programs and makes it easy for new players to get in touch and enrol.",
    highlights: [
      "Home, About, Coaches, Features and Gallery sections built from reusable components",
      "Admission / Join flow for prospective players",
      "Responsive layouts for desktop, tablet and mobile",
    ],
    tech: ["React", "TypeScript", "Bootstrap", "CSS"],
    github: "https://github.com/MGokulakannan/Cricket-Academy",
  },
  {
    title: "Gokul HRM – OrangeHRM Clone",
    tag: "Full Stack · MERN",
    description:
      "An HR management system inspired by OrangeHRM, covering the everyday workflows of an HR team with a secure, role-aware interface.",
    highlights: [
      "JWT-based authentication with role-based access",
      "Dashboard overview and employee management (create, update, delete)",
      "Node.js / Express REST API backed by MongoDB",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT Authentication",
    ],
  },
  {
    title: "To-Do List",
    tag: "Full Stack · MERN",
    description:
      "A full-stack task management application where users can create, view, update and delete their tasks.",
    highlights: [
      "Complete CRUD operations for managing tasks",
      "React frontend connected to a Node.js / Express REST API",
      "Tasks persisted in a MongoDB database",
    ],
    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "CRUD Operations",
    ],
  },
];

export const experience = [
  {
    role: "Web Development Intern",
    company: "Circle Technology",
    points: [
      "Developed responsive, user-friendly web pages using HTML, CSS, JavaScript and Bootstrap.",
      "Worked with the development team to build, test and optimise websites for cross-browser compatibility and a better user experience.",
    ],
  },
  {
    role: "Graphic Design & Content Creation Intern",
    company: "Tech Sakthi Solution",
    points: [
      "Built and customised WordPress sites, including theme customisation and plugin integration.",
      "Improved on-page SEO through image captions, descriptions and media metadata.",
    ],
  },
];

export const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    school: "Akshaya College of Engineering and Technology",
    detail: "Affiliated to Anna University",
    period: "2022 – 2026",
    score: "73%",
  },
  {
    degree: "Higher Secondary (HSC)",
    school: "Sri Ram Education School",
    period: "2021 – 2022",
    score: "69%",
  },
  {
    degree: "Secondary School (SSLC)",
    school: "Sri Ram Education School",
    period: "2019 – 2020",
    score: "73%",
  },
];

export const certifications = ["MERN Stack Certification"];

export const achievements = [
  "Winner – Digital Design, CIET College Symposium",
  "Winner – Paper Presentation, CIET College Symposium",
  "Winner – Tech Day, Akshaya College of Engineering and Technology",
];
