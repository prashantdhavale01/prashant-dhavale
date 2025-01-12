import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.scss";
import Icon from "../assets/icon.png";
import linkedin from "../assets/linkedinNav.png";
import behance from "../assets/behanceNav.png";
import MobileNavbar from "./MobileNavbar";
import line from "../assets/line.png";

const targetHashes = ["#about_me", "#skills", "#publication"];

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const toggleBodyClass = isCollapsed ? "remove" : "add";
    document.body.classList[toggleBodyClass]("body-no-scroll");

    return () => document.body.classList.remove("body-no-scroll");
  }, [isCollapsed]);

  const isActiveNavLink = (navHash) => location.hash === navHash;

  const isHelloActive = () =>
    (isActiveNavLink("#hello") || location.pathname === "/") &&
    !targetHashes.some((hash) => location.hash === hash);

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);
  const handleNavLinkClick = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  };

  return (
    <section
      className={`navbar__section ${
        isCollapsed ? "navbar-collapsed-border" : ""
      }`}
      id="/"
    >
      <div className="container p-0">
        <div className="row">
          <div className="col-md-12">
            <nav
              className="navbar navbar-expand-lg p-0"
              style={{ height: isCollapsed ? "auto" : "100vh" }}
            >
              <div className="container p-0 d-flex justify-content-between">
                <a className="navbar-brand text-white mx-3" href="/">
                  <img
                    src={Icon}
                    alt="Icon"
                    className="img-fluid rounded-circle me-2 object-contain"
                    width={28}
                    height={28}
                  />
                  Prashant-Dhavale
                </a>
                <img src={line} className="img-fluid line d-md-none d-block" alt="line" />
                <button
                  className={`navbar-toggler mx-3 ${
                    isCollapsed ? "" : "collapsed"
                  }`}
                  type="button"
                  aria-expanded={!isCollapsed}
                  aria-label="Toggle navigation"
                  onClick={toggleNavbar}
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${
                    !isCollapsed ? "show" : ""
                  }`}
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li
                      className={`nav-item ${isHelloActive() ? "active" : ""}`}
                    >
                      <HashLink
                        to="/#hello"
                        className="nav-link text-light"
                        onClick={handleNavLinkClick}
                        scroll={(el) =>
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                        }
                      >
                        _hello
                      </HashLink>
                    </li>
                    {targetHashes.map((hash) => (
                      <li
                        key={hash}
                        className={`nav-item ${
                          isActiveNavLink(hash) ? "active" : ""
                        }`}
                      >
                        <HashLink
                          to={`/${hash}`}
                          className="nav-link text-light"
                          onClick={handleNavLinkClick} // Collapse navbar on link click
                          scroll={(el) =>
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            })
                          }
                        >
                          {`_${hash.substring(1)}`}
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                  <div className="d-md-flex d-none">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          href="https://www.linkedin.com/in/prashant01/"
                          className="nav-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={linkedin}
                            alt="LinkedIn"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="https://www.behance.net/prashantdhavale01"
                          className="nav-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={behance}
                            alt="Behance"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="nav-item">
                        <HashLink
                          to="/contact-me"
                          className="nav-link contact__navbar"
                          onClick={handleNavLinkClick} // Collapse navbar on link click
                        >
                          _contact
                        </HashLink>
                      </li>
                    </ul>
                  </div>
                  <MobileNavbar />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
