import React from "react";
import "../../styles/Contact.scss";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <section className="contact__section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-white text-md-start text-center">Contact Me</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
