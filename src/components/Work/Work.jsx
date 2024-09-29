import React from "react";
import stepData from "../../utils/work";
import backgroundImage from "../../assets/images/work-section.svg";

const Work = () => {
  return (
    <div className="section">
      <div className="flex flex-col">
        <div className="container">
          <div className="flex flex-wrap -mx-4 mb-10 md:mb-4">
            <div className="w-full px-4 md:px-28">
              <div className="mb-15 lg:mb-14">
                <span
                  className="title text-start mx-3 md:mx-0"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  How we work!
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="work_section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={backgroundImage}
            alt=""
            className="absolute block md:hidden w-[80%] rotate-90 left-[-28%] z-[-1] object-cover self-start scale-[1.6]"
          />
          {stepData.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="flex md:flex-col items-center gap-5 md:gap-0 justify-between md:justify-center md:text-center w-full md:max-w-[20%]"
            >
              <img
                src={icon}
                alt={title}
                className="w-14 md:w-20 md:h-20 mb-4 ml-5 md:ml-0"
              />
              <div className="flex flex-col gap-4 w-[100%] md:w-full mr-3 md:mr-0">
                <h3 className="text-lg leading-3 md:leading-7 font-bold m-0">
                  {title}
                </h3>
                <p className="text-base leading-7 md:leading-[26px] font-normal md:flex md:justify-center m-0 md:px-5 py-0">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
