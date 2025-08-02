import React from "react";

const StateInCard = ({ count, label }) => {
  return (
    <div className="flex  items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out gap-3 md:gap-5 bg-img-gradient rounded-2xl p-5 text-white">
      <p className="text-4xl md:text-5xl font-bold">{count}</p>
      <p className="text-lg md:text-xl font-semibold">{label}</p>
    </div>
  );
};

export default StateInCard;
