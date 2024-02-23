import React from "react";
import Navbar from "../components/Navbar";
import FrontEnd from "./Skills/FrontEnd";
import BackEnd from "./Skills/BackEnd";
import Programming from "./Skills/Programming";
import Testing from "./Skills/Testing";
import AutomationTesting from "./Skills/AutomationTesting";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="text-white max-w-[800px] mt-[-96px] mb-[20px] w-full h-full mx-auto pl-2 font-main">
        <div className="pt-[150px]">
          <h1 className="text-[#00df9a] uppercase text-3xl">About me</h1>
          <p>
            Developers are individuals who specialize in creating software
            applications, websites, or other technological solutions. They
            typically possess skills in programming languages such as Python,
            Java, JavaScript, C++, and many others. Developers may work in
            various fields such as web development, mobile app development, game
            development, artificial intelligence, or data science.
          </p>
        </div>
        <div className="pt-10 ml-[100px] mr-[100px]">
          <h1 className="text-[#00df9a] uppercase text-3xl text-center border-b ">
            Skills
          </h1>
        </div>
        <FrontEnd />
        <BackEnd />
        <Programming />
        <AutomationTesting />
        <Testing />
        <div className="text-white max-w-[800px] pl-2 font-main">
          <div className="pt-10">
            <h1 className="text-[#00df9a] uppercase text-3xl">Key Expertise</h1>
          </div>
          <ul className="list-disc pl-6 pt-2 pb-3">
            <li>
              Good knowledge on HTML, CSS, and JavaScript for creating
              responsive and interactive web applications
            </li>
            <li>
              Familiar with popular frameworks and libraries such as React.js
              and Node.js
            </li>
            <li>Basic knowledge of database systems like SQL or MongoDB</li>
            <li>
              Good knowledge on testing techniques such as Functional testing,
              Regression testing and Integration testing
            </li>
            <li>
              Understanding various testing methodologies such as black-box
              testing, white-box testing, regression testing and exploratory
              testing
            </li>
            <li>
              Effective communication, collaboration, time management to deliver
              quality product on time
            </li>
          </ul>
        </div>
        <div className="border-t">
          <ul className="text-white flex pt-10 justify-center mt-[-20px]">
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
        </div>
        <div className="mt-[-10px] mb-[30px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
