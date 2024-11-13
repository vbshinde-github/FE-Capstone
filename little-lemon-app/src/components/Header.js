import React from "react";

import Nav from "./Nav";
import SiteLogo from "../images/little-lemon-logo.svg";

function Header() {
  return (
    <header>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img src={SiteLogo} alt="Little Lemon Logo" />
          </div>
          <div class="col-6">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
