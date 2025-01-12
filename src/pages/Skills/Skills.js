import React, { useMemo, useState } from "react";
import SkillsCategoryTabs from "./SkillsCategoryTabs"; // Import CategoryTabs component
import SkillCards from "./SkillCards"; // Import SkillCards component
import { skillList } from "../../utils/Skills";
import "../../styles/Skills.scss";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const categories = [
    "frontend",
    "database",
    "server",
    "backend",
    "design",
    "testing",
  ];

  const filteredSkills = useMemo(
    () => skillList.filter((skill) => skill.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="skills__section" id="skills">
      <div className="container pt-5 pb-5 mb-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="fw-bold text-white">My Skills</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 d-flex justify-content-center skill__tabs">
            <SkillsCategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>
        <div className="row mt-5 d-flex flex-row align-items-center">
          <div className="col-md-12">
            <SkillCards skills={filteredSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
