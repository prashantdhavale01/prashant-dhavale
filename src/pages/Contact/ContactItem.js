import React from "react";

const ContactItem = ({ contact }) => (
  <div className="col-md-6 mt-5">
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-2 d-flex justify-content-center">
            <img
              src={contact.icon}
              alt="icon"
              className="img-fluid"
              width={56}
              height={56}
            />
          </div>
          <div className="col-md-10">
            <h6 className="gray__secondary__color text-md-start text-center">
              {contact.name}
            </h6>
            {contact.link && (
              <a
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="dark__green__color text-md-start text-center"
              >
                {contact.link}
              </a>
            )}
            {contact.desc && (
              <p className="mb-0 text-white text-md-start text-center">
                {contact.desc}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactItem;
