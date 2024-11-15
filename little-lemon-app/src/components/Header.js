import React from "react";

import Nav from "./Nav";
import menu from "../images/menu.png";
import SiteLogo from "../images/little-lemon-logo.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-8 col-md-4">
            <div className="site-logo">
              <img src={SiteLogo} alt="Little Lemon Logo" />
            </div>
          </div>
          <div className="col-4 col-md-8 text-right align-content-center">
            <div className="navigation-menu">
              <Nav />
            </div>
            <div className="mobile-menu">
              <img src={menu} alt="menu" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
