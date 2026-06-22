import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaPython,
  FaReact,
  FaBriefcase,
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiLeetcode,
} from "react-icons/si";

import { BsRobot } from "react-icons/bs";

export default function FloatingIcons() {
  return (
    <>
      {/* GitHub */}
<motion.div
  animate={{
    y: [0, -20, 0],
    x: [0, 10, 0, -10, 0],
    opacity: [0.3, 1, 0.3],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
  }}
  className="absolute top-24 left-10"
>
  <FaGithub
    size={32}
    className="
      text-purple-400
      drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]
    "
  />
</motion.div>
{/* react */}
     <motion.div
  animate={{
    rotate: 360,
    scale: [1, 1.15, 1],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute top-[40%] right-10"
>
  <FaReact
    size={32}
    className="
      text-cyan-400
      drop-shadow-[0_0_20px_rgba(34,211,238,0.9)]
    "
  />
</motion.div>

      {/* Python */}
      <motion.div
  animate={{
    x: [0, 20, 0],
    opacity: [0.3, 1, 0.3],
  }}
  transition={{ duration: 8, repeat: Infinity }}
  className="absolute bottom-40 right-150"
>
  <FaPython
    size={32}
    className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]"
  />
</motion.div>

     

      {/* Django */}
     <motion.div
  animate={{
    y: [0, -20, 0],
    opacity: [0.3, 1, 0.3],
  }}
  transition={{ duration: 7, repeat: Infinity }}
  className="absolute bottom-32 right-44"
>
  <SiDjango
    size={32}
    className="text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.8)]"
  />
</motion.div>

      {/* MySQL */}
      <motion.div
  animate={{
    y: [0, 15, 0],
    opacity: [0.3, 1, 0.3],
  }}
  transition={{ duration: 9, repeat: Infinity }}
  className="absolute bottom-12 right-12"
>
  <SiMysql
    size={32}
    className="text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.8)]"
  />
</motion.div>

      {/* LeetCode */}
      <motion.div
  animate={{
    y: [0, -15, 0],
    opacity: [0.3, 1, 0.3],
  }}
  transition={{ duration: 6, repeat: Infinity }}
  className="absolute top-36 right-64"
>
  <SiLeetcode
    size={32}
    className="text-orange-400 drop-shadow-[0_0_20px_rgba(251,146,60,0.8)]"
  />
</motion.div>

      {/* Freelancing */}
      <motion.div
  animate={{
    rotate: [0, 15, 0, -15, 0],
    opacity: [0.3, 1, 0.3],
  }}
  transition={{ duration: 8, repeat: Infinity }}
  className="absolute top-44 left-72"
>
  <FaBriefcase
    size={32}
    className="text-pink-400 drop-shadow-[0_0_20px_rgba(244,114,182,0.8)]"
  />
</motion.div>

      {/* AI */}
      <motion.div
  animate={{
    y: [0, -25, 0],
    rotate: [0, 10, 0, -10, 0],
    opacity: [0.4, 1, 0.4],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
  }}
  className="absolute top-[55%] right-160"
>
  <BsRobot
    size={32}
    className="
      text-purple-400
      drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]
    "
  />
</motion.div>
    </>
  );
}