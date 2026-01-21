import React from "react";

const Mission = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto w-11/12 md:w-7/9 px-3 md:py-5 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 mb-10">
          <div>
            <div className="mission-head mt-10">
              <h1 className="sansation text-3xl md:text-4xl font-semibold tracking-tight" data-aos="fade-right" data-aos-duration="700">
                OUR <span className="text-orange-500 font-bold">MISSION</span>
              </h1>
              <div className="relative mt-3 h-1 w-5/8 bg-orange-200" data-aos="fade-right" data-aos-duration="700">
                <span className="absolute left-0 top-0 h-1 w-3/8 bg-orange-500"></span>
              </div>
            </div>
            <div className="mission-body">
              <p className="outfit text-justify md:pr-10 mt-4 max-w-xl leading-relaxed md:leading-loose text-gray-600" data-aos="fade-right" data-aos-duration="700">
                We aim at improving the quality of an ideal environment for our
                valued client through our resilient, adaptable, innovative and
                imaginative professional approach to all projects we undertake
                and improving on performance in the industry.
              </p>
              <a
                href="/about"
                className="outfit inline-block mt-8 text-orange-600 font-semibold hover:underline "
                data-aos="fade-up" data-aos-duration="700"
              >
                Learn more about us →
              </a>
              <br />
            </div>
          </div>
          <div>
            <img
              src="/3C.png"
              className="max-w-full h-[300px] rounded-xl shadow-xl"
              data-aos="fade-left" data-aos-duration="700"
            />
            <br />
          <br />
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Mission;
