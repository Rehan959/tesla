import "./Header.css";
import Logo from "../assets/teslaLogoSmall.svg";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src={Logo} alt="" />
      </div>
      <div className="header_center">
          <p>Model S</p>
          <p>Model 3</p>
          <p>Model X</p>
          <p>Model Y</p>
          <p>Solar Roof</p>
          <p>Solar Panel</p>
      </div>
      <div className="header_right">
          <p>Shop</p>
          <p>Account</p>
      </div>
    </div>
  );
};

export default Header;
