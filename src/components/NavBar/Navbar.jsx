import React from "react";
import "./Navbar.css";
import Profile from "../../assests/profile.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <a className="navbar-brand fs-3 fw-bold text-danger" href="#">
        QuickBite
      </a>
      <img
        className="Profile"
        src={Profile}
        alt=""
        height={40}
        width={40}
        style={{ borderRadius: "50px" }}
      />
    </div>
  );
};

export default Navbar;
