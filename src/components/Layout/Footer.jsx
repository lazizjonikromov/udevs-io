import { Typography } from "@material-tailwind/react";
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  footerAboutData,
  footerPortifolioData,
  footerServicesData,
} from "../../utils/footer";
import { Link } from "react-scroll";
import logo from "../../assets/icons/logo.svg";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="pt-5 md:pt-14 bg-bgCard text-secondary text-lg font-medium mx-3 md:mx-0">
      <div className="container mx-auto">
        <div className="md:flex md:justify-center">
          <img src={logo} alt="" className="" />
        </div>
        <div className="mx-auto flex flex-col md:flex-row justify-between gap-8 py-12">
          {/* About Section */}
          <div>
            <Typography variant="h6" className="font-semibold text-lg mb-4">
              About Us
            </Typography>
            <ul className="flex flex-col gap-2">
              {footerAboutData.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    smooth={true}
                    duration={500}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <Typography variant="h6" className="font-semibold text-lg mb-4">
              Services
            </Typography>
            <ul className="flex flex-col gap-2">
              {footerServicesData.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    smooth={true}
                    duration={500}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Section */}
          <div>
            <Typography variant="h6" className="font-semibold text-lg mb-4">
              Portfolio
            </Typography>
            <ul className="flex flex-col gap-2">
              {footerPortifolioData.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    smooth={true}
                    duration={500}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center border-t border-primary border-opacity-30 py-8 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-primary md:mb-0"
          >
            &copy; {currentYear} Udevs. All Rights Reserved.
          </Typography>
          <div className="flex gap-3 text-primary sm:justify-center">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary bg-darkBgCard p-2 rounded-full"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary bg-darkBgCard p-2 rounded-full"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary bg-darkBgCard p-2 rounded-full"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
