import React from 'react'
import Navbar from "../components/Home-page/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* HERO  */}
      <div className="about-hero w-full h-70 mt-10">
        <div className="py-20">
          <h3
            className="text-white font-bold outfit w-6/9 mx-auto px-3 text-4xl md:text-5xl"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            data-aos="fade-up"
          >
            CONTACT US
            <br />
          </h3>
          <div className="w-6/9 mx-auto ">
            <p
              className="text-white outfit px-3 text-sm w-full md:w-5/9 md:text-lg mt-5"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              data-aos="fade-up"
            >
              Reach out to us via email, phone, WhatsApp or even visit our physical office in Lagos. 
            </p>
          </div>
        </div>
      </div>

        <div className="bg-gray-100 w-full">
      <div className="p-5 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="contact-details outfit">
          <div className="max-w-md p-6">
            <h2 className="outfit text-3xl font-bold mb-4">
              Get in Touch with Us!
            </h2>

            <p className="text-gray-700 mb-6 outfit">
              We’re here to help! Whether you have a question about our
              services, need assistance with your account, or want to provide
              feedback, our team is ready to assist you.
            </p>

            <div className="mb-1">
              <span className="block font-semibold">Email:</span>
              <a
                href="mailto:myhome@gmail.com"
                className="font-bold text-black hover:underline"
              >
                myhome@gmail.com
              </a>
            </div>

            <div className="mb-4">
              <span className="block font-semibold">Phone:</span>
              <a
                href="tel:+123456778"
                className="font-bold text-black hover:underline"
              >
                +1 234 567 78
              </a>
              <div className="text-xs text-gray-500 mt-1">
                Available Monday to Friday, 9 AM - 6 PM GMT
              </div>
            </div>

            <button className="inline-flex items-center bg-green-700 text-white rounded-full px-5 py-2 shadow hover:bg-green-900 transition">
              Chat on WhatsApp
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="contact-map">
          <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=2880 Broadway, New York&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://nicemail.cc/">temp mail</a></div></div>
        </div>
      </div>
    </div>


    </>
  )
}

export default Contact;