import React from "react";
import imanIcon from "../../assets/icons/iman-finance.svg";
import titleImg from "../../assets/icons/iman-title.svg";
import imanSection from "../../assets/images/iman-section.png";
import backgroundImage from "../../assets/images/home-bg.jpg";
import smsuzCardData from "../../utils/smsuz";

const Iman = () => {
  return (
    <section
      className="section bg-cover bg-center"
      id="iman"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="mx-auto flex md:flex-row flex-col-reverse gap-12 items-center">
          <div
            className="lg:flex-grow md:w-1/2 gap-5 flex flex-col mb-16 md:mb-0"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mb-2 mx-3 md:mx-0">
                  <img src={titleImg} alt="" />
                </div>
              </div>
            </div>

            <div className="portfolio_icon bg-[rgba(1,202,176,0.2)]">
              <img src={imanIcon} alt="" />
              <span className="text-[#01CAB0]">Finance</span>
            </div>

            <p className="text_portfolio">
              Iman - It is a mutual financing platform based on the principles
              of Islamic Finance. Buyers, sellers and investors meet here.
            </p>

            <p className="text_service !font-bold opacity-90 !leading-[0px] !mt-5">
              What we did?
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4 mt-5 mx-3 md:mx-0">
              {smsuzCardData.map(({ id, icon, title }) => (
                <div
                  key={id}
                  className="min-w-[115px] md:min-w-[150px] flex flex-col px-2 py-2 rounded-[8px] bg-bgCard min-h-[100px]"
                >
                  <img
                    src={icon}
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

          <div className="lg:w-1/2 md:w-1/2 mx-3 md:mx-0">
            <img
              className="object-cover object-center rounded-3xl"
              alt="hero"
              src={imanSection}
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iman;
