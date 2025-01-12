import React from "react";
import contactImage from "../../assets/contact.png";
import email from "../../assets/email.png";
import "../../styles/ContactMe.scss";

const ContactMe = () => {
  return (
    <section className="contact__me__section">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <img src={contactImage} alt="" />
          </div>
          <div className="col-m-12 text-center mt-5">
            <h5 className="gray__color">
              Empower Your Projects with Precision Code
            </h5>
            <h1 className="text-white fw-bold mt-md-3 mt-5">
              Reach Out for Expert Development Solutions!
            </h1>
            <h6 className="dark__green__color mt-4">
              <img src={email} alt="email" className="img-fluid mx-1" /> prashantdhavale01@gmail.com
            </h6>
          </div>
          <div className="col-md-12 contact__footer">
            <h6 className="dark__green__color mt-4 text-center">
              ©2025 | Prashant Dhavale
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
