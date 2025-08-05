import { MotionValue } from "framer-motion";
import React, { useState } from "react";

const SkillCard = ({ icon, skillName, progress, description }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const maxLength = 150;
  const truncatedContent = description.slice(0, maxLength);
  const shouldShowButton = description.length > maxLength;

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-primaryy p-4">
        <div className="flex gap-3">
          <div className="">{icon}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-md font-semibold text-black">{skillName}</p>
              <p className="text-sm text-primaryy font-medium">{progress} %</p>
            </div>
            <div className="w-full bg-img-gradient h-2 mt-2 relative">
              <div
                className="bg-primaryy h-2 rounded-md"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
        <p className="text-sm md:text-[16px] text-black text-start mt-2">
          {showFullContent ? description : truncatedContent}
          {shouldShowButton && !showFullContent && "..."}
          {shouldShowButton && (
            <button
              onClick={toggleContent}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              {showFullContent ? "Read Less" : "Read More"}
            </button>
          )}
          {/* {truncatedContent}{" "} */}
          {/* <button className="ml-1 text-lg text-white bg-img-gradient px-4 py-2 rounded-full">
            read more ...
          </button> */}
        </p>
      </div>
    </>
  );
};

export default SkillCard;
