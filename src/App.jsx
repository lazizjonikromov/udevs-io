import React, { useEffect } from "react";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Mobile from "./components/Services/Mobile";
import Design from "./components/Services/Design";
import Consulting from "./components/Services/Consulting";
import ErpSystems from "./components/Services/ErpSystems";
import Optimization from "./components/Services/Optimization";
import Tools from "./components/Tools/Tools";
import Clients from "./components/Clients/Clients";
import Delever from "./components/Delever/Delever";
import GoodZone from "./components/GoodZone/GoodZone";
import SmsUz from "./components/SmsUz/SmsUz";
import Iman from "./components/Iman/Iman";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Layout/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Team />
      <div id="services">
        <Mobile />
        <ErpSystems />
        <Design />
        <Optimization />
        <Consulting />
      </div>
      <Tools />
      <Clients />
      <div id="portfolio">
        <Delever />
        <SmsUz />
        <GoodZone />
        <Iman />
      </div>
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
