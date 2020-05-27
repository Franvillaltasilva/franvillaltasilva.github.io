import "./Skills.scss";
import React from "react";
import SkillCard from "../../components/SkillCard/SkillCard";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <p className="title">skills</p>
        <div className="skills-list">
          <SkillCard />
        </div>
      </div>
    </>
  );
};

export default Skills;
