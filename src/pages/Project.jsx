import React, { useEffect } from "react";
import Navbar from "../components/Home-page/Navbar";
import Footer from "../components/Home-page/Footer";
import { useParams } from "react-router-dom";
import projects from "../components/Project-page/projectData.js";
import ProjectGallery from "../components/Project-Page/ProjectGallery";
import { ChevronRight, MoveLeft } from "lucide-react";

const Project = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const title = project.title;
  const client = project.client;
  const biolocation = project.biolocation;
  const categories = project.categories;
  const description = project.description;
  const designer = project.designer;
  const contractor = project.contractor;
  const architect = project.architect;
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
        <div className="py-15 ">
          <div className="w-14/15 md:w-6/9 mx-auto px-3 text-white outfit mb-3">
            <a
              href="/"
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              data-aos=""
            >
              Home
            </a>{" "}
            <ChevronRight className="inline" />{" "}
            <a
              href="/projects"
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              Projects
            </a>{" "}
            <ChevronRight className="inline" />
            <a
              href="#"
              className="cursor-default relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              {title}
            </a>
          </div>
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
              <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1 text-gray-700">
                CLIENT:
              </h4>
              <p className="mb-2">{client}</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1 text-gray-700">
                LOCATION:
              </h4>
              <p className="mb-2">{location}</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1 text-gray-700">
                DESIGNER:
              </h4>
              <p className="mb-2">{designer}</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1 text-gray-700">
                ARCHITECT:
              </h4>
              <p className="mb-2">{architect}</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1 text-gray-700">
                CONTRACTOR:
              </h4>
              <p className="mb-2">{contractor}</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1 text-gray-700">
                BUILDING TYPE:
              </h4>
              <p className="mb-2">{type}</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1 text-gray-700">
                PROJECT AREA:
              </h4>
              <p className="mb-2 text-sm">{description}</p>
            </div>
            <div className="border p-3 md:px-6 mx-auto w-[90%] mb-3">
              <h4 className="text-sm font-semibold mt-2 mb-1 text-gray-700">
                YEAR:
              </h4>
              <p className="mb-2">{year}</p>
            </div>
          </div>
          <div className="w-full md:w-[60%]">
            {/* 60% */}
            <div className="flex flex-row-reverse mt-10">
              <div className="mb-4">
                <a
                  href="/projects"
                  className="text-yellow-600 font-semibold hover:underline outfit"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  Explore other Projects →
                </a>
              </div>
            </div>
            <div className="p-4">
              <ProjectGallery gallery={project.gallery} />
            </div>
          </div>
        </div>
        <div className="mx-auto w-50 mt-10">
          <button className="group relative overflow-hidden bg-green-900 px-4 py-4 font-semibold text-yellow-300">
            <span
              className="absolute inset-0 bg-black translate-y-full
           transition-transform duration-300 ease-out
           group-hover:translate-y-0"
            ></span>

            <span
              className="relative z-10 transition-colors duration-300
           group-hover:text-white"
            >
              Explore other Projects
            </span>
          </button>
        </div>
      </div>

      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Project;
