import React from "react";
import { VscError } from "react-icons/vsc";

const Error = (message) => {
  return (
    <div role="alert" className="alert alert-error alert-soft">
      <span>
        <VscError />
        {message}
      </span>
    </div>
  );
};

export default Error;
