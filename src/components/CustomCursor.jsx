import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Inner Neon Dot */}
      <div
        className="
        fixed
        pointer-events-none
        z-[9999]
        w-4
        h-4
        rounded-full
        bg-cyan-400
        shadow-[0_0_25px_rgba(34,211,238,1)]
        "
        style={{
          left: position.x - 8,
          top: position.y - 8,
        }}
      />

      {/* Outer Ring */}
      <div
        className="
        fixed
        pointer-events-none
        z-[9998]
        w-10
        h-10
        rounded-full
        border
        border-cyan-400/50
        shadow-[0_0_20px_rgba(34,211,238,0.5)]
        transition-all
        duration-75
        "
        style={{
          left: position.x - 20,
          top: position.y - 20,
        }}
      />
    </>
  );
}