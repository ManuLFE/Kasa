import React from "react";

// logo import
import logoFooter from "../design/logofooter.png";

// create variable containing current year
function Footer() {
  const effectiveYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <img src={logoFooter} alt="" className="footer__logo" />
      <p className="footer__text">
        &copy;
        {effectiveYear} Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
