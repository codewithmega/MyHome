import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="about-hero w-full h-60 mt-10">
        <div className="py-20">
          <h3
            className="text-white font-bold outfit w-6/9 mx-auto px-3 text-4xl md:text-5xl"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            PROJECTS
            <br/>
          </h3>
          <div className="w-6/9 mx-auto ">
            <p className="text-white outfit px-3 text-sm w-full md:w-5/9 md:text-lg mt-5" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>Here are some of our construction projects, our Past, Present and Future Projects. Take a look!</p>
          </div>
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
