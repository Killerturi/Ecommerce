import React from "react";

const Heading = ({ heading }) => {
  return (
    <>
      <div className="flex gap-2 text-lg mb-4 items-center">
        <h1 className="text-2xl font-bold pl-8">{heading}</h1>
        <span className="text-xl font-bold text-gray-400">View All</span>
      </div>
    </>
  );
};

export default Heading;
