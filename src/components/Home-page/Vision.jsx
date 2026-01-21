import React from "react";

const Vision = () => {
  return (
    <div className="">
      <div className="mx-auto w-11/12 md:w-7/9 px-3 md:py-5 mt-2">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-0">
          <div className="pr-7 hidden md:block">
            <img
              src="/image3.jpg"
              className="max-w-full rounded-xl shadow-xl mt-15"
              data-aos="fade-left"
              data-aos-duration="700"
            />
            <br />
            <br />
          </div>
          <div>
            <div className="mission-head mt-15">
              <h1
                className="sansation text-3xl md:text-4xl font-semibold tracking-tight"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                OUR <span className="text-green-700 font-bold">VISION</span>
              </h1>
              <div
                className="relative mt-3 h-1 w-5/8 bg-green-200"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <span className="absolute left-0 top-0 h-1 w-6/8 bg-green-500"></span>
              </div>
            </div>
            <div className="mission-body">
              <p
                className="outfit text-justify md:pr-10 mt-4 max-w-xl leading-relaxed md:leading-loose text-gray-800"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                To make an impact through our infrastructure development
                consultancy services to the relevant sectors of the Nigeria
                economy
              </p>
              <a
                href="/about"
                className="outfit inline-block mt-8 text-green-600 font-semibold hover:underline "
                data-aos="fade-up"
                data-aos-duration="700"
              >
                Learn more about us →
              </a>
            </div>
            <br />
            <br />
          </div>
          <div className="block md:hidden">
            <img
              src="/image3.jpg"
              className="max-w-full rounded-xl shadow-xl mt-15"
              data-aos="fade-left"
              data-aos-duration="700"
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

export default Vision;
