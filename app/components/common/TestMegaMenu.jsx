"use client";

import React, { useState } from "react";
import "./TestMegaMenu.css";

const TestMegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = (event) => {
    event.stopPropagation(); // Prevent event from bubbling to the document
    setIsOpen((prev) => !prev); // Toggle dropdown
  };

  const handleCloseDropdown = () => {
    setIsOpen(false); // Close dropdown
  };

  // Close dropdown if clicked outside of the menu
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("menu-dropdown");
      if (menu && !menu.contains(event.target)) {
        handleCloseDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="parent">
        <div className="menu" tabIndex={0} onClick={handleToggleDropdown}>
          Click Me!
        </div>

        {isOpen && (
          <ul className="dropdown open" id="menu-dropdown">
            <li>Computers</li>
            <li>
              <a href="https://dealha.com">Shopping Deals</a>
            </li>
            <li className="dropdown-submenu">
              Mobiles
              <ul className="dropdown">
                <li>Apple</li>
                <li>Samsung</li>
                <li>Nokia</li>
              </ul>
            </li>
            <li>Laptops</li>
            <li>Tablets</li>
            <hr />
            <li className="dropdown-submenu">
              Accessories
              <ul className="dropdown">
                <li className="dropdown-submenu">
                  Mouse
                  <ul className="dropdown">
                    <li>Logitech</li>
                    <li>Asus</li>
                  </ul>
                </li>
                <li>Keyboard</li>
                <li>Pendrive</li>
                <li>Routers</li>
              </ul>
            </li>
            <li>Apparels</li>
            <li>Footwear</li>
            <hr />
            <li>Electronics</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default TestMegaMenu;
