import About from "./components/About";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import { useEffect, useState } from "react";

import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/Footer";

function update(e) {
  try {
    var x = e.clientX || e.touches[0].clientX;
    var y = e.clientY || e.touches[0].clientY;

    document.documentElement.style.setProperty("--cursorX", x + "px");
    document.documentElement.style.setProperty("--cursorY", y + "px");
  } catch (error) {}
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);

function App() {
  const [activeLink, setActiveLink] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("article");
      console.log(sections);
      const scrollPos = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveLink(section.id);
          console.log(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex max-w-screen-xl m-auto sm:px-20 px-5 lg:flex-row flex-col">
      <Header activeLink={activeLink} />
      <section className="lg:w-1/2 lg:py-24  leading-8">
        <About />
        <Experience />
        <Projects />
        <Footer/>
      </section>
    </div>
  );
}

export default App;
