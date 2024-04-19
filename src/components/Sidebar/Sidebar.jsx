import React from "react";
import "./Sidebar.css";
import {
  faBagShopping,
  faPlus,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink
          to="/add"
          className="sidebar-option text-dark"
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon
            icon={faPlus}
            size="lg"
            style={{ color: "#000000" }}
          />
          <p>Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className="sidebar-option text-dark"
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon
            icon={faBagShopping}
            size="lg"
            style={{ color: "#000000" }}
          />
          <p>List Items</p>
        </NavLink>
        <NavLink
          to="/order"
          className="sidebar-option text-dark"
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon
            icon={faTruck}
            size="lg"
            style={{ color: "#000000" }}
          />
          <p>Order</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
