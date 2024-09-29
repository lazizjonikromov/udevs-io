import React from "react";
// card icons
import architectureIcon from "../../assets/icons/architecture.svg";
import testingIcon from "../../assets/icons/testing.svg";
import stressTestingIcon from "../../assets/icons/stress-testing.svg";
import loadtestingIcon from "../../assets/icons/loadtesting.svg";
import devopsIcon from "../../assets/icons/devops.svg";
import cloudIcon from "../../assets/icons/cloud.svg";
import ciCdIcon from "../../assets/icons/ci-cd.svg";

import erpSection from "../../assets/images/erp-section.png";
import bgImage from "../../assets/images/bg-of-image.png";

const optimizationCardData = [
  {
    id: 1,
    cardIcon: architectureIcon,
    title: "Architecture",
    cardType: "dark",
  },
  {
    id: 2,
    cardIcon: testingIcon,
    title: "Auto testing",
    cardType: "dark",
  },
  {
    id: 3,
    cardIcon: stressTestingIcon,
    title: "Stress testing",
    cardType: "dark",
  },
  {
    id: 4,
    cardIcon: loadtestingIcon,
    title: "Load testing",
    cardType: "dark",
  },
  {
    id: 5,
    cardIcon: devopsIcon,
    title: "Devops",
    cardType: "dark",
  },
  {
    id: 6,
    cardIcon: cloudIcon,
    title: "Cloud",
    cardType: "dark",
  },
  {
    id: 7,
    cardIcon: ciCdIcon,
    title: "CI / CD",
    cardType: "dark",
  },
];

const Optimization = () => {
  return (
    <section className="section bg-bgCard" id="optimization">
      <div className="container">
        <div className="flex flex-wrap -mx-4 mb-10 md:mb-4">
          <div className="w-full px-4">
            <div className="mb-15 lg:mb-10">
              <span
                className="title mx-3 md:mx-0 pt-14 md:pt-0"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Optimization Infrastructure
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto flex md:flex-row flex-col items-center">
          <div
            className="lg:max-w-lg lg:w-1/2 md:w-1/2 w-[95%] bg-cover bg-center h-full flex justify-center items-center rounded-3xl"
            style={{
              backgroundImage: `url(${bgImage})`,
              padding: "130px 0",
            }}
          >
            <img
              className="object-cover object-center"
              alt="hero"
              src={erpSection}
              data-aos="zoom-in"
            />
          </div>

          <div
            className="lg:flex-grow lg:pl-36 md:w-1/2 gap-5 flex flex-col mb-16 md:mb-0"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text_service">
              Our experienced professionals will help you optimize your
              infrastructure
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4 mt-5 mx-3 md:mx-0">
              {optimizationCardData.map(({ id, cardIcon, title }) => (
                <div
                  key={id}
                  className="min-w-[115px] md:min-w-[150px] flex flex-col px-2 py-2 rounded-[8px] bg-darkBgCard min-h-[100px]"
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
        </div>
      </div>
    </section>
  );
};

export default Optimization;
