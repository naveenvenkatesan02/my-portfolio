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
            For the past one year, I've been working as an automation tester
            using Selenium and now I'm looking forward to change my domain to
            development. I'm quite well-versed in both frontend and backend
            development, making me a great asset for anyone seeking full-stack
            developer or any developer expertise. Apart from that, I leverage my
            knowledge to be creative whenever I get the chance to stand out from
            the rest of the competitors. I'm more of a conceptual learner, so I
            can adapt quickly to any new technology. Overall, I believe I will
            add great value to any organization that I work for.
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
