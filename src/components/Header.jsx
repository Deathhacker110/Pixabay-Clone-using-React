import React from "react";
let Header = () => {
  return (
    <header className="navbar">
      <div className="logo-icon">
        <img src="pixabay-removebg-preview.png" alt="" />
      </div>
      <nav className="nav-links">
        <a href="#" className="nav-link explore">
          Explore
        </a>
        <a href="#" className="nav-link login">
          Log in
        </a>
        <a href="#" className="nav-link join">
          Join
        </a>
        <a href="#" className="upload">
          Upload
        </a>
      </nav>
    </header>
  );
};

export default Header;
