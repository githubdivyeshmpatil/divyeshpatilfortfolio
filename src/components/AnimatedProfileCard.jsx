import React from "react";
import { motion } from "framer-motion";
import profile from '../assets/img/pro.png'

const AnimatedProfileCard = () => {
  return (
    <div className="flex justify-center items-center  ">
      <motion.div
        className="relative w-96 h-96  overflow-hidden"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.9, 1, 0.9] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        {/* Rotating Border */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent rounded-full"
          style={{ borderImage: "linear-gradient(to right, #ff6600, #00ccff) 1" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        />

        {/* Profile Image */}
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover "
        />
      </motion.div>
    </div>
  );
};

export default AnimatedProfileCard;
