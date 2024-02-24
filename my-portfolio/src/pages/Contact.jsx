import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ReactTyped } from "react-typed";
import Footer from "../components/Footer";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setMsg("");
    await axios
      .post("https://my-portfolio-api-g8v1.onrender.com/email", {
        name,
        email,
        phone,
        msg,
      })
      .then((res) => {
        console.log(res);

        alert("Mail Sent Successfully");
      })
      .catch((err) => {
        alert("Failed");
        console.log(err);
      });
  }
  return (
    <div>
      <Navbar />
      <div className="text-white max-w-[800px] mt-[-96px] mb-[20px] w-full h-screen  mx-auto pl-2 font-main">
        <div className="pt-[150px]">
          <h1 className="text-[#00df9a] uppercase text-3xl">Contact Me</h1>
        </div>
        <div>
          <form className="flex flex-col text-black" onSubmit={handleSubmit}>
            <div className="py-4">
              {" "}
              <input
                className="p-2 text-black"
                placeholder="Name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="py-4">
              {" "}
              <input
                className="p-2"
                placeholder="Email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="py-4">
              {" "}
              <input
                className="p-2"
                placeholder="Phone No"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
            <div className="py-4">
              {" "}
              <textarea
                className="p-2"
                placeholder="Message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                className="text-white border-[1px] border-white border-solid rounded-[3px] p-1 hover:cursor-pointer"
              ></input>
            </div>
          </form>
        </div>
        <div className="flex flex-col ml-[450px] mt-[-270px]">
          <h1 className="text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold ">
            <ReactTyped strings={["Hire"]} typeSpeed={120} />
          </h1>
          <h2 className="text-white md:text-6xl sm:text-5xl text-3xl font-bold ">
            Me...
          </h2>
        </div>
      </div>
      <div className="mt-[-120px]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
