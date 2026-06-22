export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 tracking-[4px] uppercase">
            10 — TESTIMONIALS
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mt-4">
            What People Say{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="text-slate-400 mt-5">
            Feedback from mentors, internship experience and project guidance.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
            <div
  className="
  bg-slate-900/60
  border border-cyan-500/20
  rounded-3xl
  p-6
  hover:scale-105
  hover:border-cyan-400
  hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
 
  transition-all duration-500
  "
>
  <p className="text-slate-300 leading-7">
    "Vaishnavi demonstrates excellent problem-solving skills
    and dedication towards learning new technologies."
  </p>

  <h4 className="text-cyan-400 font-bold mt-6">
    Academic Mentor
  </h4>
</div>

<div
  className="
  bg-slate-900/60
  border border-purple-500/20
  rounded-3xl
  p-6
  hover:scale-105
  hover:border-purple-400
  hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]
  transition-all duration-500
  "
>
  <p className="text-slate-300 leading-7">
    "Her project execution, technical understanding and
    eagerness to learn are impressive for a fresher."
  </p>

  <h4 className="text-purple-400 font-bold mt-6">
    Internship Reviewer
  </h4>
</div>
<div
  className="
  bg-slate-900/60
  border border-green-500/20
  rounded-3xl
  p-6
  hover:scale-105
  hover:border-green-400
  hover:shadow-[0_0_35px_rgba(34,197,94,0.25)]
  transition-all duration-500
  "
>
  <p className="text-slate-300 leading-7">
    "Professional communication, dedication and quick
    learning make her a valuable team member."
  </p>

  <h4 className="text-green-400 font-bold mt-6">
    Project Guide
  </h4>
</div>

        </div>

      </div>
    </section>
  );
}