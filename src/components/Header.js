import logo from "../logo.svg";
import React from "react";

function Header () {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;