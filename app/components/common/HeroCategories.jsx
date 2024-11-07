"use client";

import { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

const HeroCategories = () => {
  const [categories, setCategories] = useState([]);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.shope.com.bd/api/v1/public/hero-categories"
        );
        const data = await response.json();
        setCategories(data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const renderSubCategories = (subCategories) => {
    return (
      <div className="absolute left-0 z-10 w-48 bg-white shadow-lg rounded-md p-2">
        {subCategories.map((sub) => (
          <div
            key={sub.id}
            className="py-1 px-2 hover:bg-gray-200 transition duration-200"
          >
            <a href={sub.link} className="text-sm">
              {sub.title}
            </a>
            {sub.childrens && sub.childrens.length > 0 && (
              <div className="pl-4">{renderSubCategories(sub.childrens)}</div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap md:inline-grid md:grid-cols-3 gap-4">
      <Popover placement="bottom-start" color="secondary">
        <PopoverTrigger>
          <img src="/images/logo.png" alt="logo" className="cursor-pointer" />
        </PopoverTrigger>
        <div className="px-4 py-2">
          <PopoverContent>
            <div className="grid grid-cols-1">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredCategoryId(category.id)}
                  onMouseLeave={() => setHoveredCategoryId(null)}
                >
                  <a
                    href={category.link}
                    className="text-base font-semibold text-left"
                  >
                    {category.title}
                  </a>
                  {hoveredCategoryId === category.id &&
                    category.childrens &&
                    category.childrens.length > 0 &&
                    renderSubCategories(category.childrens)}
                </div>
              ))}
            </div>
          </PopoverContent>
        </div>
      </Popover>
    </div>
  );
};

export default HeroCategories;
