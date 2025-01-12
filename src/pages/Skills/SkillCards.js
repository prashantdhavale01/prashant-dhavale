import React from "react";

const SkillCards = ({ skills }) => {
  return (
    <div className="row justify-content-center">
      {skills.map((skill, index) => (
        <div
          className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4 custom"
          key={index}
        >
          <div className="card h-100">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 d-flex align-items-center">
                  <img
                    src={skill.icon}
                    alt="Skill icon"
                    className="img-fluid me-3"
                    width={32}
                    height={32}
                  />
                  <p className="text-white mb-0">{skill.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;
