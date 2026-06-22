// import { motion } from "framer-motion";
// import {
//   FaGraduationCap,
//   FaBriefcase,
// } from "react-icons/fa";

// import {
//   BsCloudFill,
//   BsLaptop,
// } from "react-icons/bs";

// import { FaCode } from "react-icons/fa";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="max-w-7xl mx-auto px-6 py-28"
//     >
//       {/* Section Title */}
//       <p className="text-cyan-400 tracking-[4px] uppercase mb-4">
//         02 / About
//       </p>

//       <h2 className="text-5xl md:text-7xl font-bold mb-14">
//   Who{" "}
//   <span className="text-cyan-400">
//     I Am
//   </span>
// </h2>

//       <div className="grid lg:grid-cols-2 gap-16 items-start">

//         {/* Left Content */}
//         <div>
//           <p className="text-gray-400 text-lg leading-9">
//             I am a Computer Science graduate passionate about
//             building modern digital solutions using
//             <span className="text-cyan-400 font-semibold">
//               {" "}Python, Django and React.
//             </span>
//           </p>

//           <p className="text-gray-400 text-lg leading-9 mt-8">
//             My expertise includes developing scalable web
//             applications, database management with
//             <span className="text-cyan-400 font-semibold">
//               {" "}SQL,
//             </span>
//             cloud technologies and data analysis. I enjoy
//             transforming ideas into real-world products
//             through clean and efficient development.
//           </p>

//           <p className="text-gray-400 text-lg leading-9 mt-8">
//             With experience in
//             <span className="text-cyan-400 font-semibold">
//               {" "}Python Development,
//             </span>
//             <span className="text-purple-400 font-semibold">
//               {" "}Django Backend,
//             </span>
//             <span className="text-blue-400 font-semibold">
//               {" "}React Frontend,
//             </span>
//             <span className="text-cyan-400 font-semibold">
//               {" "}Cloud Computing
//             </span>
//             and
//             <span className="text-cyan-400 font-semibold">
//               {" "} Data Analytics,
//             </span>
//             I continuously learn new technologies and build
//             impactful solutions.
//           </p>

//           <p className="text-gray-400 text-lg leading-9 mt-8">
//             Currently available for
//             <span className="text-cyan-400 font-semibold">
//               {" "}Freelancing,
//             </span>
//             internships and software development opportunities.
//           </p>
//         </div>

//         {/* Right Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* CGPA */}
//           <motion.div
//             whileHover={{
//               scale: 1.05,
//               boxShadow:
//                 "0 0 40px rgba(34,211,238,0.4)",
//             }}
//             animate={{
//               boxShadow: [
//                 "0 0 0px rgba(34,211,238,0)",
//                 "0 0 20px rgba(34,211,238,0.2)",
//                 "0 0 0px rgba(34,211,238,0)",
//               ],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//             }}
//             className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6"
//           >
//             <FaGraduationCap className="text-cyan-400 text-3xl mb-4" />
//             <h3 className="text-3xl font-bold">
//               9.50 CGPA
//             </h3>
//             <p className="text-gray-400 mt-2">
//               B.Sc Computer Science
//             </p>
//           </motion.div>

//           {/* Cloud */}
//           <motion.div
//             whileHover={{
//               scale: 1.05,
//               boxShadow:
//                 "0 0 40px rgba(34,211,238,0.4)",
//             }}
//             animate={{
//               boxShadow: [
//                 "0 0 0px rgba(34,211,238,0)",
//                 "0 0 20px rgba(34,211,238,0.2)",
//                 "0 0 0px rgba(34,211,238,0)",
//               ],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//             }}
//             className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6"
//           >
//             <BsCloudFill className="text-cyan-400 text-3xl mb-4" />
//             <h3 className="text-3xl font-bold">
//               AZ-900
//             </h3>
//             <p className="text-gray-400 mt-2">
//               Microsoft Cloud Certified
//             </p>
//           </motion.div>

//           {/* Tech Stack */}
//           <motion.div
//             whileHover={{
//               scale: 1.05,
//               boxShadow:
//                 "0 0 40px rgba(34,211,238,0.4)",
//             }}
//             animate={{
//               boxShadow: [
//                 "0 0 0px rgba(34,211,238,0)",
//                 "0 0 20px rgba(34,211,238,0.2)",
//                 "0 0 0px rgba(34,211,238,0)",
//               ],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//             }}
//             className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6"
//           >
//             <FaCode className="text-cyan-400 text-3xl mb-4" />
//             <h3 className="text-3xl font-bold">
//               Python • Django
//             </h3>
//             <p className="text-gray-400 mt-2">
//               React • SQL • AI
//             </p>
//           </motion.div>

//           {/* Freelancing */}
//           <motion.div
//             whileHover={{
//               scale: 1.05,
//               boxShadow:
//                 "0 0 40px rgba(34,211,238,0.4)",
//             }}
//             animate={{
//               boxShadow: [
//                 "0 0 0px rgba(34,211,238,0)",
//                 "0 0 20px rgba(34,211,238,0.2)",
//                 "0 0 0px rgba(34,211,238,0)",
//               ],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//             }}
//             className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6"
//           >
//             <FaBriefcase className="text-cyan-400 text-3xl mb-4" />
//             <h3 className="text-3xl font-bold">
//               Available
//             </h3>
//             <p className="text-gray-400 mt-2">
//               Freelance 
// 
// 
// • Internship • Remote
//             </p>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }
















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