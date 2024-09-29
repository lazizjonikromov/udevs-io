import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import teamImage from "../../assets/images/team-section.svg";

const Team = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="team" className="section bg-bgCard">
      <div className="container">
        <div className="flex flex-wrap -mx-4 mb-10 md:mb-4">
          <div className="w-full px-4">
            <div className="mb-15 lg:mb-10">
              <span
                className="title mx-3 md:mx-0 pt-14 md:pt-0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Team
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto flex md:flex-row flex-col-reverse items-center">
          <div
            ref={ref}
            className="lg:flex-grow lg:pr-24 md:w-1/2 gap-5 md:pr-16 flex flex-col md:items-start text-left mb-16 md:mb-0  mx-3 md:mx-0"
          >
            <p
              className="text-base md:text-xl font-medium text-secondary md:mr-16 mt-10 md:mt-0 leading-[30px] md:leading-[40px]"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="text-[80px] md:text-9xl font-bold text-primary">
                {inView && <CountUp end={100} duration={5} />}+
              </div>
              <p className="text-2xl md:text-[40px] font-bold text-secondary">
                Dedicated team
              </p>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-1/2 md:w-1/2 w-5/6" data-aos="zoom-in">
            <img
              className="object-cover object-center"
              alt="hero"
              src={teamImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
