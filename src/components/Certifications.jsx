import { motion } from "framer-motion";

export default function Certifications() {
  const certificates = [
    {
      title: "Microsoft Azure AZ-900",
      issuer: "Microsoft",
      year: "2026",
      icon: "☁️",
      link: "https://drive.google.com/file/d/1_92QysSbT8SajuO6BIogODiVgoB9WhSx/view",
    },
    {
      title: "Infosys Springboard Internship",
      issuer: "Infosys",
      year: "2025",
      icon: "💼",
      link: "https://drive.google.com/file/d/1AHplYoePUoAN38TywG3uFKPqrkkAbcaA/view",
    },
    {
      title: "Data Analyst Internship",
      issuer: "Internship",
      year: "2025",
      icon: "📊",
      link: "https://drive.google.com/file/d/1X80oQDyifujkrpmNk8q73r9V-MI4F5yN/view",
    },
    {
      title: "ASP.NET MVC Foundation",
      issuer: "Certification",
      year: "2025",
      icon: "⚡",
      link: "https://drive.google.com/file/d/1O-Q7k_H_U4nXleZ2lMqbOfJSB5n8HF3T/view",
    },
    {
      title: "Java Foundation",
      issuer: "Certification",
      year: "2025",
      icon: "☕",
      link: "https://drive.google.com/file/d/1SFmq9mkJ9aZA-N5hmugJaLNbEgJOfdOD/view",
    },
    {
      title: "Python Foundation",
      issuer: "Certification",
      year: "2025",
      icon: "🐍",
      link: "https://drive.google.com/file/d/1fgZHJmCKwMZuBD5GrDir5a4aRzyPb7e7/view",
    },
    {
      title: "Python Programming",
      issuer: "Course Completion",
      year: "2025",
      icon: "🚀",
      link: "https://drive.google.com/file/d/1C3v1tqbpnrLhQVVVDnUCq5mE5yQTHP75/view",
    },
    {
      title: "Power BI Workshop",
      issuer: "Workshop",
      year: "2025",
      icon: "📈",
      link: "https://drive.google.com/file/d/1Wd4wsEdFeqUA_lBD1I9cP-cGyB3ULT0E/view",
    },
    {
      title: "Kiran Academy Internship",
      issuer: "Internship",
      year: "2025",
      icon: "🎓",
      link: "https://drive.google.com/file/d/1y5ILWi8qIzCKwab-erInZbUgHvBogJfI/view",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative py-28 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 tracking-[4px] uppercase mb-4">
            05 — CERTIFICATIONS
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            My{" "}
            <span className="text-cyan-400">
              Achievements
            </span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Certifications, internships and professional
            milestones achieved throughout my learning journey.
          </p>
        </div>

        {/* Auto Sliding Cards */}
        <div className="overflow-hidden">

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
            className="flex gap-6 w-max"
          >
            {[...certificates, ...certificates].map(
              (cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="
                  min-w-[340px]
                  bg-slate-900/60
                  backdrop-blur-xl
                  border border-cyan-500/20
                  rounded-3xl
                  p-6
                  hover:border-cyan-400
                  hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
                  transition-all duration-300
                  "
                >
                  {/* Icon */}
                  <div className="text-5xl mb-5">
                    {cert.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white">
                    {cert.title}
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    {cert.issuer}
                  </p>

                  <p className="text-slate-500 text-sm mt-1">
                    {cert.year}
                  </p>

                  {/* Button */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    w-full
                    py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-purple-600
                    hover:scale-105
                    transition-all
                    duration-300
                    "
                  >
                    View Certificate →
                  </a>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
