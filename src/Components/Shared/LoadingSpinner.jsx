import React from "react";

import { ClipLoader } from "react-spinners";
const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <ClipLoader size={40} />
    </div>
  );
};

export default LoadingSpinner;
