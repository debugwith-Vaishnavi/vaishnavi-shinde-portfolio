import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import { useState } from "react";
export default function Contact() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [result, setResult] = useState("");

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setResult("Sending...");

  const data = {
    access_key: "b6d24990-ae36-4496-a6bc-6c4b2dd7cfa0",
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  const response = await fetch(
    "https://api.web3forms.com/submit",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const res = await response.json();

  if (res.success) {
    setResult("✅ Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } else {
    setResult("❌ Something went wrong.");
  }
};
  return (
    <>
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 tracking-[4px] uppercase">
            11 — CONTACT
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="text-slate-400 mt-5">
            Open for Full-Time Opportunities, Freelancing and Collaborations.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Email */}
            <a
              href="mailto:vaishnavishinde8795@gmail.com"
              className="
              block
              bg-slate-900/60
              border border-cyan-500/20
              rounded-3xl
              p-6
              hover:border-cyan-400
              hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]
              hover:scale-[1.02]
              transition-all duration-500
              "
            >
              <div className="flex items-center gap-5">
                <FaEnvelope className="text-cyan-400 text-4xl" />

                <div>
                  <h3 className="text-2xl font-bold">Email</h3>

                  <p className="text-slate-400 mt-1">
                    vaishnavishinde8795@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+918080544855"
              className="
              block
              bg-slate-900/60
              border border-green-500/20
              rounded-3xl
              p-6
              hover:border-green-400
              hover:shadow-[0_0_35px_rgba(34,197,94,0.3)]
              hover:scale-[1.02]
              transition-all duration-500
              "
            >
              <div className="flex items-center gap-5">
                <FaPhone className="text-green-400 text-4xl" />

                <div>
                  <h3 className="text-2xl font-bold">Phone</h3>

                  <p className="text-slate-400 mt-1">
                    +91 8080544855
                  </p>
                </div>
              </div>
            </a>

            {/* Location */}
            <div
              className="
              bg-slate-900/60
              border border-purple-500/20
              rounded-3xl
              p-6
              hover:border-purple-400
              hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]
              hover:scale-[1.02]
              transition-all duration-500
              "
            >
              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-purple-400 text-4xl" />

                <div>
                  <h3 className="text-2xl font-bold">Location</h3>

                  <p className="text-slate-400 mt-1">
                    Solapur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div
              className="
              bg-gradient-to-r
              from-cyan-500/10
              to-purple-500/10
              border border-cyan-500/20
              hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
              rounded-3xl
              p-6
              "
            >
              <h3 className="text-cyan-400 font-bold text-xl">
                🟢 Currently Available
              </h3>

              <p className="text-slate-300 mt-2">
                Open for Freelancing, Full-Time Roles,
                Internship Opportunities and Collaborations.
              </p>
            </div>

          </div>
          

          {/* RIGHT SIDE FORM */}
          <div
            className="
            bg-slate-900/60
            backdrop-blur-xl
            border border-cyan-500/20
            hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
            rounded-[32px]
            p-8
            "
          >
            <h3 className="text-4xl font-bold mb-8">
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>

             <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="
  w-full
  bg-slate-800/50
  border border-cyan-500/20
  hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
  rounded-2xl
  px-6 py-5
  outline-none
  focus:border-cyan-400
  "
/>

              <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="your@email.com"
  className="
  w-full
  bg-slate-800/50
  border border-cyan-500/20
  hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
  rounded-2xl
  px-6 py-5
  outline-none
  focus:border-cyan-400
  "
/>

           <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows="7"
  placeholder="Tell me about your project..."
  className="
  w-full
  bg-slate-800/50
  border border-cyan-500/20
  hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
  rounded-2xl
  px-6 py-5
  resize-none
  outline-none
  focus:border-cyan-400
  "
/>

              <button
  type="submit"
  className="
  w-full
  py-5
  rounded-2xl
  text-lg
  font-semibold
  bg-gradient-to-r
  from-cyan-500
  via-blue-500
  to-purple-600
  hover:scale-[1.02]
  transition-all
  "
>
  Send Message →
</button>

<p className="text-center mt-4 text-cyan-400 font-medium">
  {result}
</p>

            </form>

            <p className="text-center text-slate-400 mt-5">
              Usually responds within 24 Hours 🚀
            </p>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-14">

          <a
            href="https://www.linkedin.com/in/vaishnavishinde80"
            target="_blank"
            rel="noreferrer"
            className="
            p-5 rounded-full
            bg-slate-900/60
            border border-cyan-500/20
            text-cyan-400
            hover:scale-125
            hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]
            transition-all duration-500
            "
          >
            <FaLinkedin className="text-2xl" />
          </a>

          <a
            href="https://github.com/debugwith-Vaishnavi"
            target="_blank"
            rel="noreferrer"
            className="
            p-5 rounded-full
            bg-slate-900/60
            border border-purple-500/20
            text-purple-400
            hover:scale-125
            hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]
            transition-all duration-500
            "
          >
            <FaGithub className="text-2xl" />
          </a>

          <a
            href="https://wa.me/918080544855"
            target="_blank"
            rel="noreferrer"
            className="
            p-5 rounded-full
            bg-slate-900/60
            border border-green-500/20
            text-green-400
            hover:scale-125
            hover:shadow-[0_0_35px_rgba(34,197,94,0.5)]
            transition-all duration-500
            "
          >
            <FaWhatsapp className="text-2xl" />
          </a>

        </div>

      </div>
    </section>
    {/* FOOTER */}
<footer className="relative border-t border-cyan-500/10 bg-slate-950 overflow-hidden">

  {/* Glow Effects */}
  <div className="absolute left-0 top-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
  <div className="absolute right-0 bottom-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

    {/* Top */}
    <div className="text-center">

      <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Vaishnavi Shinde
      </h3>

      <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
        Computer Science Graduate passionate about Python Development,
        Machine Learning, Web Development and Cloud Technologies.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-6">

        {[
          "Python",
          "Django",
          "React",
          "Machine Learning",
          "Azure",
          "Freelancer",
        ].map((item) => (
          <span
            key={item}
            className="
            px-4 py-2
            rounded-full
            bg-cyan-500/10
            border border-cyan-500/20
            text-cyan-300
            text-sm
            "
          >
            {item}
          </span>
        ))}
      </div>

    </div>

    {/* Divider */}
    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-10"></div>

    {/* Quick Links */}
    <div className="flex flex-wrap justify-center gap-6 text-slate-400">

      <a href="#about" className="hover:text-cyan-400 transition">
        About
      </a>

      <a href="#skills" className="hover:text-cyan-400 transition">
        Skills
      </a>

      <a href="#projects" className="hover:text-cyan-400 transition">
        Projects
      </a>

      <a href="#certificates" className="hover:text-cyan-400 transition">
        Certificates
      </a>

      <a href="#contact" className="hover:text-cyan-400 transition">
        Contact
      </a>

    </div>

    {/* Bottom */}
    <div className="text-center mt-10">

      <p className="text-slate-500">
        🚀 Available for Freelancing • Full-Time Opportunities • Collaborations
      </p>

      <p className="text-slate-600 mt-4">
        © 2026 Vaishnavi Shinde. All Rights Reserved.
      </p>

      <p className="text-slate-600 mt-2">
        Made with ❤️ using React & Tailwind CSS
      </p>

    </div>

  </div>

</footer>
<button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="
  fixed
  bottom-6
  right-6
  z-50
  w-14
  h-14
  rounded-full
  bg-gradient-to-r
  from-cyan-500
  to-purple-600
  flex
  items-center
  justify-center
  text-white
  animate-pulse
  shadow-[0_0_25px_rgba(34,211,238,0.4)]
  hover:scale-110
  hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
  transition-all
  duration-300
  "
>
  <FaArrowUp />
</button>
   </> 
  );
  
}
