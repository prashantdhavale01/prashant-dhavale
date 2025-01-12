import React from "react";
import { contactList } from "../../utils/Contact";
import ContactItem from "./ContactItem";

const ContactCard = () => {
  return (
    <section className="contact__card__section">
      <div className="container">
        <div className="row">
          {contactList.map((contact, index) => (
            <ContactItem contact={contact} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
