import React, { useState } from "react";
import toolsCardData, { tools } from "../../utils/tools";

const Tools = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (value) => {
    setSelected((prev) => (prev === value ? "" : value));
  };

  return (
    <section id="tools" className="section bg-bgCard">
      <div className="container">
        <div className="flex flex-wrap -mx-4 mb-5 md:mb-4">
          <div className="w-full px-4">
            <div className="mb-15 lg:mb-10">
              <span
                className="title mx-3 md:mx-0 pt-14 md:pt-0"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Tools
              </span>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap gap-6 mb-6 mx-6 md:mx-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {tools.map((tool) => (
            <label
              key={tool}
              htmlFor={tool.toLowerCase()}
              className="flex gap-2 items-center cursor-pointer w-[45%] md:w-auto"
            >
              <div className="relative grid place-items-center">
                <input
                  type="checkbox"
                  name={tool.toLowerCase()}
                  id={tool.toLowerCase()}
                  value={tool.toLowerCase()}
                  checked={selected === tool.toLowerCase()}
                  onChange={() => handleChange(tool.toLowerCase())}
                  className="appearance-none w-6 h-6 border-2 border-primary rounded-full cursor-pointer"
                />
                <div
                  className={`absolute w-4 h-4 rounded-full bg-primary transition-all duration-200 ${
                    selected === tool.toLowerCase() ? "scale-100" : "scale-0"
                  }`}
                />
              </div>
              <span className="text-base leading-3 md:leading-8 text-[#000] font-bold">
                {tool}
              </span>
            </label>
          ))}
        </div>

        <div
          className="grid grid-cols-5 md:grid-cols-12 gap-2 mt-4 mx-3 md:mx-0 pb-16"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {toolsCardData.map(({ id, title, icon, category }) => (
            <ToolCard
              key={id}
              title={title}
              icon={icon}
              isSelected={selected === category.toLowerCase()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolCard = ({ title, icon, isSelected }) => (
  <div
    className={`w-full h-14 md:h-24 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-200 rounded-lg ${
      isSelected ? "bg-[#ced6ee]" : "bg-white"
    } opacity-100`}
  >
    <img
      src={icon}
      alt={`${title} icon`}
      className="block w-4 h-4 md:w-6 md:h-6"
    />
    <div className="whitespace-nowrap text-[9px] md:text-xs leading-3 text-black mt-1 md:mt-3 w-full max-w-[50px] md:max-w-[90px] text-ellipsis text-center">
      {title}
    </div>
  </div>
);

export default Tools;
