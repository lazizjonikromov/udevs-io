import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white border-gray-200 fixed top-0 left-0 w-full z-50 shadow-[0_1px_0_#e5e9f2]" data-aos="fade-down">
      <div className="max-w-[1170px] flex flex-wrap items-center justify-between mx-auto p-4 xl:px-0">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          <img src={logo} className="h-8" alt="Udevs Logo" />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col gap-5 md:gap-0 font-medium items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="directs"
                smooth={true}
                duration={500}
                className="navLink"
                activeClass="active"
                spy={true}
              >
                Direction
              </Link>
            </li>
            <li>
              <Link
                to="team"
                smooth={true}
                duration={500}
                className="navLink"
                activeClass="active"
                spy={true}
                
              >
                Command
              </Link>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
              className="relative hidden lg:block"
            >
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="dropDownLink"
                activeClass="active"
                spy={true}
                
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </Link>
              {activeDropdown === "services" && (
                <div
                  className={`absolute left-0 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-80`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        to="mobile"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Development of mobile application
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="erp_systems"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Development and implementation ERP systems
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="design"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        User interface, User experience design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="consulting"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        IT consulting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="optimization"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Optimization IT consulting infrastructure
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                to="tools"
                smooth={true}
                duration={500}
                className="navLink"
                activeClass="active"
                spy={true}
                
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                to="clients"
                smooth={true}
                duration={500}
                className="navLink"
                activeClass="active"
                spy={true}
                
              >
                Clients
              </Link>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("portfolio")}
              onMouseLeave={handleMouseLeave}
              className="relative hidden lg:block"
            >
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="dropDownLink"
                activeClass="active"
                spy={true}
                
              >
                Portfolio
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </Link>
              {activeDropdown === "portfolio" && (
                <div
                  className={`absolute left-0 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        to="delever"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Delever
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="smsuz"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Sms.uz
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="goodzone"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Goodzone
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="iman"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Iman
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("language")}
              onMouseLeave={handleMouseLeave}
              className="relative hidden lg:block"
            >
              <button
                onClick={() => handleMouseEnter("language")}
                className="dropDownLink"
              >
                Language
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {activeDropdown === "language" && (
                <div
                  className={`absolute left-0 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-30`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        to="russian"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Russian
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="english"
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        English
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="myBtn px-6 py-[10px] cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
