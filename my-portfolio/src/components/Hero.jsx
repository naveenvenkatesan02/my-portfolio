import React from "react";
import { ReactTyped } from "react-typed";
import ProfileImg from "./Assests/ProfileImg";

const Hero = () => {
  return (
    <div className="text-white max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center ">
      <div className="p-2">
        <h1 className="">Hello, I'm</h1>
        <h1 className="text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold ">
          Naveen
        </h1>
        <h2 className="text-white md:text-6xl sm:text-5xl text-3xl font-bold ">
          Venkatesan
        </h2>
      </div>
      <div className="flex p-2 text-xl">
        <p>Software</p>
        <ReactTyped className='pl-2' strings={['Developer', 'Tester']} typeSpeed={120} backSpeed={120} loop/>
      </div>
      <div className="ml-[450px] sm:pt-[10px] absolute">
        <ProfileImg/>
      </div>
    </div>
  );
};

export default Hero;
