import Link from "next/link";
import { SmallDownArrow } from "../icons/icons";

const TopNav = () => {
  return (
    <div className="py-1 bg-[#F0F0F0] px-5 md:px-0">
      <div className="custom-container flex flex-wrap items-center justify-between ">
        {/* Left items */}
        <div className="w-full md:w-auto">
          <ul className="w-full md:w-auto flex  flex-row justify-between items-center gap-0 md:gap-[37px] ">
            <li className="flex text-primary hover-svg hover:text-special duration-100 items-center gap-[4.17px]">
              <Link href="/">Language</Link>
              <SmallDownArrow />
            </li>
            <li className="flex text-primary hover:text-special duration-100 items-center gap-[4.17px]">
              <Link href="/">Help Center</Link>
            </li>
            <li className="flex text-primary hover:text-special duration-100 items-center gap-[4.17px]">
              <Link href="/">
                Helpline: <span>874928347</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right items */}
        <div className="w-full md:w-auto">
          <ul className="w-full md:w-auto flex  flex-row justify-between items-center gap-0 md:gap-[37px]">
            <li className="flex text-primary hover:text-special duration-100 items-center gap-[4.17px]">
              <Link href="/">Become a Seller</Link>
            </li>
            <li className="flex text-primary hover:text-special duration-100 items-center gap-[4.17px]">
              <Link href="/">Order Track</Link>
            </li>
            <li className="flex text-primary hover:text-special duration-100 items-center gap-[4.17px]">
              <Link href="/signup">Sign up / Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
