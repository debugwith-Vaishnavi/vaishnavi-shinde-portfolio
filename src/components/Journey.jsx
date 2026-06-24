import { motion } from "framer-motion";

const journeyData = [
  {
    year: "2023",
    title: "Started Programming",
    description:
      "Started Bachelor of Computer Science at Sangola Mahavidyalaya. Learned C, C++, OOP concepts and built a strong programming foundation.",
    color: "cyan",
  },

  {
    year: "2024",
    title: "Web Development Journey",
    description:
      "Learned HTML, CSS, JavaScript, SQL and Database Management. Built mini projects and explored modern web technologies.",
    color: "purple",
  },

  {
    year: "2025",
    title: "Python & Django Development",
    description:
      "Focused on Python, Django, MySQL and Machine Learning. Built Edu2Job, Sorting Visualizer and Snake Game projects.",
    color: "cyan",
  },

  {
    year: "2026",
    title: "Cloud & Professional Growth",
    description:
      "Completed Microsoft Azure AZ-900 Certification and Infosys Springboard Internship. Enhanced skills in AI, Cloud and Software Development.",
    color: "purple",
  },

  {
    year: "Future →",
    title: "Software Engineer",
    description:
      "Seeking opportunities as a Python Developer, Django Developer, Data Analyst and Cloud Professional while continuously learning and building impactful solutions.",
    color: "cyan",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative py-28 px-6 bg-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 tracking-[4px] uppercase mb-4">
            04 — Journey
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            Career <span className="text-cyan-400">Journey</span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            From learning programming fundamentals to building
            real-world applications with Python, Django, AI and
            Cloud technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 transform -translate-x-1/2"></div>

          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex mb-16 ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className="
                absolute
                left-1/2
                top-10
                w-5 h-5
                rounded-full
                bg-slate-950
                border-2 border-cyan-400
                shadow-[0_0_20px_rgba(34,211,238,0.9)]
                transform -translate-x-1/2
                "
              />

              {/* Card */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -6,
                }}
                className="
                w-full md:w-[44%]
                bg-slate-900/50
                backdrop-blur-xl
                border border-cyan-500/20
                rounded-3xl
                p-6
                transition-all duration-300
                hover:border-cyan-400
                hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
                "
              >
                <span className="text-cyan-400 text-sm tracking-widest">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-8">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
