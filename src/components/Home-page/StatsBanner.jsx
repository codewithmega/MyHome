import React from "react";

const StatsBanner = () => {
  return (
    <div className="bg-yellow-600 text-white">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 mx-auto w-5/6 ">
        
          <div className="flex gap-2 px-8 justify-center" data-aos="fade-up" data-aos-duration="700">
            <div>
              <h1 className="text-3xl font-bold px-2">25+</h1>
            </div>
            <div><span className="text-[13px]">Years of <br/> Experience</span></div>
          </div>
          <div className="flex gap-2 px-8 justify-center" data-aos="fade-up" data-aos-duration="700">
            <div>
              <h1 className="text-3xl font-bold px-2">378+</h1>
            </div>
            <div><span className="text-[13px]">Projects <br/> Completed</span></div>
          </div>
          <div className="flex gap-2 px-8 justify-center" data-aos="fade-up" data-aos-duration="700">
            <div>
              <h1 className="text-3xl font-bold px-2">500+</h1>
            </div>
            <div><span className="text-[13px]">Satisfied <br/> Client</span></div>
          </div>
          <div className="flex gap-2 px-8 justify-center" data-aos="fade-up" data-aos-duration="700">
            <div>
              <h1 className="text-3xl font-bold px-2">20+</h1>
            </div>
            <div><span className="text-[13px]">National <br/> Projects</span></div>
          </div>
      </div>
    </div>
  );
};

export default StatsBanner;
