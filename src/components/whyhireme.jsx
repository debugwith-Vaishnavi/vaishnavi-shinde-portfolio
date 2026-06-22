import { motion } from "framer-motion";
import {
  FaBrain,
  FaRocket,
  FaLaptopCode,
  FaCloud,
  FaBriefcase,
  FaBullseye,
} from "react-icons/fa";

export default function WhyHireMe() {
  const reasons = [
    {
      icon: <FaBrain />,
      title: "Problem Solver",
      desc: "Strong logical thinking and analytical skills developed through programming, projects and real-world challenges.",
      color: "cyan",
    },
    {
      icon: <FaRocket />,
      title: "Quick Learner",
      desc: "Fast adaptation to new technologies, tools and frameworks with a passion for continuous learning.",
      color: "purple",
    },
    {
      icon: <FaLaptopCode />,
      title: "Practical Projects",
      desc: "Built machine learning, web development and desktop applications using modern technologies.",
      color: "blue",
    },
    {
      icon: <FaCloud />,
      title: "Azure Certified",
      desc: "Microsoft Azure Fundamentals (AZ-900) certified with a solid understanding of cloud concepts.",
      color: "cyan",
    },
    {
      icon: <FaBriefcase />,
      title: "Internship Experience",
      desc: "Completed Infosys Springboard and Data Analyst internships with practical industry exposure.",
      color: "green",
    },
    {
      icon: <FaBullseye />,
      title: "Career Focused",
      desc: "Dedicated to building impactful software solutions and growing into a skilled software engineer.",
      color: "purple",
    },
  ];

  return (
    <section
      id="why-hire-me"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 tracking-[4px] uppercase">
            07 — WHY HIRE ME
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mt-3">
            Why{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Hire Me?
            </span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            A passionate Computer Science graduate with strong technical
            foundations, hands-on projects, certifications and internship
            experience, ready to contribute from day one.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
              bg-slate-900/60
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-cyan-400/40
              hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
              transition-all duration-500
              "
            >
              <div
                className="
                w-16 h-16
                rounded-2xl
                flex items-center justify-center
                text-3xl
                text-cyan-400
                bg-cyan-500/10
                border border-cyan-500/20
                mb-5
                "
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="
          mt-16
          rounded-3xl
          p-10
          text-center
          bg-gradient-to-r
          from-cyan-500/10
          to-purple-500/10
          border border-cyan-500/20
          hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
          backdrop-blur-xl
          "
        >
          <h3 className="text-3xl font-bold text-white">
            Ready to Contribute from Day One 🚀
          </h3>

          <p className="text-slate-400 mt-4 max-w-3xl mx-auto leading-8">
            As a fresher with strong technical skills, internship experience,
            cloud certification and practical development projects, I am eager
            to join a dynamic team, solve real-world problems and continuously
            grow as a software professional.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              Python
            </span>

            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
              Django
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
              Machine Learning
            </span>

            <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
              Azure Certified
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}