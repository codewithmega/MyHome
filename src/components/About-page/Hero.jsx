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
            ABOUT US
          </h3>
        </div>
      </div>
      <div className="about-content mt-10 mx-auto h-auto w-full p-4 md:w-6/9 text-justify outfit">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At hic
          reiciendis labore perferendis, eius molestias, odio dolorum vel
          pariatur dicta laboriosam et commodi, totam esse architecto. Officiis
          natus nesciunt quidem. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. At hic reiciendis labore perferendis, eius
          molestias, odio dolorum vel pariatur dicta laboriosam et commodi,
          totam esse architecto. Officiis natus nesciunt quidem.Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. At hic reiciendis labore
          perferendis, eius molestias, odio dolorum vel pariatur dicta
          laboriosam et commodi, totam esse architecto. Officiis natus nesciunt
          quidem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
          hic reiciendis labore perferendis, eius molestias, odio dolorum vel
          pariatur dicta laboriosam et commodi, totam esse architecto. Officiis
          natus nesciunt quidem.
        </p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At hic
          reiciendis labore perferendis, eius molestias, odio dolorum vel
          pariatur dicta laboriosam et commodi, totam esse architecto. Officiis
          natus nesciunt quidem.Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. At hic reiciendis labore perferendis, eius
          molestias, odio dolorum vel pariatur dicta laboriosam et commodi,
          totam esse architecto. Officiis natus nesciunt quidem.Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. At hic reiciendis labore
          perferendis, eius molestias, odio dolorum vel pariatur dicta
          laboriosam et commodi, totam esse architecto. Officiis natus nesciunt
          quidem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
          hic reiciendis labore perferendis, eius molestias, odio dolorum vel
          pariatur dicta laboriosam et commodi, totam esse architecto. Officiis
          natus nesciunt quidem.
        </p>
      </div>
      <section class="bg-gray-200 mx-auto outfit md:w-6/9 mt-8">
        <center>
          <div class="px-4 py-4 lg:px-3">
            <div class="py-10">
              <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Get in Touch with Us
              </h2>
              <p class="mb-8 sm:text-md text-center px-7">
                We are looking to build the next big thing. If you have an idea,
                a vision, or a project that deserves to be done right, we’re
                ready to build it with you.
              </p>
              <div class="">
                <a
                  href="/contact"
                  class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2 lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </center>
      </section>
    </div>
  );
};

export default Hero;
