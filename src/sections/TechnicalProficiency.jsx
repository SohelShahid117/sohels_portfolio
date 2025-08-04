import React, { useState } from "react";
import { skill_tabs, skills } from "../utils/data";
import SkillTabs from "./../components/SkillTabs";
import SkillCard from "./../components/SkillCard";

const TechnicalProficiency = () => {
  const [skillTabs, setSkillTabs] = useState(skills);
  const [activeTab, setActiveTab] = useState("all");
  const handleTabValueChange = (value) => {
    if (value == "all") {
      setSkillTabs(skills);
      setActiveTab("all");
      return;
    }
    const updatedList = skills.filter((skill) => skill.type == value);
    setSkillTabs(updatedList);
    setActiveTab(value);
  };
  console.log(activeTab);
  return (
    <section id="skills" className="bg-[#fbfeff] p-5 mt-10">
      <div className="container mx-auto">
        <div className="w-full  md:w-3/5 mx-auto">
          <h4 className="capitalize w-full  text-2xl md:text-4xl mt-3 bg-img-gradient text-transparent bg-clip-text font-bold text-center">
            Technical Proficiency
          </h4>
          <p className="text-md text-black mt-4 text-center ">
            Technology is vast, and there are so many tools, platforms,
            languages, frameworks coming out in the market. It doesn't matter as
            I am an experienced developer. As a modern developer, I should know
            how to integrate modern technologies and use my technical skills in
            my work to make a good product.
          </p>
        </div>

        <SkillTabs
          skillTabs={skill_tabs}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[420px]">
          {skillTabs.map((skl, i) => (
            <div key={i}>
              <SkillCard
                icon={
                  <skl.icon className="w-10 h-10 text-white bg-img-gradient rounded-2xl p-2" />
                }
                skillName={skl.skill}
                progress={skl.progress}
                description={skl.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
