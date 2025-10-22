import React from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center p-20">
      <BeatLoader color="#d37f00" size={25} />
    </div>
  );
};

export default Loading;
