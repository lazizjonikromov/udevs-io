import React from "react";
import goodzoneIcon from "../../assets/icons/goodzone-min-icon.svg";
import titleImg from "../../assets/images/goodzone.png";
import goodzoneSection from "../../assets/images/goodzone-section.png";
import backgroundImage from "../../assets/images/home-bg.jpg";
import deleverCardData from "../../utils/delever";

const GoodZone = () => {
  return (
    <section
      className="section bg-cover bg-center"
      id="goodzone"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="mx-auto flex md:flex-row flex-col gap-12 items-center">
          <div className="lg:w-1/2 md:w-1/2 mx-3 md:mx-0">
            <img
              className="object-cover object-center rounded-3xl"
              alt="hero"
              src={goodzoneSection}
              data-aos="zoom-in"
            />
          </div>

          <div
            className="lg:flex-grow md:w-1/2 gap-5 flex flex-col mb-16 md:mb-0"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mx-3 md:mx-0">
                  <img src={titleImg} alt="" />
                </div>
              </div>
            </div>

            <div className="portfolio_icon bg-[rgba(245,0,0,0.2)]">
              <img src={goodzoneIcon} alt="" />
              <span className="text-[#F50000]">E-Commerce</span>
            </div>

            <p className="text_portfolio">
              Goodzone - Internet shop of household appliances in Uzbekistan.
            </p>

            <p className="text_service !font-bold opacity-90 !leading-[0px] !mt-5">
              What we did?
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4 mt-5 mx-3 md:mx-0">
              {deleverCardData.map(({ id, icon, title }) => (
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
        </div>
      </div>
    </section>
  );
};

export default GoodZone;
