import React from "react";
import SocialLinks from "./SocialLinks";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
const Contact = props => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Send an email to {''}
              <span className="mail">
                andrew32118@gmail.com
              </span>
              :
            </p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};
export default Contact;

