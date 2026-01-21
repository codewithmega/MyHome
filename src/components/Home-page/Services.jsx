import React from "react";

const Services = () => {
  return (
    <div className="mx-auto w-11/12 md:w-7/9 px-3 md:py-5 mt-5">
      <div className="bg-green-800 text-white w-28 h-9 mx-auto px-3 py-1 rounded-full text-center">
        <span className="text-sm font-semibold outfit">SERVICES</span>
      </div>
      <div className="mx-auto w-11/12 text-center mt-3 mb-14">
        <h3 className="font-medium sansation text-[13px] text-gray-600 w-full ">
          We offer a comprehensive range of services designed to meet diverse
          needs across the real estate and investment spectrum.
        </h3>
      </div>
      <div className="">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center mb-4">
          <div className="border border-1 rounded-md p-7" data-aos="fade-up" data-aos-duration="700">
            <div className="service-icon bg-blue-600 w-[50px] rounded-md p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-white lucide lucide-brain-icon lucide-brain"
              >
                <path d="M12 18V5" />
                <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
                <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
                <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
                <path d="M18 18a4 4 0 0 0 2-7.464" />
                <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
                <path d="M6 18a4 4 0 0 1-2-7.464" />
                <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
              </svg>
            </div>
            <div className="service-content">
              <h3 className="mt-3 font-medium text-lg outfit">
                Housing Economics
              </h3>
              <p className="text-gray-700 text-sm text-left outfit">
                Our system is fundamentally rich in manpower quality and diverse
                knowledge base that affords us good understanding of housing
                economics.
              </p>
            </div>
          </div>
          <div className="border border-1 rounded-md p-7" data-aos="fade-up" data-aos-duration="700">
            <div className="service-icon bg-blue-600 w-[50px] rounded-md p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-white lucide lucide-house-icon lucide-house"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
            <div className="service-content">
              <h3 className="mt-3 font-medium text-lg outfit">
                Real Estate Development
              </h3>
              <p className="text-gray-700 text-sm text-left outfit">
                We are sufficiently empowered to delivery world class estate
                development projects within acceptable international standard.
              </p>
            </div>
          </div>
          <div className="border border-1 rounded-md p-7" data-aos="fade-up" data-aos-duration="700">
            <div className="service-icon bg-blue-600 w-[50px] rounded-md p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-white lucide lucide-user-icon lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="service-content">
              <h3 className="mt-3 font-medium text-lg outfit">
                Real Estate Investment Consultancy
              </h3>
              <p className="text-gray-700 text-sm text-left outfit">
                We offer real estate investment services with the objective of
                surpassing our clientele expectation by employing scientific
                real estate solution.
              </p>
            </div>
          </div>
          <div className="border border-1 rounded-md p-7 mx-auto" data-aos="fade-up" data-aos-duration="700">
            <div className="service-icon bg-blue-600 w-[50px] rounded-md p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-white lucide lucide-hard-hat-icon lucide-hard-hat"
              >
                <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                <path d="M14 6a6 6 0 0 1 6 6v3" />
                <path d="M4 15v-3a6 6 0 0 1 6-6" />
                <rect x="2" y="15" width="20" height="4" rx="1" />
              </svg>
            </div>
            <div className="service-content">
              <h3 className="mt-3 font-medium text-lg outfit">Construction</h3>
              <p className="text-gray-700 text-sm text-left outfit">
                We are involve in all level of construction project execution,
                be it Road, infrastructure etc.
              </p>
            </div>
          </div>
          <div className="border border-1 rounded-md p-7 mx-auto" data-aos="fade-up" data-aos-duration="700">
            <div className="service-icon bg-blue-600 w-[50px] rounded-md p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-white lucide lucide-user-icon lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="service-content">
              <h3 className="mt-3 font-medium text-lg outfit">
                Project Management
              </h3>
              <p className="text-gray-700 text-sm text-left outfit">
                We offer real estate investment services with the objective of
                surpassing our clientele expectation by employing scientific
                real estate solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
