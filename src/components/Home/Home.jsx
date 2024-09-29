import React from "react";
import logo from "../../assets/icons/logo.svg";
import homeImage from "../../assets/images/home-section.svg";
import backgroundImage from "../../assets/images/home-bg.jpg";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const phrases = [
  "Development of mobile application",
  "Development and implementation ERP systems",
  "User interface, User experience design",
  "IT consulting",
  "Optimization IT consulting infrastructure",
];

const Home = () => {
  return (
    <section
      className="text-gray-600 body-font h-min w-full flex justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="home"
    >
      <div className="container mx-auto flex py-40 md:flex-row flex-col items-center md:px-5">
        <div className="lg:flex-grow lg:pr-24 md:w-1/2 gap-5 md:pr-16 flex flex-col md:items-start md:text-left mb-5 md:mb-0 items-center text-center">
          <img
            src={logo}
            alt="Company Logo"
            className="mb-4 w-32 md:w-64"
            data-aos="fade-up"
          />
          <h1
            className="text-2xl md:text-[40px] font-bold text-secondary"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            IT-Outsourcing Company
          </h1>
          <h1
            className="text-2xl md:text-[40px] font-bold mb-4 text-primary leading-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Typewriter
              options={{
                strings: phrases,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
                cursor: "|",
              }}
            />
          </h1>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="myBtn !text-xl px-20 py-4 !w-auto cursor-pointer hidden lg:block"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Contact
          </Link>
        </div>
        <div
          className="lg:max-w-lg lg:w-1/2 md:w-1/2 w-[95%]"
          data-aos="fade-up"
        >
          <img
            className="object-cover object-center"
            alt="hero"
            src={homeImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
