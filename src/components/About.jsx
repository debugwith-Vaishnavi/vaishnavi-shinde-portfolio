
import { motion } from "framer-motion";
import {
  FaCode,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

import { BsCloudFill } from "react-icons/bs";

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-cyan-400 tracking-[4px] uppercase mb-4">
          01 — ABOUT
        </p>

        <h2 className="text-5xl md:text-7xl font-bold">
          Who Am{" "}
          <span className="text-cyan-400">
            I
          </span>
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-5"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">

        {/* Left Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="
          bg-white/5
          backdrop-blur-xl
          border border-cyan-500/20
          rounded-[30px]
          p-8
          shadow-[0_0_30px_rgba(34,211,238,0.15)]
          hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]
          transition-all duration-500
          "
        >
          <div className="flex items-center gap-6 mb-8">

            <div
              className="
              w-24 h-24
              rounded-full
              border-2 border-cyan-400
              flex items-center justify-center
              text-3xl font-bold
              text-cyan-400
              shadow-[0_0_30px_rgba(34,211,238,0.4)]
              "
            >
              VS
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                Vaishnavi Shinde
              </h3>

              <p className="text-cyan-400 mt-1">
                Python • Django • React Developer
              </p>
            </div>
          </div>

          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-8"></div>

          <p className="text-gray-400 leading-9 text-lg">
            Passionate Computer Science graduate with
            expertise in Python, Django, React and SQL.
            I enjoy developing modern web applications,
            solving real-world problems and creating
            scalable digital solutions.
          </p>

          <p className="text-gray-400 leading-9 text-lg mt-8">
            Skilled in backend development, frontend
            technologies, cloud fundamentals and data
            analysis. Always eager to learn emerging
            technologies and build impactful products.
          </p>

          <p className="text-gray-400 leading-9 text-lg mt-8">
            Currently available for freelancing,
            internships and software development
            opportunities.
          </p>
        </motion.div>

        {/* Right Side */}
        <div className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">

            {/* Card 1 */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 35px rgba(34,211,238,0.3)",
              }}
              className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6"
            >
              <FaCode className="text-cyan-400 text-2xl mb-4" />

              <p className="text-gray-400 mb-2">
                Specialization
              </p>

              <h3 className="text-xl font-semibold">
                Python & Django
              </h3>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 35px rgba(34,211,238,0.3)",
              }}
              className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6"
            >
              <BsCloudFill className="text-cyan-400 text-2xl mb-4" />

              <p className="text-gray-400 mb-2">
                Certification
              </p>

              <h3 className="text-xl font-semibold">
                Microsoft AZ-900
              </h3>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 35px rgba(34,211,238,0.3)",
              }}
              className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6"
            >
              <FaGraduationCap className="text-cyan-400 text-2xl mb-4" />

              <p className="text-gray-400 mb-2">
                Education
              </p>

              <h3 className="text-xl font-semibold">
                B.Sc Computer Science
              </h3>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 35px rgba(34,211,238,0.3)",
              }}
              className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6"
            >
              <FaBriefcase className="text-cyan-400 text-2xl mb-4" />

              <p className="text-gray-400 mb-2">
                Availability
              </p>

              <h3 className="text-xl font-semibold">
                Open To Work
              </h3>
            </motion.div>
          </div>

          {/* Roles */}
          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6">
            <h3 className="text-gray-400 mb-4">
              Roles
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                Python Developer
              </span>

              <span className="px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                Django Developer
              </span>

              <span className="px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                React Developer
              </span>

              <span className="px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                SQL Analyst
              </span>

              <span className="px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                Cloud Learner
              </span>

              <span className="px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10">
                Freelancer
              </span>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
