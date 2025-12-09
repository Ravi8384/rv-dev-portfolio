
// src/App.jsx
import {motion} from "motion/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {


  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    
}

  const userName = "Astha Verma";
  const skills = ["Frontend Developer", "Angular", "React", "GenAI", "JavaScript", "TypeScript", "Tailwind CSS"];
  const heroSummary = "Crafting beautiful, performant web experiences with modern technologies and a passion for clean code.";

  const skillsWithLevels = [
  { name: "Angular", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "GenAI", level: 75 },
];

  
  return (
    <>
    <Navbar scrollToSection={scrollToSection}/>
    <section id="home">
    <Hero  user={userName} skills={skills} heroSummary={heroSummary} scrollToSection={scrollToSection}/>
      </section>
      <section id="about" user={userName}>
         <About skillsWithLevels={skillsWithLevels}/>
      </section>
      <section id="projects">
        <Projects />
      </section>
    <section id="contact">
    <Contact />

    </section>
  
    </>
  );
}

export default App;