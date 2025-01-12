import React from "react";
import "../../styles/Publication.scss";
import publication from "../../assets/prashant2.JPG";

const Publication = () => {
  return (
    <section className="publication__section" id="publication">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-white fw-bold text-center">My Publication</h1>
          </div>
        </div>
        <div className="row d-flex flex-row align-items-center">
          <div className="col-md-8 mt-3">
            <h3 className="text-white">📄Research Paper Presentation - <br /> JSPM's AIOCA and JSIMR College</h3>
            <p className="gray__secondary__color mt-3">Participated in academic and research activities at JSPM’s AIOCA (Abacus Institute of Computer Applications) and JSIMR (Jayawantrao Sawant Institute of Management and Research) College.</p>
            <p className="gray__secondary__color mt-3">Presented a research paper at JSIMRAICA’13 International Conference** on the topic of **Cloud Computing.</p>
            <p className="gray__secondary__color">The paper covered key aspects of cloud computing, including:</p>
            <p className="gray__secondary__color">✔ SaaS (Software as a Service) – Cloud-based applications accessible over the internet.  </p>
            <p className="gray__secondary__color">✔ PaaS (Platform as a Service) – Cloud platforms that support application development and deployment.  </p>
            <p className="gray__secondary__color">✔ IaaS (Infrastructure as a Service) – Cloud-based infrastructure services, such as virtual machines and storage.  </p>
          </div>
          <div className="col-md-4">
            <img
              src={publication}
              alt="publication"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publication;
