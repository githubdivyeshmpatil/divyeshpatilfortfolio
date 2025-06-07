import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaSkype } from "react-icons/fa";
import bgImage from "../assets/img/home_bg.png"; // Background image

function Hero() {
  return (
  <>
      <h1 className="text-3xl text-left md:text-5xl font-poppins ">Hello, It's Me</h1>
      <h2 className="text-6xl text-left font-extrabold  font-poppins text-blue-300 mt-2">Divyesh Patil</h2>
      <h3 className="text-2xl text-left md:text-3xl font-bold font-poppins mt-2">
        And I'm a{" "}
        <span className="text-orange-400">
        <Typewriter
  words={["Web Developer", "React.js Developer", "JavaScript Developer"]}
  loop={true}
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
/>
        </span>
      </h3>

      {/* Description */}
      <p className="text-gray-300  text-left mt-4 max-w-2xl">
      "I'm a passionate web developer skilled in React.js, JavaScript, and Tailwind CSS, with experience in building responsive, modern, and user-friendly websites. I have worked on live projects, and 1 yers experience.      </p>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-6">
        <FaTwitter className="text-blue-200 text-3xl cursor-pointer hover:scale-110 transition" />
        <FaInstagram className="text-pink-200 text-3xl cursor-pointer hover:scale-110 transition" />
        <FaLinkedin className="text-blue-200 text-3xl cursor-pointer hover:scale-110 transition" />
        <FaGithub className="text-white text-3xl cursor-pointer hover:scale-110 transition" />
        <FaSkype className="text-blue-200 text-3xl cursor-pointer hover:scale-110 transition" />
      </div>

      {/* Download CV Button */} 
      <div className="text-left">
      <button className="mt-6 px-6 py-3  bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg transition">
        Download CV
      </button>
      </div>
      </>
  );
}

export default Hero;
