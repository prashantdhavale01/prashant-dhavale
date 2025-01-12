import React from "react";
import "../styles/MobileNavbar.scss";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import behance from "../assets/behanceNav.png";

const MobileNavbar = () => {
  return (
    <section className="mobileNav__section d-md-none d-block">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-12">
            <p className="gray__secondary__color text-center find-me-title mb-0">
              Find me in:
            </p>
          </div>
        </div>
        <div className="row icon-row">
          <div className="col-4">
            <a
              href="https://www.linkedin.com/in/prashant01/"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="img-fluid" />
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://github.com/prashantdhavale01"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" className="img-fluid" />
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://www.behance.net/prashantdhavale01"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={behance} alt="Behance" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileNavbar;
