import React, { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  function handleNavbar() {
    setNav(!nav);
  }
  return (
    <div className="text-white flex justify-between  h-24 max-w-[1240px] p-4 items-center mx-auto  ">
      <div className="text-[#00df9a] flex max-w-full">
        <h1 className=" font-logo text-bold text-4xl">N</h1>
        <h2 className=" font-logo pt-4">venkatesan</h2>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="p-4">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="p-4">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div onClick={handleNavbar} className="block md:hidden">
        {nav ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase p-4 ">
          <li className="p-4 border-b border-gray-600">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
