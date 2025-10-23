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
      <title>Home - WarmPaws</title>
      <div className="grid lg:grid-cols-2 justify-center items-center mt-6 md:mt-2 gap-6 lg:gap-1 mx-6 lg:pl-4 lg:pr-2 lg:py-4 lg:bg-gradient-to-r lg:from-sky-200 lg:to-blue-100 lg:bg-white/80 lg:rounded-2xl">
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
