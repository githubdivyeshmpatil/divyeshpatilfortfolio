import { motion } from "framer-motion";

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JAVASCRIPT", level: 90 },
  { name: "BOOTSTRAP", level: 90 },
  { name: "TAILWIND", level: 90 },
  { name: "REACT", level: 80 },
  { name: "FIREBASE", level: 70 },
  { name: "GIT", level: 70 },
  { name: "REDUX", level: 70 },
];

export default function SkillBars() {
  return (
    <div className="w-full bg-gray-900 ">
    <div className="bg-gray-900 p-10 w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6 text-center md:text-left">
        <span className="text-cyan-400">S</span>kills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <p className="text-white text-sm font-semibold mb-1">{skill.name}</p>
            <div className="bg-gray-700 rounded-full h-3 relative w-full">
              <motion.div
                className="bg-cyan-400 h-3 rounded-full absolute"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <span className="absolute right-0 top-[-20px] text-white text-xs bg-black px-2 py-1 rounded">
                {skill.level}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}