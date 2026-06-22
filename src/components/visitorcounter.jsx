import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.countapi.xyz/hit/vaishnavi-shinde-portfolio/visits"
    )
      .then((res) => res.json())
      .then((data) => {
        setVisits(data.value);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="
      inline-flex
      items-center
      gap-3
      px-6
      py-3
      rounded-full
      bg-slate-900/60
      border border-cyan-500/20
      backdrop-blur-xl
      hover:scale-105
      hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
      transition-all
      animate-pulse
      "
    >
      <span className="text-cyan-400 text-xl">
        👁️
      </span>

      <span className="text-white font-semibold">
        {visits}+ Portfolio Visits
      </span>
    </div>
  );
}