import React from "react";

const SectionTitle = ({ base, color, sub, className }) => {
  return (
    <div className={`flex text-center justify-center items-center ${className}`}>
      <div className="my-10">
        <h1 className="text-3xl mb-3 md:text-4xl font-bold">
          {base} 
          <span className="text-secondary"> {color}</span>
        </h1>
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
