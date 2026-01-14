import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Fireworks() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 0 },
          color: { value: ["#ff5ea8", "#ffd166", "#7c5cff"] },
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: { min: 2, max: 4 } },
          move: {
            enable: true,
            speed: 8,
            direction: "none",
            outModes: "destroy",
          },
        },
        emitters: {
          direction: "top",
          rate: { delay: 0.2, quantity: 6 },
          size: { width: 0, height: 0 },
        },
      }}
    />
  );
}
