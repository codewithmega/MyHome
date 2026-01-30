import React, { useState } from "react";
import ProjectCard from './ProjectCard'
import projects from './projectData.js'

const Hero = () => {
  return (
    <div>
      <div className="about-hero w-full h-70 mt-10">
        <div className="py-20">
          <h3
            className="text-white font-bold outfit w-6/9 mx-auto px-3 text-4xl md:text-5xl"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            data-aos="fade-up"
          >
            PROJECTS
            <br />
          </h3>
          <div className="w-6/9 mx-auto ">
            <p
              className="text-white outfit px-3 text-sm w-full md:w-5/9 md:text-lg mt-5"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              data-aos="fade-up"
            >
              Here are some of our construction projects, our Past, Present and
              Future Projects. Take a look!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 mx-auto w-full p-4 md:w-14/15 outfit">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} image={project.image} title={project.title} location={project.biolocation} categories={project.categories} link={project.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
