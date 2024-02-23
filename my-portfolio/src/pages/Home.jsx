import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mt-[-100px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
