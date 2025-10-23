import React from "react";
import Slider from "../components/Slider";
import Services from "../components/Services";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import Tips from "../components/Tips";
import Experts from "../components/Experts";

const Home = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 justify-center items-center mt-6 md:mt-2 gap-6 lg:gap-1">
        <Banner />
        <Slider />
      </div>
      <Services />
      <Experts />
      <Stats />
      <Tips />
    </div>
  );
};

export default Home;
