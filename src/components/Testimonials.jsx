import { useEffect, useState } from "react";
import { db } from "../firebase";

import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const querySnapshot = await getDocs(
      collection(db, "reviews")
    );

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setReviews(data);
  };

  const submitReview = async (e) => {
  e.preventDefault();

  if (!name || !feedback) {
    alert("Please fill all fields");
    return;
  }

  try {
    // Save review in Firebase
    await addDoc(collection(db, "reviews"), {
      name,
      feedback,
      createdAt: new Date(),
    });

    // Send email notification
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "b6d24990-ae36-4496-a6bc-6c4b2dd7cfa0",

        subject: "⭐ New Portfolio Review",

        name: name,

        message: `
Name: ${name}

Feedback:
${feedback}
        `,
      }),
    });

    setName("");
    setFeedback("");

    await fetchReviews();

    alert("Review Submitted Successfully 🚀");
  } catch (error) {
    console.error(error);
    alert("Failed to submit review.");
  }
};
  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

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
            Feedback from clients, mentors and visitors.
          </p>
        </div>

        {/* Review Form */}

        <form
          onSubmit={submitReview}
          className="
          bg-slate-900/60
          border border-cyan-500/20
          rounded-3xl
          p-8
          mb-14
          "
        >
          <h3 className="text-2xl font-bold mb-6">
            Leave A Review
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="
            w-full
            p-4
            rounded-xl
            bg-slate-800
            border border-slate-700
            mb-4
            outline-none
            hover:scale-100
      hover:border-cyan-400
      hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]
            "
          />

          <textarea
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) =>
              setFeedback(e.target.value)
            }
            rows="4"
            className="
            w-full
            p-4
            rounded-xl
            bg-slate-800
            border border-slate-700
            mb-4
            outline-none
            hover:scale-100
      hover:border-cyan-400
      hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]
            "
          />

          <button
            type="submit"
            className="
            bg-gradient-to-r
            from-cyan-500
            to-purple-600
            px-6 py-3
            rounded-full
            font-semibold
            hover:scale-105
            transition-all
            "
          >
            Submit Review
          </button>
        </form>

        {/* Moving Reviews */}

        <div className="overflow-hidden">

          <div className="flex gap-6 animate-testimonials">

            {[...reviews, ...reviews].map(
  (review, index) => (
    <div
      key={`${review.id}-${index}`}
      onClick={(e) => {
        e.currentTarget.classList.add("clicked-glow");

        setTimeout(() => {
          e.currentTarget.classList.remove(
            "clicked-glow"
          );
        }, 1000);
      }}
      className="
      min-w-[280px]
      max-w-[280px]
      bg-slate-900/70
      border border-cyan-500/20
      rounded-3xl
      p-6
      flex-shrink-0
      cursor-pointer
      hover:scale-105
      hover:border-cyan-400
      hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]
      transition-all duration-500
      // testimonial-glow
      "
    >
      <p className="text-slate-300 leading-7 text-sm">
        "{review.feedback}"
      </p>

      <h4 className="text-cyan-400 font-bold mt-5">
        {review.name}
      </h4>
    </div>
  )
)}

          </div>

        </div>

      </div>
    </section>
  );
}