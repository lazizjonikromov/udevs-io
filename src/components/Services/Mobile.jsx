import React from "react";
// card icons
import iosIcon from "../../assets/icons/apple.svg";
import androidIcon from "../../assets/icons/android.svg";
import crossplatformIcon from "../../assets/icons/crossplatform.svg";

// tech card icons
import swiftIcon from "../../assets/icons/swift.svg";
import kotlinIcon from "../../assets/icons/kotlin.svg";
import flutterIcon from "../../assets/icons/flutter.svg";

import mobileSection from "../../assets/images/mobile-section.png";
import bgImage from "../../assets/images/bg-of-image.png";
import backgroundImage from "../../assets/images/home-bg.jpg";

const mobileCardData = [
  {
    id: 1,
    cardIcon: iosIcon,
    title: "iOS",
    cardType: "science",
  },
  {
    id: 2,
    cardIcon: androidIcon,
    title: "Android",
    cardType: "science",
  },
  {
    id: 3,
    cardIcon: crossplatformIcon,
    title: "Crossplatform",
    cardType: "science",
  },
];

const mobileTechCardData = [
  {
    id: 1,
    cardIcon: swiftIcon,
    title: "Swift",
  },
  {
    id: 2,
    cardIcon: kotlinIcon,
    title: "Kotlin",
  },
  {
    id: 3,
    cardIcon: flutterIcon,
    title: "Flutter",
  },
];

const Mobile = () => {
  return (
    <section
      className="section bg-cover bg-center"
      id="mobile"
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
                Development of mobile applications
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
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4 mt-5 mx-3 md:mx-0">
              {mobileCardData.map(({ id, cardIcon, title }) => (
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
              {mobileTechCardData.map(({ id, cardIcon, title }) => (
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
              padding: "40px 0 50px 0",
            }}
          >
            <img
              className="object-cover object-center"
              alt="hero"
              src={mobileSection}
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
