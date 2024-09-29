import React from "react";
import teamIcon from "../../assets/icons/team.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import erpIcon from "../../assets/icons/erp-system.svg";
import experienceIcon from "../../assets/icons/expirence.svg";
import settingIcon from "../../assets/icons/setting.svg";
import camputerIcon from "../../assets/icons/computer.svg";

const servicesCardData = [
  {
    id: 1,
    icon: teamIcon,
    title: "Team",
  },
  {
    id: 2,
    icon: phoneIcon,
    title: "Development of mobile applications",
  },
  {
    id: 3,
    icon: erpIcon,
    title: "Development and implementation ERP systems",
  },
  {
    id: 4,
    icon: experienceIcon,
    title: "User interface, User experience design",
  },
  {
    id: 5,
    icon: settingIcon,
    title: "Optimization IT consulting infrastructure",
  },
  {
    id: 6,
    icon: camputerIcon,
    title: "IT consulting",
  },
];

const Services = () => {
  return (
    <section className="section" id="directs">
      <div className="container">
        <div className="flex flex-wrap -mx-4 mb-10 md:mb-4">
          <div className="w-full px-4">
            <div className="mb-15 lg:mb-14">
              <span
                className="title text-center md:text-start"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Our Services
              </span>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap -mx-4 px-4 md:px-0"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {servicesCardData.map(({ id, icon, title }) => (
            <div key={id} className="w-1/2 lg:w-1/3 px-2 md:px-4">
              <div className="p-4 md:p-8 rounded-[8px] bg-bgCard mb-4 md:mb-8 h-44 md:h-52">
                <div className="flex flex-col">
                  <img src={icon} alt={title} className="w-9 h-9 mb-6" />
                  <h3 className="font-bold text-base md:text-xl text-secondary leading-[20px] md:leading-[30px]">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
