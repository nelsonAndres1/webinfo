import React from "react";
import SocialLinks from "./SocialLinks";
const Footer = props => {
    return (
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Nelson Andres Agreda.</p>
          <SocialLinks />
        </div>
      </footer>
    );
  };
  export default Footer;