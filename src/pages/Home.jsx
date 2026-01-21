import React, { useEffect } from "react";
import Navbar from "../components/Home-page/Navbar";
import Hero from "../components/Home-page/Hero";
import StatsBanner from "../components/Home-page/StatsBanner";
import Mission from "../components/Home-page/Mission";
import Vision from "../components/Home-page/Vision";
import Footer from "../components/Home-page/Footer";
import Services from "../components/Home-page/Services";
import Goal from "../components/Home-page/Goal";
import Contact from "../components/Home-page/Contact";
import Aos from "aos";
import Projects from "../components/Home-page/Projects";

const Home = () => {
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
    <>
      <title>Home | MyHome</title>
      <Navbar />
      <Hero />
      <StatsBanner />
      <Services />
      <Projects />
      <Mission />
      <Vision />
      <Goal />
      <Contact />
      <Footer />
      <div></div>
    </>
  );
};

export default Home;
