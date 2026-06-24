import { motion } from "framer-motion";
import {
FaLaptopCode,
FaRobot,
FaChartBar,
FaPython,
FaGraduationCap,
FaCloud,
FaEnvelope,
FaPhone,
FaMapMarkerAlt,
FaLinkedin,
FaGithub,
FaWhatsapp,
} from "react-icons/fa";

export default function ContactFooter() {
const services = [
{
icon: <FaLaptopCode />,
title: "Portfolio Websites",
desc: "Modern responsive portfolio websites for students and professionals.",
},
{
icon: <FaRobot />,
title: "AI & ML Projects",
desc: "Machine learning and AI-based academic and practical solutions.",
},
{
icon: <FaChartBar />,
title: "Data Analysis",
desc: "Data cleaning, visualization and analytics using Python.",
},
{
icon: <FaPython />,
title: "Python Development",
desc: "Desktop apps, automation tools and Python-based solutions.",
},
{
icon: <FaGraduationCap />,
title: "Academic Projects",
desc: "Student-friendly project development and guidance.",
},
{
icon: <FaCloud />,
title: "Cloud Fundamentals",
desc: "Azure cloud concepts and beginner cloud solutions.",
},
];

return (
<>
{/* HOW I CAN HELP YOU */} <section className="relative py-24 bg-slate-950 overflow-hidden"> <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"></div> <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[140px] rounded-full hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"></div>

```
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-cyan-400 tracking-[4px] uppercase">
          08 — SERVICES
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mt-3">
          How I Can{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Help You
          </span>
        </h2>

        <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
          Turning ideas into practical software solutions through
          development, analytics and modern technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            className="
            bg-slate-900/60
            backdrop-blur-xl
            border border-white/10
            rounded-3xl
            p-8
            hover:border-cyan-500/40
            hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
            transition-all duration-500
            "
          >
            <div className="
              w-16 h-16
              rounded-2xl
              flex items-center justify-center
              text-3xl
              text-cyan-400
              bg-cyan-500/10
              border border-cyan-500/20
              mb-5
            ">
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
    </div>
  </section>

  {/* CAREER GOAL */}
  <section className="py-24 bg-slate-950">
    <div className="max-w-5xl mx-auto px-6">

      <div className="
      rounded-[40px]
      bg-gradient-to-r
      from-cyan-500/10
      to-purple-500/10
      border border-cyan-500/20
      hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
      backdrop-blur-xl
      p-12
      text-center
      ">
        <p className="text-cyan-400 tracking-[4px] uppercase mb-4">
          09 — CAREER GOAL
        </p>

        <h2 className="text-5xl font-bold mb-6">
          My Career Goal 🚀
        </h2>

        <p className="text-slate-300 leading-9 text-lg">
          My goal is to build impactful software solutions,
          continuously learn emerging technologies and grow into
          a skilled Software Engineer while helping businesses
          and individuals solve real-world problems through technology.
        </p>

        <p className="text-slate-400 mt-6">
          Interested in Python Development • Machine Learning •
          Web Development • Cloud Technologies
        </p>
      </div>
    </div>
  </section>

</>

);
}
