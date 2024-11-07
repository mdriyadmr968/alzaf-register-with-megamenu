"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import HeroCategories from "./HeroCategories";
import TestMegaMenu from "./TestMegaMenu";

const Navbar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="flex items-center justify-between max-w-full md:max-w-5xl mx-auto">
        <div className="">
          <TestMegaMenu />
          {/* <HeroCategories /> */}
        </div>

        <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full h-12 border rounded-md pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M13 16h-1v-1h-1v1H9v-1h2V9H9V8h1V6h2v2h1V6h1v2h1V9h-1v1h-1v6h1v1h1v-1h2v1m-1-2a9 9 0 119-9 9 9 0 01-9 9z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white rounded-md px-4 py-2">
            Login
          </button>
          <button className="bg-gray-300 rounded-md px-4 py-2">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
