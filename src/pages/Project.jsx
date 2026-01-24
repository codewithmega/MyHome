import React, { useEffect } from "react";
import Navbar from "../components/Home-page/Navbar";
import { useParams } from "react-router-dom";
import projects from "../components/Project-Page/project-data";

const Project = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const title = project.title;
  const biolocation = project.biolocation;
  const categories = project.categories;
  const description = project.description;
  const designer = project.designer;
  const year = project.year;
  const role = project.role;
  const location = project.location;
  const type = project.type;
  
  

  useEffect(() => {
    if (project) {
      document.title = project.title + " | MyHome";
    } else {
      document.title = "Project Not Found | MyHome";
    }
  }, [project]);

  if (!project) return <p>Project not found</p>;

  return (
    <>
      <Navbar />

      {/* Decided to reduce the amount of abstraction but manually putting this here */}
      {/* Also i get to test and fix easily */}
      <div className="about-hero w-full h-60 mt-10">
        <div className="py-20">
          <h3
            className="text-white font-bold outfit w-14/15 md:w-6/9 mx-auto px-3 text-4xl md:text-5xl"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            data-aos="fade-up"
          >
            {title}
            <br />
          </h3>
          <div className="w-14/15 md:w-6/9 mx-auto ">
            <p
              className="text-white outfit px-4 text-sm w-full md:w-5/9 md:text-lg mt-5"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              data-aos="fade-up"
            >
              {biolocation}
            </p>
          </div>
        </div>
      </div>

      <div className="w-14/15 md:w-7/9 mx-auto">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-[40%] outfit">
            {/* 40% */}
            
            <div className="project-description md:px-10 md:py-10 p-4">
                <h3 className="text-2xl font-semibold">Project Title</h3>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1">CLIENT:</h4>
              <p className="mb-2">{project.client}</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1">LOCATION:</h4>
              <p className="mb-2">Makarios Luxury Place</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1">DESIGNER:</h4>
              <p className="mb-2">Makarios Luxury Place</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1">ARCHITECT:</h4>
              <p className="mb-2">Makarios Luxury Place</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1">CONTRACTOR:</h4>
              <p className="mb-2">Makarios Luxury Place</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1">BUILDING TYPE:</h4>
              <p className="mb-2">Makarios Luxury Place</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1">PROJECT AREA:</h4>
              <p className="mb-2">Makarios Luxury Place</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1">YEAR:</h4>
              <p className="mb-2">Makarios Luxury Place</p>
            </div>

          </div>
          <div className="w-full md:w-[60%] border">{/* 60% */}60</div>
        </div>
      </div>
    </>
  );
};

export default Project;
