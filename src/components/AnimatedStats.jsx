import React from "react";
import { motion } from "framer-motion";

const stats = [
  { title: "Experience", value: "2+ Years" },
  { title: "Live Projects", value: "5" },
  { title: "Total Projects", value: "15+" },
  { title: "Clients", value: "10+" },
];

const AnimatedStats = () => {
  return (
    <div className="flex justify-center items-center min-h-[30vh]  bg-black text-white p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-24 gap-6 w-full max-w-5xl">
        {stats.map((stat, index) => (
          <div key={index} className="relative p-6  shadow-lg text-center overflow-hidden">
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent "
              animate={{
                borderImageSource: [
                  "linear-gradient(45deg, #ff00ff, #00ffff)",
                  "linear-gradient(45deg, #00ffff, #ff00ff)",
                ],
                borderImageSlice: [1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
              }}
            />

            {/* Content */}
            <motion.h2
              className="text-4xl font-bold relative text-orange-400 z-10"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {stat.value}
            </motion.h2>
            <p className="text-lg text-white-800 relative z-10">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStats;
