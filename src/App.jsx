import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Projects from './pages/Projects';
import Project from './pages/Project';



export function App() {
  const navigate = useNavigate(); // Hook to change pages in code
  useEffect(() => {
  const initAOS = () => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });

    AOS.refreshHard();
  };

  if (document.readyState === "complete") {
    initAOS();
  } else {
    window.addEventListener("load", initAOS);
    return () => window.removeEventListener("load", initAOS);
  }
}, []);

  
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Project />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </main>
  );
}
