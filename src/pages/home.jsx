import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Skills from "../components/Skills";
import Projects from "../components/projects.jsx";
import About from "../components/About";
import Journey from "../components/Journey";
import Certifications from "../components/Certifications";
import FloatingIcons from "../components/FloatingIcons.jsx";
import WhyHireMe from "../components/WhyHireMe";
import IntroAI from "../components/IntroAI";
import ContactFooter from "../components/ContactFooter";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import CustomCursor from "../components/CustomCursor";
// import VisitorCounter from "../components/VisitorCounter";
import ParticlesBackground from "../components/ParticlesBackground";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
       
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            VS
          </h1>

          <ul className="hidden md:flex gap-8">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

         <a
    href="#contact"
    className="
    bg-gradient-to-r
    from-cyan-500
    to-purple-600
    px-6 py-3
    rounded-full
    font-semibold
    hover:scale-110
    hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]
    transition-all duration-500
    "
  >
    🚀 Hire Me
  </a>
        </div>
      </nav>

    

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 min-h-screen flex flex-col lg:flex-row items-center justify-between pt-28 overflow-hidden">
      
<ParticlesBackground/> 
        {/* Floating Background Icons */}
        {/* <div className="mt-8 flex justify-center">
  <VisitorCounter />
</div> */}
<div className="absolute inset-0 overflow-hidden z-0">

  <motion.div
    animate={{
      x: [0, 100, 0],
      y: [0, -50, 0],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
    }}
    className="
      absolute
      top-0
      left-0
      w-[500px]
      h-[500px]
      rounded-full
      bg-cyan-500/20
      blur-[140px]
    "
  />

  <motion.div
    animate={{
      x: [0, -100, 0],
      y: [0, 50, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
    }}
    className="
      absolute
      bottom-0
      right-0
      w-[500px]
      h-[500px]
      rounded-full
      bg-purple-500/20
      blur-[140px]
    "
  />

</div>
        <FloatingIcons />
      


        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 z-10"
        >
          <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
            🟢 Available for Freelance Projects
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-6">
            Hi, I'm
          </h2>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Vaishnavi Shinde
          </h1>

          <div className="text-cyan-400 text-2xl md:text-3xl font-semibold mt-5">
            <ReactTyped
              strings={[
                "AI Developer",
                "SQL Analyst",
                "Django Developer",
                "React Developer",
                "Python Developer",
                "Freelance Developer",
              ]}
              typeSpeed={70}
              backSpeed={40}
              loop
            />
          </div>

          <p className="text-gray-400 mt-6 max-w-xl leading-8">
            I build modern web applications, AI-powered solutions,
            and responsive websites that help businesses grow and
            solve real-world problems.
          </p>
<div className="flex gap-4 mt-8">

  {/* WhatsApp */}
  <a
    href="https://wa.me/918080544855"
    target="_blank"
    rel="noreferrer"
    className="
    p-4 rounded-full
    bg-slate-900/60
    border border-green-500/20
    text-green-400
    animate-pulse
    hover:animate-none
    hover:scale-125
    hover:border-green-400
    hover:shadow-[0_0_35px_rgba(34,197,94,0.5)]
    transition-all duration-500
    "
  >
    <FaWhatsapp className="text-xl" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/vaishnavishinde80"
    target="_blank"
    rel="noreferrer"
    className="
    p-4 rounded-full
    bg-slate-900/60
    border border-cyan-500/20
    text-cyan-400
    animate-pulse
    hover:animate-none
    hover:scale-125
    hover:border-cyan-400
    hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]
    transition-all duration-500
    "
  >
    <FaLinkedin className="text-xl" />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/debugwith-Vaishnavi"
    target="_blank"
    rel="noreferrer"
    className="
    p-4 rounded-full
    bg-slate-900/60
    border border-purple-500/20
    text-purple-400
    animate-pulse
    hover:animate-none
    hover:scale-125
    hover:border-purple-400
    hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]
    transition-all duration-500
    "
  >
    <FaGithub className="text-xl" />
  </a>

  {/* Email */}
  <a
    href="mailto:vaishnavishinde8795@gmail.com"
    className="
    p-4 rounded-full
    bg-slate-900/60
    border border-red-500/20
    text-red-400
    animate-pulse
    hover:animate-none
    hover:scale-125
    hover:border-red-400
    hover:shadow-[0_0_35px_rgba(248,113,113,0.5)]
    transition-all duration-500
    "
  >
    <FaEnvelope className="text-xl" />
  </a>

</div>

          {/* Buttons */}
<div className="flex flex-wrap gap-4 mt-8">

  {/* Hire Me */}
  <a
    href="#contact"
    className="
    bg-gradient-to-r
    from-cyan-500
    to-purple-600
    px-6 py-3
    rounded-full
    font-semibold
    hover:scale-110
    hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]
    transition-all duration-500
    "
  >
    🚀 Hire Me
  </a>

  {/* View Resume */}
 <a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="
  bg-gradient-to-r
  from-cyan-500
  to-purple-600
  px-6 py-3
  rounded-full
  font-semibold
  hover:scale-110
  hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]
  transition-all duration-500
  "
>
  👀 View Resume
</a>

  {/* Download Resume */}
  <a
  href="/resume.pdf"
  download
  className="
  bg-gradient-to-r
  from-cyan-500
  to-purple-600
  px-6 py-3
  rounded-full
  font-semibold
  hover:scale-110
  hover:shadow-[0_0_35px_rgba(168,85,247,0.4)]
  transition-all duration-500
  "
>
  📄 Download Resume
</a>

</div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center mt-16 lg:mt-0 z-10"
        >
          <div className="relative flex items-center justify-center">

            {/* Glow */}
            <div className="absolute w-[450px] h-[450px] bg-cyan-500/10 blur-[150px] rounded-full"></div>

<div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full"></div>

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
              className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-slate-950"></div>
            </motion.div>

            {/* Profile Image */}
            <div className="relative flex items-center justify-center">

  {/* Outer Glow */}
  <div className="
    absolute
    w-[420px]
    h-[420px]
    rounded-full
    bg-cyan-500/20
    blur-[120px]
    animate-pulse
  "></div>

  {/* Purple Glow */}
  <div className="
    absolute
    w-[350px]
    h-[350px]
    rounded-full
    bg-purple-500/20
    blur-[100px]
    animate-pulse
  "></div>

  {/* Rotating Ring 1 */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      repeat: Infinity,
      duration: 12,
      ease: "linear",
    }}
    className="
      absolute
      w-[360px]
      h-[360px]
      rounded-full
      border-2
      border-cyan-400/40
    "
  />

  {/* Rotating Ring 2 */}
  <motion.div
    animate={{ rotate: -360 }}
    transition={{
      repeat: Infinity,
      duration: 18,
      ease: "linear",
    }}
    className="
      absolute
      w-[330px]
      h-[330px]
      rounded-full
      border
      border-purple-400/30
      border-dashed
    "
  />

  {/* Image Container */}
  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    whileHover={{
      scale: 1.08,
    }}
    className="relative z-10"
    
  >
    
    <img
      src="/profile.jpg"
      alt="Vaishnavi Shinde"
      className="
        w-[300px]
        h-[300px]
        object-cover
        rounded-full
        border-4
        border-cyan-400/30
        shadow-[0_0_50px_rgba(34,211,238,0.5)]
        transition-all
        duration-500
      "
      
    />
  </motion.div>

</div>
</div>

        </motion.div>
      </section>
        <About />
       <Skills />
       <Projects />
        <Journey />
        <Certifications />
        <IntroAI />
        <WhyHireMe />
        <ContactFooter />
        <Testimonials />
        <Contact />
        <CustomCursor />
      </div>
  );
}










<section
  id="about"
  className="max-w-7xl mx-auto px-6 py-24 text-white"
>
  <h2 className="text-4xl font-bold mb-10 text-center">
    About Me
  </h2>

  <div className="grid md:grid-cols-2 gap-10">
    <div>
      <p className="text-gray-400 leading-8">
        I'm Vaishnavi Shinde, a Computer Science graduate with
        strong skills in Python, Django, React, SQL and AI.
        I enjoy building modern web applications and solving
        real-world problems through technology.
      </p>
    </div>

    <div className="space-y-4">
      <div className="bg-white/5 p-4 rounded-xl">
        🎓 BCS Graduate
      </div>

      <div className="bg-white/5 p-4 rounded-xl">
        📊 CGPA: 9.55
      </div>

      <div className="bg-white/5 p-4 rounded-xl">
        ☁️ Microsoft AZ-900 Certified
      </div>

      <div className="bg-white/5 p-4 rounded-xl">
        💼 Infosys Springboard Internship
      </div>
    </div>
  </div>
</section>



    