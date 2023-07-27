import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-52 h-60 m-3 p-3 bg-gray-200"></div>
        ))}
    </div>
  );
};

export default Shimmer;
