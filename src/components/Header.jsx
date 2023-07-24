import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className="header">
      <h3 className="header-logo">
        <a href="#home" className="link">
          <span>contact</span>
        </a>
      </h3>
      <div className={`header-nav ${showMenu ? "show" : ""}`}>
        <a href="#home" className="header-nav-item">
          Home
        </a>
        <a href="#about" className="header-nav-item">
          About
        </a>
        <a href="#contact" className="header-nav-item">
          contact
        </a>
      </div>
      <div
        className={`hamburger-icon ${showMenu ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`bar ${showMenu ? "change1" : ""}`}></div>
        <div className={`bar ${showMenu ? "change2" : ""}`}></div>
        <div className={`bar ${showMenu ? "change3" : ""}`}></div>
      </div>
    </div>
  );
};

export default Header;
