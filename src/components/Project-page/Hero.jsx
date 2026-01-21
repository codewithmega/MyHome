import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="about-hero w-full h-50 mt-10 text-center">
        <div className="py-20">
          <h3
            className="text-white outfit text-4xl md:text-5xl"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            PROJECTS
          </h3>
        </div>
      </div>
      <div className="mt-10 mx-auto h-auto w-full p-4 md:w-6/9 text-justify outfit">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>LOL</div>
          <div>LOL</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
