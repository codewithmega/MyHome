import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Current path
  const currentPath = window.location.pathname;

  // Active link helper
  const navLinkClass = (path) =>
    currentPath === path || currentPath.startsWith(path + "/")
      ? "text-teal-600 font-semibold border-b-2 border-teal-600"
      : "text-gray-500 transition hover:text-gray-500/75";

  // Mobile active helper
  const mobileLinkClass = (path) =>
    currentPath === path || currentPath.startsWith(path + "/")
      ? "block py-2 rounded bg-teal-50 text-teal-600 font-medium"
      : "block py-2 rounded hover:bg-gray-100";

  return (
    <header className="bg-white z-10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a href="/" className="block text-teal-600">
            <img
              src="/logo.jpg"
              width={80}
              className="mt-10 mx-3 md:mx-10"
              data-aos="fade-down"
              data-aos-duration="700"
              alt="Logo"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:block mt-8">
            <ul className="flex items-center gap-6 text-sm">
              <li data-aos="fade-up" data-aos-duration="700">
                <a href="/" className={navLinkClass("/")}>Home</a>
              </li>

              <li data-aos="fade-up" data-aos-duration="700">
                <a href="/services" className={navLinkClass("/services")}>
                  Services
                </a>
              </li>

              <li data-aos="fade-up" data-aos-duration="700">
                <a href="/about" className={navLinkClass("/about")}>
                  About Us
                </a>
              </li>

              <li data-aos="fade-up" data-aos-duration="700">
                <a href="/projects" className={navLinkClass("/projects")}>
                  Projects
                </a>
              </li>

              <li data-aos="fade-up" data-aos-duration="700">
                <a href="/contact" className={navLinkClass("/contact")}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4 mt-8">

            <a
              href="/contact"
              className="hidden sm:inline-flex rounded-full bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:shadow-lg"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Contact
            </a>

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 mt-10 bg-white border-t border-gray-200 space-y-2">
          <a href="/" className={mobileLinkClass("/")}>Home</a>
          <a href="/services" className={mobileLinkClass("/services")}>Services</a>
          <a href="/about" className={mobileLinkClass("/about")}>About Us</a>
          <a href="/projects" className={mobileLinkClass("/projects")}>Projects</a>
          <a href="/contact" className={mobileLinkClass("/contact")}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
