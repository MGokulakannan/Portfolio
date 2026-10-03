import { useEffect } from "react";
import About from "../about/About";
import Certifications from "../certifications/Certifications";
import Contact from "../contact/Contact";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

function Home() {
  // Fade sections in as they scroll into view.
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
