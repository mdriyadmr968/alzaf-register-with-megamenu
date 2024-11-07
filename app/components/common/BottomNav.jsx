import Link from "next/link";

import {
  CloudServiceIcon,
  FavoriteIcon,
  SearchIcon,
  SearchIconForMobile,
  ShoppingIcon,
  UserIcon,
  CloudIcon,
} from "../icons/icons";

const BottomNav = () => {
  return (
    <div className="mt-[12px] block bg-white pb-3 px-5 md:px-0 w-full md:w-auto ">
      <div className="custom-container w-full md:w-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div>
          <Link href="/">
            <img src="/images/logo.png" alt="" className="w-[60px] md:w-auto" />
          </Link>
        </div>

        {/* Search bar */}
        <div className=" items-center w-full max-w-[704px] rounded-[10px] justify-between hidden md:flex">
          <input
            type="text"
            className="text-[14px] p-[12px] w-full outline-none border-none bg-[#F0F0F0] rounded-l-lg "
            placeholder="Search Product"
          />
          <span className="bg-[#F0F0F0] rounded-r-lg">
            <SearchIcon />
          </span>
        </div>

        {/* User Action Button */}
        <div className="w-full md:w-auto flex justify-end">
          <ul className="flex items-center gap-3">
            <li className="user-action block md:hidden">
              <SearchIconForMobile />
            </li>
            <li className="user-action">
              <UserIcon />
            </li>
            <li className="user-action">
              <FavoriteIcon />
            </li>
            <li className="user-action">
              <ShoppingIcon />
            </li>
            <li className="user-action block md:hidden">
              <CloudIcon />
            </li>
          </ul>
        </div>

        {/* Service Icon */}
        <div>
          <Link href="/">
            <span className="hidden md:block">
              <CloudServiceIcon />        
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
