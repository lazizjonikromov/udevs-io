import React from "react";
import { Input, Textarea, Typography } from "@material-tailwind/react";
import backgroundImage from "../../assets/images/home-bg.jpg";
import addressItem from "../../utils/contact";
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="section mt-24 md:mt-0 bg-cover bg-center"
      id="contact"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4 mb-5 md:mb-4">
          <div className="w-full px-4">
            <div className="mb-15 lg:mb-14">
              <span className="title text-start mx-3 md:mx-0">
                Contact us
              </span>
            </div>
          </div>
        </div>

        <section className="md:m-5 md:px-24 pt-12 pb-24 border rounded-2xl bg-white shadow-[2px_10px_28px_rgba(75,0,129,0.12)]">
          <div className="container mx-auto text-center">
            <div className="grid grid-cols-1 gap-x-20 md:grid-cols-2">
              <form
                action="#"
                className="flex flex-col gap-5 lg:max-w-[440px] p-2"
              >
                <Typography
                  variant="lead"
                  className="text-left !font-bold !text-dark font-manrope"
                >
                  Leave us a message
                </Typography>
                <div className="h-14">
                  <Input
                    size="lg"
                    type="text"
                    label="Name"
                    labelProps={{
                      className: "contact_label",
                    }}
                    className="contact_input"
                    required
                  />
                </div>
                <div className="h-14">
                  <Input
                    size="lg"
                    type="email"
                    label="Your email"
                    labelProps={{
                      className: "contact_label",
                    }}
                    className="contact_input"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    size="lg"
                    label="Briefly describe your project"
                    labelProps={{
                      className: "contact_label",
                    }}
                    className="contact_input text-xl !h-36"
                  />
                </div>
                <button className="myBtn min-w-[112px] max-w-[248px] !text-xl !leading-[24px] px-[16px] py-[10px]">
                  Send
                </button>
              </form>

              <div className="flex flex-col gap-8 mt-14">
                <div className="flex flex-col gap-5 mx-3 md:mx-0">
                  {addressItem.map((item) => (
                    <div key={item.id} className="flex gap-2 items-center">
                      <img src={item.icon} alt="" className="w-6 h-6" />
                      <a
                        className="text-start"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href}
                      >
                        {item.title}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-8">
                  <div className="flex gap-4 mx-3 md:mx-0">
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-red-600 transition-colors"
                    >
                      <FaYoutube className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-pink-600 transition-colors"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-blue-600 transition-colors"
                    >
                      <FaFacebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-blue-400 transition-colors"
                    >
                      <FaTwitter className="w-6 h-6" />
                    </a>
                  </div>

                  <iframe
                    src="https://yandex.com/map-widget/v1/?um=constructor%3A7ca26e40b93ebc46d15bad846f85d1b7e00f167fb123e4d14ca535dfc64a7c41&amp;source=constructor"
                    width="400px"
                    height="200px"
                    title="Udevs location"
                    aria-hidden="false"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
