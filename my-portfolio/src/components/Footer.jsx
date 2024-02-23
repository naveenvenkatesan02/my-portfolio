import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white flex justify-center sm:p-2 md:p-3">
      <div className="relative">
        <div className=" absolute -inset-0.5 bg-[#00df9a] rounded-full blur opacity-75"></div>
        <div className="text-[#00df9a] relative w-[270px] px-7 py-4 rounded-full h-[50px] bg-black flex leading-none justify-between items-center ">
          <Link to={"http://www.linkedin.com/in/naveenvenkatesan0210"}>
            <FaLinkedinIn />
          </Link>
          <Link to={"https://www.facebook.com/jackman0226/"}>
            {" "}
            <FaFacebookF />
          </Link>
          <Link to={"https://www.instagram.com/itz_jack_official/"}>
            {" "}
            <FaInstagram />
          </Link>
          <Link to={"https://twitter.com/naveenben55"}>
            {" "}
            <FaXTwitter />
          </Link>
          <Link to={"https://github.com/naveenvenkatesan02"}>
            {" "}
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
