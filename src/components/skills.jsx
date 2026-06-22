import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaBriefcase,
  FaCloud,
} from "react-icons/fa";

import { SiDjango, SiMysql } from "react-icons/si";

import { BsRobot } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";

export default function Skills() {
  const skills = [
    {
      name: "Python",
      percent: 90,
      icon: <FaPython className="text-cyan-400 text-3xl" />,
    },
    {
      name: "Django",
      percent: 88,
      icon: <SiDjango className="text-cyan-400 text-3xl" />,
    },
    {
      name: "React",
      percent: 82,
      icon: <FaReact className="text-cyan-400 text-3xl" />,
    },
    {
      name: "SQL",
      percent: 85,
      icon: <SiMysql className="text-cyan-400 text-3xl" />,
    },
    {
      name: "Data Analyst",
      percent: 80,
      icon: <MdAnalytics className="text-cyan-400 text-3xl" />,
    },
    {
      name: "Machine Learning",
      percent: 75,
      icon: <BsRobot className="text-cyan-400 text-3xl" />,
    },
    {
      name: "Cloud (AZ-900)",
      percent: 70,
      icon: <FaCloud className="text-cyan-400 text-3xl" />,
    },
    {
      name: "HTML / CSS",
      percent: 92,
      icon: <FaHtml5 className="text-cyan-400 text-3xl" />,
    },
    {
      name: "Freelancing",
      percent: 85,
      icon: <FaBriefcase className="text-cyan-400 text-3xl" />,
    },
  ];

  return (
    <section
      id="skills"
      className="relative max-w-7xl mx-auto px-6 py-28"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-cyan-400 tracking-[4px] uppercase mb-4">
          02 — SKILLS
        </p>

        <h2 className="text-5xl md:text-7xl font-bold">
          Tech <span className="text-cyan-400">Arsenal</span>
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-5"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(34,211,238,0.25)",
            }}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-cyan-500/20
              rounded-3xl
              p-6
              transition-all duration-300
            "
          >
            <div className="flex items-center gap-4 mb-5">
              <div
                className="
                  w-14 h-14
                  rounded-xl
                  bg-cyan-500/10
                  border border-cyan-500/20
                  flex items-center justify-center
                "
              >
                {skill.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {skill.name}
                </h3>

                <p className="text-cyan-400">
                  {skill.percent}%
                </p>
              </div>
            </div>

            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${skill.percent}%`,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="
                  h-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-purple-500
                  rounded-full
                "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}