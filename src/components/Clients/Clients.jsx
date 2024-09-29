import React from "react";
import Marquee from "react-fast-marquee";
import { clientsTopData, clientsBottomData } from "../../utils/clients";

const Clients = () => {
  return (
    <div className="w-full h-min pb-20 py-0 md:py-24" id="clients">
      <div className="flex justify-center">
        <div className="container">
          <div className="flex flex-wrap -mx-4 mb-10 md:mb-4">
            <div className="w-full px-4">
              <div className="mb-15 lg:mb-10">
                <span className="title mx-3 md:mx-0 pt-14 md:pt-0">
                  Our clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Logos */}
      <div className="h-[130px] md:h-[175px] flex">
        <Marquee speed={15}>
          {clientsTopData.map((client) => (
            <Logo
              key={client.id}
              src={client.icon}
              alt={`client-${client.id}`}
            />
          ))}
        </Marquee>
      </div>

      {/* Bottom Logos */}
      <div className="h-[130px] md:h-[175px] flex">
        <Marquee speed={15} direction="right">
          {clientsBottomData.map((client) => (
            <Logo
              key={client.id}
              src={client.icon}
              alt={`client-${client.id}`}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;

const Logo = ({ src, alt }) => (
  <div className="flex items-center justify-center md:mx-7 w-[170px] md:w-full px-2 md:px-5 hover:scale-110 transition duration-500">
    <img
      src={src}
      alt={alt}
      className="w-full shadow-[0_0_8px_rgba(0,0,0,0.15)] mt-2 rounded-[24px] object-cover object-top transition-all duration-400 ease-in-out"
    />
  </div>
);
