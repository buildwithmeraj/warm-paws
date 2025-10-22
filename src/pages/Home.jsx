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
      <div className="grid grid-cols-2 justify-center items-center mt-2">
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
