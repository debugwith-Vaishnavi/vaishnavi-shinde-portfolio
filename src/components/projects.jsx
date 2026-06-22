import { motion } from "framer-motion";
import {
  FaRobot,
  FaCode,
  FaLaptopCode,
  FaGamepad,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Edu2Job",
      icon: <FaRobot />,
      description:
        "Machine Learning based web application that predicts suitable job roles based on educational background and skills.",
      tech: ["Python", "Django", "Machine Learning", "SQL"],
      link: "https://edu2job-education-to-job-role-prediction-gk5d.onrender.com",
    },
    {
      title: "Sorting Visualizer",
      icon: <FaCode />,
      description:
        "Interactive visualization of Bubble Sort, Selection Sort, Merge Sort and Quick Sort algorithms.",
      tech: ["C++", "DSA", "OOP", "Algorithms"],
      link: "#",
    },
   {
  title: "Snake Game",
  icon: <FaGamepad />,
  description:
    "Classic Snake Game developed using Python Tkinter with score tracking, collision detection and smooth controls.",
  tech: ["Python", "Tkinter", "GUI", "Game Dev"],
   link: "/videos/snake-game.mp4",
  video: "/videos/snake-game.mp4",
},
    {
      title: "Portfolio Website",
      icon: <FaLaptopCode />,
      description:
        "Modern responsive portfolio built with React, Tailwind CSS and Framer Motion featuring smooth animations.",
      tech: ["React", "Tailwind", "Framer Motion", "UI/UX"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 tracking-[4px] uppercase mb-4">
            03 — PROJECTS
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow: "0 0 30px rgba(34,211,238,0.20)",
              }}
              className="
              bg-slate-900/70
              border border-cyan-500/20
              rounded-3xl
              overflow-hidden
              backdrop-blur-xl
              transition-all duration-300
              "
            >
              {/* Top */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-6 border-b border-cyan-500/10">

                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xl">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mt-5">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Project Video */}
{project.video && (
  <video
    autoPlay
    muted
    loop
    playsInline
    controls
    className="
    w-full
    h-56
    object-cover
    rounded-2xl
    mb-5
    border border-cyan-500/20
    hover:border-cyan-400
    hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
    transition-all duration-500
    "
  >
    <source
      src={project.video}
      type="video/mp4"
    />
  </video>
)}
                <p className="text-slate-400 leading-7 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                      px-3 py-1
                      rounded-lg
                      bg-cyan-500/10
                      border border-cyan-500/20
                      text-cyan-400
                      text-sm
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  block text-center
                  w-full
                  py-3
                  rounded-xl
                  border border-cyan-500/30
                  text-cyan-400
                  hover:bg-cyan-500/10
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                  transition-all
                  "
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}