import { motion } from "framer-motion";
import {
  FaComments,
  FaPenNib,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";

export default function WorkProcess() {
  const steps = [
    {
      icon: <FaComments />,
      title: "Discuss Idea",
      desc: "Understanding project requirements and goals.",
    },
    {
      icon: <FaPenNib />,
      title: "Design",
      desc: "Creating UI/UX and planning project structure.",
    },
    {
      icon: <FaCode />,
      title: "Development",
      desc: "Building responsive and scalable solutions.",
    },
    {
      icon: <FaBug />,
      title: "Testing",
      desc: "Ensuring quality, performance and bug fixing.",
    },
    {
      icon: <FaRocket />,
      title: "Delivery",
      desc: "Project deployment and final handover.",
    },
  ];

  return (
    <section
      id="work-process"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 tracking-[4px] uppercase">
            WORK PROCESS
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mt-4">
            How I Build{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            A simple and professional workflow from idea
            discussion to final delivery.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>

          <div className="grid md:grid-cols-5 gap-8 relative z-10">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  y: -10,
                }}
                className="
                bg-slate-900/70
                backdrop-blur-xl
                border border-cyan-500/20
                rounded-3xl
                p-6
                text-center
                hover:border-cyan-400
                hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
                transition-all duration-500
                "
              >
                <div
                  className="
                  w-16 h-16
                  mx-auto
                  rounded-2xl
                  flex items-center justify-center
                  text-3xl
                  text-cyan-400
                  bg-cyan-500/10
                  border border-cyan-500/20
                  mb-5
                  "
                >
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-sm leading-6">
                  {step.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}