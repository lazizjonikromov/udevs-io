import React from "react";
import frontendIcon from "../../assets/icons/frontend.svg";
import backendIcon from "../../assets/icons/backend.svg";
import architectureIcon from "../../assets/icons/architecture.svg";
import devopsIcon from "../../assets/icons/devops.svg";
import uiIcon from "../../assets/icons/ui-ux.svg";
import qaIcon from "../../assets/icons/qa.svg";

import consultingSection from "../../assets/images/it-consulting-section.svg";
import bgImage from "../../assets/images/bg-of-image.png";
import backgroundImage from "../../assets/images/home-bg.jpg";

const consultingCardData = [
  {
    id: 1,
    cardIcon: frontendIcon,
    title: "Frontend",
    cardType: "science",
  },
  {
    id: 2,
    cardIcon: backendIcon,
    title: "Backend",
    cardType: "science",
  },
  {
    id: 3,
    cardIcon: architectureIcon,
    title: "Architecture",
    cardType: "science",
  },
  {
    id: 4,
    cardIcon: devopsIcon,
    title: "DevOps",
    cardType: "science",
  },
  {
    id: 5,
    cardIcon: uiIcon,
    title: "UX/UI",
    cardType: "science",
  },
  {
    id: 6,
    cardIcon: qaIcon,
    title: "QA",
    cardType: "science",
  },
];

const Consulting = () => {
  return (
    <section
      className="section bg-cover bg-center"
      id="consulting"
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
                IT consulting
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
              We can improve the qualifications of your employees thereby
              increasing the efficiency of your company
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4 mt-5 mx-3 md:mx-0">
              {consultingCardData.map(({ id, cardIcon, title }) => (
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
          </div>
          <div className="lg:max-w-lg lg:w-1/2 md:w-1/2">
            <img
              className="object-cover object-center"
              alt="hero"
              src={consultingSection}
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
