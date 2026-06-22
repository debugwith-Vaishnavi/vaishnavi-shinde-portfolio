import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: false,

          background: {
            color: {
              value: "transparent",
            },
          },

          fpsLimit: 120,

          particles: {
            number: {
              value: 70,
              density: {
                enable: true,
              },
            },

            color: {
              value: ["#22d3ee", "#a855f7"],
            },

            links: {
              enable: true,
              distance: 150,
              color: "#22d3ee",
              opacity: 0.25,
              width: 1,
            },

            move: {
              enable: true,
              speed: 1.2,
              outModes: {
                default: "bounce",
              },
            },

            opacity: {
              value: 0.7,
            },

            size: {
              value: {
                min: 1,
                max: 4,
              },
            },
          },

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },

            modes: {
              grab: {
                distance: 180,
                links: {
                  opacity: 0.8,
                },
              },
            },
          },

          detectRetina: true,
        }}
      />
    </div>
  );
}