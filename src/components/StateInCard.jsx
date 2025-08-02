import React from "react";

const StateInCard = ({ count, label }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-5 bg-img-gradient rounded-2xl p-5 text-white">
      <p className="text-4xl md:text-5xl font-medium">{count}</p>
      <p className="text-md md:text-lg ">{label}</p>
    </div>
  );
};

export default StateInCard;
