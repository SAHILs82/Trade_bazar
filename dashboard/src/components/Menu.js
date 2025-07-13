import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownopen, setIsProfileDropdownOpen] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownopen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ TextDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            ></Link>
            <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>
              Dashboard
            </p>
          </li>

          <li>
            <Link
              style={{ TextDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            ></Link>
            <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>
              Orders
            </p>
          </li>
          <li>
            <Link
              style={{ TextDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            ></Link>
            <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>
              Holdings
            </p>
          </li>
          <li>
            <Link
              style={{ TextDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            ></Link>
            <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>
              positions
            </p>
          </li>
          <li>
            <Link
              style={{ TextDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            ></Link>
            <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>
              Funds
            </p>
          </li>
          <li>
            <Link
              style={{ TextDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            ></Link>
            <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>
              Apps
            </p>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
