import React from "react";
// card icons
import uxIcon from "../../assets/icons/ux-ux.svg";
import uiIcon from "../../assets/icons/ux-ui.svg";
import uxPrototypingIcon from "../../assets/icons/ux-prototyping.svg";
import uiMoblieIcon from "../../assets/icons/ui-mobile-design.svg";
import uiWebDesignIcon from "../../assets/icons/ui-web-design.svg";
import uiAtomicDesignIcon from "../../assets/icons/ui-atomic-design.svg";

// ui section tech icons
import figmaIcon from "../../assets/icons/figma.svg";
import sketchIcon from "../../assets/icons/sketch.svg";
import lottieIcon from "../../assets/icons/lottie.svg";
import illustratorIcon from "../../assets/icons/adobe.svg";

import designSection from "../../assets/images/ux-section.png";
import bgImage from "../../assets/images/bg-of-image.png";
import backgroundImage from "../../assets/images/home-bg.jpg";

const uiCardData = [
  {
    id: 1,
    cardIcon: uxIcon,
    title: "UX",
    cardType: "science",
  },
  {
    id: 2,
    cardIcon: uiIcon,
    title: "UI",
    cardType: "science",
  },
  {
    id: 3,
    cardIcon: uxPrototypingIcon,
    title: "Prototyping",
    cardType: "science",
  },
  {
    id: 4,
    cardIcon: uiMoblieIcon,
    title: "Mobile Design",
    cardType: "science",
  },
  {
    id: 5,
    cardIcon: uiWebDesignIcon,
    title: "Web Design",
    cardType: "science",
  },
  {
    id: 6,
    cardIcon: uiAtomicDesignIcon,
    title: "Atomic Design",
    cardType: "science",
  },
];

const uiTechCardData = [
  {
    id: 1,
    cardIcon: figmaIcon,
    title: "Figma",
  },
  {
    id: 2,
    cardIcon: sketchIcon,
    title: "Sketch",
  },
  {
    id: 3,
    cardIcon: lottieIcon,
    title: "Lottie",
  },
  {
    id: 4,
    cardIcon: illustratorIcon,
    title: "Illustrator",
  },
];

const Design = () => {
  return (
    <section
      className="section bg-cover bg-center"
      id="design"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4 mb-10 md:mb-4">
          <div className="w-full px-4">
            <div className="mb-15 lg:mb-10">
              <span
                className="title mx-3 md:mx-0 pt-14 md:pt-0"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                UI / UX design
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto flex md:flex-row flex-col-reverse items-center">
          <div
            className="lg:flex-grow lg:pr-24 md:w-1/2 gap-5 md:pr-16 flex flex-col mb-16 md:mb-0 text-left"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text_service">
              Our company takes a human-centered approach to design
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4 mt-5 mx-3 md:mx-0">
              {uiCardData.map(({ id, cardIcon, title }) => (
                <div
                  key={id}
                  className="min-w-[115px] md:min-w-[150px] flex flex-col px-2 py-2 rounded-[8px] bg-bgCard min-h-[100px]"
                >
                  <img
                    src={cardIcon}
                    alt={title}
                    className="w-10 md:w-14 h-10 md:h-14 mb-3 block"
                  />
                  <h3 className="font-bold text-sm md:text-lg text-[#000] leading-[30px] block">
                    {title}
                  </h3>
                </div>
              ))}
            </div>

            <p className="text-[30px] mt-6 md:mt-10 font-bold text-secondary mx-3 md:mx-0">
              Technologies
            </p>

            <div className="flex flex-wrap md:gap-4 mt-5 mx-3 md:mx-0">
              {uiTechCardData.map(({ id, cardIcon, title }) => (
                <div
                  key={id}
                  className="min-w-[60px] md:min-w-[100px] mr-4 md:mr-0 flex flex-col rounded-[8px] h-30"
                >
                  <img
                    src={cardIcon}
                    alt={title}
                    className="w-12 md:w-14 h-12 md:h-14 mb-3 block"
                  />
                  <h3 className="font-semibold text-lg md:text-xl ml-1 text-[#000] leading-[30px] block">
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div
            className="lg:max-w-lg lg:w-1/2 md:w-1/2 w-[95%] bg-cover bg-center h-full flex justify-center items-center rounded-3xl"
            style={{
              backgroundImage: `url(${bgImage})`,
              padding: "70px 0 100px 0",
            }}
          >
            <img
              className="object-cover object-center"
              alt="hero"
              src={designSection}
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
