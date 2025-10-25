import React from "react";
import logo from "../assets/logo.png";

const AboutUs = () => {
  return (
    <div className="">
      <div className="hero bg-blue-100 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <div className="container mx-auto px-2 py-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 animate__animated animate__fadeInDown">
                <img
                  src={logo}
                  alt="WarmPaws logo"
                  className="h-12 w-12 drop-shadow-2xl"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                  <span className="text-amber-600">Warm</span>Paws
                </h1>
              </div>

              <h3 className="text-xl font-bold text-gray-700 animate__animated animate__fadeInUp mt-4 mb-2">
                Where Every Paw Finds Warmth
              </h3>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
                WarmPaws was born from a simple belief: our furry companion
                deserve the same comfort and care we give ourselves. What
                started as a small winter pet caring shop has grown into a
                comprehensive pet's comfort destination trusted by thousands of
                pet parents.
              </p>
            </div>
          </div>
          <img
            src="https://i.ibb.co.com/XfcCHnm7/image.png"
            className="w-fit lg:w-[400px] xl:w-[600px] rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
        <div className="container mx-auto px-4 py-4">
          <div className="">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              To provide exceptional care, quality products, and expert guidance
              that keeps pets healthy, happy, and comfortable through every
              season. We're committed to making pet care accessible, affordable,
              and most importantly—filled with love.
            </p>
            <img
              src="https://i.ibb.co.com/8gLzrQK1/image.png"
              alt="WarmPaws logo"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 py-4">
          <div className="">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                It all started on a particularly cold winter evening when our
                founder, Sarah, noticed her rescue dog shivering during their
                evening walk. Despite searching everywhere, she couldn't find
                quality winter gear that was both functional and comfortable for
                her furry companion.
              </p>
              <p>
                That frustration sparked an idea: create a place where pet
                parents could find everything they need to keep their pets cozy,
                healthy, and happy—no matter the season. From that moment,
                WarmPaws was born.
              </p>
              <p>
                Today, we've helped over 500 pets stay warm and comfortable. But
                our journey doesn't end there. We continue to expand our
                services, partner with the best brands, and most importantly,
                listen to our community of pet lovers who inspire us every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
