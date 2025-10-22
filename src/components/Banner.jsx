import React from "react";
import "animate.css";
import logo from "../../public/logo.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-200 py-10 shadow-inner rounded-2xl w-fit mx-auto p-6 outline-3 outline-offset-2 outline-dashed outline-amber-600">
      <h2 className="flex items-center justify-center gap-2 text-4xl font-bold animate__animated animate__rubberBand">
        <img
          src={logo}
          alt="logo"
          className="h-10 w-10 drop-shadow-md hover:animate__animated hover:animate__pulse"
        />
        <span className="text-gray-800 tracking-wide">
          <span className="text-amber-600">Warm</span>
          Paws
        </span>
      </h2>

      <p className="animate__animated animate__fadeInUp text-center text-lg md:text-xl mt-3 text-gray-700 italic">
        Cozy Care for Your Furry Companion 🐶🐱
      </p>

      <div className="mt-4 mx-auto w-40 h-1 rounded-full bg-amber-400 animate__animated animate__fadeIn"></div>
    </div>
  );
};

export default Banner;
