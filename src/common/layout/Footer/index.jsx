import React from "react";

import logo from "common/assets/images/footer-logo.png";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-flex  align-items-center flex-wrap footer_resp">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} by PEPE Land. All rights reserved!
          </div>
        </div>
      </div>
    </div>
  );
};
