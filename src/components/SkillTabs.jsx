// import { MotionValue, scale } from "framer-motion";
import React from "react";
import { MdOpacity } from "react-icons/md";

const SkillTabs = ({ skillTabs, activeTab, onChange }) => {
  console.log(skillTabs, activeTab, onChange);
  const getActiveStyle = (value) => {
    return activeTab === value
      ? "text-white bg-img-gradient"
      : "text-blue bg-transparent";
  };
  return (
    <div className="flex items-center justify-center my-10">
      <div className="bg-[#d7f6ff] rounded-2xl sm:rounded-full flex-col flex sm:flex-row py-2">
        {skillTabs.map((skill, i) => (
          <button
            // initial={{ MdOpacity: 0.8, scale: 1 }}
            onClick={() => onChange(skill.value)}
            key={i}
            className={`text-blue-700 px-4 sm:px-6 py-2   text-lg font-bold rounded-full hover:scale-105  transition-all duration-300 ease-in-out mx-2 ${getActiveStyle(
              skill.value
            )}`}
          >
            {skill.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillTabs;
