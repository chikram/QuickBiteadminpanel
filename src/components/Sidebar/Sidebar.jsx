import React from "react";
import "./Sidebar.css";
import {
  faBagShopping,
  faPlus,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="sidebar-option">
          <FontAwesomeIcon
            icon={faPlus}
            size="lg"
            style={{ color: "#000000" }}
          />
          <p>Add Items</p>
        </div>
        <div className="sidebar-option">
          <FontAwesomeIcon
            icon={faBagShopping}
            size="lg"
            style={{ color: "#000000" }}
          />
          <p>List Items</p>
        </div>
        <div className="sidebar-option">
          <FontAwesomeIcon
            icon={faTruck}
            size="lg"
            style={{ color: "#000000" }}
          />
          <p>Order</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
