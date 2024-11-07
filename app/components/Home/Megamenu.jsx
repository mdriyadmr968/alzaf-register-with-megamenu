"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon, RightIcon, HamburgerIcon } from "../icons/icons";
import { IoGridOutline } from "react-icons/io5";
import CustomSlider from "../slider/CustomSlider";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const API_URL = "https://api.shope.com.bd/api/v1/public/hero-categories";

const Megamenu = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [subSubMenu, setActiveSubSubMenu] = useState(null);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [menus, setMenus] = useState([]);

  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowSideMenu(false);
    }
  };

  const fetchMenus = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMenus(data);
    } catch (error) {
      console.error("Failed to fetch menus:", error);
    }
  };

  useEffect(() => {
    fetchMenus(); 
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderSubItems = (submenu) => {
    return submenu.childrens && submenu.childrens.length > 0 ? (
      <ul className="w-full absolute top-0 bottom-0 max-w-[230px] bg-white p-[6px] flex flex-col gap-y-3 duration-200 border-l-2 left-[95%] pt-[100px] md:pt-0">
        {submenu.childrens.map((subsubmenu) => (
          <li
            key={subsubmenu.id}
            className="hover:text-special flex items-center gap-2 text-secondary cursor-pointer"
          >
            <span>
              <img
                src={subsubmenu.icon}
                alt={subsubmenu.title}
                className="w-4 h-4"
              />
            </span>
            <p className="capitalize">{subsubmenu.title}</p>
            {subsubmenu.childrens && subsubmenu.childrens.length > 0 && (
              <RightIcon />
            )}
            {subSubMenu === subsubmenu.id && renderSubItems(subsubmenu)}
          </li>
        ))}
      </ul>
    ) : null;
  };

  return (
    <div className="relative md:mt-[12px]">
      <CustomSlider />
      <div className="custom-container w-full top-0 z-[9999]" ref={menuRef}>
        <ul
          className={`w-full fixed ${
            showSideMenu ? "left-0 md:left-auto" : "left-[-100%] md:left-auto"
          } 
          md:absolute top-0 max-w-[230px] bg-white p-[10px] md:p-[6px] flex flex-col duration-200 gap-y-3 bottom-0 md:bottom-auto z-[99999]`}
        >
          {/* Close button for small devices */}
          <div className="flex md:hidden w-full justify-between border-b pt-[10px] pb-[11px] items-center mb-[10px]">
            <h1 className="pb-[10px] text-[18px] font-semibold text-primary">
              Menu
            </h1>
            <button
              onClick={() => setShowSideMenu(false)}
              className="cursor-pointer hover:text-special text-gray-500 pb-[10px]"
            >
              <IoClose size={26} />
            </button>
          </div>

          {/* Fetch and render menus dynamically */}
          {menus.map((menu) => (
            <li
              key={menu.id}
              className="hover:text-special flex items-center gap-2 text-secondary cursor-pointer"
              onMouseEnter={() => setActiveSubMenu(menu.id)}
              onMouseLeave={() => setActiveSubMenu(null)}
            >
              <span>
                <img src={menu.icon} alt={menu.title} className="w-4 h-4" />
              </span>
              <p className="flex items-center justify-between pr-5 w-full capitalize">
                <span>{menu.title}</span>
                {menu.childrens && menu.childrens.length > 0 && <RightIcon />}
              </p>
              {activeSubMenu === menu.id && renderSubItems(menu)}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg md:hidden z-[9999] top-[100px] fixed">
        <ul className="p-2 mx-auto max-w-[400px] flex items-center justify-between">
          <li
            onClick={() => setShowSideMenu(!showSideMenu)}
            className={`${
              showSideMenu ? "text-special" : "text-[#707070]"
            } cursor-pointer hover:text-special duration-100 font-medium flex flex-col items-center`}
          >
            <HamburgerIcon />
            <span>Menu</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Megamenu;
