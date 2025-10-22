import React from "react";

const Stats = () => {
  return (
    <div className="mt-8">
      <h1>
        Why <span className="text-amber-600">Choose US?</span>
      </h1>
      <div className="grid grid-cols-3 justify-items-center py-4 rounded-2xl text-xl font-semibold">
        <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-200 outline-2 outline-offset-2 outline-dashed outline-amber-600 p-6 rounded-xl flex flex-col gap-1 text-center w-md">
          <div className="text-4xl text-amber-600">500+</div>
          <div>Happy Pets Served</div>
        </div>
        <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-200 outline-2 outline-offset-2 outline-dashed outline-amber-600 p-6 rounded-xl flex flex-col gap-1 text-center w-md">
          <div className="text-4xl text-amber-600">30+</div>
          <div>Certified Groomers & Vets</div>
        </div>
        <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-200 outline-2 outline-offset-2 outline-dashed outline-amber-600 p-6 rounded-xl flex flex-col gap-1 text-center w-md">
          <div className="text-4xl text-amber-600">1200+</div>
          <div>5-Star Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
