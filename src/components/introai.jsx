import { motion } from "framer-motion";
import { useState } from "react";

export default function IntroAI() {
  const [messages, setMessages] = useState([
  {
    role: "assistant",
    text: `👋 Welcome!

I'm Vaishnavi AI Assistant.

You can ask me about:

🚀 Skills
📂 Projects
🏆 Certificates
🎓 Education
💼 Experience
🏢 Internships
🌱 Fresher Status
💻 Freelancing
📞 Contact
📄 Resume

Try clicking the quick buttons below 👇`,
  },
]);

  const [input, setInput] = useState("");

  const handleSend = () => {
  if (!input.trim()) return;

  let reply = "";
  const question = input.toLowerCase();

  if (question.includes("about")) {
    reply = "👋 Hi, I'm Vaishnavi Shinde. A Computer Science graduate passionate about Python, Django, AI, Machine Learning and Cloud Technologies.";
  }

  else if (question.includes("skills")) {
    reply = "🚀 Skills: Python, C++, Java, Oracle SQL, HTML, CSS, JavaScript, Django, Machine Learning, Microsoft Azure (AZ-900).";
  }

  else if (question.includes("projects")) {
    reply = "📂 Projects: Ed2Job (ML Job Prediction System), GUI Representation of Sorting Algorithms using Python Tkinter.";
  }

  else if (
    question.includes("certificate") ||
    question.includes("certificates")
  ) {
    reply = "🏆 Certifications: Microsoft Azure AZ-900, Python Foundation, Java Foundation, Python Programming Course, Data Analyst Internship.";
  }

  else if (question.includes("education")) {
    reply = "🎓 B.Sc Computer Science, Sangola Mahavidyalaya (2023-2026) with 85.21%.";
  }

  else if (question.includes("experience")) {
    reply = "💼 Fresher with practical experience through internships, certifications and academic projects.";
  }

  else if (
    question.includes("internship") ||
    question.includes("internships")
  ) {
    reply = "🏢 Internships: Infosys Springboard Virtual Internship 6.0 and Axcentra Data Analyst Internship.";
  }

  else if (question.includes("fresher")) {
    reply = "🌱 Yes, I am a fresher and currently seeking my first full-time software development opportunity.";
  }

  else if (
    question.includes("freelancing") ||
    question.includes("freelance")
  ) {
    reply = "💼 Available for Python Development, Portfolio Websites, Web Development, Data Analysis and Academic Projects.";
  }

  else if (question.includes("contact")) {
    reply = "📞 Email: vaishnavishinde8795@gmail.com | Phone: +91 8080544855";
  }

  else if (question.includes("resume")) {
    reply = "📄 Resume is available through the Download Resume button.";
  }

  else {
    reply =
      "🤖 Try asking: About, Skills, Projects, Certificates, Education, Experience, Internships, Fresher, Freelancing, Contact or Resume.";
  }

  setMessages((prev) => [
    ...prev,
    { role: "user", text: input },
    { role: "assistant", text: reply },
  ]);

  setInput("");
};

  return (
    <section
      id="intro-ai"
    className="relative py-16 bg-slate-950 overflow-hidden"
    >
      {/* Glow */}
      {/* <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[140px] rounded-full"></div> */}

      <div className="max-w-7xl mx-auto px-6">
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[140px] rounded-full"></div>

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 tracking-[4px] uppercase">
            06 — INTRODUCTION & AI
          </p>

          <h2 className="text-4xl md:text-7xl font-bold mt-3">
            Meet{" "}
            <span className="text-cyan-400">
              Vaishnavi
            </span>
          </h2>

          <p className="text-slate-400 mt-4">
            Watch my introduction and interact with my AI assistant.
          </p>
        </div>

      <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

          {/* LEFT VIDEO */}
<motion.div
  whileHover={{ scale: 1.02 }}
  className="
  relative
  overflow-hidden
  rounded-3xl
  bg-slate-900/60
  backdrop-blur-xl
  border border-cyan-500/20
  hover:border-cyan-400
  hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
  transition-all duration-500
  "
>
  <video
  controls
  width="100%"
  height="450"
  title="Introduction Video"
  className="w-full h-[450px] object-cover"
>
  <source
    src={`${import.meta.env.BASE_URL}videos/intro.mp4`}
    type="video/mp4"
  />
</video>

  {/* Overlay Content */}
<div className="absolute bottom-4 left-4 right-4">
  <div className="
    bg-slate-950/85
    backdrop-blur-xl
    rounded-2xl
    p-4
    border border-cyan-500/20
    shadow-[0_0_30px_rgba(34,211,238,0.15)]
  ">
    
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-2xl font-bold text-cyan-400">
          🎤 Meet Vaishnavi
        </h3>

        <p className="text-slate-400 text-sm mt-1">
          Python Developer • AI Enthusiast • Freelancer
        </p>
      </div>

      <div className="
        px-3 py-1
        rounded-full
        bg-green-500/10
        border border-green-500/20
        text-green-400
        text-xs
      ">
        Available
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mt-3">
      {[
        "Python",
        "Django",
        "React",
        "SQL",
        "Azure",
        "AI",
      ].map((skill) => (
        <span
          key={skill}
          className="
            px-3 py-1
            rounded-full
            text-xs
            bg-cyan-500/10
            border border-cyan-500/20
            text-cyan-300
            hover:bg-cyan-500/20
            transition
          "
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>
</motion.div>
          {/* RIGHT AI CHAT */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="
            bg-slate-900/60
            backdrop-blur-xl
            border border-purple-500/20
            rounded-3xl
            p-6
            hover:border-purple-400
            hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
            transition-all duration-500
            "
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🤖</div>

              <div>
                <h3 className="text-3xl font-bold">
                  Ask Vaishnavi AI
                </h3>

                <p className="text-slate-400">
                  Personal AI Assistant
                </p>
              </div>
            </div>

            {/* Chat Area */}
            <div
  className="
  h-[300px]
  overflow-y-auto
  rounded-2xl
  bg-slate-950/60
  border border-white/10
  p-4
  space-y-4
  "
>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-cyan-500 text-white"
                        : "bg-slate-800 text-slate-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-3 mt-5">

             <input
               type="text"
                value={input}
                onChange={(e) =>
                setInput(e.target.value)
                  }
                onKeyDown={(e) => {
                if (e.key === "Enter") {
                handleSend();
                }
            }}
           placeholder="Ask anything about Vaishnavi..."
          className="
          flex-1
          bg-slate-950
          border border-white/10
          rounded-xl
          px-4 py-3
          outline-none
          focus:border-cyan-400
          "
          />

              <button
                onClick={handleSend}
                className="
                px-6
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-purple-600
                hover:scale-105
                transition-all
                "
              >
                Send
              </button>
            </div>

            {/* Quick Questions */}
<div className="flex flex-wrap gap-2 mt-5">

  {[
    "About",
    "Skills",
    "Projects",
    "Certificates",
    "Education",
    "Experience",
    "Internships",
    "Fresher",
    "Freelancing",
    "Contact",
    "Resume",
  ].map((q) => (
    <button
      key={q}
      onClick={() => setInput(q)}
      className="
      text-xs
      px-4 py-2
      rounded-full
      bg-purple-500/10
      border border-purple-500/20
      hover:bg-purple-500/20
      hover:border-purple-400
      hover:scale-105
      transition-all duration-300
      "
    >
      {q}
    </button>
  ))}

</div>
          </motion.div>

        </div>
      </div>

     <div className="mt-6 flex flex-wrap justify-center gap-3">

  <div className="
    px-4 py-3
    w-[220px]
    rounded-xl
    bg-cyan-500/10
    border border-cyan-500/20
    hover:-translate-y-1
    hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
    transition-all
  ">
    <h4 className="text-cyan-400 font-bold text-sm">
      🚀 Fast Delivery
    </h4>
    <p className="text-slate-400 text-xs mt-1">
      Quick and quality development.
    </p>
  </div>

  <div className="
    px-4 py-3
    w-[220px]
    rounded-xl
    bg-purple-500/10
    border border-purple-500/20
    hover:-translate-y-1
    hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
    transition-all
  ">
    <h4 className="text-purple-400 font-bold text-sm">
      💡 Modern Solutions
    </h4>
    <p className="text-slate-400 text-xs mt-1">
      AI & Web Applications.
    </p>
  </div>

  <div className="
    px-4 py-3
    w-[220px]
    rounded-xl
    bg-cyan-500/10
    border border-cyan-500/20
    hover:-translate-y-1
    hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
    transition-all
  ">
    <h4 className="text-cyan-400 font-bold text-sm">
      🎓 Student Projects
    </h4>
    <p className="text-slate-400 text-xs mt-1">
      Guidance & Academic Projects.
    </p>
  </div>

  <div className="
    px-4 py-3
    w-[220px]
    rounded-xl
    bg-green-500/10
    border border-green-500/20
    hover:-translate-y-1
    hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]
    transition-all
  ">
    <h4 className="text-green-400 font-bold text-sm">
      💼 Freelancing
    </h4>
    <p className="text-slate-400 text-xs mt-1">
      Web & AI Development.
    </p>
  </div>

</div>
    </section>
  );
}